/* =====================================================================
   FayeMath Formation — PÔLE A — Fondations de l'entreprise
   Un objet par module. Champs :
     id, n, pole, court, titre, but, objectifs[]
     lecons[] : {id, t: titre, p: [paragraphes], appro: [approfondissement], ex: exemple concret,
                 fm: chez FayeMath, err: erreur fréquente, cle: à retenir,
                 exo: mise en pratique, q: question de réflexion}
     cas      : {t, s: situation, q: [questions], r: [éléments de réponse]}
     atelier  : {t, c: consigne}        outil : {t, usage, lignes[]} ("## " = sous-titre)
     actions[]: tâches versées au plan d'action
     quiz[]   : [question, [choix], index de la bonne réponse, explication]
     sources[]: [libellé, lien]         veille[] : modules « Entreprises modèles » liés
   Pour corriger un texte, modifiez la ligne concernée ici puis rechargez l'application.
   ===================================================================== */
FM.modules.push(
{
 "id": "identite",
 "n": 1,
 "pole": "A",
 "court": "Identité",
 "titre": "Identité et positionnement",
 "but": "Savoir dire en une phrase qui vous servez, quel problème vous réglez et pourquoi on peut vous croire.",
 "objectifs": [
  "Formuler le positionnement de FayeMath Academy en une phrase",
  "Distinguer ce que l'on promet de ce que l'on ne garantit pas",
  "Dire un pitch de 30 secondes appuyé sur trois preuves"
 ],
 "lecons": [
  {
   "id": "identite-1",
   "t": "À quoi sert une identité claire",
   "p": [
    "Un parent ne choisit pas un encadreur sur un programme. Il choisit quelqu'un en qui il a confiance pour son enfant. L'identité de l'entreprise est ce qui crée cette confiance avant même la première séance.",
    "Une identité tient en trois réponses : qui servez-vous, quel problème réglez-vous, que promettez-vous. Tant que ces réponses changent d'un support à l'autre, le parent hésite.",
    "Un positionnement est un choix : dire pour qui vous êtes, c'est aussi dire pour qui vous n'êtes pas. Une entreprise qui veut plaire à tout le monde n'est reconnue par personne.",
    "Pour vérifier le vôtre, relisez vos supports comme un parent pressé : en dix secondes, sait-il ce que vous faites, pour quelles classes et dans quelle zone ? Si la réponse change d'un support à l'autre, l'identité n'est pas encore stable."
   ],
   "appro": [
    "Une identité se vérifie par un test simple, celui de la répétition : demandez à trois personnes qui vous connaissent de dire en une phrase ce que fait FayeMath Academy. Si les trois phrases se ressemblent, l'identité est installée. Si elles divergent, c'est que vos supports ou vos paroles ne disent pas tous la même chose.",
    "L'identité guide aussi vos refus. Une demande d'aide en français, un élève hors de votre zone, un parent qui veut « juste quelqu'un pour surveiller les devoirs » : chacune est une occasion de gagner un peu d'argent et de brouiller ce que vous êtes. Décider à l'avance ce que vous ne faites pas vous évite de le décider sous la pression."
   ],
   "ex": "Deux encadreurs se présentent à la même mère. Le premier : « Je donne des cours dans toutes les matières, à tous les niveaux. » Le second : « J'accompagne à domicile les élèves de la 6e à la Terminale en maths et en physique-chimie, avec un bilan chaque mois. » Une semaine plus tard, elle ne se souvient que du second.",
   "fm": "Positionnement : « le soutien scolaire professionnel du quartier ». Mission : offrir à chaque élève de la zone Bargny-Rufisque-Dakar une méthode de réussite aussi rigoureuse qu'un plan d'ingénieur. Signature : « La Réussite se construit à Domicile ».",
   "err": "Modifier le slogan, les couleurs ou la formulation d'un support à l'autre. Chaque variation oblige le parent à se demander s'il s'agit bien de la même entreprise.",
   "cle": "Une identité claire répète les mêmes mots partout : affiche, message WhatsApp, appel, site.",
   "exo": "Relisez trois de vos supports (une affiche, votre profil WhatsApp, un message type). Notez pour chacun la phrase qui dit qui vous servez et ce que vous promettez. Corrigez celui qui s'écarte le plus des deux autres.",
   "q": "Si un parent ne retenait qu'une seule phrase sur FayeMath Academy, laquelle voudriez-vous que ce soit ?",
   "v1": "L1-0"
  },
  {
   "id": "identite-2",
   "t": "La promesse : ce que l'on garantit, ce que l'on ne garantit pas",
   "p": [
    "Une promesse crédible porte sur ce que vous maîtrisez. Vous maîtrisez la méthode, la régularité et le suivi. Vous ne maîtrisez pas la note à l'examen, qui dépend aussi de l'élève, de l'école et du jour J.",
    "Promettre un résultat d'examen attire des clients au début et détruit la confiance au premier échec. Promettre une progression visible chaque mois se vérifie et se tient.",
    "Une bonne promesse a trois qualités : elle est précise, elle se vérifie et elle dépend de vous. « Progression visible chaque mois » remplit les trois conditions, à condition d'avoir un point de départ mesuré et un bilan régulier.",
    "La promesse engage aussi l'élève et la famille. Dites-le dès le départ : la méthode fonctionne si l'élève est présent, fait le travail demandé entre deux séances et si le parent lit les bilans."
   ],
   "appro": [
    "Distinguez l'engagement de moyens et l'engagement de résultat. Vous vous engagez sur des moyens que vous contrôlez entièrement : nombre de séances, préparation, comptes rendus, bilans. Le résultat scolaire dépend de plusieurs acteurs. Le dire clairement n'affaiblit pas votre offre : un parent sérieux se méfie de celui qui garantit tout.",
    "Rendez la promesse mesurable dès le premier jour. « Progression visible » doit correspondre à un indicateur que le parent comprend : le score au test d'entrée repassé, la part des exercices réussis sans aide, la note aux évaluations internes. Sans indicateur choisi à l'avance, la promesse redevient une impression."
   ],
   "ex": "Un père demande : « Vous me garantissez la moyenne au prochain devoir ? » Réponse possible : « Je ne peux pas garantir une note, personne ne le peut honnêtement. Je vous garantis un diagnostic la première semaine, un compte rendu après chaque séance et un bilan chiffré chaque mois. Vous verrez vous-même si cela avance. »",
   "fm": "Version courte de la promesse : « Avec FayeMath Academy, chaque mois apporte une progression que vous pouvez voir, pas une promesse que vous devez croire sur parole. »",
   "err": "Céder à la pression d'un parent inquiet et promettre « le BFEM assuré ». Au premier résultat décevant, c'est toute votre crédibilité dans le quartier qui est en jeu.",
   "cle": "On promet une progression mesurable, jamais un résultat d'examen garanti.",
   "exo": "Écrivez en trois lignes ce que vous garantissez (moyens) et en deux lignes ce que vous ne garantissez pas. Ajoutez l'indicateur que vous montrerez au parent à la fin du premier mois.",
   "q": "Quelles sont les deux ou trois choses que vous pouvez réellement garantir à chaque famille, quelle que soit la situation de l'élève ?",
   "v1": "L1-1"
  },
  {
   "id": "identite-3",
   "t": "Les preuves et le pitch de 30 secondes",
   "p": [
    "Une promesse sans preuve reste une phrase. Les preuves sont les raisons concrètes de vous croire : votre parcours, votre méthode, vos résultats suivis.",
    "Le pitch de 30 secondes suit toujours le même ordre : pour qui, quel problème, quelle solution, quelle preuve, quelle prochaine étape. Il se termine par une proposition simple, par exemple un appel de 15 minutes.",
    "Une preuve se montre. Un parcours se résume en une ligne, une méthode se démontre pendant la séance de découverte, un suivi se prouve avec un bilan réel (anonymisé) que le parent peut tenir dans la main.",
    "Le pitch se travaille à voix haute. Chronométrez-vous : au-delà de 30 secondes, vous perdez l'attention. Préparez aussi une version écrite de trois lignes pour WhatsApp, avec les mêmes mots."
   ],
   "appro": [
    "Chaque preuve répond à une crainte précise du parent. Le parcours d'ingénieur répond à « est-il compétent ? ». La méthode répond à « mon enfant va-t-il encore subir des explications qu'il ne comprend pas ? ». Le suivi répond à « comment saurai-je si cela sert à quelque chose ? ». Choisissez la preuve selon la crainte exprimée pendant l'échange.",
    "Préparez trois versions du pitch : trente secondes à l'oral, trois lignes pour un message, une ligne pour une présentation rapide (« J'accompagne à domicile les collégiens et lycéens en maths et en physique-chimie, avec un bilan chaque mois »). Les mêmes mots, à trois longueurs."
   ],
   "ex": "« J'accompagne à domicile les collégiens et lycéens de Bargny à Dakar en maths et en physique-chimie. Beaucoup travaillent sans méthode et perdent pied. Je leur apprends une méthode d'ingénieur, étape par étape, et vous recevez un bilan chaque mois. Je vous propose un appel de 15 minutes pour faire le point sur votre enfant. »",
   "fm": "Vos trois preuves : le profil scientifique du fondateur (ingénieur), la méthode CADRE, le suivi mesurable de chaque élève.",
   "err": "Commencer le pitch par ses diplômes. Le parent écoute d'abord ce qui concerne son enfant ; le parcours vient en preuve, pas en introduction.",
   "cle": "Pitch = public + problème + solution + preuve + prochaine étape.",
   "exo": "Enregistrez votre pitch de trente secondes sur votre téléphone, écoutez-le, puis réenregistrez-le jusqu'à tenir dans le temps sans lire. Écrivez ensuite la version en une ligne.",
   "q": "Laquelle de vos trois preuves est aujourd'hui la moins visible pour un parent, et comment la rendre tangible ?",
   "v1": "L1-2"
  }
 ],
 "cas": {
  "t": "Le parent qui compare",
  "s": "Mme Ndiaye hésite entre FayeMath Academy et un étudiant du quartier qui demande 15 000 F par mois pour « toutes les matières ». Elle vous écrit : « Qu'est-ce que vous avez de plus ? »",
  "q": [
   "Quelles sont les trois réponses d'identité (qui, quel problème, quelle promesse) que vous lui donnez ?",
   "Quelle preuve concrète pouvez-vous lui montrer dès aujourd'hui ?",
   "Quelle prochaine étape lui proposez-vous ?"
  ],
  "r": [
   "Rester sur votre terrain : maths et physique-chimie, une méthode, un suivi mesurable. Ne pas critiquer l'autre encadreur.",
   "Montrer une preuve tangible : un exemple de bilan mensuel, le déroulé d'une séance, votre parcours en une ligne.",
   "Proposer l'appel de 15 minutes puis la séance de découverte avec diagnostic ; ne pas baisser le prix."
  ]
 },
 "atelier": {
  "t": "Écrire votre récit fondateur",
  "c": "En dix lignes, racontez le déclic : pourquoi FayeMath Academy existe, ce que vous avez vécu comme élève ou comme encadreur, et ce que vous voulez changer pour les familles. Ce récit manque encore à votre charte ; vous seul pouvez l'écrire."
 },
 "outil": {
  "t": "Fiche d'identité en une page",
  "usage": "À relire avant de rédiger une affiche, un message ou un profil en ligne.",
  "lignes": [
   "## Qui nous servons",
   "Élèves de la 6e à la Terminale, zone Bargny-Rufisque-Dakar, en mathématiques et physique-chimie.",
   "## Le problème réglé",
   "L'élève travaille sans méthode ; le parent ne voit pas où il en est.",
   "## La promesse",
   "Une progression visible chaque mois, jamais un résultat d'examen garanti.",
   "## Les trois preuves",
   "Profil scientifique du fondateur · méthode CADRE · suivi mesurable de chaque élève.",
   "## Positionnement et signature",
   "« Le soutien scolaire professionnel du quartier » — « La Réussite se construit à Domicile ».",
   "## Contrôle avant diffusion",
   "Mêmes mots que sur les autres supports ? Classes et zone indiquées ? Prochaine étape proposée ?"
  ]
 },
 "actions": [
  "Rédiger le récit fondateur et l'ajouter à la charte d'identité",
  "Apprendre le pitch de 30 secondes et le dire à voix haute à trois personnes",
  "Corriger la signature (majuscules à Réussite et Domicile) sur le site et l'application"
 ],
 "quiz": [
  [
   "Sur quoi porte une promesse crédible ?",
   [
    "Sur la note à l'examen",
    "Sur une progression mesurable",
    "Sur le classement de l'élève"
   ],
   1,
   "Vous maîtrisez la méthode et le suivi, pas la note du jour J."
  ],
  [
   "Dans quel ordre se construit un pitch de 30 secondes ?",
   [
    "Prix, horaires, adresse",
    "Public, problème, solution, preuve, prochaine étape",
    "Diplômes, puis tarifs"
   ],
   1,
   "Il se termine par une prochaine étape simple."
  ],
  [
   "Quel est le positionnement de FayeMath Academy ?",
   [
    "Le soutien scolaire le moins cher",
    "Le soutien scolaire professionnel du quartier",
    "Une école privée"
   ],
   1,
   "Qualité avant quantité, à l'échelle du quartier."
  ],
  [
   "Que signifie choisir un positionnement ?",
   [
    "Vouloir convenir à toutes les familles",
    "Dire pour qui l'on est, et donc pour qui l'on n'est pas",
    "Changer de message selon le support"
   ],
   1,
   "Un positionnement est un choix assumé."
  ],
  [
   "Quelles qualités a une bonne promesse ?",
   [
    "Précise, vérifiable, dépendante de vous",
    "Ambitieuse, vague, rassurante",
    "Chiffrée sur la note à l'examen"
   ],
   0,
   "On promet ce que l'on maîtrise et que le parent peut vérifier."
  ],
  [
   "Par quoi commence un bon pitch ?",
   [
    "Par les diplômes du fondateur",
    "Par le public servi et son problème",
    "Par le prix"
   ],
   1,
   "Le parcours vient ensuite, comme preuve."
  ],
  [
   "Comment rendre une preuve crédible ?",
   [
    "En la répétant souvent",
    "En la montrant : bilan réel, séance, parcours",
    "En ajoutant des superlatifs"
   ],
   1,
   "Une preuve se montre plus qu'elle ne s'affirme."
  ],
  [
   "Que faire si un parent exige une note garantie ?",
   [
    "Accepter pour ne pas le perdre",
    "Refuser poliment et dire ce que vous garantissez réellement",
    "Baisser le prix"
   ],
   1,
   "La méthode, la régularité et le suivi sont garantis, pas la note."
  ]
 ],
 "sources": [
  [
   "Charte d'identité et vision FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  1,
  2
 ],
 "v1": 1
},
{
 "id": "offre",
 "n": 2,
 "pole": "A",
 "court": "Offre et prix",
 "titre": "Offre et prix",
 "but": "Présenter une offre lisible, défendre votre prix sans remise et poser des conditions qui protègent votre temps.",
 "objectifs": [
  "Présenter la grille en reliant chaque formule à une classe",
  "Défendre le prix par le coût horaire, sans remise",
  "Annoncer par écrit les conditions avant le premier cours"
 ],
 "lecons": [
  {
   "id": "offre-1",
   "t": "Construire une offre lisible",
   "p": [
    "Une offre lisible propose peu de formules, chacune pour un public précis. Le parent doit reconnaître la sienne en dix secondes : la classe de son enfant suffit à la désigner.",
    "Chaque formule dit trois choses : pour qui, combien de séances, quel prix par mois. Tout le reste (méthode, suivi, supports) est commun à toutes les formules.",
    "Trop de choix ralentit la décision. Avec quatre formules rangées par niveau, le parent n'a pas à comparer : la classe de l'enfant désigne la formule, et la discussion porte sur le démarrage, pas sur le tarif.",
    "Présentez toujours la formule en trois temps : ce que l'élève reçoit (séances, durée), ce que le parent reçoit (comptes rendus, bilan), puis le prix. Le prix annoncé en premier est jugé seul ; annoncé en dernier, il est jugé par rapport à ce qu'il contient."
   ],
   "appro": [
    "Une grille lisible obéit à une règle de progression : quand la classe monte, l'enjeu monte, le volume de travail monte, et le prix suit. Le parent comprend sans explication pourquoi la Terminale coûte plus que la 6e. Toute exception à cette logique devra être justifiée à chaque fois, donc évitez-en.",
    "Le nom des formules compte moins que leur stabilité. Une grille qui change tous les trois mois oblige à refaire les supports et sème le doute chez les familles déjà inscrites. Fixez-la pour l'année scolaire, et réservez les ajustements à la rentrée suivante, annoncés à l'avance."
   ],
   "ex": "« Votre fille est en 3e : c'est la formule STANDARD. Une séance de 2 heures par semaine à domicile, un compte rendu après chaque séance, un bilan chaque mois. 35 000 F par mois. »",
   "fm": "Grille V2 : ESSENTIEL 25 000 F/mois (6e-5e, 1 séance d'1 h 30 par semaine) · STANDARD 35 000 F/mois (4e-3e, 1 séance de 2 h) · PREMIUM 40 000 F/mois (2nde-1re, 2 séances de 2 h) · EXCELLENCE 50 000 F/mois (Terminale, 2 séances de 2 h, annales du Bac, un examen blanc corrigé par mois). Stage de vacances : 8 séances de 2 h sur 2 semaines, 40 000 F.",
   "err": "Inventer une formule sur mesure pour chaque famille. Vous ne saurez plus ce que vous avez promis à qui, et deux parents qui se parlent découvriront deux prix.",
   "cle": "Une formule par public, désignée par la classe de l'élève.",
   "exo": "Sans regarder vos documents, récitez les quatre formules : classes, nombre de séances, durée, prix. Vérifiez ensuite. Toute hésitation indique ce qu'il faut apprendre par cœur avant le prochain appel.",
   "q": "Un parent peut-il, sans vous appeler, trouver la formule de son enfant et son prix sur vos supports ?",
   "v1": "L2-0"
  },
  {
   "id": "offre-2",
   "t": "Fixer et défendre un prix",
   "p": [
    "Un prix se défend avec un chiffre que le parent peut comparer : le coût par heure. Divisez le prix du mois par le nombre d'heures de cours du mois.",
    "Une remise accordée à une famille se sait vite dans le quartier et devient le nouveau prix pour toutes. Un prix fixe, identique pour tous, est plus simple à annoncer et plus respecté.",
    "Le prix dit aussi qui vous êtes. Un tarif très bas attire les familles qui comparent uniquement les prix et qui partent à la première offre moins chère. Un tarif cohérent avec un service professionnel attire celles qui cherchent un résultat.",
    "Quand un parent dit « c'est cher », il compare. Demandez d'abord : « Cher par rapport à quoi ? » Vous saurez s'il compare avec un étudiant, une école ou son budget, et vous répondrez sur le bon terrain."
   ],
   "appro": [
    "Le prix se justifie par la valeur pour la famille, pas par votre coût. Ce que le parent achète, c'est moins « deux heures de cours » que la tranquillité de savoir son enfant suivi, une méthode de travail, et une information régulière. Nommez ces bénéfices avant de donner le chiffre.",
    "Trois comparaisons aident sans dénigrer personne : le coût horaire face à la moyenne du marché, le coût d'un redoublement ou d'une année perdue, et ce que la famille dépense déjà pour l'école. Aucune n'est un argument de pression ; ce sont des repères pour décider."
   ],
   "ex": "PREMIUM : 40 000 F pour deux séances de 2 heures par semaine, soit environ 17 heures par mois. « Cela revient à moins de 2 500 F l'heure, déplacement compris, avec un suivi écrit. »",
   "fm": "Votre coût horaire réel va de 2 310 à 4 040 F par heure, alors que votre étude de marché estime la moyenne à 7 500 F par heure. Prix nets, aucune remise, y compris pour les fratries.",
   "err": "Accorder une remise « exceptionnelle » pour conclure. Elle devient votre vrai prix pour cette famille, puis pour ses voisins.",
   "cle": "On répond à « c'est cher » par le coût horaire, jamais par une remise.",
   "exo": "Calculez le coût horaire de chacune de vos quatre formules (prix du mois ÷ heures de cours du mois, avec 4,33 semaines par mois). Notez-les sur une fiche à garder près du téléphone.",
   "q": "Quelle phrase exacte direz-vous la prochaine fois que vous entendrez « c'est cher » ?",
   "v1": "L2-1"
  },
  {
   "id": "offre-3",
   "t": "Les conditions qui protègent votre temps",
   "p": [
    "Les conditions écrites évitent les discussions gênantes. Elles règlent d'avance les trois sujets qui abîment une relation : la gratuité, les absences, le paiement.",
    "Une condition n'a de valeur que si elle est annoncée avant le premier cours, par écrit, et appliquée à toutes les familles de la même façon.",
    "Les conditions protègent aussi la famille : elle sait ce qui se passe si l'enfant est malade, si vous êtes empêché ou si elle veut arrêter. Présentez-les comme une marque de sérieux, pas comme une méfiance.",
    "Appliquez la règle la première fois qu'elle se présente. Une exception non expliquée devient un droit acquis ; si vous faites un geste, dites clairement qu'il est unique."
   ],
   "appro": [
    "Une bonne condition est précise, courte et sans exception cachée. « Paiement en fin de mois » laisse place à l'interprétation ; « paiement entre le 1er et le 5 du mois suivant » n'en laisse pas. Relisez chaque condition en vous demandant : deux personnes de bonne foi peuvent-elles la comprendre différemment ?",
    "Prévoyez aussi vos propres manquements. Si vous êtes empêché, la séance est reportée à une date proposée dans la semaine ; si vous êtes en retard, vous prévenez et rattrapez le temps. Des conditions qui n'engagent que la famille ressemblent à un règlement ; des conditions réciproques ressemblent à un contrat."
   ],
   "ex": "Message type : « Bonjour Madame, voici nos conditions avant de commencer : paiement à la fin de chaque mois, sous 5 jours ; séance reportée si vous prévenez 24 h avant ; arrêt possible à la fin de chaque mois. Merci de me confirmer que cela vous convient. »",
   "fm": "Séance de découverte gratuite d'une heure au plus, une seule fois par famille. Report si la famille prévient 24 h à l'avance, sinon la séance est due. Paiement à la fin de chaque mois, attendu sous 5 jours ; séances suspendues au-delà de 10 jours. Sans engagement, au mois.",
   "err": "Annoncer les conditions seulement le jour du premier incident. La règle paraît alors inventée contre la famille.",
   "cle": "Gratuité bornée, report encadré, paiement daté : annoncés par écrit avant de commencer.",
   "exo": "Rédigez vos conditions en cinq lignes maximum, engagements des deux côtés compris. Faites-les lire à une personne extérieure et demandez-lui ce qu'elle a compris.",
   "q": "Laquelle de vos conditions avez-vous le plus de mal à appliquer, et pourquoi ?",
   "v1": "L2-2"
  }
 ],
 "cas": {
  "t": "La fratrie et la remise",
  "s": "M. Sarr a deux enfants, en 6e et en 3e. Il accepte le principe mais demande : « Pour deux enfants, vous me faites bien un prix ? »",
  "q": [
   "Quelles formules et quel total annoncez-vous ?",
   "Comment répondez-vous à la demande de remise ?",
   "Quel avantage réel pouvez-vous mettre en avant sans toucher au prix ?"
  ],
  "r": [
   "ESSENTIEL 25 000 F + STANDARD 35 000 F = 60 000 F par mois.",
   "Prix nets, y compris pour les fratries ; expliquer le coût horaire et l'égalité de traitement entre familles.",
   "Les deux enfants suivis le même jour, un seul interlocuteur, deux bilans mensuels, une organisation simple pour la famille."
  ]
 },
 "atelier": {
  "t": "Présenter la bonne formule",
  "c": "Pour chacun de ces trois cas, écrivez la formule à proposer, le prix du mois et la phrase que vous diriez au parent : (1) un élève de 5e ; (2) une fratrie, un enfant en 6e et un en 3e ; (3) une élève de Terminale S2."
 },
 "outil": {
  "t": "Script de présentation de l'offre",
  "usage": "À utiliser pendant l'appel de 15 minutes ou après la séance de découverte.",
  "lignes": [
   "## 1. La formule",
   "« Votre enfant est en [classe] : c'est la formule [NOM]. »",
   "## 2. Ce que reçoit l'élève",
   "« [Nombre] séance(s) de [durée] par semaine à domicile, avec les supports. »",
   "## 3. Ce que vous recevez",
   "« Un compte rendu après chaque séance et un bilan chaque mois. »",
   "## 4. Le prix",
   "« [Prix] F par mois, soit environ [coût horaire] F l'heure, déplacement compris. »",
   "## 5. Les conditions",
   "Paiement fin de mois sous 5 jours · report si prévenu 24 h avant · sans engagement.",
   "## 6. La suite",
   "« Je vous propose de commencer le [date]. Est-ce que le [jour] à [heure] vous convient ? »"
  ]
 },
 "actions": [
  "Vérifier que le catalogue des offres et la fiche d'une page affichent exactement la même grille",
  "Rédiger votre réponse à « c'est cher » avec le coût horaire",
  "Envoyer les conditions par écrit à chaque nouvelle famille avant la première séance payante"
 ],
 "quiz": [
  [
   "Quelle formule correspond à un élève de 3e ?",
   [
    "ESSENTIEL",
    "STANDARD",
    "EXCELLENCE"
   ],
   1,
   "STANDARD : 4e-3e, une séance de 2 h par semaine, 35 000 F par mois."
  ],
  [
   "Comment répondre à un parent qui trouve le prix élevé ?",
   [
    "Proposer une remise",
    "Montrer le coût par heure",
    "Baisser le nombre de séances gratuitement"
   ],
   1,
   "De 2 310 à 4 040 F par heure, sous la moyenne estimée du marché."
  ],
  [
   "Combien de séances de découverte gratuites par famille ?",
   [
    "Une seule, d'une heure au plus",
    "Une par enfant",
    "Autant que nécessaire"
   ],
   0,
   "La gratuité est bornée pour protéger vos déplacements."
  ],
  [
   "Dans quel ordre présenter une formule ?",
   [
    "Prix, puis contenu",
    "Ce que reçoit l'élève, ce que reçoit le parent, puis le prix",
    "Conditions, puis prix"
   ],
   1,
   "Le prix annoncé en dernier est jugé par rapport à son contenu."
  ],
  [
   "Quel est le prix de la formule PREMIUM ?",
   [
    "35 000 F par mois",
    "40 000 F par mois",
    "50 000 F par mois"
   ],
   1,
   "PREMIUM : 2nde-1re, deux séances de 2 h par semaine."
  ],
  [
   "Que demander en premier quand un parent dit « c'est cher » ?",
   [
    "« Quel est votre budget ? »",
    "« Cher par rapport à quoi ? »",
    "« Voulez-vous une remise ? »"
   ],
   1,
   "On identifie d'abord ce avec quoi il compare."
  ],
  [
   "Quand annoncer les conditions ?",
   [
    "Au premier incident",
    "Par écrit, avant le premier cours payant",
    "À la fin du premier mois"
   ],
   1,
   "Une règle annoncée avant s'applique sans conflit."
  ],
  [
   "Quelle est la règle de report d'une séance ?",
   [
    "Report possible si la famille prévient 24 h avant",
    "Report toujours possible",
    "Aucun report"
   ],
   0,
   "Sinon la séance est due."
  ]
 ],
 "sources": [
  [
   "Grille tarifaire V2 et catalogue des offres FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  1,
  3
 ],
 "v1": 2
},
{
 "id": "juridique",
 "n": 3,
 "pole": "A",
 "court": "Juridique",
 "titre": "Juridique et administratif",
 "but": "Savoir quelles questions régler, avec qui, pour exercer en règle et inspirer confiance.",
 "objectifs": [
  "Expliquer ce que la formalisation rend possible",
  "Préparer les questions à poser à un professionnel",
  "Rédiger un contrat d'accompagnement d'une page",
  "Connaître vos obligations de base sur les données des élèves"
 ],
 "lecons": [
  {
   "id": "juridique-1",
   "t": "Pourquoi se formaliser",
   "p": [
    "Une activité déclarée peut facturer une école, répondre à un appel à projets, ouvrir un compte professionnel et recruter. Une activité informelle reste limitée au fondateur et au paiement en main propre.",
    "La formalisation rassure aussi les parents : un contrat, une facture et un reçu disent que vous êtes là pour durer.",
    "La formalisation est un chemin par étapes, pas un saut. On peut commencer par les pièces qui ne dépendent d'aucune administration : conditions écrites, factures numérotées, reçus, registre des paiements. Elles préparent le dossier que l'on vous demandera ensuite.",
    "Elle a un coût (démarches, impôts, temps). C'est pourquoi le bon moment se décide avec vos chiffres : régularité des revenus, nombre de foyers, projets qui exigent une structure."
   ],
   "appro": [
    "Pensez la formalisation comme un escalier. Première marche : des écrits propres (conditions, factures numérotées, reçus, registre). Deuxième marche : une existence administrative, selon la forme conseillée par le professionnel. Troisième marche : ce qui devient possible ensuite, comme un compte professionnel, des contrats avec des écoles, un premier collaborateur.",
    "À chaque marche, demandez-vous ce qu'elle coûte et ce qu'elle permet. Monter trop tôt crée des obligations sans revenus pour les porter ; monter trop tard fait manquer des contrats. Vos chiffres mensuels sont le bon instrument pour décider du moment."
   ],
   "ex": "Une école privée souhaite vous confier des cours de renforcement pour ses classes d'examen. Elle demande une facture au nom d'une structure identifiée. Sans cela, le contrat ne peut pas être signé.",
   "fm": "Le programme EdTech Fellowship, repéré dans votre parcours, s'adresse à des startups : une structure en règle est un préalable probable. À vérifier dans le prochain appel.",
   "err": "Attendre d'« être grand » pour tenir des factures et des reçus. Reconstituer une année de paiements après coup est bien plus long que de les enregistrer au fil de l'eau.",
   "cle": "Se formaliser ouvre des portes : écoles, subventions, recrutement.",
   "exo": "Listez les pièces que vous possédez déjà (conditions écrites, modèle de facture, reçus, registre des paiements) et celles qui manquent. Fixez une date pour créer la première pièce manquante.",
   "q": "Quelle opportunité précise vous échapperait aujourd'hui faute de structure déclarée ?",
   "v1": "L7-0"
  },
  {
   "id": "juridique-2",
   "t": "Les questions à trancher avec un professionnel",
   "p": [
    "Trois questions dépendent de la loi sénégalaise et de votre situation : la forme de l'activité, le régime fiscal et les déclarations à faire. Cette application ne peut pas y répondre à votre place.",
    "Préparez vos chiffres (revenus, charges, nombre de foyers) et posez ces questions à un expert-comptable ou aux services compétents. Une heure de conseil coûte moins qu'une erreur de régime.",
    "Arrivez au rendez-vous avec des chiffres et des questions écrites, et repartez avec des réponses écrites. Un conseil oral s'oublie ou se déforme ; un courriel de confirmation vous servira de référence.",
    "Demandez aussi ce que chaque option implique dans la durée : déclarations périodiques, tenue de comptes, possibilité d'embaucher ou de travailler avec des encadreurs."
   ],
   "appro": [
    "Un rendez-vous utile se prépare comme une séance : un objectif, des documents, des questions classées. Apportez trois mois de chiffres réels (encaissements, dépenses, nombre de foyers), votre objectif de revenu, et vos projets à un an (encadreur, stages, plateforme). Le conseil dépend autant de la trajectoire que de la situation du jour.",
    "Demandez toujours le coût complet de chaque option : frais de création, obligations déclaratives, coût annuel d'un comptable éventuel, conséquences en cas d'arrêt. Une option simple à créer peut être lourde à tenir. Et confirmez par écrit ce qui a été dit, le jour même."
   ],
   "ex": "Questions utiles : « Avec 300 000 F de revenu mensuel visé et aucun salarié, quelle forme me conseillez-vous ? Quelles déclarations, à quelle fréquence ? Que change l'arrivée d'un premier encadreur ? »",
   "fm": "Votre point fiscal n'est pas tranché : bénéfices non commerciaux (profession libérale) ou autre régime. À confirmer auprès d'un expert-comptable ou de la DGID avant toute mention officielle.",
   "err": "Choisir un statut parce qu'un ami a fait ce choix. Sa situation (revenus, activité, projets) n'est pas la vôtre.",
   "cle": "Forme, régime fiscal, déclarations : trois réponses à obtenir d'un professionnel, par écrit.",
   "exo": "Écrivez la liste de vos questions pour le professionnel, classées par priorité, et rassemblez dans un seul dossier les chiffres des trois derniers mois.",
   "q": "Quels chiffres devez-vous réunir avant ce rendez-vous, et où se trouvent-ils ?",
   "v1": "L7-1"
  },
  {
   "id": "juridique-3",
   "t": "Le contrat d'accompagnement",
   "p": [
    "Un contrat d'une page suffit. Il reprend ce qui est déjà dans vos conditions : formule, prix, jours et horaires, règle de report, date de paiement, durée et fin.",
    "Il protège les deux parties et évite de rediscuter chaque point par message. Faites-le relire une fois par un juriste, puis utilisez le même pour toutes les familles.",
    "Le contrat sert surtout quand tout va bien : il rappelle le cadre sans que personne n'ait à hausser le ton. Rédigez-le en français simple, sans jargon, pour qu'un parent le lise en deux minutes.",
    "Prévoyez les cas réels : absence de l'élève, empêchement de l'encadreur, vacances scolaires, arrêt en cours de mois. Chaque cas non prévu deviendra un jour une discussion."
   ],
   "appro": [
    "Rédigez le contrat à partir des situations réelles déjà vécues : une séance annulée le matin même, un mois commencé le 15, des vacances scolaires, un paiement partiel. Pour chacune, une phrase. C'est cette liste de cas qui rend un contrat utile, bien plus que des formules générales.",
    "Le contrat s'accompagne d'une fiche d'inscription : nom et classe de l'élève, établissement, coordonnées du parent payeur, créneau, date de début. Les deux documents, signés et rangés par famille, forment le dossier de chaque client."
   ],
   "ex": "Sommaire d'un contrat d'une page : parties · élève et classe · formule, jours et horaires · prix et date de paiement · reports et absences · durée et fin · signatures.",
   "fm": "Votre contrat d'accompagnement reste à rédiger. En attendant, un message écrit récapitulatif tient lieu d'inscription.",
   "err": "Copier un contrat trouvé en ligne, écrit pour un autre pays. Les références de loi n'y sont pas les bonnes ; faites relire le vôtre.",
   "cle": "Une page, signée avant le premier cours payant, identique pour toutes les familles.",
   "exo": "Notez cinq situations délicates déjà rencontrées avec des familles. Pour chacune, écrivez la phrase de contrat qui l'aurait réglée d'avance.",
   "q": "Quel désaccord déjà vécu avec une famille aurait été évité par une ligne de contrat ?",
   "v1": "L7-2"
  },
  {
   "id": "juridique-4",
   "t": "Les données des élèves : une responsabilité",
   "p": [
    "Vous détenez des informations sur des mineurs : noms, classes, adresses, numéros des parents, résultats scolaires. Au Sénégal, la protection des données personnelles est encadrée par la loi n° 2008-12 du 25 janvier 2008, et une autorité est chargée de son application : la Commission de protection des données personnelles (CDP).",
    "Trois principes simples couvrent l'essentiel. Ne collecter que ce qui sert au suivi. Protéger ce que vous détenez : mot de passe, sauvegarde, pas de liste d'élèves qui circule. Ne rien publier sans accord : ni photo, ni nom, ni note, ni témoignage.",
    "Les démarches exactes à faire auprès de la CDP dépendent de votre situation ; c'est une question à ajouter à votre liste pour le professionnel ou à poser directement à la CDP."
   ],
   "appro": [
    "Appliquez à vos fichiers une règle simple : pour chaque information détenue, savoir pourquoi vous l'avez, où elle se trouve, qui y accède et quand vous la supprimerez. Les informations d'une famille qui a quitté FayeMath n'ont pas à rester indéfiniment dans votre téléphone.",
    "Soyez particulièrement prudent avec les outils en ligne et les groupes. Un bulletin photographié, un nom d'élève saisi dans un service tiers, une liste partagée dans un groupe : chaque copie échappe à votre contrôle. Anonymisez chaque fois que le nom n'est pas nécessaire."
   ],
   "ex": "Vous voulez publier la progression d'un élève sur Facebook. Version correcte : accord écrit du parent, prénom retiré ou modifié, aucune photo de l'enfant sans autorisation, aucune mention de l'établissement.",
   "fm": "Votre plateforme numérique prévoit déjà la protection des mineurs et la suppression de compte. La même rigueur s'applique à vos fichiers de suivi et à vos conversations WhatsApp.",
   "err": "Partager dans un groupe le bulletin d'un élève « pour montrer les résultats ». Même avec une bonne intention, c'est une donnée personnelle d'un mineur.",
   "cle": "Collecter peu, protéger bien, ne rien publier sans accord écrit.",
   "exo": "Faites l'inventaire de tous les endroits où se trouvent des informations sur vos élèves (téléphone, ordinateur, classeur, services en ligne). Supprimez ou regroupez ce qui est en double.",
   "q": "Où se trouvent aujourd'hui les informations sur vos élèves, et qui peut y accéder ?"
  }
 ],
 "cas": {
  "t": "L'école qui veut une facture",
  "s": "Le directeur d'une école privée vous propose d'animer des séances de renforcement en 3e, deux fois par semaine. Il demande un devis, une facture mensuelle et « vos références administratives ».",
  "q": [
   "Que pouvez-vous fournir dès maintenant ?",
   "Quelles questions cela ajoute-t-il à votre rendez-vous avec un professionnel ?",
   "Quelle réponse honnête donnez-vous au directeur en attendant ?"
  ],
  "r": [
   "Un devis clair, vos conditions écrites, un exemple de facture numérotée.",
   "Forme adaptée pour facturer une école, mentions obligatoires d'une facture, régime fiscal applicable.",
   "Dire où vous en êtes, donner une date de retour précise, ne rien inventer sur votre statut."
  ]
 },
 "atelier": {
  "t": "Préparer votre rendez-vous avec un comptable",
  "c": "Écrivez la liste de vos questions (forme de l'activité, régime fiscal, déclarations, factures, recrutement futur) et les chiffres à apporter : revenu mensuel actuel et visé, charges, nombre de foyers."
 },
 "outil": {
  "t": "Trame du contrat d'accompagnement",
  "usage": "À compléter, puis à faire relire une fois par un juriste avant usage.",
  "lignes": [
   "## 1. Les parties",
   "FayeMath Academy, représentée par… · le parent ou tuteur : …",
   "## 2. L'élève",
   "Nom, classe, établissement, matières suivies.",
   "## 3. La formule",
   "Nom de la formule, nombre de séances par semaine, durée, jours et horaires.",
   "## 4. Le prix et le paiement",
   "Montant mensuel, date d'échéance, moyens de paiement, reçu remis à chaque paiement.",
   "## 5. Absences et reports",
   "Report si prévenu 24 h avant ; sinon séance due. Empêchement de l'encadreur : séance reportée.",
   "## 6. Durée et fin",
   "Sans engagement, au mois. Arrêt possible à la fin de chaque mois, par message écrit.",
   "## 7. Données et confidentialité",
   "Informations utilisées uniquement pour le suivi ; aucune publication sans accord écrit.",
   "## 8. Signatures et date"
  ]
 },
 "actions": [
  "Prendre rendez-vous avec un expert-comptable ou la DGID et obtenir des réponses écrites",
  "Rédiger le contrat d'accompagnement d'une page et le faire relire",
  "Classer reçus et factures par mois dans un seul dossier"
 ],
 "quiz": [
  [
   "Qui peut trancher votre régime fiscal ?",
   [
    "Un expert-comptable ou l'administration fiscale",
    "Un autre encadreur",
    "Cette application"
   ],
   0,
   "La réponse dépend de la loi et de votre situation."
  ],
  [
   "Quelle longueur pour le contrat d'accompagnement ?",
   [
    "Une page",
    "Dix pages",
    "Aucun contrat"
   ],
   0,
   "Il reprend vos conditions déjà annoncées."
  ],
  [
   "Que permet une activité déclarée ?",
   [
    "Facturer une école et répondre à un appel à projets",
    "Ne plus payer de transport",
    "Garantir les résultats"
   ],
   0,
   "Elle ouvre aussi la voie au recrutement."
  ],
  [
   "Par quoi peut commencer la formalisation ?",
   [
    "Par les pièces qui ne dépendent de personne : conditions, factures, reçus",
    "Par l'embauche d'un salarié",
    "Par une campagne de publicité"
   ],
   0,
   "Ces pièces préparent le dossier demandé ensuite."
  ],
  [
   "Comment repartir d'un rendez-vous avec un professionnel ?",
   [
    "Avec des réponses écrites",
    "Avec une impression générale",
    "Sans rien noter"
   ],
   0,
   "Un conseil oral s'oublie ou se déforme."
  ],
  [
   "Quelle loi encadre les données personnelles au Sénégal ?",
   [
    "La loi n° 2008-12 du 25 janvier 2008",
    "Le code de la route",
    "Aucune loi"
   ],
   0,
   "La CDP est l'autorité chargée de son application."
  ],
  [
   "Que faut-il avant de publier le témoignage d'une famille ?",
   [
    "Rien",
    "Son accord écrit",
    "Seulement l'accord de l'élève"
   ],
   1,
   "Ni nom, ni photo, ni note sans accord."
  ],
  [
   "Pour qui le contrat est-il utile ?",
   [
    "Pour l'encadreur seulement",
    "Pour les deux parties",
    "Pour l'école de l'élève"
   ],
   1,
   "Il fixe le cadre et protège aussi la famille."
  ]
 ],
 "sources": [
  [
   "Commission de protection des données personnelles du Sénégal (CDP)",
   "https://www.cdp.sn/"
  ],
  [
   "Points à confirmer auprès d'un expert-comptable ou de la DGID (voir leçon 2)",
   ""
  ]
 ],
 "veille": [
  3
 ],
 "v1": 7
},
{
 "id": "finances",
 "n": 4,
 "pole": "A",
 "court": "Finances",
 "titre": "Finances du fondateur",
 "but": "Savoir chaque mois ce que l'entreprise gagne vraiment et ce que vous pouvez vous verser.",
 "objectifs": [
  "Séparer la caisse de l'entreprise de l'argent personnel",
  "Calculer le résultat du mois et le répartir",
  "Encaisser à date fixe avec facture et reçu",
  "Comparer les foyers au revenu par déplacement"
 ],
 "lecons": [
  {
   "id": "finances-1",
   "t": "Séparer l'argent de l'entreprise et le vôtre",
   "p": [
    "Tant que l'argent de l'entreprise et l'argent personnel sont mélangés, vous ne pouvez pas savoir si l'activité est rentable. C'est la première règle, avant tout tableau.",
    "Superprof a subi un redressement fiscal : même une entreprise qui réussit paie cher une comptabilité floue. La rigueur se prend au début, quand les montants sont petits.",
    "Séparer ne demande pas de banque : un portefeuille mobile dédié ou une enveloppe distincte suffit pour commencer. L'important est qu'aucune dépense personnelle ne sorte de la caisse de l'entreprise sans être notée comme salaire.",
    "Cette séparation vous protège aussi psychologiquement : un bon mois ne devient pas une dépense imprévue, et un mauvais mois ne menace pas le loyer."
   ],
   "appro": [
    "La séparation doit être physique et visible : un portefeuille mobile, une enveloppe ou un compte que vous n'utilisez pour rien d'autre. Toute sortie de cette caisse est soit une charge de l'entreprise, soit votre salaire versé à la clôture. Il n'existe pas de troisième catégorie.",
    "Constituez aussi une réserve. Les revenus d'un cours à domicile suivent l'année scolaire : forts d'octobre à juin, faibles pendant les vacances. L'épargne mise de côté les bons mois sert à traverser les mois creux sans toucher à votre vie personnelle."
   ],
   "ex": "Le 3 du mois, une famille paie 40 000 F en espèces. Sans caisse séparée, l'argent part dans les dépenses du jour. Avec une caisse dédiée, il est enregistré, et votre salaire est versé une fois, à la clôture.",
   "fm": "Votre décision : une caisse FayeMath séparée et un salaire du fondateur prélevé à part.",
   "err": "« Emprunter » dans la caisse en se promettant de remettre l'argent. Sans écriture, la somme disparaît des comptes.",
   "cle": "Une caisse dédiée à l'entreprise, un salaire versé à part.",
   "exo": "Désignez dès aujourd'hui la caisse dédiée (compte, portefeuille mobile ou enveloppe) et notez son solde de départ dans votre classeur.",
   "q": "À quel endroit précis arrive aujourd'hui l'argent d'une famille, et est-il séparé du vôtre ?",
   "v1": "L6-0"
  },
  {
   "id": "finances-2",
   "t": "Connaître son résultat du mois",
   "p": [
    "Résultat = revenus encaissés − charges. Les charges d'un cours à domicile sont surtout le transport et les abonnements ; elles se calculent foyer par foyer.",
    "Une règle de répartition fixée d'avance évite de tout dépenser les bons mois. Exemple : 130 000 F encaissés et 60 000 F de charges laissent 70 000 F, soit 35 000 F de salaire, 21 000 F en caisse et 14 000 F d'épargne.",
    "Distinguez le chiffre d'affaires (ce qui est facturé), l'encaissé (ce qui est réellement reçu) et le résultat (encaissé moins charges). On ne se paie que sur l'encaissé.",
    "Tenez aussi un prévisionnel simple : ce que vous attendez le mois prochain selon les familles inscrites. L'écart entre prévu et réel est l'indicateur le plus utile pour décider."
   ],
   "appro": [
    "Suivez trois chiffres chaque mois, pas davantage : l'encaissé, les charges, le résultat. Ajoutez-en un quatrième une fois par trimestre : le revenu par heure engagée, tous foyers confondus. C'est lui qui dit si votre temps est bien utilisé.",
    "Comparez toujours avec le mois précédent et avec le prévu. Un résultat de 90 000 F n'a pas le même sens si vous en attendiez 70 000 ou 130 000. L'écart et sa cause (une famille en retard, un foyer perdu, un mois de vacances) orientent la décision suivante."
   ],
   "ex": "Prévu : 6 foyers, 205 000 F. Encaissé au 10 : 165 000 F, car une famille n'a pas payé. Charges : 55 000 F. Résultat provisoire : 110 000 F, donc 55 000 F de salaire, 33 000 F en caisse, 22 000 F d'épargne.",
   "fm": "Votre règle : (revenu − charges) → 50 % salaire du fondateur, 30 % laissés en caisse FayeMath, 20 % épargne. Objectif fixé : 300 000 F de revenu mensuel.",
   "err": "Se verser un salaire fixe sans regarder le résultat. Deux mois faibles suffisent alors à vider la caisse.",
   "cle": "On répartit le résultat, jamais le chiffre d'affaires.",
   "exo": "Calculez votre résultat du mois dernier : encaissé, charges, résultat, puis la répartition 50 / 30 / 20. Notez l'écart avec ce que vous aviez prévu.",
   "q": "Connaissez-vous, à 5 000 F près, votre résultat du mois dernier ?",
   "v1": "L6-1"
  },
  {
   "id": "finances-3",
   "t": "Encaisser à temps",
   "p": [
    "Un cours donné et non payé est une charge. La trésorerie d'une petite activité tient à la régularité des paiements, pas au nombre d'élèves.",
    "Annoncez la date de paiement dès l'inscription, envoyez la facture avant l'échéance et un reçu à chaque paiement. La relance est alors une simple application de la règle.",
    "Le retard de paiement se traite tôt et simplement. Un rappel courtois à la date prévue règle la plupart des cas ; attendre trois semaines rend la conversation pénible pour tout le monde.",
    "Séparez la relation pédagogique de la relation financière : on ne parle jamais d'argent devant l'élève, et le rappel se fait par écrit, au parent qui paie."
   ],
   "appro": [
    "Facilitez le paiement autant que vous l'exigez. Indiquez sur la facture le montant, l'échéance et les moyens acceptés ; envoyez-la quelques jours avant la fin du mois ; confirmez la réception par un reçu le jour même. Un parent paie plus vite quand tout est clair.",
    "Prévoyez une échelle de relance écrite : un rappel courtois à l'échéance, un second message à cinq jours, puis l'information que les séances seront suspendues au-delà de dix jours, comme annoncé. Chaque étape est factuelle et sans reproche. Vous appliquez une règle connue, vous ne réclamez pas une faveur."
   ],
   "ex": "« Bonjour Monsieur, j'espère que vous allez bien. Je vous transmets la facture de novembre pour Awa (35 000 F), à régler d'ici le 5. Je vous envoie le reçu dès réception. Bonne journée. »",
   "fm": "Paiement attendu sous 5 jours après la fin du mois ; séances suspendues au-delà de 10 jours. Toute la gestion financière se fait dans le classeur FayeMath_Academy_Gestion_Financiere.xlsx.",
   "err": "Continuer les séances deux mois sans paiement « pour ne pas pénaliser l'élève ». Vous financez alors la famille, et la sortie sera plus dure.",
   "cle": "Facture avant l'échéance, reçu à chaque paiement, règle appliquée à tous.",
   "exo": "Rédigez vos trois messages de relance (échéance, cinq jours, dix jours) et enregistrez-les comme modèles.",
   "q": "Quelles familles ont payé en retard ces trois derniers mois, et qu'avez-vous fait ?",
   "v1": "L6-2"
  },
  {
   "id": "finances-4",
   "t": "Le rendement de votre temps",
   "p": [
    "Votre ressource rare est le temps, trajets compris. Deux foyers au même prix ne rapportent pas autant si l'un demande une heure de route de plus.",
    "Regrouper les séances par quartier et par jour augmente votre revenu sans un élève de plus.",
    "Calculez pour chaque foyer le revenu net par heure engagée : (prix du mois − transport du mois) ÷ (heures de cours + heures de trajet). Deux foyers au même prix peuvent aller du simple au double.",
    "Ce calcul guide la prospection : un nouveau foyer dans un quartier déjà desservi, le même jour, vaut davantage qu'un foyer isolé mieux payé."
   ],
   "appro": [
    "Raisonnez en tournées. Deux séances dans le même quartier le même après-midi partagent un seul trajet ; trois foyers voisins transforment une demi-journée en bloc très rentable. Votre carte des familles est un outil financier autant que logistique.",
    "Ce raisonnement donne aussi un prix à la distance. Un foyer éloigné peut rester intéressant s'il comporte deux enfants ou s'il ouvre un nouveau quartier où prospecter. Décidez-le en connaissance de cause, avec le calcul sous les yeux, plutôt que par habitude d'accepter."
   ],
   "ex": "Foyer A : 35 000 F, 8 h de cours, 2 h de trajet, 4 000 F de transport → 3 100 F par heure engagée. Foyer B : 35 000 F, 8 h de cours, 8 h de trajet, 12 000 F de transport → environ 1 440 F par heure engagée.",
   "fm": "À 7 foyers, votre charge prévue est de 35 à 39 heures par semaine, cours, trajets et prospection compris.",
   "err": "Accepter tout nouveau foyer sans regarder le trajet. Le planning se remplit d'heures de route non payées.",
   "cle": "On compare les foyers au revenu par déplacement, pas au prix du mois.",
   "exo": "Pour chaque foyer, calculez le revenu net par heure engagée, puis classez-les. Identifiez le jour où deux séances pourraient être regroupées.",
   "q": "Quel est votre foyer le moins rentable par heure engagée, et que pourriez-vous changer ?",
   "v1": "L6-3"
  }
 ],
 "cas": {
  "t": "La clôture d'un mois difficile",
  "s": "Fin de mois : 5 foyers facturés pour 170 000 F. Une famille (35 000 F) n'a pas payé au 8 du mois. Vos charges du mois s'élèvent à 48 000 F.",
  "q": [
   "Quel est votre résultat sur l'encaissé ?",
   "Comment appliquez-vous la règle 50 / 30 / 20 ?",
   "Que faites-vous pour la famille en retard, et à quelle date ?"
  ],
  "r": [
   "Encaissé : 135 000 F. Résultat : 135 000 − 48 000 = 87 000 F.",
   "Salaire 43 500 F · caisse 26 100 F · épargne 17 400 F.",
   "Rappel écrit dès maintenant (le délai de 5 jours est dépassé) ; au-delà de 10 jours, suspension des séances comme annoncé dans les conditions."
  ]
 },
 "atelier": {
  "t": "Calculer le coût de transport de chaque foyer",
  "c": "Pour chaque foyer suivi, écrivez : le coût d'un aller-retour, le nombre de séances par semaine, puis le coût du mois (aller-retour × séances par semaine × 4,33). Déduisez ce que chaque foyer rapporte net de transport."
 },
 "outil": {
  "t": "Check-list de clôture mensuelle",
  "usage": "À dérouler le dernier jour du mois, dans le classeur de gestion financière.",
  "lignes": [
   "## Avant la clôture",
   "Tous les paiements reçus sont saisis, avec la date et le moyen de paiement.",
   "Toutes les dépenses du mois sont saisies (transport, abonnements, impressions).",
   "## Le calcul",
   "Encaissé du mois − charges du mois = résultat.",
   "Résultat × 50 % = salaire · × 30 % = caisse · × 20 % = épargne.",
   "## Les factures",
   "Factures du mois suivant envoyées avant l'échéance.",
   "Reçus envoyés pour chaque paiement reçu.",
   "## Les retards",
   "Liste des familles non à jour, date du rappel, date limite (10 jours).",
   "## Le regard en arrière",
   "Écart entre le prévu et le réel : d'où vient-il ?"
  ]
 },
 "actions": [
  "Dédier un compte ou un portefeuille mobile à FayeMath, séparé de l'argent personnel",
  "Saisir chaque paiement et chaque dépense le jour même dans le classeur",
  "Faire la clôture de fin de mois et appliquer la règle 50 / 30 / 20"
 ],
 "quiz": [
  [
   "Sur quoi s'applique la règle 50 / 30 / 20 ?",
   [
    "Sur le chiffre d'affaires",
    "Sur le revenu moins les charges",
    "Sur l'épargne"
   ],
   1,
   "On répartit le résultat."
  ],
  [
   "Quelle est la première règle financière ?",
   [
    "Séparer la caisse de l'entreprise de l'argent personnel",
    "Emprunter pour grandir",
    "Baisser les prix"
   ],
   0,
   "Sans cela, impossible de savoir si l'activité est rentable."
  ],
  [
   "Comment comparer deux foyers ?",
   [
    "Au prix du mois",
    "Au revenu par déplacement",
    "Au nombre d'enfants seulement"
   ],
   1,
   "Le trajet fait partie du coût."
  ],
  [
   "Sur quoi se paie-t-on ?",
   [
    "Sur ce qui est facturé",
    "Sur ce qui est réellement encaissé",
    "Sur ce qui est espéré"
   ],
   1,
   "Une facture non payée n'est pas un revenu."
  ],
  [
   "Avec 87 000 F de résultat, quel est le salaire selon la règle 50 / 30 / 20 ?",
   [
    "43 500 F",
    "26 100 F",
    "87 000 F"
   ],
   0,
   "50 % du résultat."
  ],
  [
   "Quand rappeler un paiement en retard ?",
   [
    "Dès la date prévue dépassée, par écrit",
    "Après deux mois",
    "Jamais, pour ne pas gêner"
   ],
   0,
   "Un rappel tôt est plus simple pour tout le monde."
  ],
  [
   "Comment calculer le revenu net par heure engagée ?",
   [
    "Prix du mois ÷ heures de cours",
    "(Prix − transport) ÷ (heures de cours + heures de trajet)",
    "Prix du mois × nombre d'enfants"
   ],
   1,
   "Le trajet fait partie du temps engagé."
  ],
  [
   "Devant qui parle-t-on d'argent ?",
   [
    "Devant l'élève",
    "Avec le parent qui paie, par écrit",
    "Dans un groupe WhatsApp"
   ],
   1,
   "On sépare la relation pédagogique de la relation financière."
  ]
 ],
 "sources": [
  [
   "Pilier Finances et classeur FayeMath_Academy_Gestion_Financiere.xlsx (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  3
 ],
 "v1": 6
}
);
