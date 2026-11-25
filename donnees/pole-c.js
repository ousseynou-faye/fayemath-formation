/* =====================================================================
   FayeMath Formation — PÔLE C — Pédagogie
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
 "id": "apprendre",
 "n": 9,
 "pole": "C",
 "court": "Comment on apprend",
 "titre": "Comment un élève apprend",
 "but": "Comprendre ce qui se passe dans la tête de l'élève pour choisir les gestes qui font vraiment apprendre.",
 "objectifs": [
  "Expliquer le rôle de la mémoire de travail et de la mémoire à long terme",
  "Remplacer la relecture par l'entraînement à se rappeler",
  "Espacer et mélanger les révisions",
  "Donner un retour qui fait progresser"
 ],
 "lecons": [
  {
   "id": "apprendre-1",
   "t": "Deux mémoires : pourquoi l'élève « décroche »",
   "p": [
    "Apprendre, c'est modifier durablement la mémoire à long terme. Mais tout ce qui est nouveau passe d'abord par la mémoire de travail, qui est très limitée : elle ne manipule que quelques éléments à la fois, pendant peu de temps. La mémoire à long terme, elle, est pratiquement sans limite.",
    "Un élève « décroche » le plus souvent parce que sa mémoire de travail est saturée, pas par manque de volonté. Trop d'informations nouvelles à la fois, une consigne longue, un calcul intermédiaire mal maîtrisé : chaque élément occupe une place, et il n'en reste plus pour comprendre.",
    "Ce qui est déjà solidement en mémoire à long terme ne coûte presque rien. Un élève qui connaît ses tables et ses identités remarquables par cœur garde toute son attention pour le raisonnement. C'est pourquoi les automatismes ne s'opposent pas à la compréhension : ils la rendent possible.",
    "Conséquences pratiques : présenter la nouveauté par petites étapes, faire pratiquer après chaque étape, montrer un exemple entièrement résolu avant de demander à l'élève de chercher, et retirer tout ce qui distrait."
   ],
   "appro": [
    "La différence entre un expert et un débutant tient moins à l'intelligence qu'à ce qui est déjà organisé en mémoire. Devant une équation, vous voyez d'un coup une structure ; l'élève voit une suite de symboles qu'il doit traiter un par un. C'est pourquoi ce qui vous paraît évident ne l'est pas pour lui, et pourquoi « c'est facile » n'aide jamais.",
    "Trois sources de surcharge sont de votre fait et se corrigent : parler pendant que l'élève lit ou calcule, donner plusieurs consignes à la fois, présenter une figure d'un côté et son explication de l'autre. Dites une chose, laissez faire, puis passez à la suivante ; écrivez les explications directement sur la figure.",
    "Enfin, l'aide doit diminuer à mesure que l'élève progresse. Les exemples entièrement résolus sont très efficaces pour un débutant ; pour un élève déjà à l'aise, ils deviennent inutiles et il apprend davantage en cherchant. Ajustez la dose d'exemples au niveau réel."
   ],
   "ex": "Résoudre 3(x − 2) = 2x + 5 demande de distribuer, regrouper, changer de membre, calculer. Pour un élève qui hésite encore sur 3 × (−2), c'est trop à la fois. On commence donc par vérifier la distributivité seule, puis on montre un exemple complet, puis on fait un exercice ensemble.",
   "fm": "Vos cours suivent déjà cet ordre : activité, définition, exemple modèle, exercice d'application corrigé. La révision des prérequis en première séance sert à repérer ce qui n'est pas encore automatique.",
   "err": "Expliquer tout le chapitre d'un seul trait, puis donner une série d'exercices. L'élève a écouté, mais sa mémoire de travail a débordé dès la troisième idée.",
   "cle": "Peu de nouveautés à la fois, un exemple résolu d'abord, de la pratique après chaque étape.",
   "exo": "Prenez l'exemple modèle de votre prochaine séance. Comptez les idées nouvelles qu'il contient. S'il y en a plus de trois, découpez-le en deux exemples.",
   "q": "Lors de votre dernière séance, à quel moment précis l'élève a-t-il décroché, et qu'est-ce qui était trop à la fois ?"
  },
  {
   "id": "apprendre-2",
   "t": "Se tester plutôt que relire",
   "p": [
    "La méthode de révision la plus répandue est la relecture du cours, souvent surligné. C'est aussi l'une des moins efficaces. Une vaste synthèse de la recherche (Dunlosky et ses collègues, 2013) a évalué dix techniques : relire et surligner y reçoivent une utilité faible, tandis que deux techniques obtiennent l'utilité la plus élevée, s'entraîner à se tester et répartir le travail dans le temps.",
    "Relire donne une impression de maîtrise : le texte paraît familier, donc on croit savoir. Se tester oblige à aller chercher l'information en mémoire, et c'est cet effort de rappel qui consolide le souvenir. Il révèle aussi immédiatement ce qui n'est pas su.",
    "Se tester ne veut pas dire être noté. Il s'agit de fermer le cahier et de répondre : réciter une définition, refaire un exemple sans regarder, répondre à cinq questions rapides, expliquer la méthode à voix haute.",
    "L'effet est le plus fort quand le test est suivi d'une correction : l'élève compare sa réponse à la bonne et corrige tout de suite."
   ],
   "appro": [
    "Se tester profite aussi à ce qui n'a pas été trouvé. Chercher une réponse, même sans succès, prépare la mémoire à retenir la correction qui suit. Un élève qui a essayé et s'est trompé retient mieux qu'un élève à qui l'on a donné directement la solution, à condition que la correction vienne vite.",
    "Variez les formes de rappel pour qu'elles ne deviennent pas mécaniques : réciter une propriété, donner un exemple et un contre-exemple, refaire une démonstration, expliquer une méthode à quelqu'un, écrire tout ce dont on se souvient d'un chapitre sur une feuille blanche puis compléter avec le cahier.",
    "Présentez-le à l'élève comme un entraînement, jamais comme un contrôle. Le score du rappel de début de séance n'est pas une note : c'est un thermomètre qui indique quoi revoir. Un élève qui craint d'être jugé triche avec lui-même ; un élève qui a compris l'outil s'en sert seul."
   ],
   "ex": "Début de séance, cahier fermé, cinq questions en cinq minutes sur la séance précédente : « Énonce le théorème de Thalès. Dans quel cas l'utilise-t-on ? Écris la formule du volume d'un cône… » On corrige ensemble, et l'élève note ce qu'il n'a pas su.",
   "fm": "Vos fiches de révision (QCM avec barème) et vos tests diagnostiques sont déjà des outils de test. Vous pouvez en faire un rituel d'ouverture de chaque séance et apprendre à l'élève à s'interroger seul avec ses fiches.",
   "err": "Demander « tu as révisé ? » et se contenter d'un oui. La seule vérification fiable est de faire produire la réponse, cahier fermé.",
   "cle": "Cahier fermé, on se rappelle ; puis on corrige. Relire ne suffit pas.",
   "exo": "Rédigez dix questions de rappel sur le chapitre que vous enseignez en ce moment, réponses comprises, à utiliser lors des deux prochaines séances.",
   "q": "Comment vos élèves révisent-ils entre deux séances, et comment pourriez-vous leur apprendre à se tester ?"
  },
  {
   "id": "apprendre-3",
   "t": "Espacer et mélanger",
   "p": [
    "La seconde technique la mieux établie est la pratique distribuée : revoir une notion plusieurs fois, à des moments espacés, plutôt qu'en une seule longue séance la veille du devoir. À temps de travail égal, on retient plus longtemps.",
    "L'oubli fait partie du mécanisme. Revoir une notion au moment où elle commence à s'effacer demande un effort, et c'est cet effort qui la fixe. Un rythme simple suffit : le lendemain, une semaine après, un mois après.",
    "Troisième idée, classée d'utilité moyenne mais précieuse en mathématiques : mélanger les types d'exercices. Une série où tous les exercices relèvent de la même méthode entraîne à appliquer, pas à choisir. Or le jour de l'examen, la première difficulté est de reconnaître quelle méthode utiliser.",
    "Mélanger paraît plus difficile sur le moment, et l'élève a l'impression de moins bien réussir. C'est normal : la difficulté utile aujourd'hui produit la réussite durable demain."
   ],
   "appro": [
    "Espacer a un coût apparent qu'il faut expliquer à l'élève et aux parents : à la deuxième reprise, il a oublié une partie et s'en étonne. C'est normal et utile. Chaque reprise est plus rapide que la précédente, et l'oubli ralentit. Trois reprises de dix minutes laissent plus de traces qu'une heure d'affilée.",
    "Organisez-le matériellement. Tenez pour chaque élève une liste des chapitres terminés avec la date de fin, et prévoyez les reprises dans votre préparation : une question à la séance suivante, un exercice une semaine après, un exercice un mois après. Sans calendrier, la reprise n'a jamais lieu.",
    "Pour mélanger, commencez doucement : deux types d'exercices proches que l'élève confond (Thalès et sa réciproque, développer et factoriser, vitesse moyenne et vitesse instantanée). Demandez d'abord de dire seulement quelle méthode s'applique, sans calculer. Cette étape de reconnaissance est exactement ce que l'examen exige."
   ],
   "ex": "En 3e, après les chapitres Thalès, Pythagore et trigonométrie : une fiche de six exercices dans le désordre, sans titre de chapitre. Pour chacun, l'élève écrit d'abord quel outil il va utiliser et pourquoi, avant tout calcul.",
   "fm": "Votre bibliothèque est organisée par chapitre. Ajouter à intervalles réguliers une séance de révision mêlant les chapitres déjà vus, à partir de vos séries d'exercices et de vos sujets d'examen, met en œuvre ce principe sans nouveau support.",
   "err": "Considérer qu'un chapitre « fait » en octobre est acquis pour l'examen de juillet. Sans rappel espacé, l'essentiel aura disparu.",
   "cle": "Revoir à J+1, J+7, J+30, et mélanger les chapitres pour apprendre à choisir la méthode.",
   "exo": "Pour un élève, listez les chapitres terminés depuis la rentrée et la date de la dernière reprise de chacun. Programmez une reprise pour les deux plus anciens.",
   "q": "Quel chapitre vu il y a plus d'un mois n'avez-vous jamais repris avec chacun de vos élèves ?"
  },
  {
   "id": "apprendre-4",
   "t": "Le retour qui fait progresser",
   "p": [
    "Le cours particulier a un avantage décisif sur la classe : l'encadreur voit chaque erreur au moment où elle se produit et peut y répondre aussitôt. La Education Endowment Foundation, qui synthétise la recherche en éducation, estime que le tutorat individuel apporte en moyenne environ cinq mois de progrès supplémentaires, et souligne qu'il est le plus efficace lorsqu'il s'appuie sur un diagnostic et un retour rapide, en lien avec ce qui est fait en classe.",
    "Un bon retour porte sur la tâche et la méthode, pas sur la personne. « Tu es fort » ou « tu es distrait » n'apprennent rien. « Ton raisonnement est juste, l'erreur est dans le changement de signe à la ligne 3 » dit exactement quoi corriger.",
    "Il laisse aussi le travail à l'élève. Plutôt que de donner la bonne réponse, on indique où regarder : « Relis la ligne 3 ». On peut aussi lui demander d'expliquer sa démarche à voix haute ; souvent, il trouve l'erreur lui-même, et cette explication renforce l'apprentissage.",
    "Enfin, un retour n'a d'effet que si l'élève s'en sert : refaire l'exercice, ou un exercice voisin, tout de suite."
   ],
   "appro": [
    "Un retour utile répond à trois questions de l'élève : où dois-je arriver, où en suis-je, que dois-je faire maintenant ? Sans la première, il ne sait pas ce qui est attendu ; sans la troisième, il sait qu'il s'est trompé mais pas comment progresser. Vérifiez que chacun de vos retours contient une action.",
    "Dosez la quantité. Corriger dix défauts d'un coup n'en corrige aucun. Choisissez la priorité du moment (par exemple la rédaction des conclusions) et laissez provisoirement passer des points secondaires. L'élève doit pouvoir dire, en fin de séance, la chose précise qu'il doit améliorer.",
    "Le moment compte aussi. Pendant l'apprentissage d'une procédure nouvelle, un retour immédiat évite d'ancrer l'erreur. Quand l'élève s'entraîne en conditions d'examen, attendez la fin : il doit apprendre à se relire et à détecter seul ses fautes, ce que le correcteur ne fera pas à sa place."
   ],
   "ex": "L'élève écrit (x + 3)² = x² + 9. Au lieu de corriger : « Vérifie avec x = 1. Que vaut chaque côté ? » Il trouve 16 et 10, constate l'écart, puis on revient au développement (x + 3)(x + 3).",
   "fm": "Le cinquième temps de la méthode CADRE, Évaluer, est précisément ce retour sur son propre travail. Vos corrigés détaillés permettent à l'élève de comparer sa démarche ligne par ligne.",
   "err": "Reprendre le stylo et refaire l'exercice à la place de l'élève. Il regarde, approuve, et ne saura pas le refaire seul.",
   "cle": "Un retour précis, sur la méthode, donné tout de suite, et suivi d'un nouvel essai.",
   "exo": "Reprenez une copie récente d'un élève. Écrivez le retour que vous lui feriez en trois phrases : ce qui est acquis, l'erreur prioritaire, l'action à mener.",
   "q": "Dans vos séances, qui tient le stylo le plus longtemps : vous ou l'élève ?"
  }
 ],
 "cas": {
  "t": "L'élève qui « a tout révisé »",
  "s": "Aïssatou, en 1re, vous assure avoir relu tout le chapitre sur les dérivées, surligneur en main, pendant trois heures. Au devoir, elle obtient 6/20 et ne comprend pas.",
  "q": [
   "Qu'est-ce qui explique l'écart entre son travail et son résultat ?",
   "Quel changement de méthode de révision lui proposez-vous ?",
   "Comment organisez-vous les trois semaines avant le prochain devoir ?"
  ],
  "r": [
   "La relecture donne une impression de familiarité sans entraîner le rappel ni la résolution.",
   "Cahier fermé : réciter les formules, refaire les exemples du cours sans regarder, puis comparer avec le corrigé.",
   "Trois courtes reprises espacées plutôt qu'une longue ; une série d'exercices mélangés ; un mini-devoir en temps limité une semaine avant."
  ]
 },
 "atelier": {
  "t": "Votre rituel d'ouverture de séance",
  "c": "Choisissez un chapitre et une classe. Écrivez cinq questions de rappel à poser cahier fermé en début de séance (deux sur la séance précédente, deux sur un chapitre plus ancien, une sur un prérequis), puis la façon dont vous corrigerez en trois minutes."
 },
 "outil": {
  "t": "Fiche « Réviser efficacement » pour l'élève",
  "usage": "À expliquer à l'élève et à laisser dans son cahier.",
  "lignes": [
   "## 1. Ferme le cahier",
   "Écris de mémoire les définitions, propriétés et formules du chapitre.",
   "## 2. Vérifie",
   "Ouvre le cahier, corrige en couleur ce qui manquait ou était faux.",
   "## 3. Refais",
   "Refais deux exemples du cours sans regarder la solution, puis compare.",
   "## 4. Espace",
   "Reprends le chapitre le lendemain, une semaine après, un mois après (dix minutes suffisent).",
   "## 5. Mélange",
   "Une fois par semaine, fais des exercices de plusieurs chapitres dans le désordre.",
   "## À éviter",
   "Relire et surligner sans te tester : tu crois savoir, mais tu ne t'es pas entraîné."
  ]
 },
 "actions": [
  "Ouvrir chaque séance par cinq questions de rappel, cahier fermé",
  "Expliquer la fiche « Réviser efficacement » à chaque élève",
  "Programmer une reprise espacée de chaque chapitre terminé (J+7 et J+30)"
 ],
 "quiz": [
  [
   "Quelle mémoire est très limitée ?",
   [
    "La mémoire de travail",
    "La mémoire à long terme",
    "Les deux"
   ],
   0,
   "Elle ne manipule que quelques éléments à la fois."
  ],
  [
   "Pourquoi les automatismes aident-ils à comprendre ?",
   [
    "Ils libèrent la mémoire de travail pour le raisonnement",
    "Ils remplacent le raisonnement",
    "Ils font gagner des points de présentation"
   ],
   0,
   "Ce qui est automatique ne coûte presque rien."
  ],
  [
   "Quelles techniques reçoivent l'utilité la plus élevée dans la synthèse de Dunlosky (2013) ?",
   [
    "Relire et surligner",
    "Se tester et répartir le travail dans le temps",
    "Résumer et recopier"
   ],
   1,
   "Relire et surligner y reçoivent une utilité faible."
  ],
  [
   "Pourquoi relire donne-t-il une fausse impression de maîtrise ?",
   [
    "Le texte paraît familier",
    "Le texte est trop long",
    "L'élève lit trop vite"
   ],
   0,
   "Familiarité n'est pas capacité à retrouver ou à utiliser."
  ],
  [
   "Quel rythme de révision espacée est proposé ?",
   [
    "J+1, J+7, J+30",
    "La veille du devoir uniquement",
    "Une fois par an"
   ],
   0,
   "Revoir au moment où la notion commence à s'effacer."
  ],
  [
   "À quoi sert de mélanger les types d'exercices ?",
   [
    "À apprendre à choisir la bonne méthode",
    "À aller plus vite",
    "À éviter les calculs"
   ],
   0,
   "Le jour de l'examen, il faut d'abord reconnaître l'outil."
  ],
  [
   "Sur quoi doit porter un bon retour ?",
   [
    "Sur la personne de l'élève",
    "Sur la tâche et la méthode",
    "Sur la note"
   ],
   1,
   "« L'erreur est dans le changement de signe à la ligne 3. »"
  ],
  [
   "Que doit suivre immédiatement un retour ?",
   [
    "Une pause",
    "Un nouvel essai de l'élève",
    "Un nouveau chapitre"
   ],
   1,
   "Un retour qui n'est pas utilisé n'apprend rien."
  ]
 ],
 "sources": [
  [
   "Rosenshine, B. (2012). Principles of Instruction. American Educator, 36(1)",
   "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf"
  ],
  [
   "Dunlosky et al. (2013). Improving Students' Learning With Effective Learning Techniques — résumé de l'Association for Psychological Science",
   "https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html"
  ],
  [
   "Education Endowment Foundation — One to one tuition",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ],
  [
   "Sweller, J. (1988). Cognitive load during problem solving. Cognitive Science, 12(2)",
   ""
  ]
 ],
 "veille": [
  5
 ]
},
{
 "id": "autonomie",
 "n": 10,
 "pole": "C",
 "court": "Apprendre à apprendre",
 "titre": "Apprendre à apprendre : méthode de travail et autonomie",
 "but": "Rendre chaque élève capable de travailler efficacement seul entre deux séances, puis de moins en moins dépendant de vous.",
 "objectifs": [
  "Enseigner le cycle planifier, contrôler, évaluer",
  "Organiser le travail personnel de l'élève",
  "Installer fiches, formulaires et carnet d'erreurs",
  "Retirer progressivement l'aide jusqu'à l'autonomie"
 ],
 "lecons": [
  {
   "id": "autonomie-1",
   "t": "Planifier, contrôler, évaluer son travail",
   "p": [
    "La métacognition, c'est la capacité de l'élève à réfléchir à sa propre façon d'apprendre : savoir ce qu'il sait et ce qu'il ne sait pas, choisir une stratégie, vérifier qu'elle fonctionne. La Education Endowment Foundation la classe parmi les approches les plus efficaces et les moins coûteuses, à condition de l'enseigner explicitement et dans la matière, pas comme une leçon générale de « méthodologie ».",
    "Elle suit un cycle en trois temps, applicable à chaque exercice et à chaque soirée de travail. Planifier : qu'est-ce qu'on me demande, qu'est-ce que je sais déjà qui peut servir, par quoi je commence ? Contrôler : est-ce que j'avance, est-ce que ma méthode fonctionne, dois-je changer d'approche ? Évaluer : ai-je réussi, qu'est-ce qui a marché, que ferai-je autrement la prochaine fois ?",
    "L'élève en difficulté saute presque toujours le premier et le dernier temps : il se lance sans réfléchir et s'arrête dès qu'il a un résultat. Votre rôle est de rendre ces deux temps visibles, en les faisant à voix haute devant lui, puis en lui posant les questions jusqu'à ce qu'il se les pose seul."
   ],
   "appro": [
    "Faites prédire avant de faire : « À ton avis, combien vas-tu réussir sur ces cinq exercices ? » puis comparez avec le résultat. L'écart apprend à l'élève à mieux se connaître ; la plupart des élèves faibles surestiment ce qu'ils savent, faute d'outils pour le vérifier.",
    "Terminez chaque séance par une question d'évaluation : « Qu'as-tu appris aujourd'hui, et qu'est-ce qui t'a aidé à comprendre ? ». Au début, les réponses sont vagues ; avec l'habitude, elles deviennent précises, et l'élève commence à choisir ses stratégies."
   ],
   "ex": "Avant un problème de géométrie : « Avant de commencer, dis-moi ce que tu vas faire. » L'élève : « Je cherche un triangle rectangle pour utiliser Pythagore. » À la fin : « Ta méthode a-t-elle marché ? Qu'est-ce qui t'a fait penser à Pythagore ? » Il nomme lui-même l'indice : l'angle droit codé sur la figure.",
   "fm": "La méthode CADRE est un outil métacognitif : Comprendre et Analyser correspondent à la planification, Évaluer à l'évaluation. Enseignez-la comme une suite de questions que l'élève se pose à lui-même.",
   "err": "Faire un exposé général sur « comment bien travailler », sans lien avec un exercice précis. L'élève approuve, puis ne change rien.",
   "cle": "Planifier avant, contrôler pendant, évaluer après : à voix haute d'abord, puis par l'élève seul.",
   "exo": "Pendant votre prochaine séance, posez à l'élève une question de planification avant chaque exercice et une question d'évaluation à la fin. Notez ses réponses.",
   "q": "Lequel de vos élèves se lance sans réfléchir, et quelle question de planification pourriez-vous lui poser systématiquement ?"
  },
  {
   "id": "autonomie-2",
   "t": "Organiser le travail personnel",
   "p": [
    "Deux séances par semaine ne suffisent pas à apprendre : c'est le travail entre les séances qui consolide. Or la plupart des élèves ne savent pas l'organiser. Ils travaillent la veille du devoir, longtemps, le téléphone à côté, en relisant.",
    "Aidez l'élève à construire un emploi du temps de travail réaliste : des plages courtes (vingt à trente minutes) plutôt qu'une longue soirée, à heure fixe, dans un lieu calme, téléphone dans une autre pièce. Chaque plage a un objectif précis : finir l'exercice 4, réciter les formules du chapitre, refaire l'exemple du cours.",
    "Apprenez-lui aussi à prioriser. D'abord ce qui est à rendre bientôt, ensuite la reprise des chapitres récents, enfin les reprises espacées des chapitres anciens. Le cahier de textes devient son tableau de bord, consulté chaque soir."
   ],
   "appro": [
    "Partez de la semaine réelle de l'élève, pas d'un idéal. Un élève qui rentre à 18 h, aide à la maison et partage une pièce avec ses frères ne peut pas suivre le planning d'un manuel. Cherchez avec lui et avec le parent deux ou trois plages tenables, et protégez-les.",
    "Vérifiez au début de chaque séance ce qui a été fait, sans reproche : « Montre-moi ce que tu as fait cette semaine. » Ce qui est vérifié est fait ; ce qui ne l'est jamais disparaît."
   ],
   "ex": "Planning de Khadija, 4e : lundi et jeudi 19 h 30-20 h, exercices donnés ; mercredi 17 h-17 h 20, récitation des propriétés et questions de rappel ; dimanche 10 h-10 h 30, reprise d'un chapitre ancien. Total : 1 h 50 par semaine, réparti, tenable.",
   "fm": "Vos comptes rendus indiquent déjà le travail à faire avant la séance suivante. Ajoutez-y le moment prévu dans le planning de l'élève, et la vérification au début de la séance suivante.",
   "err": "Donner beaucoup de travail « pour qu'il progresse vite ». Un travail trop long n'est pas fait, et l'élève prend l'habitude de ne pas le faire.",
   "cle": "Des plages courtes, fixes et précises ; d'abord l'urgent, puis la reprise.",
   "exo": "Construisez avec un élève son emploi du temps de travail de la semaine, avec trois plages précises, et faites-le valider par le parent.",
   "q": "Combien de temps chacun de vos élèves travaille-t-il réellement les mathématiques entre deux séances ?"
  },
  {
   "id": "autonomie-3",
   "t": "Fiches, formulaires et carnet d'erreurs",
   "p": [
    "Trois outils simples rendent l'élève autonome dans ses révisions. La fiche de méthode résume, pour un type d'exercice, les étapes à suivre et un exemple. Le formulaire rassemble les définitions, propriétés et formules du chapitre sur une page. Le carnet d'erreurs garde la trace de chaque erreur importante et de sa correction.",
    "Ces outils n'ont de valeur que s'ils sont faits par l'élève. Une fiche recopiée ou distribuée ne s'apprend pas ; une fiche construite par l'élève, puis corrigée par vous, est déjà un premier apprentissage. Donnez la structure, faites remplir, vérifiez.",
    "Le carnet d'erreurs est l'outil le plus puissant et le plus négligé. Chaque ligne contient l'erreur, sa cause (calcul, méthode, rédaction, lecture), la correction, et un exercice voisin pour vérifier. Relu avant chaque devoir, il évite de refaire les mêmes fautes."
   ],
   "appro": [
    "Utilisez les fiches pour se tester, pas pour relire. On cache la colonne des réponses, on récite, on vérifie. Une fiche relue passivement retombe dans la relecture de faible efficacité ; une fiche utilisée comme un jeu de questions devient un outil de rappel.",
    "Faites mettre à jour le formulaire à chaque chapitre, sur un même cahier. À l'approche de l'examen, l'élève dispose de son propre résumé de l'année, qu'il connaît parce qu'il l'a construit."
   ],
   "ex": "Carnet d'erreurs de Moussa : « (x + 4)² = x² + 16. Cause : règle fausse (le carré d'une somme n'est pas la somme des carrés). Correction : (x + 4)² = x² + 8x + 16. Vérification : développer (x + 5)² seul. »",
   "fm": "Vos cours suivent déjà une structure par notion ; la fiche de méthode de l'élève peut en reprendre les blocs « méthode » et « exemple modèle ». Le code d'erreurs C, M, R, L, S du module « Évaluer » sert de colonne « cause ».",
   "err": "Distribuer des fiches toutes faites et considérer que l'élève va les apprendre. Il les range et ne les rouvre pas.",
   "cle": "Fiches faites par l'élève, utilisées pour se tester ; carnet d'erreurs relu avant chaque devoir.",
   "exo": "Avec un élève, ouvrez un carnet d'erreurs et remplissez-le avec les trois erreurs principales de son dernier devoir.",
   "q": "Lequel de vos élèves refait sans cesse les mêmes erreurs, et a-t-il un moyen d'en garder la trace ?"
  },
  {
   "id": "autonomie-4",
   "t": "Rendre progressivement l'autonomie",
   "p": [
    "Le but d'un bon accompagnement est que l'élève ait de moins en moins besoin de vous. Ce n'est pas une menace pour votre activité : c'est la preuve de votre valeur, celle qui fait recommander FayeMath Academy et réinscrire la famille pour l'année suivante.",
    "La démarche est connue sous la forme « je fais, nous faisons, tu fais ». Je fais : vous montrez en pensant à voix haute. Nous faisons : l'élève dicte, vous guidez. Tu fais : il travaille seul, vous observez et intervenez le moins possible. Le passage d'une étape à l'autre dépend de la réussite, pas du calendrier.",
    "Mesurez l'autonomie. La part des exercices réussis sans aide, la capacité à corriger seul une erreur signalée, la capacité à préparer seul un devoir : ces indicateurs doivent progresser au fil des mois. Notez-les dans le bilan mensuel ; les parents y sont très sensibles."
   ],
   "appro": [
    "Changez votre rôle au fil de l'année. En début d'année, vous expliquez beaucoup ; au deuxième trimestre, vous questionnez davantage ; avant l'examen, vous jouez surtout le rôle de l'entraîneur qui chronomètre, observe et corrige. L'élève doit sentir ce changement et le comprendre.",
    "Résistez à la tentation d'aider trop vite. Quand l'élève bloque, attendez, puis donnez l'indice le plus petit possible (« relis la question ») avant un indice plus précis. Chaque aide inutile retire une occasion d'apprendre."
   ],
   "ex": "Septembre : vous résolvez l'exemple, puis faites ensemble deux exercices. Décembre : l'élève résout seul trois exercices sur cinq, vous n'intervenez que sur demande. Mai : il fait un sujet complet en temps réel, et la séance sert à analyser sa copie.",
   "fm": "La séance « du guidé à l'autonome » de vos cours applique ce principe à l'échelle d'une séance ; il s'agit ici de l'appliquer à l'échelle de l'année, et de le rendre visible dans les bilans.",
   "err": "Garder le même niveau d'aide toute l'année. L'élève progresse en séance mais reste démuni seul, le jour du devoir.",
   "cle": "Je fais, nous faisons, tu fais : l'aide diminue à mesure que la réussite augmente.",
   "exo": "Pour chaque élève, notez la part des exercices réussis sans aide lors des deux dernières séances et fixez un objectif pour le mois.",
   "q": "Pour quel élève aidez-vous encore autant qu'en début d'année, et pourquoi ?"
  }
 ],
 "cas": {
  "t": "L'élève qui réussit en séance et échoue au devoir",
  "s": "Seynabou, en 2nde, réussit presque tous les exercices pendant vos séances. Pourtant, ses devoirs en classe ne dépassent pas 8/20. Elle dit : « Avec vous je comprends tout, mais seule je bloque. »",
  "q": [
   "Qu'est-ce qui explique cet écart ?",
   "Que changez-vous dans vos séances ?",
   "Comment vérifiez-vous le progrès ?"
  ],
  "r": [
   "Trop d'aide en séance : elle réussit avec vous, pas seule. Pas de travail personnel structuré, pas d'outil de révision.",
   "Réduire l'aide (indices minimaux, attente), terminer chaque séance par un exercice seul et chronométré, installer fiches et carnet d'erreurs, construire son planning de travail.",
   "Mesurer la part d'exercices réussis sans aide, faire un mini-devoir mensuel dans les conditions de la classe, comparer avec ses notes."
  ]
 },
 "atelier": {
  "t": "Le kit d'autonomie de l'élève",
  "c": "Rédigez les trois documents que vous remettrez à chaque nouvel élève : le modèle d'emploi du temps de travail, la structure de la fiche de méthode, et le modèle de carnet d'erreurs (colonnes et un exemple rempli)."
 },
 "outil": {
  "t": "Kit d'autonomie de l'élève",
  "usage": "À expliquer à l'élève en début d'année et à vérifier à chaque séance.",
  "lignes": [
   "## Avant de travailler (planifier)",
   "Qu'est-ce qu'on me demande ? Qu'est-ce que je sais déjà ? Par quoi je commence ?",
   "## Pendant (contrôler)",
   "Est-ce que j'avance ? Ma méthode marche-t-elle ? Dois-je changer d'approche ?",
   "## Après (évaluer)",
   "Ai-je répondu à la question ? Qu'est-ce qui a marché ? Que ferai-je autrement ?",
   "## Mon emploi du temps de travail",
   "Trois plages de 20 à 30 minutes, à heure fixe, téléphone dans une autre pièce, objectif précis pour chaque plage.",
   "## Mes outils",
   "Fiche de méthode par type d'exercice · formulaire du chapitre · carnet d'erreurs (erreur, cause, correction, exercice de vérification).",
   "## Avant chaque devoir",
   "Relire le carnet d'erreurs · se tester avec les fiches · refaire deux exercices sans aide."
  ]
 },
 "actions": [
  "Poser une question de planification et une question d'évaluation à chaque séance",
  "Construire l'emploi du temps de travail de chaque élève avec sa famille",
  "Ouvrir un carnet d'erreurs avec chaque élève",
  "Noter chaque mois la part des exercices réussis sans aide"
 ],
 "quiz": [
  [
   "Qu'est-ce que la métacognition ?",
   [
    "La capacité à réfléchir à sa propre façon d'apprendre",
    "Une technique de calcul mental",
    "Un type d'évaluation"
   ],
   0,
   "Savoir ce qu'on sait, choisir et vérifier une stratégie."
  ],
  [
   "Quels sont les trois temps du cycle métacognitif ?",
   [
    "Lire, écrire, compter",
    "Planifier, contrôler, évaluer",
    "Apprendre, réciter, oublier"
   ],
   1,
   "Avant, pendant et après le travail."
  ],
  [
   "Comment enseigner la métacognition ?",
   [
    "Par un cours général de méthodologie",
    "Explicitement, dans la matière, à partir d'exercices précis",
    "Elle ne s'enseigne pas"
   ],
   1,
   "L'EEF insiste sur l'enseignement explicite dans la discipline."
  ],
  [
   "Quelle durée privilégier pour les plages de travail personnel ?",
   [
    "Une longue soirée la veille du devoir",
    "Des plages courtes et régulières de 20 à 30 minutes",
    "Une fois par mois"
   ],
   1,
   "Répartir vaut mieux que concentrer."
  ],
  [
   "Qui doit faire la fiche de méthode ?",
   [
    "L'encadreur, distribuée toute faite",
    "L'élève, avec une structure donnée et une correction",
    "Personne"
   ],
   1,
   "La construction est déjà un apprentissage."
  ],
  [
   "Que contient une ligne du carnet d'erreurs ?",
   [
    "L'erreur, sa cause, la correction et un exercice de vérification",
    "La note du devoir",
    "La date de la séance"
   ],
   0,
   "Relu avant chaque devoir."
  ],
  [
   "Que signifie « je fais, nous faisons, tu fais » ?",
   [
    "Une aide qui diminue à mesure que la réussite augmente",
    "Trois séances par semaine",
    "Faire les devoirs à la place de l'élève"
   ],
   0,
   "Le passage dépend de la réussite."
  ],
  [
   "Quel indicateur mesure l'autonomie ?",
   [
    "Le nombre d'heures de cours",
    "La part des exercices réussis sans aide",
    "Le prix de la formule"
   ],
   1,
   "À suivre dans le bilan mensuel."
  ]
 ],
 "sources": [
  [
   "Education Endowment Foundation — Metacognition and self-regulated learning (guidance report)",
   "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition"
  ],
  [
   "Dunlosky et al. (2013). Improving Students' Learning With Effective Learning Techniques — résumé de l'Association for Psychological Science",
   "https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html"
  ],
  [
   "Rosenshine, B. (2012). Principles of Instruction. American Educator, 36(1)",
   "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf"
  ]
 ],
 "veille": [
  5
 ]
},
{
 "id": "didactique",
 "n": 11,
 "pole": "C",
 "court": "Enseigner maths et PC",
 "titre": "Enseigner les maths et la physique-chimie",
 "but": "Transmettre une méthode de résolution, donner du sens aux notions et traiter les erreurs typiques des deux disciplines.",
 "objectifs": [
  "Appliquer une méthode de résolution visible dans chaque exercice",
  "Passer du concret à l'abstrait",
  "Reconnaître et traiter les erreurs typiques",
  "Faire rédiger un raisonnement et un calcul de physique",
  "Produire des supports sourcés et vérifiés"
 ],
 "lecons": [
  {
   "id": "didactique-1",
   "t": "Une méthode, appliquée à chaque exercice",
   "p": [
    "Mathnasium et Kumon sont devenus mondiaux parce qu'ils appliquent une seule méthode, partout, de la même façon. La méthode est ce qui reste quand l'élève travaille seul.",
    "Une méthode s'enseigne par l'exemple : l'élève vous voit la suivre, puis la suit avec vous, puis sans vous.",
    "Votre méthode rejoint une référence classique : dans « Comment poser et résoudre un problème » (1945), le mathématicien George Pólya décrit quatre phases, comprendre le problème, concevoir un plan, exécuter le plan, revenir sur la solution. CADRE détaille ce chemin en cinq gestes que l'élève peut suivre seul.",
    "La phase la plus négligée est la première. Beaucoup d'élèves commencent à calculer avant d'avoir identifié ce qui est donné et ce qui est demandé. Faites reformuler l'énoncé avec ses mots, et faites écrire les données et l'inconnue avant toute opération."
   ],
   "appro": [
    "Chaque étape de CADRE a ses questions types, que l'élève finit par se poser seul. Comprendre : qu'est-ce qu'on me demande, avec mes mots ? Analyser : qu'est-ce que je connais, quelle partie du cours cela rappelle-t-il ? Décomposer : par quoi commencer, que me faut-il pour conclure ? Résoudre : chaque ligne est-elle justifiée ? Évaluer : le résultat est-il plausible, ai-je répondu à la question ?",
    "Pour installer la méthode, pensez à voix haute devant l'élève. Il doit entendre vos hésitations, vos vérifications, vos retours en arrière. Un corrigé propre montre le résultat du raisonnement ; votre parole montre le raisonnement lui-même.",
    "Quand l'élève est bloqué, ne donnez pas la solution : ramenez-le à l'étape précédente. « Relis la question. Qu'est-ce qu'on cherche ? » débloque plus souvent qu'un indice sur le calcul. Les stratégies classiques de Pólya restent utiles : faire un schéma, traiter un cas particulier, partir de ce que l'on cherche."
   ],
   "ex": "Problème de collège : « Un cybercafé facture 300 F l'inscription puis 150 F par heure. Combien d'heures pour 1 500 F ? » Comprendre : on cherche un nombre d'heures. Analyser : coût = 300 + 150 × heures. Décomposer : poser l'équation, la résoudre. Résoudre : 150h = 1 200, h = 8. Évaluer : 300 + 150 × 8 = 1 500, le résultat convient.",
   "fm": "La méthode CADRE : Comprendre, Analyser, Décomposer, Résoudre, Évaluer. Elle est appliquée dans les supports élèves sans jamais y être nommée.",
   "err": "Réciter les cinq étapes comme une leçon. Une méthode ne s'apprend qu'en la voyant appliquée, puis en l'appliquant.",
   "cle": "La méthode se montre dans chaque exercice résolu ; elle ne se récite pas.",
   "exo": "Choisissez un problème de votre prochaine séance et écrivez, pour chacune des cinq étapes, la question que vous poserez à l'élève.",
   "q": "Dans vos séances, laquelle des cinq étapes vos élèves sautent-ils le plus souvent ?",
   "v1": "L5-0"
  },
  {
   "id": "didactique-2",
   "t": "Du concret à l'abstrait",
   "p": [
    "Une notion mathématique se comprend mieux quand elle est rencontrée sous trois formes successives : une manipulation ou une situation concrète, une représentation (schéma, tableau, graphique), puis l'écriture symbolique. Le psychologue Jerome Bruner a décrit cette progression, souvent résumée par « concret, imagé, abstrait ».",
    "L'élève en difficulté a souvent reçu directement la troisième forme. Il manipule des symboles sans image derrière. Revenir à une représentation ne fait pas perdre de temps : c'est ce qui donne un sens aux règles et permet de les retrouver quand on les a oubliées.",
    "En physique-chimie, le chemin est le même : un phénomène observé ou une expérience, puis un modèle (schéma du circuit, bilan des forces), puis la relation mathématique. La formule vient en dernier ; elle résume ce qui a été compris.",
    "Prenez vos exemples dans le quotidien de l'élève : les prix au marché, les trajets, le crédit téléphonique, la facture d'électricité. Un exemple familier ne coûte rien à la mémoire de travail."
   ],
   "appro": [
    "Les représentations ne sont pas des illustrations : ce sont des outils de pensée que l'élève doit apprendre à produire lui-même. Un schéma en barres pour un problème de partage, un tableau pour la proportionnalité, une droite graduée pour les relatifs, un arbre pour les probabilités : chacun rend visible une structure.",
    "Faites circuler l'élève entre les registres : passer d'un énoncé à un tableau, d'un tableau à un graphique, d'un graphique à une formule, et retour. Une notion est comprise quand on la reconnaît sous ses différentes écritures. La fonction affine est à la fois une formule, un tableau de valeurs, une droite et une situation de tarif.",
    "En physique-chimie, prenez garde aux mots du quotidien : « poids » pour masse, « chaleur » pour température, « courant » pour tension. L'élève arrive avec le sens courant ; il faut le nommer, puis poser le sens scientifique à côté, avec l'unité qui le distingue."
   ],
   "ex": "Fractions en 6e : partager trois pains entre quatre enfants (concret), dessiner des bandes découpées en quarts (imagé), écrire 3/4 (abstrait). En physique, pour la loi d'Ohm : mesurer tension et intensité aux bornes d'un conducteur, tracer les points, constater la droite, puis écrire U = R × I.",
   "fm": "Vos cours commencent par une activité avant la définition : c'est cette entrée par le concret. Veillez à ce que l'activité soit réellement faite par l'élève, pas seulement lue.",
   "err": "Commencer par la formule « pour gagner du temps ». L'élève l'applique tant que l'exercice ressemble à l'exemple, puis se perd au premier énoncé différent.",
   "cle": "Situation, représentation, puis symbole : la formule arrive en dernier.",
   "exo": "Pour le chapitre en cours, préparez une situation tirée du quotidien de l'élève et le schéma ou le tableau qui la représente, avant toute formule.",
   "q": "Pour quel chapitre n'avez-vous pas encore de situation concrète ou de schéma à proposer ?"
  },
  {
   "id": "didactique-3",
   "t": "Les erreurs typiques ont une logique",
   "p": [
    "Une erreur répétée n'est presque jamais un hasard. Elle vient d'une règle que l'élève s'est construite et qui a fonctionné jusque-là. « Multiplier agrandit toujours » est vrai avec les entiers, puis devient faux avec 0,5. Tant que la règle fausse n'est pas mise en évidence, elle revient.",
    "En mathématiques, quelques grandes familles : étendre abusivement une règle, (a + b)² = a² + b² ; confondre des écritures proches, −3² et (−3)² ; perdre un signe en changeant de membre ; simplifier une fraction en « barrant » des termes d'une somme ; lire le signe égal comme « donne » plutôt que comme une égalité.",
    "En physique-chimie : confondre masse et poids, penser que le courant est « consommé » par la lampe, croire qu'un objet s'arrête dès qu'on ne le pousse plus, oublier les unités ou les conversions, appliquer une formule sans vérifier ses conditions.",
    "Le traitement suit trois gestes : faire expliquer la démarche pour identifier la règle fausse, la mettre en défaut par un contre-exemple que l'élève calcule lui-même, puis reconstruire la règle correcte et s'entraîner sur des cas voisins. Tenez pour chaque chapitre une liste des erreurs rencontrées : elle devient votre meilleur outil de préparation."
   ],
   "appro": [
    "Classer les erreurs aide à y répondre. Les erreurs d'étourderie se traitent par des habitudes de vérification. Les erreurs de procédure (une étape oubliée ou inversée) se traitent par l'entraînement guidé. Les erreurs de conception (une règle fausse) demandent un contre-exemple et une reconstruction. Le même remède appliqué aux trois ne fonctionne pas.",
    "Les exercices « trouve l'erreur » sont très efficaces : vous présentez une solution fausse mais plausible, l'élève doit localiser la faute et la corriger. Il s'exerce ainsi à relire avec un œil critique, sans l'enjeu d'avoir lui-même produit l'erreur.",
    "Anticipez. Pour chaque chapitre, vous connaissez d'avance deux ou trois erreurs qui reviendront. Montrez-les avant qu'elles n'apparaissent : « Voici l'erreur que presque tout le monde fait ici, et pourquoi elle est tentante. » L'élève prévenu la reconnaît au moment où il s'apprête à la commettre."
   ],
   "ex": "Simplification fausse : (x + 6)/2 devient x + 3. On demande : « Essaie avec x = 2. » Avant simplification : 8/2 = 4. Après : 5. L'élève voit l'écart ; on revient à la règle : on ne simplifie que des facteurs, donc (x + 6)/2 = x/2 + 3.",
   "fm": "La partie « piège classique » de vos vidéos et de vos cours s'appuie sur ces erreurs. Un répertoire d'erreurs par chapitre, alimenté par vos séances, enrichit à la fois vos supports et votre contenu public.",
   "err": "Barrer en rouge et écrire la bonne réponse. La règle fausse reste en place et produira la même erreur au prochain devoir.",
   "cle": "Chercher la règle fausse derrière l'erreur, la mettre en défaut par un contre-exemple, reconstruire.",
   "exo": "Rédigez deux exercices « trouve l'erreur » sur le chapitre en cours, à partir d'erreurs réellement commises par vos élèves.",
   "q": "Quelles sont les trois erreurs que vous avez le plus souvent corrigées ce mois-ci, et quelle règle fausse se cache derrière chacune ?"
  },
  {
   "id": "didactique-4",
   "t": "Rédiger : raisonner par écrit",
   "p": [
    "Aux examens, une partie des points récompense la démarche et sa présentation, pas seulement le résultat. Un élève qui trouve juste mais n'écrit rien perd des points ; un élève qui se trompe dans un calcul mais rédige correctement en garde. La rédaction se travaille donc à chaque séance, pas la veille de l'examen.",
    "En mathématiques, un raisonnement se rédige en trois temps : ce que l'on sait (les données, citées), la propriété utilisée (nommée, avec ses conditions), la conclusion. La formule « On sait que… Or… Donc… » donne un cadre simple au collège.",
    "En physique-chimie, un calcul se présente en quatre lignes : la relation littérale, l'expression de la grandeur cherchée, l'application numérique avec les unités converties, le résultat avec son unité et un nombre raisonnable de chiffres. Ajoutez un réflexe : le résultat est-il vraisemblable ?",
    "Montrez d'abord une rédaction modèle, puis faites rédiger l'élève et comparez. Corrigez la rédaction avec la même exigence que le calcul."
   ],
   "appro": [
    "La rédaction s'apprend par imitation puis par allègement. D'abord l'élève complète une rédaction à trous dont la structure est donnée ; ensuite il rédige avec un modèle sous les yeux ; enfin il rédige seul. Passer directement à la troisième étape donne des copies sans justification.",
    "Enseignez les connecteurs logiques et leur sens exact : « donc » annonce une conséquence, « car » une raison, « or » un fait supplémentaire, « si… alors » une condition. Beaucoup d'élèves les emploient au hasard. Insistez aussi sur la différence entre une propriété et sa réciproque : c'est une source fréquente de points perdus.",
    "En physique-chimie, exigez l'expression littérale avant tout chiffre. Elle permet de vérifier l'homogénéité des unités et montre au correcteur que la relation est comprise. Un résultat numérique faux précédé d'une expression littérale juste conserve une partie des points ; un résultat seul n'en conserve aucun."
   ],
   "ex": "« On sait que ABC est un triangle rectangle en A, avec AB = 3 cm et AC = 4 cm. Or, d'après le théorème de Pythagore, BC² = AB² + AC². Donc BC² = 9 + 16 = 25, et BC = 5 cm. » En physique : P = m × g ; P = 0,5 kg × 9,8 N/kg ; P = 4,9 N.",
   "fm": "Vos corrigés détaillés servent de rédactions modèles. Demandez à l'élève de comparer sa copie au corrigé ligne par ligne et de noter ce qui manque dans sa rédaction.",
   "err": "Accepter un résultat juste « parce qu'il a compris ». Le correcteur de l'examen ne verra que ce qui est écrit.",
   "cle": "Données, propriété nommée, conclusion ; en physique : formule, calcul, unité, vraisemblance.",
   "exo": "Rédigez la solution modèle complète d'un exercice de votre prochaine séance, puis préparez-en une version à trous pour l'élève.",
   "q": "Quelle part de vos séances est consacrée à faire rédiger, et pas seulement à faire trouver ?"
  },
  {
   "id": "didactique-5",
   "t": "Des supports fiables",
   "p": [
    "Un support faux coûte plus cher qu'aucun support : l'élève apprend l'erreur. Chaque définition vient d'une source officielle, chaque exercice d'un vrai sujet, chaque résultat est vérifié.",
    "Un standard écrit vous évite de tout redécider à chaque chapitre et permettra un jour à d'autres de produire comme vous.",
    "La vérification suit un ordre : le programme officiel de la classe d'abord (la notion est-elle au programme, à ce niveau, sous cette forme ?), puis l'énoncé (toutes les données sont-elles présentes et cohérentes ?), puis le corrigé (chaque résultat recalculé).",
    "Un support destiné à être réutilisé mérite une relecture à froid, un autre jour. Les erreurs que l'on ne voit plus en écrivant apparaissent le lendemain."
   ],
   "appro": [
    "Un bon support se juge à l'usage. Après chaque séance, notez sur le document ce qui a posé problème : une consigne mal comprise, un exercice trop long, une figure ambiguë. Ces annotations nourrissent la version suivante. Un support s'améliore par ses utilisations, pas par une relecture à la table.",
    "Construisez les séries d'exercices en paliers : application directe, puis application avec une étape en plus, puis problème, puis exercice de type examen. L'élève doit pouvoir réussir les premiers seul ; les derniers préparent l'épreuve. Indiquez le palier de chaque exercice pour choisir rapidement en séance."
   ],
   "ex": "Avant de diffuser une série de 3e sur Thalès : vérifier dans le programme sénégalais la formulation attendue, contrôler que chaque figure correspond aux longueurs de l'énoncé, recalculer chaque quotient.",
   "fm": "Votre bibliothèque suit un standard de production : programme sénégalais, exercices réels, corrigés vérifiés par calcul.",
   "err": "Reprendre un exercice trouvé en ligne sans vérifier qu'il correspond au programme sénégalais. Notations, niveau et vocabulaire peuvent différer.",
   "cle": "Le fond se source, la forme se crée, chaque calcul se vérifie.",
   "exo": "Reprenez un support utilisé cette semaine. Notez deux défauts constatés en séance et corrigez-les dans le fichier source.",
   "q": "Quel support utilisé cette semaine n'a pas encore été vérifié selon votre standard ?",
   "v1": "L5-3"
  }
 ],
 "cas": {
  "t": "« Je ne comprends rien aux équations »",
  "s": "Moussa, en 4e, échoue à tous les problèmes à mettre en équation. Il sait pourtant résoudre 2x + 3 = 11 quand l'équation est donnée.",
  "q": [
   "Où se situe exactement sa difficulté ?",
   "Par quelle représentation commencez-vous ?",
   "Comment vérifiez-vous qu'il a progressé ?"
  ],
  "r": [
   "Dans le passage de l'énoncé à l'écriture : comprendre et analyser, pas résoudre.",
   "Une situation concrète et un schéma (par exemple des barres ou une balance), puis le choix de l'inconnue écrit en toutes lettres.",
   "Trois problèmes nouveaux, dont il écrit seul le choix de l'inconnue et l'équation, avant toute résolution."
  ]
 },
 "atelier": {
  "t": "Votre répertoire d'erreurs",
  "c": "Choisissez un chapitre que vous enseignez en ce moment. Listez cinq erreurs typiques des élèves. Pour chacune, écrivez la règle fausse qui l'explique et le contre-exemple que vous ferez calculer à l'élève."
 },
 "outil": {
  "t": "Grille de résolution CADRE pour l'élève",
  "usage": "À faire remplir par l'élève sur les premiers problèmes, jusqu'à ce que la démarche devienne automatique.",
  "lignes": [
   "## C — Comprendre",
   "Je reformule l'énoncé avec mes mots. Qu'est-ce qu'on me demande ?",
   "## A — Analyser",
   "Je note les données. Quelle notion du cours est en jeu ?",
   "## D — Décomposer",
   "Je liste les étapes dans l'ordre avant de calculer.",
   "## R — Résoudre",
   "Je rédige chaque étape : données, propriété, conclusion (ou formule, calcul, unité).",
   "## E — Évaluer",
   "Mon résultat est-il vraisemblable ? Ai-je répondu à la question posée ? Je vérifie par un autre moyen si possible."
  ]
 },
 "actions": [
  "Tenir un répertoire d'erreurs typiques par chapitre",
  "Faire remplir la grille CADRE par chaque nouvel élève sur ses cinq premiers problèmes",
  "Faire rédiger au moins un exercice complet par séance"
 ],
 "quiz": [
  [
   "Que signifie CADRE ?",
   [
    "Comprendre, Analyser, Décomposer, Résoudre, Évaluer",
    "Calculer, Appliquer, Démontrer, Réviser, Écrire",
    "Cours, Activité, Devoir, Révision, Examen"
   ],
   0,
   "Cinq étapes appliquées à chaque exercice."
  ],
  [
   "Quelles sont les quatre phases décrites par Pólya ?",
   [
    "Comprendre, concevoir un plan, exécuter, revenir sur la solution",
    "Lire, recopier, calculer, rendre",
    "Apprendre, réciter, appliquer, oublier"
   ],
   0,
   "CADRE détaille ce chemin en cinq gestes."
  ],
  [
   "Dans quel ordre présenter une notion ?",
   [
    "Symbole, puis exemples",
    "Concret, représentation, puis symbole",
    "Formule, puis définition"
   ],
   1,
   "La formule résume ce qui a été compris."
  ],
  [
   "D'où vient une erreur répétée ?",
   [
    "Du hasard",
    "D'une règle fausse que l'élève s'est construite",
    "D'un manque d'intelligence"
   ],
   1,
   "Il faut identifier cette règle pour la défaire."
  ],
  [
   "Comment mettre une règle fausse en défaut ?",
   [
    "En écrivant la bonne réponse en rouge",
    "Par un contre-exemple que l'élève calcule lui-même",
    "En donnant plus d'exercices identiques"
   ],
   1,
   "Par exemple vérifier (x + 3)² = x² + 9 avec x = 1."
  ],
  [
   "Comment se présente un calcul en physique-chimie ?",
   [
    "Résultat seul",
    "Relation littérale, application numérique avec unités, résultat avec unité",
    "Unité, puis formule"
   ],
   1,
   "Avec un contrôle de vraisemblance."
  ],
  [
   "Que doit contenir la rédaction d'un raisonnement ?",
   [
    "Données, propriété nommée, conclusion",
    "Uniquement le résultat",
    "Un dessin"
   ],
   0,
   "« On sait que… Or… Donc… »"
  ],
  [
   "Que vérifier en premier pour un support ?",
   [
    "La mise en page",
    "Sa conformité au programme officiel de la classe",
    "Sa longueur"
   ],
   1,
   "Puis l'énoncé, puis chaque résultat du corrigé."
  ]
 ],
 "sources": [
  [
   "Pólya, G. (1945). How to Solve It (Comment poser et résoudre un problème)",
   ""
  ],
  [
   "Bruner, J. (1966). Toward a Theory of Instruction",
   ""
  ],
  [
   "Rosenshine, B. (2012). Principles of Instruction. American Educator, 36(1)",
   "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf"
  ],
  [
   "Référentiel de la méthode CADRE et standard de production FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  2,
  5
 ]
},
{
 "id": "maths",
 "n": 12,
 "pole": "C",
 "court": "Didactique des maths",
 "titre": "Enseigner chaque domaine des mathématiques",
 "but": "Connaître, pour chaque grand domaine des mathématiques du collège et du lycée, les enjeux, les obstacles et les gestes qui font comprendre.",
 "objectifs": [
  "Enseigner le sens des nombres et du calcul",
  "Faire comprendre la lettre, l'équation et la mise en équation",
  "Conduire l'élève de la figure à la démonstration",
  "Relier formule, tableau, courbe et situation pour les fonctions",
  "Éviter les pièges des statistiques, des probabilités et du dénombrement"
 ],
 "lecons": [
  {
   "id": "maths-1",
   "t": "Nombres et calcul",
   "p": [
    "Tout repose sur le sens des nombres et des opérations. Un élève qui ne voit pas qu'une fraction est un nombre, qui croit que multiplier agrandit toujours, ou qui applique les règles des signes sans les comprendre, accumulera les erreurs dans tous les chapitres suivants. Le calcul est la fondation : quand il est fragile, rien de ce qui est construit dessus ne tient.",
    "Les obstacles sont bien connus. Les décimaux : 2,15 paraît plus grand que 2,5 parce que 15 est plus grand que 5. Les fractions : 1/2 + 1/3 devient 2/5. Les relatifs : −3 − 5 donne 2. Les priorités : 2 + 3 × 4 donne 20. Les puissances : −3² et (−3)² sont confondus. Chacun de ces obstacles vient d'une règle juste dans un cadre plus étroit, étendue au-delà.",
    "Trois gestes aident. Le calcul mental quotidien, cinq minutes en début de séance, entretient les automatismes. La droite graduée donne une image aux décimaux, aux fractions et aux relatifs. L'estimation (« environ combien ? ») avant chaque calcul permet à l'élève de repérer seul un résultat absurde."
   ],
   "appro": [
    "Faites justifier les règles plutôt que les réciter. Pourquoi « moins par moins donne plus » ? Par la régularité d'une suite de produits (3 × (−2), 2 × (−2), 1 × (−2), 0 × (−2), −1 × (−2)…) ou par l'image des dettes. Une règle comprise se retrouve ; une règle récitée se confond avec la voisine.",
    "Au lycée, les mêmes fragilités réapparaissent dans le calcul algébrique, les exponentielles et les logarithmes. Un élève de Terminale qui bloque sur un calcul de limite bloque souvent sur une fraction ou une puissance. Le diagnostic doit donc toujours vérifier le calcul de base."
   ],
   "ex": "Comparer 2,15 et 2,5 : placer les deux nombres sur une droite graduée de 2 à 3, puis écrire 2,50 pour aligner les chiffres. L'élève constate que 2,5 est le plus grand et comprend pourquoi le nombre de chiffres ne compte pas.",
   "fm": "Vos tests diagnostiques et vos livrets de révision des prérequis repèrent ces fragilités dès l'entrée. Le module « Profils d'élèves » montre comment organiser la reprise sans perdre le fil de la classe.",
   "err": "Considérer le calcul comme acquis au lycée et ne jamais le vérifier. Une partie des erreurs de Terminale est en réalité une erreur de 6e ou de 5e.",
   "cle": "Le sens avant la règle, la droite graduée comme image, l'estimation avant le calcul.",
   "exo": "Préparez dix questions de calcul mental couvrant décimaux, fractions, relatifs, priorités et puissances, à utiliser en ouverture de séance avec un élève du collège.",
   "q": "Quel obstacle sur les nombres retrouvez-vous le plus chez vos élèves, y compris au lycée ?"
  },
  {
   "id": "maths-2",
   "t": "Calcul littéral et équations",
   "p": [
    "La lettre change de rôle selon le contexte, et c'est la source principale des difficultés. Elle peut désigner un nombre quelconque (dans une formule ou une identité), un nombre inconnu à trouver (dans une équation) ou une quantité qui varie (dans une fonction). L'élève qui ne perçoit pas ces trois rôles manipule des symboles sans savoir ce qu'il fait.",
    "Pour le calcul littéral, l'image de l'aire aide beaucoup : un rectangle de côtés a et (b + c) montre la distributivité ; un carré de côté (a + b) découpé en quatre morceaux montre pourquoi (a + b)² contient le terme 2ab. L'élève voit alors que (a + b)² ≠ a² + b².",
    "Pour les équations, l'image de la balance donne le sens des transformations : on peut ajouter ou retirer la même chose des deux côtés, multiplier ou diviser les deux côtés par un même nombre non nul. Les erreurs typiques (3x = 12 donc x = 12 − 3 ; changer de côté sans changer de signe) disparaissent quand l'élève sait ce qu'il fait à chaque ligne."
   ],
   "appro": [
    "La mise en équation est la difficulté majeure, bien plus que la résolution. Enseignez-la en étapes : choisir l'inconnue et l'écrire en toutes lettres (« soit x le nombre de cahiers »), exprimer chaque quantité en fonction de x, traduire la phrase qui donne l'égalité, résoudre, vérifier dans l'énoncé. Faites d'abord seulement écrire l'équation, sans résoudre.",
    "Pour les inéquations, insistez sur le seul vrai piège : multiplier ou diviser par un nombre négatif change le sens. Faites-le constater sur un exemple numérique (2 < 3 mais −2 > −3) plutôt que de l'imposer."
   ],
   "ex": "« Un taxi facture 500 F de prise en charge puis 300 F par kilomètre. Avec 3 200 F, combien de kilomètres ? » Soit x le nombre de kilomètres. Coût : 500 + 300x. Équation : 500 + 300x = 3 200. Solution : x = 9. Vérification : 500 + 2 700 = 3 200.",
   "fm": "La méthode CADRE s'applique directement à la mise en équation : Comprendre (que cherche-t-on ?), Analyser (quelles quantités ?), Décomposer (les exprimer en fonction de x), Résoudre, Évaluer (vérifier dans l'énoncé).",
   "err": "Multiplier les équations toutes prêtes à résoudre. L'élève devient habile en résolution et reste incapable de poser une équation à partir d'un problème.",
   "cle": "Distinguer les rôles de la lettre, l'aire pour le calcul, la balance pour les équations, et des étapes pour la mise en équation.",
   "exo": "Rédigez trois problèmes tirés du quotidien de vos élèves (transport, marché, crédit téléphonique) dont l'élève devra seulement écrire l'équation, sans la résoudre.",
   "q": "Vos élèves savent-ils poser une équation seuls, ou seulement résoudre celles qu'on leur donne ?"
  },
  {
   "id": "maths-3",
   "t": "Géométrie et démonstration",
   "p": [
    "La géométrie est souvent le premier lieu où l'élève rencontre la démonstration : il ne suffit plus de voir, il faut prouver. Beaucoup ne comprennent pas pourquoi démontrer ce qui « se voit sur la figure ». Expliquez la différence entre le dessin, qui peut tromper, et les propriétés codées ou données, seules utilisables.",
    "Le raisonnement se construit souvent à rebours. On part de ce qu'il faut démontrer et l'on se demande : « Quelles propriétés permettent de conclure à cela ? ». Pour montrer que deux droites sont parallèles, on peut passer par des angles, par une réciproque, par des perpendiculaires communes. On choisit ensuite la piste pour laquelle on a les données.",
    "Les théorèmes clés du collège (Pythagore, Thalès, trigonométrie dans le triangle rectangle) ont chacun une propriété directe et une réciproque, avec des conditions d'application précises. La confusion entre une propriété et sa réciproque, ou l'oubli d'une condition (le triangle doit être rectangle, les points alignés dans le même ordre), coûte de nombreux points aux examens."
   ],
   "appro": [
    "Faites tenir une liste des propriétés du chapitre sous la forme « Si… alors… ». L'élève voit immédiatement ce qu'il faut avoir (la partie « si ») pour conclure (la partie « alors »). C'est l'outil le plus efficace pour construire une démonstration et éviter de citer une propriété hors de ses conditions.",
    "Ne négligez pas les constructions aux instruments. Construire une figure à partir d'un énoncé oblige à lire précisément, à identifier les données et à respecter les propriétés. Au lycée, la géométrie s'appuie davantage sur les vecteurs et les coordonnées : le passage d'une figure à un calcul est alors l'obstacle à travailler."
   ],
   "ex": "« Montrer que (MN) est parallèle à (BC). » À rebours : quelle propriété conclut au parallélisme ? La réciproque de Thalès. Que faut-il ? Des points alignés dans le même ordre et l'égalité AM/AB = AN/AC. Les données le permettent-elles ? On calcule les deux quotients, puis on rédige.",
   "fm": "Votre bibliothèque de 3e démarre par le cours sur Thalès : c'est l'occasion d'installer la liste « Si… alors… » et la rédaction « On sait que… Or… Donc… » avant les autres chapitres de géométrie.",
   "err": "Accepter « on voit que » dans une démonstration. Le correcteur ne voit qu'une affirmation non justifiée.",
   "cle": "Le dessin ne prouve rien ; on raisonne à rebours avec des propriétés « Si… alors… » dont on vérifie les conditions.",
   "exo": "Rédigez la liste « Si… alors… » des propriétés du chapitre de géométrie que vous enseignez en ce moment, en distinguant propriétés et réciproques.",
   "q": "Vos élèves savent-ils distinguer une propriété de sa réciproque et en vérifier les conditions ?"
  },
  {
   "id": "maths-4",
   "t": "Fonctions",
   "p": [
    "La fonction est une des notions les plus importantes et les plus difficiles du secondaire, parce qu'elle se présente sous quatre formes : une situation (le prix dépend de la quantité), une formule (f(x) = 3x + 2), un tableau de valeurs et une courbe. Comprendre une fonction, c'est passer de l'une à l'autre dans tous les sens.",
    "La progression suit un fil : la proportionnalité au collège, puis la fonction linéaire, puis la fonction affine, puis au lycée les fonctions de référence, l'étude des variations et la dérivée. Chaque étape s'appuie sur la précédente : un élève qui n'a pas compris la proportionnalité aura du mal avec la fonction linéaire.",
    "Les erreurs typiques sont le vocabulaire (image et antécédent confondus), la notation (f(x) lu comme « f fois x »), la lecture graphique (axes inversés, graduations mal lues) et la confusion entre la fonction et sa valeur en un point."
   ],
   "appro": [
    "Faites traduire régulièrement d'un registre à l'autre : à partir d'une situation, établir la formule ; à partir de la formule, dresser le tableau et tracer la courbe ; à partir de la courbe, retrouver la formule d'une fonction affine. Chaque traduction consolide le sens.",
    "Au lycée, donnez une image concrète de la dérivée : la pente de la tangente, ou la vitesse instantanée. Le signe de la dérivée et les variations de la fonction se comprennent alors comme « monter » ou « descendre », avant d'être une technique de calcul."
   ],
   "ex": "Situation : une recharge de crédit coûte 1 000 F de frais fixes plus 50 F par unité. Formule : f(x) = 50x + 1 000. Tableau pour x = 0, 10, 20. Courbe : une droite qui coupe l'axe des ordonnées en 1 000. Question inverse : combien d'unités pour 3 000 F ? C'est un antécédent.",
   "fm": "Les vidéos FayeMath sur les méthodes express peuvent porter sur ces traductions entre registres : elles répondent à une difficulté très répandue et intéressent autant les élèves que les parents.",
   "err": "Enseigner la fonction uniquement par des calculs d'images. L'élève sait calculer f(2) mais ne voit pas ce que représente la fonction.",
   "cle": "Situation, formule, tableau, courbe : comprendre une fonction, c'est passer de l'une à l'autre.",
   "exo": "Préparez une situation tirée du quotidien et l'enchaînement complet : formule, tableau de valeurs, courbe, une question d'image et une question d'antécédent.",
   "q": "Dans quel registre vos élèves sont-ils le plus à l'aise, et lequel évitent-ils ?"
  },
  {
   "id": "maths-5",
   "t": "Statistiques, probabilités et dénombrement",
   "p": [
    "Ces domaines demandent moins de technique que de raisonnement, et c'est ce qui les rend difficiles. En statistiques, l'enjeu est le sens des indicateurs : la moyenne est sensible aux valeurs extrêmes, la médiane partage la série en deux, l'étendue mesure la dispersion. Un élève qui calcule la moyenne sans savoir ce qu'elle dit ne peut pas interpréter un résultat.",
    "En probabilités, la première difficulté est de décrire l'expérience : quelles sont les issues possibles, sont-elles équiprobables ? Les erreurs viennent souvent de là : croire que deux issues sont également probables alors qu'elles ne le sont pas (obtenir 7 ou 12 avec deux dés, par exemple).",
    "Le dénombrement, au lycée, repose sur deux questions à poser avant tout calcul : l'ordre compte-t-il ? Les répétitions sont-elles possibles ? Les réponses orientent vers le bon outil. Une erreur fréquente est d'appliquer une formule avant d'avoir répondu à ces deux questions."
   ],
   "appro": [
    "Utilisez systématiquement les arbres et les tableaux à double entrée. Ils rendent visibles toutes les issues et évitent les oublis. Faites d'abord construire l'arbre complet sur un petit exemple, avant de passer aux formules.",
    "Faites vérifier par l'expérience ou la simulation quand c'est possible : lancer réellement deux dés vingt fois et noter les sommes montre que 7 sort plus souvent que 12. L'intuition fausse est corrigée par l'observation avant d'être corrigée par le calcul."
   ],
   "ex": "Deux dés : quelle somme est la plus probable ? L'élève répond souvent « toutes pareilles ». Tableau à double entrée de 36 cases : la somme 7 apparaît 6 fois, la somme 12 une seule fois. Probabilités : 6/36 et 1/36.",
   "fm": "Votre cours de dénombrement de 1re S1 peut s'ouvrir sur les deux questions (ordre, répétition) sous forme de fiche de méthode, à faire compléter par l'élève.",
   "err": "Commencer par les formules du dénombrement. L'élève applique une formule au hasard parce qu'il n'a pas analysé la situation.",
   "cle": "Interpréter avant de calculer : sens des indicateurs, description des issues, ordre et répétition.",
   "exo": "Préparez un exercice de probabilités qui piège l'intuition (deux dés, deux pièces) et le tableau ou l'arbre qui permet de le résoudre.",
   "q": "Vos élèves interprètent-ils un résultat statistique ou probabiliste, ou se contentent-ils de le calculer ?"
  }
 ],
 "cas": {
  "t": "L'élève de 1re qui bloque partout",
  "s": "Pape, en 1re S2, échoue à tous les exercices sur les fonctions et les dérivées. En l'observant, vous voyez qu'il se trompe dans les fractions et oublie les parenthèses quand il remplace x par une valeur négative.",
  "q": [
   "Où se trouve réellement la difficulté ?",
   "Comment organisez-vous les séances ?",
   "Comment le lui présentez-vous ?"
  ],
  "r": [
   "Dans le calcul de base (fractions, signes, parenthèses), pas dans les fonctions elles-mêmes.",
   "Un temps court de calcul ciblé à chaque séance, puis le chapitre de la classe ; à chaque erreur de calcul, la noter dans le carnet d'erreurs.",
   "Comme une réparation ciblée : « tu comprends les fonctions ; deux outils de calcul te font perdre les points, on les répare »."
  ]
 },
 "atelier": {
  "t": "Votre carte des obstacles par domaine",
  "c": "Pour chacun des cinq domaines, écrivez les trois erreurs que vous rencontrez le plus chez vos élèves, la règle fausse qui les explique, et l'image ou l'activité que vous utiliserez pour les corriger."
 },
 "outil": {
  "t": "Aide-mémoire didactique des mathématiques",
  "usage": "À relire avant de préparer une séance sur un nouveau chapitre.",
  "lignes": [
   "## Nombres et calcul",
   "Droite graduée · estimation avant calcul · calcul mental quotidien · pièges : décimaux, fractions, relatifs, priorités, puissances.",
   "## Calcul littéral et équations",
   "Trois rôles de la lettre · aire pour la distributivité et les identités · balance pour les équations · mise en équation en étapes · sens de l'inégalité avec un négatif.",
   "## Géométrie",
   "Dessin ≠ preuve · raisonnement à rebours · liste « Si… alors… » · propriété ≠ réciproque · conditions d'application.",
   "## Fonctions",
   "Situation, formule, tableau, courbe · image et antécédent · dérivée = pente, vitesse.",
   "## Statistiques et probabilités",
   "Sens des indicateurs · description des issues · arbres et tableaux · ordre et répétition avant les formules."
  ]
 },
 "actions": [
  "Ouvrir chaque séance de collège par cinq minutes de calcul mental",
  "Faire tenir à chaque élève la liste « Si… alors… » des propriétés de géométrie",
  "Faire seulement poser l'équation, sans résoudre, sur trois problèmes par chapitre"
 ],
 "quiz": [
  [
   "Pourquoi 2,15 paraît-il plus grand que 2,5 à certains élèves ?",
   [
    "Parce qu'ils comparent 15 et 5 comme des entiers",
    "Parce qu'ils ont mal lu",
    "Parce que c'est vrai"
   ],
   0,
   "Une règle des entiers étendue aux décimaux."
  ],
  [
   "Quelle image aide à comprendre que (a + b)² ≠ a² + b² ?",
   [
    "La balance",
    "Le carré découpé en quatre morceaux",
    "La droite graduée"
   ],
   1,
   "Le découpage fait apparaître le terme 2ab."
  ],
  [
   "Quelle est la difficulté majeure des équations ?",
   [
    "La résolution",
    "La mise en équation",
    "La vérification"
   ],
   1,
   "Elle s'enseigne en étapes."
  ],
  [
   "Que se passe-t-il quand on multiplie une inéquation par un nombre négatif ?",
   [
    "Rien",
    "Le sens de l'inégalité change",
    "On obtient une équation"
   ],
   1,
   "2 < 3 mais −2 > −3."
  ],
  [
   "Comment construire une démonstration ?",
   [
    "En décrivant la figure",
    "À rebours, à partir de ce qu'il faut démontrer",
    "En mesurant"
   ],
   1,
   "Quelles propriétés permettent de conclure ?"
  ],
  [
   "Quelles sont les quatre formes d'une fonction ?",
   [
    "Situation, formule, tableau, courbe",
    "Addition, soustraction, multiplication, division",
    "Image, antécédent, axe, origine"
   ],
   0,
   "Comprendre, c'est passer de l'une à l'autre."
  ],
  [
   "Avec deux dés, quelle somme est la plus probable ?",
   [
    "Toutes sont également probables",
    "7",
    "12"
   ],
   1,
   "6 cas sur 36."
  ],
  [
   "Quelles questions poser avant un calcul de dénombrement ?",
   [
    "L'ordre compte-t-il ? Les répétitions sont-elles possibles ?",
    "Quelle est la formule ? Quel est le résultat ?",
    "Combien de temps ai-je ?"
   ],
   0,
   "Elles orientent vers le bon outil."
  ]
 ],
 "sources": [
  [
   "Programmes officiels sénégalais et livrets de classe (vos documents de référence) — à consulter pour la répartition exacte des notions par classe",
   ""
  ],
  [
   "Rosenshine, B. (2012). Principles of Instruction. American Educator, 36(1)",
   "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf"
  ],
  [
   "Pólya, G. (1945). How to Solve It (Comment poser et résoudre un problème)",
   ""
  ]
 ],
 "veille": [
  2,
  5
 ]
},
{
 "id": "physique",
 "n": 13,
 "pole": "C",
 "court": "Didactique de la PC",
 "titre": "Enseigner la physique-chimie",
 "but": "Faire comprendre les phénomènes avant les formules, et corriger les idées reçues propres à la physique-chimie.",
 "objectifs": [
  "Pratiquer la démarche expérimentale, même à domicile",
  "Maîtriser grandeurs, unités et conversions",
  "Corriger les conceptions erronées en électricité et en mécanique",
  "Enseigner la chimie par les modèles et la conservation"
 ],
 "lecons": [
  {
   "id": "physique-1",
   "t": "Démarche expérimentale, grandeurs et unités",
   "p": [
    "La physique-chimie se distingue des mathématiques par son objet : elle explique des phénomènes réels. Une notion se comprend mieux quand on part d'une observation (une lampe qui brille moins, un objet qui tombe, une solution qui change de couleur), qu'on formule une hypothèse, qu'on la teste, puis qu'on en tire une loi.",
    "À domicile, sans laboratoire, la démarche reste possible : expériences simples avec du matériel courant (pile, ampoule, balance de cuisine, verre d'eau, sel, sucre), mesures dans la maison, vidéos d'expériences commentées. L'important est que l'élève observe et prévoie avant que vous n'expliquiez.",
    "Les grandeurs et les unités sont la grammaire de la discipline. Une valeur sans unité n'a pas de sens ; une formule appliquée avec des unités incohérentes donne un résultat faux. Faites systématiquement écrire la grandeur, son symbole et son unité, et entraînez les conversions comme un automatisme."
   ],
   "appro": [
    "Enseignez une méthode de conversion unique et sûre, par exemple le tableau de conversion ou les puissances de 10, plutôt que des astuces différentes selon les cas. Les conversions de surfaces, de volumes et de vitesses (km/h en m/s) sont les plus piégeuses.",
    "Faites contrôler la vraisemblance de chaque résultat : une voiture à 300 m/s, une masse de 5 000 kg pour un élève ou une intensité de 200 A dans une lampe de poche doivent alerter. Ce réflexe rattrape de nombreuses erreurs d'unités."
   ],
   "ex": "Avant d'expliquer la masse volumique, demander : « Un litre d'huile pèse-t-il plus ou moins qu'un litre d'eau ? » L'élève prévoit, on vérifie avec une balance de cuisine ou une vidéo, puis on définit ρ = m/V et on calcule.",
   "fm": "Vos supports de physique-chimie peuvent ouvrir chaque chapitre par une observation ou une question de prévision, sur le modèle de l'activité qui ouvre vos cours de mathématiques.",
   "err": "Commencer par la formule et faire des applications numériques. L'élève calcule sans savoir ce que représente la grandeur.",
   "cle": "Observer et prévoir avant d'expliquer ; grandeur, symbole et unité à chaque calcul.",
   "exo": "Préparez une expérience ou une observation réalisable à domicile pour le chapitre de physique-chimie que vous enseignez, avec la question de prévision à poser.",
   "q": "Dans vos séances de physique-chimie, l'élève observe-t-il un phénomène, ou seulement des formules ?"
  },
  {
   "id": "physique-2",
   "t": "Électricité et mécanique : corriger les idées reçues",
   "p": [
    "L'élève arrive avec des idées construites par l'expérience quotidienne, souvent fausses du point de vue scientifique, et très résistantes. Les connaître permet de les faire émerger et de les corriger, au lieu de les laisser coexister avec la leçon.",
    "En électricité, les plus fréquentes : le courant serait « consommé » par la lampe (il y en aurait moins après qu'avant) ; la pile serait un réservoir de courant ; la tension et l'intensité seraient la même chose. L'analogie du circuit d'eau en boucle, avec la pompe pour la pile, aide à corriger ces idées : l'eau circule, elle n'est pas consommée.",
    "En mécanique : un objet en mouvement aurait besoin d'une force pour continuer à avancer ; un objet lourd tomberait plus vite qu'un objet léger ; masse et poids seraient synonymes. Le principe d'inertie heurte l'intuition, car sur Terre les frottements arrêtent tout ; il faut le faire comprendre par des situations où les frottements sont faibles."
   ],
   "appro": [
    "Faites d'abord exprimer la conception de l'élève par une question de prévision : « Si on ajoute une deuxième lampe en série, que deviennent les éclats ? » Puis confrontez à l'observation ou au calcul. Une idée reçue ne disparaît que si l'élève constate qu'elle ne marche pas.",
    "En mécanique, imposez le bilan des forces avant tout calcul : système étudié, liste des forces, représentation par des vecteurs. Cette étape organise la résolution et évite d'oublier une force ou d'en inventer une."
   ],
   "ex": "Mesurer l'intensité avant et après une lampe dans un circuit en série (ou montrer la mesure en vidéo) : les deux valeurs sont égales. L'élève qui pensait que la lampe « consomme » le courant voit son idée contredite, et l'on peut parler d'énergie convertie plutôt que de courant consommé.",
   "fm": "Ces idées reçues sont des pièges classiques, et donc d'excellents sujets pour vos vidéos et vos fiches « erreur fréquente ».",
   "err": "Expliquer la bonne loi sans faire émerger l'idée fausse de l'élève. Il récite la loi pour le devoir et garde son intuition pour le reste.",
   "cle": "Faire prévoir, confronter à l'observation, puis expliquer ; bilan des forces avant tout calcul.",
   "exo": "Listez trois idées reçues de vos élèves en électricité ou en mécanique, et pour chacune la question de prévision et l'observation qui la contredit.",
   "q": "Quelle idée reçue en physique avez-vous déjà entendue chez un élève, et l'avez-vous réellement corrigée ?"
  },
  {
   "id": "physique-3",
   "t": "Chimie : modèles, équations et conservation",
   "p": [
    "La chimie demande de passer constamment entre trois niveaux : ce que l'on observe (une couleur, un gaz, un dépôt), le modèle microscopique (atomes, molécules, ions) et l'écriture symbolique (formules, équations). L'élève en difficulté reste souvent bloqué dans un seul niveau, généralement les symboles appris par cœur.",
    "Le principe central est la conservation : au cours d'une réaction chimique, les atomes se réarrangent, ils ne disparaissent pas et ne se créent pas. C'est ce qui justifie l'équilibrage des équations et la conservation de la masse. Une équation équilibrée n'est pas un exercice de calcul : c'est l'écriture de cette conservation.",
    "Les erreurs typiques : équilibrer en modifiant les indices des formules au lieu des coefficients ; confondre masse et quantité de matière ; croire qu'une substance disparaît lors d'une dissolution ; confondre molécule et atome."
   ],
   "appro": [
    "Utilisez des modèles concrets : boules de pâte à modeler ou cercles dessinés pour représenter les atomes, réarrangés d'un côté à l'autre de l'équation. L'élève voit alors pourquoi on change les coefficients et jamais les indices : changer un indice changerait la substance.",
    "Pour la mole et la quantité de matière, au lycée, partez d'une analogie de comptage par paquets (une douzaine, une rame de papier) avant la définition. Puis entraînez les relations n = m/M et C = n/V avec un tableau d'avancement clair."
   ],
   "ex": "Combustion du méthane : CH₄ + O₂ → CO₂ + H₂O. On compte les atomes de chaque côté, on ajuste les coefficients : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Avec des cercles dessinés, l'élève vérifie qu'il retrouve un carbone, quatre hydrogènes et quatre oxygènes de chaque côté.",
   "fm": "Votre standard de production impose de vérifier chaque calcul : appliquez la même rigueur à l'équilibrage des équations et aux calculs de quantité de matière de vos corrigés.",
   "err": "Équilibrer une équation en changeant un indice (écrire H₂O₂ au lieu de 2 H₂O). L'élève a changé la substance sans s'en rendre compte.",
   "cle": "Observation, modèle, symbole ; les atomes se conservent, on change les coefficients, jamais les indices.",
   "exo": "Préparez trois équations à équilibrer de difficulté croissante, avec leur représentation par des cercles pour la première.",
   "q": "Vos élèves comprennent-ils pourquoi on équilibre une équation, ou appliquent-ils seulement une technique ?"
  }
 ],
 "cas": {
  "t": "« La pile est vide parce que les lampes ont pris tout le courant »",
  "s": "Lors d'une séance sur les circuits en 4e, Aïda explique qu'une pile s'use parce que les lampes « prennent le courant ». Elle a pourtant appris la loi d'unicité de l'intensité dans un circuit en série.",
  "q": [
   "Que révèle sa phrase ?",
   "Comment la faites-vous évoluer ?",
   "Comment vérifiez-vous qu'elle a changé d'idée ?"
  ],
  "r": [
   "Une conception erronée (courant consommé) qui coexiste avec la loi apprise par cœur.",
   "Prévision sur l'intensité avant et après la lampe, mesure ou vidéo, puis analogie du circuit d'eau ; distinguer le courant, qui circule, de l'énergie, qui est transférée.",
   "Une question nouvelle : prévoir l'intensité dans plusieurs points d'un circuit, et expliquer avec ses mots pourquoi la pile s'use."
  ]
 },
 "atelier": {
  "t": "Votre banque d'expériences et d'idées reçues",
  "c": "Pour quatre chapitres de physique-chimie que vous enseignez, notez une expérience réalisable à domicile ou une vidéo, la question de prévision associée, et l'idée reçue la plus fréquente avec sa correction."
 },
 "outil": {
  "t": "Aide-mémoire didactique de la physique-chimie",
  "usage": "À relire avant de préparer une séance de physique-chimie.",
  "lignes": [
   "## Démarche",
   "Observer · prévoir · tester · conclure · formaliser.",
   "## Calcul",
   "Grandeur, symbole, unité · conversions par une méthode unique · expression littérale avant l'application numérique · contrôle de vraisemblance.",
   "## Électricité",
   "Le courant circule, il n'est pas consommé · la pile n'est pas un réservoir de courant · tension ≠ intensité · analogie du circuit d'eau.",
   "## Mécanique",
   "Bilan des forces d'abord · inertie · masse ≠ poids · la chute ne dépend pas de la masse (sans frottements).",
   "## Chimie",
   "Observation, modèle, symbole · conservation des atomes · coefficients et jamais indices · masse ≠ quantité de matière."
  ]
 },
 "actions": [
  "Ouvrir chaque chapitre de physique-chimie par une question de prévision",
  "Exiger grandeur, symbole et unité dans chaque calcul",
  "Tenir une liste des idées reçues rencontrées et de leur correction"
 ],
 "quiz": [
  [
   "Par quoi commencer une notion de physique-chimie ?",
   [
    "Par la formule",
    "Par une observation et une question de prévision",
    "Par un exercice d'application"
   ],
   1,
   "L'élève prévoit avant que vous n'expliquiez."
  ],
  [
   "Que vaut une valeur numérique sans unité ?",
   [
    "Elle suffit",
    "Elle n'a pas de sens physique",
    "Elle est en unité internationale"
   ],
   1,
   "Grandeur, symbole et unité à chaque calcul."
  ],
  [
   "Le courant est-il consommé par une lampe dans un circuit en série ?",
   [
    "Oui",
    "Non, l'intensité est la même avant et après",
    "Seulement si la pile est faible"
   ],
   1,
   "C'est l'énergie qui est convertie, pas le courant."
  ],
  [
   "Comment corriger une idée reçue ?",
   [
    "En répétant la bonne loi",
    "En la faisant exprimer puis en la confrontant à l'observation",
    "En l'ignorant"
   ],
   1,
   "L'élève doit constater qu'elle ne marche pas."
  ],
  [
   "Que faire avant tout calcul en mécanique ?",
   [
    "Le bilan des forces",
    "Choisir la calculatrice",
    "Écrire le résultat attendu"
   ],
   0,
   "Système, forces, vecteurs."
  ],
  [
   "Masse et poids sont-ils la même grandeur ?",
   [
    "Oui",
    "Non : la masse en kg, le poids est une force en N",
    "Seulement sur la Lune"
   ],
   1,
   "P = m × g."
  ],
  [
   "Comment équilibre-t-on une équation chimique ?",
   [
    "En changeant les indices",
    "En changeant les coefficients",
    "En ajoutant des atomes"
   ],
   1,
   "Changer un indice change la substance."
  ],
  [
   "Quel principe justifie l'équilibrage ?",
   [
    "La conservation des atomes",
    "La vitesse de réaction",
    "La température"
   ],
   0,
   "Les atomes se réarrangent sans disparaître."
  ]
 ],
 "sources": [
  [
   "Programmes officiels sénégalais et livrets de classe (vos documents de référence) — à consulter pour la répartition exacte des notions par classe",
   ""
  ],
  [
   "Conceptions des élèves en sciences : travaux de didactique de la physique (par exemple Driver, R. et al., 1985, Children's Ideas in Science)",
   ""
  ]
 ],
 "veille": [
  5
 ]
},
{
 "id": "seance",
 "n": 14,
 "pole": "C",
 "court": "Conduire une séance",
 "titre": "Concevoir et conduire une séance à domicile",
 "but": "Préparer, mener et conclure une séance à domicile avec la même qualité chez chaque famille.",
 "objectifs": [
  "Structurer une séance autour d'un objectif unique",
  "Préparer une séance en quinze minutes",
  "Questionner et guider sans faire à la place",
  "Tenir le cadre professionnel au domicile de la famille"
 ],
 "lecons": [
  {
   "id": "seance-1",
   "t": "Construire une séance",
   "p": [
    "Une bonne séance a un objectif unique, annoncé au début et vérifié à la fin. Elle va du guidé à l'autonome : un exemple modèle, un exercice fait ensemble, un exercice fait seul.",
    "Elle se termine par un travail précis pour la séance suivante et par deux lignes de compte rendu pour le parent.",
    "Une séance de deux heures peut se découper ainsi, à titre de repère : dix minutes de rappel cahier fermé, vingt-cinq minutes de notion avec un exemple modèle, trente-cinq minutes de pratique guidée, trente-cinq minutes de pratique autonome, dix minutes de bilan et de travail à faire, cinq minutes de compte rendu. Les proportions comptent plus que les minutes : plus de la moitié du temps, c'est l'élève qui travaille.",
    "La fin de séance est le moment le plus souvent sacrifié. Réservez-la dès le début : c'est là que l'élève dit ce qu'il a appris et que vous vérifiez l'objectif."
   ],
   "appro": [
    "Chaque phase a un signal de passage. On quitte l'exemple modèle quand l'élève peut en redire les étapes ; on quitte la pratique guidée quand il réussit avec un simple indice ; on termine la pratique autonome quand il réussit sans aide un exercice nouveau. Passer à la suite parce que l'heure avance, sans ce signal, laisse l'élève en chemin.",
    "Prévoyez toujours un plan B. Si le prérequis manque, la séance prévue devient impossible : il faut alors traiter le prérequis et réduire l'objectif. Si l'élève réussit très vite, l'exercice de réserve et un exercice de type examen évitent de meubler. Dans les deux cas, dites-le dans le compte rendu.",
    "La séance de 1 h 30 n'est pas une séance de 2 heures raccourcie au hasard : gardez l'ouverture et le bilan intacts, et réduisez d'abord le nombre d'exercices, jamais le temps de pratique autonome en dessous d'un tiers de la séance."
   ],
   "ex": "Objectif annoncé : « À la fin de la séance, tu sauras résoudre un système de deux équations par substitution. » Vérification finale : un système nouveau, résolu seul en dix minutes.",
   "fm": "Vos cours suivent ce déroulé : activité, définition, exemple modèle, exercice d'application corrigé. Votre fiche de séance détaille les phases et leur durée.",
   "err": "Passer la séance à faire les devoirs du lendemain. L'élève est dépanné, le parent est content ce soir-là, mais rien n'a été appris de durable.",
   "cle": "Un objectif par séance, du guidé à l'autonome, un compte rendu à la fin.",
   "exo": "Écrivez le déroulé minuté de votre prochaine séance, avec pour chaque phase le signal qui vous fera passer à la suivante.",
   "q": "Lors de votre dernière séance, quel était l'objectif unique, et comment avez-vous vérifié qu'il était atteint ?",
   "v1": "L5-1"
  },
  {
   "id": "seance-2",
   "t": "Préparer en quinze minutes",
   "p": [
    "Une séance improvisée dépend de votre forme du jour. Une séance préparée, même brièvement, garantit le niveau. Quinze minutes suffisent si la préparation suit toujours les mêmes questions.",
    "Première question : où en est la classe ? Le cours à domicile est le plus efficace quand il est relié à ce qui se fait en classe. Demandez le cahier de cours et le cahier de textes, et notez le chapitre en cours et la date du prochain devoir.",
    "Deuxième question : quel est l'objectif, formulé comme une capacité observable ? « L'élève sera capable de factoriser avec une identité remarquable » se vérifie ; « revoir les identités remarquables » ne se vérifie pas.",
    "Troisième question : avec quoi ? Un exemple modèle, deux exercices guidés, deux exercices autonomes de difficulté croissante, un exercice de réserve. Dernière question : quel prérequis risque de manquer, et comment le tester en deux minutes au début ?"
   ],
   "appro": [
    "Gardez une fiche par élève, tenue en deux minutes après chaque séance : ce qui a été fait, ce qui a résisté, ce qui est prévu. Avec dix élèves, vous ne pouvez pas tout retenir, et c'est cette fiche qui rend la préparation rapide. Elle sert aussi de base au bilan mensuel.",
    "Choisissez les exercices avant la séance, pas pendant. Chercher un exercice devant l'élève fait perdre du temps et donne une impression d'improvisation. Marquez-les dans le support, avec la solution vérifiée à portée de main.",
    "Préparez enfin la question d'entrée et la question de sortie. La première vérifie le prérequis ; la seconde vérifie l'objectif. Si vous ne pouvez pas écrire la question de sortie, c'est que l'objectif n'est pas encore assez précis."
   ],
   "ex": "Fiche de préparation : « Samedi, Awa, 3e. Classe : chapitre racines carrées, devoir le 20. Objectif : simplifier une racine carrée. Prérequis à tester : carrés parfaits jusqu'à 144. Exemple modèle : √72. Guidés : √50, √108. Autonomes : exercices 4 et 6. Réserve : exercice 9. »",
   "fm": "Votre fiche de séance détaille déjà les phases et leur durée. Vos kits de chapitre (cours, exercices, corrigés, révision) fournissent l'exemple modèle et les exercices : la préparation consiste surtout à choisir.",
   "err": "Préparer un contenu trop ambitieux « pour être sûr d'occuper les deux heures ». Un objectif atteint vaut mieux que trois objectifs survolés.",
   "cle": "Quatre questions : où en est la classe, quel objectif observable, quels exercices, quel prérequis.",
   "exo": "Créez votre modèle de fiche élève (une ligne par séance : date, fait, difficulté, suite) et remplissez-le pour vos deux derniers cours.",
   "q": "Savez-vous, pour chaque élève, quel chapitre est en cours en classe et la date de son prochain devoir ?"
  },
  {
   "id": "seance-3",
   "t": "Questionner et guider",
   "p": [
    "Les travaux de Barak Rosenshine sur les enseignants les plus efficaces montrent des constantes : ils posent beaucoup de questions, vérifient la compréhension de chaque étape, consacrent plus de temps à la pratique guidée et corrigent les erreurs tout de suite. Ils visent aussi un taux de réussite élevé pendant l'entraînement, de l'ordre de 80 % : assez pour installer la confiance, pas trop pour que l'élève reste en effort.",
    "« Tu as compris ? » n'est pas une question : l'élève répond oui. Demandez-lui plutôt d'expliquer, de donner un exemple, de dire ce qu'il ferait ensuite, de repérer l'erreur dans une solution fausse.",
    "Laissez du silence. Après une question, attendez quelques secondes avant de reformuler ou d'aider. C'est dans ce temps que l'élève cherche.",
    "Guider, c'est aider juste ce qu'il faut puis retirer l'aide. On montre un exemple complet ; on en fait un second ensemble, l'élève dictant les étapes ; il fait le troisième avec un indice ; le quatrième seul. Si le quatrième échoue, on revient d'un cran, sans reproche."
   ],
   "appro": [
    "Distinguez trois sortes de questions. Les questions de rappel vérifient ce qui est su. Les questions de compréhension demandent d'expliquer ou de justifier. Les questions de transfert changent la situation : « et si le triangle n'était pas rectangle ? ». Une séance qui ne pose que des questions de rappel n'apprend pas à raisonner.",
    "Quand la réponse est fausse, résistez à l'envie de corriger tout de suite. Demandez comment l'élève a trouvé ; souvent le raisonnement est juste jusqu'à un point précis. Valorisez ce qui est correct, puis faites porter la correction sur ce point.",
    "Parlez moins. Mesurez-vous une fois : dans une heure, combien de minutes avez-vous parlé, et combien l'élève a-t-il écrit ou expliqué ? En cours particulier, l'élève devrait produire au moins autant que vous. Le silence pendant qu'il cherche est du temps de travail."
   ],
   "ex": "Au lieu de « Tu as compris la substitution ? » : « Explique-moi pourquoi on remplace y dans la deuxième équation. » Puis : « Voici une solution, il y a une erreur à la ligne 2 ou 3. Trouve-la. »",
   "fm": "La séance « du guidé à l'autonome » de vos cours est exactement cette aide que l'on retire progressivement. Notez dans le compte rendu à quel niveau d'aide l'élève a réussi.",
   "err": "Enchaîner les explications parce que l'élève hoche la tête. Sans question qui l'oblige à produire, vous ne savez pas ce qu'il a compris.",
   "cle": "Faire expliquer plutôt que demander « compris ? », attendre, puis retirer l'aide pas à pas.",
   "exo": "Écrivez cinq questions pour votre prochaine séance : deux de rappel, deux de compréhension, une de transfert.",
   "q": "Quelles questions posez-vous pour vérifier la compréhension, en dehors de « tu as compris ? »"
  },
  {
   "id": "seance-4",
   "t": "Le cadre professionnel à domicile",
   "p": [
    "Vous travaillez chez les gens. La qualité perçue commence avant le premier exercice : arriver à l'heure, saluer la famille, avoir son matériel, commencer sans délai. Un retard se prévient par un message, toujours.",
    "Demandez dès le début un lieu de travail : une table, de la lumière, le moins de passage possible, la télévision éteinte. Le téléphone de l'élève reste hors de portée ; le vôtre aussi, sauf pour l'heure.",
    "Travaillez dans un espace ouvert ou à portée de vue d'un adulte de la maison. C'est une règle de prudence qui protège l'élève, la famille et vous-même. Gardez une distance professionnelle : cordial, jamais familier ; aucune remarque sur la maison ou la vie de la famille.",
    "Terminez à l'heure et de la même façon : l'élève range, vous notez le travail à faire dans son cahier, vous dites un mot au parent présent, et le compte rendu écrit part le soir même."
   ],
   "appro": [
    "Établissez le cadre dès la première visite, en présence du parent et de l'élève : lieu, horaire, téléphone, travail à faire, façon de prévenir en cas d'empêchement. Ce qui est dit ce jour-là devant tout le monde n'a plus à être renégocié en tête-à-tête.",
    "Restez à votre place dans la famille. Vous entendrez et verrez des choses de la vie du foyer : ne les commentez pas, ne les répétez à personne, ne prenez pas parti entre un parent et son enfant. Refusez poliment ce qui dépasse votre rôle, comme garder un autre enfant ou faire travailler une matière non prévue.",
    "Soignez les détails qui signalent le sérieux : tenue correcte, matériel complet (supports imprimés, stylos, règle, calculatrice), téléphone en silencieux, et quelques minutes d'avance pour ne jamais commencer en retard."
   ],
   "ex": "Premier jour chez une famille : « Pour qu'Abdou travaille bien, il nous faudrait une table au calme, si possible toujours la même, et que son téléphone reste dans une autre pièce pendant la séance. Est-ce possible ? »",
   "fm": "Votre positionnement est « le soutien scolaire professionnel du quartier » : ce professionnalisme se prouve d'abord par la ponctualité, la tenue et la régularité des comptes rendus. Vos conditions prévoient déjà le cas des reports.",
   "err": "Accepter de travailler dans le salon, télévision allumée, « pour ne pas déranger ». La séance perd la moitié de son efficacité et vous en porterez la responsabilité.",
   "cle": "Ponctualité, lieu calme, espace ouvert, fin de séance identique à chaque fois.",
   "exo": "Rédigez les cinq règles de fonctionnement que vous énoncerez à la première visite chez une nouvelle famille.",
   "q": "Chez quelle famille les conditions de travail ne sont-elles pas bonnes, et que pouvez-vous demander ?"
  },
  {
   "id": "seance-5",
   "t": "La première séance chez une nouvelle famille",
   "p": [
    "La première séance décide souvent de la suite. La famille y juge votre ponctualité, votre façon de parler à l'enfant et la clarté de ce que vous annoncez. L'élève, lui, se demande s'il va encore subir un cours qu'il ne comprend pas. Préparez-la plus soigneusement que toutes les autres.",
    "Elle suit un déroulé particulier. Accueil et cadre (cinq minutes, avec le parent) : lieu, horaires, téléphone, travail à faire, façon de prévenir. Échange avec l'élève : ce qu'il aime, ce qui lui pose problème, ce qu'il attend. Test diagnostique court. Une première réussite sur une notion à sa portée. Clôture avec le parent : premiers constats, objectif du premier mois, date du premier bilan.",
    "Le soir même, envoyez un compte rendu un peu plus complet que d'habitude : résultats du diagnostic en trois points, plan des premières semaines, et remerciement pour la confiance. C'est le premier document écrit que la famille reçoit de vous ; il installe le ton de toute la relation."
   ],
   "appro": [
    "Ne commencez pas par le chapitre le plus difficile, même si un devoir approche. L'élève doit repartir de cette séance avec le sentiment d'avoir compris quelque chose ; c'est cette première réussite qui le rendra coopératif. Le devoir pourra être préparé dès la deuxième séance, sur des bases plus sûres.",
    "Observez autant que vous enseignez : façon de lire un énoncé, réaction à l'erreur, concentration, tenue du cahier. Notez ces observations après la séance ; elles alimentent la grille de profil du module « Profils d'élèves »."
   ],
   "ex": "Première séance avec Bintou, 4e : présentation du cadre avec sa mère, cinq minutes d'échange (« qu'est-ce qui est le plus difficile pour toi en maths ? »), test de vingt minutes, puis une notion de calcul fractionnaire réussie trois fois de suite. Avant de partir : « Bintou maîtrise les opérations de base ; nous allons consolider les fractions avant le prochain devoir. Premier bilan le 30. »",
   "fm": "Le parcours d'accueil du module « Relation parents » prévoit cette séance ; vos tests diagnostiques et le kit de révision des prérequis en sont les supports.",
   "err": "Faire de la première séance un cours ordinaire sur le chapitre du moment. Vous manquez le diagnostic, le cadre et la première impression.",
   "cle": "Cadre, échange, diagnostic, première réussite, objectif annoncé, compte rendu le soir même.",
   "exo": "Rédigez votre déroulé type de première séance et le modèle du compte rendu envoyé le soir même.",
   "q": "Que retient aujourd'hui une famille de votre première séance chez elle ?"
  }
 ],
 "cas": {
  "t": "La séance qui dérape",
  "s": "Vous arrivez chez les Diop pour une séance sur les fonctions affines. L'élève annonce : « J'ai un devoir de physique demain, on peut faire ça à la place ? » Le petit frère joue à côté et la télévision est allumée.",
  "q": [
   "Que décidez-vous pour le contenu de la séance ?",
   "Que faites-vous pour les conditions de travail ?",
   "Qu'écrivez-vous au parent le soir ?"
  ],
  "r": [
   "Un compromis cadré : un temps limité pour préparer le devoir avec méthode, puis l'objectif prévu, réduit. Rappeler qu'à l'avenir les devoirs se signalent à l'avance.",
   "Demander calmement à un adulte un endroit plus calme ou l'arrêt de la télévision, comme convenu au départ.",
   "Un compte rendu factuel : ce qui a été fait, l'ajustement et sa raison, le travail pour la prochaine séance, et la demande de vous prévenir des devoirs à venir."
  ]
 },
 "atelier": {
  "t": "Votre fiche de préparation type",
  "c": "Rédigez la fiche de préparation de votre prochaine séance réelle : élève et classe, chapitre en cours en classe, date du prochain devoir, objectif observable, prérequis à tester, exemple modèle, exercices guidés, exercices autonomes, exercice de réserve, vérification finale."
 },
 "outil": {
  "t": "Déroulé d'une séance de 2 heures",
  "usage": "Repère à adapter ; pour 1 h 30, réduire chaque phase dans les mêmes proportions.",
  "lignes": [
   "## 0:00 — Ouverture (10 min)",
   "Cinq questions de rappel cahier fermé ; test du prérequis ; annonce de l'objectif.",
   "## 0:10 — Notion et exemple modèle (25 min)",
   "Activité ou situation, définition ou propriété, un exemple entièrement résolu et commenté.",
   "## 0:35 — Pratique guidée (35 min)",
   "Deux exercices faits ensemble, l'élève dicte les étapes ; questions de vérification.",
   "## 1:10 — Pratique autonome (35 min)",
   "Deux exercices seul, difficulté croissante ; retour précis sur la méthode.",
   "## 1:45 — Bilan (10 min)",
   "L'élève dit ce qu'il a appris ; exercice de vérification de l'objectif ; travail à faire noté.",
   "## 1:55 — Clôture (5 min)",
   "Rangement, mot au parent, compte rendu écrit le soir même."
  ]
 },
 "actions": [
  "Remplir une fiche de préparation avant chaque séance pendant deux semaines",
  "Demander à chaque famille un lieu de travail calme et fixe",
  "Terminer chaque séance par un exercice de vérification de l'objectif"
 ],
 "quiz": [
  [
   "Comment se déroule une bonne séance ?",
   [
    "Du guidé à l'autonome",
    "Uniquement des exercices seuls",
    "Uniquement du cours dicté"
   ],
   0,
   "Exemple modèle, exercice ensemble, exercice seul."
  ],
  [
   "Qui travaille plus de la moitié du temps dans une bonne séance ?",
   [
    "L'encadreur",
    "L'élève",
    "Le parent"
   ],
   1,
   "Pratique guidée puis autonome occupent la plus grande part."
  ],
  [
   "Comment formuler un objectif de séance ?",
   [
    "« Revoir le chapitre »",
    "Comme une capacité observable : « l'élève sera capable de… »",
    "« Avancer le plus possible »"
   ],
   1,
   "Un objectif observable se vérifie à la fin."
  ],
  [
   "Quel taux de réussite viser pendant l'entraînement, selon Rosenshine ?",
   [
    "Environ 80 %",
    "Environ 30 %",
    "100 % dès le premier exercice"
   ],
   0,
   "Assez pour la confiance, pas trop pour garder l'effort."
  ],
  [
   "Par quoi remplacer « tu as compris ? » ?",
   [
    "Par « explique-moi pourquoi… »",
    "Par « tu es sûr ? »",
    "Par rien"
   ],
   0,
   "On fait produire une explication ou un exemple."
  ],
  [
   "Que faire si l'élève échoue seul au quatrième exercice ?",
   [
    "Passer au chapitre suivant",
    "Revenir d'un cran dans l'aide, sans reproche",
    "Refaire tout le cours"
   ],
   1,
   "On retire l'aide progressivement, et on la remet si besoin."
  ],
  [
   "Où travailler au domicile de la famille ?",
   [
    "Dans une chambre fermée",
    "Dans un espace calme, ouvert ou à portée de vue d'un adulte",
    "Devant la télévision"
   ],
   1,
   "Règle de prudence qui protège tout le monde."
  ],
  [
   "Que demander pour relier la séance à la classe ?",
   [
    "Le bulletin de l'an dernier",
    "Le cahier de cours, le cahier de textes et la date du prochain devoir",
    "Rien"
   ],
   1,
   "Le tutorat est plus efficace quand il est relié à la classe."
  ]
 ],
 "sources": [
  [
   "Rosenshine, B. (2012). Principles of Instruction. American Educator, 36(1)",
   "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf"
  ],
  [
   "Education Endowment Foundation — One to one tuition",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ],
  [
   "Fiche de séance et kits de chapitre FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  2,
  5
 ]
},
{
 "id": "profils",
 "n": 15,
 "pole": "C",
 "court": "Profils d'élèves",
 "titre": "Profils d'élèves et différenciation",
 "but": "Reconnaître ce qui bloque chaque élève et adapter l'accompagnement, de l'élève avancé à l'élève très fragile, seul ou en groupe.",
 "objectifs": [
  "Identifier le profil et la source du blocage",
  "Adapter l'accompagnement à l'élève avancé et à l'élève fragile",
  "Repérer les signes de troubles des apprentissages et adapter sans diagnostiquer",
  "Enseigner à plusieurs : fratries, petits groupes, stages"
 ],
 "lecons": [
  {
   "id": "profils-1",
   "t": "Identifier ce qui bloque vraiment",
   "p": [
    "Deux élèves qui ont la même note peuvent avoir des besoins opposés. L'un manque de bases, l'autre de méthode, un troisième de motivation, un quatrième perd ses moyens en devoir. Le même accompagnement ne peut pas convenir à tous ; il faut d'abord savoir ce qui bloque.",
    "Six sources de blocage reviennent : les bases (prérequis non acquis), la méthode (l'élève ne sait pas s'y prendre), le travail personnel (rien n'est fait entre les séances), la motivation (il ne voit pas l'intérêt ou se croit incapable), l'attention (il décroche vite), l'anxiété (il sait faire mais échoue sous pression). Souvent plusieurs se combinent.",
    "Le diagnostic croise trois sources : le test d'entrée (les bases), l'observation pendant les premières séances (méthode, attention, réaction à l'erreur), et l'échange avec l'élève et le parent (travail à la maison, vécu des devoirs). Une seule source ne suffit pas."
   ],
   "appro": [
    "Observez l'élève au travail plutôt que son résultat. Comment commence-t-il un exercice ? Que fait-il quand il bloque ? Combien de temps reste-t-il concentré ? Comment réagit-il à une erreur ? Ces observations, notées dès les premières séances, en disent plus qu'une note.",
    "Revoyez le profil chaque trimestre. Un élève dont les bases sont réparées peut révéler un problème de méthode ; un élève qui reprend confiance peut révéler des lacunes qu'il masquait. Le profil évolue, l'accompagnement aussi."
   ],
   "ex": "Deux élèves de 3e à 9/20. Diagnostic : Abdou a des bases solides mais rend des copies sans rédaction ni vérification (méthode). Fatima a des lacunes en calcul depuis la 5e (bases). Plans différents : rédaction et relecture pour le premier, reconstruction du calcul pour la seconde.",
   "fm": "Votre test diagnostique d'entrée par classe couvre les bases ; ajoutez une grille d'observation des premières séances pour les cinq autres sources de blocage.",
   "err": "Appliquer le même déroulé de séance à tous les élèves d'une même classe, parce qu'ils ont le même programme.",
   "cle": "Même note ne veut pas dire même besoin : bases, méthode, travail, motivation, attention, anxiété.",
   "exo": "Pour chacun de vos élèves, cochez les sources de blocage observées et notez celle qui est prioritaire.",
   "q": "Pour quel élève avez-vous peut-être traité le mauvais blocage ?"
  },
  {
   "id": "profils-2",
   "t": "L'élève avancé et l'élève très fragile",
   "p": [
    "L'élève avancé s'ennuie vite si on lui fait refaire ce qu'il sait. Il a besoin de défi : des problèmes plus ouverts, des exercices de type examen ou concours, des démonstrations, des liens entre chapitres. Sa progression se mesure à la difficulté des problèmes qu'il résout seul, pas au nombre d'exercices.",
    "L'élève très fragile a besoin, à l'inverse, de paliers très fins, de réussites fréquentes et d'un rythme qui respecte sa capacité. Benjamin Bloom a montré, avec la pédagogie de la maîtrise, qu'un enseignement individuel qui ne passe à l'étape suivante qu'une fois la précédente maîtrisée permet à des élèves faibles de progresser très fortement.",
    "Dans les deux cas, gardez le lien avec la classe. L'élève avancé doit rester excellent sur ce qui est évalué ; l'élève fragile doit pouvoir suivre en classe, même avec un objectif réduit. Un accompagnement déconnecté de la classe perd une partie de son effet."
   ],
   "appro": [
    "Pour l'élève avancé, attention aux lacunes cachées : un élève brillant peut avoir appris à contourner une notion mal comprise. Un exercice de type examen, en temps limité, les révèle. Visez aussi la rigueur de la rédaction, souvent négligée par les élèves rapides.",
    "Pour l'élève fragile, choisissez chaque semaine un objectif atteignable et visible, et célébrez-le. Une réussite par séance, même petite, entretient l'effort. Associez le parent pour qu'il valorise ces progrès plutôt que la seule note de l'école."
   ],
   "ex": "Élève avancé de Terminale S1 : après le chapitre de la classe, un problème de concours d'entrée en école d'ingénieurs sur le même thème, à résoudre en autonomie. Élève fragile de 5e : objectif de la semaine, additionner deux fractions de dénominateurs différents, trois fois sur trois.",
   "fm": "Votre formule EXCELLENCE (annales et examen blanc mensuel) convient bien aux élèves avancés de Terminale ; les livrets de prérequis et les kits des classes inférieures servent aux élèves fragiles.",
   "err": "Garder un élève avancé sur des exercices faciles « pour consolider ». Il se désintéresse, et la famille juge l'accompagnement inutile.",
   "cle": "Défi pour l'élève avancé, paliers fins et réussites fréquentes pour l'élève fragile, lien avec la classe pour les deux.",
   "exo": "Pour votre élève le plus avancé, préparez trois problèmes de niveau supérieur ; pour le plus fragile, trois paliers d'une même notion.",
   "q": "Lequel de vos élèves avancés s'ennuie peut-être en séance ?"
  },
  {
   "id": "profils-3",
   "t": "Troubles des apprentissages : repérer et adapter sans diagnostiquer",
   "p": [
    "Certains élèves rencontrent des difficultés persistantes malgré un travail régulier et un bon accompagnement : lecture très lente ou hésitante, confusions durables entre chiffres ou symboles, grande difficulté à mémoriser les faits numériques, écriture très coûteuse, attention qui décroche en quelques minutes, agitation. Ces signes peuvent évoquer un trouble des apprentissages (dyslexie, dyscalculie, dyspraxie, trouble de l'attention).",
    "Votre rôle n'est pas de poser un diagnostic : il revient à des professionnels de santé. Il est d'observer, de noter précisément ce que vous voyez, d'en parler avec tact aux parents, et de suggérer qu'ils en discutent avec l'établissement ou un professionnel. Évitez les mots de diagnostic : décrivez des faits.",
    "En attendant, ou en complément, des adaptations simples aident beaucoup : consignes courtes et une à la fois, documents aérés avec une police lisible, lecture à voix haute des énoncés, fractionnement des tâches, temps supplémentaire, réduction du nombre d'exercices plutôt que de leur difficulté, supports visuels, pauses courtes."
   ],
   "appro": [
    "Tenez un relevé d'observations daté pendant quelques semaines : ce que l'élève réussit, ce qui reste difficile malgré l'entraînement, dans quelles conditions. Ce relevé factuel est précieux pour les parents et pour un éventuel professionnel, et il évite les impressions.",
    "Ne réduisez jamais l'élève à ses difficultés. Un trouble des apprentissages n'empêche pas de raisonner ; beaucoup de ces élèves réussissent très bien en mathématiques quand on adapte la forme. Gardez la même exigence sur le fond."
   ],
   "ex": "Message au parent : « Depuis six semaines, j'observe qu'Ibou lit les énoncés très lentement et confond souvent 6 et 9, même sur des exercices qu'il réussit à l'oral. Je lui lis désormais les consignes et cela l'aide. Il pourrait être utile d'en parler avec son professeur principal ou un professionnel, pour mieux comprendre ce qui se passe. »",
   "fm": "Le cadre de confidentialité de FayeMath Academy s'applique pleinement ici : ces observations ne se partagent qu'avec les parents, jamais dans un groupe ni avec un autre client.",
   "err": "Annoncer à un parent que son enfant « est dyslexique » ou « a un TDAH ». Ce n'est pas votre rôle, et une erreur aurait des conséquences lourdes.",
   "cle": "Observer et noter des faits, en parler avec tact, orienter vers les professionnels, adapter la forme sans baisser l'exigence.",
   "exo": "Préparez votre grille d'observation (lecture, mémorisation, écriture, attention, organisation) et la liste des cinq adaptations que vous pouvez appliquer dès la prochaine séance.",
   "q": "Un de vos élèves présente-t-il des difficultés qui résistent à tout entraînement, et qu'avez-vous noté ?"
  },
  {
   "id": "profils-4",
   "t": "Enseigner à plusieurs : fratries, petits groupes et stages",
   "p": [
    "Enseigner à deux ou plusieurs élèves change la séance. L'attention est partagée, les niveaux diffèrent, et chaque élève dispose de moins de temps individuel. La recherche montre que le tutorat en petit groupe reste efficace, d'autant plus que le groupe est petit et les besoins proches.",
    "Le plan de travail est l'outil central : chaque élève a sa liste d'exercices pour la séance, avec des paliers. Pendant que l'un travaille seul, vous expliquez à l'autre ; puis vous alternez. Préparez plus que pour une séance individuelle : dans un groupe, un temps mort se multiplie.",
    "Pour une fratrie de niveaux différents (un enfant de 6e et un de 3e), organisez la séance en rotation : explication courte à l'un pendant que l'autre fait un exercice autonome, puis l'inverse. Pour un stage de vacances, groupez les élèves par niveau et par besoin, et alternez temps collectifs (méthode, correction commune) et temps individuels."
   ],
   "appro": [
    "Utilisez les élèves les uns pour les autres, avec mesure. Expliquer à un camarade consolide l'apprentissage de celui qui explique ; corriger ensemble une erreur fréquente fait gagner du temps. Mais gardez la maîtrise : une explication fausse entre élèves s'installe vite.",
    "Fixez les règles du groupe dès le début : chacun travaille sur son plan, on lève la main ou l'on attend son tour, on ne compare pas les notes. Dans une fratrie, évitez toute comparaison entre frères et sœurs, devant eux comme devant les parents."
   ],
   "ex": "Fratrie 6e et 3e, deux heures. 0:00 rappel commun de cinq minutes. 0:05-0:30 explication au 3e pendant que le 6e fait son plan de travail. 0:30-0:55 l'inverse. Ensuite, deux blocs de pratique autonome avec passages alternés. Fin : bilan individuel de deux minutes chacun.",
   "fm": "Les fratries suivies le même jour sont une cible prioritaire de votre stratégie de vente, et le stage de vacances un format à plusieurs élèves : ce savoir-faire en conditionne la qualité.",
   "err": "Expliquer la même chose aux deux enfants d'une fratrie de niveaux différents. L'un s'ennuie, l'autre est perdu.",
   "cle": "Un plan de travail par élève, des rotations préparées, des groupes homogènes, aucune comparaison.",
   "exo": "Rédigez le déroulé d'une séance de deux heures pour une fratrie de deux niveaux différents, avec le plan de travail de chaque enfant.",
   "q": "Comment se déroulent aujourd'hui vos séances avec plusieurs enfants, et qui attend sans rien faire ?"
  }
 ],
 "cas": {
  "t": "La fratrie qui ne fonctionne pas",
  "s": "Chez les Kane, vous suivez Mariama (6e) et Oumar (Terminale S2) dans la même séance de deux heures. Mariama s'agite pendant que vous travaillez avec Oumar, et Oumar se plaint de ne pas avancer assez vite pour le Bac.",
  "q": [
   "Quel est le problème de fond ?",
   "Comment réorganisez-vous la séance ?",
   "Que proposez-vous aux parents si cela ne suffit pas ?"
  ],
  "r": [
   "Deux niveaux très éloignés dans un même créneau, sans plan de travail autonome pour la plus jeune.",
   "Plans de travail préparés pour chacun, rotations courtes, exercices autonomes adaptés à Mariama, temps continu suffisant pour Oumar.",
   "Deux créneaux distincts le même jour, consécutifs, dans le respect de la grille : la formule de chacun correspond déjà à sa classe."
  ]
 },
 "atelier": {
  "t": "Votre grille de profil d'élève",
  "c": "Construisez une grille d'une page à remplir pour chaque nouvel élève : les six sources de blocage, les observations des trois premières séances, le blocage prioritaire, les adaptations décidées et la date de révision du profil."
 },
 "outil": {
  "t": "Grille de profil et d'adaptation",
  "usage": "À remplir après les trois premières séances, puis à revoir chaque trimestre.",
  "lignes": [
   "## Sources de blocage (cocher)",
   "Bases · méthode · travail personnel · motivation · attention · anxiété.",
   "## Observations",
   "Comment il commence un exercice · ce qu'il fait quand il bloque · durée de concentration · réaction à l'erreur.",
   "## Profil",
   "Avancé (défi, problèmes de niveau supérieur) · standard · fragile (paliers fins, réussites fréquentes).",
   "## Adaptations possibles",
   "Consignes courtes · énoncés lus à voix haute · documents aérés · tâches fractionnées · temps supplémentaire · moins d'exercices, même exigence.",
   "## Si les difficultés persistent",
   "Relevé d'observations daté · échange avec les parents (faits, pas de diagnostic) · orientation vers l'établissement ou un professionnel.",
   "## Révision",
   "Date du prochain point sur le profil."
  ]
 },
 "actions": [
  "Remplir une grille de profil pour chaque élève après trois séances",
  "Préparer un plan de travail individuel pour chaque séance avec plusieurs enfants",
  "Tenir un relevé d'observations daté pour tout élève dont les difficultés persistent"
 ],
 "quiz": [
  [
   "Deux élèves ont la même note. Ont-ils le même besoin ?",
   [
    "Oui",
    "Pas forcément : bases, méthode, motivation… peuvent différer",
    "Seulement s'ils sont dans la même classe"
   ],
   1,
   "Le diagnostic précède l'accompagnement."
  ],
  [
   "Combien de sources de blocage la leçon distingue-t-elle ?",
   [
    "Deux",
    "Six",
    "Dix"
   ],
   1,
   "Bases, méthode, travail personnel, motivation, attention, anxiété."
  ],
  [
   "De quoi a besoin un élève avancé ?",
   [
    "De refaire les exercices faciles",
    "De défi : problèmes ouverts, niveau supérieur",
    "De moins de séances"
   ],
   1,
   "Sinon il s'ennuie."
  ],
  [
   "Que propose la pédagogie de la maîtrise de Bloom ?",
   [
    "Passer à l'étape suivante une fois la précédente maîtrisée",
    "Avancer au rythme de la classe quoi qu'il arrive",
    "Supprimer les évaluations"
   ],
   0,
   "Particulièrement efficace en individuel."
  ],
  [
   "Que faire face à des signes évoquant un trouble des apprentissages ?",
   [
    "Annoncer un diagnostic aux parents",
    "Observer, noter des faits, en parler avec tact et orienter vers un professionnel",
    "Ne rien dire"
   ],
   1,
   "Le diagnostic revient aux professionnels de santé."
  ],
  [
   "Quelle adaptation est appropriée ?",
   [
    "Baisser l'exigence sur le fond",
    "Réduire le nombre d'exercices et lire les consignes à voix haute",
    "Supprimer les devoirs"
   ],
   1,
   "On adapte la forme, pas le fond."
  ],
  [
   "Quel est l'outil central d'une séance à plusieurs ?",
   [
    "Le plan de travail par élève",
    "Le tableau noir",
    "La note commune"
   ],
   0,
   "Pendant que l'un travaille seul, vous expliquez à l'autre."
  ],
  [
   "Que faut-il éviter avec une fratrie ?",
   [
    "Les rotations",
    "Toute comparaison entre frères et sœurs",
    "Les plans de travail"
   ],
   1,
   "Ni devant eux, ni devant les parents."
  ]
 ],
 "sources": [
  [
   "Bloom, B. (1984). The 2 Sigma Problem. Educational Researcher, 13(6)",
   ""
  ],
  [
   "Education Endowment Foundation — One to one tuition et Small group tuition",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ],
  [
   "Pour les troubles des apprentissages : s'adresser aux professionnels de santé et à l'établissement scolaire de l'élève",
   ""
  ]
 ],
 "veille": [
  2,
  5
 ]
},
{
 "id": "evaluer",
 "n": 16,
 "pole": "C",
 "court": "Évaluer et suivre",
 "titre": "Évaluer et suivre la progression",
 "but": "Mesurer où en est l'élève, corriger pour faire progresser et rendre la progression visible aux parents.",
 "objectifs": [
  "Distinguer les trois fonctions de l'évaluation",
  "Construire et exploiter un test diagnostique",
  "Corriger une copie pour que l'élève progresse",
  "Rédiger un bilan mensuel utile et honnête"
 ],
 "lecons": [
  {
   "id": "evaluer-1",
   "t": "Mesurer et montrer la progression",
   "p": [
    "Votre promesse est une progression mesurable. Il faut donc un point de départ (le test d'entrée), des mesures régulières (devoirs, évaluations) et un point d'étape pour les parents.",
    "Kumon ne fait avancer l'élève que lorsque la notion est maîtrisée. Mesurer sert aussi à cela : savoir quand passer à la suite.",
    "Mesurer une progression suppose de comparer des choses comparables : les mêmes compétences, évaluées de la même façon, à deux dates. Notez pour chaque élève quelques indicateurs stables : réussite aux questions de rappel, note aux devoirs blancs, part des exercices réussis sans aide.",
    "Les notes de l'établissement comptent pour les parents, mais elles dépendent du professeur, du sujet et du chapitre. Présentez-les à côté de vos propres mesures, sans les confondre."
   ],
   "appro": [
    "Choisissez des indicateurs que l'élève peut faire évoluer par son travail et que le parent comprend sans explication. Trois suffisent : le taux de réussite aux rappels de début de séance, la note aux évaluations internes, la part des exercices réussis sans aide. Notez-les à chaque séance, en une minute.",
    "Un graphique simple vaut mieux qu'un long commentaire. Une courbe qui monte de séance en séance parle au parent comme à l'élève. Montrez-la d'abord à l'élève : voir ses propres progrès est un moteur puissant.",
    "Soyez prudent dans l'interprétation. Deux mesures ne font pas une tendance, et une baisse ponctuelle peut venir d'un chapitre plus difficile. Parlez de progression sur un mois au moins, et expliquez les variations plutôt que de les cacher."
   ],
   "ex": "Fiche de suivi de Khady, 3e : diagnostic d'octobre 7/20 ; devoir blanc de novembre 10/20 ; exercices réussis sans aide : 3 sur 10 en octobre, 6 sur 10 en décembre. Trois chiffres, une tendance lisible.",
   "fm": "Vos outils : le test diagnostique d'entrée par classe, le kit de révision des prérequis pour la première séance, les devoirs avec barème, le bilan mensuel.",
   "err": "Annoncer « il progresse » sans chiffre. Le parent n'a alors que la note de l'école pour juger, et elle peut dire le contraire.",
   "cle": "Sans point de départ mesuré, aucune progression ne peut être montrée.",
   "exo": "Pour un élève, relevez vos trois indicateurs sur les dernières séances et tracez la courbe sur une feuille.",
   "q": "Pour chacun de vos élèves, quels chiffres pouvez-vous montrer aujourd'hui sur son évolution depuis le début ?",
   "v1": "L5-2"
  },
  {
   "id": "evaluer-2",
   "t": "Trois évaluations, trois usages",
   "p": [
    "On évalue pour trois raisons différentes. Avant d'enseigner, l'évaluation diagnostique situe l'élève : que sait-il déjà, quels prérequis manquent ? Pendant l'apprentissage, l'évaluation formative vérifie en continu ce qui est compris, pour ajuster la séance. Après, l'évaluation sommative fait le bilan sur un ensemble : devoir, composition, examen blanc.",
    "Les confondre crée des malentendus. Une évaluation formative n'a pas besoin de note : elle sert à décider de la suite. Une évaluation sommative se passe dans les conditions de l'examen : temps limité, sans aide, barème annoncé.",
    "Un bon test diagnostique est court (vingt à trente minutes), couvre les prérequis de l'année plutôt que le programme en cours, et classe ses questions par notion. Le résultat utile n'est pas la note globale mais la carte : acquis, fragile, non acquis, notion par notion.",
    "Cette carte dicte le plan des premières séances et fournit le point de départ que vous montrerez au parent."
   ],
   "appro": [
    "Construisez le test diagnostique à rebours : listez les notions de l'année, puis pour chacune les prérequis indispensables des années précédentes. Ce sont ces prérequis que le test interroge, avec deux ou trois questions courtes par notion, de difficulté croissante.",
    "L'évaluation formative prend des formes très légères : une question posée à l'oral, un exercice de deux minutes, « montre-moi comment tu fais ». Ce qui la définit, c'est l'usage : vous modifiez la suite de la séance selon la réponse. Si rien ne change quoi que l'élève réponde, ce n'était pas une évaluation formative.",
    "Pour l'évaluation sommative, annoncez le périmètre, la durée et le barème à l'avance. Un devoir surprise mesure le stress autant que le savoir. Et corrigez-le rapidement : une copie rendue trois semaines plus tard n'apprend plus rien."
   ],
   "ex": "Diagnostic d'entrée en 2nde S : calcul littéral (4 questions), équations et inéquations (3), géométrie du triangle (3), fonctions (2), proportionnalité et unités (3). Résultat : calcul littéral fragile, fonctions non acquises. Les deux premières séances commencent par là.",
   "fm": "Vos tests diagnostiques d'entrée par classe et vos livrets de révision des prérequis remplissent cette fonction. Vos évaluations de chapitre avec barème servent d'évaluations sommatives.",
   "err": "Faire passer un long test noté sur 20 à un nouvel élève et lui annoncer une mauvaise note le premier jour. Le diagnostic doit éclairer, pas décourager.",
   "cle": "Diagnostique avant, formative pendant, sommative après : trois moments, trois usages.",
   "exo": "Pour une classe que vous suivez, listez cinq prérequis indispensables de l'année précédente et écrivez deux questions de diagnostic pour chacun.",
   "q": "Votre test d'entrée produit-il une carte notion par notion, ou seulement une note ?"
  },
  {
   "id": "evaluer-3",
   "t": "Corriger pour faire progresser",
   "p": [
    "Une copie corrigée et rendue n'apprend rien si l'élève ne regarde que la note. La correction devient utile quand elle classe les erreurs et quand l'élève reprend lui-même ses fautes.",
    "Un code simple suffit, écrit dans la marge : C pour une erreur de calcul, M pour une erreur de méthode (mauvais outil ou étape manquante), R pour un défaut de rédaction, L pour une mauvaise lecture de l'énoncé, S pour une notion non sue. L'élève voit alors où part la majorité de ses points.",
    "Un barème détaillé, proche de celui de l'examen, montre que les points se gagnent étape par étape : la formule citée, la mise en équation, le calcul, la conclusion avec unité. Il apprend à l'élève à ne jamais rendre une question blanche.",
    "Dernier geste, le plus important : la reprise. L'élève refait sans aide les questions manquées, puis un exercice voisin. Notez les erreurs récurrentes dans sa fiche de suivi ; elles alimentent les questions de rappel des séances suivantes."
   ],
   "appro": [
    "Rendez la copie avec un commentaire en trois parties : un acquis précis, l'erreur dominante, une action. « Bonne maîtrise des calculs de fractions. Trois points perdus par oubli de conclusion. À chaque exercice, termine par une phrase qui répond à la question. » Les commentaires vagues, encourageants ou sévères, ne changent rien.",
    "Faites corriger par l'élève autant que possible. Rendez la copie avec les erreurs seulement signalées dans la marge, sans la solution ; il cherche et corrige. Ce qu'il n'arrive pas à corriger seul est précisément ce qu'il faut retravailler ensemble.",
    "Tenez un relevé d'erreurs par élève. Après trois devoirs, des régularités apparaissent : toujours les signes, toujours la lecture d'énoncé, toujours la dernière question non traitée faute de temps. Ce relevé transforme une suite de notes en programme de travail."
   ],
   "ex": "Devoir blanc de 3e, 11/20. Marges : C, C, L, R, C. Constat partagé avec l'élève : « Tu perds cinq points sur des calculs, pas sur la compréhension. Objectif du mois : vérifier chaque calcul par un second moyen. »",
   "fm": "Vos devoirs avec barème et vos corrigés détaillés permettent cette correction codée. Le projet de stratégie de gestion des évaluations de tous vos élèves peut s'appuyer sur ce même code d'erreurs.",
   "err": "Corriger toute la copie au tableau en donnant les solutions. L'élève recopie, et refera les mêmes erreurs.",
   "cle": "Coder les erreurs, détailler le barème, faire refaire par l'élève.",
   "exo": "Corrigez une copie avec le code d'erreurs (C, M, R, L, S), comptez les points perdus par type et rédigez le commentaire en trois parties.",
   "q": "Que deviennent les copies que vous corrigez : l'élève reprend-il ses erreurs, et en gardez-vous une trace ?"
  },
  {
   "id": "evaluer-4",
   "t": "Le bilan mensuel et l'échange avec les parents",
   "p": [
    "Le bilan mensuel transforme votre travail en information lisible. Une page suffit : notions travaillées, résultats mesurés, points forts, points à renforcer, objectif du mois suivant. Écrivez pour un parent qui n'a pas fait de mathématiques depuis longtemps.",
    "Soyez honnête et précis. Un bilan toujours positif perd sa valeur le jour où la note de l'école déçoit. Dites ce qui avance, ce qui n'avance pas encore, et ce que vous allez faire. Un constat difficile accompagné d'un plan est bien reçu.",
    "Fixez un objectif simple et vérifiable pour le mois suivant : une compétence, une mesure, une date. « D'ici fin janvier, réussir sans aide huit équations sur dix. »",
    "Accompagnez le bilan d'un échange de dix minutes : le parent pose ses questions, vous lui dites comment aider à la maison (un horaire de travail fixe, vérifier que les exercices sont faits) sans lui demander d'enseigner."
   ],
   "appro": [
    "Écrivez le bilan en partant des faits notés dans vos fiches de séance, pas de votre impression générale. Deux phrases précises valent mieux qu'un paragraphe d'appréciations. Évitez le vocabulaire scolaire que le parent ne maîtrise pas : dites « résoudre un problème où il faut poser une équation » plutôt que « mise en équation ».",
    "Pendant l'échange, laissez d'abord parler le parent : qu'a-t-il observé à la maison, dans les notes, dans l'attitude ? Il détient des informations que vous n'avez pas. Puis présentez le bilan, et terminez par un accord sur l'objectif du mois.",
    "Gardez tous les bilans. À la fin de l'année, leur suite raconte le parcours de l'élève : c'est votre meilleur argument pour la réinscription, et la matière d'un témoignage si la famille l'accepte."
   ],
   "ex": "« Bilan de novembre — Omar, 5e. Travaillé : fractions, proportionnalité. Résultats : rappel de début de séance 4/5 en moyenne ; évaluation de chapitre 12/20. Point fort : calcul mental. À renforcer : problèmes à plusieurs étapes. Objectif de décembre : résoudre seul un problème en deux étapes, trois fois sur quatre. »",
   "fm": "Le bilan mensuel fait partie de votre promesse : « chaque mois apporte une progression que vous pouvez voir ». Votre atelier de ce module vous fait écrire son modèle.",
   "err": "Envoyer le bilan sans objectif pour la suite. Le parent sait ce qui s'est passé, pas où l'on va.",
   "cle": "Une page, des faits, un point à renforcer, un objectif mesurable pour le mois suivant.",
   "exo": "Rédigez le bilan mensuel d'un élève réel à partir de vos notes de séance, avec un objectif mesurable pour le mois suivant.",
   "q": "Votre dernier bilan contenait-il un objectif vérifiable pour le mois suivant ?"
  }
 ],
 "cas": {
  "t": "Le diagnostic qui dérange",
  "s": "Nouvel élève de 1re S2. Le test d'entrée révèle des lacunes de 3e en calcul littéral. Le père attend que vous prépariez le devoir de la semaine prochaine sur les dérivées.",
  "q": [
   "Que dites-vous au père, et avec quels éléments ?",
   "Comment organisez-vous les quatre premières séances ?",
   "Quel indicateur montrerez-vous à la fin du mois ?"
  ],
  "r": [
   "Présenter la carte du diagnostic : sans calcul littéral solide, les dérivées ne tiendront pas ; proposer un plan qui traite les deux.",
   "Chaque séance : un temps court et régulier sur le calcul littéral, puis le chapitre en cours en classe, relié au prochain devoir.",
   "Le score aux questions de calcul littéral du diagnostic, repassées à l'identique, à côté de la note du devoir de classe."
  ]
 },
 "atelier": {
  "t": "Votre modèle de bilan mensuel",
  "c": "Listez les rubriques de votre bilan mensuel d'une page pour les parents : notions travaillées, résultats aux évaluations, points forts, points à renforcer, objectif du mois suivant. Écrivez un exemple rempli pour un élève imaginaire."
 },
 "outil": {
  "t": "Modèle de bilan mensuel d'une page",
  "usage": "À remplir à la fin de chaque mois pour chaque élève, puis à envoyer au parent.",
  "lignes": [
   "## En-tête",
   "Élève, classe, mois, nombre de séances effectuées.",
   "## Notions travaillées",
   "Liste courte des chapitres et des compétences.",
   "## Résultats mesurés",
   "Rappels de début de séance · évaluations FayeMath · notes de l'établissement (à part).",
   "## Points forts",
   "Deux faits observés.",
   "## Points à renforcer",
   "Deux faits observés, avec le type d'erreur dominant (calcul, méthode, rédaction, lecture).",
   "## Objectif du mois suivant",
   "Une compétence, une mesure, une date.",
   "## Comment aider à la maison",
   "Un horaire de travail fixe ; vérifier que les exercices donnés sont faits."
  ]
 },
 "actions": [
  "Faire passer le test diagnostique d'entrée à chaque nouvel élève",
  "Envoyer un court compte rendu au parent après chaque séance",
  "Envoyer un bilan mensuel à chaque famille"
 ],
 "quiz": [
  [
   "Que faut-il pour montrer une progression ?",
   [
    "Un point de départ mesuré",
    "Un prix plus élevé",
    "Plus d'heures de cours"
   ],
   0,
   "Le test d'entrée donne ce point de départ."
  ],
  [
   "À quoi sert l'évaluation diagnostique ?",
   [
    "À situer l'élève avant d'enseigner",
    "À classer les élèves",
    "À fixer le prix"
   ],
   0,
   "Elle révèle les acquis et les prérequis manquants."
  ],
  [
   "Quel est le résultat utile d'un test diagnostique ?",
   [
    "La note globale",
    "La carte notion par notion",
    "Le temps passé"
   ],
   1,
   "Acquis, fragile, non acquis."
  ],
  [
   "Que signifie le code M dans la marge ?",
   [
    "Erreur de méthode",
    "Mention bien",
    "Manque de temps"
   ],
   0,
   "Mauvais outil ou étape manquante."
  ],
  [
   "Quel est le geste le plus important après la correction ?",
   [
    "Ranger la copie",
    "La reprise des erreurs par l'élève",
    "Annoncer la note au parent"
   ],
   1,
   "Il refait sans aide les questions manquées."
  ],
  [
   "Que contient un bon objectif mensuel ?",
   [
    "Une compétence, une mesure, une date",
    "Une promesse de note à l'examen",
    "Une liste de chapitres"
   ],
   0,
   "Par exemple : huit équations sur dix sans aide d'ici fin janvier."
  ],
  [
   "Comment présenter les notes de l'établissement ?",
   [
    "À la place de vos mesures",
    "À côté de vos propres mesures, sans les confondre",
    "Jamais"
   ],
   1,
   "Elles dépendent du professeur, du sujet et du chapitre."
  ],
  [
   "Pourquoi un bilan toujours positif pose-t-il problème ?",
   [
    "Il est trop long",
    "Il perd sa valeur quand la note de l'école déçoit",
    "Il coûte cher"
   ],
   1,
   "Un constat honnête avec un plan est mieux reçu."
  ]
 ],
 "sources": [
  [
   "Education Endowment Foundation — One to one tuition",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ],
  [
   "Black, P. & Wiliam, D. (1998). Inside the Black Box: Raising Standards Through Classroom Assessment",
   ""
  ],
  [
   "Tests diagnostiques, devoirs et bilans FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  2
 ],
 "v1": 5
},
{
 "id": "examens",
 "n": 17,
 "pole": "C",
 "court": "BFEM et Bac",
 "titre": "Préparer au BFEM et au Bac",
 "but": "Organiser l'année d'un élève de classe d'examen, de la connaissance des épreuves jusqu'au jour J.",
 "objectifs": [
  "Connaître le format des épreuves de maths et de sciences physiques",
  "Bâtir un rétroplanning de l'année d'examen",
  "Entraîner sur annales dans les conditions réelles",
  "Préparer l'élève à la gestion du temps et du stress"
 ],
 "lecons": [
  {
   "id": "examens-1",
   "t": "Connaître l'épreuve avant de la préparer",
   "p": [
    "On ne prépare bien que ce que l'on connaît précisément : durée, coefficient, structure du sujet, barème, matériel autorisé. Ces informations figurent dans l'en-tête des sujets officiels ; relisez-les chaque année, car elles peuvent changer.",
    "Au BFEM, l'épreuve de mathématiques dure 2 heures et porte le coefficient 3, le plus élevé parmi les épreuves communes ; les sciences physiques ont le coefficient 2. L'examen comporte deux groupes d'épreuves, et le second groupe comprend lui aussi une épreuve écrite de mathématiques.",
    "Au baccalauréat, les sujets récents de l'Office du Bac indiquent pour les séries S2, S2A, S4 et S5 une épreuve de mathématiques de 4 heures au coefficient 5, et une épreuve de sciences physiques de 4 heures au coefficient 6 pour S2 et S2A. En S1, S1A et S3, le coefficient des sciences physiques est de 8.",
    "Une réforme du baccalauréat est en discussion au Sénégal depuis 2026 (réduction du nombre de séries, nouvelles disciplines). Vérifiez donc à chaque rentrée les textes en vigueur auprès de l'Office du Bac et de la Direction des examens et concours avant d'annoncer quoi que ce soit aux familles."
   ],
   "appro": [
    "Analysez plusieurs sujets récents de la même épreuve et dressez un tableau : thèmes présents, nombre de points par thème, types de questions. Vous verrez ce qui revient presque chaque année et ce qui est rare. Cette carte oriente l'entraînement : on assure d'abord ce qui tombe souvent.",
    "Lisez aussi les consignes de l'en-tête et de l'énoncé avec l'élève : matériel autorisé, nombre de pages, exercices obligatoires, présentation attendue. Chaque année, des candidats perdent des points pour ne pas avoir lu ces lignes.",
    "Informez le parent avec exactitude. Coefficients et modalités sont fixés par des textes officiels qui peuvent évoluer ; en cas de doute, renvoyez à l'établissement, à l'Office du Bac ou à la Direction des examens et concours plutôt que d'affirmer de mémoire."
   ],
   "ex": "Avec un élève de 3e, ouvrir trois sujets de BFEM de mathématiques d'années différentes et relever ensemble : durée, coefficient, nombre d'exercices, répartition des points entre activités numériques et activités géométriques, types de questions qui reviennent.",
   "fm": "Votre bibliothèque contient une banque de sujets d'examen (BFEM et Bac) et vos documents pédagogiques sénégalais sont rangés par classe. La formule EXCELLENCE inclut les annales du Bac et un examen blanc corrigé par mois.",
   "err": "Préparer l'examen avec des sujets d'un autre pays ou d'une autre série. Le format, le programme et les attentes de rédaction ne sont pas les mêmes.",
   "cle": "Durée, coefficient, structure, barème : on les lit sur les sujets officiels, chaque année.",
   "exo": "Prenez trois sujets récents de l'épreuve que prépare un de vos élèves et dressez le tableau des thèmes avec les points attribués.",
   "q": "Pour chacune de vos classes d'examen, connaissez-vous la structure exacte du dernier sujet officiel ?"
  },
  {
   "id": "examens-2",
   "t": "Le rétroplanning de l'année d'examen",
   "p": [
    "Une année d'examen se planifie à l'envers, à partir de la date de l'épreuve. On distingue trois phases : apprendre le programme, consolider, s'entraîner dans les conditions de l'examen.",
    "Fixez d'abord la fin : les dernières semaines sont réservées aux sujets complets, pas aux chapitres nouveaux. Remontez ensuite : le programme doit être terminé plusieurs semaines avant l'épreuve, ce qui donne le rythme des chapitres.",
    "Suivez la progression de la classe pour rester utile aux devoirs, mais gardez votre propre fil : à chaque séance, un temps de rappel sur les chapitres anciens, et une fois par mois une évaluation qui mêle plusieurs chapitres. C'est la pratique espacée appliquée à l'année.",
    "Tenez compte du calendrier réel : compositions, fêtes, vacances, éventuelles perturbations scolaires. Un planning qui ignore ces semaines sera faux dès novembre."
   ],
   "appro": [
    "Découpez l'année en périodes de quatre à six semaines, chacune avec un objectif et une évaluation. À la fin de chaque période, comparez le prévu et le réalisé et ajustez. Un planning révisé cinq fois dans l'année reste utile ; un planning figé en octobre ne l'est plus en décembre.",
    "Classez les chapitres selon deux critères : leur poids dans les sujets et le niveau actuel de l'élève. Ce qui pèse lourd et n'est pas maîtrisé passe en premier. Ce qui pèse peu et demande beaucoup d'efforts passe en dernier, quitte à ne viser que les questions faciles.",
    "Gardez du temps pour ce que l'école n'aura pas traité. En fin d'année, les programmes sont parfois inachevés en classe. Repérez dès le deuxième trimestre les chapitres en retard et prévoyez de les couvrir vous-même."
   ],
   "ex": "Élève de Terminale S2, épreuves début juillet. Octobre à mars : chapitres au rythme de la classe, examen blanc mensuel. Avril-mai : fin du programme, reprise des chapitres faibles repérés aux examens blancs. Juin : un sujet complet par semaine en temps réel, correction détaillée, fiches de formules.",
   "fm": "Votre rythme de deux séances de 2 heures par semaine en Terminale et l'examen blanc mensuel de la formule EXCELLENCE fournissent déjà la structure de ce rétroplanning.",
   "err": "Découvrir en mai que trois chapitres n'ont jamais été abordés. Le rétroplanning sert précisément à voir ce retard dès janvier.",
   "cle": "On part de la date de l'épreuve et on remonte : entraînement, consolidation, apprentissage.",
   "exo": "Pour un élève d'examen, classez les chapitres du programme en trois groupes : maîtrisés, fragiles, non vus. Placez-les sur un calendrier jusqu'à l'épreuve.",
   "q": "Pour chaque élève de 3e ou de Terminale, à quelle date le programme sera-t-il terminé au rythme actuel ?"
  },
  {
   "id": "examens-3",
   "t": "S'entraîner sur annales",
   "p": [
    "Les annales servent à trois choses : connaître le format, repérer les thèmes qui reviennent, et surtout s'entraîner à produire une copie complète en temps limité. Lire un corrigé ne remplace pas cet entraînement.",
    "Un entraînement utile respecte les conditions réelles : sujet entier, durée de l'épreuve, sans cahier, sans téléphone, matériel autorisé seulement. L'élève découvre alors ses vrais problèmes : il ne finit pas, il s'attarde sur une question, il ne rédige pas.",
    "La correction compte autant que l'épreuve. Notez avec un barème proche de l'officiel, codez les erreurs, puis faites reprendre les questions manquées. Tenez un tableau des résultats par thème : il montre où investir les séances suivantes.",
    "Commencez tôt par des exercices d'annales classés par chapitre, dès que le chapitre est terminé, puis passez aux sujets complets quand une grande partie du programme est vue."
   ],
   "appro": [
    "Après chaque sujet, faites remplir à l'élève une fiche de retour : note obtenue, temps passé par exercice, questions non traitées, erreurs par type, et une décision pour le sujet suivant. Sans cette analyse, enchaîner les annales ne fait que répéter les mêmes fautes.",
    "Entraînez aussi la rédaction et la présentation dans ces conditions : numérotation des questions, résultats encadrés, figures soignées, phrase de conclusion. Sous la pression du temps, l'élève revient à ses habitudes ; ce sont donc les habitudes qu'il faut former.",
    "Refaire un sujet déjà corrigé, quelques semaines plus tard, n'est pas du temps perdu. L'élève constate ce qu'il sait désormais faire et ce qui résiste encore. C'est de la pratique espacée appliquée à l'examen."
   ],
   "ex": "Tableau de suivi d'une élève de 3e sur quatre BFEM blancs : activités numériques 6/10, 7/10, 7/10, 8/10 ; activités géométriques 3/10, 4/10, 4/10, 6/10. La priorité des séances est claire : la géométrie.",
   "fm": "Vos séries d'exercices réels et votre banque de sujets permettent les deux étapes : exercices d'annales par chapitre, puis sujets complets. Vos corrigés d'évaluation servent de barème.",
   "err": "Faire les annales « ensemble », à voix haute, avec l'encadreur. L'élève croit savoir, mais n'a jamais produit seul une copie entière.",
   "cle": "Sujet entier, temps réel, sans aide ; puis correction au barème et reprise des erreurs.",
   "exo": "Créez la fiche de retour d'examen blanc (note, temps par exercice, erreurs par type, décision) à faire remplir par vos élèves.",
   "q": "Combien de sujets complets en temps réel chacun de vos élèves d'examen aura-t-il faits avant l'épreuve ?"
  },
  {
   "id": "examens-4",
   "t": "Le jour J : temps, méthode, sang-froid",
   "p": [
    "Un élève qui sait peut échouer par mauvaise gestion de l'épreuve. Cette gestion s'apprend et se répète pendant les examens blancs.",
    "Première règle : lire tout le sujet avant d'écrire, et commencer par ce que l'on sait faire. Deuxième règle : répartir le temps selon les points. Pour une épreuve de 2 heures notée sur 20, cela fait six minutes par point ; un exercice sur 5 points mérite environ une demi-heure, pas une heure.",
    "Troisième règle : ne jamais rester bloqué. Si une question résiste, on admet son résultat pour traiter la suite, et on y revient à la fin. Quatrième règle : garder dix minutes pour relire, vérifier les calculs, les unités et les conclusions.",
    "Le stress se réduit surtout par la répétition : un élève qui a déjà composé plusieurs fois dans les conditions réelles reconnaît la situation. Ajoutez des consignes simples pour la veille et le matin : matériel préparé, sommeil, repas, arrivée en avance, pas de révision de dernière minute sur un chapitre nouveau."
   ],
   "appro": [
    "Apprenez à l'élève à marquer le sujet à la première lecture : une croix devant ce qu'il sait faire, un point d'interrogation devant ce qui demande réflexion. Il commence par les croix. Cette lecture active évite la panique devant un exercice difficile placé en début de sujet.",
    "Enseignez les réflexes de vérification rapides : ordre de grandeur du résultat, signe, unité, cohérence avec la figure, substitution de la solution dans l'équation de départ. Une minute de contrôle par exercice rattrape des points que rien d'autre ne rattrapera.",
    "Préparez aussi le « blanc ». Si l'élève ne trouve plus rien, il pose le stylo, respire, passe à une autre question et y revient. Le lui avoir dit à l'avance, et l'avoir vécu en examen blanc, change sa réaction le jour venu. Le rôle des parents la dernière semaine est de garantir le calme, le sommeil et les repas, pas d'ajouter de la pression."
   ],
   "ex": "Plan de temps pour un BFEM de mathématiques de 2 heures : 5 minutes de lecture du sujet, 100 minutes de composition réparties selon le barème, 15 minutes de relecture. L'élève écrit ce plan sur son brouillon dès le début.",
   "fm": "Vos examens blancs sont le lieu où cette gestion s'installe. Demandez à l'élève d'écrire son plan de temps sur le brouillon à chaque fois, et commentez-le pendant la correction.",
   "err": "Donner des conseils de gestion du temps uniquement la veille de l'examen. Ce qui n'a pas été répété ne sera pas appliqué sous pression.",
   "cle": "Lire tout, commencer par le plus sûr, répartir le temps selon les points, relire dix minutes.",
   "exo": "Avec un élève d'examen, écrivez son plan de temps pour l'épreuve, minute par minute, et faites-le appliquer au prochain examen blanc.",
   "q": "Vos élèves d'examen savent-ils combien de minutes ils doivent consacrer à chaque exercice ?"
  }
 ],
 "cas": {
  "t": "Trois mois avant le BFEM",
  "s": "En avril, une famille vous confie sa fille de 3e : 6/20 de moyenne en maths, programme de la classe en retard, BFEM en juillet. La mère demande : « Est-ce qu'elle peut encore l'avoir ? »",
  "q": [
   "Que répondez-vous honnêtement à la mère ?",
   "Comment construisez-vous les douze semaines ?",
   "Que mesurez-vous, et quand ?"
  ],
  "r": [
   "Aucune garantie de résultat ; un diagnostic cette semaine, un plan précis, un point chiffré toutes les trois semaines.",
   "Diagnostic ; priorité aux thèmes qui reviennent le plus dans les sujets et aux points accessibles ; exercices d'annales par chapitre, puis sujets complets en juin ; rappel à chaque séance.",
   "Un BFEM blanc de départ, puis un toutes les trois semaines, avec le détail numérique et géométrique."
  ]
 },
 "atelier": {
  "t": "Le rétroplanning d'un élève",
  "c": "Choisissez un élève réel de 3e ou de Terminale. Écrivez la date de l'épreuve, puis, en remontant : les semaines réservées aux sujets complets, la date de fin de programme, la liste des chapitres restants et leur répartition, les dates des examens blancs."
 },
 "outil": {
  "t": "Fiche de préparation à l'épreuve",
  "usage": "À remplir avec l'élève en début d'année d'examen, à relire avant chaque examen blanc.",
  "lignes": [
   "## L'épreuve",
   "Durée : … · Coefficient : … · Structure du sujet : … · Matériel autorisé : …",
   "(Relever ces informations sur le dernier sujet officiel.)",
   "## Mon plan de temps",
   "Lecture du sujet : 5 min · Composition : … min réparties selon le barème · Relecture : 10 à 15 min.",
   "## Mes règles",
   "Je lis tout le sujet. Je commence par ce que je sais faire. Je ne reste pas bloqué : j'admets le résultat et j'avance. Je rédige chaque réponse.",
   "## Ma relecture",
   "Calculs refaits · unités · conclusions écrites · questions sans réponse.",
   "## La veille et le matin",
   "Matériel prêt, convocation, sommeil, repas, arrivée en avance."
  ]
 },
 "actions": [
  "Relever pour chaque classe d'examen la structure du dernier sujet officiel",
  "Écrire le rétroplanning de chaque élève de 3e et de Terminale",
  "Programmer les examens blancs de l'année et tenir le tableau des résultats par thème",
  "Vérifier à la rentrée les textes en vigueur sur le BFEM et le Bac"
 ],
 "quiz": [
  [
   "Où trouver la durée et le coefficient d'une épreuve ?",
   [
    "Dans l'en-tête des sujets officiels",
    "Sur les réseaux sociaux",
    "Dans un manuel étranger"
   ],
   0,
   "À relire chaque année, car ils peuvent changer."
  ],
  [
   "Quelle est la durée de l'épreuve de mathématiques du BFEM ?",
   [
    "1 heure",
    "2 heures",
    "4 heures"
   ],
   1,
   "Avec le coefficient 3."
  ],
  [
   "Quel coefficient portent les mathématiques au Bac en série S2, d'après les sujets récents ?",
   [
    "3",
    "5",
    "8"
   ],
   1,
   "Épreuve de 4 heures, coefficient 5."
  ],
  [
   "Dans quel sens construit-on un rétroplanning ?",
   [
    "De la rentrée vers l'examen",
    "De la date de l'épreuve vers aujourd'hui",
    "Au fil de l'eau"
   ],
   1,
   "On fixe d'abord la fin, puis on remonte."
  ],
  [
   "Comment faire un sujet d'annales utilement ?",
   [
    "Ensemble, à voix haute",
    "Seul, en entier, en temps réel, sans aide",
    "En lisant le corrigé"
   ],
   1,
   "L'élève découvre ainsi ses vrais problèmes."
  ],
  [
   "Pour une épreuve de 2 heures sur 20 points, combien de minutes par point ?",
   [
    "2",
    "6",
    "12"
   ],
   1,
   "120 minutes ÷ 20 points."
  ],
  [
   "Que faire face à une question qui bloque ?",
   [
    "Y rester jusqu'à trouver",
    "Admettre le résultat, avancer, y revenir à la fin",
    "Rendre la copie"
   ],
   1,
   "On ne perd pas les points des questions suivantes."
  ],
  [
   "Qu'est-ce qui réduit le plus le stress de l'examen ?",
   [
    "Les conseils de la veille",
    "La répétition d'épreuves dans les conditions réelles",
    "Une nuit de révision"
   ],
   1,
   "Une situation déjà vécue est moins intimidante."
  ]
 ],
 "sources": [
  [
   "SenCampus — Le BFEM, comment ça marche : épreuves, groupes, coefficients (arrêté du 5 mai 2021)",
   "https://www.sencampus.com/dossiers/le-bfem-et-apres/le-bfem-comment-ca-marche"
  ],
  [
   "Office du Baccalauréat du Sénégal — sujets officiels (en-têtes : durées et coefficients)",
   "https://officedubac.sn/"
  ],
  [
   "Le Soleil — Réforme du baccalauréat : travaux de la commission technique (février 2026)",
   "https://lesoleil.sn/actualites/education/reforme-du-baccalaureat-dans-le-secret-des-deliberations-de-la-commission-technique/"
  ],
  [
   "Dunlosky et al. (2013). Improving Students' Learning With Effective Learning Techniques — résumé de l'Association for Psychological Science",
   "https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html"
  ]
 ],
 "veille": [
  4
 ]
},
{
 "id": "motivation",
 "n": 18,
 "pole": "C",
 "court": "Motivation et difficultés",
 "titre": "Motivation et élèves en difficulté",
 "but": "Redonner confiance, installer le travail régulier et savoir quoi faire face à une grande difficulté.",
 "objectifs": [
  "Construire la motivation par des réussites mesurées",
  "Répondre au « je suis nul en maths »",
  "Organiser la remontée d'un élève en grande difficulté",
  "Poser un cadre de travail avec l'adolescent et sa famille"
 ],
 "lecons": [
  {
   "id": "motivation-1",
   "t": "La motivation suit la réussite",
   "p": [
    "On croit souvent qu'il faut motiver l'élève pour qu'il réussisse. C'est surtout l'inverse : la réussite constatée nourrit l'envie de continuer. Le psychologue Albert Bandura a appelé « sentiment d'efficacité personnelle » la conviction d'être capable de réussir une tâche ; sa première source est l'expérience de réussites réelles.",
    "Votre premier levier est donc de fabriquer des réussites vraies : des tâches à la portée de l'élève, mais qui demandent un effort, et dont il voit le résultat. Un exercice trop facile ne prouve rien ; un exercice trop difficile confirme l'échec.",
    "Rendez le progrès visible. Un élève ne remarque pas qu'il réussit aujourd'hui ce qu'il ratait il y a six semaines si personne ne le lui montre. Comparez ses copies, tenez un graphique simple de ses scores de rappel.",
    "Deux autres besoins comptent : avoir un peu de choix (l'ordre des exercices, la façon de vérifier) et se sentir respecté par un adulte qui croit en lui. La relation de travail est un outil pédagogique à part entière."
   ],
   "appro": [
    "Fixez des objectifs proches et précis. « Avoir la moyenne au BFEM » est lointain et dépend de trop de choses ; « réussir seul cinq équations sur cinq d'ici vendredi » est à portée et se constate. Chaque petit objectif atteint construit la conviction que le travail produit un effet.",
    "Reliez explicitement le résultat à ce que l'élève a fait. « Tu as réussi parce que tu as posé les données avant de calculer » lui apprend que la réussite vient d'un geste qu'il peut refaire. Sans ce lien, il attribue le succès à la chance ou à la facilité de l'exercice.",
    "Méfiez-vous des récompenses extérieures promises par les parents. Elles fonctionnent un temps, puis l'élève travaille pour la récompense et s'arrête quand elle disparaît. L'intérêt durable vient du sentiment de progresser et de comprendre."
   ],
   "ex": "Élève de 5e découragé. Première séance : trois exercices choisis juste à son niveau, réussis. Deuxième séance : on monte d'un cran. À la quatrième, vous lui montrez sa première copie à côté de la dernière. C'est lui qui dit : « Avant, je ne savais pas faire ça. »",
   "fm": "Votre promesse d'une progression visible chaque mois vaut aussi pour l'élève. Le bilan mensuel peut lui être présenté à lui d'abord, avant d'être envoyé au parent.",
   "err": "Encourager sans preuve (« tu vas y arriver, c'est facile »). Si l'exercice est raté, l'élève conclut qu'il est encore plus faible qu'il ne le pensait.",
   "cle": "Des réussites réelles, à la bonne difficulté, et un progrès rendu visible.",
   "exo": "Pour votre élève le moins motivé, fixez trois petits objectifs vérifiables pour les deux prochaines semaines et notez comment vous les lui présenterez.",
   "q": "Pour votre élève le moins motivé, quelle réussite réelle pouvez-vous organiser dès la prochaine séance ?"
  },
  {
   "id": "motivation-2",
   "t": "« Je suis nul en maths »",
   "p": [
    "Cette phrase décrit une croyance, pas un fait. L'élève attribue ses échecs à une cause fixe, « je ne suis pas fait pour ça », contre laquelle il ne peut rien. Tant qu'il le croit, l'effort lui paraît inutile.",
    "Les travaux de Carol Dweck sur l'état d'esprit suggèrent une piste simple, à utiliser avec mesure : valoriser la stratégie et le travail plutôt que l'intelligence. « Tu as vérifié ton résultat par un autre moyen, c'est ce qui t'a fait trouver l'erreur » plutôt que « tu es intelligent ». Les études sur les effets de cette approche donnent des résultats variables ; elle ne remplace pas un enseignement solide, mais elle évite d'enfermer l'élève dans une étiquette.",
    "Changez aussi le statut de l'erreur. Dans vos séances, une erreur est une information : elle montre où travailler. Dites-le, et montrez-le en cherchant calmement la cause plutôt qu'en sanctionnant.",
    "Enfin, l'anxiété a un effet direct : un élève tendu a moins de mémoire de travail disponible et réussit moins bien ce qu'il sait pourtant faire. Un rituel de début calme, une première question facile, un ton posé améliorent réellement les résultats."
   ],
   "appro": [
    "Écoutez d'où vient la croyance. Souvent, un épisode précis l'a installée : une humiliation au tableau, une série de mauvaises notes, une comparaison avec un frère. La connaître ne sert pas à faire de la psychologie, mais à éviter de reproduire la situation et à comprendre les réactions de l'élève.",
    "Surveillez votre propre langage. « C'est simple », « tu devrais le savoir », un soupir devant une erreur répétée : ces signaux confirment à l'élève qu'il n'est pas à la hauteur. À l'inverse, « c'est une erreur que beaucoup font, regardons pourquoi » la rend normale et utile.",
    "Les parents transmettent parfois la croyance sans le vouloir : « moi aussi j'étais nul en maths ». Proposez-leur une autre phrase : « c'est difficile, mais avec du travail régulier on y arrive, et je vois que tu avances »."
   ],
   "ex": "L'élève : « De toute façon, je suis nulle en maths. » Réponse : « Tu ne sais pas encore factoriser, c'est différent. La semaine dernière, tu ne savais pas développer, et aujourd'hui tu as réussi quatre calculs sur cinq. On va faire pareil pour la factorisation. »",
   "fm": "La méthode CADRE donne à l'élève une suite d'actions à sa portée : il n'a plus à « être bon », il a une démarche à suivre. C'est un argument à lui donner autant qu'aux parents.",
   "err": "Comparer l'élève à un frère, une sœur ou un camarade. La comparaison confirme l'étiquette au lieu de la défaire.",
   "cle": "Dire « pas encore », valoriser la stratégie, traiter l'erreur comme une information.",
   "exo": "Notez trois phrases que vous dites par réflexe devant une erreur. Réécrivez chacune pour qu'elle porte sur la démarche et non sur l'élève.",
   "q": "Quelles phrases vos élèves emploient-ils pour parler d'eux-mêmes en mathématiques, et que leur répondez-vous ?"
  },
  {
   "id": "motivation-3",
   "t": "L'élève en grande difficulté",
   "p": [
    "Quand un élève de 4e ne maîtrise pas les fractions de 6e, lui expliquer mieux le chapitre de 4e ne sert à rien. Les mathématiques sont cumulatives : chaque notion repose sur les précédentes. Il faut descendre jusqu'au dernier terrain solide.",
    "La démarche a quatre temps. Diagnostiquer précisément les prérequis manquants. Choisir une seule priorité, celle qui débloque le plus de chapitres (souvent le calcul numérique et littéral). Travailler cette priorité jusqu'à la maîtrise avant d'avancer : c'est le principe de la pédagogie de la maîtrise décrite par Benjamin Bloom, et celui qu'applique Kumon. Garder en parallèle un lien minimal avec le chapitre de la classe pour que l'élève ne soit pas perdu en cours.",
    "Expliquez ce choix à l'élève et aux parents : pendant quelques semaines, les notes de l'école peuvent ne pas bouger, parce que l'on reconstruit en dessous. Annoncez ce que vous mesurerez à la place.",
    "Sachez aussi reconnaître vos limites. Certaines difficultés persistantes (lecture, attention, repérage dans l'espace, confusion durable des nombres) peuvent relever de troubles qui demandent l'avis de spécialistes. Votre rôle n'est pas de poser un diagnostic, mais de signaler ce que vous observez aux parents, avec tact, et de les inviter à en parler à l'établissement ou à un professionnel de santé."
   ],
   "appro": [
    "Menez deux voies en parallèle, avec des temps séparés et annoncés : dix à quinze minutes de reconstruction des bases à chaque séance, puis le chapitre de la classe, simplifié. L'élève voit qu'il n'est pas abandonné en cours, et ses bases remontent séance après séance.",
    "Découpez la notion manquante en paliers très fins, chacun réussi à un taux élevé avant de passer au suivant. Pour les fractions : comprendre la fraction comme partage, comparer, simplifier, additionner au même dénominateur, puis à dénominateurs différents. Notez le palier atteint.",
    "Protégez l'estime de l'élève. Travailler des notions de 6e quand on est en 4e peut être vécu comme une humiliation. Présentez-le comme une réparation ciblée et temporaire : « il te manque deux outils, on les installe et tu pourras suivre ». N'utilisez pas un support marqué d'une classe inférieure sous ses yeux si vous pouvez l'éviter."
   ],
   "ex": "Élève de 4e, diagnostic : tables fragiles, fractions non acquises. Plan sur six semaines : dix minutes de calcul à chaque séance avec score noté, fractions reprises depuis la représentation, puis lien avec le chapitre de la classe. Mesure annoncée au parent : le score de calcul, passé de 8/20 à 15/20.",
   "fm": "Vos livrets de révision des prérequis et vos tests diagnostiques par classe sont les outils de cette remontée. Les kits des classes inférieures de votre bibliothèque servent de supports de reprise.",
   "err": "Promettre un rattrapage rapide pour rassurer. Reconstruire des bases prend du temps ; mieux vaut l'annoncer que le subir.",
   "cle": "Descendre au dernier terrain solide, une priorité à la fois, maîtrise avant d'avancer.",
   "exo": "Pour un élève en difficulté, découpez la notion qui lui manque en cinq paliers et notez celui où il se trouve aujourd'hui.",
   "q": "Quel élève suivez-vous aujourd'hui sur le programme de sa classe alors que ses bases demanderaient une reprise ?"
  },
  {
   "id": "motivation-4",
   "t": "Poser un cadre avec l'adolescent",
   "p": [
    "La plupart des blocages de travail ne sont pas des problèmes de mathématiques : devoirs non faits, téléphone, fatigue, absence d'horaire. Un cadre clair, posé tôt, évite de transformer chaque séance en négociation.",
    "Fixez avec l'élève un petit nombre de règles, écrites dans son cahier : le travail donné est fait avant la séance, le téléphone est rangé, on dit quand on ne comprend pas. En échange, vous vous engagez aussi : ponctualité, explications sans moquerie, travail donné raisonnable.",
    "Quand le travail n'est pas fait, restez factuel. Cherchez la cause (trop long, pas compris, pas de moment prévu) et ajustez : moins d'exercices, mais faits ; un horaire fixe décidé avec la famille. La troisième fois, on en parle avec le parent, en présence de l'élève, sans l'humilier.",
    "Les parents sont vos alliés à condition de leur donner un rôle tenable : garantir un lieu et un horaire, vérifier que le travail est fait, vous prévenir d'un événement. Ne leur demandez pas d'expliquer les mathématiques, et ne rapportez pas chaque faiblesse de l'adolescent : il doit pouvoir vous faire confiance."
   ],
   "appro": [
    "Faites participer l'élève à l'élaboration des règles. Une règle qu'il a formulée lui-même est mieux respectée qu'une règle imposée. Demandez : « De quoi as-tu besoin pour bien travailler ? Qu'est-ce qui t'en empêche le plus ? » puis écrivez ensemble.",
    "Prévoyez la suite quand une règle n'est pas tenue, et dites-la d'avance : d'abord un rappel, puis un ajustement, puis une conversation à trois avec le parent. La conséquence annoncée et appliquée calmement a plus d'effet qu'une colère imprévisible.",
    "Avec un adolescent, la relation se joue sur la justesse et la constance. Tenez vos propres engagements, reconnaissez vos erreurs, ne faites pas de promesse que vous ne tiendrez pas, et ne le ridiculisez jamais. Un élève qui vous respecte travaille aussi pour ne pas vous décevoir."
   ],
   "ex": "Contrat de travail en trois lignes, signé par l'élève : « 1. Je fais les deux exercices donnés avant chaque séance. 2. Mon téléphone reste dans le salon pendant la séance. 3. Je dis quand je ne comprends pas. » En face : « M. Faye arrive à l'heure, explique autant de fois que nécessaire, donne au plus trente minutes de travail. »",
   "fm": "Votre compte rendu après chaque séance permet de signaler le travail fait ou non fait de façon régulière et neutre, sans attendre que la situation se dégrade.",
   "err": "Se plaindre de l'élève au parent devant lui. Vous gagnez une réprimande ce jour-là et perdez sa coopération pour la suite.",
   "cle": "Peu de règles, écrites, réciproques ; les parents garantissent le lieu et l'horaire.",
   "exo": "Préparez la conversation de cadrage avec un élève : vos deux questions d'ouverture, les trois règles que vous souhaitez obtenir, et la suite prévue si elles ne sont pas tenues.",
   "q": "Quelles règles de travail avez-vous réellement posées, par écrit, avec chacun de vos élèves ?"
  }
 ],
 "cas": {
  "t": "L'élève qui ne fait rien entre les séances",
  "s": "Modou, en 2nde, est agréable en séance mais ne fait jamais le travail demandé. Ses notes stagnent. Sa mère vous dit : « Il est toujours sur son téléphone, je n'y arrive plus. »",
  "q": [
   "Que cherchez-vous à comprendre avant d'agir ?",
   "Quel cadre proposez-vous à Modou ?",
   "Quel rôle précis donnez-vous à la mère ?"
  ],
  "r": [
   "La cause : quantité de travail, incompréhension, absence d'horaire, découragement. On pose la question à Modou, sans reproche.",
   "Un contrat court et écrit : deux exercices seulement, un horaire fixe choisi par lui, vérification au début de chaque séance.",
   "Garantir l'horaire et le lieu, téléphone hors de la pièce pendant ce temps, sans faire les exercices avec lui ; un point à trois semaines."
  ]
 },
 "atelier": {
  "t": "Le contrat de travail avec l'élève",
  "c": "Rédigez le contrat de travail que vous proposerez à un élève réel : trois engagements de l'élève, trois engagements de votre part, le rôle demandé aux parents, et la date à laquelle vous ferez le point."
 },
 "outil": {
  "t": "Plan de remontée pour un élève en difficulté",
  "usage": "À remplir après le diagnostic, puis à présenter à l'élève et au parent.",
  "lignes": [
   "## Le constat",
   "Prérequis non acquis (par notion) : …",
   "Ce qui est solide : …",
   "## La priorité unique",
   "Notion choisie : … · Pourquoi elle débloque la suite : …",
   "## Le rythme",
   "À chaque séance : … minutes sur la priorité, puis le chapitre de la classe.",
   "Travail entre les séances : … (court, réalisable).",
   "## La mesure",
   "Indicateur suivi : … · Valeur de départ : … · Objectif à six semaines : …",
   "## Le message aux parents",
   "Les notes de l'école peuvent ne pas bouger tout de suite ; voici ce que nous mesurons en attendant.",
   "## Si la difficulté persiste",
   "Observations à partager avec les parents ; suggestion d'en parler à l'établissement ou à un professionnel."
  ]
 },
 "actions": [
  "Montrer à chaque élève, une fois par mois, sa progression avec ses propres copies",
  "Écrire un contrat de travail avec chaque élève qui ne fait pas ses exercices",
  "Établir un plan de remontée pour tout élève dont le diagnostic révèle des lacunes d'une classe antérieure"
 ],
 "quiz": [
  [
   "Qu'est-ce qui nourrit le plus la motivation ?",
   [
    "Les encouragements répétés",
    "L'expérience de réussites réelles",
    "Les récompenses"
   ],
   1,
   "C'est la première source du sentiment d'efficacité personnelle."
  ],
  [
   "Quel exercice construit la confiance ?",
   [
    "Un exercice à la portée de l'élève mais qui demande un effort",
    "Un exercice très facile",
    "Un exercice très difficile"
   ],
   0,
   "Trop facile ne prouve rien ; trop difficile confirme l'échec."
  ],
  [
   "Que valoriser plutôt que l'intelligence ?",
   [
    "La stratégie et le travail",
    "La rapidité",
    "La note"
   ],
   0,
   "« Tu as vérifié par un autre moyen, c'est ce qui t'a fait trouver l'erreur. »"
  ],
  [
   "Quel est l'effet de l'anxiété pendant un exercice ?",
   [
    "Elle réduit la mémoire de travail disponible",
    "Elle améliore la concentration",
    "Aucun effet"
   ],
   0,
   "Un début de séance calme améliore les résultats."
  ],
  [
   "Que faire avec un élève de 4e qui ne maîtrise pas les fractions ?",
   [
    "Mieux expliquer le chapitre de 4e",
    "Descendre au dernier terrain solide et reconstruire",
    "Lui donner plus d'exercices de 4e"
   ],
   1,
   "Les mathématiques sont cumulatives."
  ],
  [
   "Quel est votre rôle face à une difficulté qui évoque un trouble ?",
   [
    "Poser un diagnostic",
    "Signaler vos observations aux parents et les orienter",
    "Ne rien dire"
   ],
   1,
   "Le diagnostic revient à des spécialistes."
  ],
  [
   "Que faire quand le travail n'est pas fait ?",
   [
    "Punir",
    "Chercher la cause et ajuster, puis en parler au parent si cela se répète",
    "Abandonner les devoirs"
   ],
   1,
   "Rester factuel ; moins d'exercices, mais faits."
  ],
  [
   "Quel rôle donner aux parents ?",
   [
    "Expliquer les mathématiques",
    "Garantir un lieu, un horaire et vérifier que le travail est fait",
    "Assister à chaque séance"
   ],
   1,
   "Un rôle tenable, sans enseigner à votre place."
  ]
 ],
 "sources": [
  [
   "Bandura, A. (1997). Self-Efficacy: The Exercise of Control",
   ""
  ],
  [
   "Dweck, C. (2006). Mindset: The New Psychology of Success",
   ""
  ],
  [
   "Bloom, B. (1984). The 2 Sigma Problem. Educational Researcher, 13(6)",
   ""
  ],
  [
   "Education Endowment Foundation — One to one tuition",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ]
 ],
 "veille": [
  2,
  5
 ]
}
);
