/* =====================================================================
   FayeMath Formation — js/etat.js
   L'état de l'apprenant (progression, réponses, notes) et sa sauvegarde.
   Tout est gardé par le navigateur (localStorage) sur cet ordinateur ;
   l'écran « Sauvegarde » permet d'en exporter une copie.
   ===================================================================== */
"use strict";
const APP_VERSION = "2.3";               // numéro affiché dans le menu et l'écran de réglages
const CLE = "fayemath-formation-v2";      // clé de sauvegarde de la version 2
const CLE_V1 = "fayemath-formation-v1";   // ancienne clé, relue une seule fois pour reprendre la progression

/* Structure d'un état vide. Chaque champ est commenté pour pouvoir lire une sauvegarde à l'œil. */
const VIDE = () => ({
  v:2, nom:"Ousseynou Faye", theme:"", t:0,
  taille:0,     // taille du texte : 0 normale, 1 grande, 2 très grande
  dernierExport:"", // date de la dernière sauvegarde enregistrée ou partagée
  fav:{},       // leçons favorites      : {idLeçon: true}
  exo:{},       // mises en pratique faites : {idLeçon: "AAAA-MM-JJ"}
  lu:{},        // leçons lues          : {idLeçon: "AAAA-MM-JJ"}
  refl:{},      // réponses de réflexion : {idLeçon: texte}
  cas:{},       // réponses aux cas      : {idModule: texte}
  casVu:{},     // corrigé du cas ouvert : {idModule: true}
  atel:{},      // ateliers              : {idModule: texte}
  quizM:{},     // quiz de module        : {idModule: {rep:{n°: choix}, best: %, d: date}}
  bilanP:{},    // bilans de pôle        : {pôle: {best: %, d: date}}
  act:{},       // statut des actions    : {clé: "todo" | "cours" | "fait"}
  ech:{},       // échéances des actions : {clé: "AAAA-MM-JJ"}
  fc:{},        // cartes de révision    : {clé: {b: boîte 1-5, d: date de prochaine révision}}
  journal:[],   // journal de bord       : [{d, appris, applique}]
  objectif:4,   // objectif de leçons par semaine
  temps:{},     // minutes d'étude       : {"AAAA-MM-JJ": minutes}
  jours:{},     // jours d'activité      : {"AAAA-MM-JJ": 1}
  /* --- partie « Entreprises modèles » (inchangée depuis la version 1) --- */
  done:{}, dates:{}, notes:{}, bilans:{}, tests:{}, quiz:{}, synth:{}, debut:""
});

/* Complète un état lu (sauvegarde ancienne ou partielle) avec les champs manquants. */
function normaliser(e){
  const b = VIDE(); e = e || {};
  for (const k in b) if (e[k] != null && typeof e[k] === typeof b[k] && Array.isArray(e[k]) === Array.isArray(b[k])) b[k] = e[k];
  return b;
}

/* ---------- petits outils ---------- */
const iso = d => d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
const auj = () => iso(new Date());
const frDate = s => { if (!s) return ""; const [y,m,d] = s.split("-"); return d + "/" + m + "/" + y; };
const plusJours = n => { const d = new Date(); d.setDate(d.getDate()+n); return iso(d); };
const h = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pct = (a,b) => b ? Math.round(100*a/b) : 0;
const sansAccent = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");

let etat = VIDE();
let stockageOK = true;   // faux si le navigateur refuse d'enregistrer (navigation privée, par exemple)

/* Lit la sauvegarde ; au premier lancement de la v2, reprend la progression de la v1. */
function charger(){
  try {
    const brut = localStorage.getItem(CLE);
    if (brut){ etat = normaliser(JSON.parse(brut)); return; }
    const v1 = localStorage.getItem(CLE_V1);
    if (v1){ etat = migrerV1(JSON.parse(v1)); sauver(); }
  } catch(e){ stockageOK = false; }
}

/* Reprise de la version 1 : leçons lues, ateliers et toute la partie « Entreprises modèles ».
   Les quiz de module sont à refaire : ils sont passés de 3 à 8 questions avec un seuil de 80 %. */
function migrerV1(a){
  const e = VIDE(); a = a || {};
  FM.modules.forEach(m => {
    m.lecons.forEach(l => { if (l.v1 && a.lu && a.lu[l.v1]) e.lu[l.id] = auj(); });
    if (m.v1 && a.atel && a.atel[m.v1]) e.atel[m.id] = a.atel[m.v1];
  });
  for (const k of ["done","dates","notes","bilans","tests","quiz","synth","jours"]) if (a[k] && typeof a[k] === "object") e[k] = a[k];
  if (typeof a.debut === "string") e.debut = a.debut;
  return e;
}

/* Fusionne deux états (par exemple celui du téléphone et celui de l'ordinateur) sans rien perdre :
   on garde tout ce qui est fait d'un côté ou de l'autre, le meilleur score, le texte le plus long. */
function fusionner(a, b){
  const e = normaliser(JSON.parse(JSON.stringify(a))); b = normaliser(b);
  const long = (x, y) => (String(y || "").trim().length > String(x || "").trim().length ? y : x);
  const cles = (x, y) => new Set(Object.keys(x).concat(Object.keys(y)));
  for (const k of cles(e.lu, b.lu)) e.lu[k] = [e.lu[k], b.lu[k]].filter(Boolean).sort()[0];            // date la plus ancienne
  for (const c of ["refl","cas","atel","synth"]) for (const k of cles(e[c], b[c])) e[c][k] = long(e[c][k], b[c][k]);
  for (const c of ["casVu","fav","jours","done","bilans","tests"]) Object.assign(e[c], b[c], e[c]);
  for (const c of ["exo","dates","ech"]) e[c] = Object.assign({}, b[c], e[c]);
  for (const k of cles(e.quizM, b.quizM)){ const x = e.quizM[k], y = b.quizM[k]; e.quizM[k] = !x ? y : !y ? x : ((y.best || 0) > (x.best || 0) ? y : x); }
  for (const k of cles(e.bilanP, b.bilanP)){ const x = e.bilanP[k], y = b.bilanP[k]; e.bilanP[k] = !x ? y : !y ? x : (y.best > x.best ? y : x); }
  const rang = {todo:0, cours:1, fait:2};
  for (const k of cles(e.act, b.act)) e.act[k] = (rang[b.act[k]] || 0) > (rang[e.act[k]] || 0) ? b.act[k] : (e.act[k] || b.act[k]);
  for (const k of cles(e.fc, b.fc)){ const x = e.fc[k], y = b.fc[k]; e.fc[k] = !x ? y : !y ? x : (y.b > x.b ? y : x); }
  for (const k of cles(e.temps, b.temps)) e.temps[k] = Math.max(e.temps[k] || 0, b.temps[k] || 0);
  for (const k of cles(e.notes, b.notes)){ const x = e.notes[k] || {}, y = b.notes[k] || {}; e.notes[k] = {a:long(x.a,y.a), b:long(x.b,y.b), c:long(x.c,y.c), act:long(x.act,y.act)}; }
  for (const k of cles(e.quiz, b.quiz)) e.quiz[k] = Object.assign({}, b.quiz[k], e.quiz[k]);
  const vus = new Set(e.journal.map(j => j.d + "|" + j.appris));
  b.journal.forEach(j => { if (!vus.has(j.d + "|" + j.appris)) e.journal.push(j); });
  e.journal.sort((x, y) => (x.d < y.d ? 1 : x.d > y.d ? -1 : 0));
  if (!e.debut) e.debut = b.debut;
  return e;
}

/* Enregistre l'état et note le jour comme jour d'activité. */
function sauver(){
  etat.t = Date.now(); etat.jours[auj()] = 1;
  try { localStorage.setItem(CLE, JSON.stringify(etat)); stockageOK = true; } catch(e){ stockageOK = false; }
  const el = document.getElementById("etat");
  if (el) el.textContent = stockageOK ? "Progression enregistrée sur cet appareil" : "Enregistrement impossible : exportez une sauvegarde";
}
