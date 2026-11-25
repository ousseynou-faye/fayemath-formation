/* =====================================================================
   FayeMath Formation — structure générale
   FM.poles    : les pôles A à D (parcours du fondateur) et E (parcours du formateur en ligne)
   FM.modules  : rempli par les fichiers pole-a.js … pole-d.js
   FM.glossaire: rempli par glossaire.js
   ===================================================================== */
const FM = {
  poles: [
    {id:"A", titre:"Fondations de l'entreprise", but:"Savoir qui vous êtes, ce que vous vendez, à quel prix, dans quel cadre et avec quels comptes."},
    {id:"B", titre:"Développement commercial", but:"Attirer des familles, les inscrire, les garder, résoudre les problèmes et obtenir leurs recommandations."},
    {id:"C", titre:"Pédagogie", but:"Enseigner avec méthode : comment on apprend, autonomie, didactique des maths et de la physique-chimie, séance, profils d'élèves, évaluation, examens, motivation."},
    {id:"D", titre:"Pilotage et croissance", but:"Organiser votre temps, vos outils et vos décisions, puis préparer l'équipe et le numérique."},
    /* Parcours du formateur en ligne (version 2.4) : affiché dans sa propre section du menu,
       avec son bilan et son attestation ; il ne compte pas dans l'examen final du fondateur. */
    {id:"E", parcours:"formateur", titre:"Enseigner en ligne", but:"Préparer, conduire et suivre des cours en ligne de qualité : recherche, équipement, séance, maths et physique-chimie à distance, évaluation, protection des élèves et production de vidéos."}
  ],
  modules: [],
  glossaire: [],
  situations: [],    // rempli par situations.js (guide des situations difficiles)
  media: []          // rempli par mediatheque.js (médiathèque du formateur en ligne)
};
