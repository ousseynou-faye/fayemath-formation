/* =====================================================================
   FayeMath Formation — PÔLE D — Pilotage et croissance
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
 "id": "organisation",
 "n": 19,
 "pole": "D",
 "court": "Organisation",
 "titre": "Organisation et gestion du temps",
 "but": "Tenir ensemble les cours, les trajets, la prospection et la production sans rien perdre.",
 "objectifs": [
  "Tenir un seul lieu par type d'information",
  "Construire une semaine type réaliste",
  "Conduire une revue hebdomadaire de trente minutes",
  "Trier les tâches par importance et par urgence"
 ],
 "lecons": [
  {
   "id": "organisation-1",
   "t": "Un seul endroit pour chaque information",
   "p": [
    "Chercher un fichier ou se demander quelle version est la bonne coûte du temps chaque jour. La règle est simple : un dossier officiel, une seule version à jour par document, les anciennes aux archives.",
    "Chaque type d'information a un seul lieu de saisie. Deux lieux pour la même donnée finissent toujours par se contredire.",
    "Donnez à chaque document un nom qui se comprend seul : sujet, version, date. Un fichier « final_v2_bis » oblige à l'ouvrir pour savoir ce qu'il contient.",
    "Une information utile que l'on ne retrouve pas en une minute est, en pratique, perdue. Testez votre organisation : pouvez-vous retrouver les conditions envoyées à une famille, sa dernière facture et le dernier bilan de l'élève en moins d'une minute chacun ?"
   ],
   "appro": [
    "Adoptez une arborescence stable et peu profonde : quelques dossiers numérotés par fonction, puis des sous-dossiers par année ou par classe. Trois niveaux suffisent. Au-delà, on ne sait plus où ranger et l'on crée des doublons.",
    "Séparez le brouillon du définitif. Un document en cours vit dans un dossier de travail ; une fois validé, il rejoint son emplacement officiel et l'ancienne version part aux archives. Cette discipline vous évite d'envoyer à une famille une version dépassée."
   ],
   "ex": "Un parent appelle pour contester une séance facturée. Avec un seul lieu de saisie, vous ouvrez le classeur, retrouvez la date de la séance et le message de report non envoyé 24 h avant. La discussion dure deux minutes.",
   "fm": "Votre dossier unique est « P01- FAYEMATH ACADEMY ». Les versions remplacées vont dans « 99 - ARCHIVES », rien n'est supprimé. Les finances se saisissent uniquement dans le classeur de gestion financière.",
   "err": "Noter un paiement dans le classeur, un autre dans un carnet et un troisième dans WhatsApp. À la clôture, aucun total n'est fiable.",
   "cle": "Un dossier, une version à jour, un seul lieu de saisie par type d'information.",
   "exo": "Chronométrez-vous : retrouvez les conditions envoyées à une famille, sa dernière facture et le dernier bilan de l'élève. Notez ce qui a pris plus d'une minute et corrigez le rangement.",
   "q": "Quelle information de votre activité se trouve aujourd'hui à deux endroits différents ?",
   "v1": "L8-0"
  },
  {
   "id": "organisation-2",
   "t": "La semaine type",
   "p": [
    "Une semaine se construit autour des blocs qui ne bougent pas : les séances chez les familles et leurs trajets. La prospection et la production se placent ensuite dans des créneaux fixes.",
    "Un créneau fixe protège les tâches importantes qui ne crient pas, comme la prospection. Sans créneau, elles passent toujours après l'urgence du jour.",
    "Comptez honnêtement vos heures : séances, trajets, préparation, comptes rendus, prospection, production, administration, formation. Une semaine type qui ne compte que les séances est toujours dépassée.",
    "Laissez des marges. Un trajet prévu au plus juste rend chaque retard contagieux pour le reste de la journée ; un créneau tampon par jour absorbe l'imprévu."
   ],
   "appro": [
    "Construisez la semaine en trois couches. D'abord les engagements fixes : séances et trajets. Ensuite les blocs importants : prospection, production, formation, revue. Enfin les marges et le repos. Si la troisième couche disparaît, la semaine est trop pleine, même si tout « rentre » sur le papier.",
    "Placez chaque type de tâche au moment qui lui convient. La production de supports demande de la concentration : gardez-lui vos meilleures heures. Les appels aux parents se font quand ils sont joignables. Les comptes rendus se rédigent le soir même, tant que la séance est fraîche."
   ],
   "ex": "Mercredi type : 9 h-11 h production de supports ; 11 h-12 h prospection ; 15 h-17 h séance chez une famille ; 17 h 30-19 h 30 séance dans le même quartier ; 20 h 30 comptes rendus. Les deux séances regroupées économisent un trajet.",
   "fm": "Vos créneaux de prospection sont déjà dans votre agenda, 9 heures par semaine, du lundi au dimanche.",
   "err": "Remplir chaque heure libre par une nouvelle séance. La prospection, la préparation et le repos disparaissent, puis la qualité baisse.",
   "cle": "Les tâches importantes ont un créneau fixe dans l'agenda.",
   "exo": "Notez pendant une semaine le temps réellement passé par type d'activité, puis comparez-le à votre semaine type.",
   "q": "Quelle activité importante n'a aujourd'hui aucun créneau fixe dans votre semaine ?",
   "v1": "L8-1"
  },
  {
   "id": "organisation-3",
   "t": "La revue hebdomadaire",
   "p": [
    "Trente minutes par semaine suffisent pour garder la main : ce qui a été fait, les chiffres de la semaine, les trois priorités de la semaine suivante.",
    "La revue se fait toujours le même jour, à la même heure, et se termine par la mise à jour de la fiche d'état du projet.",
    "La revue suit toujours les mêmes questions, pour ne pas dépendre de l'humeur : qu'est-ce qui a été fait ? Quels sont les chiffres ? Qu'est-ce qui a bloqué ? Quelles sont les trois priorités de la semaine ? Que faut-il retirer de la liste ?",
    "Trois priorités, pas dix. La revue sert autant à renoncer qu'à planifier : ce qui n'est ni urgent ni important sort de la liste."
   ],
   "appro": [
    "Tenez la revue par écrit, dans le même document chaque semaine. Relire les quatre dernières revues révèle ce qu'une seule ne montre pas : une priorité reportée trois fois, un chiffre qui baisse lentement, un blocage qui revient.",
    "Ajoutez une revue mensuelle un peu plus longue : résultats financiers, nombre de foyers, familles à risque, avancement des projets, décision du mois. Et une revue trimestrielle qui regarde les objectifs de l'année. Les trois rythmes se complètent."
   ],
   "ex": "Dimanche 20 h : 6 contacts qualifiés, 1 séance de découverte, 0 inscription ; 11 séances données ; un bilan en retard. Priorités : envoyer le bilan lundi, relancer les deux prospects de la découverte, préparer le devoir blanc de 3e.",
   "fm": "Votre créneau du dimanche soir sert à relever les chiffres de la semaine. Votre fiche d'état du projet se met à jour à la fin de chaque session de travail.",
   "err": "Sauter la revue les semaines chargées. Ce sont précisément celles où l'on perd le fil.",
   "cle": "Une revue par semaine : fait, chiffres, trois priorités.",
   "exo": "Faites votre revue de cette semaine avec la trame en six points, par écrit, et fixez le jour et l'heure de la prochaine.",
   "q": "Quelles étaient vos trois priorités de la semaine dernière, et combien ont été tenues ?",
   "v1": "L8-2"
  },
  {
   "id": "organisation-4",
   "t": "Important ou urgent : choisir ses batailles",
   "p": [
    "Toutes les tâches ne se valent pas. Une distinction simple, attribuée au président Eisenhower, aide à trier : une tâche est urgente si elle exige une réponse rapide, importante si elle fait avancer vos objectifs. Les deux ne coïncident pas toujours.",
    "Ce qui est urgent et important se fait tout de suite : une séance, un parent mécontent. Ce qui est important mais pas urgent se planifie : prospection, production de supports, formation, contrat. C'est la zone qui construit l'entreprise, et celle que l'on reporte le plus.",
    "Ce qui est urgent mais peu important se traite vite et par lots : messages, petites demandes. Ce qui n'est ni l'un ni l'autre se supprime.",
    "Protégez aussi votre attention. Regroupez les réponses aux messages à deux ou trois moments fixes de la journée plutôt que de répondre à chaque notification ; le travail de fond (préparer, rédiger, produire) demande des plages sans interruption."
   ],
   "appro": [
    "Une liste de tâches n'est pas un plan. Pour chaque journée, choisissez la veille au soir une tâche principale, celle qui fera de la journée une journée utile même si rien d'autre n'aboutit, et commencez par elle. Le reste de la liste vient après.",
    "Apprenez à estimer. Notez le temps prévu et le temps réel de vos tâches récurrentes pendant deux semaines. La plupart des gens sous-estiment d'un tiers ou de moitié ; connaître votre écart rend vos plannings réalistes."
   ],
   "ex": "Lundi matin, dix tâches. Urgent et important : confirmer la séance de 15 h. Important, non urgent : rédiger le contrat d'accompagnement (créneau jeudi 9 h). Urgent, peu important : répondre à cinq messages (lot de 12 h 30). Ni l'un ni l'autre : refaire le logo d'une affiche déjà imprimée (supprimé).",
   "fm": "Votre plan d'action dans cette application permet de donner un statut et une échéance à chaque action. Vos créneaux de prospection déjà bloqués protègent une tâche importante et non urgente.",
   "err": "Passer la journée à répondre aux messages dès qu'ils arrivent. Vous êtes occupé en permanence, et rien d'important n'avance.",
   "cle": "L'important non urgent se planifie dans l'agenda ; le reste se regroupe ou se supprime.",
   "exo": "Classez vos dix tâches en attente dans les quatre cases (urgent et important, important seulement, urgent seulement, ni l'un ni l'autre). Donnez un créneau aux tâches de la deuxième case.",
   "q": "Quelle tâche importante mais jamais urgente repoussez-vous depuis plus d'un mois ?"
  }
 ],
 "cas": {
  "t": "La semaine qui déborde",
  "s": "Cette semaine : 12 séances, deux nouveaux prospects à rappeler, un bilan mensuel en retard, une série d'exercices à finir pour samedi et une panne de transport mardi qui décale deux séances.",
  "q": [
   "Que traitez-vous en premier, et pourquoi ?",
   "Que reportez-vous ou supprimez-vous ?",
   "Que changez-vous dans votre semaine type pour que cela ne se reproduise pas ?"
  ],
  "r": [
   "Les engagements pris envers les familles : séances, reports confirmés par message, bilan en retard.",
   "La série d'exercices peut être réduite ou remplacée par un support existant ; tout ce qui n'est ni urgent ni important sort.",
   "Ajouter un créneau tampon par jour et un créneau fixe de production en début de semaine."
  ]
 },
 "atelier": {
  "t": "Dessiner votre semaine type",
  "c": "Jour par jour, écrivez vos séances et leurs trajets, puis placez vos créneaux de prospection, un créneau de production de supports, un créneau de formation (cette application) et la revue hebdomadaire."
 },
 "outil": {
  "t": "Trame de la revue hebdomadaire",
  "usage": "Trente minutes, toujours le même jour à la même heure.",
  "lignes": [
   "## 1. Ce qui a été fait",
   "Séances données · supports produits · actions terminées.",
   "## 2. Les chiffres",
   "Contacts qualifiés · séances de découverte · inscriptions · encaissements.",
   "## 3. Ce qui a bloqué",
   "Un fait, une cause, une décision.",
   "## 4. Les trois priorités de la semaine",
   "1. … 2. … 3. …",
   "## 5. Ce que je retire de ma liste",
   "Tâches ni urgentes ni importantes.",
   "## 6. Mise à jour",
   "Agenda de la semaine · fiche d'état du projet · plan d'action."
  ]
 },
 "actions": [
  "Faire la revue hebdomadaire chaque dimanche, à heure fixe",
  "Mettre à jour la fiche d'état du projet après chaque session de travail",
  "Déplacer aux archives toute version remplacée, le jour même"
 ],
 "quiz": [
  [
   "Combien de versions à jour par document ?",
   [
    "Une seule",
    "Une par mois",
    "Autant que de modifications"
   ],
   0,
   "Les anciennes vont aux archives."
  ],
  [
   "Pourquoi donner un créneau fixe à la prospection ?",
   [
    "Parce qu'elle est importante mais ne crie pas",
    "Parce qu'elle est urgente",
    "Parce qu'elle est facile"
   ],
   0,
   "Sans créneau, elle passe après l'urgence du jour."
  ],
  [
   "Que contient la revue hebdomadaire ?",
   [
    "Fait, chiffres, trois priorités",
    "Uniquement les dépenses",
    "Les cours de la semaine"
   ],
   0,
   "Trente minutes, toujours le même jour."
  ],
  [
   "Comment nommer un document ?",
   [
    "Sujet, version, date",
    "« final »",
    "Au hasard"
   ],
   0,
   "Le nom doit se comprendre sans ouvrir le fichier."
  ],
  [
   "Que doit compter une semaine type ?",
   [
    "Les séances seulement",
    "Séances, trajets, préparation, comptes rendus, prospection, production, administration",
    "Les heures de sommeil"
   ],
   1,
   "Une semaine qui ne compte que les séances est toujours dépassée."
  ],
  [
   "Combien de priorités fixer par semaine ?",
   [
    "Trois",
    "Dix",
    "Autant que possible"
   ],
   0,
   "La revue sert aussi à renoncer."
  ],
  [
   "Que faire d'une tâche importante mais pas urgente ?",
   [
    "La reporter",
    "La planifier dans l'agenda",
    "La supprimer"
   ],
   1,
   "C'est la zone qui construit l'entreprise."
  ],
  [
   "Comment traiter les messages ?",
   [
    "Dès qu'ils arrivent",
    "Par lots, à des moments fixes",
    "Une fois par semaine"
   ],
   1,
   "Le travail de fond demande des plages sans interruption."
  ]
 ],
 "sources": [
  [
   "Pilier Organisation et système de pilotage FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  6
 ],
 "v1": 8
},
{
 "id": "numerique",
 "n": 20,
 "pole": "D",
 "court": "Outils et IA",
 "titre": "Outils numériques et IA",
 "but": "Choisir peu d'outils, s'en servir à fond et utiliser l'IA comme un assistant que l'on contrôle.",
 "objectifs": [
  "Associer un seul outil à chaque fonction",
  "Utiliser l'IA pour préparer, jamais sans vérifier",
  "Protéger les données des familles au quotidien",
  "Automatiser ce qui se répète"
 ],
 "lecons": [
  {
   "id": "numerique-1",
   "t": "Une fonction, un outil",
   "p": [
    "Un fondateur seul n'a pas besoin de dix applications. Il a besoin que chaque fonction de l'entreprise ait un outil, et un seul : l'agenda pour le temps, un classeur pour l'argent, une base pour les prospects et les familles, un dossier pour les documents, une messagerie pour les échanges.",
    "Le bon outil est celui que vous ouvrez réellement tous les jours. Un tableur bien tenu vaut mieux qu'un logiciel complet abandonné au bout de deux semaines. Changer d'outil a un coût : migration, apprentissage, données perdues.",
    "Avant d'adopter un nouvel outil, posez trois questions. Quelle fonction remplit-il que je ne remplis pas déjà ? Fonctionne-t-il sur mon téléphone, avec une connexion faible ? Puis-je récupérer mes données si je l'arrête ?",
    "Écrivez la liste de vos outils et leur rôle sur une page. Elle évite la dispersion et servira le jour où quelqu'un vous rejoindra."
   ],
   "appro": [
    "Évaluez un outil au coût total : le prix, mais aussi le temps d'apprentissage, le temps de saisie quotidien et le risque de perdre les données. Un outil gratuit qui demande dix minutes de saisie par jour coûte cinq heures par mois.",
    "Avant de construire un outil sur mesure, tenez le processus à la main pendant quelques semaines, sur papier ou dans un tableur. Vous découvrirez ce dont vous avez réellement besoin, et vous éviterez de programmer des fonctions qui ne serviront jamais."
   ],
   "ex": "Fonction « savoir où en est chaque prospect » : une seule base, avec le statut, la classe et la date de la prochaine relance. Pas une liste dans le téléphone, une autre dans un carnet et une troisième dans les conversations.",
   "fm": "Vous avez déjà fixé plusieurs lieux uniques : le dossier « P01- FAYEMATH ACADEMY », le classeur de gestion financière pour les finances, l'agenda pour les créneaux. Votre application de gestion interne en projet devra remplacer des outils, pas s'y ajouter.",
   "err": "Tester un nouvel outil chaque mois parce qu'il semble plus moderne. Les données s'éparpillent et le temps passe à configurer plutôt qu'à travailler.",
   "cle": "Chaque fonction a un outil, et un seul, utilisé tous les jours.",
   "exo": "Écrivez sur une page vos fonctions (temps, argent, prospects et familles, documents, échanges) et l'outil unique de chacune.",
   "q": "Quelle fonction de votre activité est aujourd'hui remplie par deux outils concurrents ?"
  },
  {
   "id": "numerique-2",
   "t": "L'IA, un assistant que l'on contrôle",
   "p": [
    "Un assistant d'intelligence artificielle fait gagner du temps sur les tâches de préparation et de rédaction : premier jet d'un message, plan d'une séance, variantes d'un exercice, reformulation d'une explication, structure d'un document, relecture.",
    "Il a deux limites qu'il faut garder en tête. Il peut produire des affirmations fausses avec assurance, y compris des erreurs de calcul ou des références inexistantes. Et il ne connaît ni vos élèves, ni vos décisions, ni le programme sénégalais aussi bien que vos documents officiels.",
    "La règle qui en découle : l'IA propose, vous vérifiez, vous décidez. Tout exercice est recalculé, toute notion est confrontée au programme de la classe, tout message est relu avant envoi. Votre standard de production reste le juge.",
    "La qualité de la réponse dépend de la demande. Donnez le contexte (classe, chapitre, objectif), le format attendu, les contraintes, et un exemple de ce que vous voulez. Une demande précise économise trois corrections."
   ],
   "appro": [
    "Travaillez par étapes plutôt que par une seule grande demande. Demandez d'abord un plan, corrigez-le, puis faites rédiger partie par partie. Vous gardez la main sur la structure, et les erreurs se repèrent plus tôt.",
    "Utilisez aussi l'IA pour vous contredire : « Quelles sont les faiblesses de cette offre ? », « Quelles questions un parent sceptique poserait-il ? », « Relis ce bilan comme un parent qui n'a pas fait de maths depuis vingt ans ». Elle est souvent plus utile comme relecteur critique que comme auteur.",
    "Gardez une trace de vos bonnes demandes. Une demande qui a donné un bon résultat devient un modèle réutilisable. Et restez l'auteur de ce qui porte votre nom : votre méthode, votre ton avec les familles et vos décisions ne se délèguent pas."
   ],
   "ex": "Demande faible : « Fais des exercices sur Thalès. » Demande utile : « Classe de 3e, programme sénégalais. Trois exercices d'application directe du théorème de Thalès, difficulté croissante, données en centimètres, avec corrigé rédigé sur le modèle « On sait que… Or… Donc… ». » Puis vous recalculez chaque quotient.",
   "fm": "Votre règle est déjà écrite : ne jamais inventer le contenu d'une fiche, sourcer dans les références sénégalaises officielles et vérifier le livret de la classe avant de produire. Elle s'applique à tout ce qu'une IA génère pour vous.",
   "err": "Envoyer à une famille ou à un élève un contenu généré sans relecture. Une seule erreur dans un corrigé coûte plus de crédibilité que le temps gagné.",
   "cle": "L'IA propose, vous vérifiez, vous décidez.",
   "exo": "Rédigez avec le gabarit une demande complète pour un contenu dont vous avez besoin cette semaine, puis listez les vérifications à faire avant usage.",
   "q": "Sur quelles tâches l'IA vous fait-elle réellement gagner du temps, et lesquelles exigent toujours votre contrôle ?"
  },
  {
   "id": "numerique-3",
   "t": "Protéger les données au quotidien",
   "p": [
    "Vos fichiers contiennent des informations sur des familles et des mineurs. Leur protection repose sur des habitudes simples plus que sur des outils sophistiqués.",
    "Les accès d'abord : un mot de passe long et différent pour chaque service important, la validation en deux étapes sur la messagerie, le compte Google et les réseaux sociaux, un verrouillage sur le téléphone et l'ordinateur.",
    "Les sauvegardes ensuite. Une règle classique, dite 3-2-1 : trois copies des données importantes, sur deux supports différents, dont une hors du domicile ou en ligne. Un ordinateur volé ou en panne ne doit jamais emporter votre comptabilité et vos suivis d'élèves.",
    "Enfin, la retenue. Ne saisissez dans un service en ligne ou un assistant IA que le nécessaire : pas de nom complet d'élève, pas de numéro de parent, pas de bulletin, quand un prénom ou « un élève de 3e » suffit. Et supprimez ce qui n'a plus d'utilité."
   ],
   "appro": [
    "Pensez aux incidents probables plutôt qu'aux attaques spectaculaires : un téléphone perdu ou volé, un ordinateur en panne, un compte dont le mot de passe a fuité, un fichier envoyé à la mauvaise personne. Pour chacun, sachez à l'avance ce que vous feriez.",
    "Testez vos sauvegardes. Une sauvegarde jamais restaurée n'est qu'un espoir. Une fois par trimestre, ouvrez la copie et vérifiez qu'elle contient bien la version récente de vos documents essentiels.",
    "Votre téléphone est le maillon le plus exposé : il contient les conversations avec les familles, les contacts, parfois des photos de copies. Verrouillage, chiffrement, localisation à distance et sauvegarde des conversations sont le minimum."
   ],
   "ex": "Pour demander à une IA d'améliorer un bilan, vous remplacez « Ndeye Fall, 3e, CEM de la ville » par « une élève de 3e ». Le résultat est identique, et aucune donnée personnelle n'a quitté votre ordinateur.",
   "fm": "Vous êtes ingénieur en sécurité de l'information : ce domaine est votre point fort. L'enjeu est de l'appliquer à vos propres fichiers avec la même rigueur que dans votre plateforme, y compris la sauvegarde de cette application de formation.",
   "err": "Garder l'unique copie du classeur financier sur un seul ordinateur. Une panne efface des mois de données.",
   "cle": "Accès protégés, trois copies, et le minimum de données personnelles partout.",
   "exo": "Vérifiez aujourd'hui trois points : validation en deux étapes active sur votre compte principal, date de votre dernière sauvegarde, verrouillage de votre téléphone.",
   "q": "Si votre ordinateur disparaissait ce soir, que perdriez-vous définitivement ?"
  },
  {
   "id": "numerique-4",
   "t": "Automatiser ce qui se répète",
   "p": [
    "Une tâche faite trois fois de la même façon mérite un modèle. Les messages de confirmation, les relances, les factures, les comptes rendus, les bilans suivent presque toujours la même structure : écrivez-la une fois, et ne changez que les détails.",
    "Les modèles ne rendent pas la relation froide. Ils garantissent que rien n'est oublié et vous laissent l'attention nécessaire pour la phrase personnelle qui compte.",
    "Vient ensuite la check-list, pour tout ce qui comporte plusieurs étapes : accueil d'une famille, clôture du mois, préparation d'un examen blanc, publication d'un support. Elle fait gagner en fiabilité plus encore qu'en temps.",
    "N'automatisez par un outil technique que ce qui est déjà stable à la main. Automatiser un processus encore flou revient à figer ses défauts. Et mesurez : si un modèle ne vous fait pas gagner au moins quelques minutes à chaque usage, il n'était pas nécessaire."
   ],
   "appro": [
    "Rangez vos modèles au même endroit, classés par situation : inscription, confirmation, report, compte rendu, facture, relance, bilan, fin de collaboration. Un modèle introuvable n'est pas utilisé ; vous retapez alors le message, avec des oublis.",
    "Révisez les modèles deux fois par an. Un message type écrit il y a un an peut mentionner un ancien prix ou une condition modifiée. Datez chaque modèle et notez la version, comme pour vos supports de cours."
   ],
   "ex": "Modèle de confirmation : « Bonjour [Madame/Monsieur] [Nom], je vous confirme la séance de [prénom] ce [jour] à [heure]. Au programme : [chapitre]. À tout à l'heure. » Dix secondes au lieu de deux minutes, sans rien oublier.",
   "fm": "Vos kits de messages de vente et votre standard de production de la bibliothèque sont déjà des modèles. La boîte à outils de cette application regroupe les fiches prêtes à l'emploi de chaque module.",
   "err": "Construire un système automatisé complexe pour une tâche faite deux fois par an. Le temps de construction ne sera jamais remboursé.",
   "cle": "Trois répétitions : un modèle. Plusieurs étapes : une check-list.",
   "exo": "Créez trois modèles de messages que vous écrivez souvent (confirmation, report, compte rendu) et rangez-les dans un emplacement unique.",
   "q": "Quel message ou quelle tâche avez-vous refait de zéro plus de trois fois ce mois-ci ?"
  }
 ],
 "cas": {
  "t": "Le corrigé généré trop vite",
  "s": "Pressé, vous demandez à une IA le corrigé d'une série de 2nde sur les vecteurs et l'envoyez à un élève. Le lendemain, il vous signale qu'une réponse ne correspond pas à son calcul. Il a raison.",
  "q": [
   "Que faites-vous immédiatement vis-à-vis de l'élève et du parent ?",
   "Quelle règle de production aurait évité l'erreur ?",
   "Que changez-vous dans votre façon d'utiliser l'IA ?"
  ],
  "r": [
   "Reconnaître l'erreur, envoyer le corrigé rectifié, féliciter l'élève de l'avoir repérée.",
   "Recalculer chaque résultat avant diffusion, comme le prévoit votre standard.",
   "L'IA pour le premier jet et la mise en forme ; la vérification reste manuelle et systématique, avec une relecture à froid."
  ]
 },
 "atelier": {
  "t": "La carte de vos outils",
  "c": "Dressez la liste de vos fonctions (temps, argent, prospects et familles, documents, échanges, production de supports, formation). Pour chacune, écrivez l'outil unique retenu, où se trouve la sauvegarde, et ce que vous arrêtez d'utiliser."
 },
 "outil": {
  "t": "Gabarit de demande à une IA",
  "usage": "À copier et compléter avant chaque demande de production de contenu.",
  "lignes": [
   "## Contexte",
   "Classe : … · Matière : … · Chapitre : … · Programme : sénégalais.",
   "## Objectif",
   "Ce que l'élève doit savoir faire après : …",
   "## Ce que je demande",
   "Type de contenu : … · Nombre : … · Difficulté : …",
   "## Format",
   "Structure attendue, longueur, style de rédaction du corrigé.",
   "## Contraintes",
   "Notations du programme, unités, pas de notion hors programme.",
   "## Exemple",
   "Un exercice ou un message modèle à imiter.",
   "## Mes vérifications avant usage",
   "Conformité au programme · chaque calcul refait · relecture à froid · aucune donnée personnelle."
  ]
 },
 "actions": [
  "Écrire sur une page la liste de vos outils et le rôle unique de chacun",
  "Activer la validation en deux étapes sur vos comptes principaux",
  "Mettre en place une sauvegarde régulière du dossier P01 et du classeur financier",
  "Créer vos modèles de messages pour la confirmation, le report et le compte rendu"
 ],
 "quiz": [
  [
   "Combien d'outils par fonction ?",
   [
    "Un seul",
    "Deux, par sécurité",
    "Autant que possible"
   ],
   0,
   "Deux lieux pour la même donnée finissent par se contredire."
  ],
  [
   "Quel est le bon outil ?",
   [
    "Le plus moderne",
    "Celui que vous ouvrez réellement tous les jours",
    "Le plus cher"
   ],
   1,
   "Un tableur bien tenu vaut mieux qu'un logiciel abandonné."
  ],
  [
   "Quelle règle suivre avec l'IA ?",
   [
    "L'IA décide",
    "L'IA propose, vous vérifiez, vous décidez",
    "L'IA vérifie votre travail"
   ],
   1,
   "Elle peut se tromper avec assurance."
  ],
  [
   "Que faut-il faire d'un exercice généré par une IA ?",
   [
    "L'envoyer tel quel",
    "Le recalculer et le confronter au programme",
    "Le traduire"
   ],
   1,
   "Votre standard de production reste le juge."
  ],
  [
   "Que dit la règle de sauvegarde 3-2-1 ?",
   [
    "Trois copies, deux supports, une hors site",
    "Trois mots de passe, deux comptes, un téléphone",
    "Trois sauvegardes par jour"
   ],
   0,
   "Une panne ne doit jamais tout emporter."
  ],
  [
   "Quelles données donner à un service en ligne ?",
   [
    "Toutes, pour plus de précision",
    "Le strict nécessaire, sans donnée personnelle inutile",
    "Les bulletins complets"
   ],
   1,
   "« Une élève de 3e » suffit souvent."
  ],
  [
   "Quand créer un modèle de message ?",
   [
    "Quand la tâche a été faite trois fois de la même façon",
    "Dès la première fois",
    "Jamais"
   ],
   0,
   "On écrit la structure une fois, on change les détails."
  ],
  [
   "Que faut-il avant d'automatiser un processus ?",
   [
    "Qu'il soit déjà stable à la main",
    "Un gros budget",
    "Un développeur"
   ],
   0,
   "Automatiser un processus flou fige ses défauts."
  ]
 ],
 "sources": [
  [
   "Commission de protection des données personnelles du Sénégal (CDP)",
   "https://www.cdp.sn/"
  ],
  [
   "Règle de vérification des contenus et standard de production FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  4
 ]
},
{
 "id": "posture",
 "n": 21,
 "pole": "D",
 "court": "Posture du fondateur",
 "titre": "Posture et leadership du fondateur",
 "but": "Passer du rôle d'encadreur à celui de chef d'entreprise, décider clairement et durer.",
 "objectifs": [
  "Distinguer travailler dans l'entreprise et travailler sur l'entreprise",
  "Décider avec des critères et garder une trace",
  "Gérer son énergie pour tenir dans la durée",
  "Communiquer avec assurance et écoute"
 ],
 "lecons": [
  {
   "id": "posture-1",
   "t": "De l'encadreur au chef d'entreprise",
   "p": [
    "Donner un excellent cours et diriger une entreprise de cours sont deux métiers. Michael Gerber, dans « The E-Myth Revisited », décrit trois rôles que le fondateur d'une petite entreprise doit tenir : le technicien, qui fait le travail ; le manager, qui organise ; l'entrepreneur, qui voit où aller. La plupart des fondateurs restent dans le premier.",
    "Travailler dans l'entreprise, c'est donner les séances, corriger, répondre aux parents. Travailler sur l'entreprise, c'est améliorer l'offre, écrire la méthode, prospecter, mesurer, préparer la suite. Le premier produit le revenu du mois ; le second produit le revenu des années suivantes.",
    "Le piège est connu : plus vous avez d'élèves, moins vous avez de temps pour ce qui ferait grandir l'entreprise. La seule protection est un temps réservé chaque semaine au travail « sur » l'entreprise, traité comme un rendez-vous avec un client.",
    "Posez-vous régulièrement la question du dirigeant : si je devais m'absenter un mois, qu'est-ce qui continuerait à fonctionner ? Tout ce qui s'arrêterait n'existe encore que dans votre tête."
   ],
   "appro": [
    "Tenez pendant deux semaines le relevé de vos heures par rôle : technicien, manager, entrepreneur. La plupart des fondateurs découvrent que le troisième rôle occupe moins d'une heure par semaine. Ce constat chiffré est plus convaincant qu'une résolution.",
    "Le travail sur l'entreprise a ses livrables, comme les séances ont leurs comptes rendus : un guide de la méthode, un contrat, un tableau de suivi, une offre de stage, un plan de contenu. Fixez-en un par mois. Un créneau sans livrable se remplit de petites tâches.",
    "Écrire ce que vous faites est la première forme de ce travail. Chaque procédure rédigée (accueil d'une famille, préparation d'une séance, clôture du mois) vous fait gagner du temps demain et rend possible une délégation après-demain."
   ],
   "ex": "Une semaine de 38 heures : 24 heures de séances et trajets, 6 heures de préparation et comptes rendus (travail dans l'entreprise), et 8 heures réparties entre prospection, production de supports, revue hebdomadaire et formation (travail sur l'entreprise).",
   "fm": "Vous pilotez déjà FayeMath Academy par phases, avec des livrables de cadrage et un plan d'action : c'est le rôle du manager et de l'entrepreneur. Votre charge prévue de 35 à 39 heures par semaine à 7 foyers inclut la prospection.",
   "err": "Considérer la prospection, l'écriture de la méthode ou la formation comme ce que l'on fait « quand il reste du temps ». Il n'en reste jamais.",
   "cle": "Chaque semaine, un temps réservé pour travailler sur l'entreprise, pas seulement dedans.",
   "exo": "Relevez vos heures de la semaine dernière et répartissez-les en trois colonnes : faire le travail, organiser, développer l'entreprise.",
   "q": "Combien d'heures avez-vous consacrées la semaine dernière à travailler sur l'entreprise ?"
  },
  {
   "id": "posture-2",
   "t": "Décider et s'y tenir",
   "p": [
    "Un fondateur prend des dizaines de décisions par mois. La qualité vient moins de l'intuition que de la méthode : poser la question clairement, fixer les critères avant de regarder les options, décider, noter.",
    "Distinguez deux sortes de décisions. Les décisions réversibles (essayer un canal, tester un format de message) se prennent vite : on essaie, on mesure, on corrige. Les décisions difficilement réversibles (un statut juridique, un associé, un prix public, un engagement long) méritent du temps, des chiffres et un avis extérieur.",
    "Tenez un journal de décisions : la date, la décision, les raisons, ce que vous attendez, la date à laquelle vous vérifierez. Il évite de rouvrir sans cesse les mêmes débats et permet d'apprendre de ses erreurs sans réécrire l'histoire.",
    "Savoir dire non fait partie de la décision. Chaque oui à une demande hors de votre positionnement (une autre matière, une zone trop éloignée, un tarif négocié) est un non à ce que vous avez choisi de construire."
   ],
   "appro": [
    "Avant de décider, écrivez ce qui vous ferait changer d'avis. Si rien ne le pourrait, vous ne décidez pas : vous justifiez une préférence. Cette question simple protège des décisions prises par fatigue ou par envie de plaire.",
    "Cherchez un avis contraire. Exposez la décision à quelqu'un de confiance et demandez-lui d'en chercher les défauts. Pour les décisions importantes, laissez passer une nuit : ce qui paraissait urgent le soir l'est rarement autant le matin.",
    "Acceptez que certaines décisions soient mauvaises. Un bon processus de décision ne garantit pas le résultat ; il garantit que vous saurez pourquoi vous aviez choisi et ce qu'il faut corriger. Relisez votre journal de décisions une fois par trimestre."
   ],
   "ex": "Journal : « 4e classée en formule STANDARD (35 000 F, une séance de 2 h par semaine). Raison : cohérence de la grille par cycle. Attendu : offre plus lisible. Vérification : à la fin du trimestre, nombre de questions des parents sur la grille. »",
   "fm": "Vous tranchez déjà vos arbitrages par écrit et à date (décisions de cohérence, grille tarifaire, standard de production). Le journal de bord de cette application peut recueillir les décisions prises au fil de la formation.",
   "err": "Revenir chaque semaine sur une décision déjà prise parce qu'un parent ou un ami a fait une remarque. Sans critère de révision, tout se rediscute sans fin.",
   "cle": "Critères d'abord, décision ensuite, trace écrite et date de vérification.",
   "exo": "Notez dans le journal de bord de l'application vos trois dernières décisions importantes : date, raisons, résultat attendu, date de vérification.",
   "q": "Quelle décision repoussez-vous depuis des semaines, et qu'est-ce qui vous manque pour la prendre ?"
  },
  {
   "id": "posture-3",
   "t": "Durer : gérer son énergie",
   "p": [
    "Votre entreprise repose sur une seule personne. Votre santé, votre sommeil et votre concentration sont donc des actifs de l'entreprise, au même titre que la caisse.",
    "La fatigue ne se voit pas d'abord dans le planning, mais dans la qualité : séances moins préparées, patience réduite, comptes rendus oubliés, prospection abandonnée. Ce sont les premiers signaux à surveiller.",
    "Quelques règles tiennent mieux que la volonté. Un jour ou une demi-journée sans séance chaque semaine. Une heure de fin, le soir, après laquelle on ne répond plus aux messages. Les tâches exigeantes placées aux heures où vous êtes le plus lucide. Les trajets regroupés.",
    "Fixez aussi une limite de charge et respectez-la : un nombre maximal de foyers et d'heures par semaine. Au-delà, on n'ajoute pas un élève, on change de levier : prix, format à plusieurs élèves, équipe."
   ],
   "appro": [
    "Repérez ce qui vous recharge et ce qui vous vide. Certaines séances vous laissent de l'énergie, d'autres vous épuisent ; certains trajets sont reposants, d'autres non. Organisez la semaine pour ne pas enchaîner les situations les plus coûteuses.",
    "Prévoyez les périodes de pointe. Les semaines avant les compositions et les examens sont lourdes ; allégez à l'avance tout ce qui peut l'être (production, administratif) et protégez le sommeil. Après la pointe, prenez un vrai repos, décidé à l'avance.",
    "Ne restez pas seul. Un fondateur isolé porte chaque difficulté sans recul. Un pair entrepreneur, un ancien professeur ou un groupe d'enseignants avec qui échanger une fois par mois est une protection réelle contre le découragement."
   ],
   "ex": "Règles écrites : « Pas de séance le dimanche matin. Messages jusqu'à 20 h 30. Production de supports le matin, séances l'après-midi. Dix foyers au maximum. » Quand une onzième famille se présente, elle entre sur liste d'attente ou dans un stage.",
   "fm": "Votre capacité annoncée est d'une dizaine de foyers au maximum, et votre objectif de revenu est fixé à 300 000 F par mois : ces deux repères définissent votre limite et le moment de passer à un autre levier.",
   "err": "Accepter toutes les demandes pendant les mois d'examen, puis s'effondrer en juin, au moment où les élèves ont le plus besoin de vous.",
   "cle": "Une limite de charge écrite, un temps de repos fixe, et les signaux de fatigue surveillés.",
   "exo": "Écrivez vos trois signaux personnels de fatigue et la règle que vous appliquerez dès que deux d'entre eux apparaissent.",
   "q": "Quels sont vos premiers signaux de fatigue, et quelle règle vous protégerait ?"
  },
  {
   "id": "posture-4",
   "t": "Communiquer avec assurance",
   "p": [
    "Le fondateur parle au nom de l'entreprise : à un parent, à un directeur d'école, à un futur encadreur. L'assurance ne vient pas du volume de la voix, mais de la préparation et de la clarté.",
    "Avant un échange important, écrivez trois choses : ce que vous voulez obtenir, les trois points à dire, la question à laquelle vous redoutez de répondre. Puis commencez par écouter : la personne qui a pu s'exprimer écoute à son tour.",
    "L'écoute active tient en trois gestes : laisser finir, reformuler (« si je comprends bien… »), poser une question avant de répondre. Elle évite de répondre à côté et désamorce la plupart des tensions.",
    "Être ferme et courtois vont ensemble. On peut dire non à une remise, rappeler une échéance ou refuser une demande en restant aimable : une phrase qui reconnaît la demande, une phrase qui donne la règle, une phrase qui propose la suite. Votre image tient aussi aux détails : ponctualité, tenue, messages sans fautes, documents soignés."
   ],
   "appro": [
    "Adaptez votre discours à l'interlocuteur sans changer le fond. Au parent, parlez de son enfant et de ce qu'il verra. Au directeur d'école, parlez de résultats de classe et d'organisation. À un futur encadreur, parlez de méthode et de cadre de travail. La préparation consiste à choisir ce qui compte pour l'autre.",
    "Travaillez la voix et le rythme. Parlez plus lentement que vous ne le croyez nécessaire, marquez une pause après une idée importante, terminez vos phrases. Enregistrez-vous une fois : c'est le moyen le plus rapide de repérer les tics et les hésitations.",
    "Soignez l'écrit autant que l'oral. Un message sans faute, avec une formule de politesse, une demande claire et une date, inspire plus de confiance qu'un long texte. Relisez toujours avant d'envoyer, surtout sous le coup de l'émotion."
   ],
   "ex": "Demande de remise : « Je comprends que le budget compte. Nos prix sont les mêmes pour toutes les familles, c'est une question d'équité. Ce que je peux faire, c'est commencer par la séance de découverte gratuite pour que vous jugiez sur pièce. »",
   "fm": "Vos préférences de rédaction (ton doux, humain, naturel) et votre règle de prix nets sans remise donnent déjà le fond et la forme. Votre profil d'ingénieur est une preuve à présenter simplement, sans s'excuser ni s'en vanter.",
   "err": "Dire oui sur le moment pour éviter la gêne, puis revenir en arrière par message. La confiance en sort abîmée des deux côtés.",
   "cle": "Préparer trois points, écouter d'abord, puis dire la règle avec courtoisie.",
   "exo": "Préparez votre prochain échange important : l'objectif, les trois points à dire, la question redoutée et votre réponse.",
   "q": "Dans quelle situation récente avez-vous dit oui alors que vous pensiez non ?"
  }
 ],
 "cas": {
  "t": "La proposition flatteuse",
  "s": "Une connaissance vous propose de donner aussi des cours d'anglais et de SVT « puisque les parents le demandent », et un parent influent du quartier réclame un tarif spécial en échange de recommandations.",
  "q": [
   "Quels critères utilisez-vous pour décider ?",
   "Que répondez-vous à chacun ?",
   "Que notez-vous dans votre journal de décisions ?"
  ],
  "r": [
   "Le positionnement (maths et physique-chimie, méthode, suivi), la limite de charge, la règle de prix nets identiques pour tous.",
   "Un non courtois : reconnaître la demande, donner la règle, proposer la suite (orienter vers un autre encadreur ; remercier pour les recommandations sans contrepartie tarifaire).",
   "La décision, ses raisons, et la date à laquelle vous réexaminerez la question des autres matières, par exemple à l'arrivée d'un premier encadreur."
  ]
 },
 "atelier": {
  "t": "Vos règles de fondateur",
  "c": "Écrivez vos cinq règles personnelles : le temps hebdomadaire réservé au travail sur l'entreprise, votre limite de charge, votre heure de fin des messages, votre demi-journée de repos, et la question que vous vous poserez avant chaque oui."
 },
 "outil": {
  "t": "Fiche de décision",
  "usage": "À remplir pour toute décision difficilement réversible, puis à conserver.",
  "lignes": [
   "## La question",
   "Formulée en une phrase, avec la date limite pour décider.",
   "## Les critères",
   "Trois critères au plus, écrits avant de regarder les options.",
   "## Les options",
   "Pour chacune : avantages, risques, coût, réversibilité.",
   "## Les avis",
   "Qui ai-je consulté ? Quels chiffres ai-je regardés ?",
   "## La décision",
   "Ce que je décide, et pourquoi.",
   "## Le suivi",
   "Ce que j'attends · l'indicateur · la date de vérification."
  ]
 },
 "actions": [
  "Bloquer dans l'agenda un créneau hebdomadaire de travail sur l'entreprise",
  "Ouvrir un journal de décisions et y noter les trois dernières",
  "Écrire votre limite de charge et votre règle de repos"
 ],
 "quiz": [
  [
   "Quels sont les trois rôles décrits par Michael Gerber ?",
   [
    "Technicien, manager, entrepreneur",
    "Vendeur, comptable, juriste",
    "Élève, professeur, directeur"
   ],
   0,
   "La plupart des fondateurs restent dans le premier."
  ],
  [
   "Que signifie travailler « sur » l'entreprise ?",
   [
    "Donner plus de séances",
    "Améliorer l'offre, écrire la méthode, prospecter, mesurer",
    "Répondre aux messages"
   ],
   1,
   "C'est ce qui produit le revenu des années suivantes."
  ],
  [
   "Comment traiter une décision réversible ?",
   [
    "Longuement, avec un avis extérieur",
    "Vite : essayer, mesurer, corriger",
    "Ne jamais décider"
   ],
   1,
   "Le temps se réserve aux décisions difficilement réversibles."
  ],
  [
   "Que contient un journal de décisions ?",
   [
    "Date, décision, raisons, attendu, date de vérification",
    "La liste des élèves",
    "Les dépenses"
   ],
   0,
   "Il évite de rouvrir sans cesse les mêmes débats."
  ],
  [
   "Où se voit d'abord la fatigue ?",
   [
    "Dans la qualité : préparation, patience, comptes rendus",
    "Dans le chiffre d'affaires",
    "Nulle part"
   ],
   0,
   "Ce sont les premiers signaux à surveiller."
  ],
  [
   "Que faire quand la limite de charge est atteinte ?",
   [
    "Ajouter un élève",
    "Changer de levier : prix, groupes, équipe",
    "Supprimer le repos"
   ],
   1,
   "On n'ajoute pas d'heures, on change de modèle."
  ],
  [
   "Quels sont les gestes de l'écoute active ?",
   [
    "Laisser finir, reformuler, poser une question",
    "Couper, argumenter, conclure",
    "Prendre des notes en silence"
   ],
   0,
   "Elle évite de répondre à côté."
  ],
  [
   "Comment dire non à une remise ?",
   [
    "Reconnaître la demande, donner la règle, proposer la suite",
    "Ne pas répondre",
    "Accepter puis se rétracter"
   ],
   0,
   "Ferme et courtois vont ensemble."
  ]
 ],
 "sources": [
  [
   "Gerber, M. (1995). The E-Myth Revisited",
   ""
  ],
  [
   "Système de pilotage et vision stratégique FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  3,
  6
 ]
},
{
 "id": "grandir",
 "n": 22,
 "pole": "D",
 "court": "Grandir",
 "titre": "Grandir sans se perdre",
 "but": "Préparer la suite : plus de revenus sans plus d'heures, puis une équipe et le numérique.",
 "objectifs": [
  "Identifier le levier de croissance adapté à votre situation",
  "Préparer le recrutement et la formation d'un encadreur",
  "Choisir un numérique adapté à l'usage réel des élèves",
  "Financer chaque étape par la précédente"
 ],
 "lecons": [
  {
   "id": "grandir-1",
   "t": "Les limites du fondateur seul",
   "p": [
    "Seul, votre revenu est plafonné par vos heures. Quand le planning est plein, il reste quatre leviers : le prix, les formats à plusieurs élèves, une équipe et le numérique.",
    "Chaque levier a une condition. Monter le prix demande des preuves de résultats. Les stages demandent un lieu. Une équipe demande une méthode écrite. Le numérique demande du contenu.",
    "Calculez votre plafond : nombre maximal de foyers × revenu moyen par foyer. S'il est inférieur à votre objectif, la croissance ne viendra pas d'un effort de plus, mais d'un changement de modèle.",
    "Le levier le plus simple est souvent le format à plusieurs élèves : une heure de votre temps est payée par plusieurs familles, tout en restant accessible pour chacune."
   ],
   "appro": [
    "Chaque levier modifie votre métier. Augmenter le prix exige des preuves et une communication soignée. Les groupes demandent une autre pédagogie : gérer plusieurs niveaux, un lieu, une dynamique collective. Une équipe vous transforme en formateur et en contrôleur de qualité. Le numérique fait de vous un producteur de contenu. Choisissez aussi selon le métier que vous voulez exercer.",
    "Testez un levier à petite échelle avant de vous engager. Un stage de deux semaines, un groupe de révision de quatre élèves, une série de cinq vidéos : assez pour apprendre, trop peu pour mettre l'entreprise en danger si l'essai échoue."
   ],
   "ex": "Dix foyers à 35 000 F en moyenne donnent 350 000 F : c'est le plafond du cours individuel. Un stage de vacances avec six élèves à 40 000 F rapporte 240 000 F en deux semaines, pour seize heures de cours.",
   "fm": "Votre capacité annoncée est d'une dizaine de foyers au maximum. Le stage de vacances (8 séances de 2 h, 40 000 F par élève) est votre premier format au-delà du cours individuel.",
   "err": "Chercher à grandir en ajoutant des heures. Le plafond n'est pas le chiffre d'affaires, c'est votre temps.",
   "cle": "Planning plein : prix, groupes, équipe ou numérique.",
   "exo": "Calculez votre plafond de revenu en cours individuel, puis ce que rapporterait un stage de vacances avec six élèves.",
   "q": "Quel est votre plafond de revenu en cours individuel, et à quelle distance en êtes-vous ?",
   "v1": "L9-0"
  },
  {
   "id": "grandir-2",
   "t": "Recruter et garder la qualité",
   "p": [
    "Deux logiques existent. En prestataire, l'entreprise engage les encadreurs et facture les familles : elle garde la maîtrise de la qualité. En mandataire, elle met en relation et la famille traite avec l'encadreur : c'est plus léger, mais la qualité vous échappe.",
    "Recruter ne se fait qu'avec une méthode écrite, des supports prêts et un suivi. Mathnasium et Kumon forment leurs encadreurs à leur méthode avant tout.",
    "Un recrutement se prépare en trois documents : le profil recherché, le guide de la méthode (comment se déroule une séance, quels supports, quels comptes rendus) et la grille d'observation qui vous servira à vérifier la qualité.",
    "Formez par étapes : l'encadreur observe une de vos séances, vous co-animez, puis vous l'observez. Gardez ensuite un contrôle léger et régulier : bilans mensuels relus, retour des familles, une séance observée de temps en temps."
   ],
   "appro": [
    "Recrutez d'abord sur les qualités humaines que vous ne pouvez pas enseigner : ponctualité, patience, clarté d'expression, respect des familles. Le niveau disciplinaire se vérifie par un test ; la façon d'expliquer, par une séance d'essai observée.",
    "Prévoyez la rémunération et la marge avant de recruter. Sur le prix payé par la famille, quelle part revient à l'encadreur, quelle part couvre vos charges et votre temps de suivi ? Sans marge, chaque encadreur ajoute du travail sans ajouter de revenu. Faites vérifier le cadre légal par un professionnel.",
    "La qualité se protège par la relation avec les familles : c'est vous qui restez l'interlocuteur du parent, qui relisez les bilans et qui appelez une fois par trimestre. La famille doit sentir qu'elle a choisi FayeMath Academy, pas un encadreur isolé."
   ],
   "ex": "Parcours d'intégration : semaine 1, lecture du guide et de deux kits de chapitre, observation de deux séances ; semaine 2, une séance co-animée ; semaine 3, une séance seul, observée, suivie d'un retour écrit.",
   "fm": "Pour une marque qui repose sur une méthode, la logique prestataire est la plus cohérente. Le statut des encadreurs en droit sénégalais est à vérifier avec un professionnel.",
   "err": "Confier une famille à un encadreur « qui est bon en maths » sans méthode écrite ni suivi. La famille achète FayeMath Academy et reçoit autre chose.",
   "cle": "On ne délègue que ce qui est écrit.",
   "exo": "Rédigez le profil de votre premier encadreur : niveau, matières, zone, disponibilités, trois qualités indispensables, et la façon de les vérifier.",
   "q": "Si un encadreur commençait lundi, quels documents pourriez-vous lui remettre pour qu'il travaille comme vous ?",
   "v1": "L9-1"
  },
  {
   "id": "grandir-3",
   "t": "Le numérique, adapté au terrain",
   "p": [
    "uLesson a commencé par vendre ses leçons sur cartes mémoire avant de passer à l'application : la bonne technologie est celle que vos élèves peuvent vraiment utiliser.",
    "Le modèle de Khan Academy est simple : une vidéo courte, puis des exercices, puis une progression. Vos supports existants en sont la matière première.",
    "Avant de construire, vérifiez l'usage : quel téléphone ont vos élèves, quelle connexion, à quels moments, avec quel budget de données ? Une solution légère et utilisable hors connexion sera plus utilisée qu'une solution riche mais gourmande.",
    "Le numérique prolonge la séance, il ne la remplace pas : fiches, exercices, vidéos courtes entre deux cours, puis suivi de ce qui a été fait."
   ],
   "appro": [
    "Commencez par le plus simple qui rende service : un envoi régulier de fiches et d'exercices, des vidéos courtes, un suivi de ce qui a été fait. Chaque couche ajoutée doit répondre à un usage observé, pas à une idée séduisante.",
    "Mesurez l'usage réel. Combien d'élèves ouvrent le support envoyé, combien font les exercices, combien y reviennent ? Trois élèves qui utilisent chaque semaine valent mieux que trois cents téléchargements sans suite. Ce sont ces chiffres qui justifient d'investir davantage.",
    "Gardez le lien entre le numérique et la séance. L'outil prend sa valeur quand ce que l'élève a fait seul est repris et exploité avec vous ; sinon il devient une ressource de plus que l'on n'ouvre pas."
   ],
   "ex": "Entre deux séances, l'élève regarde une vidéo de six minutes sur l'erreur travaillée, fait cinq exercices de la série, et coche le chapitre. À la séance suivante, vous partez de ce qu'il a fait.",
   "fm": "Votre plateforme numérique et vos vidéos s'appuient sur la bibliothèque. Piste retenue : une vidéo de 5 à 8 minutes suivie d'une série d'exercices par chapitre.",
   "err": "Lancer une application complète avant d'avoir des élèves qui utilisent déjà vos supports papier ou PDF.",
   "cle": "On part de l'usage réel des élèves, pas de la technologie.",
   "exo": "Demandez à trois élèves comment ils utilisent leur téléphone pour travailler : appareil, connexion, moments, budget de données. Notez leurs réponses.",
   "q": "Comment vos élèves utilisent-ils réellement leur téléphone pour travailler aujourd'hui ?",
   "v1": "L9-2"
  },
  {
   "id": "grandir-4",
   "t": "Grandir lentement et sûrement",
   "p": [
    "Superprof a grandi sans investisseurs, en finançant chaque étape par ses propres revenus. Le fondateur de Coach for Tutors donne le même conseil : ne pas aller trop vite.",
    "Chaque étape se finance par la précédente : d'abord un planning plein et des familles satisfaites, ensuite un premier encadreur, ensuite le numérique.",
    "Donnez à chaque étape un critère de passage : on ne recrute pas avant un planning plein et une méthode écrite ; on n'investit pas dans le numérique avant d'avoir des supports éprouvés et des élèves qui les utilisent.",
    "Gardez une réserve. Une étape nouvelle (un encadreur, un local pour un stage) crée des charges avant de créer des revenus ; l'épargne de l'entreprise sert précisément à cela."
   ],
   "appro": [
    "Écrivez votre feuille de route en étapes, chacune avec un critère d'entrée, un coût, un indicateur de réussite et une condition d'arrêt. La condition d'arrêt est la plus négligée : à quel moment déciderez-vous qu'un essai n'a pas fonctionné et qu'il faut revenir en arrière ?",
    "Ne menez qu'un chantier de développement à la fois, en plus de l'activité courante. Terminer un projet avant d'en ouvrir un autre donne des résultats visibles ; en mener quatre de front donne quatre projets à moitié faits.",
    "Protégez ce qui fonctionne. Chaque étape de croissance met en tension la qualité des séances existantes. Si les bilans prennent du retard ou si une famille se plaint, c'est le signal de ralentir le développement, pas de l'accélérer."
   ],
   "ex": "Critères écrits : « Premier encadreur quand : 9 foyers suivis, liste d'attente de 2 familles, guide de la méthode rédigé, trois mois de charges en réserve. »",
   "fm": "Votre ambition à cinq ans : une plateforme nationale et un réseau de tuteurs partenaires en Afrique francophone.",
   "err": "Mener de front recrutement, plateforme, vidéos et nouvelle zone. Chaque projet avance trop lentement pour produire un résultat.",
   "cle": "Une étape à la fois, financée par la précédente.",
   "exo": "Écrivez le critère précis qui déclenchera votre prochaine étape de croissance, son coût, et la condition qui vous ferait y renoncer.",
   "q": "Quel critère précis déclenchera votre prochaine étape de croissance ?",
   "v1": "L9-3"
  }
 ],
 "cas": {
  "t": "Le planning plein",
  "s": "En mars, vous suivez dix foyers et trois familles demandent une place. Vous n'avez plus un créneau libre et la préparation des examens approche.",
  "q": [
   "Quelles options avez-vous, et que demande chacune ?",
   "Laquelle choisissez-vous pour les trois mois à venir ?",
   "Que préparez-vous dès maintenant pour la rentrée suivante ?"
  ],
  "r": [
   "Liste d'attente ; petit groupe de révision pour les classes d'examen ; premier encadreur (exige méthode écrite et suivi) ; révision du prix à la rentrée (exige des preuves de résultats).",
   "Une liste d'attente tenue par écrit et un format à plusieurs élèves pour les révisions, sans dégrader les dix foyers actuels.",
   "Le guide de la méthode, le profil du premier encadreur et les critères de passage."
  ]
 },
 "atelier": {
  "t": "Votre vision à 12 mois",
  "c": "Écrivez trois objectifs chiffrés pour dans douze mois (revenu mensuel, nombre de foyers, un objectif de contenu ou d'équipe), puis, pour chacun, la première action à faire ce mois-ci."
 },
 "outil": {
  "t": "Dossier d'intégration d'un encadreur",
  "usage": "À constituer avant tout recrutement.",
  "lignes": [
   "## 1. Le profil recherché",
   "Niveau d'études, matières, classes, zone, disponibilités, qualités humaines.",
   "## 2. Le guide de la méthode",
   "Déroulé d'une séance · méthode CADRE · supports à utiliser · compte rendu et bilan mensuel.",
   "## 3. Les règles",
   "Ponctualité, cadre à domicile, confidentialité, communication avec les familles.",
   "## 4. Le parcours de formation",
   "Observer deux séances · co-animer une séance · animer seul une séance observée.",
   "## 5. La grille d'observation",
   "Objectif annoncé · questions posées · temps de travail de l'élève · retour donné · clôture.",
   "## 6. Le suivi",
   "Bilans mensuels relus · retour des familles · une séance observée par trimestre.",
   "## 7. À vérifier avec un professionnel",
   "Le statut des encadreurs en droit sénégalais et le contrat adapté."
  ]
 },
 "actions": [
  "Écrire le profil du premier encadreur à recruter : niveau, qualités, zone",
  "Surveiller le prochain appel EdTech Fellowship",
  "Documenter votre méthode de séance pour qu'un autre encadreur puisse l'appliquer"
 ],
 "quiz": [
  [
   "Quels leviers restent quand le planning est plein ?",
   [
    "Prix, groupes, équipe, numérique",
    "Travailler la nuit",
    "Baisser les prix"
   ],
   0,
   "Chaque levier a sa condition."
  ],
  [
   "Quelle logique garde la maîtrise de la qualité ?",
   [
    "Prestataire",
    "Mandataire",
    "Aucune des deux"
   ],
   0,
   "L'entreprise engage les encadreurs et facture les familles."
  ],
  [
   "Comment uLesson a-t-elle commencé ?",
   [
    "Par des cartes mémoire",
    "Par une chaîne de télévision",
    "Par des écoles privées"
   ],
   0,
   "Elle s'est adaptée à l'usage réel des élèves."
  ],
  [
   "Comment calculer votre plafond en cours individuel ?",
   [
    "Nombre maximal de foyers × revenu moyen par foyer",
    "Prix le plus élevé × 12",
    "Heures de trajet × prix"
   ],
   0,
   "S'il est inférieur à l'objectif, il faut changer de modèle."
  ],
  [
   "Quels documents préparer avant de recruter ?",
   [
    "Profil, guide de la méthode, grille d'observation",
    "Un logo et une affiche",
    "Rien"
   ],
   0,
   "On ne délègue que ce qui est écrit."
  ],
  [
   "Comment former un encadreur ?",
   [
    "Il observe, vous co-animez, puis vous l'observez",
    "Il commence seul le premier jour",
    "Par un message WhatsApp"
   ],
   0,
   "Puis un contrôle léger et régulier."
  ],
  [
   "Que vérifier avant de construire un outil numérique ?",
   [
    "L'usage réel : téléphone, connexion, budget de données",
    "La mode du moment",
    "Le nombre de fonctionnalités"
   ],
   0,
   "La bonne technologie est celle que les élèves peuvent utiliser."
  ],
  [
   "À quoi sert un critère de passage ?",
   [
    "À décider objectivement du moment de l'étape suivante",
    "À ralentir l'entreprise",
    "À fixer les prix"
   ],
   0,
   "Par exemple : planning plein, méthode écrite, réserve constituée."
  ]
 ],
 "sources": [
  [
   "Vision stratégique et plan d'action FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  1,
  2,
  3,
  4
 ],
 "v1": 9
}
);
