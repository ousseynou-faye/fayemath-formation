/* =====================================================================
   FayeMath Formation — js/app.js
   Navigation (menu, routes), minuteur d'étude et réactions aux clics
   et aux saisies. C'est le seul fichier qui modifie la page.
   ===================================================================== */
"use strict";

/* ---------- thème clair / sombre ---------- */
function appliquerTheme(){ if (etat.theme) document.documentElement.dataset.theme = etat.theme; else delete document.documentElement.dataset.theme; }

/* ---------- route : la partie de l'adresse après # ---------- */
function route(){ const [nom, a, b] = (location.hash || "#accueil").slice(1).split("/"); return {nom, a, b}; }

/* Choisit l'écran à afficher selon la route ; renvoie {html, pole, mod} */
function ecran(){
  const r = route(), m = MOD(r.a), p = POLE(r.a), v = MODULES[+r.a - 1];
  switch (r.nom){
    case "pole":        if (p) return {html:vuePole(p), pole:p.id}; break;
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
    case "recherche":   return {html:vueRecherche(), cle:"recherche"};
    case "sauvegarde":  return {html:vueSauvegarde(), cle:"sauvegarde"};
    case "veille":      return v ? {html:vueVeilleModule(v), cle:"veille"} : {html:vueVeille(), cle:"veille"};
    case "programme":   return {html:vueProgramme(), cle:"veille"};
  }
  return {html:vueAccueil(), cle:"accueil"};
}

/* ---------- menu de gauche ---------- */
function rendreNav(e){
  const lien = (cible, num, txt, extra, actif, fini, cls) => `<a class="nav-lien ${cls || ""}" href="#${cible}" ${actif ? 'aria-current="page"' : ""}><span class="nav-num${fini ? " fini" : ""}">${num}</span><span class="nav-txt">${txt}</span>${extra ? `<span class="nav-pct">${extra}</span>` : ""}</a>`;
  const A = actions(), due = cartes().filter(carteDue).length;
  document.getElementById("nav").innerHTML = `<div class="marque"><img src="logo.png" alt=""><div>Faye<span>Math</span> Formation</div></div><div class="sous-marque">La Réussite se construit à Domicile</div>
    ${lien("accueil","T","Tableau de bord", progGlobale()+" %", e.cle === "accueil")}
    <div class="nav-sep">Parcours du fondateur</div>
    ${FM.poles.map(p => lien("pole/"+p.id, p.id, h(p.titre), progPole(p.id)+" %", e.pole === p.id && !e.mod, modsPole(p.id).every(valide), "nav-pole")
      + (e.pole === p.id ? modsPole(p.id).map(m => lien("module/"+m.id, m.n, h(m.court), lues(m)+"/"+m.lecons.length, e.mod === m.id, valide(m), "nav-sous")).join("") : "")).join("")}
    <div class="nav-sep">Études de cas</div>
    ${lien("veille","E","Entreprises modèles", nb(ESSENTIELLES)+"/"+ESSENTIELLES.length, e.cle === "veille")}
    <div class="nav-sep">S'entraîner</div>
    ${lien("revision","R","Révision espacée", due ? due+" dues" : "", e.cle === "revision")}
    ${lien("bilans","B","Bilans et attestations", FM.poles.filter(p => poleValide(p.id)).length+"/4", e.cle === "bilans")}
    <div class="nav-sep">Appliquer</div>
    ${lien("outils","O","Boîte à outils", "", e.cle === "outils")}
    ${lien("actions","A","Plan d'action", A.filter(a => statut(a.k) === "fait").length+"/"+A.length, e.cle === "actions")}
    ${lien("journal","J","Journal de bord", "", e.cle === "journal")}
    ${lien("ecrits","N","Mes écrits", "", e.cle === "ecrits")}
    <div class="nav-sep">Références</div>
    ${lien("glossaire","G","Glossaire", "", e.cle === "glossaire")}
    ${lien("sauvegarde","S","Sauvegarde et réglages", "", e.cle === "sauvegarde")}
    <div class="minuteur"><div>Minuteur d'étude</div><output id="chrono">${fmtChrono()}</output>
      <button type="button" data-a="chrono">${chronoOn ? "Arrêter et enregistrer" : "Démarrer une séance"}</button></div>
    <div class="etat" id="etat">${stockageOK ? "Progression enregistrée sur cet ordinateur" : "Enregistrement impossible : exportez une sauvegarde"}</div>`;
}

/* ---------- affichage ---------- */
let derniereRoute = "";
function rendre(){
  const e = ecran(), ici = location.hash;
  document.getElementById("vue").innerHTML = e.html;
  rendreNav(e);
  document.getElementById("nav").classList.remove("ouvert");
  if (ici !== derniereRoute){ window.scrollTo(0,0); derniereRoute = ici; }   // on ne remonte en haut que lors d'un changement d'écran
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
  "refaire-quiz"(d){ (etat.quizM[d.id] || {}).rep = {}; sauver(); rendre(); window.scrollTo(0,0); },
  "rep-bilan"(d){ bilan.rep[d.q] = +d.c;
    if (Object.keys(bilan.rep).length === bilan.qs.length){ const n = noteQuiz(bilan.qs, bilan.rep), b = etat.bilanP[bilan.pole]; if (!b || n >= b.best) etat.bilanP[bilan.pole] = {best:n, d:auj()}; sauver(); }
    rendre(); },
  "nouveau-bilan"(d){ tirerBilan(d.id); rendre(); window.scrollTo(0,0); },
  "rep-veille"(d){ (etat.quiz[d.id] = etat.quiz[d.id] || {})[d.q] = +d.c; sauver(); rendre(); },
  "refaire-veille"(d){ delete etat.quiz[d.id]; sauver(); rendre(); },
  "rev-go"(){ pile = cartes().filter(carteDue).slice(0,20); face = false; rendre(); },
  "rev-voir"(){ face = true; rendre(); },
  "rev-note"(d){ const c = pile.shift(); noterCarte(c.k, d.su === "1"); face = false; rendre(); },
  "filtre-act"(d){ filtreAct = d.v; rendre(); },
  "filtre-res"(d){ filtreRes = d.v; rendre(); },
  "notes-res"(d){ notesOuvertes.has(d.id) ? notesOuvertes.delete(d.id) : notesOuvertes.add(d.id); rendre(); },
  "suppr-journal"(d){ if (confirm("Supprimer cette entrée du journal ?")){ etat.journal.splice(+d.i, 1); sauver(); rendre(); } },
  "export-ecrits"(){ telecharger("FayeMath_Formation_mes_ecrits_" + auj() + ".txt", texteEcrits(), "text/plain;charset=utf-8"); },
  export(){ telecharger("FayeMath_Formation_sauvegarde_" + auj() + ".json", JSON.stringify(etat, null, 1), "application/json"); msgSauv = "Sauvegarde enregistrée dans vos téléchargements. Rangez-la dans le dossier « sauvegardes »."; rendre(); },
  raz(){ if (confirm("Effacer toute la progression de cet ordinateur ? Cette action est définitive.")){ etat = VIDE(); sauver(); appliquerTheme(); msgSauv = "Progression effacée."; rendre(); } }
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
  if (d.champ){
    const [champ, id] = d.champ.split(":");
    if (champ === "objectif") etat.objectif = Math.min(20, Math.max(1, +t.value || 1));
    else if (champ === "nom") etat.nom = t.value;
    else etat[champ][id] = t.value;                 // refl, cas, atel
    sauver();
  } else if (d.note){ (etat.notes[d.note] = etat.notes[d.note] || {})[d.c] = t.value; sauver(); }
  else if (d.synth){ etat.synth[d.synth] = t.value; sauver(); }
});
document.addEventListener("change", ev => {
  const t = ev.target, d = t.dataset;
  if (d.statut){ setStatut(d.statut, t.value); rendre(); }
  else if (d.ech){ if (t.value) etat.ech[d.ech] = t.value; else delete etat.ech[d.ech]; sauver(); rendre(); }
  else if (d.coche){ marquer(d.coche, t.checked); rendre(); }
  else if (d.bilan){ if (t.checked) etat.bilans[d.bilan] = true; else delete etat.bilans[d.bilan]; sauver(); rendre(); }
  else if (d.champ === "objectif") rendre();
  else if (t.id === "fichier" && t.files[0]){        // restauration d'une sauvegarde (version 1 ou 2)
    const lecteur = new FileReader();
    lecteur.onload = () => { try { const x = JSON.parse(lecteur.result);
        etat = x.v === 2 ? normaliser(x) : migrerV1(x); sauver(); appliquerTheme(); msgSauv = "Sauvegarde restaurée.";
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
});

/* ---------- démarrage ---------- */
window.addEventListener("hashchange", rendre);
window.addEventListener("beforeunload", () => { if (chronoOn){ const min = Math.round(chronoSec/60); if (min){ etat.temps[auj()] = (etat.temps[auj()] || 0) + min; sauver(); } } });
charger(); appliquerTheme(); rendre();
