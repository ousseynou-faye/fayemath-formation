/* =====================================================================
   FayeMath Formation — js/vues-outils.js
   Écrans d'appui : révision espacée, boîte à outils, plan d'action,
   journal de bord, mes écrits, glossaire, recherche, sauvegarde.
   ===================================================================== */
"use strict";

/* ---------- révision espacée ---------- */
let pile = null, face = false;          // pile de cartes de la session en cours ; face = réponse visible
function vueRevision(){
  const C = cartes(), due = C.filter(carteDue);
  if (!C.length) return `<div class="sur-titre">S'entraîner</div><h1>Révision espacée</h1><p class="chapeau">Les cartes apparaissent dès qu'une première leçon est lue. Commencez un module, puis revenez ici.</p><a class="btn" href="#accueil">Tableau de bord</a>`;
  const parBoite = [1,2,3,4,5].map(b => C.filter(c => (etat.fc[c.k] || {}).b === b).length), neuves = C.filter(c => !etat.fc[c.k]).length;
  const entete = `<div class="sur-titre">S'entraîner</div><h1>Révision espacée</h1>
  <p class="chapeau">Une carte sue passe dans la boîte suivante et revient plus tard (1, 3, 7, 14 puis 30 jours). Une carte ratée revient demain. Dix minutes par jour suffisent.</p>
  <div class="kpis"><div class="kpi"><b>${due.length}</b><span>à réviser aujourd'hui</span></div><div class="kpi"><b>${neuves}</b><span>nouvelles</span></div>
    ${parBoite.map((n,i) => `<div class="kpi"><b>${n}</b><span>boîte ${i+1}</span></div>`).join("")}</div>`;
  if (!pile) return entete + (due.length
    ? `<p><button class="btn" type="button" data-a="rev-go">Commencer la session (${Math.min(20,due.length)} cartes)</button></p>`
    : `<div class="carte resultat ok"><h3>Rien à réviser aujourd'hui</h3><p style="margin:6px 0 0">Prochaines cartes dans les jours qui viennent. Vous pouvez avancer dans un module.</p></div>`);
  if (!pile.length){ pile = null; return entete + `<div class="carte resultat ok"><h3>Session terminée</h3><p style="margin:6px 0 10px">Les cartes sues reviendront plus tard, les autres demain.</p><a class="btn" href="#accueil">Tableau de bord</a></div>`; }
  const c = pile[0];
  return entete + `<div class="carte fcarte"><div class="petit">${h(c.lab)} · encore ${pile.length} carte${pile.length>1?"s":""}</div>
    <div class="face">${h(c.q)}</div>
    ${face ? `<div class="dos"><b>${h(c.r)}</b>${c.x ? `<div class="petit" style="margin-top:6px">${h(c.x)}</div>` : ""}</div>
      <div class="bts"><button class="btn rouge" type="button" data-a="rev-note" data-su="0">À revoir</button><button class="btn vert" type="button" data-a="rev-note" data-su="1">Je savais</button></div>`
     : `<div class="bts"><button class="btn" type="button" data-a="rev-voir">Voir la réponse</button></div><p class="petit" style="margin-top:10px">Répondez d'abord de tête, puis vérifiez.</p>`}</div>`;
}

/* ---------- boîte à outils ---------- */
function vueOutils(){
  return `<div class="sur-titre">Appliquer</div><h1>Boîte à outils</h1>
  <p class="chapeau">Les ${FM.modules.length} fiches-outils de la formation, classées par pôle : scripts, trames, check-lists et modèles à copier ou à imprimer.</p>
  ${FM.poles.map(p => `<h2>Pôle ${p.id} — ${h(p.titre)}</h2><div class="grille g2">${modsPole(p.id).map(m =>
    `<a class="carte mod-carte" href="#etape/${m.id}/outil"><span class="sur-titre" style="margin:0">Module ${m.n} · ${h(m.court)}</span><h3>${h(m.outil.t)}</h3><p>${h(m.outil.usage)}</p></a>`).join("")}</div>`).join("")}`;
}

/* ---------- plan d'action ---------- */
let filtreAct = "tout";
function ligneAction(a){                // une action : texte, statut, échéance
  const s = statut(a.k);
  return `<div class="ligne ${s === "fait" ? "fait" : ""}"><span>${h(a.txt)}${a.src ? `<br><a class="petit" href="${a.href}">${h(a.src)}</a>` : ""}</span>
    <select data-statut="${a.k}" aria-label="Statut de l'action">${[["todo","À faire"],["cours","En cours"],["fait","Fait"]].map(([v,l]) => `<option value="${v}" ${s===v?"selected":""}>${l}</option>`).join("")}</select>
    <input type="date" data-ech="${a.k}" value="${h(etat.ech[a.k] || "")}" aria-label="Échéance"></div>`;
}
function vueActions(){
  const A = actions(), n = s => A.filter(a => statut(a.k) === s).length, retard = A.filter(a => statut(a.k) !== "fait" && etat.ech[a.k] && etat.ech[a.k] < auj()).length;
  const L = A.filter(a => filtreAct === "tout" || (filtreAct === "retard" ? (statut(a.k) !== "fait" && etat.ech[a.k] && etat.ech[a.k] < auj()) : statut(a.k) === filtreAct));
  const groupes = FM.poles.map(p => ["Pôle "+p.id+" — "+p.titre, L.filter(a => a.pole === p.id)]).concat([["Entreprises modèles — idées à tester", L.filter(a => a.pole === "E")]]);
  return `<div class="sur-titre">Appliquer</div><h1>Plan d'action</h1>
  <p class="chapeau">Une formation ne vaut que par ce qu'elle change. Donnez à chaque action un statut et une échéance ; limitez-vous à trois actions « en cours » à la fois.</p>
  <div class="kpis"><div class="kpi"><b>${n("fait")}</b><span>faites sur ${A.length}</span></div><div class="kpi"><b>${n("cours")}</b><span>en cours</span></div><div class="kpi"><b>${n("todo")}</b><span>à faire</span></div><div class="kpi"><b>${retard}</b><span>en retard</span></div></div>
  <div class="filtres" role="group" aria-label="Filtrer les actions">${[["tout","Toutes"],["cours","En cours"],["todo","À faire"],["fait","Faites"],["retard","En retard"]].map(([v,l]) => `<button class="filtre" type="button" data-a="filtre-act" data-v="${v}" aria-pressed="${filtreAct===v}">${l}</button>`).join("")}</div>
  ${groupes.filter(g => g[1].length).map(g => `<h2>${h(g[0])}</h2><div class="carte">${g[1].map(ligneAction).join("")}</div>`).join("") || '<p class="vide">Aucune action dans ce filtre.</p>'}`;
}

/* ---------- journal de bord ---------- */
function vueJournal(){
  const J = joursSemaine();
  return `<div class="sur-titre">Appliquer</div><h1>Journal de bord</h1>
  <p class="chapeau">Fixez votre rythme, puis notez après chaque séance d'étude ce que vous avez appris et ce que vous allez appliquer. Les décisions prises pendant la formation ont aussi leur place ici.</p>
  <div class="grille g2">
    <div class="carte"><h3>Mon rythme</h3>
      <label class="petit" for="objectif">Objectif de leçons par semaine</label><br>
      <input class="champ" id="objectif" type="number" min="1" max="20" value="${etat.objectif}" data-champ="objectif" style="width:90px;margin-top:4px">
      <div class="chiffres"><span><b>${leconsSemaine()}</b> / ${etat.objectif} cette semaine</span></div>
      <div class="semaine">${J.map((j,i) => `<span class="${etat.jours[j] ? "on" : ""}">${"LMMJVSD"[i]}</span>`).join("")}</div>
      <p class="petit" style="margin:10px 0 0">À ${etat.objectif} leçons par semaine, les ${LECONS.length} leçons demandent environ ${Math.ceil(LECONS.length/Math.max(1,etat.objectif))} semaines.</p></div>
    <div class="carte"><h3>Mon temps d'étude</h3>
      <div class="chiffres"><span><b>${fmtMin(minutesSemaine())}</b> cette semaine</span><span><b>${fmtMin(minutesTotal())}</b> au total</span><span><b>${Object.keys(etat.jours).length}</b> jours d'étude</span></div>
      <p class="petit" style="margin:10px 0 0">Le temps est compté par le minuteur d'étude, en bas du menu. Lancez-le au début de chaque séance.</p></div>
  </div>
  <h2>Nouvelle entrée</h2>
  <form class="carte" id="form-journal"><label class="petit" for="j-appris"><b>Ce que j'ai appris ou décidé</b></label><textarea class="zone" id="j-appris" required></textarea>
    <label class="petit" for="j-applique" style="display:block;margin-top:10px"><b>Ce que je vais appliquer, et quand</b></label><textarea class="zone" id="j-applique"></textarea>
    <p style="margin:12px 0 0"><button class="btn" type="submit">Ajouter au journal</button></p></form>
  <h2>Mes entrées (${etat.journal.length})</h2>
  ${etat.journal.length ? `<div class="carte">${etat.journal.map((e,i) => `<div class="note-bloc"><div style="display:flex;justify-content:space-between;gap:10px"><b>${frDate(e.d)}</b><button class="btn sec" type="button" data-a="suppr-journal" data-i="${i}" style="padding:3px 9px;font-size:12.5px">Supprimer</button></div>
    <p style="margin:6px 0 0;white-space:pre-wrap">${h(e.appris)}</p>${e.applique ? `<p style="margin:6px 0 0;white-space:pre-wrap"><span class="petit">À appliquer :</span> ${h(e.applique)}</p>` : ""}</div>`).join("")}</div>` : '<p class="vide">Aucune entrée pour l\'instant.</p>'}`;
}

/* ---------- mes écrits : tout ce que l'apprenant a rédigé ---------- */
function texteEcrits(){
  let t = "FAYEMATH FORMATION — MES ÉCRITS — " + frDate(auj()) + "\n";
  FM.modules.forEach(m => {
    const L = m.lecons.filter(l => (etat.refl[l.id] || "").trim());
    if (!L.length && !(etat.cas[m.id] || "").trim() && !(etat.atel[m.id] || "").trim()) return;
    t += "\n==== MODULE " + m.n + " — " + m.titre.toUpperCase() + " ====\n";
    L.forEach(l => t += "\n[Réflexion] " + l.q + "\n" + etat.refl[l.id].trim() + "\n");
    if ((etat.cas[m.id] || "").trim()) t += "\n[Cas pratique] " + m.cas.t + "\n" + etat.cas[m.id].trim() + "\n";
    if ((etat.atel[m.id] || "").trim()) t += "\n[Atelier] " + m.atelier.t + "\n" + etat.atel[m.id].trim() + "\n";
  });
  MODULES.forEach(v => { let s = "";
    v.r.forEach(r => { const n = etat.notes[r[0]]; if (aNote(r[0])) s += "\n" + r[0] + " " + r[1] + "\n" + [n.a,n.b,n.c].filter(Boolean).map(x => "- " + x).join("\n") + (n.act ? "\nAction : " + n.act : "") + "\n"; });
    if (etat.synth[v.n]) s += "\nSynthèse : " + etat.synth[v.n] + "\n";
    if (s) t += "\n==== ENTREPRISES MODÈLES — " + v.titre.toUpperCase() + " ====\n" + s; });
  if (etat.journal.length) t += "\n==== JOURNAL DE BORD ====\n" + etat.journal.map(e => "\n" + frDate(e.d) + "\n" + e.appris + (e.applique ? "\nÀ appliquer : " + e.applique : "")).join("\n") + "\n";
  return t;
}
function vueEcrits(){
  const blocs = FM.modules.map(m => { const L = m.lecons.filter(l => (etat.refl[l.id] || "").trim()), c = (etat.cas[m.id] || "").trim(), a = (etat.atel[m.id] || "").trim();
    if (!L.length && !c && !a) return "";
    return `<h2>Module ${m.n} — ${h(m.titre)}</h2><div class="carte">
      ${L.map(l => `<div class="note-bloc"><div class="petit"><a href="#lecon/${l.id}">Réflexion · ${h(l.t)}</a></div><p style="margin:4px 0 0;white-space:pre-wrap">${h(etat.refl[l.id])}</p></div>`).join("")}
      ${c ? `<div class="note-bloc"><div class="petit"><a href="#etape/${m.id}/cas">Cas pratique · ${h(m.cas.t)}</a></div><p style="margin:4px 0 0;white-space:pre-wrap">${h(c)}</p></div>` : ""}
      ${a ? `<div class="note-bloc"><div class="petit"><a href="#etape/${m.id}/atelier">Atelier · ${h(m.atelier.t)}</a></div><p style="margin:4px 0 0;white-space:pre-wrap">${h(a)}</p></div>` : ""}</div>`; }).join("");
  const veille = MODULES.map(v => { const R = v.r.filter(r => aNote(r[0]));
    if (!R.length && !etat.synth[v.n]) return "";
    return `<h2>Entreprises modèles — ${h(v.court)}</h2><div class="carte">${R.map(r => { const n = etat.notes[r[0]];
      return `<div class="note-bloc"><b>${r[0]} ${h(r[1])}</b><ol>${[n.a,n.b,n.c].filter(Boolean).map(x => `<li>${h(x)}</li>`).join("")}</ol>${n.act ? `<div class="petit">Action : ${h(n.act)}</div>` : ""}</div>`; }).join("")}
      ${etat.synth[v.n] ? `<div class="note-bloc"><div class="petit">Synthèse du module</div><p style="margin:4px 0 0;white-space:pre-wrap">${h(etat.synth[v.n])}</p></div>` : ""}</div>`; }).join("");
  return `<div class="sur-titre">Appliquer</div><h1>Mes écrits</h1>
  <p class="chapeau">Vos réponses de réflexion, vos cas pratiques, vos ateliers et vos notes sur les entreprises modèles, réunis au même endroit.</p>
  <p class="sans-imp"><button class="btn" type="button" data-a="export-ecrits">Enregistrer en fichier texte</button> <button class="btn sec" type="button" data-a="imprimer">Imprimer</button></p>
  ${blocs + veille || '<p class="vide">Rien d\'écrit pour l\'instant. Vos réponses apparaîtront ici au fil des leçons.</p>'}`;
}

/* ---------- glossaire ---------- */
function vueGlossaire(){
  return `<div class="sur-titre">Références</div><h1>Glossaire</h1><p class="chapeau">${FM.glossaire.length} termes de la formation, avec le module où chacun est expliqué.</p>
  <dl class="gloss">${FM.glossaire.map(g => { const m = MOD(g[2]); return `<dt>${h(g[0])}</dt><dd>${h(g[1])} <a class="petit" href="#module/${m.id}">Module ${m.n} · ${h(m.court)}</a></dd>`; }).join("")}</dl>`;
}

/* ---------- recherche ---------- */
let requete = "";
function vueRecherche(){
  const R = chercher(requete);
  return `<div class="sur-titre">Recherche</div><h1>${requete ? "Résultats pour « " + h(requete) + " »" : "Rechercher"}</h1>
  <p class="chapeau" role="status">${requete ? R.length + " résultat" + (R.length>1?"s":"") + (R.length === 60 ? " (60 premiers)" : "") + "." : "Saisissez un mot dans la barre du haut : une notion, un outil, une entreprise."}</p>
  ${R.map(x => `<a class="trouve" href="${x.href}"><small>${h(x.type)}</small><div><b>${h(x.titre)}</b></div><div class="petit">${extrait(x.txt, requete)}</div></a>`).join("")}
  ${requete && !R.length ? '<p class="vide">Aucun résultat. Essayez un mot plus court ou un synonyme.</p>' : ""}`;
}

/* ---------- sauvegarde ---------- */
let msgSauv = "";
function vueSauvegarde(){
  return `<div class="sur-titre">Réglages</div><h1>Sauvegarde et réglages</h1>
  <p class="chapeau">Votre progression est gardée par le navigateur de cet ordinateur. Enregistrez une copie une fois par semaine, et rangez-la dans le dossier « sauvegardes » de l'application.</p>
  ${msgSauv ? `<div class="carte resultat ok" role="status">${h(msgSauv)}</div>` : ""}
  <div class="grille g2">
    <div class="carte"><h3>Enregistrer une copie</h3><p class="petit">Crée un fichier FayeMath_Formation_sauvegarde_${auj()}.json avec toute votre progression et vos écrits.</p><button class="btn" type="button" data-a="export">Enregistrer la sauvegarde</button></div>
    <div class="carte"><h3>Restaurer une copie</h3><p class="petit">Remplace la progression actuelle par celle du fichier choisi (version 1 ou 2).</p><input type="file" id="fichier" accept=".json,application/json" aria-label="Fichier de sauvegarde"></div>
    <div class="carte"><h3>Mon nom sur les attestations</h3><input class="champ" data-champ="nom" value="${h(etat.nom)}" aria-label="Nom" style="width:100%"></div>
    <div class="carte"><h3>Repartir de zéro</h3><p class="petit">Efface toute la progression de cet ordinateur. Enregistrez une copie avant.</p><button class="btn rouge" type="button" data-a="raz">Tout effacer</button></div>
  </div>
  <p class="pied">Dernier enregistrement : ${etat.t ? new Date(etat.t).toLocaleString("fr-FR") : "aucun"}. ${stockageOK ? "" : "Le navigateur refuse l'enregistrement automatique : exportez une sauvegarde avant de fermer."}</p>`;
}
function telecharger(nom, contenu, type){ // crée un fichier et le propose au téléchargement
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([contenu], {type})); a.download = nom;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
