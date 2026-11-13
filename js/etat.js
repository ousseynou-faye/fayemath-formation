/* =====================================================================
   FayeMath Formation — js/etat.js
   L'état de l'apprenant (progression, réponses, notes) et sa sauvegarde.
   Tout est gardé par le navigateur (localStorage) sur cet ordinateur ;
   l'écran « Sauvegarde » permet d'en exporter une copie.
   ===================================================================== */
"use strict";
const CLE = "fayemath-formation-v2";      // clé de sauvegarde de la version 2
const CLE_V1 = "fayemath-formation-v1";   // ancienne clé, relue une seule fois pour reprendre la progression

/* Structure d'un état vide. Chaque champ est commenté pour pouvoir lire une sauvegarde à l'œil. */
const VIDE = () => ({
  v:2, nom:"Ousseynou Faye", theme:"", t:0,
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

/* Enregistre l'état et note le jour comme jour d'activité. */
function sauver(){
  etat.t = Date.now(); etat.jours[auj()] = 1;
  try { localStorage.setItem(CLE, JSON.stringify(etat)); stockageOK = true; } catch(e){ stockageOK = false; }
  const el = document.getElementById("etat");
  if (el) el.textContent = stockageOK ? "Progression enregistrée sur cet ordinateur" : "Enregistrement impossible : exportez une sauvegarde";
}
