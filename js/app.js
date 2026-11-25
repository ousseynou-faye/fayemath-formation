/* =====================================================================
   FayeMath Formation — js/app.js
   Navigation (menu, routes), minuteur d'étude et réactions aux clics
   et aux saisies. C'est le seul fichier qui modifie la page.
   ===================================================================== */
"use strict";

/* ---------- thème clair / sombre ---------- */
function appliquerTheme(){
  const r = document.documentElement;
  if (etat.theme) r.dataset.theme = etat.theme; else delete r.dataset.theme;
  if (etat.taille) r.dataset.taille = etat.taille; else delete r.dataset.taille;      // taille du texte
}

/* ---------- route : la partie de l'adresse après # ---------- */
function route(){ const [nom, a, b] = (location.hash || "#accueil").slice(1).split("/"); return {nom, a, b}; }

/* Choisit l'écran à afficher selon la route ; renvoie {html, pole, mod} */
function ecran(){
  const r = route(), m = MOD(r.a), pp = POLE(r.a), v = MODULES[+r.a - 1];
  const p = pp || (r.a === "X" && (r.nom === "bilan" || r.nom === "attestation") ? FINAL : null);   // "X" = examen final
  switch (r.nom){
    case "pole":        if (pp) return {html:vuePole(pp), pole:pp.id}; break;
    case "module":      if (m) return {html:vueModule(m), pole:m.pole, mod:m.id}; break;
    case "lecon":       { const x = LECON(r.a); if (x) return {html:vueLecon(x), pole:x.m.pole, mod:x.m.id}; break; }
    case "etape":       if (m){ const f = {cas:vueCas, atelier:vueAtelier, outil:vueOutil, quiz:vueQuiz}[r.b]; if (f) return {html:f(m), pole:m.pole, mod:m.id}; } break;
    case "imprimer":    if (m) return {html:vueImprimer(m), pole:m.pole, mod:m.id}; break;
    case "bilans":      return {html:vueBilans(), cle:"bilans"};
    case "bilan":       if (p) return {html:vueBilan(p), cle:"bilans"}; break;
    case "attestation": if (p) return {html:vueAttestation(p), cle:"bilans"}; break;
    case "revision":    return {html:vueRevision(), cle:"revision"};
    case "outils":      return {html:vueOutils(), cle:"outils"};
    case "actions":     return {html:vueActions(), cle:"actions"};
    case "journal":     return {html:vueJournal(), cle:"journal"};
    case "ecrits":      return {html:vueEcrits(), cle:"ecrits"};
    case "glossaire":   return {html:vueGlossaire(), cle:"glossaire"};
    case "favoris":     return {html:vueFavoris(), cle:"favoris"};
    case "situations":  return {html:vueSituations(r.a), cle:"situations"};
    case "aide":        return {html:vueAide(), cle:"aide"};
    case "recherche":   return {html:vueRecherche(), cle:"recherche"};
    case "sauvegarde":  return {html:vueSauvegarde(), cle:"sauvegarde"};
    case "veille":      return v ? {html:vueVeilleModule(v), cle:"veille"} : {html:vueVeille(), cle:"veille"};
    case "programme":   return {html:vueProgramme(), cle:"veille"};
    case "mediatheque": return {html:vueMediatheque(), cle:"mediatheque", pole:"E"};
  }
  return {html:vueAccueil(), cle:"accueil"};
}

/* ---------- menu de gauche ---------- */
function rendreNav(e){
  /* un pôle dans le menu, avec ses modules dépliés quand on s'y trouve */
  const navPole = p => lien("pole/"+p.id, p.id, h(p.titre), progPole(p.id)+" %", e.pole === p.id && !e.mod && e.cle !== "mediatheque", modsPole(p.id).every(valide), "nav-pole")
    + (e.pole === p.id ? modsPole(p.id).map(m => lien("module/"+m.id, m.n, h(m.court), lues(m)+"/"+m.lecons.length, e.mod === m.id, valide(m), "nav-sous")).join("") : "");
  const lien = (cible, num, txt, extra, actif, fini, cls) => `<a class="nav-lien ${cls || ""}" href="#${cible}" ${actif ? 'aria-current="page"' : ""}><span class="nav-num${fini ? " fini" : ""}">${num}</span><span class="nav-txt">${txt}</span>${extra ? `<span class="nav-pct">${extra}</span>` : ""}</a>`;
  const A = actions(), due = cartes().filter(carteDue).length;
  document.getElementById("nav").innerHTML = `<div class="marque"><img src="logo.png" alt=""><div>Faye<span>Math</span> Formation</div></div><div class="sous-marque">La Réussite se construit à Domicile</div>
    ${lien("accueil","T","Tableau de bord", progGlobale()+" %", e.cle === "accueil")}
    <div class="nav-sep">Parcours du fondateur</div>
    ${POLES_FONDATEUR.map(navPole).join("")}
    <div class="nav-sep">Parcours du formateur en ligne</div>
    ${POLES_FORMATEUR.map(navPole).join("")}
    ${lien("mediatheque","M","Médiathèque", toutesRes().filter(r => etat.resV[r.id]).length+"/"+toutesRes().length, e.cle === "mediatheque")}
    <div class="nav-sep">Études de cas</div>
    ${lien("veille","V","Entreprises modèles", nb(ESSENTIELLES)+"/"+ESSENTIELLES.length, e.cle === "veille")}
    <div class="nav-sep">S'entraîner</div>
    ${lien("revision","R","Révision espacée", due ? due+" dues" : "", e.cle === "revision")}
    ${lien("bilans","B","Bilans et attestations", FM.poles.filter(p => poleValide(p.id)).length+"/"+FM.poles.length, e.cle === "bilans")}
    <div class="nav-sep">Appliquer</div>
    ${lien("situations","!","Guide des situations", FM.situations.length, e.cle === "situations")}
    ${lien("outils","O","Boîte à outils", "", e.cle === "outils")}
    ${lien("actions","A","Plan d'action", A.filter(a => statut(a.k) === "fait").length+"/"+A.length, e.cle === "actions")}
    ${lien("journal","J","Journal de bord", "", e.cle === "journal")}
    ${lien("ecrits","N","Mes écrits", "", e.cle === "ecrits")}
    <div class="nav-sep">Références</div>
    ${lien("favoris","★","Mes favoris", Object.keys(etat.fav).length || "", e.cle === "favoris")}
    ${lien("glossaire","G","Glossaire", "", e.cle === "glossaire")}
    ${lien("aide","?","Mode d'emploi", "", e.cle === "aide")}
    ${lien("sauvegarde","S","Sauvegarde et réglages", "", e.cle === "sauvegarde")}
    <div class="minuteur"><div>Minuteur d'étude</div><output id="chrono">${fmtChrono()}</output>
      <button type="button" data-a="chrono">${chronoOn ? "Arrêter et enregistrer" : "Démarrer une séance"}</button></div>
    <div class="etat" id="etat">${stockageOK ? "Progression enregistrée sur cet appareil" : "Enregistrement impossible : exportez une sauvegarde"}</div>
    <div class="etat" style="padding-top:2px">Version ${APP_VERSION}</div>`;
}

/* ---------- affichage ---------- */
let derniereRoute = "";
function rendre(){
  const e = ecran(), ici = location.hash;
  document.getElementById("vue").innerHTML = e.html;
  rendreNav(e);
  document.getElementById("nav").classList.remove("ouvert");
  if (ici !== derniereRoute){
    const r = route(), cible = r.nom === "situations" && r.a && document.getElementById(r.a);
    if (cible && cible.scrollIntoView) cible.scrollIntoView({block:"start"}); else window.scrollTo(0,0);
    derniereRoute = ici;
  }   // on ne remonte en haut que lors d'un changement d'écran
}

/* ---------- minuteur d'étude ---------- */
let chronoSec = 0, chronoOn = null;
const fmtChrono = () => String(Math.floor(chronoSec/60)).padStart(2,"0") + ":" + String(chronoSec%60).padStart(2,"0");
function basculerChrono(){
  if (chronoOn){                         // arrêt : les minutes rejoignent le temps d'étude du jour
    clearInterval(chronoOn); chronoOn = null;
    const min = Math.round(chronoSec/60); if (min){ etat.temps[auj()] = (etat.temps[auj()] || 0) + min; sauver(); }
    chronoSec = 0;
  } else chronoOn = setInterval(() => { chronoSec++; const el = document.getElementById("chrono"); if (el) el.textContent = fmtChrono(); }, 1000);
  rendre();
}

/* ---------- clics : chaque bouton porte data-a="nom de l'action" ---------- */
const ACTIONS = {
  menu(){ document.getElementById("nav").classList.toggle("ouvert"); },
  imprimer(){ window.print(); },
  theme(){ const sombre = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").includes("dark"); etat.theme = sombre ? "light" : "dark"; appliquerTheme(); sauver(); },
  chrono(){ basculerChrono(); },
  lire(d){ etat.lu[d.id] = auj(); sauver(); location.hash = suiteLecon(LECON(d.id)).href; },
  "voir-cas"(d){ etat.casVu[d.id] = true; sauver(); rendre(); },
  "copier-outil"(d){ const txt = texteOutil(MOD(d.id).outil), msg = document.getElementById("msg-copie");
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => msg.textContent = "Texte copié.", () => msg.textContent = "Copie impossible ici : utilisez Imprimer."); },
  "rep-quiz"(d){ const m = MOD(d.id), s = etat.quizM[m.id] = etat.quizM[m.id] || {rep:{}, best:0};
    s.rep[d.q] = +d.c;
    if (Object.keys(s.rep).length === m.quiz.length){ const n = noteQuiz(m.quiz, s.rep); if (n >= (s.best || 0)){ s.best = n; s.d = auj(); } }
    sauver(); rendre(); },
  "refaire-quiz"(d){ (etat.quizM[d.id] || {}).rep = {}; delete melanges["M-"+d.id]; sauver(); rendre(); window.scrollTo(0,0); },
  fav(d){ if (etat.fav[d.id]) delete etat.fav[d.id]; else etat.fav[d.id] = true; sauver(); rendre(); },
  taille(d){ etat.taille = +d.v; appliquerTheme(); sauver(); rendre(); },
  partager(){                                // envoie la sauvegarde par WhatsApp, e-mail, Bluetooth… (téléphone surtout)
    const nom = "FayeMath_Formation_sauvegarde_" + auj() + ".json", f = new File([JSON.stringify(etat, null, 1)], nom, {type:"application/json"});
    if (navigator.canShare && navigator.canShare({files:[f]}))
      navigator.share({files:[f], title:"Sauvegarde FayeMath Formation"}).then(() => { etat.dernierExport = auj(); sauver(); msgSauv = "Sauvegarde partagée."; rendre(); }, () => {});
    else ACTIONS.export();
  },
  "rep-bilan"(d){ bilan.rep[d.q] = +d.c;
    if (Object.keys(bilan.rep).length === bilan.qs.length){ const n = noteQuiz(bilan.qs, bilan.rep), b = etat.bilanP[bilan.pole]; if (!b || n >= b.best) etat.bilanP[bilan.pole] = {best:n, d:auj()}; sauver(); }
    rendre(); },
  "nouveau-bilan"(d){ tirerBilan(d.id); rendre(); window.scrollTo(0,0); },
  "rep-veille"(d){ (etat.quiz[d.id] = etat.quiz[d.id] || {})[d.q] = +d.c; sauver(); rendre(); },
  "refaire-veille"(d){ delete etat.quiz[d.id]; delete melanges["V-"+d.id]; sauver(); rendre(); },
  "rev-go"(){ pile = cartes().filter(carteDue).slice(0,20); face = false; rendre(); },
  "rev-voir"(){ face = true; rendre(); },
  "rev-note"(d){ const c = pile.shift(); noterCarte(c.k, d.su === "1"); face = false; rendre(); },
  "filtre-act"(d){ filtreAct = d.v; rendre(); },
  "filtre-res"(d){ filtreRes = d.v; rendre(); },
  "filtre-sit"(d){ filtreSit = d.v; rendre(); },
  "filtre-med"(d){ filtreMed = d.v; msgMed = ""; rendre(); },
  "med-lire"(d){ medLecteur = medLecteur === d.id ? "" : d.id; rendre(); },
  "med-notes"(d){ medOuverte.has(d.id) ? medOuverte.delete(d.id) : medOuverte.add(d.id); rendre(); },
  "med-suppr"(d){ if (confirm("Retirer cette ressource de votre médiathèque ?")){ etat.mesRes = etat.mesRes.filter(r => r.id !== d.id); delete etat.resV[d.id]; delete etat.resN[d.id]; sauver(); msgMed = "Ressource retirée."; rendre(); } },
  "copier-msg"(d){ const txt = FM.situations.find(s => s.id === d.id).msg, el = document.getElementById("cp-" + d.id);
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => el.textContent = "Message copié.", () => el.textContent = "Copie impossible : sélectionnez le texte."); },
  "notes-res"(d){ notesOuvertes.has(d.id) ? notesOuvertes.delete(d.id) : notesOuvertes.add(d.id); rendre(); },
  "suppr-journal"(d){ if (confirm("Supprimer cette entrée du journal ?")){ etat.journal.splice(+d.i, 1); sauver(); rendre(); } },
  "export-ecrits"(){ telecharger("FayeMath_Formation_mes_ecrits_" + auj() + ".txt", texteEcrits(), "text/plain;charset=utf-8"); },
  export(){ telecharger("FayeMath_Formation_sauvegarde_" + auj() + ".json", JSON.stringify(etat, null, 1), "application/json"); etat.dernierExport = auj(); sauver(); msgSauv = "Sauvegarde enregistrée dans vos téléchargements. Rangez-la dans le dossier « sauvegardes »."; rendre(); },
  raz(){ if (confirm("Effacer toute la progression de cet appareil ? Cette action est définitive.")){ etat = VIDE(); sauver(); appliquerTheme(); msgSauv = "Progression effacée."; rendre(); } }
};
document.addEventListener("click", ev => {
  /* Sur téléphone : toucher un lien du menu, ou toucher en dehors du menu, le referme. */
  const menu = document.getElementById("nav");
  if (menu.classList.contains("ouvert") && !ev.target.closest('[data-a="menu"]') && (!ev.target.closest("nav") || ev.target.closest(".nav-lien"))) menu.classList.remove("ouvert");
  const b = ev.target.closest("[data-a]"); if (!b) return;
  const f = ACTIONS[b.dataset.a]; if (f) f(b.dataset);
});

/* ---------- saisies : enregistrées à chaque frappe, sans réafficher l'écran ---------- */
document.addEventListener("input", ev => {
  const t = ev.target, d = t.dataset;
  if (t.id === "rech-sit"){ rechSit = t.value; const tmp = document.createElement("div"); tmp.innerHTML = vueSituations(); document.getElementById("liste-sit").innerHTML = tmp.querySelector("#liste-sit").innerHTML; return; }
  if (d.champ){
    const [champ, id] = d.champ.split(":");
    if (champ === "objectif") etat.objectif = Math.min(20, Math.max(1, +t.value || 1));
    else if (champ === "nom") etat.nom = t.value;
    else etat[champ][id] = t.value;                 // refl, cas, atel
    sauver();
  } else if (d.note){ (etat.notes[d.note] = etat.notes[d.note] || {})[d.c] = t.value; sauver(); }
  else if (d.synth){ etat.synth[d.synth] = t.value; sauver(); }
  else if (d.mednote){ etat.resN[d.mednote] = t.value; sauver(); }
});
document.addEventListener("change", ev => {
  const t = ev.target, d = t.dataset;
  if (d.statut){ setStatut(d.statut, t.value); rendre(); }
  else if (d.ech){ if (t.value) etat.ech[d.ech] = t.value; else delete etat.ech[d.ech]; sauver(); rendre(); }
  else if (d.coche){ marquer(d.coche, t.checked); rendre(); }
  else if (d.medvu){ if (t.checked) etat.resV[d.medvu] = auj(); else delete etat.resV[d.medvu]; sauver(); rendre(); }
  else if (d.exo){ if (t.checked) etat.exo[d.exo] = auj(); else delete etat.exo[d.exo]; sauver(); rendre(); }
  else if (d.bilan){ if (t.checked) etat.bilans[d.bilan] = true; else delete etat.bilans[d.bilan]; sauver(); rendre(); }
  else if (d.champ === "objectif") rendre();
  else if ((t.id === "fichier" || t.id === "fichier-fusion") && t.files[0]){   // remplacement ou fusion d'une sauvegarde (version 1 ou 2)
    const lecteur = new FileReader(), fusion = t.id === "fichier-fusion";
    lecteur.onload = () => { try { const x = JSON.parse(lecteur.result);
        if (!x || typeof x !== "object" || !(x.lu || x.done)) throw new Error("format");
        const autre = x.v === 2 ? normaliser(x) : migrerV1(x), avant = Object.keys(etat.lu).length;
        etat = fusion ? fusionner(etat, autre) : autre; sauver(); appliquerTheme();
        msgSauv = fusion ? "Fusion terminée : " + Object.keys(etat.lu).length + " leçons lues au total (" + avant + " avant la fusion). Rien n'a été effacé." : "Sauvegarde restaurée.";
      } catch(e){ msgSauv = "Fichier illisible : choisissez un fichier de sauvegarde FayeMath Formation."; }
      rendre(); };
    lecteur.readAsText(t.files[0]);
  }
});
document.addEventListener("submit", ev => {
  ev.preventDefault();
  if (ev.target.id === "form-recherche"){ requete = document.getElementById("q").value.trim(); if (location.hash === "#recherche") rendre(); else location.hash = "#recherche"; }
  else if (ev.target.id === "form-journal"){
    etat.journal.unshift({d:auj(), appris:document.getElementById("j-appris").value.trim(), applique:document.getElementById("j-applique").value.trim()});
    sauver(); rendre();
  }
  else if (ev.target.id === "form-med"){                       // ajout d'une ressource personnelle
    const url = document.getElementById("med-u").value.trim(), t = document.getElementById("med-t").value.trim();
    if (!/^https:\/\//i.test(url) || !t){ msgMed = "Indiquez un titre et un lien qui commence par https://"; rendre(); return; }
    const id = "P" + Date.now().toString(36);
    etat.mesRes.push({id, t, url, type:document.getElementById("med-type").value, m:document.getElementById("med-m").value});
    sauver(); filtreMed = "perso"; msgMed = idYoutube(url) ? "Vidéo ajoutée : touchez « Regarder ici » pour la lire." : "Ressource ajoutée.";
    medLecteur = ""; rendre();
  }
});

/* ---------- démarrage ---------- */
window.addEventListener("hashchange", rendre);
window.addEventListener("beforeunload", () => { if (chronoOn){ const min = Math.round(chronoSec/60); if (min){ etat.temps[auj()] = (etat.temps[auj()] || 0) + min; sauver(); } } });
charger(); appliquerTheme(); rendre();
