/* =====================================================================
   FayeMath Formation — sw.js (service worker)
   Rôle : garder une copie de l'application sur le téléphone pour qu'elle
   s'ouvre sans connexion. Ne fonctionne qu'en ligne sécurisée (https),
   donc sur GitHub Pages ; sur l'ordinateur (fichier local) il est ignoré.

   Mise à jour : À CHAQUE NOUVELLE VERSION, CHANGEZ LE NUMÉRO DE VERSION
   ci-dessous (et APP_VERSION dans js/etat.js). Le téléphone télécharge
   alors tous les fichiers et affiche le bandeau « Nouvelle version ».
   Sans changement de numéro, les fichiers sont tout de même rafraîchis
   en arrière-plan et apparaissent à l'ouverture suivante.
   Si vous ajoutez un fichier, ajoutez-le à la liste FICHIERS.
   ===================================================================== */
const VERSION = "fayemath-formation-2.3";
const FICHIERS = [
  "./", "index.html", "manifest.webmanifest", "logo.png", "fayemath.ico",
  "css/style.css",
  "js/etat.js", "js/moteur.js", "js/vues-parcours.js", "js/vues-outils.js", "js/vues-veille.js", "js/app.js",
  "donnees/poles.js", "donnees/pole-a.js", "donnees/pole-b.js", "donnees/pole-c.js", "donnees/pole-d.js", "donnees/glossaire.js", "donnees/situations.js", "donnees/veille.js",
  "icones/icone-192.png", "icones/icone-512.png", "icones/icone-masquable-512.png", "icones/icone-180.png"
];

/* Installation : on met tous les fichiers en réserve. Un fichier manquant ne bloque pas les autres. */
self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(VERSION).then(c => Promise.all(FICHIERS.map(f => c.add(f).catch(() => null)))).then(() => self.skipWaiting()));
});

/* Activation : on supprime les réserves des versions précédentes. */
self.addEventListener("activate", ev => {
  ev.waitUntil(caches.keys().then(cles => Promise.all(cles.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Chaque demande de fichier : on répond tout de suite avec la copie en réserve,
   et on va chercher la version en ligne en arrière-plan pour la prochaine fois. */
self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;   // liens externes : non gérés
  ev.respondWith(caches.open(VERSION).then(async c => {
    const enReserve = await c.match(req, {ignoreSearch:true});
    const enLigne = fetch(req).then(rep => { if (rep && rep.ok) c.put(req, rep.clone()); return rep; }).catch(() => null);
    return enReserve || (await enLigne) || new Response("Hors connexion : ce fichier n'est pas encore en réserve.", {status:503, headers:{"Content-Type":"text/plain; charset=utf-8"}});
  }));
});
