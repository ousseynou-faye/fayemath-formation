/* =====================================================================
   FayeMath Formation — structure générale
   FM.poles    : les 4 pôles du parcours
   FM.modules  : rempli par les fichiers pole-a.js … pole-d.js
   FM.glossaire: rempli par glossaire.js
   ===================================================================== */
const FM = {
  poles: [
    {id:"A", titre:"Fondations de l'entreprise", but:"Savoir qui vous êtes, ce que vous vendez, à quel prix, dans quel cadre et avec quels comptes."},
    {id:"B", titre:"Développement commercial", but:"Attirer des familles, les inscrire, les garder, résoudre les problèmes et obtenir leurs recommandations."},
    {id:"C", titre:"Pédagogie", but:"Enseigner avec méthode : comment on apprend, autonomie, didactique des maths et de la physique-chimie, séance, profils d'élèves, évaluation, examens, motivation."},
    {id:"D", titre:"Pilotage et croissance", but:"Organiser votre temps, vos outils et vos décisions, puis préparer l'équipe et le numérique."}
  ],
  modules: [],
  glossaire: [],
  situations: []     // rempli par situations.js (guide des situations difficiles)
};
