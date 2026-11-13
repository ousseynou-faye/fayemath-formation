/* =====================================================================
   FayeMath Formation — js/moteur.js
   Calculs tirés des données et de l'état : progression, validation,
   prochaine étape, actions, cartes de révision, recherche.
   Aucun affichage ici.
   ===================================================================== */
"use strict";
const SEUIL = 80;                                   // % de bonnes réponses pour valider un quiz
const MOD = id => FM.modules.find(m => m.id === id);
const POLE = id => FM.poles.find(p => p.id === id);
const modsPole = p => FM.modules.filter(m => m.pole === p);
/* Liste à plat de toutes les leçons, avec leur module et leur rang */
const LECONS = FM.modules.flatMap(m => m.lecons.map((l,i) => ({l, m, i})));
const LECON = id => LECONS.find(x => x.l.id === id);

/* ---------- temps d'étude estimé d'une leçon ---------- */
const nbMots = s => String(s).trim().split(/\s+/).length;
function dureeLecon(l){               // lecture à 180 mots/minute + 3 minutes pour la question de réflexion
  const mots = nbMots(l.p.join(" ") + " " + l.ex + " " + l.fm + " " + l.err + " " + l.cle);
  return Math.max(4, Math.round(mots/180) + 3);
}
const dureeModule = m => m.lecons.reduce((a,l) => a + dureeLecon(l), 0) + 35;   // + cas, atelier, quiz

/* ---------- progression d'un module ---------- */
const lues = m => m.lecons.filter(l => etat.lu[l.id]).length;
const scoreQuiz = m => (etat.quizM[m.id] || {}).best || 0;
const quizOK = m => scoreQuiz(m) >= SEUIL;
const casFait = m => !!etat.casVu[m.id];
const atelierFait = m => (etat.atel[m.id] || "").trim().length >= 20;
const valide = m => lues(m) === m.lecons.length && quizOK(m);          // module validé : tout lu + quiz ≥ 80 %
const pasModule = m => m.lecons.length + 3;                              // leçons + cas + atelier + quiz
const faitsModule = m => lues(m) + (casFait(m)?1:0) + (atelierFait(m)?1:0) + (quizOK(m)?1:0);
const progModule = m => pct(faitsModule(m), pasModule(m));
const statutModule = m => valide(m) ? "ok" : faitsModule(m) ? "cours" : "";
const libStatut = {ok:"Validé", cours:"En cours", "":"À commencer"};
function progListe(L){ return pct(L.reduce((a,m) => a + faitsModule(m), 0), L.reduce((a,m) => a + pasModule(m), 0)); }
const progPole = p => progListe(modsPole(p));
const progGlobale = () => progListe(FM.modules);
const poleValide = p => modsPole(p).every(valide) && ((etat.bilanP[p] || {}).best || 0) >= SEUIL;

/* ---------- prochaine étape conseillée ---------- */
function prochaineEtape(){
  for (const m of FM.modules){
    if (valide(m) && casFait(m) && atelierFait(m)) continue;
    const l = m.lecons.find(x => !etat.lu[x.id]);
    if (l) return {href:"#lecon/"+l.id, sur:"Module "+m.n+" · "+m.court, titre:l.t, quoi:"Leçon · environ "+dureeLecon(l)+" min"};
    if (!casFait(m)) return {href:"#etape/"+m.id+"/cas", sur:"Module "+m.n+" · "+m.court, titre:m.cas.t, quoi:"Cas pratique"};
    if (!atelierFait(m)) return {href:"#etape/"+m.id+"/atelier", sur:"Module "+m.n+" · "+m.court, titre:m.atelier.t, quoi:"Atelier écrit"};
    if (!quizOK(m)) return {href:"#etape/"+m.id+"/quiz", sur:"Module "+m.n+" · "+m.court, titre:"Quiz de validation", quoi:"8 questions · seuil "+SEUIL+" %"};
  }
  return null;
}

/* ---------- régularité ---------- */
function serie(){                       // nombre de jours d'activité consécutifs
  let n = 0; const d = new Date();
  if (!etat.jours[iso(d)]) d.setDate(d.getDate()-1);
  while (etat.jours[iso(d)]){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function joursSemaine(){                // les 7 jours de la semaine en cours, du lundi au dimanche
  const d = new Date(), lundi = new Date(d); lundi.setDate(d.getDate() - ((d.getDay()+6)%7));
  return Array.from({length:7}, (_,i) => { const x = new Date(lundi); x.setDate(lundi.getDate()+i); return iso(x); });
}
const leconsSemaine = () => { const S = new Set(joursSemaine()); return Object.values(etat.lu).filter(d => S.has(d)).length; };
const minutesSemaine = () => joursSemaine().reduce((a,j) => a + (etat.temps[j] || 0), 0);
const minutesTotal = () => Object.values(etat.temps).reduce((a,b) => a+b, 0);
const fmtMin = n => n >= 60 ? Math.floor(n/60) + " h " + String(n%60).padStart(2,"0") : n + " min";

/* ---------- plan d'action ---------- */
function actions(){                     // toutes les actions : celles des modules, puis les idées à tester des entreprises modèles
  const L = [];
  FM.modules.forEach(m => m.actions.forEach((txt,i) => L.push({k:"A-"+m.id+"-"+i, txt, src:"Module "+m.n+" · "+m.court, pole:m.pole, href:"#module/"+m.id})));
  MODULES.forEach(v => L.push({k:"T"+v.n, txt:v.idee, src:"Entreprises modèles · "+v.court, pole:"E", href:"#veille/"+v.n}));
  return L;
}
const statut = k => etat.act[k] || (k[0] === "T" && etat.tests[k.slice(1)] ? "fait" : "todo");
function setStatut(k, s){ etat.act[k] = s; if (k[0] === "T"){ if (s === "fait") etat.tests[k.slice(1)] = true; else delete etat.tests[k.slice(1)]; } sauver(); }

/* ---------- cartes de révision (boîtes de Leitner) ---------- */
const INTERVALLES = [0, 1, 3, 7, 14, 30];           // jours avant la prochaine révision, selon la boîte 1 à 5
function cartes(){                                   // seules les cartes des modules commencés sont proposées
  const C = [];
  FM.modules.filter(m => lues(m) > 0).forEach(m => {
    m.lecons.filter(l => etat.lu[l.id]).forEach(l => C.push({k:"C-"+l.id, lab:"Module "+m.n+" · à retenir", q:l.t, r:l.cle}));
    m.quiz.forEach((q,i) => C.push({k:"Q-"+m.id+"-"+i, lab:"Module "+m.n+" · "+m.court, q:q[0], r:q[1][q[2]], x:q[3]}));
  });
  MODULES.filter(v => v.r.some(r => etat.done[r[0]])).forEach(v =>
    v.quiz.forEach((q,i) => C.push({k:"V-"+v.n+"-"+i, lab:"Entreprises modèles · "+v.court, q:q[0], r:q[1][q[2]], x:q[3]})));
  return C;
}
const carteDue = c => { const f = etat.fc[c.k]; return !f || f.d <= auj(); };
function noterCarte(k, su){                          // su = vrai : boîte suivante ; faux : retour en boîte 1
  const f = etat.fc[k] || {b:0};
  const b = su ? Math.min(5, f.b + 1) : 1;
  etat.fc[k] = {b, d: plusJours(su ? INTERVALLES[b] : 1)};
  sauver();
}

/* ---------- recherche plein texte ---------- */
let INDEX_RECH = null;
function indexRecherche(){
  if (INDEX_RECH) return INDEX_RECH;
  const I = [];
  FM.modules.forEach(m => {
    m.lecons.forEach(l => I.push({type:"Leçon · module "+m.n, titre:l.t, txt:[l.t].concat(l.p, l.ex, l.fm, l.err, l.cle).join(" "), href:"#lecon/"+l.id}));
    I.push({type:"Cas pratique · module "+m.n, titre:m.cas.t, txt:m.cas.t+" "+m.cas.s+" "+m.cas.q.join(" "), href:"#etape/"+m.id+"/cas"});
    I.push({type:"Fiche-outil · module "+m.n, titre:m.outil.t, txt:m.outil.t+" "+m.outil.usage+" "+m.outil.lignes.join(" "), href:"#etape/"+m.id+"/outil"});
    I.push({type:"Module "+m.n, titre:m.titre, txt:m.titre+" "+m.but+" "+m.objectifs.join(" ")+" "+m.actions.join(" "), href:"#module/"+m.id});
  });
  FM.glossaire.forEach(g => I.push({type:"Glossaire", titre:g[0], txt:g[0]+" "+g[1], href:"#glossaire"}));
  MODULES.forEach(v => { I.push({type:"Entreprises modèles", titre:v.titre, txt:v.titre+" "+v.intro+" "+v.retenir.join(" ")+" "+v.idee, href:"#veille/"+v.n});
    v.r.forEach(r => I.push({type:"Ressource "+r[0], titre:r[1], txt:r[1]+" "+r[2]+" "+r[5], href:"#veille/"+v.n})); });
  I.forEach(x => x.n = sansAccent(x.txt));
  return INDEX_RECH = I;
}
function chercher(q){
  const mots = sansAccent(q).split(/\s+/).filter(x => x.length > 1);
  if (!mots.length) return [];
  return indexRecherche().filter(x => mots.every(w => x.n.includes(w)))
    .sort((a,b) => (mots.some(w => sansAccent(b.titre).includes(w))?1:0) - (mots.some(w => sansAccent(a.titre).includes(w))?1:0)).slice(0,60);
}
function extrait(txt, q){               // phrase autour du premier mot trouvé, mot surligné
  const w = sansAccent(q).split(/\s+/).filter(x => x.length > 1)[0] || "", i = sansAccent(txt).indexOf(w);
  const a = Math.max(0, i - 70), b = Math.min(txt.length, i + 130);
  let s = h((a ? "… " : "") + txt.slice(a, b) + (b < txt.length ? " …" : ""));
  if (w) s = s.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "i"), "<mark>$1</mark>");
  return s;
}

/* ---------- entreprises modèles : outils repris de la version 1 ---------- */
const nb = liste => liste.filter(id => etat.done[id]).length;
const idsModule = v => v.r.map(r => r[0]);
const essModule = v => v.r.filter(r => r[4]).map(r => r[0]);
const aNote = id => { const n = etat.notes[id]; return n && (n.a||n.b||n.c||n.act); };
function marquer(id, oui){ if (oui){ etat.done[id] = true; etat.dates[id] = auj(); } else { delete etat.done[id]; delete etat.dates[id]; } sauver(); }
