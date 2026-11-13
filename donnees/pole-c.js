/* =====================================================================
   FayeMath Formation — PÔLE C — Pédagogie
   Un objet par module. Champs :
     id, n, pole, court, titre, but, objectifs[]
     lecons[] : {id, t: titre, p: [paragraphes], ex: exemple concret, fm: chez FayeMath,
                 err: erreur fréquente, cle: à retenir, q: question de réflexion}
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
 "n": 8,
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
   "t": "Deux mémoires : pourquoi l'élève « décroche »",
   "p": [
    "Apprendre, c'est modifier durablement la mémoire à long terme. Mais tout ce qui est nouveau passe d'abord par la mémoire de travail, qui est très limitée : elle ne manipule que quelques éléments à la fois, pendant peu de temps. La mémoire à long terme, elle, est pratiquement sans limite.",
    "Un élève « décroche » le plus souvent parce que sa mémoire de travail est saturée, pas par manque de volonté. Trop d'informations nouvelles à la fois, une consigne longue, un calcul intermédiaire mal maîtrisé : chaque élément occupe une place, et il n'en reste plus pour comprendre.",
    "Ce qui est déjà solidement en mémoire à long terme ne coûte presque rien. Un élève qui connaît ses tables et ses identités remarquables par cœur garde toute son attention pour le raisonnement. C'est pourquoi les automatismes ne s'opposent pas à la compréhension : ils la rendent possible.",
    "Conséquences pratiques : présenter la nouveauté par petites étapes, faire pratiquer après chaque étape, montrer un exemple entièrement résolu avant de demander à l'élève de chercher, et retirer tout ce qui distrait."
   ],
   "ex": "Résoudre 3(x − 2) = 2x + 5 demande de distribuer, regrouper, changer de membre, calculer. Pour un élève qui hésite encore sur 3 × (−2), c'est trop à la fois. On commence donc par vérifier la distributivité seule, puis on montre un exemple complet, puis on fait un exercice ensemble.",
   "fm": "Vos cours suivent déjà cet ordre : activité, définition, exemple modèle, exercice d'application corrigé. La révision des prérequis en première séance sert à repérer ce qui n'est pas encore automatique.",
   "err": "Expliquer tout le chapitre d'un seul trait, puis donner une série d'exercices. L'élève a écouté, mais sa mémoire de travail a débordé dès la troisième idée.",
   "cle": "Peu de nouveautés à la fois, un exemple résolu d'abord, de la pratique après chaque étape.",
   "q": "Lors de votre dernière séance, à quel moment précis l'élève a-t-il décroché, et qu'est-ce qui était trop à la fois ?",
   "id": "apprendre-1"
  },
  {
   "t": "Se tester plutôt que relire",
   "p": [
    "La méthode de révision la plus répandue est la relecture du cours, souvent surligné. C'est aussi l'une des moins efficaces. Une vaste synthèse de la recherche (Dunlosky et ses collègues, 2013) a évalué dix techniques : relire et surligner y reçoivent une utilité faible, tandis que deux techniques obtiennent l'utilité la plus élevée, s'entraîner à se tester et répartir le travail dans le temps.",
    "Relire donne une impression de maîtrise : le texte paraît familier, donc on croit savoir. Se tester oblige à aller chercher l'information en mémoire, et c'est cet effort de rappel qui consolide le souvenir. Il révèle aussi immédiatement ce qui n'est pas su.",
    "Se tester ne veut pas dire être noté. Il s'agit de fermer le cahier et de répondre : réciter une définition, refaire un exemple sans regarder, répondre à cinq questions rapides, expliquer la méthode à voix haute.",
    "L'effet est le plus fort quand le test est suivi d'une correction : l'élève compare sa réponse à la bonne et corrige tout de suite."
   ],
   "ex": "Début de séance, cahier fermé, cinq questions en cinq minutes sur la séance précédente : « Énonce le théorème de Thalès. Dans quel cas l'utilise-t-on ? Écris la formule du volume d'un cône… » On corrige ensemble, et l'élève note ce qu'il n'a pas su.",
   "fm": "Vos fiches de révision (QCM avec barème) et vos tests diagnostiques sont déjà des outils de test. Vous pouvez en faire un rituel d'ouverture de chaque séance et apprendre à l'élève à s'interroger seul avec ses fiches.",
   "err": "Demander « tu as révisé ? » et se contenter d'un oui. La seule vérification fiable est de faire produire la réponse, cahier fermé.",
   "cle": "Cahier fermé, on se rappelle ; puis on corrige. Relire ne suffit pas.",
   "q": "Comment vos élèves révisent-ils entre deux séances, et comment pourriez-vous leur apprendre à se tester ?",
   "id": "apprendre-2"
  },
  {
   "t": "Espacer et mélanger",
   "p": [
    "La seconde technique la mieux établie est la pratique distribuée : revoir une notion plusieurs fois, à des moments espacés, plutôt qu'en une seule longue séance la veille du devoir. À temps de travail égal, on retient plus longtemps.",
    "L'oubli fait partie du mécanisme. Revoir une notion au moment où elle commence à s'effacer demande un effort, et c'est cet effort qui la fixe. Un rythme simple suffit : le lendemain, une semaine après, un mois après.",
    "Troisième idée, classée d'utilité moyenne mais précieuse en mathématiques : mélanger les types d'exercices. Une série où tous les exercices relèvent de la même méthode entraîne à appliquer, pas à choisir. Or le jour de l'examen, la première difficulté est de reconnaître quelle méthode utiliser.",
    "Mélanger paraît plus difficile sur le moment, et l'élève a l'impression de moins bien réussir. C'est normal : la difficulté utile aujourd'hui produit la réussite durable demain."
   ],
   "ex": "En 3e, après les chapitres Thalès, Pythagore et trigonométrie : une fiche de six exercices dans le désordre, sans titre de chapitre. Pour chacun, l'élève écrit d'abord quel outil il va utiliser et pourquoi, avant tout calcul.",
   "fm": "Votre bibliothèque est organisée par chapitre. Ajouter à intervalles réguliers une séance de révision mêlant les chapitres déjà vus, à partir de vos séries d'exercices et de vos sujets d'examen, met en œuvre ce principe sans nouveau support.",
   "err": "Considérer qu'un chapitre « fait » en octobre est acquis pour l'examen de juillet. Sans rappel espacé, l'essentiel aura disparu.",
   "cle": "Revoir à J+1, J+7, J+30, et mélanger les chapitres pour apprendre à choisir la méthode.",
   "q": "Quel chapitre vu il y a plus d'un mois n'avez-vous jamais repris avec chacun de vos élèves ?",
   "id": "apprendre-3"
  },
  {
   "t": "Le retour qui fait progresser",
   "p": [
    "Le cours particulier a un avantage décisif sur la classe : l'encadreur voit chaque erreur au moment où elle se produit et peut y répondre aussitôt. La Education Endowment Foundation, qui synthétise la recherche en éducation, estime que le tutorat individuel apporte en moyenne environ cinq mois de progrès supplémentaires, et souligne qu'il est le plus efficace lorsqu'il s'appuie sur un diagnostic et un retour rapide, en lien avec ce qui est fait en classe.",
    "Un bon retour porte sur la tâche et la méthode, pas sur la personne. « Tu es fort » ou « tu es distrait » n'apprennent rien. « Ton raisonnement est juste, l'erreur est dans le changement de signe à la ligne 3 » dit exactement quoi corriger.",
    "Il laisse aussi le travail à l'élève. Plutôt que de donner la bonne réponse, on indique où regarder : « Relis la ligne 3 ». On peut aussi lui demander d'expliquer sa démarche à voix haute ; souvent, il trouve l'erreur lui-même, et cette explication renforce l'apprentissage.",
    "Enfin, un retour n'a d'effet que si l'élève s'en sert : refaire l'exercice, ou un exercice voisin, tout de suite."
   ],
   "ex": "L'élève écrit (x + 3)² = x² + 9. Au lieu de corriger : « Vérifie avec x = 1. Que vaut chaque côté ? » Il trouve 16 et 10, constate l'écart, puis on revient au développement (x + 3)(x + 3).",
   "fm": "Le cinquième temps de la méthode CADRE, Évaluer, est précisément ce retour sur son propre travail. Vos corrigés détaillés permettent à l'élève de comparer sa démarche ligne par ligne.",
   "err": "Reprendre le stylo et refaire l'exercice à la place de l'élève. Il regarde, approuve, et ne saura pas le refaire seul.",
   "cle": "Un retour précis, sur la méthode, donné tout de suite, et suivi d'un nouvel essai.",
   "q": "Dans vos séances, qui tient le stylo le plus longtemps : vous ou l'élève ?",
   "id": "apprendre-4"
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
 "id": "didactique",
 "n": 9,
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
   "t": "Une méthode, appliquée à chaque exercice",
   "p": [
    "Mathnasium et Kumon sont devenus mondiaux parce qu'ils appliquent une seule méthode, partout, de la même façon. La méthode est ce qui reste quand l'élève travaille seul.",
    "Une méthode s'enseigne par l'exemple : l'élève vous voit la suivre, puis la suit avec vous, puis sans vous.",
    "Votre méthode rejoint une référence classique : dans « Comment poser et résoudre un problème » (1945), le mathématicien George Pólya décrit quatre phases, comprendre le problème, concevoir un plan, exécuter le plan, revenir sur la solution. CADRE détaille ce chemin en cinq gestes que l'élève peut suivre seul.",
    "La phase la plus négligée est la première. Beaucoup d'élèves commencent à calculer avant d'avoir identifié ce qui est donné et ce qui est demandé. Faites reformuler l'énoncé avec ses mots, et faites écrire les données et l'inconnue avant toute opération."
   ],
   "ex": "Problème de collège : « Un cybercafé facture 300 F l'inscription puis 150 F par heure. Combien d'heures pour 1 500 F ? » Comprendre : on cherche un nombre d'heures. Analyser : coût = 300 + 150 × heures. Décomposer : poser l'équation, la résoudre. Résoudre : 150h = 1 200, h = 8. Évaluer : 300 + 150 × 8 = 1 500, le résultat convient.",
   "fm": "La méthode CADRE : Comprendre, Analyser, Décomposer, Résoudre, Évaluer. Elle est appliquée dans les supports élèves sans jamais y être nommée.",
   "err": "Réciter les cinq étapes comme une leçon. Une méthode ne s'apprend qu'en la voyant appliquée, puis en l'appliquant.",
   "cle": "La méthode se montre dans chaque exercice résolu ; elle ne se récite pas.",
   "q": "Dans vos séances, laquelle des cinq étapes vos élèves sautent-ils le plus souvent ?",
   "v1": "L5-0",
   "id": "didactique-1"
  },
  {
   "t": "Du concret à l'abstrait",
   "p": [
    "Une notion mathématique se comprend mieux quand elle est rencontrée sous trois formes successives : une manipulation ou une situation concrète, une représentation (schéma, tableau, graphique), puis l'écriture symbolique. Le psychologue Jerome Bruner a décrit cette progression, souvent résumée par « concret, imagé, abstrait ».",
    "L'élève en difficulté a souvent reçu directement la troisième forme. Il manipule des symboles sans image derrière. Revenir à une représentation ne fait pas perdre de temps : c'est ce qui donne un sens aux règles et permet de les retrouver quand on les a oubliées.",
    "En physique-chimie, le chemin est le même : un phénomène observé ou une expérience, puis un modèle (schéma du circuit, bilan des forces), puis la relation mathématique. La formule vient en dernier ; elle résume ce qui a été compris.",
    "Prenez vos exemples dans le quotidien de l'élève : les prix au marché, les trajets, le crédit téléphonique, la facture d'électricité. Un exemple familier ne coûte rien à la mémoire de travail."
   ],
   "ex": "Fractions en 6e : partager trois pains entre quatre enfants (concret), dessiner des bandes découpées en quarts (imagé), écrire 3/4 (abstrait). En physique, pour la loi d'Ohm : mesurer tension et intensité aux bornes d'un conducteur, tracer les points, constater la droite, puis écrire U = R × I.",
   "fm": "Vos cours commencent par une activité avant la définition : c'est cette entrée par le concret. Veillez à ce que l'activité soit réellement faite par l'élève, pas seulement lue.",
   "err": "Commencer par la formule « pour gagner du temps ». L'élève l'applique tant que l'exercice ressemble à l'exemple, puis se perd au premier énoncé différent.",
   "cle": "Situation, représentation, puis symbole : la formule arrive en dernier.",
   "q": "Pour quel chapitre n'avez-vous pas encore de situation concrète ou de schéma à proposer ?",
   "id": "didactique-2"
  },
  {
   "t": "Les erreurs typiques ont une logique",
   "p": [
    "Une erreur répétée n'est presque jamais un hasard. Elle vient d'une règle que l'élève s'est construite et qui a fonctionné jusque-là. « Multiplier agrandit toujours » est vrai avec les entiers, puis devient faux avec 0,5. Tant que la règle fausse n'est pas mise en évidence, elle revient.",
    "En mathématiques, quelques grandes familles : étendre abusivement une règle, (a + b)² = a² + b² ; confondre des écritures proches, −3² et (−3)² ; perdre un signe en changeant de membre ; simplifier une fraction en « barrant » des termes d'une somme ; lire le signe égal comme « donne » plutôt que comme une égalité.",
    "En physique-chimie : confondre masse et poids, penser que le courant est « consommé » par la lampe, croire qu'un objet s'arrête dès qu'on ne le pousse plus, oublier les unités ou les conversions, appliquer une formule sans vérifier ses conditions.",
    "Le traitement suit trois gestes : faire expliquer la démarche pour identifier la règle fausse, la mettre en défaut par un contre-exemple que l'élève calcule lui-même, puis reconstruire la règle correcte et s'entraîner sur des cas voisins. Tenez pour chaque chapitre une liste des erreurs rencontrées : elle devient votre meilleur outil de préparation."
   ],
   "ex": "Simplification fausse : (x + 6)/2 devient x + 3. On demande : « Essaie avec x = 2. » Avant simplification : 8/2 = 4. Après : 5. L'élève voit l'écart ; on revient à la règle : on ne simplifie que des facteurs, donc (x + 6)/2 = x/2 + 3.",
   "fm": "La partie « piège classique » de vos vidéos et de vos cours s'appuie sur ces erreurs. Un répertoire d'erreurs par chapitre, alimenté par vos séances, enrichit à la fois vos supports et votre contenu public.",
   "err": "Barrer en rouge et écrire la bonne réponse. La règle fausse reste en place et produira la même erreur au prochain devoir.",
   "cle": "Chercher la règle fausse derrière l'erreur, la mettre en défaut par un contre-exemple, reconstruire.",
   "q": "Quelles sont les trois erreurs que vous avez le plus souvent corrigées ce mois-ci, et quelle règle fausse se cache derrière chacune ?",
   "id": "didactique-3"
  },
  {
   "t": "Rédiger : raisonner par écrit",
   "p": [
    "Aux examens, une partie des points récompense la démarche et sa présentation, pas seulement le résultat. Un élève qui trouve juste mais n'écrit rien perd des points ; un élève qui se trompe dans un calcul mais rédige correctement en garde. La rédaction se travaille donc à chaque séance, pas la veille de l'examen.",
    "En mathématiques, un raisonnement se rédige en trois temps : ce que l'on sait (les données, citées), la propriété utilisée (nommée, avec ses conditions), la conclusion. La formule « On sait que… Or… Donc… » donne un cadre simple au collège.",
    "En physique-chimie, un calcul se présente en quatre lignes : la relation littérale, l'expression de la grandeur cherchée, l'application numérique avec les unités converties, le résultat avec son unité et un nombre raisonnable de chiffres. Ajoutez un réflexe : le résultat est-il vraisemblable ?",
    "Montrez d'abord une rédaction modèle, puis faites rédiger l'élève et comparez. Corrigez la rédaction avec la même exigence que le calcul."
   ],
   "ex": "« On sait que ABC est un triangle rectangle en A, avec AB = 3 cm et AC = 4 cm. Or, d'après le théorème de Pythagore, BC² = AB² + AC². Donc BC² = 9 + 16 = 25, et BC = 5 cm. » En physique : P = m × g ; P = 0,5 kg × 9,8 N/kg ; P = 4,9 N.",
   "fm": "Vos corrigés détaillés servent de rédactions modèles. Demandez à l'élève de comparer sa copie au corrigé ligne par ligne et de noter ce qui manque dans sa rédaction.",
   "err": "Accepter un résultat juste « parce qu'il a compris ». Le correcteur de l'examen ne verra que ce qui est écrit.",
   "cle": "Données, propriété nommée, conclusion ; en physique : formule, calcul, unité, vraisemblance.",
   "q": "Quelle part de vos séances est consacrée à faire rédiger, et pas seulement à faire trouver ?",
   "id": "didactique-4"
  },
  {
   "t": "Des supports fiables",
   "p": [
    "Un support faux coûte plus cher qu'aucun support : l'élève apprend l'erreur. Chaque définition vient d'une source officielle, chaque exercice d'un vrai sujet, chaque résultat est vérifié.",
    "Un standard écrit vous évite de tout redécider à chaque chapitre et permettra un jour à d'autres de produire comme vous.",
    "La vérification suit un ordre : le programme officiel de la classe d'abord (la notion est-elle au programme, à ce niveau, sous cette forme ?), puis l'énoncé (toutes les données sont-elles présentes et cohérentes ?), puis le corrigé (chaque résultat recalculé).",
    "Un support destiné à être réutilisé mérite une relecture à froid, un autre jour. Les erreurs que l'on ne voit plus en écrivant apparaissent le lendemain."
   ],
   "ex": "Avant de diffuser une série de 3e sur Thalès : vérifier dans le programme sénégalais la formulation attendue, contrôler que chaque figure correspond aux longueurs de l'énoncé, recalculer chaque quotient.",
   "fm": "Votre bibliothèque suit un standard de production : programme sénégalais, exercices réels, corrigés vérifiés par calcul.",
   "err": "Reprendre un exercice trouvé en ligne sans vérifier qu'il correspond au programme sénégalais. Notations, niveau et vocabulaire peuvent différer.",
   "cle": "Le fond se source, la forme se crée, chaque calcul se vérifie.",
   "q": "Quel support utilisé cette semaine n'a pas encore été vérifié selon votre standard ?",
   "v1": "L5-3",
   "id": "didactique-5"
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
 "id": "seance",
 "n": 10,
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
   "t": "Construire une séance",
   "p": [
    "Une bonne séance a un objectif unique, annoncé au début et vérifié à la fin. Elle va du guidé à l'autonome : un exemple modèle, un exercice fait ensemble, un exercice fait seul.",
    "Elle se termine par un travail précis pour la séance suivante et par deux lignes de compte rendu pour le parent.",
    "Une séance de deux heures peut se découper ainsi, à titre de repère : dix minutes de rappel cahier fermé, vingt-cinq minutes de notion avec un exemple modèle, trente-cinq minutes de pratique guidée, trente-cinq minutes de pratique autonome, dix minutes de bilan et de travail à faire, cinq minutes de compte rendu. Les proportions comptent plus que les minutes : plus de la moitié du temps, c'est l'élève qui travaille.",
    "La fin de séance est le moment le plus souvent sacrifié. Réservez-la dès le début : c'est là que l'élève dit ce qu'il a appris et que vous vérifiez l'objectif."
   ],
   "ex": "Objectif annoncé : « À la fin de la séance, tu sauras résoudre un système de deux équations par substitution. » Vérification finale : un système nouveau, résolu seul en dix minutes.",
   "fm": "Vos cours suivent ce déroulé : activité, définition, exemple modèle, exercice d'application corrigé. Votre fiche de séance détaille les phases et leur durée.",
   "err": "Passer la séance à faire les devoirs du lendemain. L'élève est dépanné, le parent est content ce soir-là, mais rien n'a été appris de durable.",
   "cle": "Un objectif par séance, du guidé à l'autonome, un compte rendu à la fin.",
   "q": "Lors de votre dernière séance, quel était l'objectif unique, et comment avez-vous vérifié qu'il était atteint ?",
   "v1": "L5-1",
   "id": "seance-1"
  },
  {
   "t": "Préparer en quinze minutes",
   "p": [
    "Une séance improvisée dépend de votre forme du jour. Une séance préparée, même brièvement, garantit le niveau. Quinze minutes suffisent si la préparation suit toujours les mêmes questions.",
    "Première question : où en est la classe ? Le cours à domicile est le plus efficace quand il est relié à ce qui se fait en classe. Demandez le cahier de cours et le cahier de textes, et notez le chapitre en cours et la date du prochain devoir.",
    "Deuxième question : quel est l'objectif, formulé comme une capacité observable ? « L'élève sera capable de factoriser avec une identité remarquable » se vérifie ; « revoir les identités remarquables » ne se vérifie pas.",
    "Troisième question : avec quoi ? Un exemple modèle, deux exercices guidés, deux exercices autonomes de difficulté croissante, un exercice de réserve. Dernière question : quel prérequis risque de manquer, et comment le tester en deux minutes au début ?"
   ],
   "ex": "Fiche de préparation : « Samedi, Awa, 3e. Classe : chapitre racines carrées, devoir le 20. Objectif : simplifier une racine carrée. Prérequis à tester : carrés parfaits jusqu'à 144. Exemple modèle : √72. Guidés : √50, √108. Autonomes : exercices 4 et 6. Réserve : exercice 9. »",
   "fm": "Votre fiche de séance détaille déjà les phases et leur durée. Vos kits de chapitre (cours, exercices, corrigés, révision) fournissent l'exemple modèle et les exercices : la préparation consiste surtout à choisir.",
   "err": "Préparer un contenu trop ambitieux « pour être sûr d'occuper les deux heures ». Un objectif atteint vaut mieux que trois objectifs survolés.",
   "cle": "Quatre questions : où en est la classe, quel objectif observable, quels exercices, quel prérequis.",
   "q": "Savez-vous, pour chaque élève, quel chapitre est en cours en classe et la date de son prochain devoir ?",
   "id": "seance-2"
  },
  {
   "t": "Questionner et guider",
   "p": [
    "Les travaux de Barak Rosenshine sur les enseignants les plus efficaces montrent des constantes : ils posent beaucoup de questions, vérifient la compréhension de chaque étape, consacrent plus de temps à la pratique guidée et corrigent les erreurs tout de suite. Ils visent aussi un taux de réussite élevé pendant l'entraînement, de l'ordre de 80 % : assez pour installer la confiance, pas trop pour que l'élève reste en effort.",
    "« Tu as compris ? » n'est pas une question : l'élève répond oui. Demandez-lui plutôt d'expliquer, de donner un exemple, de dire ce qu'il ferait ensuite, de repérer l'erreur dans une solution fausse.",
    "Laissez du silence. Après une question, attendez quelques secondes avant de reformuler ou d'aider. C'est dans ce temps que l'élève cherche.",
    "Guider, c'est aider juste ce qu'il faut puis retirer l'aide. On montre un exemple complet ; on en fait un second ensemble, l'élève dictant les étapes ; il fait le troisième avec un indice ; le quatrième seul. Si le quatrième échoue, on revient d'un cran, sans reproche."
   ],
   "ex": "Au lieu de « Tu as compris la substitution ? » : « Explique-moi pourquoi on remplace y dans la deuxième équation. » Puis : « Voici une solution, il y a une erreur à la ligne 2 ou 3. Trouve-la. »",
   "fm": "La séance « du guidé à l'autonome » de vos cours est exactement cette aide que l'on retire progressivement. Notez dans le compte rendu à quel niveau d'aide l'élève a réussi.",
   "err": "Enchaîner les explications parce que l'élève hoche la tête. Sans question qui l'oblige à produire, vous ne savez pas ce qu'il a compris.",
   "cle": "Faire expliquer plutôt que demander « compris ? », attendre, puis retirer l'aide pas à pas.",
   "q": "Quelles questions posez-vous pour vérifier la compréhension, en dehors de « tu as compris ? »",
   "id": "seance-3"
  },
  {
   "t": "Le cadre professionnel à domicile",
   "p": [
    "Vous travaillez chez les gens. La qualité perçue commence avant le premier exercice : arriver à l'heure, saluer la famille, avoir son matériel, commencer sans délai. Un retard se prévient par un message, toujours.",
    "Demandez dès le début un lieu de travail : une table, de la lumière, le moins de passage possible, la télévision éteinte. Le téléphone de l'élève reste hors de portée ; le vôtre aussi, sauf pour l'heure.",
    "Travaillez dans un espace ouvert ou à portée de vue d'un adulte de la maison. C'est une règle de prudence qui protège l'élève, la famille et vous-même. Gardez une distance professionnelle : cordial, jamais familier ; aucune remarque sur la maison ou la vie de la famille.",
    "Terminez à l'heure et de la même façon : l'élève range, vous notez le travail à faire dans son cahier, vous dites un mot au parent présent, et le compte rendu écrit part le soir même."
   ],
   "ex": "Premier jour chez une famille : « Pour qu'Ibrahima travaille bien, il nous faudrait une table au calme, si possible toujours la même, et que son téléphone reste dans une autre pièce pendant la séance. Est-ce possible ? »",
   "fm": "Votre positionnement est « le soutien scolaire professionnel du quartier » : ce professionnalisme se prouve d'abord par la ponctualité, la tenue et la régularité des comptes rendus. Vos conditions prévoient déjà le cas des reports.",
   "err": "Accepter de travailler dans le salon, télévision allumée, « pour ne pas déranger ». La séance perd la moitié de son efficacité et vous en porterez la responsabilité.",
   "cle": "Ponctualité, lieu calme, espace ouvert, fin de séance identique à chaque fois.",
   "q": "Chez quelle famille les conditions de travail ne sont-elles pas bonnes, et que pouvez-vous demander ?",
   "id": "seance-4"
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
 "id": "evaluer",
 "n": 11,
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
   "t": "Mesurer et montrer la progression",
   "p": [
    "Votre promesse est une progression mesurable. Il faut donc un point de départ (le test d'entrée), des mesures régulières (devoirs, évaluations) et un point d'étape pour les parents.",
    "Kumon ne fait avancer l'élève que lorsque la notion est maîtrisée. Mesurer sert aussi à cela : savoir quand passer à la suite.",
    "Mesurer une progression suppose de comparer des choses comparables : les mêmes compétences, évaluées de la même façon, à deux dates. Notez pour chaque élève quelques indicateurs stables : réussite aux questions de rappel, note aux devoirs blancs, part des exercices réussis sans aide.",
    "Les notes de l'établissement comptent pour les parents, mais elles dépendent du professeur, du sujet et du chapitre. Présentez-les à côté de vos propres mesures, sans les confondre."
   ],
   "ex": "Fiche de suivi de Khady, 3e : diagnostic d'octobre 7/20 ; devoir blanc de novembre 10/20 ; exercices réussis sans aide : 3 sur 10 en octobre, 6 sur 10 en décembre. Trois chiffres, une tendance lisible.",
   "fm": "Vos outils : le test diagnostique d'entrée par classe, le kit de révision des prérequis pour la première séance, les devoirs avec barème, le bilan mensuel.",
   "err": "Annoncer « il progresse » sans chiffre. Le parent n'a alors que la note de l'école pour juger, et elle peut dire le contraire.",
   "cle": "Sans point de départ mesuré, aucune progression ne peut être montrée.",
   "q": "Pour chacun de vos élèves, quels chiffres pouvez-vous montrer aujourd'hui sur son évolution depuis le début ?",
   "v1": "L5-2",
   "id": "evaluer-1"
  },
  {
   "t": "Trois évaluations, trois usages",
   "p": [
    "On évalue pour trois raisons différentes. Avant d'enseigner, l'évaluation diagnostique situe l'élève : que sait-il déjà, quels prérequis manquent ? Pendant l'apprentissage, l'évaluation formative vérifie en continu ce qui est compris, pour ajuster la séance. Après, l'évaluation sommative fait le bilan sur un ensemble : devoir, composition, examen blanc.",
    "Les confondre crée des malentendus. Une évaluation formative n'a pas besoin de note : elle sert à décider de la suite. Une évaluation sommative se passe dans les conditions de l'examen : temps limité, sans aide, barème annoncé.",
    "Un bon test diagnostique est court (vingt à trente minutes), couvre les prérequis de l'année plutôt que le programme en cours, et classe ses questions par notion. Le résultat utile n'est pas la note globale mais la carte : acquis, fragile, non acquis, notion par notion.",
    "Cette carte dicte le plan des premières séances et fournit le point de départ que vous montrerez au parent."
   ],
   "ex": "Diagnostic d'entrée en 2nde S : calcul littéral (4 questions), équations et inéquations (3), géométrie du triangle (3), fonctions (2), proportionnalité et unités (3). Résultat : calcul littéral fragile, fonctions non acquises. Les deux premières séances commencent par là.",
   "fm": "Vos tests diagnostiques d'entrée par classe et vos livrets de révision des prérequis remplissent cette fonction. Vos évaluations de chapitre avec barème servent d'évaluations sommatives.",
   "err": "Faire passer un long test noté sur 20 à un nouvel élève et lui annoncer une mauvaise note le premier jour. Le diagnostic doit éclairer, pas décourager.",
   "cle": "Diagnostique avant, formative pendant, sommative après : trois moments, trois usages.",
   "q": "Votre test d'entrée produit-il une carte notion par notion, ou seulement une note ?",
   "id": "evaluer-2"
  },
  {
   "t": "Corriger pour faire progresser",
   "p": [
    "Une copie corrigée et rendue n'apprend rien si l'élève ne regarde que la note. La correction devient utile quand elle classe les erreurs et quand l'élève reprend lui-même ses fautes.",
    "Un code simple suffit, écrit dans la marge : C pour une erreur de calcul, M pour une erreur de méthode (mauvais outil ou étape manquante), R pour un défaut de rédaction, L pour une mauvaise lecture de l'énoncé, S pour une notion non sue. L'élève voit alors où part la majorité de ses points.",
    "Un barème détaillé, proche de celui de l'examen, montre que les points se gagnent étape par étape : la formule citée, la mise en équation, le calcul, la conclusion avec unité. Il apprend à l'élève à ne jamais rendre une question blanche.",
    "Dernier geste, le plus important : la reprise. L'élève refait sans aide les questions manquées, puis un exercice voisin. Notez les erreurs récurrentes dans sa fiche de suivi ; elles alimentent les questions de rappel des séances suivantes."
   ],
   "ex": "Devoir blanc de 3e, 11/20. Marges : C, C, L, R, C. Constat partagé avec l'élève : « Tu perds cinq points sur des calculs, pas sur la compréhension. Objectif du mois : vérifier chaque calcul par un second moyen. »",
   "fm": "Vos devoirs avec barème et vos corrigés détaillés permettent cette correction codée. Le projet de stratégie de gestion des évaluations de tous vos élèves peut s'appuyer sur ce même code d'erreurs.",
   "err": "Corriger toute la copie au tableau en donnant les solutions. L'élève recopie, et refera les mêmes erreurs.",
   "cle": "Coder les erreurs, détailler le barème, faire refaire par l'élève.",
   "q": "Que deviennent les copies que vous corrigez : l'élève reprend-il ses erreurs, et en gardez-vous une trace ?",
   "id": "evaluer-3"
  },
  {
   "t": "Le bilan mensuel et l'échange avec les parents",
   "p": [
    "Le bilan mensuel transforme votre travail en information lisible. Une page suffit : notions travaillées, résultats mesurés, points forts, points à renforcer, objectif du mois suivant. Écrivez pour un parent qui n'a pas fait de mathématiques depuis longtemps.",
    "Soyez honnête et précis. Un bilan toujours positif perd sa valeur le jour où la note de l'école déçoit. Dites ce qui avance, ce qui n'avance pas encore, et ce que vous allez faire. Un constat difficile accompagné d'un plan est bien reçu.",
    "Fixez un objectif simple et vérifiable pour le mois suivant : une compétence, une mesure, une date. « D'ici fin janvier, réussir sans aide huit équations sur dix. »",
    "Accompagnez le bilan d'un échange de dix minutes : le parent pose ses questions, vous lui dites comment aider à la maison (un horaire de travail fixe, vérifier que les exercices sont faits) sans lui demander d'enseigner."
   ],
   "ex": "« Bilan de novembre — Omar, 5e. Travaillé : fractions, proportionnalité. Résultats : rappel de début de séance 4/5 en moyenne ; évaluation de chapitre 12/20. Point fort : calcul mental. À renforcer : problèmes à plusieurs étapes. Objectif de décembre : résoudre seul un problème en deux étapes, trois fois sur quatre. »",
   "fm": "Le bilan mensuel fait partie de votre promesse : « chaque mois apporte une progression que vous pouvez voir ». Votre atelier de ce module vous fait écrire son modèle.",
   "err": "Envoyer le bilan sans objectif pour la suite. Le parent sait ce qui s'est passé, pas où l'on va.",
   "cle": "Une page, des faits, un point à renforcer, un objectif mesurable pour le mois suivant.",
   "q": "Votre dernier bilan contenait-il un objectif vérifiable pour le mois suivant ?",
   "id": "evaluer-4"
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
 "n": 12,
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
   "t": "Connaître l'épreuve avant de la préparer",
   "p": [
    "On ne prépare bien que ce que l'on connaît précisément : durée, coefficient, structure du sujet, barème, matériel autorisé. Ces informations figurent dans l'en-tête des sujets officiels ; relisez-les chaque année, car elles peuvent changer.",
    "Au BFEM, l'épreuve de mathématiques dure 2 heures et porte le coefficient 3, le plus élevé parmi les épreuves communes ; les sciences physiques ont le coefficient 2. L'examen comporte deux groupes d'épreuves, et le second groupe comprend lui aussi une épreuve écrite de mathématiques.",
    "Au baccalauréat, les sujets récents de l'Office du Bac indiquent pour les séries S2, S2A, S4 et S5 une épreuve de mathématiques de 4 heures au coefficient 5, et une épreuve de sciences physiques de 4 heures au coefficient 6 pour S2 et S2A. En S1, S1A et S3, le coefficient des sciences physiques est de 8.",
    "Une réforme du baccalauréat est en discussion au Sénégal depuis 2026 (réduction du nombre de séries, nouvelles disciplines). Vérifiez donc à chaque rentrée les textes en vigueur auprès de l'Office du Bac et de la Direction des examens et concours avant d'annoncer quoi que ce soit aux familles."
   ],
   "ex": "Avec un élève de 3e, ouvrir trois sujets de BFEM de mathématiques d'années différentes et relever ensemble : durée, coefficient, nombre d'exercices, répartition des points entre activités numériques et activités géométriques, types de questions qui reviennent.",
   "fm": "Votre bibliothèque contient une banque de sujets d'examen (BFEM et Bac) et vos documents pédagogiques sénégalais sont rangés par classe. La formule EXCELLENCE inclut les annales du Bac et un examen blanc corrigé par mois.",
   "err": "Préparer l'examen avec des sujets d'un autre pays ou d'une autre série. Le format, le programme et les attentes de rédaction ne sont pas les mêmes.",
   "cle": "Durée, coefficient, structure, barème : on les lit sur les sujets officiels, chaque année.",
   "q": "Pour chacune de vos classes d'examen, connaissez-vous la structure exacte du dernier sujet officiel ?",
   "id": "examens-1"
  },
  {
   "t": "Le rétroplanning de l'année d'examen",
   "p": [
    "Une année d'examen se planifie à l'envers, à partir de la date de l'épreuve. On distingue trois phases : apprendre le programme, consolider, s'entraîner dans les conditions de l'examen.",
    "Fixez d'abord la fin : les dernières semaines sont réservées aux sujets complets, pas aux chapitres nouveaux. Remontez ensuite : le programme doit être terminé plusieurs semaines avant l'épreuve, ce qui donne le rythme des chapitres.",
    "Suivez la progression de la classe pour rester utile aux devoirs, mais gardez votre propre fil : à chaque séance, un temps de rappel sur les chapitres anciens, et une fois par mois une évaluation qui mêle plusieurs chapitres. C'est la pratique espacée appliquée à l'année.",
    "Tenez compte du calendrier réel : compositions, fêtes, vacances, éventuelles perturbations scolaires. Un planning qui ignore ces semaines sera faux dès novembre."
   ],
   "ex": "Élève de Terminale S2, épreuves début juillet. Octobre à mars : chapitres au rythme de la classe, examen blanc mensuel. Avril-mai : fin du programme, reprise des chapitres faibles repérés aux examens blancs. Juin : un sujet complet par semaine en temps réel, correction détaillée, fiches de formules.",
   "fm": "Votre rythme de deux séances de 2 heures par semaine en Terminale et l'examen blanc mensuel de la formule EXCELLENCE fournissent déjà la structure de ce rétroplanning.",
   "err": "Découvrir en mai que trois chapitres n'ont jamais été abordés. Le rétroplanning sert précisément à voir ce retard dès janvier.",
   "cle": "On part de la date de l'épreuve et on remonte : entraînement, consolidation, apprentissage.",
   "q": "Pour chaque élève de 3e ou de Terminale, à quelle date le programme sera-t-il terminé au rythme actuel ?",
   "id": "examens-2"
  },
  {
   "t": "S'entraîner sur annales",
   "p": [
    "Les annales servent à trois choses : connaître le format, repérer les thèmes qui reviennent, et surtout s'entraîner à produire une copie complète en temps limité. Lire un corrigé ne remplace pas cet entraînement.",
    "Un entraînement utile respecte les conditions réelles : sujet entier, durée de l'épreuve, sans cahier, sans téléphone, matériel autorisé seulement. L'élève découvre alors ses vrais problèmes : il ne finit pas, il s'attarde sur une question, il ne rédige pas.",
    "La correction compte autant que l'épreuve. Notez avec un barème proche de l'officiel, codez les erreurs, puis faites reprendre les questions manquées. Tenez un tableau des résultats par thème : il montre où investir les séances suivantes.",
    "Commencez tôt par des exercices d'annales classés par chapitre, dès que le chapitre est terminé, puis passez aux sujets complets quand une grande partie du programme est vue."
   ],
   "ex": "Tableau de suivi d'une élève de 3e sur quatre BFEM blancs : activités numériques 6/10, 7/10, 7/10, 8/10 ; activités géométriques 3/10, 4/10, 4/10, 6/10. La priorité des séances est claire : la géométrie.",
   "fm": "Vos séries d'exercices réels et votre banque de sujets permettent les deux étapes : exercices d'annales par chapitre, puis sujets complets. Vos corrigés d'évaluation servent de barème.",
   "err": "Faire les annales « ensemble », à voix haute, avec l'encadreur. L'élève croit savoir, mais n'a jamais produit seul une copie entière.",
   "cle": "Sujet entier, temps réel, sans aide ; puis correction au barème et reprise des erreurs.",
   "q": "Combien de sujets complets en temps réel chacun de vos élèves d'examen aura-t-il faits avant l'épreuve ?",
   "id": "examens-3"
  },
  {
   "t": "Le jour J : temps, méthode, sang-froid",
   "p": [
    "Un élève qui sait peut échouer par mauvaise gestion de l'épreuve. Cette gestion s'apprend et se répète pendant les examens blancs.",
    "Première règle : lire tout le sujet avant d'écrire, et commencer par ce que l'on sait faire. Deuxième règle : répartir le temps selon les points. Pour une épreuve de 2 heures notée sur 20, cela fait six minutes par point ; un exercice sur 5 points mérite environ une demi-heure, pas une heure.",
    "Troisième règle : ne jamais rester bloqué. Si une question résiste, on admet son résultat pour traiter la suite, et on y revient à la fin. Quatrième règle : garder dix minutes pour relire, vérifier les calculs, les unités et les conclusions.",
    "Le stress se réduit surtout par la répétition : un élève qui a déjà composé plusieurs fois dans les conditions réelles reconnaît la situation. Ajoutez des consignes simples pour la veille et le matin : matériel préparé, sommeil, repas, arrivée en avance, pas de révision de dernière minute sur un chapitre nouveau."
   ],
   "ex": "Plan de temps pour un BFEM de mathématiques de 2 heures : 5 minutes de lecture du sujet, 100 minutes de composition réparties selon le barème, 15 minutes de relecture. L'élève écrit ce plan sur son brouillon dès le début.",
   "fm": "Vos examens blancs sont le lieu où cette gestion s'installe. Demandez à l'élève d'écrire son plan de temps sur le brouillon à chaque fois, et commentez-le pendant la correction.",
   "err": "Donner des conseils de gestion du temps uniquement la veille de l'examen. Ce qui n'a pas été répété ne sera pas appliqué sous pression.",
   "cle": "Lire tout, commencer par le plus sûr, répartir le temps selon les points, relire dix minutes.",
   "q": "Vos élèves d'examen savent-ils combien de minutes ils doivent consacrer à chaque exercice ?",
   "id": "examens-4"
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
 "n": 13,
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
   "t": "La motivation suit la réussite",
   "p": [
    "On croit souvent qu'il faut motiver l'élève pour qu'il réussisse. C'est surtout l'inverse : la réussite constatée nourrit l'envie de continuer. Le psychologue Albert Bandura a appelé « sentiment d'efficacité personnelle » la conviction d'être capable de réussir une tâche ; sa première source est l'expérience de réussites réelles.",
    "Votre premier levier est donc de fabriquer des réussites vraies : des tâches à la portée de l'élève, mais qui demandent un effort, et dont il voit le résultat. Un exercice trop facile ne prouve rien ; un exercice trop difficile confirme l'échec.",
    "Rendez le progrès visible. Un élève ne remarque pas qu'il réussit aujourd'hui ce qu'il ratait il y a six semaines si personne ne le lui montre. Comparez ses copies, tenez un graphique simple de ses scores de rappel.",
    "Deux autres besoins comptent : avoir un peu de choix (l'ordre des exercices, la façon de vérifier) et se sentir respecté par un adulte qui croit en lui. La relation de travail est un outil pédagogique à part entière."
   ],
   "ex": "Élève de 5e découragé. Première séance : trois exercices choisis juste à son niveau, réussis. Deuxième séance : on monte d'un cran. À la quatrième, vous lui montrez sa première copie à côté de la dernière. C'est lui qui dit : « Avant, je ne savais pas faire ça. »",
   "fm": "Votre promesse d'une progression visible chaque mois vaut aussi pour l'élève. Le bilan mensuel peut lui être présenté à lui d'abord, avant d'être envoyé au parent.",
   "err": "Encourager sans preuve (« tu vas y arriver, c'est facile »). Si l'exercice est raté, l'élève conclut qu'il est encore plus faible qu'il ne le pensait.",
   "cle": "Des réussites réelles, à la bonne difficulté, et un progrès rendu visible.",
   "q": "Pour votre élève le moins motivé, quelle réussite réelle pouvez-vous organiser dès la prochaine séance ?",
   "id": "motivation-1"
  },
  {
   "t": "« Je suis nul en maths »",
   "p": [
    "Cette phrase décrit une croyance, pas un fait. L'élève attribue ses échecs à une cause fixe, « je ne suis pas fait pour ça », contre laquelle il ne peut rien. Tant qu'il le croit, l'effort lui paraît inutile.",
    "Les travaux de Carol Dweck sur l'état d'esprit suggèrent une piste simple, à utiliser avec mesure : valoriser la stratégie et le travail plutôt que l'intelligence. « Tu as vérifié ton résultat par un autre moyen, c'est ce qui t'a fait trouver l'erreur » plutôt que « tu es intelligent ». Les études sur les effets de cette approche donnent des résultats variables ; elle ne remplace pas un enseignement solide, mais elle évite d'enfermer l'élève dans une étiquette.",
    "Changez aussi le statut de l'erreur. Dans vos séances, une erreur est une information : elle montre où travailler. Dites-le, et montrez-le en cherchant calmement la cause plutôt qu'en sanctionnant.",
    "Enfin, l'anxiété a un effet direct : un élève tendu a moins de mémoire de travail disponible et réussit moins bien ce qu'il sait pourtant faire. Un rituel de début calme, une première question facile, un ton posé améliorent réellement les résultats."
   ],
   "ex": "L'élève : « De toute façon, je suis nulle en maths. » Réponse : « Tu ne sais pas encore factoriser, c'est différent. La semaine dernière, tu ne savais pas développer, et aujourd'hui tu as réussi quatre calculs sur cinq. On va faire pareil pour la factorisation. »",
   "fm": "La méthode CADRE donne à l'élève une suite d'actions à sa portée : il n'a plus à « être bon », il a une démarche à suivre. C'est un argument à lui donner autant qu'aux parents.",
   "err": "Comparer l'élève à un frère, une sœur ou un camarade. La comparaison confirme l'étiquette au lieu de la défaire.",
   "cle": "Dire « pas encore », valoriser la stratégie, traiter l'erreur comme une information.",
   "q": "Quelles phrases vos élèves emploient-ils pour parler d'eux-mêmes en mathématiques, et que leur répondez-vous ?",
   "id": "motivation-2"
  },
  {
   "t": "L'élève en grande difficulté",
   "p": [
    "Quand un élève de 4e ne maîtrise pas les fractions de 6e, lui expliquer mieux le chapitre de 4e ne sert à rien. Les mathématiques sont cumulatives : chaque notion repose sur les précédentes. Il faut descendre jusqu'au dernier terrain solide.",
    "La démarche a quatre temps. Diagnostiquer précisément les prérequis manquants. Choisir une seule priorité, celle qui débloque le plus de chapitres (souvent le calcul numérique et littéral). Travailler cette priorité jusqu'à la maîtrise avant d'avancer : c'est le principe de la pédagogie de la maîtrise décrite par Benjamin Bloom, et celui qu'applique Kumon. Garder en parallèle un lien minimal avec le chapitre de la classe pour que l'élève ne soit pas perdu en cours.",
    "Expliquez ce choix à l'élève et aux parents : pendant quelques semaines, les notes de l'école peuvent ne pas bouger, parce que l'on reconstruit en dessous. Annoncez ce que vous mesurerez à la place.",
    "Sachez aussi reconnaître vos limites. Certaines difficultés persistantes (lecture, attention, repérage dans l'espace, confusion durable des nombres) peuvent relever de troubles qui demandent l'avis de spécialistes. Votre rôle n'est pas de poser un diagnostic, mais de signaler ce que vous observez aux parents, avec tact, et de les inviter à en parler à l'établissement ou à un professionnel de santé."
   ],
   "ex": "Élève de 4e, diagnostic : tables fragiles, fractions non acquises. Plan sur six semaines : dix minutes de calcul à chaque séance avec score noté, fractions reprises depuis la représentation, puis lien avec le chapitre de la classe. Mesure annoncée au parent : le score de calcul, passé de 8/20 à 15/20.",
   "fm": "Vos livrets de révision des prérequis et vos tests diagnostiques par classe sont les outils de cette remontée. Les kits des classes inférieures de votre bibliothèque servent de supports de reprise.",
   "err": "Promettre un rattrapage rapide pour rassurer. Reconstruire des bases prend du temps ; mieux vaut l'annoncer que le subir.",
   "cle": "Descendre au dernier terrain solide, une priorité à la fois, maîtrise avant d'avancer.",
   "q": "Quel élève suivez-vous aujourd'hui sur le programme de sa classe alors que ses bases demanderaient une reprise ?",
   "id": "motivation-3"
  },
  {
   "t": "Poser un cadre avec l'adolescent",
   "p": [
    "La plupart des blocages de travail ne sont pas des problèmes de mathématiques : devoirs non faits, téléphone, fatigue, absence d'horaire. Un cadre clair, posé tôt, évite de transformer chaque séance en négociation.",
    "Fixez avec l'élève un petit nombre de règles, écrites dans son cahier : le travail donné est fait avant la séance, le téléphone est rangé, on dit quand on ne comprend pas. En échange, vous vous engagez aussi : ponctualité, explications sans moquerie, travail donné raisonnable.",
    "Quand le travail n'est pas fait, restez factuel. Cherchez la cause (trop long, pas compris, pas de moment prévu) et ajustez : moins d'exercices, mais faits ; un horaire fixe décidé avec la famille. La troisième fois, on en parle avec le parent, en présence de l'élève, sans l'humilier.",
    "Les parents sont vos alliés à condition de leur donner un rôle tenable : garantir un lieu et un horaire, vérifier que le travail est fait, vous prévenir d'un événement. Ne leur demandez pas d'expliquer les mathématiques, et ne rapportez pas chaque faiblesse de l'adolescent : il doit pouvoir vous faire confiance."
   ],
   "ex": "Contrat de travail en trois lignes, signé par l'élève : « 1. Je fais les deux exercices donnés avant chaque séance. 2. Mon téléphone reste dans le salon pendant la séance. 3. Je dis quand je ne comprends pas. » En face : « M. Faye arrive à l'heure, explique autant de fois que nécessaire, donne au plus trente minutes de travail. »",
   "fm": "Votre compte rendu après chaque séance permet de signaler le travail fait ou non fait de façon régulière et neutre, sans attendre que la situation se dégrade.",
   "err": "Se plaindre de l'élève au parent devant lui. Vous gagnez une réprimande ce jour-là et perdez sa coopération pour la suite.",
   "cle": "Peu de règles, écrites, réciproques ; les parents garantissent le lieu et l'horaire.",
   "q": "Quelles règles de travail avez-vous réellement posées, par écrit, avec chacun de vos élèves ?",
   "id": "motivation-4"
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
