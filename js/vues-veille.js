/* =====================================================================
   FayeMath Formation — js/vues-veille.js
   « Entreprises modèles » : 6 modules d'études de cas, 58 ressources
   en ligne, programme de 6 semaines. Contenu et progression repris de
   la version 1 (donnees/veille.js).
   ===================================================================== */
"use strict";
let filtreRes = "tout";                 // filtre des ressources d'un module
const notesOuvertes = new Set();        // panneaux « Mes 3 idées » ouverts

function vueVeille(){
  return `<div class="sur-titre">Études de cas</div><h1>Entreprises modèles</h1>
  <p class="chapeau">Ce que font les entreprises qui ressemblent à FayeMath Academy : ${TOUTES.length} ressources en ligne (articles, vidéos, podcasts) en 6 modules, dont ${ESSENTIELLES.length} essentielles. Une connexion est nécessaire pour ouvrir les liens.</p>
  <div class="carte">${barre(pct(nb(ESSENTIELLES), ESSENTIELLES.length))}<div class="chiffres"><span><b>${nb(ESSENTIELLES)}</b> / ${ESSENTIELLES.length} essentielles</span><span><b>${nb(TOUTES)}</b> / ${TOUTES.length} au total</span></div></div>
  <p style="margin:14px 0 0"><a class="btn" href="#programme">Programme de 6 semaines</a></p>
  <h2>Les 6 modules</h2>
  <div class="grille g2">${MODULES.map(v => { const e = essModule(v);
    return `<a class="carte mod-carte" href="#veille/${v.n}"><span class="sur-titre" style="margin:0">Étude ${v.n}</span><h3 style="font-size:17px">${h(v.titre)}</h3><p>${h(v.resume)}</p>${barre(pct(nb(e), e.length))}<div class="petit">${nb(e)} / ${e.length} essentielles · ${v.r.length} ressources</div></a>`; }).join("")}</div>`;
}

function champsNotes(id){ const n = etat.notes[id] || {};
  return `<div class="notes">${["a","b","c"].map((c,i) => `<label>Idée ${i+1}<input data-note="${id}" data-c="${c}" value="${h(n[c] || "")}"></label>`).join("")}
    <label>Action pour FayeMath<textarea data-note="${id}" data-c="act">${h(n.act || "")}</textarea></label></div>`; }

function ligneRessource(r){
  const id = r[0], fait = !!etat.done[id], ouvert = notesOuvertes.has(id), k = id.replace(".","-");
  return `<div class="res${fait ? " fait" : ""}">
    <input class="coche" type="checkbox" id="c-${k}" data-coche="${id}" ${fait ? "checked" : ""} aria-label="Marquer ${id} comme terminée">
    <div><div class="res-titre"><span class="res-num">${id}</span><label for="c-${k}">${h(r[1])}</label></div><div class="res-quoi">${h(r[5])}</div>
      <div class="puces"><span class="puce${r[4] ? " ess" : ""}">${r[4] ? "Essentiel" : "Bonus"}</span><span class="puce">${h(r[2])}</span><span class="puce">${h(r[3])}</span>${aNote(id) ? '<span class="puce">Notes prises</span>' : ""}${fait && etat.dates[id] ? `<span class="puce">Terminée le ${frDate(etat.dates[id])}</span>` : ""}</div></div>
    <div class="res-actions"><a class="btn" href="${h(r[6])}" target="_blank" rel="noopener">Ouvrir</a>
      <button class="btn sec" type="button" data-a="notes-res" data-id="${id}" aria-expanded="${ouvert}">${ouvert ? "Fermer les notes" : "Mes 3 idées"}</button></div>
    ${ouvert ? champsNotes(id) : ""}</div>`;
}

function vueVeilleModule(v){
  const liste = v.r.filter(r => filtreRes === "tout" || (filtreRes === "essentiel" && r[4]) || (filtreRes === "reste" && !etat.done[r[0]]));
  const rep = etat.quiz[v.n] || {}, e = essModule(v), t = idsModule(v), lies = FM.modules.filter(m => m.veille.includes(v.n));
  return `<div class="sur-titre">Entreprises modèles · Étude ${v.n} sur ${MODULES.length}</div><h1>${h(v.titre)}</h1><p class="chapeau">${h(v.intro)}</p>
  <div class="carte">${barre(pct(nb(e), e.length))}<div class="chiffres"><span><b>${nb(e)}</b> / ${e.length} essentielles</span><span><b>${nb(t)}</b> / ${t.length} au total</span></div></div>
  <h2>Ce qu'il faut retenir</h2><div class="carte retenir"><ul>${v.retenir.map(x => `<li>${h(x)}</li>`).join("")}</ul></div>
  <h2>Les ressources</h2>
  <div class="filtres" role="group" aria-label="Filtrer les ressources">${[["tout","Toutes ("+v.r.length+")"],["essentiel","Essentielles ("+e.length+")"],["reste","Restantes ("+(t.length-nb(t))+")"]].map(([x,l]) => `<button class="filtre" type="button" data-a="filtre-res" data-v="${x}" aria-pressed="${filtreRes===x}">${l}</button>`).join("")}</div>
  ${liste.length ? liste.map(ligneRessource).join("") : '<p class="vide">Aucune ressource dans ce filtre.</p>'}
  ${v.note ? `<p class="petit" style="margin-top:10px">${h(v.note)}</p>` : ""}
  <h2>Idée à tester pour FayeMath</h2>
  <div class="carte idee"><p style="margin:0 0 10px;max-width:68ch">${h(v.idee)}</p>${ligneAction({k:"T"+v.n, txt:"Statut de cette idée"})}</div>
  <h2>Je me teste</h2><div class="carte">${blocQuestions(v.quiz, rep, `data-a="rep-veille" data-id="${v.n}"`)}
    ${Object.keys(rep).length ? `<button class="btn sec" type="button" data-a="refaire-veille" data-id="${v.n}" style="margin-top:8px">Refaire le quiz</button>` : ""}</div>
  <h2>Ma synthèse</h2><label class="petit" for="synth">En quelques lignes : ce que cette étude change pour FayeMath.</label>
  <textarea class="zone" id="synth" data-synth="${v.n}">${h(etat.synth[v.n] || "")}</textarea>
  ${lies.length ? `<h2>Modules de formation liés</h2><div class="puces">${lies.map(m => `<a class="puce" href="#module/${m.id}" style="text-decoration:none;font-size:13.5px;padding:5px 12px">Module ${m.n} · ${h(m.court)}</a>`).join("")}</div>` : ""}
  <div class="suivant">${v.n > 1 ? `<a class="btn sec" href="#veille/${v.n-1}">Étude ${v.n-1}</a>` : '<a class="btn sec" href="#veille">Entreprises modèles</a>'}
    ${v.n < MODULES.length ? `<a class="btn" href="#veille/${v.n+1}">Étude ${v.n+1} : ${h(MODULES[v.n].court)}</a>` : '<a class="btn" href="#actions">Plan d\'action</a>'}</div>`;
}

function vueProgramme(){
  const courante = (SEMAINES.find(s => !(s.ids.every(id => etat.done[id]) && etat.bilans[s.n])) || {}).n;
  return `<div class="sur-titre">Entreprises modèles</div><h1>Programme de 6 semaines</h1>
  <p class="chapeau">Les ${ESSENTIELLES.length} ressources essentielles en 6 semaines, à raison de 30 à 45 minutes par jour, 5 jours par semaine. Les ressources bonus se placent ensuite.</p>
  <div class="grille g2">${SEMAINES.map(s => { const finie = s.ids.every(id => etat.done[id]) && etat.bilans[s.n];
    return `<div class="carte sem${s.n === courante ? " courante" : ""}"><div class="sur-titre">Semaine ${s.n} ${finie ? '<span class="pastille ok">Terminée</span>' : s.n === courante ? '<span class="pastille cours">En cours</span>' : ""}</div>
    <h3>${h(s.titre)}</h3><div class="petit">${h(s.mod)} · ${nb(s.ids)} / ${s.ids.length} faites</div>
    <ul>${s.ids.map(id => { const r = INDEX[id].r, k = "p-" + id.replace(".","-");
      return `<li><input type="checkbox" id="${k}" data-coche="${id}" ${etat.done[id] ? "checked" : ""}><span><label for="${k}"><b>${id}</b> ${h(r[1])}</label> · <a href="${h(r[6])}" target="_blank" rel="noopener">ouvrir</a></span></li>`; }).join("")}
      <li class="bilan"><input type="checkbox" id="b-${s.n}" data-bilan="${s.n}" ${etat.bilans[s.n] ? "checked" : ""}><label for="b-${s.n}">${h(s.bilan)}</label></li></ul></div>`; }).join("")}</div>
  <div class="suivant"><a class="btn sec" href="#veille">Entreprises modèles</a></div>`;
}
