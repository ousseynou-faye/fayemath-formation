/* =====================================================================
   FayeMath Formation — js/vues-parcours.js
   Écrans du parcours : tableau de bord, pôle, module, leçon, cas,
   atelier, fiche-outil, quiz, bilans de pôle, attestation.
   Chaque fonction renvoie le HTML de l'écran.
   ===================================================================== */
"use strict";
const barre = p => `<div class="barre" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const pastille = s => `<span class="pastille ${s}">${libStatut[s]}</span>`;

/* ---------- tableau de bord ---------- */
function vueAccueil(){
  const e = prochaineEtape(), nv = FM.modules.filter(valide).length, due = cartes().filter(carteDue).length;
  const A = actions(), enCours = A.filter(a => statut(a.k) === "cours").length, faites = A.filter(a => statut(a.k) === "fait").length;
  const ls = leconsSemaine(), J = joursSemaine(), fin = finEstimee(), jd = joursDepuis(etat.dernierExport);
  const aSauver = Object.keys(etat.lu).length > 0 && (jd === null || jd >= 7);       // rappel hebdomadaire de sauvegarde
  const favs = LECONS.filter(x => etat.fav[x.l.id]);
  return `${aSauver ? `<div class="carte rappel"><div><b>Pensez à votre sauvegarde.</b> <span class="petit">${jd === null ? "Aucune copie enregistrée pour l'instant." : "Dernière copie il y a " + jd + " jours."}</span></div><a class="btn sec" href="#sauvegarde">Sauvegarder</a></div>` : ""}
  <div class="sur-titre">Tableau de bord</div><h1>Bonjour ${h(etat.nom.split(" ")[0])}</h1>
  <p class="chapeau">Votre formation de fondateur : 4 pôles, ${FM.modules.length} modules, ${LECONS.length} leçons. Chaque module se valide par ses leçons et un quiz réussi à ${SEUIL} %.</p>
  ${e ? `<div class="carte reprise"><div><div class="sur-titre">Reprendre · ${h(e.sur)}</div><h3 style="font-size:19px">${h(e.titre)}</h3><div class="petit">${h(e.quoi)}</div></div><a class="btn" href="${e.href}">Continuer</a></div>`
      : `<div class="carte reprise"><div><h3>Parcours terminé</h3><div class="petit">Tous les modules sont validés. Passez les bilans de pôle et entretenez vos acquis avec la révision.</div></div><a class="btn" href="#bilans">Bilans et attestations</a></div>`}
  <div class="kpis">
    <div class="kpi"><b>${progGlobale()} %</b><span>du parcours accompli</span></div>
    <div class="kpi"><b>${nv} / ${FM.modules.length}</b><span>modules validés</span></div>
    <div class="kpi"><b>${ls} / ${etat.objectif}</b><span>leçons cette semaine</span></div>
    <div class="kpi"><b>${serie()}</b><span>jour${serie()>1?"s":""} d'affilée</span></div>
    <div class="kpi"><b>${fmtMin(minutesSemaine())}</b><span>d'étude cette semaine</span></div>
    <div class="kpi"><b>${due}</b><span>carte${due>1?"s":""} à réviser</span></div>
  </div>
  <div class="carte"><h3>Ma semaine</h3><div class="petit">Objectif : ${etat.objectif} leçons par semaine. Les jours d'étude sont en vert. ${fin ? `À ce rythme, il reste ${fin.reste} leçons, soit environ ${fin.semaines} semaine${fin.semaines>1?"s":""} (vers le ${fin.date}). ` : ""}<a href="#journal">Modifier l'objectif</a></div>
    <div class="semaine">${J.map((j,i) => `<span class="${etat.jours[j] ? "on" : ""}">${"LMMJVSD"[i]}</span>`).join("")}</div></div>
  <h2>Les 4 pôles</h2>
  <div class="grille g2">${FM.poles.map(p => { const L = modsPole(p.id), v = L.filter(valide).length;
    return `<a class="carte pole-carte" href="#pole/${p.id}"><div class="pole-lettre">Pôle ${p.id}</div><h3 style="font-size:18px">${h(p.titre)}</h3><p class="petit" style="margin:0">${h(p.but)}</p>
      ${barre(progPole(p.id))}<div class="chiffres"><span><b>${v}</b> / ${L.length} modules validés</span><span><b>${progPole(p.id)} %</b></span>${poleValide(p.id) ? '<span class="pastille ok">Pôle validé</span>' : ""}</div></a>`; }).join("")}</div>
  <h2>Carte des compétences</h2>
  <div class="comp">${FM.modules.map(m => `<a class="${statutModule(m)}" href="#module/${m.id}" title="${h(m.titre)} — ${libStatut[statutModule(m)]}"><i>${m.n}</i><span>${h(m.court)}</span></a>`).join("")}</div>
  <p class="petit" style="margin-top:8px">Vert : module validé · ocre : en cours · blanc : à commencer.</p>
  ${favs.length ? `<h2>Mes favoris</h2><div class="puces">${favs.slice(0,8).map(x => `<a class="puce" href="#lecon/${x.l.id}" style="text-decoration:none;font-size:13.5px;padding:5px 12px">★ ${h(x.l.t)}</a>`).join("")}${favs.length > 8 ? ` <a class="petit" href="#favoris">Tous les favoris</a>` : ""}</div>` : ""}
  <h2>Appliquer</h2>
  <div class="grille g3">
    <a class="carte mod-carte" href="#actions"><h3>Plan d'action</h3><p>${faites} action${faites>1?"s":""} faite${faites>1?"s":""}, ${enCours} en cours, sur ${A.length}.</p></a>
    <a class="carte mod-carte" href="#outils"><h3>Boîte à outils</h3><p>${FM.modules.length} fiches prêtes à l'emploi : scripts, trames, check-lists.</p></a>
    <a class="carte mod-carte" href="#veille"><h3>Entreprises modèles</h3><p>${nb(ESSENTIELLES)} ressources essentielles étudiées sur ${ESSENTIELLES.length}.</p></a>
  </div>`;
}

/* ---------- un pôle ---------- */
function vuePole(p){
  const L = modsPole(p.id), b = etat.bilanP[p.id];
  return `<div class="sur-titre">Pôle ${p.id}</div><h1>${h(p.titre)}</h1><p class="chapeau">${h(p.but)}</p>
  <div class="carte">${barre(progPole(p.id))}<div class="chiffres"><span><b>${L.filter(valide).length}</b> / ${L.length} modules validés</span><span><b>${progPole(p.id)} %</b> accompli</span><span>Bilan de pôle : <b>${b ? b.best+" %" : "—"}</b></span></div></div>
  <h2>Modules</h2>
  <div class="grille g2">${L.map(m => `<a class="carte mod-carte" href="#module/${m.id}"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><span class="sur-titre" style="margin:0">Module ${m.n}</span>${pastille(statutModule(m))}</div>
    <h3 style="font-size:17px">${h(m.titre)}</h3><p>${h(m.but)}</p>${barre(progModule(m))}
    <div class="petit">${lues(m)} / ${m.lecons.length} leçons · quiz ${scoreQuiz(m) ? scoreQuiz(m)+" %" : "à faire"} · environ ${fmtMin(dureeModule(m))}</div></a>`).join("")}</div>
  <div class="suivant"><a class="btn sec" href="#accueil">Tableau de bord</a><a class="btn" href="#bilan/${p.id}">Passer le bilan du pôle ${p.id}</a></div>`;
}

/* ---------- un module : objectifs et parcours en étapes ---------- */
function vueModule(m){
  const q = etat.quizM[m.id] || {}, i = FM.modules.indexOf(m), av = FM.modules[i-1], ap = FM.modules[i+1];
  const etape = (href, fait, num, titre, sous) => `<li><a class="${fait ? "fait" : ""}" href="${href}"><span class="rond">${fait ? "✓" : num}</span><span><b>${h(titre)}</b><small>${sous}</small></span><span class="petit">${fait ? "Fait" : "Ouvrir"}</span></a></li>`;
  return `<div class="sur-titre">Pôle ${m.pole} · Module ${m.n} sur ${FM.modules.length}</div><h1>${h(m.titre)}</h1><p class="chapeau">${h(m.but)}</p>
  <div class="carte">${barre(progModule(m))}<div class="chiffres"><span>${pastille(statutModule(m))}</span><span><b>${lues(m)}</b> / ${m.lecons.length} leçons</span><span>Quiz : <b>${q.best ? q.best+" %" : "—"}</b></span><span>Durée : <b>${fmtMin(dureeModule(m))}</b></span></div></div>
  <h2>À la fin de ce module, vous saurez</h2><div class="carte retenir"><ul class="obj">${m.objectifs.map(o => `<li>${h(o)}</li>`).join("")}</ul></div>
  <h2>Parcours du module</h2>
  <ol class="etp">
    ${m.lecons.map((l,k) => etape("#lecon/"+l.id, !!etat.lu[l.id], k+1, l.t, "Leçon · "+lectureLecon(l)+" min de lecture + mise en pratique"+(etat.exo[l.id] ? " (faite)" : ""))).join("")}
    ${etape("#etape/"+m.id+"/cas", casFait(m), "C", "Cas pratique : "+m.cas.t, "Une situation réelle à résoudre, puis les éléments de réponse")}
    ${etape("#etape/"+m.id+"/atelier", atelierFait(m), "A", "Atelier : "+m.atelier.t, "Un écrit à produire pour FayeMath Academy")}
    ${etape("#etape/"+m.id+"/outil", false, "F", "Fiche-outil : "+m.outil.t, "Modèle prêt à l'emploi, à copier ou imprimer").replace(">Ouvrir<",">Consulter<")}
    ${etape("#etape/"+m.id+"/quiz", quizOK(m), "Q", "Quiz de validation", m.quiz.length+" questions · module validé à "+SEUIL+" %"+(q.best ? " · meilleur score "+q.best+" %" : ""))}
  </ol>
  <h2>Actions à mettre en place</h2>
  <div class="carte">${m.actions.map((a,k) => ligneAction({k:"A-"+m.id+"-"+k, txt:a})).join("")}<p class="petit" style="margin:10px 0 0">Ces actions figurent dans votre <a href="#actions">plan d'action</a>.</p></div>
  ${m.veille.length ? `<h2>Études de cas liées</h2><div class="puces">${m.veille.map(n => { const v = MODULES[n-1]; return `<a class="puce" href="#veille/${n}" style="text-decoration:none;font-size:13.5px;padding:5px 12px">${h(v.court)}</a>`; }).join("")}</div>` : ""}
  <h2>Sources</h2><ul class="obj petit">${m.sources.map(s => `<li>${s[1] ? `<a href="${h(s[1])}" target="_blank" rel="noopener">${h(s[0])}</a>` : h(s[0])}</li>`).join("")}</ul>
  <div class="suivant"><span>${av ? `<a class="btn sec" href="#module/${av.id}">Module ${av.n}</a>` : ""} <a class="btn sec" href="#imprimer/${m.id}">Version imprimable</a></span>
    ${ap ? `<a class="btn" href="#module/${ap.id}">Module ${ap.n} : ${h(ap.court)}</a>` : '<a class="btn" href="#bilans">Bilans et attestations</a>'}</div>`;
}

/* ---------- une leçon ---------- */
function corpsLecon(l){                 // texte de la leçon, sans les boutons (sert aussi à la version imprimable)
  return `<div class="lec">${l.p.map(x => `<p>${h(x)}</p>`).join("")}</div>
  <div class="bloc ex"><h3>Exemple concret</h3><p>${h(l.ex)}</p></div>
  ${l.appro && l.appro.length ? `<h2 class="appro-t">Pour aller plus loin</h2><div class="lec">${l.appro.map(x => `<p>${h(x)}</p>`).join("")}</div>` : ""}
  <div class="bloc fm"><h3>Chez FayeMath Academy</h3><p>${h(l.fm)}</p></div>
  <div class="bloc err"><h3>Erreur fréquente</h3><p>${h(l.err)}</p></div>
  <div class="bloc cle"><h3>À retenir</h3><p>${h(l.cle)}</p></div>`;
}
function suiteLecon(x){                 // étape qui suit une leçon : leçon suivante, sinon le cas pratique
  const s = x.m.lecons[x.i+1];
  return s ? {href:"#lecon/"+s.id, lab:"Leçon suivante"} : {href:"#etape/"+x.m.id+"/cas", lab:"Cas pratique"};
}
function vueLecon(x){
  const {l, m, i} = x, lu = etat.lu[l.id], s = suiteLecon(x), prec = m.lecons[i-1];
  return `<div class="sur-titre"><a href="#module/${m.id}" style="color:inherit;text-decoration:none">Module ${m.n} · ${h(m.court)}</a> · Leçon ${i+1} sur ${m.lecons.length}</div>
  <h1>${h(l.t)}</h1><p class="chapeau">${lectureLecon(l)} minutes de lecture et de réflexion, puis environ ${PRATIQUE} minutes de mise en pratique. ${lu ? `<span class="pastille ok">Lue le ${frDate(lu)}</span>` : ""}</p>
  <p class="sans-imp" style="margin:-8px 0 14px"><button class="btn sec" type="button" data-a="fav" data-id="${l.id}" aria-pressed="${!!etat.fav[l.id]}">${etat.fav[l.id] ? "★ Dans mes favoris" : "☆ Ajouter aux favoris"}</button></p>
  ${corpsLecon(l)}
  <div class="bloc exo"><h3>Mise en pratique · environ ${PRATIQUE} min</h3><p>${h(l.exo)}</p>
    <label class="coche-exo"><input type="checkbox" data-exo="${l.id}" ${etat.exo[l.id] ? "checked" : ""}> Je l'ai faite${etat.exo[l.id] ? " le " + frDate(etat.exo[l.id]) : ""}</label></div>
  <div class="bloc refl"><h3>Question de réflexion</h3><p>${h(l.q)}</p>
    <textarea class="zone" data-champ="refl:${l.id}" aria-label="Votre réponse" placeholder="Écrivez votre réponse en quelques lignes : c'est ce qui ancre la leçon.">${h(etat.refl[l.id] || "")}</textarea></div>
  <div class="suivant"><span>${prec ? `<a class="btn sec" href="#lecon/${prec.id}">Leçon précédente</a>` : `<a class="btn sec" href="#module/${m.id}">Retour au module</a>`}</span>
    <span>${lu ? `<a class="btn" href="${s.href}">${s.lab}</a>` : `<button class="btn vert" type="button" data-a="lire" data-id="${l.id}">J'ai étudié cette leçon · ${s.lab.toLowerCase()}</button>`}</span></div>`;
}

/* ---------- cas pratique, atelier, fiche-outil ---------- */
function vueCas(m){
  const c = m.cas, vu = etat.casVu[m.id];
  return `<div class="sur-titre"><a href="#module/${m.id}" style="color:inherit;text-decoration:none">Module ${m.n} · ${h(m.court)}</a> · Cas pratique</div><h1>${h(c.t)}</h1>
  <div class="bloc ex"><h3>La situation</h3><p>${h(c.s)}</p></div>
  <h2>Vos réponses</h2><ol class="obj">${c.q.map(q => `<li>${h(q)}</li>`).join("")}</ol>
  <textarea class="zone haute" data-champ="cas:${m.id}" aria-label="Vos réponses au cas pratique" placeholder="Répondez aux questions avec vos mots, comme si la situation se présentait demain.">${h(etat.cas[m.id] || "")}</textarea>
  ${vu ? `<div class="bloc cle"><h3>Éléments de réponse</h3>${c.r.map((r,i) => `<p style="font-weight:400;margin-top:${i?8:0}px"><b>${i+1}.</b> ${h(r)}</p>`).join("")}</div>
          <p class="petit">Comparez avec votre réponse : qu'aviez-vous oublié, qu'aviez-vous en plus ?</p>`
       : `<p><button class="btn" type="button" data-a="voir-cas" data-id="${m.id}">Voir les éléments de réponse</button> <span class="petit">Répondez d'abord par écrit : c'est l'effort de recherche qui fait apprendre.</span></p>`}
  <div class="suivant"><a class="btn sec" href="#module/${m.id}">Retour au module</a><a class="btn" href="#etape/${m.id}/atelier">Atelier</a></div>`;
}
function vueAtelier(m){
  return `<div class="sur-titre"><a href="#module/${m.id}" style="color:inherit;text-decoration:none">Module ${m.n} · ${h(m.court)}</a> · Atelier</div><h1>${h(m.atelier.t)}</h1>
  <div class="bloc fm"><h3>Consigne</h3><p>${h(m.atelier.c)}</p></div>
  <textarea class="zone haute" style="min-height:280px" data-champ="atel:${m.id}" aria-label="Votre atelier" placeholder="Votre texte est enregistré au fur et à mesure.">${h(etat.atel[m.id] || "")}</textarea>
  <p class="petit">L'atelier est compté comme fait à partir de quelques lignes écrites. Vous le retrouvez dans « Mes écrits ».</p>
  <div class="suivant"><a class="btn sec" href="#etape/${m.id}/cas">Cas pratique</a><a class="btn" href="#etape/${m.id}/outil">Fiche-outil</a></div>`;
}
function corpsOutil(o){
  return `<div class="carte outil-txt"><p class="petit">${h(o.usage)}</p>${o.lignes.map(x => x.startsWith("## ") ? `<h3>${h(x.slice(3))}</h3>` : `<p>${h(x)}</p>`).join("")}</div>`;
}
const texteOutil = o => o.t.toUpperCase() + "\n" + o.usage + "\n" + o.lignes.map(x => x.startsWith("## ") ? "\n" + x.slice(3).toUpperCase() : "- " + x).join("\n");
function vueOutil(m){
  return `<div class="sur-titre"><a href="#module/${m.id}" style="color:inherit;text-decoration:none">Module ${m.n} · ${h(m.court)}</a> · Fiche-outil</div><h1>${h(m.outil.t)}</h1>
  ${corpsOutil(m.outil)}
  <p style="margin-top:12px"><button class="btn" type="button" data-a="copier-outil" data-id="${m.id}">Copier le texte</button> <button class="btn sec" type="button" data-a="imprimer">Imprimer</button> <span class="petit" id="msg-copie" role="status"></span></p>
  <div class="suivant"><a class="btn sec" href="#etape/${m.id}/atelier">Atelier</a><a class="btn" href="#etape/${m.id}/quiz">Quiz de validation</a></div>`;
}

/* ---------- quiz (module ou bilan de pôle) ----------
   questions : [[question, [choix], bonne réponse, explication]] ; rep : {n°: choix} ; attr : attributs data des boutons */
const melanges = {};                   // ordre d'affichage des réponses, par quiz : {clé: [[2,0,1], …]}
function ordreReponses(cle, questions){ // tiré au hasard une fois par tentative, pour que la bonne réponse change de place
  if (!melanges[cle] || melanges[cle].length !== questions.length)
    melanges[cle] = questions.map(q => { const o = q[1].map((_,j) => j); for (let i = o.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [o[i],o[j]] = [o[j],o[i]]; } return o; });
  return melanges[cle];
}
function blocQuestions(questions, rep, attr, cle){
  const ordre = ordreReponses(cle, questions);
  return questions.map((q,i) => { const c = rep[i], repondu = c !== undefined;
    return `<div class="q"><p>${i+1}. ${h(q[0])}</p><div class="choix">${ordre[i].map(j =>
      `<button type="button" ${attr} data-q="${i}" data-c="${j}" ${repondu ? "disabled" : ""} class="${repondu && j===q[2] ? "bon" : repondu && j===c ? "faux" : ""}">${h(q[1][j])}</button>`).join("")}</div>
      ${repondu ? `<div class="verdict ${c===q[2] ? "b" : "m"}"><b>${c===q[2] ? "Bonne réponse." : "Pas tout à fait."}</b> ${h(q[3])}</div>` : ""}</div>`; }).join("");
}
const noteQuiz = (questions, rep) => pct(questions.filter((q,i) => rep[i] === q[2]).length, questions.length);
function vueQuiz(m){
  const s = etat.quizM[m.id] || {rep:{}}, n = Object.keys(s.rep).length, fini = n === m.quiz.length, note = noteQuiz(m.quiz, s.rep);
  const toutLu = lues(m) === m.lecons.length, ap = FM.modules[FM.modules.indexOf(m)+1];
  return `<div class="sur-titre"><a href="#module/${m.id}" style="color:inherit;text-decoration:none">Module ${m.n} · ${h(m.court)}</a> · Quiz de validation</div><h1>Quiz : ${h(m.titre)}</h1>
  <p class="chapeau">${m.quiz.length} questions. Le module est validé avec ${SEUIL} % de bonnes réponses et toutes les leçons lues. ${s.best ? `Meilleur score : <b>${s.best} %</b>.` : ""}</p>
  ${fini ? `<div class="carte resultat ${note >= SEUIL ? "ok" : "ko"}"><h3>${note} % de bonnes réponses</h3>
      <p style="margin:6px 0 10px">${note >= SEUIL ? (toutLu ? "Module validé. Les questions rejoignent vos cartes de révision." : "Quiz réussi. Il reste des leçons à lire pour valider le module.") : "Seuil non atteint. Relisez les leçons concernées par vos erreurs, puis recommencez."}</p>
      <button class="btn sec" type="button" data-a="refaire-quiz" data-id="${m.id}">Refaire le quiz</button> ${note >= SEUIL && ap ? `<a class="btn" href="#module/${ap.id}">Module suivant</a>` : ""}</div>` : ""}
  <div class="carte">${blocQuestions(m.quiz, s.rep, `data-a="rep-quiz" data-id="${m.id}"`, "M-"+m.id)}</div>
  ${fini ? "" : `<p class="petit" role="status">${n} réponse${n>1?"s":""} sur ${m.quiz.length}.</p>`}
  <div class="suivant"><a class="btn sec" href="#module/${m.id}">Retour au module</a></div>`;
}

/* ---------- bilans de pôle et attestations ---------- */
let bilan = null;                       // bilan en cours : {pole, qs: [questions], rep: {}}
function tirerBilan(p){                 // 12 questions tirées au hasard dans les quiz du pôle (20 pour l'examen final)
  const T = modsBilan(p).flatMap(m => m.quiz); delete melanges["B"];
  for (let i = T.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [T[i],T[j]] = [T[j],T[i]]; }
  bilan = {pole:p, qs:T.slice(0, p === "X" ? 20 : 12), rep:{}};
}
function vueBilans(){
  return `<div class="sur-titre">S'évaluer</div><h1>Bilans et attestations</h1>
  <p class="chapeau">Chaque pôle se conclut par un bilan de 12 questions tirées au hasard. L'attestation d'un pôle s'obtient quand tous ses modules sont validés et que le bilan atteint ${SEUIL} %.</p>
  <div class="grille g2">${FM.poles.map(p => { const L = modsPole(p.id), v = L.filter(valide).length, b = etat.bilanP[p.id], ok = poleValide(p.id);
    return `<div class="carte"><div class="pole-lettre">Pôle ${p.id}</div><h3 style="font-size:18px">${h(p.titre)}</h3>
      <div class="chiffres"><span><b>${v}</b> / ${L.length} modules validés</span><span>Bilan : <b>${b ? b.best+" %" : "—"}</b>${b ? " le "+frDate(b.d) : ""}</span></div>
      <p style="margin:12px 0 0;display:flex;gap:8px;flex-wrap:wrap"><a class="btn${b ? " sec" : ""}" href="#bilan/${p.id}">${b ? "Repasser le bilan" : "Passer le bilan"}</a>
      ${ok ? `<a class="btn vert" href="#attestation/${p.id}">Voir l'attestation</a>` : `<span class="pastille">Attestation verrouillée</span>`}</p></div>`; }).join("")}</div>
  <h2>Examen final</h2>
  ${(() => { const b = etat.bilanP.X, tous = FM.poles.every(p => poleValide(p.id)), ok = poleValide("X");
    return `<div class="carte" style="border-top:5px solid var(--or)"><div class="pole-lettre">Parcours complet</div><h3 style="font-size:18px">Examen final : 20 questions sur les 17 modules</h3>
      <div class="chiffres"><span><b>${FM.poles.filter(p => poleValide(p.id)).length}</b> / 4 pôles validés</span><span>Examen : <b>${b ? b.best+" %" : "—"}</b>${b ? " le "+frDate(b.d) : ""}</span></div>
      <p style="margin:12px 0 0;display:flex;gap:8px;flex-wrap:wrap"><a class="btn${b ? " sec" : ""}" href="#bilan/X">${b ? "Repasser l'examen" : "Passer l'examen final"}</a>
      ${ok ? `<a class="btn vert" href="#attestation/X">Attestation générale</a>` : `<span class="pastille">${tous ? "Réussissez l'examen à " + SEUIL + " %" : "Attestation générale : validez d'abord les 4 pôles"}</span>`}</p></div>`; })()}
  <p class="pied">Ces attestations sont des documents internes de suivi de votre formation personnelle. Elles n'ont pas valeur de diplôme.</p>`;
}
function vueBilan(p){
  if (!bilan || bilan.pole !== p.id) tirerBilan(p.id);
  const n = Object.keys(bilan.rep).length, fini = n === bilan.qs.length, note = noteQuiz(bilan.qs, bilan.rep);
  return `<div class="sur-titre">${p.id === "X" ? "Examen final" : "Bilan du pôle " + p.id}</div><h1>${h(p.titre)}</h1>
  <p class="chapeau">${bilan.qs.length} questions tirées dans les ${modsBilan(p.id).length} modules ${p.id === "X" ? "du parcours" : "du pôle"}. Seuil : ${SEUIL} %.</p>
  ${fini ? `<div class="carte resultat ${note >= SEUIL ? "ok" : "ko"}"><h3>${note} % de bonnes réponses</h3><p style="margin:6px 0 10px">${note >= SEUIL ? "Bilan réussi." : "Seuil non atteint : reprenez les modules concernés, puis repassez le bilan."}</p>
    <button class="btn sec" type="button" data-a="nouveau-bilan" data-id="${p.id}">Nouveau tirage</button> <a class="btn" href="#bilans">Bilans et attestations</a></div>` : ""}
  <div class="carte">${blocQuestions(bilan.qs, bilan.rep, 'data-a="rep-bilan"', "B")}</div>
  ${fini ? "" : `<p class="petit" role="status">${n} réponse${n>1?"s":""} sur ${bilan.qs.length}.</p>`}`;
}
function vueAttestation(p){
  if (!poleValide(p.id)) return p.id === "X"
    ? `<h1>Attestation générale verrouillée</h1><p class="chapeau">Validez les quatre pôles, puis réussissez l'examen final à ${SEUIL} %.</p><a class="btn" href="#bilans">Bilans et attestations</a>`
    : `<h1>Attestation verrouillée</h1><p class="chapeau">Validez tous les modules du pôle ${p.id} et réussissez son bilan à ${SEUIL} % pour l'obtenir.</p><a class="btn" href="#pole/${p.id}">Ouvrir le pôle ${p.id}</a>`;
  const b = etat.bilanP[p.id];
  if (p.id === "X") return `<div class="attest"><img src="logo.png" alt="" width="84" height="84"><div class="sur-titre">FayeMath Academy · Formation du fondateur</div>
    <h1>Attestation générale de formation interne</h1><p>Il est attesté que</p><div class="nom">${h(etat.nom)}</div>
    <p>a validé l'ensemble du parcours du fondateur : <b>4 pôles, ${FM.modules.length} modules, ${LECONS.length} leçons</b></p>
    <ul>${FM.poles.map(q => `<li>Pôle ${q.id} · ${h(q.titre)} — bilan ${etat.bilanP[q.id].best} %</li>`).join("")}</ul>
    <p>Examen final : <b>${b.best} %</b> · le ${frDate(b.d)}</p>
    <p class="petit" style="margin-top:22px">Document interne de suivi d'une formation personnelle. Sans valeur de diplôme.<br>« La Réussite se construit à Domicile »</p></div>
  <p class="sans-imp" style="text-align:center"><button class="btn" type="button" data-a="imprimer">Imprimer l'attestation</button> <a class="btn sec" href="#bilans">Retour</a></p>`;
  return `<div class="attest"><img src="logo.png" alt="" width="84" height="84"><div class="sur-titre">FayeMath Academy · Formation du fondateur</div>
    <h1>Attestation de formation interne</h1><p>Il est attesté que</p><div class="nom">${h(etat.nom)}</div>
    <p>a validé le pôle <b>${p.id} — ${h(p.titre)}</b></p>
    <ul>${modsPole(p.id).map(m => `<li>Module ${m.n} · ${h(m.titre)} — quiz ${scoreQuiz(m)} %</li>`).join("")}</ul>
    <p>Bilan de pôle : <b>${b.best} %</b> · le ${frDate(b.d)}</p>
    <p class="petit" style="margin-top:22px">Document interne de suivi d'une formation personnelle. Sans valeur de diplôme.<br>« La Réussite se construit à Domicile »</p></div>
  <p class="sans-imp" style="text-align:center"><button class="btn" type="button" data-a="imprimer">Imprimer l'attestation</button> <a class="btn sec" href="#bilans">Retour</a></p>`;
}

/* ---------- version imprimable d'un module entier ---------- */
function vueImprimer(m){
  return `<p class="sans-imp"><button class="btn" type="button" data-a="imprimer">Imprimer ce module</button> <a class="btn sec" href="#module/${m.id}">Retour au module</a></p>
  <div class="sur-titre">FayeMath Formation · Pôle ${m.pole} · Module ${m.n}</div><h1>${h(m.titre)}</h1><p class="chapeau">${h(m.but)}</p>
  <h2>Objectifs</h2><ul class="obj">${m.objectifs.map(o => `<li>${h(o)}</li>`).join("")}</ul>
  ${m.lecons.map((l,i) => `<h2>Leçon ${i+1} — ${h(l.t)}</h2>${corpsLecon(l)}<div class="bloc exo"><h3>Mise en pratique</h3><p>${h(l.exo)}</p></div><div class="bloc refl"><h3>Question de réflexion</h3><p>${h(l.q)}</p></div>`).join("")}
  <h2>Cas pratique — ${h(m.cas.t)}</h2><div class="bloc ex"><h3>La situation</h3><p>${h(m.cas.s)}</p></div><ol class="obj">${m.cas.q.map(q => `<li>${h(q)}</li>`).join("")}</ol>
  <h2>Atelier — ${h(m.atelier.t)}</h2><p>${h(m.atelier.c)}</p>
  <h2>Fiche-outil — ${h(m.outil.t)}</h2>${corpsOutil(m.outil)}
  <h2>Actions</h2><ul class="obj">${m.actions.map(a => `<li>${h(a)}</li>`).join("")}</ul>`;
}
