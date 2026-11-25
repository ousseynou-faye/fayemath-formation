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
  <h2>Mes 4 dernières semaines</h2>
  ${(() => { const H = historique(), max = Math.max(30, ...H.map(x => x.min)), tot = H.reduce((a,x) => a + x.min, 0), lec = H.reduce((a,x) => a + x.lec, 0), act = H.filter(x => x.min || x.lec).length;
    return `<div class="carte"><div class="histo" role="img" aria-label="Minutes d'étude par jour sur 28 jours">${H.map(x => `<div title="${frDate(x.j)} : ${x.min} min, ${x.lec} leçon${x.lec>1?"s":""}"><i style="height:${Math.round(100*x.min/max)}%" class="${x.lec ? "lec" : ""}"></i></div>`).join("")}</div>
      <div class="chiffres"><span><b>${fmtMin(tot)}</b> d'étude</span><span><b>${lec}</b> leçon${lec>1?"s":""} lue${lec>1?"s":""}</span><span><b>${act}</b> jour${act>1?"s":""} actif${act>1?"s":""} sur 28</span></div>
      <p class="petit" style="margin:8px 0 0">Une barre par jour, la plus récente à droite. En ocre : les jours où une leçon a été lue. Les minutes viennent du minuteur d'étude.</p></div>`; })()}
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
  <p class="chapeau">Votre progression est gardée sur cet appareil, par le navigateur. Enregistrez une copie une fois par semaine, et rangez-la dans le dossier « sauvegardes » de l'application.</p>
  ${msgSauv ? `<div class="carte resultat ok" role="status">${h(msgSauv)}</div>` : ""}
  <h2>Sauvegarder</h2>
  <div class="grille g2">
    <div class="carte"><h3>Enregistrer une copie</h3><p class="petit">Crée le fichier FayeMath_Formation_sauvegarde_${auj()}.json avec toute votre progression et vos écrits.${etat.dernierExport ? " Dernière copie : " + frDate(etat.dernierExport) + "." : ""}</p>
      <p style="margin:0;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" type="button" data-a="export">Enregistrer la sauvegarde</button>
      ${navigator.share ? '<button class="btn sec" type="button" data-a="partager">Partager (WhatsApp, e-mail…)</button>' : ""}</p></div>
    <div class="carte"><h3>Fusionner avec une copie</h3><p class="petit"><b>Recommandé entre téléphone et ordinateur.</b> Ajoute à cet appareil ce qui a été fait sur l'autre, sans rien effacer : leçons lues, meilleurs scores, textes les plus complets.</p><input type="file" id="fichier-fusion" accept=".json,application/json" aria-label="Fichier de sauvegarde à fusionner"></div>
    <div class="carte"><h3>Remplacer par une copie</h3><p class="petit">Efface la progression de cet appareil et la remplace par celle du fichier (version 1 ou 2). À utiliser pour revenir à un état antérieur.</p><input type="file" id="fichier" accept=".json,application/json" aria-label="Fichier de sauvegarde"></div>
  </div>
  <h2>Réglages</h2>
  <div class="grille g2">
    <div class="carte"><h3>Taille du texte</h3><div class="filtres" role="group" aria-label="Taille du texte" style="margin:6px 0 0">${["Normale","Grande","Très grande"].map((l,i) => `<button class="filtre" type="button" data-a="taille" data-v="${i}" aria-pressed="${etat.taille === i}">${l}</button>`).join("")}</div></div>
    <div class="carte"><h3>Mon nom sur les attestations</h3><input class="champ" data-champ="nom" value="${h(etat.nom)}" aria-label="Nom" style="width:100%"></div>
    <div class="carte"><h3>Repartir de zéro</h3><p class="petit">Efface toute la progression de cet appareil. Enregistrez une copie avant.</p><button class="btn rouge" type="button" data-a="raz">Tout effacer</button></div>
  </div>
  <p class="pied">FayeMath Formation, version ${APP_VERSION}. Dernier enregistrement : ${etat.t ? new Date(etat.t).toLocaleString("fr-FR") : "aucun"}. ${stockageOK ? "" : "Le navigateur refuse l'enregistrement automatique : exportez une sauvegarde avant de fermer."}</p>`;
}
/* ---------- guide des situations difficiles ---------- */
let filtreSit = "tout", rechSit = "";
function carteSituation(s, ouvert){
  const m = MOD(s.m);
  return `<details class="sit" id="${s.id}" ${ouvert ? "open" : ""}><summary><span class="sit-cat">${h(s.c)}</span><b>${h(s.t)}</b></summary>
    <div class="sit-corps">
      <p><span class="sit-lab">Signes</span>${h(s.s)}</p>
      <div><span class="sit-lab">Causes possibles</span><ul>${s.k.map(x => `<li>${h(x)}</li>`).join("")}</ul></div>
      <div><span class="sit-lab">Solutions</span><ol>${s.sol.map(x => `<li>${h(x)}</li>`).join("")}</ol></div>
      <div class="bloc ex" style="margin:10px 0"><h3>Message type</h3><p id="msg-${s.id}">${h(s.msg)}</p>
        <p class="sans-imp" style="margin-top:8px"><button class="btn sec" type="button" data-a="copier-msg" data-id="${s.id}" style="padding:5px 10px;font-size:13px">Copier le message</button> <span class="petit" id="cp-${s.id}" role="status"></span></p></div>
      <p><span class="sit-lab">Pour éviter que cela se reproduise</span>${h(s.prev)}</p>
      <p class="petit">Méthode générale : <a href="#lecon/fidelisation-2">protocole en six temps</a> · Module lié : <a href="#module/${m.id}">${m.n} · ${h(m.court)}</a></p>
    </div></details>`;
}
function vueSituations(id){
  if (id && FM.situations.some(s => s.id === id)){ filtreSit = "tout"; rechSit = ""; }   // lien direct : on affiche la situation demandée
  const cats = [...new Set(FM.situations.map(s => s.c))];
  const mots = sansAccent(rechSit).split(/\s+/).filter(x => x.length > 1);
  const L = FM.situations.filter(s => (filtreSit === "tout" || s.c === filtreSit)
    && mots.every(w => sansAccent([s.t, s.s].concat(s.k, s.sol, s.msg).join(" ")).includes(w)));
  return `<div class="sur-titre">Appliquer</div><h1>Guide des situations</h1>
  <p class="chapeau">${FM.situations.length} problèmes fréquents avec les familles, les élèves, les écoles ou dans votre propre organisation. Pour chacun : les signes, les causes possibles, plusieurs solutions, un message type à adapter et la prévention.</p>
  <div class="carte retenir" style="margin-bottom:14px"><b>Devant tout problème :</b> accueillir sans se défendre · clarifier les faits · trouver la cause · proposer plusieurs solutions · agir et confirmer par écrit · vérifier et prévenir. <a href="#lecon/fidelisation-2">Revoir la leçon</a></div>
  <label class="petit" for="rech-sit"><b>Rechercher une situation</b></label>
  <input class="recherche" id="rech-sit" type="search" placeholder="Exemples : retard, remise, note, téléphone, départ" value="${h(rechSit)}">
  <div class="filtres filtres-defil" role="group" aria-label="Filtrer par famille de situations" style="margin-top:10px">${[["tout","Toutes (" + FM.situations.length + ")"]].concat(cats.map(c => [c, c + " (" + FM.situations.filter(s => s.c === c).length + ")"])).map(([v,l]) => `<button class="filtre" type="button" data-a="filtre-sit" data-v="${h(v)}" aria-pressed="${filtreSit===v}">${h(l)}</button>`).join("")}</div>
  <div id="liste-sit">${L.length ? L.map(s => carteSituation(s, s.id === id)).join("") : '<p class="vide">Aucune situation ne correspond. Essayez un autre mot ou retirez le filtre.</p>'}</div>`;
}

/* ---------- favoris ---------- */
function vueFavoris(){
  const F = LECONS.filter(x => etat.fav[x.l.id]);
  return `<div class="sur-titre">Références</div><h1>Mes favoris</h1>
  <p class="chapeau">Les leçons que vous avez marquées d'une étoile, pour les retrouver avant un appel, une séance ou un rendez-vous.</p>
  ${F.length ? F.map(x => `<a class="trouve" href="#lecon/${x.l.id}"><small>Module ${x.m.n} · ${h(x.m.court)}</small><div><b>★ ${h(x.l.t)}</b></div><div class="petit">${h(x.l.cle)}</div></a>`).join("")
    : '<p class="vide">Aucun favori pour l\'instant. Ouvrez une leçon et touchez « Ajouter aux favoris ».</p>'}`;
}

/* ---------- mode d'emploi ---------- */
function vueAide(){
  const bloc = (t, L) => `<h2>${t}</h2><div class="carte"><ol class="obj">${L.map(x => `<li>${x}</li>`).join("")}</ol></div>`;
  return `<div class="sur-titre">Références</div><h1>Mode d'emploi</h1>
  <p class="chapeau">Comment tirer le meilleur de FayeMath Formation, sur l'ordinateur comme sur le téléphone. Version ${APP_VERSION}.</p>
  ${bloc("Une séance d'étude type (25 à 30 minutes)", ["Lancez le <b>minuteur d'étude</b>, en bas du menu.","Faites la <b>révision espacée</b> si des cartes sont dues (5 minutes).","Étudiez <b>une leçon</b> : lecture, exemple, approfondissement, puis répondez par écrit à la question de réflexion.","Faites la <b>mise en pratique</b> le jour même ou planifiez-la, puis cochez-la.","Notez une ligne dans le <b>journal de bord</b> : ce que vous avez appris, ce que vous allez appliquer.","Arrêtez le minuteur : le temps rejoint vos statistiques."])}
  ${bloc("Valider un module", ["Lisez toutes les leçons du module.","Résolvez le <b>cas pratique</b> par écrit avant de regarder les éléments de réponse.","Rédigez l'<b>atelier</b> : c'est un document réellement utile à FayeMath Academy.","Consultez la <b>fiche-outil</b> et copiez-la là où vous en aurez besoin.","Réussissez le <b>quiz à " + SEUIL + " %</b>. Les réponses changent de place à chaque tentative.","Donnez un statut et une échéance aux <b>actions</b> du module dans le plan d'action."])}
  ${bloc("Valider un pôle, puis le parcours", ["Validez tous les modules du pôle.","Passez le <b>bilan de pôle</b> (12 questions tirées au hasard) et obtenez " + SEUIL + " %.","L'<b>attestation</b> du pôle se débloque et s'imprime.","Les quatre pôles validés, passez l'<b>examen final</b> (20 questions) pour l'attestation générale."])}
  ${bloc("Travailler sur le téléphone et sur l'ordinateur", ["Chaque appareil garde sa propre progression : rien n'est envoyé en ligne.","Pour réunir les deux : sur l'appareil A, <b>Sauvegarde → Partager</b> (ou Enregistrer) ; sur l'appareil B, <b>Sauvegarde → Fusionner avec une copie</b>.","La fusion n'efface rien : elle garde les leçons lues des deux côtés, le meilleur score de chaque quiz et le texte le plus complet de chaque réponse.","Faites-le une fois par semaine ; le tableau de bord vous le rappelle."])}
  ${bloc("Résoudre un problème avec une famille", ["Ouvrez le <b>Guide des situations</b> et cherchez le cas par un mot (retard, remise, note, départ…).","Lisez les causes possibles et choisissez celle qui correspond à votre cas.","Choisissez parmi les solutions proposées, ou proposez-en deux ou trois à la famille.","Copiez le <b>message type</b>, adaptez-le, puis envoyez-le.","Notez le problème dans votre registre (module « Fidéliser et résoudre »)."])}
  ${bloc("Recevoir une mise à jour sur le téléphone", ["Sur l'ordinateur, dans le dossier de l'application : <code>git add .</code> puis <code>git commit -m \"Mise à jour\"</code> puis <code>git push</code>.","Attendez une à deux minutes.","Ouvrez l'application sur le téléphone, avec une connexion : un bandeau « Nouvelle version » apparaît en bas. Touchez « Recharger ».","Le numéro de version est indiqué en bas du menu et dans « Sauvegarde et réglages »."])}
  ${bloc("Bon à savoir", ["Le dépôt GitHub est public : le contenu de la formation est lisible par qui a l'adresse, mais jamais votre progression ni vos écrits.","Ne déposez jamais un fichier de sauvegarde dans le dépôt (le fichier <code>.gitignore</code> l'empêche).","Si vous videz les données de Chrome ou désinstallez l'application, la progression de l'appareil est perdue : d'où l'importance de la sauvegarde hebdomadaire.","Pour corriger un texte, modifiez la ligne dans <code>donnees/pole-a.js</code> à <code>pole-d.js</code>, puis rechargez."])}`;
}

function telecharger(nom, contenu, type){ // crée un fichier et le propose au téléchargement
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([contenu], {type})); a.download = nom;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
