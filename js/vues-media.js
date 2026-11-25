/* =====================================================================
   FayeMath Formation — js/vues-media.js   (version 2.4)
   Médiathèque du formateur en ligne : vidéos, formations, articles,
   outils, et ressources ajoutées par l'utilisateur, avec lecteur
   YouTube intégré pour les vidéos précises.
   ===================================================================== */
"use strict";
let filtreMed = "tout";            // tout | video | formation | article | outil | perso | avoir
let medOuverte = new Set();        // ressources dont les notes sont ouvertes
let medLecteur = "";               // ressource dont le lecteur vidéo est ouvert
let msgMed = "";                   // message après ajout ou suppression

const ICONE_MEDIA = {video:"▶", formation:"🎓", article:"📄", outil:"🛠", perso:"★"};

/* Carte d'une ressource (sert aussi sur la page d'un module) */
function carteMedia(r){
  const vu = !!etat.resV[r.id], yt = idYoutube(r.url), notes = medOuverte.has(r.id), lecteur = medLecteur === r.id;
  const type = r.perso ? (r.type || "perso") : r.type, mod = MOD(r.m);
  return `<div class="carte media media-${type}${vu ? " vu" : ""}" id="med-${r.id}">
    <div class="media-tete"><span class="media-ico" aria-hidden="true">${ICONE_MEDIA[type] || "★"}</span>
      <span class="media-type">${LIB_MEDIA[type] || "Ressource"}${r.rech ? " · recherche YouTube" : ""}${yt ? " · lecture ici" : ""}</span>
      ${r.lang ? `<span class="puce">${r.lang === "fr" ? "Français" : "Anglais"}</span>` : ""}</div>
    <h3>${h(r.t)}</h3>
    <div class="petit media-src">${h(r.src || "")}${mod ? ` · <a href="#module/${mod.id}">${h(mod.court)}</a>` : ""}</div>
    ${r.desc ? `<p class="media-desc">${h(r.desc)}</p>` : ""}
    ${lecteur && yt ? `<div class="lecteur"><iframe src="https://www.youtube-nocookie.com/embed/${yt}?rel=0" title="${h(r.t)}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>` : ""}
    <div class="media-actions">
      ${yt ? `<button class="btn" type="button" data-a="med-lire" data-id="${r.id}" aria-expanded="${lecteur}">${lecteur ? "Fermer le lecteur" : "▶ Regarder ici"}</button>` : ""}
      <a class="btn${yt ? " sec" : ""}" href="${h(r.url)}" target="_blank" rel="noopener">${r.rech ? "Chercher sur YouTube" : yt ? "Ouvrir sur YouTube" : "Ouvrir"}</a>
      <button class="btn sec" type="button" data-a="med-notes" data-id="${r.id}" aria-expanded="${notes}">${notes ? "Fermer" : (etat.resN[r.id] || "").trim() ? "Mes notes ✓" : "Mes notes"}</button>
      <label class="media-vu"><input type="checkbox" data-medvu="${r.id}" ${vu ? "checked" : ""}> ${vu ? "Vu le " + frDate(etat.resV[r.id]) : "Marquer comme vu"}</label>
      ${r.perso ? `<button class="btn sec" type="button" data-a="med-suppr" data-id="${r.id}">Retirer</button>` : ""}
    </div>
    ${notes ? `<label class="petit" for="mn-${r.id}">Trois idées retenues et une action à appliquer dans mes cours :</label>
      <textarea id="mn-${r.id}" data-mednote="${r.id}" rows="4" placeholder="1. …&#10;2. …&#10;3. …&#10;Action : …">${h(etat.resN[r.id] || "")}</textarea>` : ""}
  </div>`;
}

function vueMediatheque(){
  const R = toutesRes(), vus = R.filter(r => etat.resV[r.id]).length;
  const compte = t => R.filter(r => t === "perso" ? r.perso : t === "avoir" ? !etat.resV[r.id] : !r.perso && r.type === t).length;
  const liste = R.filter(r => filtreMed === "tout" || (filtreMed === "perso" ? r.perso : filtreMed === "avoir" ? !etat.resV[r.id] : !r.perso && r.type === filtreMed));
  const filtres = [["tout","Tout ("+R.length+")"],["video","Vidéos ("+compte("video")+")"],["formation","Formations ("+compte("formation")+")"],["article","Articles ("+compte("article")+")"],["outil","Outils ("+compte("outil")+")"],["perso","Mes ressources ("+compte("perso")+")"],["avoir","À voir ("+compte("avoir")+")"]];
  return `<div class="sur-titre">Parcours du formateur en ligne</div><h1>Médiathèque du formateur</h1>
  <p class="chapeau">Les meilleures ressources pour apprendre à enseigner en ligne : synthèses de recherche, formations, tutoriels vidéo et outils gratuits, reliés aux modules du pôle E. Ajoutez vos propres vidéos : celles de YouTube se regardent directement ici.</p>
  <div class="carte">${barre(pct(vus, R.length))}<div class="chiffres"><span><b>${vus}</b> / ${R.length} ressources vues</span><span><b>${R.filter(r => (etat.resN[r.id] || "").trim()).length}</b> avec notes</span><a href="#pole/E">Ouvrir le pôle E</a></div></div>
  <h2>Bien regarder une vidéo de formation</h2>
  <div class="grille g3 regarder">
    <div class="carte"><h3>Avant</h3><p class="petit">Fixez une question précise : « Qu'est-ce que je veux savoir faire après cette vidéo ? » Ayez de quoi écrire. Regardez en Wi-Fi si possible.</p></div>
    <div class="carte"><h3>Pendant</h3><p class="petit">Mettez en pause à chaque idée utile et notez-la avec vos mots. Ralentissez la lecture si besoin. Ne regardez pas plus de 20 minutes d'affilée.</p></div>
    <div class="carte"><h3>Après</h3><p class="petit">Écrivez trois idées et une action dans « Mes notes », puis appliquez l'action dans votre prochaine séance, sous 48 heures.</p></div>
  </div>
  <p class="petit">Les vidéos signalées « recherche YouTube » ouvrent une recherche ciblée en français : choisissez une vidéo récente et claire, puis ajoutez son lien ci-dessous pour la regarder dans l'application et y prendre vos notes.</p>
  <h2>Les ressources</h2>
  <div class="filtres filtres-defil" role="group" aria-label="Filtrer les ressources">${filtres.map(([x,l]) => `<button class="filtre" type="button" data-a="filtre-med" data-v="${x}" aria-pressed="${filtreMed === x}">${l}</button>`).join("")}</div>
  ${msgMed ? `<p class="msg" role="status">${h(msgMed)}</p>` : ""}
  <div class="grille g2" id="liste-med">${liste.length ? liste.map(carteMedia).join("") : '<p class="vide">Aucune ressource dans ce filtre.</p>'}</div>
  <h2>Ajouter une ressource</h2>
  <form class="carte form-med" id="form-med">
    <label for="med-t">Titre</label><input id="med-t" required maxlength="140" placeholder="Ex. : Animer un cours de maths en ligne">
    <label for="med-u">Lien (https://…)</label><input id="med-u" type="url" required placeholder="https://www.youtube.com/watch?v=…">
    <div class="form-ligne"><div><label for="med-type">Type</label><select id="med-type"><option value="video">Vidéo</option><option value="formation">Formation</option><option value="article">Article</option><option value="outil">Outil</option></select></div>
      <div><label for="med-m">Module lié</label><select id="med-m">${POLES_FORMATEUR.flatMap(p => modsPole(p.id)).map(m => `<option value="${m.id}">${m.n} · ${h(m.court)}</option>`).join("")}</select></div></div>
    <p class="petit">Un lien de vidéo YouTube précise (watch, youtu.be, shorts) pourra être regardé directement ici. Les ressources ajoutées sont incluses dans vos sauvegardes.</p>
    <button class="btn" type="submit">Ajouter à ma médiathèque</button>
  </form>`;
}
