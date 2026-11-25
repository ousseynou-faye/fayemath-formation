/* =====================================================================
   FayeMath Formation — PÔLE E — Enseigner en ligne (parcours du formateur)
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
 "id": "enligne-bases",
 "n": 23,
 "pole": "E",
 "court": "Fondamentaux du cours en ligne",
 "titre": "Comprendre le cours en ligne : ce qui marche vraiment",
 "but": "Savoir ce que la recherche dit de l'enseignement à distance, choisir le bon format et connaître les causes de décrochage avant d'ouvrir votre premier cours en ligne.",
 "objectifs": [
  "Connaître les conclusions solides de la recherche sur l'enseignement à distance",
  "Distinguer cours synchrone, asynchrone et hybride, et choisir selon l'élève",
  "Identifier ce qui fait décrocher un élève en ligne et comment l'éviter",
  "Situer le cours en ligne dans l'offre FayeMath sans affaiblir le cours à domicile"
 ],
 "lecons": [
  {
   "id": "enligne-bases-1",
   "t": "Ce que dit la recherche sur l'enseignement à distance",
   "p": [
    "La question n'est pas « en ligne ou à domicile ? » mais « est-ce que l'enseignement est bon ? ». La synthèse de l'Education Endowment Foundation (EEF, Royaume-Uni), qui a réuni une soixantaine de revues systématiques et méta-analyses, retient d'abord ceci : la qualité de l'enseignement compte davantage que la manière dont il est diffusé. Une explication claire, un exemple bien choisi, une pratique guidée puis autonome et un retour précis restent la base, que l'élève soit à côté de vous ou derrière un écran.",
    "La même synthèse dégage quatre autres constats utiles : l'accès à un appareil et à une connexion est une condition, pas un détail ; les interactions entre élèves motivent et font progresser ; il faut soutenir explicitement le travail autonome (listes de contrôle, plan de travail quotidien) ; et les approches doivent varier selon le contenu et le profil de l'élève. Autrement dit, le cours en ligne réussit quand on garde sa pédagogie et qu'on ajoute un cadre plus serré.",
    "L'évaluation indépendante du programme national de tutorat en ligne anglais montre aussi deux limites concrètes : le lien avec l'élève est plus difficile à créer à distance, et les problèmes techniques perturbent les séances. Ce sont exactement les deux points que ce parcours vous apprend à traiter : la relation (accueil, rituels, présence du parent) et la technique (poste préparé, plan B)."
   ],
   "appro": [
    "Retenez la hiérarchie : d'abord la pédagogie, ensuite l'outil. Un tableau blanc sophistiqué ne sauvera pas une explication confuse, alors qu'un simple téléphone posé au-dessus d'un cahier suffit pour une explication claire. Chaque fois que vous hésitez sur un outil, demandez-vous : « Est-ce que cela aide l'élève à penser, ou seulement à regarder ? »",
    "Méfiez-vous des promesses commerciales des plateformes. Les résultats sérieux viennent de synthèses de recherche (EEF, méta-analyses) et d'évaluations indépendantes, pas des pages publicitaires. Quand vous lisez un article sur le « e-learning », cherchez qui l'a écrit, sur quelles données, et s'il distingue élèves adultes et élèves du secondaire."
   ],
   "ex": "Vous hésitez à acheter une tablette graphique avant de lancer vos premiers cours en ligne. En relisant la conclusion de l'EEF, vous commencez avec votre téléphone fixé au-dessus du cahier et une méthode de séance rigoureuse. Après un mois, vous achetez la tablette parce que vous savez précisément ce qu'elle vous apportera.",
   "fm": "Votre méthode de séance, vos fiches et vos séries d'exercices sont déjà votre principal atout en ligne. Le cours à distance n'est pas un autre métier : c'est votre pédagogie FayeMath, adaptée à un écran.",
   "err": "Croire que l'outil fait la qualité du cours, et passer des semaines à comparer des logiciels au lieu de préparer la séance.",
   "cle": "En ligne comme à domicile, la qualité de l'enseignement compte plus que le canal ; il faut seulement un cadre plus serré.",
   "exo": "Relisez votre déroulé de séance habituel et notez, pour chaque phase, ce qui change à distance (ce que vous voyez moins, ce que vous devez demander à l'élève de montrer).",
   "q": "Quelle partie de votre pédagogie actuelle sera la plus difficile à garder en ligne, et pourquoi ?"
  },
  {
   "id": "enligne-bases-2",
   "t": "Synchrone, asynchrone, hybride : choisir le bon format",
   "p": [
    "Un cours synchrone se déroule en direct : vous et l'élève êtes connectés au même moment (appel vidéo, partage d'écran). Il permet l'interaction immédiate, la correction en temps réel et le lien humain. Il exige en revanche une connexion stable au même moment des deux côtés.",
    "Un cours asynchrone se consulte en différé : une courte vidéo, une fiche, un quiz, un exercice à rendre en photo. L'élève avance à son rythme et la consommation de données peut se planifier (téléchargement au Wi-Fi). Le risque est l'abandon silencieux : sans rendez-vous, beaucoup d'élèves du secondaire ne font pas le travail.",
    "Le format hybride combine les deux : un contenu court à voir avant (vidéo, fiche), puis une séance en direct consacrée aux exercices et aux questions. C'est souvent le meilleur compromis pour vos élèves : le direct garde l'engagement, le différé économise du temps de séance et de la connexion. Le choix dépend de l'âge, de l'autonomie de l'élève, de l'équipement de la famille et de l'objectif (rattrapage, entraînement, préparation d'examen)."
   ],
   "appro": [
    "Une règle simple pour le secondaire : plus l'élève est jeune ou peu autonome, plus il faut de direct. Un élève de 6e a besoin d'être guidé en temps réel ; un élève de Terminale motivé peut travailler une vidéo seul puis venir en séance avec ses questions.",
    "Le différé n'est efficace que s'il est suivi. Chaque contenu asynchrone doit déboucher sur une trace (exercice en photo, quiz, question à poser en séance) et vous devez la vérifier. Un contenu envoyé sans contrôle est un contenu qui n'a souvent pas été vu."
   ],
   "ex": "Pour un élève de 3e qui prépare le BFEM, vous envoyez le dimanche une vidéo de 5 minutes sur la méthode de Thalès et trois exercices. Le mercredi, la séance en direct de 60 minutes commence par la correction de ces exercices photographiés, puis passe à des sujets type BFEM.",
   "fm": "Vos élèves sont presque tous sur téléphone, avec des forfaits de données. Le format hybride vous permet d'envoyer les supports lourds à l'avance (PDF, vidéo courte) et de réserver le direct à ce qui exige votre présence.",
   "err": "Envoyer des vidéos et des fiches sans rendez-vous ni vérification, puis découvrir un mois plus tard que l'élève n'a rien ouvert.",
   "cle": "Direct pour guider, différé pour préparer et s'entraîner, hybride pour combiner les deux ; tout différé doit laisser une trace vérifiée.",
   "exo": "Pour trois élèves (réels ou types), choisissez un format (synchrone, asynchrone, hybride) et justifiez-le en une phrase selon l'âge, l'autonomie et l'équipement.",
   "q": "Pour quel type d'élève le cours entièrement asynchrone est-il risqué ?"
  },
  {
   "id": "enligne-bases-3",
   "t": "Pourquoi l'élève décroche en ligne et comment l'éviter",
   "p": [
    "Le décrochage en ligne a trois sources principales. La première est relationnelle : l'élève ne se sent ni vu ni attendu ; il coupe sa caméra, répond par monosyllabes, puis manque des séances. La deuxième est technique : son coupé, image figée, appareil partagé avec la fratrie, batterie vide, crédit épuisé. La troisième est l'autonomie : entre deux séances, sans cadre, rien n'avance.",
    "Contre le décrochage relationnel : un rituel d'accueil de deux minutes (prénom, nouvelles, ce qui s'est passé à l'école), des questions fréquentes qui obligent à répondre, et l'habitude de demander à voir le cahier. L'élève doit comprendre qu'il est observé avec bienveillance, pas surveillé.",
    "Contre le décrochage technique : un essai de connexion avant la première séance, un plan B connu de tous (appel audio et photos du cahier si la vidéo ne passe pas) et une règle claire sur la séance perdue. Contre le décrochage d'autonomie : un plan de travail écrit après chaque séance, court, daté et vérifiable, comme le recommande la synthèse de l'EEF."
   ],
   "appro": [
    "Repérez les signaux faibles : caméra qui reste éteinte, retards de connexion qui se répètent, travail non fait deux fois de suite, réponses de plus en plus courtes. Comme pour la fidélisation des familles, un signal orange appelle une action dans la semaine : un mot à l'élève, puis un message au parent si rien ne change.",
    "Le parent est votre allié le plus puissant à distance. Il ne voit plus l'encadreur arriver à la maison ; il faut donc rendre le cours visible pour lui : horaire fixe, compte rendu bref après chaque séance, et l'invitation à passer la tête en début ou en fin de séance."
   ],
   "ex": "Moussa, en 4e, garde sa caméra éteinte depuis deux séances et répond peu. Vous commencez la séance suivante par une question sur son match du week-end, vous lui faites résoudre un exercice en lui demandant de montrer son cahier toutes les deux minutes, et vous envoyez au parent un compte rendu positif et précis. À la séance d'après, la caméra est allumée.",
   "fm": "Votre force à domicile est la relation et la régularité. En ligne, elles ne disparaissent pas, mais elles doivent devenir des rituels visibles : accueil, cahier montré, compte rendu au parent.",
   "err": "Interpréter la caméra éteinte comme de la paresse et le reprocher à l'élève devant tout le monde, au lieu d'en chercher la cause (connexion, gêne, chambre partagée).",
   "cle": "On décroche en ligne par manque de lien, par panne technique ou par manque de cadre : un rituel, un plan B et un plan de travail traitent les trois.",
   "exo": "Rédigez votre rituel d'accueil de deux minutes et votre plan B technique en trois lignes, prêts à être envoyés aux familles.",
   "q": "Lequel des trois décrochages (relation, technique, autonomie) vous semble le plus probable chez vos élèves, et que ferez-vous en premier ?"
  }
 ],
 "cas": {
  "t": "La famille qui hésite à passer en ligne",
  "s": "Mme Diop, dont la fille est en 5e, déménage à Thiès pour trois mois. Elle souhaite continuer avec vous mais doute : « En ligne, elle va s'endormir devant l'écran. Est-ce que ça vaut vraiment le coup ? »",
  "q": [
   "Que répondez-vous sur l'efficacité du cours en ligne ?",
   "Quel format proposez-vous pour une élève de 5e ?",
   "Quelles garanties concrètes donnez-vous au parent ?"
  ],
  "r": [
   "Reconnaître le doute (il est fondé si le cours est mal mené) ; expliquer que la qualité de l'enseignement compte plus que le canal ; décrire précisément comment se passera une séance.",
   "Du synchrone pour l'essentiel (élève jeune, besoin de guidage), avec un plan de travail court entre les séances ; éventuellement une courte vidéo de rappel avant certaines séances.",
   "Une séance d'essai de connexion gratuite et courte ; horaire fixe ; caméra et cahier visibles ; compte rendu après chaque séance ; parent invité à assister au début ; point d'étape au bout de quatre semaines avec possibilité d'arrêter."
  ]
 },
 "atelier": {
  "t": "Votre note de cadrage du cours en ligne",
  "c": "Rédigez une page : pour qui proposez-vous le cours en ligne (profils d'élèves), dans quels cas (déménagement, élève éloigné, préparation d'examen, rattrapage), sous quel format (synchrone, hybride), et ce que vous ne ferez pas (par exemple : pas de cours entièrement en différé pour les classes de 6e et 5e)."
 },
 "outil": {
  "t": "Grille de choix du format",
  "usage": "À remplir pour chaque nouvel élève en ligne avant de fixer le format.",
  "lignes": [
   "## Élève",
   "Classe · âge · autonomie (faible / moyenne / forte) · objectif",
   "## Équipement de la famille",
   "Appareil (téléphone, tablette, ordinateur) · partagé ou personnel · connexion (Wi-Fi, données mobiles) · lieu calme disponible",
   "## Format retenu",
   "Synchrone · hybride · asynchrone (justifier)",
   "## Rythme",
   "Nombre de séances par semaine · durée · jour et heure fixes",
   "## Plan B",
   "Si la vidéo ne passe pas : appel audio + photos du cahier · si l'appel coupe : rappel sous 5 minutes, sinon séance reportée selon les conditions",
   "## Point d'étape",
   "Date du bilan à quatre semaines avec le parent"
  ]
 },
 "actions": [
  "Rédiger la note de cadrage du cours en ligne (pour qui, quand, quel format)",
  "Préparer le rituel d'accueil et le plan B technique à envoyer aux familles",
  "Prévoir une séance d'essai de connexion avant tout premier cours en ligne"
 ],
 "quiz": [
  [
   "Selon la synthèse de l'EEF, qu'est-ce qui compte le plus dans l'enseignement à distance ?",
   [
    "La qualité de l'enseignement",
    "Le logiciel de visioconférence",
    "La durée de la séance"
   ],
   0,
   "La synthèse conclut que la qualité de l'enseignement compte davantage que le mode de diffusion."
  ],
  [
   "Que signifie un cours « synchrone » ?",
   [
    "Un cours en direct, élève et enseignant connectés en même temps",
    "Un cours enregistré à regarder plus tard",
    "Un cours uniquement par écrit"
   ],
   0,
   "Synchrone veut dire au même moment : l'interaction est immédiate."
  ],
  [
   "Quel est le principal risque d'un cours entièrement asynchrone pour un élève de 6e ?",
   [
    "L'abandon silencieux faute de cadre",
    "Une consommation de données trop faible",
    "Un excès d'interaction"
   ],
   0,
   "Sans rendez-vous ni guidage, un jeune élève fait rarement le travail seul."
  ],
  [
   "Quelle limite du tutorat en ligne l'évaluation du programme national anglais a-t-elle relevée ?",
   [
    "Le lien avec l'élève est plus difficile à créer",
    "Les élèves progressent toujours moins",
    "Le tutorat en ligne est impossible"
   ],
   0,
   "L'évaluation conclut que c'est faisable, mais que la relation est plus difficile et la technique perturbe parfois."
  ],
  [
   "Que recommande l'EEF pour soutenir le travail autonome à distance ?",
   [
    "Des listes de contrôle et un plan de travail",
    "Laisser l'élève s'organiser seul",
    "Supprimer les devoirs"
   ],
   0,
   "Le travail autonome doit être explicitement soutenu par des outils simples."
  ],
  [
   "Un contenu asynchrone est efficace à condition…",
   [
    "qu'il débouche sur une trace vérifiée",
    "qu'il dure plus de 30 minutes",
    "qu'il soit envoyé tard le soir"
   ],
   0,
   "Sans trace vérifiée (exercice, quiz, question), on ne sait pas s'il a été travaillé."
  ],
  [
   "Un élève garde sa caméra éteinte depuis deux séances. Première réaction adaptée ?",
   [
    "Chercher la cause et renforcer le lien",
    "Le réprimander devant le parent",
    "Arrêter les cours"
   ],
   0,
   "La caméra éteinte peut venir de la connexion, de la gêne ou d'un lieu partagé : on cherche d'abord la cause."
  ],
  [
   "Pourquoi le format hybride convient-il souvent à vos élèves ?",
   [
    "Il garde l'engagement du direct et économise temps et données",
    "Il supprime le besoin de préparer",
    "Il évite tout contact avec le parent"
   ],
   0,
   "Le différé prépare, le direct guide et corrige : on combine les avantages."
  ]
 ],
 "sources": [
  [
   "EEF — Remote Learning: Rapid Evidence Assessment (synthèse de recherche)",
   "https://educationendowmentfoundation.org.uk/guidance-for-teachers/covid-19-resources/best-evidence-on-supporting-students-to-learn-remotely"
  ],
  [
   "EEF — Évaluation indépendante du programme national de tutorat en ligne",
   "https://educationendowmentfoundation.org.uk/news/eef-publishes-findings-from-independent-evaluation-of-national-online-tutoring-pilot"
  ]
 ],
 "veille": []
},
{
 "id": "enligne-equipement",
 "n": 24,
 "pole": "E",
 "court": "Équipement, connexion, outils",
 "titre": "Équiper son poste et choisir ses outils pour enseigner à distance",
 "but": "Monter un poste de travail fiable avec peu de moyens, maîtriser la question de la connexion au Sénégal et choisir des outils gratuits adaptés aux maths et à la physique-chimie.",
 "objectifs": [
  "Monter un poste minimal fiable : image, son, lumière, écriture",
  "Anticiper les problèmes de connexion et prévoir un plan B",
  "Connaître les limites des offres gratuites de visioconférence",
  "Choisir les bons outils gratuits : tableau blanc, GeoGebra, Desmos, PhET, formulaires"
 ],
 "lecons": [
  {
   "id": "enligne-equipement-1",
   "t": "Le poste minimal : voir, entendre, écrire",
   "p": [
    "Un bon cours en ligne repose sur trois choses que l'élève doit percevoir sans effort : votre voix, votre écriture et votre visage. Le son passe avant l'image : un élève supporte une image moyenne, pas une voix hachée ou couverte par le bruit. Un kit main libre filaire ou un casque avec micro, même bon marché, améliore plus le cours qu'une meilleure caméra.",
    "Pour l'écriture, trois solutions existent. La plus simple : votre téléphone fixé au-dessus d'une feuille (support ou pile de livres), utilisé comme caméra-document pendant que vous parlez. La deuxième : une tablette avec stylet et une application de tableau blanc partagée à l'écran. La troisième, sur ordinateur : une tablette graphique branchée en USB. Commencez par la première et n'investissez qu'après avoir mesuré vos besoins.",
    "Soignez enfin le cadre : une lumière en face de vous (fenêtre ou lampe), jamais derrière ; un fond neutre et rangé ; l'appareil stable, à hauteur des yeux ; les notifications coupées ; une batterie chargée et un chargeur à portée de main. Faites un essai filmé de deux minutes et regardez-le comme si vous étiez l'élève."
   ],
   "appro": [
    "Testez la lisibilité de votre écriture à l'écran d'un téléphone, pas de votre ordinateur : écrivez gros, au feutre noir sur papier blanc, avec des marges, et ne remplissez jamais la feuille entière. Ce qui est lisible sur un grand écran peut devenir illisible sur le téléphone de l'élève.",
    "Gardez un « kit de séance » prêt dans une boîte : kit main libre, feutres, feuilles blanches, support du téléphone, chargeur, batterie externe si possible. Le matériel prêt évite les cinq premières minutes perdues."
   ],
   "ex": "Vous fixez votre téléphone à une étagère au-dessus du bureau, objectif vers la feuille, et vous rejoignez l'appel avec l'ordinateur pour le son et votre visage. L'élève voit votre main écrire la démonstration en direct, comme au tableau.",
   "fm": "Vous enseignez déjà au cahier, à côté de l'élève. La caméra-document reproduit ce geste : l'élève voit votre écriture se construire, ce qui reste la manière la plus naturelle d'expliquer les maths et la physique-chimie.",
   "err": "Investir d'abord dans une caméra haute définition et négliger le micro, alors que c'est le son qui fait décrocher l'élève.",
   "cle": "Le son d'abord, l'écriture lisible ensuite, le cadre propre enfin ; commencez simple et investissez après avoir mesuré.",
   "exo": "Montez votre poste minimal, enregistrez deux minutes d'explication écrite et regardez la vidéo sur un téléphone : notez trois améliorations.",
   "q": "Avec votre matériel actuel, quelle solution d'écriture pouvez-vous utiliser dès demain ?"
  },
  {
   "id": "enligne-equipement-2",
   "t": "La connexion au Sénégal : anticiper et prévoir un plan B",
   "p": [
    "La couverture 4G est large : un rapport de la GSMA publié en 2026 indique une couverture de la population de 97 %. Mais couverture ne veut pas dire qualité : les mesures de l'ARTP publiées en août 2026 classent les opérateurs et montrent que certains n'atteignent pas les seuils fixés pour les données mobiles dans les zones contrôlées. Le coût, même en baisse (–10,9 % au premier trimestre 2026 selon l'indice des prix de l'ARTP et de l'ANSD), reste un frein pour de nombreuses familles.",
    "Conséquence pratique : ne supposez jamais que la connexion de l'élève est bonne. Avant la première séance, faites un essai de dix minutes à l'heure prévue du cours ; demandez quel appareil, quel opérateur, quel lieu. Mesurez votre propre consommation pendant une séance réelle avec le compteur de données de votre téléphone, pour pouvoir informer honnêtement les familles.",
    "Préparez un plan B en trois niveaux. Niveau 1 : la vidéo saccade, on coupe les caméras et on garde le son et le partage d'écran. Niveau 2 : l'appel vidéo ne tient pas, on passe en appel audio et l'élève envoie des photos de son cahier. Niveau 3 : plus rien ne passe, on reporte selon la règle annoncée dans vos conditions et l'élève reçoit le travail par message."
   ],
   "appro": [
    "Réduisez la consommation sans réduire la pédagogie : envoyez les supports lourds avant la séance pour qu'ils soient téléchargés au Wi-Fi ; demandez à l'élève de couper sa caméra pendant les phases d'écoute et de la rallumer pour montrer son cahier ; préférez le partage d'un document simple au partage d'un écran chargé.",
    "Écrivez la règle des coupures dans vos conditions avant la première séance : qui rappelle, au bout de combien de minutes, ce qui arrive à la séance si la coupure vient de chez l'élève ou de chez vous. Une règle écrite à l'avance évite les discussions désagréables."
   ],
   "ex": "Pendant une séance avec un élève de Rufisque, la vidéo se fige. Vous dites : « On passe au niveau 1 », vous coupez les caméras et continuez au son. Dix minutes plus tard l'appel coupe : vous rappelez en audio comme prévu et l'élève envoie ses photos. La séance se termine sans débat.",
   "fm": "Vos familles connaissent déjà la data chère et les coupures : un plan B annoncé à l'avance montre votre professionnalisme et rassure les parents.",
   "err": "Improviser lors de la première coupure, perdre vingt minutes à reconnecter et laisser l'élève décrocher.",
   "cle": "Couverture n'est pas qualité : testez avant, mesurez votre consommation et annoncez un plan B en trois niveaux.",
   "exo": "Rédigez votre plan B en trois niveaux et la règle des coupures, puis ajoutez-les à vos conditions générales.",
   "q": "Combien de données consomme une de vos séances ? Comment allez-vous le mesurer ?"
  },
  {
   "id": "enligne-equipement-3",
   "t": "Les outils gratuits : visioconférence, tableau blanc, maths et sciences",
   "p": [
    "Visioconférence. Google Meet gratuit permet un appel à deux jusqu'à 24 heures, mais une réunion de trois personnes ou plus est limitée à une heure. Zoom gratuit (formule Basic) limite les réunions à 40 minutes. WhatsApp permet des appels vidéo simples, connus de toutes les familles, sans partage d'écran aussi confortable. Choisissez selon le nombre de participants : en individuel, Meet convient ; en petit groupe, prévoyez la limite d'une heure ou une offre payante.",
    "Tableau blanc. Excalidraw est un tableau blanc collaboratif gratuit et libre, utilisable sans créer de compte : vous partagez un lien, l'élève dessine avec vous. Microsoft Whiteboard est une autre option gratuite. Attention aux outils qui disparaissent : Google a arrêté Jamboard le 31 décembre 2024 ; ne bâtissez donc pas tous vos supports sur un seul service sans en garder une copie (PDF, image).",
    "Maths et sciences. GeoGebra est gratuit pour un usage non commercial ; sa fonction « leçon » (GeoGebra Classroom) permet de partager une activité par un code et de voir en direct le travail de chaque élève. Desmos offre une calculatrice graphique gratuite, sur le web et en application. PhET (Université du Colorado) propose plus de 150 simulations interactives gratuites, traduites en français, en physique, chimie et maths. Pour les quiz, Google Forms dispose d'un mode questionnaire qui corrige automatiquement les questions à choix et les réponses courtes exactes."
   ],
   "appro": [
    "Vérifiez toujours les conditions d'utilisation : « gratuit pour un usage non commercial » (GeoGebra, PhET) signifie que vous pouvez l'utiliser pour enseigner, mais qu'il faut vérifier les conditions avant de revendre un contenu qui l'intègre. Les limites des offres gratuites changent : revérifiez-les sur les pages d'aide officielles avant de les annoncer à une famille.",
    "Limitez-vous à une boîte à outils courte : un outil d'appel, un tableau blanc, GeoGebra ou Desmos, PhET pour la physique-chimie, un outil de quiz. Maîtriser cinq outils vaut mieux qu'en essayer vingt ; et chaque outil nouveau doit être testé avec l'élève avant d'être utilisé en séance réelle."
   ],
   "ex": "Pour un groupe de trois élèves de 2nde, vous savez qu'une réunion Meet gratuite est coupée au bout d'une heure : vous planifiez une séance de 55 minutes, avec la fonction étudiée dans Desmos puis un quiz Google Forms de cinq questions corrigé automatiquement.",
   "fm": "Vos documents existent déjà en PDF : ils se partagent tels quels. Les outils interactifs (GeoGebra, Desmos, PhET) viennent en complément, pour faire manipuler ce que vous expliquez déjà à domicile.",
   "err": "Découvrir en pleine séance de groupe que la réunion gratuite s'arrête au bout d'une heure, ou qu'un outil a fermé.",
   "cle": "Une boîte à outils courte, gratuite et testée : appel, tableau blanc, GeoGebra/Desmos, PhET, quiz — en connaissant leurs limites.",
   "exo": "Créez votre boîte à outils : pour chaque outil, notez l'usage, la limite de l'offre gratuite et le lien. Testez-en deux avec un proche.",
   "q": "Quels deux outils allez-vous maîtriser en premier, et pour quel chapitre ?"
  }
 ],
 "cas": {
  "t": "La séance de groupe coupée au bout d'une heure",
  "s": "Vous lancez un stage BFEM en ligne pour quatre élèves avec Google Meet gratuit. À la 60e minute, la réunion se ferme en plein milieu d'un exercice ; deux élèves n'arrivent pas à revenir.",
  "q": [
   "Pourquoi est-ce arrivé ?",
   "Que faites-vous immédiatement ?",
   "Comment l'évitez-vous ensuite ?"
  ],
  "r": [
   "L'offre gratuite de Meet limite à une heure les réunions de trois personnes ou plus.",
   "Envoyer un nouveau lien dans le groupe, terminer l'exercice en dix minutes, envoyer la correction écrite à tous et s'excuser brièvement.",
   "Planifier des séances de 55 minutes ou en deux parties avec deux liens ; tester les limites avant ; envisager une offre payante si le groupe devient régulier ; annoncer la règle aux familles."
  ]
 },
 "atelier": {
  "t": "Votre poste et votre boîte à outils",
  "c": "Décrivez votre poste (appareils, son, solution d'écriture, lumière, fond), puis listez au maximum six outils avec pour chacun : usage, limite de l'offre gratuite, lien, date du dernier test. Ajoutez votre plan B en trois niveaux."
 },
 "outil": {
  "t": "Check-list technique avant une séance en ligne",
  "usage": "À parcourir 15 minutes avant chaque séance.",
  "lignes": [
   "## Matériel",
   "Batterie chargée, chargeur branché · kit main libre ou casque · feutres et feuilles · support du téléphone",
   "## Logiciels",
   "Lien de la séance envoyé · outils ouverts (tableau blanc, GeoGebra, PDF du jour) · notifications coupées",
   "## Image et son",
   "Lumière en face · fond neutre · test du micro · écriture lisible sur un téléphone",
   "## Connexion",
   "Test de débit si doute · données ou Wi-Fi disponibles · plan B rappelé",
   "## Supports",
   "Fiche ou exercices envoyés à l'avance · corrigé prêt · plan de travail à envoyer en fin de séance"
  ]
 },
 "actions": [
  "Monter le poste minimal et faire un essai filmé lu sur téléphone",
  "Rédiger le plan B en trois niveaux et la règle des coupures dans les conditions",
  "Mesurer la consommation de données d'une séance réelle",
  "Constituer et tester la boîte à outils (au plus six outils)"
 ],
 "quiz": [
  [
   "Quel élément améliore le plus un cours en ligne à petit budget ?",
   [
    "Un bon micro ou kit main libre",
    "Une caméra 4K",
    "Un deuxième écran"
   ],
   0,
   "Le son passe avant l'image : une voix claire garde l'attention."
  ],
  [
   "Quelle est la solution d'écriture la plus simple pour commencer ?",
   [
    "Le téléphone fixé au-dessus d'une feuille (caméra-document)",
    "Une tablette graphique professionnelle",
    "Un tableau interactif"
   ],
   0,
   "Elle ne coûte presque rien et reproduit le geste du cahier."
  ],
  [
   "Avec Google Meet gratuit, une réunion de trois personnes ou plus est limitée à…",
   [
    "une heure",
    "24 heures",
    "40 minutes"
   ],
   0,
   "La limite d'une heure concerne les réunions de 3 participants ou plus ; un appel à deux peut durer 24 heures."
  ],
  [
   "Avec Zoom gratuit (Basic), les réunions sont limitées à…",
   [
    "40 minutes",
    "une heure",
    "trois heures"
   ],
   0,
   "La formule gratuite de Zoom coupe les réunions à 40 minutes."
  ],
  [
   "Pourquoi garder une copie de vos supports hors des services en ligne ?",
   [
    "Un service peut fermer, comme Jamboard fin 2024",
    "C'est obligatoire par la loi",
    "Pour économiser la batterie"
   ],
   0,
   "Google a arrêté Jamboard le 31 décembre 2024 : dépendre d'un seul service est risqué."
  ],
  [
   "Que permet la fonction « leçon » de GeoGebra Classroom ?",
   [
    "Voir en direct le travail de chaque élève",
    "Enregistrer la séance en vidéo",
    "Corriger automatiquement une copie manuscrite"
   ],
   0,
   "L'enseignant partage un code et suit en temps réel les constructions et réponses."
  ],
  [
   "Quel type de question Google Forms corrige-t-il automatiquement ?",
   [
    "Les choix multiples et les réponses courtes exactes",
    "Les paragraphes rédigés",
    "Les photos de copies"
   ],
   0,
   "Les questions ouvertes longues demandent une correction manuelle."
  ],
  [
   "Le plan B de niveau 2 consiste à…",
   [
    "passer en appel audio et recevoir des photos du cahier",
    "annuler sans prévenir",
    "demander à l'élève de changer d'opérateur"
   ],
   0,
   "On garde le contact et la pédagogie avec le minimum de données."
  ]
 ],
 "sources": [
  [
   "Google — Limites de Google Meet selon le type de compte",
   "https://support.google.com/meet/answer/13396001?hl=fr"
  ],
  [
   "Communauté Zoom — Durée d'une réunion avec la formule gratuite",
   "https://community.zoom.com/meetings-2/how-long-does-a-free-basic-zoom-meeting-last-81967"
  ],
  [
   "Google — Fin de Jamboard",
   "https://support.google.com/jamboard/answer/14084927?hl=fr"
  ],
  [
   "ECML — Fiche Excalidraw (gratuit, libre, sans compte)",
   "https://www.ecml.at/en/Resources/ICT-tools/InventoryID/280"
  ],
  [
   "IREM de Lille — Tutoriel : créer une leçon GeoGebra (2026)",
   "https://irem.univ-lille.fr/wp-content/uploads/2026/02/tuto-exerciseur-creer_classe.pdf"
  ],
  [
   "PhET — Simulations interactives en français",
   "https://phet.colorado.edu/fr/"
  ],
  [
   "Desmos — À propos",
   "https://desmos.com/about"
  ],
  [
   "Google — Créer et noter un questionnaire avec Google Forms",
   "https://support.google.com/docs/answer/7032287?hl=fr"
  ],
  [
   "GSMA (2026) — Driving digital transformation of the economy in Senegal",
   "https://www.gsma.com/about-us/regions/africa/wp-content/uploads/2026/02/Driving-digital-transformation-of-the-economy-in-Senegal-report-EN_05.01-1.pdf"
  ],
  [
   "Osiris — L'ARTP note les opérateurs (août 2026)",
   "https://www.osiris.sn/orange-meilleure-connexion-yas-en-tete-sur-la-voix-l-artp-note-les-operateurs.html"
  ],
  [
   "Osiris — Prix des services mobiles : –10,9 % au 1er trimestre 2026",
   "https://www.osiris.sn/telecoms-les-prix-des-services-mobiles-chutent-de-10-9-au-premier-trimestre.html"
  ]
 ],
 "veille": []
},
{
 "id": "enligne-seance",
 "n": 25,
 "pole": "E",
 "court": "Conduire une séance en ligne",
 "titre": "Préparer et conduire une séance en ligne de qualité",
 "but": "Préparer chaque séance à distance, la dérouler avec un rythme qui garde l'élève actif, vérifier sa compréhension sans le voir écrire à côté de vous et gérer les incidents sans perdre la séance.",
 "objectifs": [
  "Préparer une séance en ligne avec une check-list J-1 et H-15",
  "Dérouler une séance en ligne en six temps adaptés à l'écran",
  "Vérifier la compréhension à distance par des preuves, pas par « tu as compris ? »",
  "Gérer les incidents courants : coupure, silence, distraction, caméra éteinte"
 ],
 "lecons": [
  {
   "id": "enligne-seance-1",
   "t": "Préparer une séance à distance",
   "p": [
    "Une séance en ligne se prépare plus que la même séance à domicile, parce qu'on ne peut pas improviser en fouillant dans le cahier de l'élève. La veille (J-1), fixez l'objectif unique de la séance, préparez les exercices dans l'ordre et envoyez à l'élève ce qu'il doit avoir sous les yeux (fiche PDF, énoncés) pour qu'il le télécharge tranquillement.",
    "Préparez vos supports pour l'écran : une page par idée, de grands caractères, des énoncés numérotés, le corrigé à part pour ne pas le montrer par erreur. Si vous utilisez GeoGebra, Desmos ou une simulation PhET, ouvrez-les et testez-les sur l'appareil que vous utiliserez.",
    "Quinze minutes avant (H-15), parcourez la check-list technique : batterie, son, lumière, lien envoyé, outils ouverts, notifications coupées. Connectez-vous deux minutes avant l'élève : c'est vous qui l'accueillez, comme on ouvre la porte à domicile."
   ],
   "appro": [
    "Prévoyez toujours un « plan court » : si la connexion ne permet que 30 minutes utiles, quels sont les deux exercices indispensables ? Écrire ce plan court à l'avance évite de sacrifier l'essentiel quand la séance est raccourcie.",
    "Préparez aussi la fin : le plan de travail à envoyer (trois tâches datées, vérifiables) et la phrase du compte rendu au parent. Ce qui est préparé à l'avance est envoyé ; ce qui ne l'est pas est oublié."
   ],
   "ex": "La veille d'une séance de 4e sur les puissances, vous envoyez la fiche méthode et six exercices numérotés. Votre plan court retient les exercices 2 et 5. Le lendemain, la connexion de l'élève est faible : vous faites ces deux exercices et envoyez le reste en plan de travail.",
   "fm": "Vos fiches et séries FayeMath sont déjà numérotées et structurées : il suffit de choisir, la veille, les exercices de la séance et ceux du plan court.",
   "err": "Partager son écran en cherchant le bon fichier devant l'élève pendant cinq minutes.",
   "cle": "J-1 : objectif, exercices, envoi ; H-15 : technique ; deux minutes avant : vous accueillez.",
   "exo": "Préparez votre prochaine séance en ligne avec un objectif unique, la liste des exercices, le plan court et le plan de travail final.",
   "q": "Quels deux exercices formeraient le plan court de votre prochaine séance ?"
  },
  {
   "id": "enligne-seance-2",
   "t": "Le déroulé en six temps adapté à l'écran",
   "p": [
    "1. Accueil et vérification (3 min) : prénom, nouvelles, test du son et de l'image, cahier et stylo prêts. 2. Rappel actif (5 min) : deux questions sur la séance précédente, réponses à l'oral ou au cahier montré à la caméra. 3. Explication courte (10 min maximum) : une notion, un exemple écrit en direct, en découpant en petites étapes.",
    "4. Pratique guidée (15 à 20 min) : l'élève résout un exercice pendant que vous l'observez ; il lit son raisonnement à voix haute et montre son cahier à chaque étape importante. 5. Pratique autonome (15 min) : un exercice proche, fait seul, caméra sur le cahier ou photo envoyée à la fin, puis correction commentée. 6. Bilan (5 min) : l'élève reformule ce qu'il a appris, vous fixez le plan de travail et annoncez la prochaine séance.",
    "À l'écran, l'attention baisse plus vite qu'à côté de l'élève. La règle est donc de changer d'activité souvent et de ne jamais parler longtemps sans faire agir l'élève. L'étude de Guo et ses collègues sur les vidéos de cours en ligne montre que l'engagement chute nettement au-delà de six minutes de vidéo : en direct aussi, découpez vos explications en séquences courtes."
   ],
   "appro": [
    "Faites parler l'élève plus que vous. Une bonne séance en ligne fait alterner des moments brefs où vous expliquez et des moments longs où l'élève écrit, montre, explique. Si vous parlez plus de la moitié du temps, l'élève est probablement devenu spectateur.",
    "Utilisez l'écran pour ce qu'il fait bien : montrer un document propre, une figure qui bouge (GeoGebra), une simulation (PhET). Et utilisez le cahier de l'élève pour ce que l'écran fait mal : la production personnelle, le geste d'écrire, l'erreur visible."
   ],
   "ex": "Séance de 60 minutes en 3e sur les équations : accueil 3 min, rappel 5 min (deux équations simples), explication 8 min (équation produit nul), pratique guidée 20 min (trois équations, cahier montré à chaque étape), pratique autonome 17 min (photo envoyée puis correction), bilan 7 min.",
   "fm": "Ce déroulé reprend la structure de vos séances à domicile ; seuls changent les durées, plus courtes, et la vérification, qui passe par le cahier montré.",
   "err": "Transformer la séance en conférence de 40 minutes avec un élève muet derrière son écran.",
   "cle": "Accueil, rappel, explication courte, pratique guidée, pratique autonome, bilan : on change d'activité souvent et l'élève produit.",
   "exo": "Écrivez le minutage de votre prochaine séance en ligne selon les six temps, avec ce que l'élève produit à chaque temps.",
   "q": "Dans votre dernière séance, combien de temps l'élève a-t-il réellement produit lui-même ?"
  },
  {
   "id": "enligne-seance-3",
   "t": "Vérifier la compréhension à distance",
   "p": [
    "À distance, vous ne voyez pas le cahier par-dessus l'épaule. Il faut donc demander des preuves. La question « Tu as compris ? » n'en est pas une : presque tous les élèves répondent oui. Remplacez-la par des demandes qui obligent à produire : « Montre-moi ton cahier », « Lis-moi ta deuxième ligne », « Explique-moi pourquoi tu as divisé par 3 », « Quelle est la prochaine étape ? ».",
    "Variez les formes de vérification : l'élève reformule la règle avec ses mots ; il trouve l'erreur dans une solution que vous avez volontairement fausse ; il répond à un mini-quiz de trois questions ; il envoie une photo de son exercice terminé. Chaque vérification doit être courte et fréquente, pas réservée à la fin.",
    "Quand l'erreur apparaît, ne la corrigez pas à sa place. Posez une question qui l'aide à la trouver : « Vérifie ton signe à la ligne 2 », « Remplace x par ta solution : que trouves-tu ? ». L'élève qui trouve lui-même son erreur la retient bien mieux que celui à qui on la montre."
   ],
   "appro": [
    "Pour les photos de cahier, fixez une règle : photo prise à la verticale, page entière, bien éclairée, envoyée dans la minute. Une photo floue fait perdre plus de temps qu'elle n'en fait gagner. Demandez aussi à l'élève de numéroter ses lignes : vous pourrez dire « ligne 4 » au lieu de décrire.",
    "Le silence n'est pas une compréhension. Si l'élève ne répond pas, attendez quelques secondes (il réfléchit peut-être ou la connexion est en retard), puis reformulez plus simplement plutôt que de donner la réponse."
   ],
   "ex": "Au lieu de demander à Awa si elle a compris la factorisation, vous lui donnez trois expressions et lui demandez de les factoriser puis de montrer son cahier ligne par ligne. À la deuxième, elle oublie un signe : vous lui dites « Développe ton résultat : retrouves-tu l'expression de départ ? ». Elle trouve l'erreur seule.",
   "fm": "C'est le même principe que votre questionnement à domicile ; à distance, il devient systématique, car c'est votre seule fenêtre sur le raisonnement de l'élève.",
   "err": "Se contenter du « oui, j'ai compris » et découvrir au devoir suivant que la méthode n'est pas acquise.",
   "cle": "À distance, on vérifie par des preuves : cahier montré, explication orale, erreur trouvée, mini-quiz, photo.",
   "exo": "Écrivez dix questions de vérification qui obligent l'élève à produire (au lieu de « tu as compris ? ») et gardez-les près de votre poste.",
   "q": "Quelle question de vérification utilisez-vous le plus souvent, et produit-elle une preuve ?"
  },
  {
   "id": "enligne-seance-4",
   "t": "Gérer les incidents de séance",
   "p": [
    "Coupure de connexion : appliquez le plan B annoncé (niveau 1, 2 ou 3) sans commentaire ni reproche ; notez le temps perdu et appliquez la règle prévue dans vos conditions. Si les coupures se répètent avec le même élève, cherchez la cause avec le parent (lieu, heure, appareil, opérateur) au lieu de subir.",
    "Élève silencieux ou caméra éteinte : demandez d'abord s'il y a un problème technique ou un lieu bruyant ; proposez de garder la caméra éteinte pendant l'écoute mais de l'allumer pour montrer le cahier ; posez des questions fermées puis ouvertes pour relancer. Distraction (téléphone, télévision, fratrie) : faites agir l'élève plus souvent, et si la distraction est durable, parlez-en avec le parent pour aménager un lieu calme.",
    "Comportement inapproprié ou malaise : restez professionnel, recentrez sur la tâche, et si cela se répète, mettez fin poliment à la séance et informez le parent par écrit. Ne réglez jamais un problème de comportement en privé avec un mineur hors du cadre convenu avec sa famille."
   ],
   "appro": [
    "Tenez un petit journal des incidents : date, élève, incident, ce que vous avez fait, résultat. Après un mois, vous verrez les causes récurrentes (heure trop tardive, connexion du soir saturée, appareil partagé) et pourrez changer la règle au lieu de traiter le même problème chaque semaine.",
    "Distinguez ce qui relève de vous et ce qui relève de la famille. Votre connexion, votre matériel et votre préparation sont de votre responsabilité ; le lieu calme, l'appareil disponible et la ponctualité de l'élève sont à organiser avec le parent, de manière bienveillante et écrite."
   ],
   "ex": "Les séances du jeudi à 20 h avec un élève de 1re coupent toutes les semaines. Votre journal des incidents le montre ; vous proposez au parent de déplacer la séance au samedi à 10 h. Les coupures disparaissent.",
   "fm": "Vos conditions générales prévoient déjà les reports et les absences ; complétez-les d'un paragraphe « cours en ligne » qui traite les coupures, la caméra et le lieu de travail.",
   "err": "Laisser une coupure ou un comportement gênant se répéter sans en parler au parent, puis perdre la famille sans comprendre pourquoi.",
   "cle": "Chaque incident a une réponse prévue ; ce qui se répète se traite à la cause, avec le parent et par écrit.",
   "exo": "Rédigez le paragraphe « cours en ligne » de vos conditions générales : coupures, caméra, lieu, retard, séance perdue.",
   "q": "Quel incident craignez-vous le plus en ligne, et quelle réponse avez-vous prévue ?"
  }
 ],
 "cas": {
  "t": "L'élève qui « comprend toujours »",
  "s": "Pape, élève de 2nde, répond « oui, c'est compris » à chaque explication pendant vos séances en ligne. Au devoir de son lycée sur les fonctions, il obtient 6/20.",
  "q": [
   "Qu'est-ce qui n'a pas fonctionné ?",
   "Comment changez-vous vos séances ?",
   "Que dites-vous au parent ?"
  ],
  "r": [
   "La vérification reposait sur la déclaration de l'élève, pas sur des preuves ; l'explication occupait sans doute trop de temps par rapport à la pratique.",
   "Remplacer « tu as compris ? » par des demandes de production (cahier montré, explication orale, erreur à trouver) ; allonger la pratique guidée et autonome ; mini-quiz de début de séance ; photos des exercices du plan de travail.",
   "Reconnaître le résultat sans dramatiser, expliquer le changement de méthode, proposer un point d'étape après un devoir blanc dans trois semaines."
  ]
 },
 "atelier": {
  "t": "Votre séance en ligne type",
  "c": "Écrivez une séance en ligne complète pour un chapitre que vous enseignez souvent : objectif, supports envoyés la veille, plan court, minutage des six temps avec ce que l'élève produit, cinq questions de vérification, plan de travail final et phrase du compte rendu au parent."
 },
 "outil": {
  "t": "Fiche de séance en ligne",
  "usage": "À remplir la veille, une par séance.",
  "lignes": [
   "## Identification",
   "Élève · classe · date · durée · outil d'appel",
   "## Objectif unique",
   "À la fin de la séance, l'élève saura…",
   "## Envoyé la veille",
   "Fiche · exercices numérotés · lien éventuel (GeoGebra, PhET)",
   "## Plan court",
   "Les deux exercices indispensables si la séance est raccourcie",
   "## Déroulé",
   "1 Accueil · 2 Rappel actif · 3 Explication courte · 4 Pratique guidée · 5 Pratique autonome · 6 Bilan",
   "## Vérifications prévues",
   "Trois questions qui obligent à produire",
   "## Fin de séance",
   "Plan de travail (3 tâches datées) · phrase du compte rendu au parent · incident éventuel"
  ]
 },
 "actions": [
  "Créer la fiche de séance en ligne et la remplir pour chaque séance",
  "Rédiger dix questions de vérification et les afficher près du poste",
  "Ajouter un paragraphe « cours en ligne » aux conditions générales",
  "Tenir un journal des incidents pendant un mois"
 ],
 "quiz": [
  [
   "Que faut-il envoyer la veille d'une séance en ligne ?",
   [
    "Les supports que l'élève doit avoir sous les yeux",
    "Le corrigé complet",
    "Rien, tout se fait en direct"
   ],
   0,
   "L'élève les télécharge tranquillement et la séance n'est pas ralentie."
  ],
  [
   "À quoi sert le « plan court » ?",
   [
    "Garder l'essentiel si la séance est raccourcie",
    "Écourter volontairement chaque séance",
    "Remplacer le plan de travail"
   ],
   0,
   "On sait d'avance quels exercices sont indispensables."
  ],
  [
   "Selon l'étude de Guo et al. sur les vidéos de cours, l'engagement chute nettement au-delà de…",
   [
    "6 minutes",
    "20 minutes",
    "1 heure"
   ],
   0,
   "D'où l'intérêt de découper les explications en séquences courtes."
  ],
  [
   "Quelle question vérifie vraiment la compréhension ?",
   [
    "« Lis-moi ta deuxième ligne et explique-la »",
    "« Tu as compris ? »",
    "« C'est clair ? »"
   ],
   0,
   "Elle oblige l'élève à produire une preuve."
  ],
  [
   "L'élève fait une erreur de signe. Que faire ?",
   [
    "Lui poser une question qui l'aide à la trouver",
    "Corriger à sa place immédiatement",
    "Passer à l'exercice suivant"
   ],
   0,
   "Trouver soi-même son erreur aide à la retenir."
  ],
  [
   "Les coupures se répètent chaque semaine avec le même élève. Que faire ?",
   [
    "Chercher la cause avec le parent (heure, lieu, appareil)",
    "Continuer en espérant que ça s'améliore",
    "Facturer double"
   ],
   0,
   "Ce qui se répète se traite à la cause."
  ],
  [
   "Dans le déroulé en six temps, que fait l'élève pendant la pratique guidée ?",
   [
    "Il résout un exercice en montrant son cahier et en expliquant",
    "Il écoute sans intervenir",
    "Il regarde une vidéo"
   ],
   0,
   "L'enseignant observe et guide pendant que l'élève produit."
  ],
  [
   "Un comportement inapproprié se répète en séance. Bonne réaction ?",
   [
    "Mettre fin poliment et informer le parent par écrit",
    "Régler cela en privé avec l'élève par message",
    "Ignorer"
   ],
   0,
   "Avec un mineur, on reste dans le cadre convenu avec la famille, par écrit."
  ]
 ],
 "sources": [
  [
   "Guo, P., Kim, J., Rubin, R. (2014). How Video Production Affects Student Engagement: An Empirical Study of MOOC Videos",
   "https://www.cs.rochester.edu/hci/pubs/pdfs/edX-MOOC-video-production-and-engagement_LAS-2014.pdf"
  ],
  [
   "EEF — Remote Learning: Rapid Evidence Assessment",
   "https://educationendowmentfoundation.org.uk/guidance-for-teachers/covid-19-resources/best-evidence-on-supporting-students-to-learn-remotely"
  ],
  [
   "Module Séance du pôle C de cette formation (déroulé, questionnement)",
   ""
  ]
 ],
 "veille": []
},
{
 "id": "enligne-mathspc",
 "n": 26,
 "pole": "E",
 "court": "Maths et PC à distance",
 "titre": "Enseigner les mathématiques et la physique-chimie en ligne",
 "but": "Écrire les maths lisiblement à distance, faire manipuler les notions avec GeoGebra et Desmos, et remplacer une partie des expériences par des simulations et des activités sûres à la maison.",
 "objectifs": [
  "Écrire et faire écrire les maths lisiblement à l'écran",
  "Utiliser GeoGebra et Desmos pour faire manipuler les notions",
  "Utiliser les simulations PhET en physique-chimie avec une fiche d'activité",
  "Proposer des activités expérimentales simples et sans danger à la maison"
 ],
 "lecons": [
  {
   "id": "enligne-mathspc-1",
   "t": "Écrire les maths à distance",
   "p": [
    "Les maths s'apprennent en écrivant. À distance, l'enjeu est double : que l'élève voie votre écriture se construire, et que vous voyiez la sienne. Pour vous : caméra-document au-dessus de la feuille, tablette avec stylet ou tableau blanc partagé. Écrivez gros, aérez, une étape par ligne, et commentez à voix haute ce que vous écrivez, au moment où vous l'écrivez.",
    "Évitez de taper les maths au clavier pendant la séance : c'est lent et cela casse le raisonnement. Gardez la frappe pour les documents préparés à l'avance (vos fiches PDF). En direct, le geste manuscrit reste supérieur, et l'étude de Guo montre d'ailleurs que les vidéos où l'on voit l'enseignant écrire à la main sont plus engageantes que les diapositives figées.",
    "Pour l'élève : exigez une présentation qui se lit à la caméra (lignes numérotées, une étape par ligne, résultat encadré) et l'habitude de montrer le cahier sans qu'on le lui demande à chaque étape clé. C'est aussi une excellente préparation aux copies d'examen, où la clarté de la rédaction compte."
   ],
   "appro": [
    "Préparez des « pages squelettes » : un énoncé en haut, une figure ou un tableau à compléter, de l'espace en dessous. Vous les partagez à l'écran et les complétez en direct ; l'élève a la même page imprimée ou recopiée. Le temps passé à recopier l'énoncé disparaît.",
    "Pour la géométrie, préparez les figures à l'avance (GeoGebra ou dessin propre) : tracer une figure précise en direct à la caméra prend du temps et donne souvent un résultat peu lisible. Gardez le direct pour le raisonnement, pas pour le dessin."
   ],
   "ex": "Pour une démonstration de Thalès en 3e, vous partagez une page squelette avec la figure déjà tracée et les données. Vous rédigez la démonstration ligne par ligne sous la caméra, en disant chaque étape. L'élève rédige ensuite la suivante et montre son cahier.",
   "fm": "Vos cours et séries FayeMath sont déjà rédigés proprement en PDF : ils deviennent vos pages squelettes et vos énoncés partagés.",
   "err": "Taper les calculs au clavier en direct ou tracer une figure approximative à la souris pendant cinq minutes.",
   "cle": "En direct on écrit à la main, lisible et commenté ; les figures et énoncés se préparent à l'avance.",
   "exo": "Préparez trois pages squelettes pour un chapitre (énoncé, figure ou tableau, espace de rédaction) et testez leur lisibilité sur téléphone.",
   "q": "Quelle partie de vos explications gagnerait à être préparée à l'avance plutôt que faite en direct ?"
  },
  {
   "id": "enligne-mathspc-2",
   "t": "Faire manipuler avec GeoGebra et Desmos",
   "p": [
    "L'avantage du numérique est de faire bouger ce qui est figé sur le papier. Avec un curseur dans GeoGebra ou Desmos, l'élève voit la droite y = ax + b tourner quand a change ; il voit la parabole se déplacer quand on modifie un paramètre ; il déplace un point sur une figure et constate qu'une propriété reste vraie. Cette manipulation prépare la démonstration, elle ne la remplace pas.",
    "GeoGebra Classroom permet d'aller plus loin : vous créez une leçon à partir d'une activité, vous partagez un code ou un lien, et vous voyez en direct ce que fait chaque élève, ses constructions et ses réponses aux questions. C'est idéal en petit groupe pour repérer qui bloque sans interrompre les autres. Desmos fonctionne sur le web et en application ; sa calculatrice graphique peut s'utiliser sans compte, et un lien de partage permet de garder un graphique.",
    "La bonne démarche se fait en trois temps : prédire (« Que va-t-il se passer si a devient négatif ? »), manipuler (l'élève bouge le curseur), expliquer (« Pourquoi ? Écris la règle »). Sans le premier et le troisième temps, la manipulation devient un jeu sans apprentissage."
   ],
   "appro": [
    "Ne multipliez pas les fonctionnalités : une activité efficace tient en une figure, un curseur et deux ou trois questions. Les activités déjà créées par d'autres enseignants sur GeoGebra sont nombreuses ; vérifiez-en toujours le contenu avant de les utiliser et adaptez les termes au programme sénégalais.",
    "Pensez à l'appareil de l'élève : sur un petit téléphone, une figure chargée devient illisible. Testez l'activité sur un téléphone avant la séance, et prévoyez une capture d'écran si l'application ne s'ouvre pas chez l'élève."
   ],
   "ex": "En 2nde, pour introduire le sens de variation d'une fonction affine, vous partagez un graphique Desmos avec un curseur a. Vous demandez d'abord : « Si a est négatif, la droite monte ou descend ? ». L'élève prédit, manipule, puis rédige la règle dans son cahier.",
   "fm": "GeoGebra et Desmos renforcent ce que vous faites déjà avec vos fiches : ils servent surtout pour les fonctions, la géométrie et les statistiques, au collège comme au lycée.",
   "err": "Laisser l'élève jouer avec un curseur sans lui faire prédire ni expliquer, et croire que la notion est acquise.",
   "cle": "Prédire, manipuler, expliquer : la manipulation numérique prépare la règle, elle ne la remplace pas.",
   "exo": "Créez une activité GeoGebra ou Desmos d'une figure et un curseur, avec une question de prédiction et une question d'explication, puis testez-la sur téléphone.",
   "q": "Quelle notion de vos élèves gagnerait le plus à être manipulée à l'écran ?"
  },
  {
   "id": "enligne-mathspc-3",
   "t": "Physique-chimie à distance : simulations et activités à la maison",
   "p": [
    "La physique-chimie perd une partie de ses manipulations à distance. Les simulations PhET de l'Université du Colorado en compensent une partie : plus de 150 simulations gratuites, traduites en français, permettent de construire un circuit électrique, de faire varier une concentration, d'observer les forces ou la lumière. Elles sont gratuites pour enseigner ; leur usage commercial est encadré.",
    "Utilisez chaque simulation avec une fiche d'activité courte : une question de départ, des consignes de manipulation précises, un tableau de mesures à remplir, une conclusion à rédiger. Sans fiche, l'élève clique au hasard. Avec une fiche, il mène une démarche d'investigation : hypothèse, expérience, mesure, conclusion.",
    "Certaines activités simples peuvent se faire à la maison, sans danger : mesurer une masse avec une balance de cuisine, observer la dissolution du sucre ou du sel dans l'eau, mesurer une durée et une distance pour calculer une vitesse moyenne, observer l'ombre et la lumière. Excluez toute manipulation dangereuse (produits ménagers mélangés, flamme, électricité du secteur) : la sécurité de l'élève passe avant tout."
   ],
   "appro": [
    "Faites toujours le lien entre la simulation et le réel : une simulation est un modèle, pas la réalité. Demandez à l'élève ce que la simulation simplifie (pas de frottements, fils parfaits) : c'est une excellente question d'esprit critique, très utile au lycée.",
    "Pour les schémas (circuits, montages, dispositifs), utilisez des schémas normalisés préparés à l'avance et demandez à l'élève de les reproduire dans son cahier : le schéma fait partie des attendus des examens."
   ],
   "ex": "En 4e, avec la simulation PhET de construction de circuit, l'élève répond d'abord à la question « Que se passe-t-il si on ajoute une deuxième lampe en série ? », manipule, note l'éclat des lampes dans un tableau, puis rédige la conclusion et dessine le schéma normalisé.",
   "fm": "Vos documents de physique-chimie gagnent à être accompagnés d'une ou deux simulations par chapitre ; elles rendent visibles des phénomènes que l'élève ne peut pas observer à la maison.",
   "err": "Proposer une expérience à la maison sans vérifier sa sécurité, ou une simulation sans fiche d'activité.",
   "cle": "Simulation avec fiche d'activité, lien avec le réel, expériences à la maison seulement si elles sont sans danger.",
   "exo": "Choisissez une simulation PhET liée à un chapitre de vos élèves et rédigez sa fiche d'activité (question, consignes, tableau, conclusion).",
   "q": "Quelle simulation PhET pourriez-vous utiliser dès cette semaine, et pour quelle classe ?"
  }
 ],
 "cas": {
  "t": "Le circuit électrique à distance",
  "s": "Une élève de 4e doit préparer un devoir sur les circuits série et dérivation. Vous ne pouvez pas venir chez elle cette semaine et elle n'a pas de matériel électrique.",
  "q": [
   "Comment remplacez-vous la manipulation ?",
   "Comment évitez-vous qu'elle clique au hasard ?",
   "Comment vérifiez-vous qu'elle sait refaire le schéma ?"
  ],
  "r": [
   "Avec une simulation PhET de construction de circuit, partagée en séance en ligne.",
   "Une fiche d'activité : question de départ, consignes précises, tableau d'observations, conclusion à rédiger ; prédiction avant chaque manipulation.",
   "Elle dessine le schéma normalisé dans son cahier et le montre à la caméra ; mini-quiz de trois questions ; exercice type devoir en plan de travail, envoyé en photo."
  ]
 },
 "atelier": {
  "t": "Votre kit numérique par chapitre",
  "c": "Pour deux chapitres (un de maths, un de physique-chimie), listez : les pages squelettes à préparer, une activité GeoGebra/Desmos ou une simulation PhET, la fiche d'activité associée et la vérification prévue."
 },
 "outil": {
  "t": "Modèle de fiche d'activité numérique",
  "usage": "Pour toute activité GeoGebra, Desmos ou PhET.",
  "lignes": [
   "## Titre et classe",
   "Notion · chapitre · durée",
   "## Question de départ",
   "Ce que l'élève doit prédire avant de manipuler",
   "## Lien",
   "Activité ou simulation (testée sur téléphone le …)",
   "## Consignes",
   "1 … 2 … 3 … (une action par ligne)",
   "## Observations",
   "Tableau de mesures ou de constats à remplir",
   "## Conclusion",
   "Règle ou loi à rédiger avec ses mots",
   "## Esprit critique",
   "Ce que le modèle simplifie par rapport au réel",
   "## Vérification",
   "Exercice papier ou mini-quiz qui prouve l'acquisition"
  ]
 },
 "actions": [
  "Préparer des pages squelettes pour les chapitres les plus enseignés",
  "Créer une première activité GeoGebra ou Desmos avec prédiction et explication",
  "Rédiger une fiche d'activité PhET par chapitre de physique-chimie",
  "Lister les activités sans danger possibles à la maison"
 ],
 "quiz": [
  [
   "En direct, comment écrire les maths de préférence ?",
   [
    "À la main, lisible et commenté",
    "Au clavier, formule par formule",
    "Uniquement sur des diapositives figées"
   ],
   0,
   "Le geste manuscrit garde le raisonnement visible et engage davantage."
  ],
  [
   "Que doit-on préparer à l'avance plutôt qu'en direct ?",
   [
    "Les figures et les énoncés",
    "Le raisonnement",
    "Les questions de l'élève"
   ],
   0,
   "Le direct est réservé au raisonnement ; les figures précises se préparent."
  ],
  [
   "Quelle démarche rend une manipulation numérique utile ?",
   [
    "Prédire, manipuler, expliquer",
    "Manipuler librement sans consigne",
    "Regarder l'enseignant manipuler"
   ],
   0,
   "Sans prédiction ni explication, la manipulation reste un jeu."
  ],
  [
   "Que permet GeoGebra Classroom en petit groupe ?",
   [
    "Voir en direct ce que fait chaque élève",
    "Noter automatiquement les copies papier",
    "Enregistrer la voix des élèves"
   ],
   0,
   "On repère qui bloque sans interrompre les autres."
  ],
  [
   "Combien de simulations propose environ PhET ?",
   [
    "Plus de 150",
    "Une dizaine",
    "Plus de 10 000"
   ],
   0,
   "PhET propose plus de 150 simulations gratuites, traduites en français."
  ],
  [
   "Pourquoi accompagner une simulation d'une fiche d'activité ?",
   [
    "Pour éviter que l'élève clique au hasard",
    "Pour remplacer le cours",
    "Parce que la simulation est payante"
   ],
   0,
   "La fiche transforme la manipulation en démarche d'investigation."
  ],
  [
   "Quelle activité à la maison est acceptable ?",
   [
    "Mesurer une masse avec une balance de cuisine",
    "Mélanger des produits ménagers",
    "Manipuler une prise électrique"
   ],
   0,
   "Seules les activités sans danger sont proposées."
  ],
  [
   "Quelle question développe l'esprit critique face à une simulation ?",
   [
    "« Qu'est-ce que la simulation simplifie par rapport au réel ? »",
    "« Quelle couleur préfères-tu ? »",
    "« Combien de clics as-tu faits ? »"
   ],
   0,
   "Une simulation est un modèle : en voir les limites est une compétence scientifique."
  ]
 ],
 "sources": [
  [
   "IREM de Lille — Tutoriel : créer une leçon GeoGebra",
   "https://irem.univ-lille.fr/wp-content/uploads/2026/02/tuto-exerciseur-creer_classe.pdf"
  ],
  [
   "GeoGebra — Livre d'aide « Learn GeoGebra Classroom »",
   "https://www.geogebra.org/material/show/id/hncrgruu"
  ],
  [
   "Desmos — Calculatrice graphique",
   "https://www.desmos.com/calculator"
  ],
  [
   "PhET — Simulations interactives en français",
   "https://phet.colorado.edu/fr/"
  ],
  [
   "Outils TICE — PhET, des centaines de simulations pour les sciences et les maths",
   "https://outilstice.com/2025/05/simulations-interactives-phet-sciences-mathematiques/"
  ],
  [
   "Guo, Kim, Rubin (2014) — vidéos manuscrites plus engageantes",
   "https://www.cs.rochester.edu/hci/pubs/pdfs/edX-MOOC-video-production-and-engagement_LAS-2014.pdf"
  ]
 ],
 "veille": []
},
{
 "id": "enligne-suivi",
 "n": 27,
 "pole": "E",
 "court": "Évaluer et suivre à distance",
 "titre": "Évaluer, faire travailler et suivre un élève à distance",
 "but": "Évaluer sans voir l'élève, organiser le travail autonome entre les séances et garder le parent informé, pour que le cours en ligne produise des progrès mesurables.",
 "objectifs": [
  "Évaluer à distance avec des quiz, des photos de copies et l'oral",
  "Organiser le travail autonome avec un plan de travail vérifiable",
  "Garder le parent impliqué par un compte rendu court et régulier",
  "Mesurer et montrer la progression d'un élève suivi en ligne"
 ],
 "lecons": [
  {
   "id": "enligne-suivi-1",
   "t": "Évaluer sans voir l'élève",
   "p": [
    "À distance, l'évaluation a deux fonctions : savoir où en est l'élève (évaluation diagnostique et formative) et le préparer aux épreuves (devoirs blancs). Pour le diagnostic et le suivi, utilisez des quiz courts : Google Forms en mode questionnaire corrige automatiquement les questions à choix multiples, les cases à cocher, les listes déroulantes et les réponses courtes exactes, et donne un résumé des questions les plus manquées.",
    "Pour les exercices rédigés, demandez des photos de copies : l'élève compose sur papier, en temps limité, puis envoie les pages dans la minute qui suit la fin. Corrigez sur l'image (annotations) ou en séance, caméra sur la copie. Gardez la rédaction manuscrite : c'est ce que l'élève fera à l'examen.",
    "Complétez par l'oral : faire expliquer une méthode ou justifier une étape est la meilleure façon de vérifier ce qui est vraiment acquis, et la plus difficile à contourner. Un quiz réussi suivi d'une explication orale hésitante indique une compréhension fragile."
   ],
   "appro": [
    "La triche existe en ligne (réponse cherchée sur internet, aide d'un proche). Plutôt que de surveiller, concevez des évaluations où tricher n'aide pas : exercices où l'on demande la démarche, questions « explique pourquoi », oral de quelques minutes après le quiz. Et rappelez que l'évaluation sert à l'élève, pas à vous.",
    "Pour un devoir blanc en ligne, fixez un protocole : heure de début annoncée, sujet envoyé à l'heure exacte, caméra posée de côté montrant l'élève et sa table si la famille l'accepte, temps limité, photos envoyées dans les cinq minutes qui suivent. Écrivez ce protocole et envoyez-le au parent à l'avance."
   ],
   "ex": "Avant d'attaquer les fractions avec un nouvel élève de 5e suivi en ligne, vous envoyez un quiz Google Forms de huit questions. Le résumé montre que la simplification est acquise mais pas la comparaison de fractions : la première séance porte sur ce point.",
   "fm": "Votre stratégie d'évaluation (devoirs, devoirs blancs, suivi) s'applique aussi en ligne ; seuls les outils changent : quiz en ligne, photos de copies, oral en appel.",
   "err": "Juger un élève sur un quiz en ligne sans vérifier à l'oral, ou faire un devoir blanc à distance sans protocole écrit.",
   "cle": "Quiz pour diagnostiquer, photos de copies pour la rédaction, oral pour vérifier ce qui est acquis.",
   "exo": "Créez un quiz diagnostique de huit questions dans Google Forms pour un chapitre et le protocole écrit d'un devoir blanc en ligne.",
   "q": "Comment vérifiez-vous aujourd'hui qu'une réponse juste correspond à une compréhension réelle ?"
  },
  {
   "id": "enligne-suivi-2",
   "t": "Le travail autonome entre les séances",
   "p": [
    "La synthèse de l'EEF insiste : à distance, il faut soutenir le travail autonome par des outils simples, comme des listes de contrôle et des plans de travail. Entre deux séances en ligne, l'élève est seul ; sans cadre écrit, il repousse, oublie ou fait les exercices trop faciles.",
    "Un bon plan de travail tient en trois à cinq tâches : chacune est précise (« exercices 4 et 6 de la série 2 », pas « réviser »), datée (« pour mercredi »), vérifiable (« photo envoyée avant mardi 20 h ») et de difficulté graduée. Ajoutez une case à cocher par tâche et une question : « Qu'est-ce qui t'a bloqué ? ».",
    "Vérifiez toujours le plan de travail au début de la séance suivante. Un plan non vérifié deux fois de suite n'est plus fait. Si une tâche n'est pas faite, cherchez la cause (trop difficile, pas compris, pas le temps) au lieu de seulement reprocher."
   ],
   "appro": [
    "Utilisez les courtes vidéos comme soutien au travail autonome : une capsule de quelques minutes sur une méthode, que l'élève peut revoir avant de faire ses exercices. C'est particulièrement utile pour les élèves qui n'osent pas demander une deuxième explication.",
    "Apprenez progressivement à l'élève à construire lui-même son plan de travail : vous le rédigez au début, puis vous le construisez ensemble, puis il le propose et vous le validez. L'autonomie, travaillée dans le pôle Pédagogie, se construit aussi à distance."
   ],
   "ex": "Après la séance du samedi, Fatou reçoit : « 1. Revoir la vidéo sur la méthode (5 min) ; 2. Exercices 3 et 5, série 2, pour lundi ; 3. Exercice 8 (plus difficile) pour mercredi ; photo de chaque exercice avant 20 h le jour prévu ; note ce qui t'a bloqué. »",
   "fm": "Vos séries d'exercices graduées sont idéales pour construire des plans de travail : vous choisissez dans la série des exercices faciles, moyens et un plus exigeant.",
   "err": "Donner « révise le chapitre » comme travail, sans tâche précise, sans date et sans vérification.",
   "cle": "Plan de travail précis, daté, vérifiable et gradué ; toujours vérifié à la séance suivante.",
   "exo": "Rédigez le plan de travail de la semaine pour un élève, selon les quatre critères, avec une question sur ce qui l'a bloqué.",
   "q": "Quelle part du travail donné à vos élèves est réellement vérifiée ?"
  },
  {
   "id": "enligne-suivi-3",
   "t": "Garder le parent impliqué et montrer les progrès",
   "p": [
    "À domicile, le parent voit l'encadreur arriver ; en ligne, le cours devient invisible pour lui. Il faut donc le rendre visible. Après chaque séance, envoyez un compte rendu de trois à cinq lignes : ce qui a été travaillé, ce qui est acquis, ce qui reste à travailler, le travail donné, et une remarque positive précise.",
    "Une fois par mois, faites un bilan plus complet : point de départ, progrès mesurés (quiz, devoirs, notes de l'école), objectifs du mois suivant. Les chiffres et les exemples concrets rassurent plus que les adjectifs : « 6 exercices sur 8 réussis au quiz contre 3 sur 8 il y a un mois » vaut mieux que « il progresse bien ».",
    "Invitez le parent à passer quelques minutes en début ou en fin de séance, surtout au début du suivi. Pour un élève mineur, c'est aussi une protection : la séance est transparente pour la famille. Utilisez le contact du parent pour organiser les séances, pas celui de l'élève (voir le module Cadre)."
   ],
   "appro": [
    "Gardez un suivi par élève : date, notion travaillée, score éventuel, observation, travail donné, fait ou non. C'est la base des bilans mensuels et de la météo des familles (module Fidélisation) ; en ligne, c'est votre seule mémoire fiable de ce qui s'est passé.",
    "Écrivez les comptes rendus avec le même soin qu'à domicile : ton doux, phrases simples, jamais de reproche brut sur l'élève. Un compte rendu peut être lu par l'élève lui-même : il doit l'encourager, pas l'humilier."
   ],
   "ex": "« Bonsoir Madame, séance de ce soir : équations du premier degré. Ibrahima résout maintenant seul les équations simples (4 sur 4 au quiz). Reste à travailler : les équations avec parenthèses. Travail pour mercredi : exercices 3, 5 et 7. Bravo pour sa concentration aujourd'hui. Bonne soirée. »",
   "fm": "Vos comptes rendus et vos bilans mensuels existent déjà pour le cours à domicile ; en ligne, ils deviennent encore plus importants, car ils remplacent la présence physique.",
   "err": "Ne rien envoyer au parent pendant un mois de cours en ligne, puis s'étonner qu'il doute de l'utilité du cours.",
   "cle": "En ligne, le cours est invisible pour le parent : compte rendu après chaque séance, bilan chiffré chaque mois.",
   "exo": "Rédigez un modèle de compte rendu en cinq lignes et un modèle de bilan mensuel chiffré pour un élève suivi en ligne.",
   "q": "Que sait le parent de votre élève en ligne sur la dernière séance ?"
  }
 ],
 "cas": {
  "t": "Le parent qui ne voit pas la différence",
  "s": "Après deux mois de cours en ligne, M. Sarr écrit : « Je ne sais pas vraiment ce que vous faites avec mon fils. Il est dans sa chambre, je n'entends rien. Est-ce que ça avance ? »",
  "q": [
   "Qu'est-ce qui a manqué ?",
   "Que répondez-vous maintenant ?",
   "Que changez-vous pour la suite ?"
  ],
  "r": [
   "Les comptes rendus après chaque séance et un bilan chiffré ; la visibilité du cours pour le parent.",
   "Remercier pour la question ; proposer un appel ; envoyer un bilan précis : point de départ, scores des quiz, travaux faits, notes de l'école, prochain objectif ; l'inviter à assister à une partie de la prochaine séance.",
   "Compte rendu systématique après chaque séance ; bilan mensuel ; invitation régulière du parent ; devoir blanc trimestriel pour objectiver les progrès."
  ]
 },
 "atelier": {
  "t": "Votre système de suivi en ligne",
  "c": "Préparez : un quiz diagnostique, le modèle de plan de travail, le modèle de compte rendu après séance, le modèle de bilan mensuel et le tableau de suivi par élève (date, notion, score, observation, travail donné, fait ou non)."
 },
 "outil": {
  "t": "Modèles de plan de travail et de compte rendu",
  "usage": "À copier et adapter après chaque séance.",
  "lignes": [
   "## Plan de travail",
   "Tâche 1 (facile) : … pour le … ☐",
   "Tâche 2 (moyenne) : … pour le … ☐",
   "Tâche 3 (plus exigeante) : … pour le … ☐",
   "Envoi : photo de chaque exercice avant 20 h le jour prévu",
   "Question : qu'est-ce qui t'a bloqué ?",
   "## Compte rendu au parent (5 lignes)",
   "Notion travaillée · ce qui est acquis (preuve) · ce qui reste à travailler · travail donné · remarque positive précise",
   "## Bilan mensuel",
   "Point de départ · progrès mesurés (quiz, devoirs, notes) · ce qui reste · objectifs du mois · rendez-vous suivant"
  ]
 },
 "actions": [
  "Créer un quiz diagnostique Google Forms pour les chapitres clés",
  "Rédiger le protocole de devoir blanc en ligne",
  "Adopter le modèle de plan de travail après chaque séance en ligne",
  "Envoyer un compte rendu après chaque séance et un bilan mensuel chiffré"
 ],
 "quiz": [
  [
   "Quels types de questions Google Forms corrige-t-il automatiquement ?",
   [
    "Choix multiples, cases à cocher, listes, réponses courtes exactes",
    "Paragraphes et photos",
    "Uniquement les questions orales"
   ],
   0,
   "Les réponses longues demandent une correction manuelle."
  ],
  [
   "Pourquoi garder des copies manuscrites photographiées ?",
   [
    "C'est ce que l'élève fera à l'examen",
    "Parce que les quiz sont interdits",
    "Pour économiser l'encre"
   ],
   0,
   "La rédaction manuscrite est attendue aux épreuves officielles."
  ],
  [
   "Quelle vérification est la plus difficile à contourner ?",
   [
    "L'explication orale de la démarche",
    "Un quiz à choix multiples",
    "Une case cochée"
   ],
   0,
   "Expliquer une étape montre ce qui est réellement compris."
  ],
  [
   "Un bon plan de travail est…",
   [
    "précis, daté, vérifiable et gradué",
    "long et général",
    "facultatif"
   ],
   0,
   "Ces quatre critères rendent le travail autonome réel."
  ],
  [
   "Que se passe-t-il quand le plan de travail n'est pas vérifié deux fois de suite ?",
   [
    "Il n'est généralement plus fait",
    "L'élève travaille davantage",
    "Rien ne change"
   ],
   0,
   "La vérification fait exister le travail."
  ],
  [
   "Pourquoi le compte rendu est-il encore plus important en ligne ?",
   [
    "Le cours devient invisible pour le parent",
    "Il remplace le paiement",
    "Il est imposé par la plateforme"
   ],
   0,
   "Le parent ne voit plus l'encadreur : il faut rendre le cours visible."
  ],
  [
   "Quel bilan rassure le plus un parent ?",
   [
    "« 6 sur 8 au quiz contre 3 sur 8 il y a un mois »",
    "« Il progresse bien »",
    "« Ça va »"
   ],
   0,
   "Les chiffres et exemples concrets valent mieux que les adjectifs."
  ],
  [
   "Comment limiter la triche lors d'une évaluation en ligne ?",
   [
    "Demander la démarche et vérifier à l'oral",
    "Interdire les évaluations",
    "Surveiller sans prévenir"
   ],
   0,
   "On conçoit des évaluations où tricher n'aide pas."
  ]
 ],
 "sources": [
  [
   "Google — Créer et noter un questionnaire avec Google Forms",
   "https://support.google.com/docs/answer/7032287?hl=fr"
  ],
  [
   "Forms.app — Quelles questions Google Forms corrige automatiquement",
   "https://forms.app/es/blog/how-to-grade-google-forms"
  ],
  [
   "EEF — Remote Learning: Rapid Evidence Assessment (travail autonome)",
   "https://educationendowmentfoundation.org.uk/guidance-for-teachers/covid-19-resources/best-evidence-on-supporting-students-to-learn-remotely"
  ]
 ],
 "veille": []
},
{
 "id": "enligne-cadre",
 "n": 28,
 "pole": "E",
 "court": "Cadre, sécurité, offre en ligne",
 "titre": "Protéger les élèves, fixer le cadre et construire l'offre en ligne",
 "but": "Enseigner en ligne à des mineurs en toute sécurité et en toute transparence, poser des règles claires dans vos conditions et construire une offre en ligne cohérente avec FayeMath Academy.",
 "objectifs": [
  "Appliquer les règles de protection des mineurs en ligne",
  "Encadrer l'enregistrement des séances et les données personnelles",
  "Rédiger les conditions propres au cours en ligne",
  "Construire une offre en ligne cohérente avec l'offre à domicile"
 ],
 "lecons": [
  {
   "id": "enligne-cadre-1",
   "t": "Protéger les élèves mineurs en ligne",
   "p": [
    "Enseigner en ligne à un mineur, c'est entrer chez lui par l'écran. Les guides de référence pour les tuteurs (NSPCC au Royaume-Uni, guides d'établissements et de collectivités) convergent sur des règles simples. Organisez les séances avec le contact du parent, pas celui de l'élève : c'est le parent qui reçoit le lien, l'horaire et les messages. Convenez par écrit avec la famille des attentes : horaires, lieu, présence d'un adulte dans la maison, outils utilisés.",
    "Pendant la séance : une tenue identique à celle d'un cours à domicile, un fond neutre de votre côté, une pièce commune ou porte ouverte du côté de l'élève si possible, et le parent invité à passer quand il le souhaite. Le canal de la séance sert aux cours seulement : pas d'échanges personnels, pas de photos sans rapport avec le travail.",
    "Établissez une voie claire pour signaler un problème : la famille doit savoir à qui et comment faire part d'une inquiétude, et vous devez savoir quoi faire si un élève vous confie une situation préoccupante (informer les parents ou, si c'est le parent qui est en cause, les autorités compétentes). Toute relation privée avec un élève hors du cadre convenu avec la famille est exclue."
   ],
   "appro": [
    "Ces règles vous protègent autant qu'elles protègent l'élève. Une séance transparente pour la famille (horaires connus, parent informé, échanges écrits passant par lui) ne laisse pas de place au malentendu. Le jour où une famille s'interroge, votre cadre écrit répond pour vous.",
    "Le tutorat est un secteur peu réglementé dans beaucoup de pays ; les associations professionnelles recommandent donc des pratiques volontaires : présenter des références, expliquer son cadre, former ses éventuels collaborateurs. Si FayeMath recrute un jour des encadreurs en ligne, ces règles feront partie de leur formation et de leur contrat."
   ],
   "ex": "Pour un nouvel élève de 6e suivi en ligne, vous envoyez au parent un message de cadrage : lien de la séance envoyé sur son numéro, séance dans le salon de préférence, parent invité au début de la première séance, aucun échange privé avec l'élève en dehors des séances, et votre numéro pour toute question.",
   "fm": "Vos conditions générales et vos valeurs (confiance, rigueur, transparence) s'appliquent pleinement : le cours en ligne doit offrir aux parents au moins autant de garanties que le cours à domicile.",
   "err": "Envoyer les liens et les messages directement à l'élève mineur et échanger avec lui en privé en dehors des séances.",
   "cle": "Contact du parent, cadre écrit, transparence de la séance, canal réservé aux cours, voie de signalement claire.",
   "exo": "Rédigez le message de cadrage à envoyer à chaque famille avant la première séance en ligne.",
   "q": "Quelles règles de protection appliquez-vous déjà, et lesquelles devez-vous ajouter ?"
  },
  {
   "id": "enligne-cadre-2",
   "t": "Enregistrement, images et données personnelles",
   "p": [
    "Enregistrer une séance peut être utile (revoir une explication, garder une trace en cas de désaccord), mais c'est une image d'un mineur chez lui. Les guides de référence demandent de convenir à l'avance, avec la famille, d'une politique d'enregistrement claire et de recueillir le consentement. Sans accord écrit du parent, n'enregistrez pas.",
    "Au Sénégal, la protection des données personnelles est encadrée par la loi n° 2008-12 et contrôlée par la Commission de protection des données personnelles (CDP). Retenez les principes : ne collecter que ce qui est utile, dire à quoi cela sert, le conserver de façon sûre et pour une durée limitée, ne jamais le diffuser sans accord. Pour toute utilisation au-delà du suivi de l'élève, renseignez-vous auprès de la CDP.",
    "Ne publiez jamais une image, une copie ou une capture d'écran d'un élève (même floutée, même pour une publicité positive) sans accord écrit du parent. Pour vos réseaux sociaux, préférez des contenus sans élèves : votre main qui écrit, vos fiches, des témoignages écrits avec accord et sans données identifiantes."
   ],
   "appro": [
    "Si vous enregistrez, décidez qui conserve la vidéo, où (dossier protégé, pas un groupe WhatsApp), pendant combien de temps (par exemple jusqu'à la fin de l'année scolaire) et qui peut la voir (l'élève et son parent). Écrivez ces réponses dans le document que le parent signe.",
    "Les plateformes que vous utilisez traitent aussi des données (nom, adresse électronique, voix, image). Choisissez des outils connus, utilisez le compte du parent ou le vôtre plutôt qu'un compte créé au nom de l'enfant, et évitez de demander aux élèves de créer des comptes quand un lien suffit (Excalidraw, Desmos sans compte)."
   ],
   "ex": "Une mère demande l'enregistrement des séances pour que sa fille revoie les explications. Vous acceptez avec un accord écrit : enregistrement de la partie explication seulement, vidéo envoyée uniquement à la mère, supprimée en fin d'année scolaire, jamais publiée.",
   "fm": "Les données de vos élèves (identité, notes, classes) sont des données de mineurs ; la même rigueur s'applique à vos fichiers de suivi, à votre application de gestion et à votre future plateforme.",
   "err": "Publier une capture d'écran d'une séance avec un élève pour montrer son travail, sans accord écrit du parent.",
   "cle": "Pas d'enregistrement ni de publication sans accord écrit du parent ; données utiles seulement, protégées, durée limitée.",
   "exo": "Rédigez un accord d'enregistrement d'une demi-page : ce qui est enregistré, pourquoi, qui conserve, où, combien de temps, qui y a accès.",
   "q": "Quelles données de vos élèves conservez-vous aujourd'hui, et où ?"
  },
  {
   "id": "enligne-cadre-3",
   "t": "Construire l'offre en ligne et ses conditions",
   "p": [
    "Le cours en ligne ne doit pas affaiblir votre offre à domicile, qui reste votre cœur de métier. Il la complète dans des situations précises : élève éloigné ou qui déménage, séance de rattrapage, période d'examens, petit groupe de préparation (stage BFEM ou Bac), suivi hybride (domicile une fois par semaine, ligne une autre fois).",
    "Pour le prix, ne partez ni de la peur ni de la concurrence la moins chère. Partez de votre valeur (préparation, suivi, comptes rendus, documents), de votre temps réel (préparation et suivi inclus) et de votre grille actuelle. Le cours en ligne vous fait gagner le temps de trajet, mais il demande plus de préparation ; décidez explicitement si son prix est identique, réduit ou s'il prend la forme d'un forfait propre (stage, pack de séances), et écrivez-le dans votre grille.",
    "Écrivez des conditions spécifiques : paiement avant le début du mois ou du stage, règle des coupures (de votre fait : séance rattrapée ; du fait de l'élève : selon la règle annoncée), retards, absences, caméra et lieu de travail, enregistrement, outils utilisés. Une famille qui connaît les règles à l'avance discute beaucoup moins."
   ],
   "appro": [
    "Testez avant de généraliser : proposez d'abord le cours en ligne à une ou deux familles qui en ont réellement besoin, sur quatre semaines, avec un point d'étape. Notez ce qui marche, ce qui coince, le temps réellement passé, puis fixez votre offre définitive.",
    "Le petit groupe en ligne est économiquement intéressant mais pédagogiquement exigeant : au-delà de quatre ou cinq élèves, il devient difficile de voir le cahier de chacun. Utilisez alors les outils de suivi en direct (GeoGebra Classroom, quiz) et des plans de travail individuels."
   ],
   "ex": "Vous lancez un « stage BFEM en ligne » de quatre séances de 55 minutes pour trois élèves de 3e pendant les vacances de février : forfait payé avant la première séance, sujets type BFEM, devoir blanc final en ligne avec protocole, bilan écrit à chaque famille.",
   "fm": "Votre grille tarifaire et vos formules à domicile restent la référence ; l'offre en ligne s'y ajoute avec ses propres lignes, ses conditions et sa promesse, sans la contredire.",
   "err": "Proposer le cours en ligne au rabais par crainte que les familles le jugent moins bon, au lieu d'en montrer la valeur.",
   "cle": "Le cours en ligne complète le domicile dans des cas précis ; prix fondé sur la valeur et le temps réel ; conditions écrites à l'avance.",
   "exo": "Rédigez la fiche de votre offre en ligne : pour qui, format, durée, ce qui est inclus, prix (à décider vous-même selon votre grille), conditions principales.",
   "q": "Dans quelle situation une famille actuelle aurait-elle besoin du cours en ligne ?"
  }
 ],
 "cas": {
  "t": "La capture d'écran pour la publicité",
  "s": "Une séance en ligne s'est très bien passée : votre élève de 1re a résolu seul un exercice difficile. Vous voulez publier une capture d'écran de la séance sur votre page pour montrer la qualité de vos cours.",
  "q": [
   "Pouvez-vous publier cette capture ?",
   "Que faites-vous si vous voulez quand même valoriser ce moment ?",
   "Quelle règle retenez-vous pour l'avenir ?"
  ],
  "r": [
   "Non, pas sans accord écrit du parent : c'est l'image et le travail d'un mineur, chez lui.",
   "Demander l'accord écrit du parent pour un témoignage ; ou publier un contenu sans l'élève (l'exercice résolu réécrit par vous, votre main qui écrit) ; ou demander au parent un témoignage écrit anonymisé.",
   "Aucune image, copie ou capture d'élève publiée sans accord écrit ; préférer des contenus sans élève ; inscrire la règle dans les conditions."
  ]
 },
 "atelier": {
  "t": "Votre cadre écrit du cours en ligne",
  "c": "Rédigez trois documents courts : le message de cadrage aux familles (sécurité et transparence), l'accord d'enregistrement, et la fiche de votre offre en ligne avec ses conditions (paiement, coupures, absences, caméra, outils)."
 },
 "outil": {
  "t": "Charte du cours en ligne FayeMath",
  "usage": "À envoyer au parent avant la première séance et à faire accepter par écrit.",
  "lignes": [
   "## Organisation",
   "Le lien et les messages sont envoyés au parent · horaire fixe · outil utilisé",
   "## Lieu et présence",
   "Pièce commune ou porte ouverte si possible · un adulte présent dans la maison · parent invité à tout moment",
   "## Pendant la séance",
   "Caméra allumée pour montrer le cahier · tenue et langage d'un cours normal · canal réservé aux cours",
   "## Enregistrement",
   "Uniquement avec accord écrit · conservation et diffusion précisées",
   "## Images",
   "Aucune publication d'image ou de copie de l'élève sans accord écrit",
   "## Coupures et absences",
   "Règle du plan B · séance perdue de notre fait : rattrapée · du fait de l'élève : selon les conditions",
   "## Signaler un problème",
   "Contact : … · réponse sous 24 h"
  ]
 },
 "actions": [
  "Rédiger et envoyer le message de cadrage à chaque famille suivie en ligne",
  "Rédiger l'accord d'enregistrement",
  "Ajouter la règle « aucune image d'élève sans accord écrit » aux conditions",
  "Rédiger la fiche de l'offre en ligne et tester avec une ou deux familles"
 ],
 "quiz": [
  [
   "À qui envoyer le lien et les messages d'un cours en ligne pour un mineur ?",
   [
    "Au parent",
    "À l'élève directement",
    "Dans un groupe public"
   ],
   0,
   "Les guides recommandent d'organiser les séances avec le contact du parent."
  ],
  [
   "Du côté de l'élève, quelle disposition est recommandée ?",
   [
    "Pièce commune ou porte ouverte, parent invité",
    "Chambre fermée, sans adulte",
    "Peu importe"
   ],
   0,
   "La transparence protège l'élève et l'enseignant."
  ],
  [
   "Peut-on enregistrer une séance sans accord ?",
   [
    "Non, il faut l'accord écrit du parent",
    "Oui, si c'est pour l'élève",
    "Oui, si l'élève est d'accord"
   ],
   0,
   "Une politique d'enregistrement se convient à l'avance avec la famille."
  ],
  [
   "Quelle loi encadre les données personnelles au Sénégal ?",
   [
    "La loi n° 2008-12",
    "Le code de la route",
    "Aucune"
   ],
   0,
   "Elle est contrôlée par la Commission de protection des données personnelles (CDP)."
  ],
  [
   "Peut-on publier une capture d'écran d'un élève pour sa publicité ?",
   [
    "Non, sans accord écrit du parent",
    "Oui, si elle est floutée",
    "Oui, si l'élève a réussi"
   ],
   0,
   "Image et travail d'un mineur : accord écrit obligatoire."
  ],
  [
   "Le cours en ligne doit être positionné…",
   [
    "comme un complément du domicile dans des cas précis",
    "comme un remplacement du domicile",
    "comme une offre au rabais"
   ],
   0,
   "Le domicile reste le cœur de l'offre FayeMath."
  ],
  [
   "Comment fixer le prix d'un cours en ligne ?",
   [
    "À partir de la valeur, du temps réel et de la grille",
    "En s'alignant sur le moins cher",
    "Au hasard"
   ],
   0,
   "Préparation et suivi comptent dans le temps réel."
  ],
  [
   "Pourquoi tester l'offre avec une ou deux familles d'abord ?",
   [
    "Pour mesurer le temps réel et ajuster avant de généraliser",
    "Pour éviter de payer des impôts",
    "Parce que c'est obligatoire"
   ],
   0,
   "On fixe l'offre définitive à partir de faits observés."
  ]
 ],
 "sources": [
  [
   "NSPCC Learning — Safeguarding advice for tutors",
   "https://learning.nspcc.org.uk/safeguarding-child-protection/tutors"
  ],
  [
   "RNCM — Safeguarding Summary Guide for Online Teaching",
   "https://www.rncm.ac.uk/uploads/Safeguarding-Summary-Guide-for-Online-Teaching.pdf"
  ],
  [
   "UK Government — Safeguarding and remote education",
   "https://www.gov.uk/guidance/safeguarding-and-remote-education"
  ],
  [
   "SWGfL — Online tutoring (politique d'enregistrement)",
   "https://swgfl.org.uk/assets/documents/online-tutoring.pdf"
  ],
  [
   "Loi n° 2008-12 sur la protection des données à caractère personnel et Commission de protection des données personnelles (CDP), Sénégal",
   ""
  ],
  [
   "Conditions générales et grille tarifaire FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": []
},
{
 "id": "enligne-video",
 "n": 29,
 "pole": "E",
 "court": "Produire des vidéos de cours",
 "titre": "Concevoir, tourner et publier des vidéos de cours efficaces",
 "but": "Produire de courtes vidéos pédagogiques qui font vraiment apprendre : les concevoir selon la recherche, les tourner avec peu de matériel, les monter, les publier et mesurer leur effet.",
 "objectifs": [
  "Connaître ce qui rend une vidéo de cours engageante (étude de Guo et al.)",
  "Appliquer les principes multimédias de Mayer à vos vidéos",
  "Tourner une vidéo propre avec un téléphone ou OBS Studio",
  "Monter, publier et mesurer l'effet d'une vidéo pédagogique"
 ],
 "lecons": [
  {
   "id": "enligne-video-1",
   "t": "Ce qui rend une vidéo de cours engageante",
   "p": [
    "L'étude de Philip Guo, Juho Kim et Rob Rubin (2014) a analysé 6,9 millions de sessions de visionnage de vidéos de cours sur la plateforme edX. Le résultat le plus connu : l'engagement chute nettement au-delà de six minutes. Les vidéos courtes sont regardées plus longtemps en proportion ; les longues sont abandonnées.",
    "L'étude montre aussi que les vidéos au rendu personnel et informel, tournées par exemple au bureau de l'enseignant, sont plus engageantes que les productions de studio coûteuses ; que les vidéos où l'enseignant dessine à la main sur une tablette (style tableau manuscrit) engagent davantage que les diapositives commentées ; et qu'un débit vivant et enthousiaste aide à garder l'attention.",
    "Pour vous, la conclusion est encourageante : pas besoin de studio. Une vidéo de cinq minutes, une seule notion, votre main qui écrit, votre voix claire et naturelle, et une question à la fin pour faire agir l'élève : c'est la vidéo qui fonctionne. Préparez-la spécialement pour la vidéo, au lieu de filmer une séance entière."
   ],
   "appro": [
    "Une vidéo n'est pas une séance enregistrée. Une séance d'une heure filmée donne une vidéo d'une heure que personne ne regarde jusqu'au bout. Découpez : une vidéo par méthode ou par type d'exercice, avec un titre qui dit exactement ce qu'on y apprend (« Résoudre une équation produit nul en 4 étapes »).",
    "Pensez à la suite de la vidéo : que doit faire l'élève après l'avoir vue ? Un exercice précis, un quiz de trois questions, une question à poser en séance. La vidéo est un début de travail, pas une fin."
   ],
   "ex": "Au lieu de filmer votre séance d'une heure sur les fractions, vous réalisez trois vidéos de quatre à cinq minutes : simplifier une fraction, comparer deux fractions, additionner des fractions de dénominateurs différents. Chacune se termine par un exercice à faire.",
   "fm": "Votre projet de vidéos FayeMath (méthodes express, exercices type BFEM ou Bac) correspond exactement à ce que la recherche recommande : court, une notion, écriture visible.",
   "err": "Filmer une séance entière et la publier telle quelle, en espérant que l'élève la regardera jusqu'au bout.",
   "cle": "Court (6 minutes au plus), une seule notion, rendu personnel, écriture à la main, débit vivant, une tâche à la fin.",
   "exo": "Listez dix vidéos de cinq minutes pour un chapitre, chacune avec un titre précis et la tâche demandée à la fin.",
   "q": "Quelle méthode de votre programme ferait une excellente première vidéo de cinq minutes ?"
  },
  {
   "id": "enligne-video-2",
   "t": "Les principes multimédias de Mayer appliqués à vos vidéos",
   "p": [
    "Richard Mayer et ses collègues ont établi, par de nombreuses expériences, des principes de conception multimédia. Cohérence : retirez tout ce qui n'aide pas à apprendre (musique de fond, décor chargé, anecdotes hors sujet). Signalement : mettez en évidence l'essentiel (encadrer, souligner, flèche, couleur). Segmentation : découpez en petites parties que l'élève peut contrôler (pauses, chapitres).",
    "Modalité : expliquez une figure ou une animation à la voix plutôt qu'avec un long texte à l'écran. Redondance : ne lisez pas mot à mot un texte affiché pendant que l'élève essaie de regarder une figure. Contiguïté : placez le texte à côté de l'image qu'il décrit et dites les mots au moment où l'image apparaît, pas avant ni après.",
    "Personnalisation : parlez comme dans une conversation (« tu », « on va voir »), pas comme dans un manuel. Pré-entraînement : présentez le vocabulaire et les éléments clés avant l'explication complexe. Appliqués ensemble, ces principes donnent des vidéos sobres, claires et directes, où l'attention de l'élève va à ce qui compte."
   ],
   "appro": [
    "Une méthode pratique : avant de tourner, relisez votre script et rayez tout ce qui n'est pas indispensable (cohérence) ; marquez les deux ou trois points à souligner à l'écran (signalement) ; coupez le script en parties d'une à deux minutes (segmentation) ; vérifiez qu'aucun long texte n'est lu à voix haute (redondance).",
    "Ces principes concernent aussi vos supports en direct et vos PDF : une page sobre avec l'essentiel encadré, une figure annotée au bon endroit, un ton personnel. La conception multimédia améliore tout ce que l'élève regarde."
   ],
   "ex": "Dans votre vidéo sur le théorème de Pythagore, vous supprimez la musique de fond (cohérence), vous encadrez la relation BC² = AB² + AC² (signalement), vous décomposez en trois parties : énoncé, exemple, piège (segmentation), et vous expliquez la figure à la voix sans afficher de paragraphe (modalité).",
   "fm": "Votre identité visuelle (indigo, ocre, sobriété) va dans le sens du principe de cohérence : peu d'éléments, un accent de couleur pour signaler l'essentiel.",
   "err": "Ajouter une musique, des animations décoratives et des paragraphes lus à voix haute en pensant rendre la vidéo plus attrayante.",
   "cle": "Cohérence, signalement, segmentation, modalité, redondance, contiguïté, personnalisation : sobre, ciblé, à la voix, au bon moment.",
   "exo": "Reprenez une de vos fiches ou une vidéo existante et listez trois modifications selon les principes de Mayer.",
   "q": "Lequel des principes de Mayer est le plus souvent oublié dans les vidéos éducatives que vous voyez ?"
  },
  {
   "id": "enligne-video-3",
   "t": "Tourner : script, matériel et enregistrement",
   "p": [
    "Commencez par un script court : titre, objectif en une phrase, plan en trois parties, exemple choisi, piège à signaler, tâche finale. Écrivez les phrases clés, pas tout le texte : lire un texte entier rend la voix monotone. Préparez la feuille ou la page à l'avance (énoncé, figure).",
    "Deux solutions de tournage. Au téléphone : fixé au-dessus de la feuille, en mode paysage pour une vidéo YouTube ou en portrait pour TikTok et les statuts, lumière uniforme, micro proche (kit main libre). À l'ordinateur : OBS Studio, logiciel libre et gratuit, sans filigrane ni limite d'usage, enregistre l'écran (tableau blanc, GeoGebra, PDF annoté) et votre voix ; il peut aussi intégrer la caméra.",
    "Enregistrez en plusieurs prises courtes plutôt qu'en une seule longue : une prise par partie du script. Une erreur ne vous oblige alors qu'à refaire une minute. Faites toujours un test de dix secondes pour vérifier le son avant la vraie prise, dans une pièce calme, porte fermée, ventilateur éteint."
   ],
   "appro": [
    "Le son reste la priorité : un élève regarde une vidéo à l'image moyenne, pas une vidéo au son mauvais. Parlez à vingt ou trente centimètres du micro, évitez les pièces vides qui résonnent (un rideau, un lit, des vêtements absorbent l'écho) et enregistrez aux heures calmes.",
    "Gardez un format stable pour toutes vos vidéos : même introduction de trois secondes (logo, titre), même disposition, même conclusion (tâche + rendez-vous). La régularité rend vos vidéos reconnaissables et vous fait gagner du temps à chaque tournage."
   ],
   "ex": "Pour une vidéo « Calculer une vitesse moyenne » en 4e, vous écrivez un script de six lignes, préparez la feuille avec l'énoncé, tournez trois prises au téléphone (formule, exemple, piège des unités) et refaites seulement la deuxième, où vous vous étiez trompé d'unité.",
   "fm": "Vos documents et votre charte (logo, couleurs) servent directement d'introduction et de supports ; l'écriture à la main sur feuille blanche reste votre signature naturelle.",
   "err": "Tourner sans script en une seule prise de vingt minutes, puis renoncer à publier parce que tout est à refaire.",
   "cle": "Script court, son d'abord, prises courtes, format stable : téléphone au-dessus de la feuille ou OBS Studio à l'ordinateur.",
   "exo": "Écrivez le script d'une vidéo de cinq minutes selon le modèle (titre, objectif, plan en trois parties, exemple, piège, tâche) et tournez une première prise d'essai.",
   "q": "Quel est le principal obstacle qui vous empêche aujourd'hui de tourner votre première vidéo ?"
  },
  {
   "id": "enligne-video-4",
   "t": "Monter, publier et mesurer",
   "p": [
    "OBS Studio enregistre mais ne monte pas. Pour assembler vos prises, couper les silences et ajouter un titre, utilisez un logiciel de montage gratuit comme Shotcut ou DaVinci Resolve sur ordinateur, ou une application de montage simple sur téléphone. Le montage pédagogique est sobre : couper les hésitations, assembler les prises, ajouter le titre et éventuellement des sous-titres.",
    "Les sous-titres aident beaucoup d'élèves : ceux qui regardent sans le son (transport, maison partagée), ceux qui ont du mal à suivre à l'oral, ceux qui révisent. Pour publier, YouTube permet de mettre une vidéo en accès « non répertorié » : seules les personnes qui ont le lien peuvent la voir, ce qui convient aux vidéos réservées à vos élèves. Les vidéos publiques servent votre visibilité ; organisez-les en playlists par classe et par chapitre.",
    "Mesurez l'effet pédagogique, pas seulement les vues. Après une vidéo, l'élève fait la tâche demandée : réussit-il l'exercice ? Quelles questions pose-t-il en séance ? Un quiz de trois questions associé à la vidéo vous dit si elle a fait apprendre. Améliorez la vidéo suivante à partir de ces retours."
   ],
   "appro": [
    "Nommez et rangez vos vidéos comme vos documents : classe, chapitre, numéro, titre (« 3e_Thales_02_Calculer_une_longueur »). Gardez les fichiers sources et les scripts : ils vous permettront de refaire ou d'adapter une vidéo sans tout recommencer.",
    "Ne publiez jamais d'élève à l'écran (voix, visage, copie) sans accord écrit du parent, et vérifiez que vos documents et images vous appartiennent ou sont libres d'utilisation. Une vidéo pédagogique doit être irréprochable sur le fond comme sur la forme : relisez chaque calcul avant de publier."
   ],
   "ex": "Vous montez la vidéo sur la vitesse moyenne dans Shotcut, ajoutez des sous-titres, la publiez en « non répertorié » pour vos élèves de 4e avec un quiz de trois questions. Deux élèves se trompent sur la conversion km/h en m/s : votre vidéo suivante portera sur ce piège.",
   "fm": "Vos vidéos rejoignent votre stratégie de visibilité (TikTok, YouTube, Facebook) et votre future plateforme ; les vidéos non répertoriées peuvent soutenir le travail autonome de vos élèves dès maintenant.",
   "err": "Juger une vidéo à son nombre de vues au lieu de vérifier si les élèves réussissent la tâche qui suit.",
   "cle": "Montage sobre, sous-titres, publication publique ou non répertoriée selon le public, effet mesuré par la tâche qui suit.",
   "exo": "Montez votre première vidéo, ajoutez des sous-titres, publiez-la en non répertorié avec un quiz de trois questions et notez les résultats de deux élèves.",
   "q": "Comment saurez-vous si votre première vidéo a fait apprendre quelque chose ?"
  }
 ],
 "cas": {
  "t": "La vidéo de 25 minutes que personne ne finit",
  "s": "Vous avez publié une vidéo de 25 minutes sur les fonctions affines, filmée pendant une séance. Les élèves qui l'ont reçue disent l'avoir commencée, mais aucun ne l'a terminée, et le quiz qui suivait est raté.",
  "q": [
   "Pourquoi la vidéo ne fonctionne-t-elle pas ?",
   "Comment la refaites-vous ?",
   "Comment vérifiez-vous la nouvelle version ?"
  ],
  "r": [
   "Trop longue (l'engagement chute au-delà de six minutes), non scénarisée, plusieurs notions mélangées, pas de tâche intermédiaire.",
   "Découper en trois ou quatre vidéos de cinq minutes (définition et lecture graphique, coefficient directeur, sens de variation, équation de droite), script court, écriture à la main, principes de Mayer, tâche à la fin de chaque vidéo.",
   "Quiz de trois questions après chaque vidéo ; questions posées en séance ; comparaison des résultats avec la première version."
  ]
 },
 "atelier": {
  "t": "Votre première série de vidéos",
  "c": "Choisissez un chapitre. Écrivez la liste de cinq vidéos de cinq minutes au plus, le script complet de la première, votre format stable (introduction, disposition, conclusion), l'outil de tournage et de montage, le mode de publication et le quiz associé."
 },
 "outil": {
  "t": "Gabarit de script de vidéo pédagogique",
  "usage": "Une page par vidéo, avant de tourner.",
  "lignes": [
   "## Identification",
   "Classe · chapitre · numéro · titre précis (ce qu'on apprend)",
   "## Objectif",
   "À la fin, l'élève sait…",
   "## Plan (3 parties d'une à deux minutes)",
   "1 … 2 … 3 …",
   "## Exemple choisi",
   "Énoncé préparé sur la feuille",
   "## Piège à signaler",
   "L'erreur fréquente et comment l'éviter",
   "## À souligner à l'écran",
   "Deux ou trois éléments encadrés ou fléchés",
   "## Tâche finale",
   "Exercice ou quiz de trois questions",
   "## Contrôle avant publication",
   "Durée ≤ 6 min · son vérifié · calculs relus · aucun élève à l'écran sans accord · sous-titres"
  ]
 },
 "actions": [
  "Lister dix vidéos de cinq minutes pour un chapitre prioritaire",
  "Écrire le script de la première vidéo avec le gabarit",
  "Installer OBS Studio et un logiciel de montage gratuit, puis faire un essai",
  "Publier une première vidéo non répertoriée avec un quiz de trois questions"
 ],
 "quiz": [
  [
   "Sur combien de sessions de visionnage porte l'étude de Guo et al. (2014) ?",
   [
    "6,9 millions",
    "69 000",
    "690"
   ],
   0,
   "L'étude a analysé 6,9 millions de sessions sur edX."
  ],
  [
   "Selon cette étude, l'engagement chute nettement au-delà de…",
   [
    "6 minutes",
    "15 minutes",
    "30 minutes"
   ],
   0,
   "D'où la recommandation de vidéos courtes."
  ],
  [
   "Quel style de vidéo est le plus engageant selon Guo et al. ?",
   [
    "Dessin à la main sur tablette, rendu personnel",
    "Studio coûteux avec diapositives",
    "Lecture d'un texte affiché"
   ],
   0,
   "Le rendu personnel et l'écriture manuscrite engagent davantage."
  ],
  [
   "Le principe de cohérence de Mayer demande de…",
   [
    "retirer ce qui n'aide pas à apprendre",
    "ajouter une musique de fond",
    "multiplier les animations"
   ],
   0,
   "Les éléments décoratifs détournent l'attention."
  ],
  [
   "Le principe de redondance déconseille de…",
   [
    "lire mot à mot un long texte affiché pendant une figure",
    "parler pendant l'animation",
    "encadrer l'essentiel"
   ],
   0,
   "L'élève ne peut pas lire, écouter et regarder la figure à la fois."
  ],
  [
   "Que peut faire OBS Studio ?",
   [
    "Enregistrer l'écran et la voix gratuitement, sans filigrane",
    "Monter des vidéos avec effets",
    "Publier automatiquement sur TikTok"
   ],
   0,
   "OBS enregistre et diffuse ; le montage se fait avec un autre logiciel."
  ],
  [
   "Une vidéo YouTube « non répertoriée » est visible…",
   [
    "par les personnes qui ont le lien",
    "par tout le monde dans les recherches",
    "par personne"
   ],
   0,
   "Pratique pour des vidéos réservées à vos élèves."
  ],
  [
   "Comment mesurer l'effet pédagogique d'une vidéo ?",
   [
    "Par la réussite à la tâche ou au quiz qui suit",
    "Par le nombre de vues uniquement",
    "Par la durée de la vidéo"
   ],
   0,
   "Une vidéo réussie fait apprendre, pas seulement regarder."
  ]
 ],
 "sources": [
  [
   "Guo, P., Kim, J., Rubin, R. (2014). How Video Production Affects Student Engagement",
   "https://www.cs.rochester.edu/hci/pubs/pdfs/edX-MOOC-video-production-and-engagement_LAS-2014.pdf"
  ],
  [
   "UBC — Résumé des recommandations de Guo et al. pour les vidéos",
   "https://flexible.learning.ubc.ca/?p=2444"
  ],
  [
   "Mayer, R. — Research-based principles for designing multimedia instruction (UNH)",
   "https://www.unh.edu/teaching-learning-resource-hub/sites/default/files/media/2023-06/itow-research-based-principles-for-designing-multimedia-instruction-mayer.pdf"
  ],
  [
   "Ohio State University — Principes d'apprentissage multimédia",
   "https://u.osu.edu/multimedialearning/?p=11"
  ],
  [
   "OBS Studio — site officiel",
   "https://obsproject.com"
  ]
 ],
 "veille": []
}
);
