/* =====================================================================
   FayeMath Formation — PÔLE B — Développement commercial
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
 "id": "notoriete",
 "n": 5,
 "pole": "B",
 "court": "Se faire connaître",
 "titre": "Se faire connaître",
 "but": "Attirer des familles sans gros budget, avec peu de canaux bien tenus.",
 "objectifs": [
  "Classer vos canaux et commencer par le plus proche",
  "Publier un contenu utile par semaine",
  "Obtenir des témoignages et des recommandations"
 ],
 "lecons": [
  {
   "t": "Peu de canaux, dans le bon ordre",
   "p": [
    "Un fondateur seul ne peut pas tenir sept canaux. Mieux vaut quatre canaux classés, du plus proche au plus large, et commencer par celui qui donne des résultats cette semaine.",
    "Le premier canal est toujours le réseau : anciens clients, famille, voisins, collègues enseignants. Les premières familles viennent presque toujours d'une recommandation.",
    "Chaque canal a un rôle. Le réseau apporte les premières familles, le terrain installe la présence dans le quartier, WhatsApp entretient le lien, Facebook élargit. Les utiliser dans cet ordre évite de payer une publicité pour des gens qui ne vous connaissent pas encore.",
    "Mesurez la source de chaque contact : « Comment avez-vous entendu parler de nous ? » Après deux mois, vous saurez quel canal mérite votre temps."
   ],
   "ex": "Sur dix contacts d'un mois : six par recommandation, trois par une affiche près d'un collège, un par Facebook. La conclusion est claire : renforcer les recommandations avant d'augmenter le budget publicitaire.",
   "fm": "Vos quatre canaux : (1) réseau personnel, (2) terrain ciblé à Bargny, (3) WhatsApp avec un chapitre offert, (4) Facebook local avec une petite publicité. LinkedIn sert à la crédibilité, une publication par semaine au plus.",
   "err": "Ouvrir un compte sur chaque réseau puis ne rien publier pendant des semaines. Un canal abandonné donne une image d'activité arrêtée.",
   "cle": "On active le réseau d'abord, la publicité payante en dernier.",
   "q": "D'où viennent précisément vos cinq dernières familles ?",
   "v1": "L4-0",
   "id": "notoriete-1"
  },
  {
   "t": "Le contenu qui attire",
   "p": [
    "Un contenu utile et gratuit prouve votre niveau mieux qu'une publicité. Les Sherpas ont grandi ainsi sur les réseaux sociaux, et Khan Academy est née de vidéos gratuites.",
    "Le bon contenu répond à une vraie difficulté d'élève : un exercice d'examen résolu, une méthode, une erreur fréquente. La régularité compte plus que la quantité.",
    "Un bon contenu a une seule idée et une suite : il se termine par une invitation simple (« écrivez-moi le mot BFEM pour recevoir la fiche »). C'est cette invitation qui transforme un lecteur en contact.",
    "Préparez par lots : une après-midi par mois pour quatre contenus vaut mieux que la recherche d'une idée chaque semaine. Vos supports de cours sont déjà une réserve d'exercices et de méthodes."
   ],
   "ex": "Série « L'erreur de la semaine » : une erreur fréquente de 3e (par exemple développer (a + b)² en a² + b²), l'explication en trois lignes, la bonne méthode, puis l'invitation à recevoir la fiche complète.",
   "fm": "Votre aimant à contacts : le chapitre 1 de 6e « Nombres décimaux arithmétiques ». Votre projet vidéo vise TikTok, YouTube et Facebook.",
   "err": "Publier uniquement des annonces (« inscriptions ouvertes »). Sans contenu utile, la page n'apporte rien et n'est pas partagée.",
   "cle": "Un contenu utile par semaine vaut mieux que dix contenus un seul mois.",
   "q": "Quels sont les trois exercices ou erreurs que vos élèves rencontrent le plus et que vous pourriez expliquer en public ?",
   "v1": "L4-1",
   "id": "notoriete-2"
  },
  {
   "t": "Le bouche-à-oreille et les témoignages",
   "p": [
    "Les parents satisfaits sont votre meilleur outil de marketing. Encore faut-il leur demander : un témoignage ne vient presque jamais tout seul.",
    "Demandez-le au bon moment, après un progrès visible, et demandez toujours l'accord avant de le publier. Demandez aussi le nom d'une famille à qui vous recommander.",
    "La recommandation se provoque par une demande précise. « Connaissez-vous un parent de la classe de votre fils que cela pourrait aider ? » obtient un nom ; « parlez de moi autour de vous » n'obtient rien.",
    "Un témoignage utile raconte un avant et un après, avec un fait observable : une note, une attitude, une habitude de travail. Proposez au parent trois questions simples pour l'aider à l'écrire."
   ],
   "ex": "Questions à envoyer : « Quelle était la difficulté de votre enfant avant ? Qu'est-ce qui a changé depuis ? Que diriez-vous à un parent qui hésite ? » Trois réponses courtes font un témoignage complet.",
   "fm": "Idée retenue du parcours : demander un témoignage écrit ou audio à chaque famille satisfaite après le premier mois.",
   "err": "Publier un témoignage sans accord, ou avec le nom et la photo de l'enfant. La confiance gagnée se perd d'un coup.",
   "cle": "Un témoignage se demande, au bon moment, et se publie avec accord.",
   "q": "Quelle famille satisfaite n'avez-vous encore jamais sollicitée pour un témoignage ou un nom ?",
   "v1": "L4-2",
   "id": "notoriete-3"
  }
 ],
 "cas": {
  "t": "Un mois sans nouveau contact",
  "s": "Quatre semaines sans aucun nouveau contact qualifié. Vous avez publié deux fois sur Facebook et collé dix affiches.",
  "q": [
   "Quel canal reprenez-vous en premier, et pourquoi ?",
   "Quelles trois actions menez-vous cette semaine ?",
   "Quel chiffre suivrez-vous pour savoir si cela fonctionne ?"
  ],
  "r": [
   "Le réseau et les familles actuelles : c'est le canal le plus rapide et le moins coûteux.",
   "Demander un nom à chaque parent satisfait ; relancer les anciens contacts restés sans suite ; envoyer un contenu utile à votre liste WhatsApp avec une invitation.",
   "Le nombre de contacts qualifiés par semaine, avec leur source."
  ]
 },
 "atelier": {
  "t": "Votre plan de contenu sur 4 semaines",
  "c": "Pour chacune des quatre prochaines semaines, écrivez : le sujet (un exercice, une méthode ou une erreur fréquente), la classe visée, le format (texte, image ou vidéo) et le canal de publication."
 },
 "outil": {
  "t": "Calendrier de contenu sur 4 semaines",
  "usage": "À remplir une fois par mois, en une seule séance de préparation.",
  "lignes": [
   "## Pour chaque semaine",
   "Sujet : un exercice d'examen, une méthode ou une erreur fréquente.",
   "Classe visée : …",
   "Format : texte, image ou vidéo courte.",
   "Canal : statut WhatsApp, Facebook, TikTok ou YouTube.",
   "Invitation finale : « Écrivez-moi … pour recevoir … ».",
   "## Après publication",
   "Nombre de réponses reçues · nombre de contacts qualifiés obtenus.",
   "## Règle",
   "Un contenu utile par semaine, préparé par lot de quatre."
  ]
 },
 "actions": [
  "Demander un témoignage à chaque famille satisfaite après le premier mois",
  "Publier un contenu utile par semaine pendant quatre semaines",
  "Demander à chaque parent satisfait le nom d'une famille à qui vous recommander"
 ],
 "quiz": [
  [
   "Quel canal activer en premier ?",
   [
    "La publicité Facebook",
    "Le réseau personnel",
    "LinkedIn"
   ],
   1,
   "Les premières familles viennent d'une recommandation."
  ],
  [
   "Qu'est-ce qui compte le plus pour le contenu ?",
   [
    "La régularité",
    "La durée des vidéos",
    "Le nombre de réseaux"
   ],
   0,
   "Un contenu utile par semaine."
  ],
  [
   "Quand demander un témoignage ?",
   [
    "Avant la première séance",
    "Après un progrès visible, vers la fin du premier mois",
    "Jamais, il doit venir seul"
   ],
   1,
   "Et toujours avec l'accord de la famille pour le publier."
  ],
  [
   "Pourquoi demander la source de chaque contact ?",
   [
    "Pour savoir quel canal mérite votre temps",
    "Pour remplir un fichier",
    "Pour fixer le prix"
   ],
   0,
   "Après deux mois, les chiffres désignent le bon canal."
  ],
  [
   "Comment se termine un bon contenu ?",
   [
    "Par le prix",
    "Par une invitation simple à vous écrire",
    "Par une liste de diplômes"
   ],
   1,
   "C'est l'invitation qui transforme un lecteur en contact."
  ],
  [
   "Quelle demande de recommandation fonctionne ?",
   [
    "« Parlez de moi autour de vous »",
    "« Connaissez-vous un parent de la classe que cela pourrait aider ? »",
    "« Partagez ma page »"
   ],
   1,
   "Une demande précise obtient un nom."
  ],
  [
   "Que raconte un témoignage utile ?",
   [
    "Un avant et un après, avec un fait observable",
    "Les qualités du fondateur",
    "Le prix des formules"
   ],
   0,
   "Une note, une attitude ou une habitude qui a changé."
  ],
  [
   "Comment préparer ses contenus ?",
   [
    "Un par un, chaque semaine",
    "Par lots, une fois par mois",
    "Quand l'inspiration vient"
   ],
   1,
   "La régularité tient mieux quand le contenu est prêt d'avance."
  ]
 ],
 "sources": [
  [
   "Manuel de vente et système de prospection FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  1,
  6
 ],
 "v1": 4
},
{
 "id": "vente",
 "n": 6,
 "pole": "B",
 "court": "Vente",
 "titre": "Vendre : du premier contact à l'inscription",
 "but": "Conduire un parent du premier contact à l'inscription avec une méthode que vous pouvez répéter et mesurer.",
 "objectifs": [
  "Situer chaque prospect dans le tunnel de vente",
  "Conduire l'appel de 15 minutes et la séance de découverte",
  "Répondre aux objections et relancer utilement",
  "Piloter la semaine par le nombre de contacts qualifiés"
 ],
 "lecons": [
  {
   "t": "Le tunnel de vente en 8 étapes",
   "p": [
    "Vendre n'est pas convaincre en une fois. C'est faire avancer chaque famille d'une étape à la suivante, sans en sauter.",
    "Savoir à quelle étape se trouve chaque prospect vous dit exactement quoi faire : relancer, appeler, proposer une séance de découverte ou envoyer la proposition.",
    "Le tunnel sert aussi de diagnostic. Si beaucoup de contacts n'arrivent jamais à l'appel, le problème est dans le premier message ; si les séances de découverte ne débouchent pas, il est dans la proposition. On corrige l'étape qui fuit, pas tout le système.",
    "Tenez la base à jour le jour même : un prospect sans date de prochaine action est un prospect perdu."
   ],
   "ex": "Sur un mois : 20 contacts, 9 appels, 5 séances de découverte, 2 inscriptions. La plus grosse perte est entre le contact et l'appel : c'est le premier message et la prise de rendez-vous qu'il faut retravailler.",
   "fm": "Votre tunnel : ATTIRER → CONTACTER → QUALIFIER (appel de 15 minutes) → FAIRE DÉCOUVRIR (séance gratuite d'une heure avec diagnostic) → PROPOSER → INSCRIRE → DÉMARRER → FIDÉLISER.",
   "err": "Proposer une séance de découverte à tout contact, sans appel préalable. Vous dépensez des trajets pour des familles qui n'avaient ni le besoin ni le budget.",
   "cle": "Chaque prospect est à une étape précise ; votre travail est de le faire passer à la suivante.",
   "q": "À quelle étape de votre tunnel perdez-vous le plus de familles ?",
   "v1": "L3-0",
   "id": "vente-1"
  },
  {
   "t": "L'appel de 15 minutes et la séance de découverte",
   "p": [
    "L'appel sert de filtre : il ne coûte aucun trajet. Vous y posez des questions (classe, difficultés, objectifs, disponibilités, budget) et vous écoutez plus que vous ne parlez.",
    "La séance de découverte montre votre méthode en vrai. Elle se termine par un diagnostic court et par un rendez-vous pour la proposition, jamais par « je vous laisse réfléchir ».",
    "Pendant l'appel, le parent doit parler plus que vous. Posez des questions ouvertes, reformulez ce que vous avez compris, puis proposez. Un parent qui s'est senti écouté accepte plus facilement la suite.",
    "À la fin de la séance de découverte, donnez le diagnostic en trois points : ce que l'élève sait faire, ce qui lui manque, ce que vous proposez. Puis fixez immédiatement le moment de la décision."
   ],
   "ex": "Clôture de la découverte : « Awa maîtrise le calcul numérique, mais elle bloque sur la mise en équation. Je propose la formule STANDARD, le samedi à 15 h. Je vous envoie le récapitulatif ce soir ; pouvons-nous nous appeler demain à 18 h pour votre décision ? »",
   "fm": "Le diagnostic CADRE se tient pendant la séance de découverte. Vous visez une à deux séances de découverte par semaine.",
   "err": "Terminer par « je vous laisse réfléchir ». Sans date, la décision se dilue et vous n'osez plus rappeler.",
   "cle": "Aucune séance de découverte sans appel préalable ; aucune séance de découverte sans suite fixée.",
   "q": "Quelles sont vos cinq questions d'appel, dans l'ordre, et laquelle obtient les réponses les plus utiles ?",
   "v1": "L3-1",
   "id": "vente-2"
  },
  {
   "t": "Les objections et la relance",
   "p": [
    "Une objection est une demande d'information, pas un refus. Les plus fréquentes portent sur le prix, le temps de l'élève, un ancien encadreur décevant ou « on va réfléchir ».",
    "La plupart des inscriptions viennent après une relance. Une relance utile apporte quelque chose : un compte rendu, une date précise, une réponse à la question restée ouverte.",
    "Traitez l'objection en quatre temps : accueillir (« je comprends »), questionner (« qu'est-ce qui vous fait hésiter ? »), répondre par un fait, vérifier (« est-ce que cela répond à votre question ? »).",
    "Arrêtez de relancer après un nombre fixé d'essais, avec un dernier message courtois qui laisse la porte ouverte. Votre temps de prospection est limité."
   ],
   "ex": "Objection : « Il avait déjà un encadreur l'an dernier, ça n'a rien donné. » Réponse : « Je comprends votre prudence. Qu'est-ce qui a manqué ? … Chez nous, vous recevez un compte rendu après chaque séance et un bilan chaque mois : vous voyez vous-même si cela avance. »",
   "fm": "Votre rythme de relance : deux jours après le contact, puis cinq jours après.",
   "err": "Répondre à une objection par un long argumentaire. Une question, puis un fait, suffisent.",
   "cle": "On prépare ses réponses aux objections à l'avance et on relance avec une information, pas avec « alors ? ».",
   "q": "Quelle objection entendez-vous le plus, et quelle est votre réponse en deux phrases ?",
   "v1": "L3-2",
   "id": "vente-3"
  },
  {
   "t": "Piloter par un seul chiffre",
   "p": [
    "Vous ne contrôlez pas le nombre d'inscriptions. Vous contrôlez le nombre de familles à qui vous parlez sérieusement chaque semaine.",
    "Tous les contacts ne se valent pas. À revenu égal, une fratrie suivie le même jour coûte un seul trajet : c'est le meilleur usage de votre temps.",
    "Vos taux de conversion réels remplacent les hypothèses. S'il vous faut dix contacts qualifiés pour deux inscriptions, vous savez combien de contacts il faut pour atteindre votre objectif de foyers.",
    "Regardez les chiffres une fois par semaine, à heure fixe, et ne changez qu'une chose à la fois. Sinon vous ne saurez pas ce qui a fonctionné."
   ],
   "ex": "Objectif : 3 foyers de plus en six semaines. Avec 2 inscriptions pour 10 contacts qualifiés, il faut environ 15 contacts, soit un peu moins de 3 par semaine au minimum ; l'objectif de 7 à 8 laisse une marge.",
   "fm": "Objectif : 7 à 8 contacts qualifiés par semaine ; alerte en dessous de 5 pendant deux semaines. Cibles prioritaires : les foyers à plusieurs enfants, puis la 3e (BFEM). Remplacez vos hypothèses de conversion par vos chiffres réels dès que vous en avez.",
   "err": "Juger sa semaine au nombre de messages envoyés. Ce qui compte, ce sont les conversations sérieuses avec des parents.",
   "cle": "Le chiffre à suivre chaque semaine est le nombre de contacts qualifiés.",
   "q": "Combien de contacts qualifiés avez-vous eus la semaine dernière, et d'où venaient-ils ?",
   "v1": "L3-3",
   "id": "vente-4"
  }
 ],
 "cas": {
  "t": "« On va réfléchir »",
  "s": "Après une séance de découverte réussie avec un élève de 3e, le père vous dit : « C'est bien, on va réfléchir et on vous rappelle. » Deux jours passent sans nouvelle.",
  "q": [
   "Qu'auriez-vous dû obtenir avant de partir ?",
   "Quel message de relance envoyez-vous à J+2 ?",
   "Que faites-vous à J+5 s'il ne répond toujours pas ?"
  ],
  "r": [
   "Une date précise pour la décision et l'envoi d'un récapitulatif écrit.",
   "Un message qui apporte quelque chose : le diagnostic en trois points et deux créneaux possibles pour démarrer.",
   "Une seconde relance courte avec une échéance, puis un dernier message courtois qui laisse la porte ouverte."
  ]
 },
 "atelier": {
  "t": "Écrire le script de l'appel de 15 minutes",
  "c": "Écrivez votre phrase d'ouverture, cinq questions à poser au parent dans l'ordre, puis la phrase qui propose la séance de découverte avec deux créneaux au choix."
 },
 "outil": {
  "t": "Script de l'appel de 15 minutes",
  "usage": "À garder sous les yeux pendant chaque appel de qualification.",
  "lignes": [
   "## Ouverture (1 min)",
   "« Bonjour Madame, Ousseynou Faye, de FayeMath Academy. Merci pour votre message. Avez-vous quelques minutes pour me parler de votre enfant ? »",
   "## Questions (8 min)",
   "En quelle classe est-il, et dans quel établissement ?",
   "Quelles matières posent problème, et depuis quand ?",
   "Qu'avez-vous déjà essayé ?",
   "Quel objectif avez-vous pour cette année ?",
   "Quels jours et horaires sont possibles chez vous ?",
   "## Reformulation (2 min)",
   "« Si je comprends bien, … Est-ce exact ? »",
   "## Proposition (3 min)",
   "« Je vous propose une séance de découverte gratuite d'une heure, avec un diagnostic. Plutôt [créneau 1] ou [créneau 2] ? »",
   "## Clôture (1 min)",
   "Confirmer l'adresse, le créneau, et envoyer un message récapitulatif."
  ]
 },
 "actions": [
  "Tenir la base des prospects à jour : statut, classe, date de la prochaine relance",
  "Garder les créneaux de prospection bloqués dans l'agenda chaque semaine",
  "Relever chaque dimanche les chiffres de la semaine : contacts qualifiés, séances de découverte, inscriptions"
 ],
 "quiz": [
  [
   "À quoi sert l'appel de 15 minutes ?",
   [
    "À donner un premier cours",
    "À filtrer sans dépenser un trajet",
    "À négocier le prix"
   ],
   1,
   "Il précède toujours la séance de découverte."
  ],
  [
   "Quel chiffre piloter chaque semaine ?",
   [
    "Le nombre de publications",
    "Le nombre de contacts qualifiés",
    "Le nombre d'abonnés"
   ],
   1,
   "7 à 8 par semaine."
  ],
  [
   "Quelle cible rapporte le plus par déplacement ?",
   [
    "Un élève de 2nde seul",
    "Une fratrie suivie le même jour",
    "Un élève de 6e seul"
   ],
   1,
   "Deux élèves pour un seul trajet."
  ],
  [
   "À quoi sert le tunnel en plus du suivi ?",
   [
    "À trouver l'étape qui perd le plus de familles",
    "À calculer le salaire",
    "À fixer les horaires"
   ],
   0,
   "On corrige l'étape qui fuit."
  ],
  [
   "Qui doit parler le plus pendant l'appel ?",
   [
    "L'encadreur",
    "Le parent",
    "L'élève"
   ],
   1,
   "Questions ouvertes, reformulation, puis proposition."
  ],
  [
   "Comment finir une séance de découverte ?",
   [
    "« Je vous laisse réfléchir »",
    "Par un diagnostic en trois points et une date de décision",
    "Par une remise"
   ],
   1,
   "Sans date, la décision se dilue."
  ],
  [
   "Quels sont les quatre temps du traitement d'une objection ?",
   [
    "Accueillir, questionner, répondre par un fait, vérifier",
    "Insister, baisser le prix, rappeler, abandonner",
    "Argumenter, comparer, promettre, conclure"
   ],
   0,
   "Une question puis un fait suffisent souvent."
  ],
  [
   "Quand relancer un prospect après le contact ?",
   [
    "Deux jours après, puis cinq jours après",
    "Chaque jour",
    "Un mois après"
   ],
   0,
   "Avec une information utile à chaque relance."
  ]
 ],
 "sources": [
  [
   "Manuel de vente, stratégie de vente et pilier Vente FayeMath Academy (vos documents de référence)",
   ""
  ]
 ],
 "veille": [
  6
 ],
 "v1": 3
},
{
 "id": "parents",
 "n": 7,
 "pole": "B",
 "court": "Relation parents",
 "titre": "Relation parents et fidélisation",
 "but": "Faire de chaque famille inscrite une famille qui reste, se réinscrit et vous recommande.",
 "objectifs": [
  "Réussir les 30 premiers jours d'une nouvelle famille",
  "Installer une communication régulière et sobre",
  "Traiter un moment difficile sans abîmer la relation",
  "Préparer la réinscription et la recommandation"
 ],
 "lecons": [
  {
   "t": "Les 30 premiers jours d'une famille",
   "p": [
    "Une famille décide de rester ou de partir pendant les premières semaines. Elle observe trois choses : êtes-vous ponctuel, l'enfant accroche-t-il, est-elle informée de ce qui se passe. Ces trois points se préparent.",
    "Le premier mois suit toujours le même parcours. Avant la première séance : message de bienvenue, conditions écrites, horaires confirmés. Première séance : test diagnostique et premiers repères de méthode. Chaque séance : un compte rendu court. Fin du mois : un bilan et un échange de dix minutes avec le parent.",
    "Ce parcours identique pour tous a un autre avantage : vous n'oubliez rien, même quand trois familles commencent la même semaine."
   ],
   "ex": "Semaine 1 : diagnostic, « votre fils maîtrise les opérations mais confond les propriétés des parallélogrammes ». Semaine 2 à 4 : deux lignes après chaque séance. Jour 30 : bilan d'une page et appel de dix minutes, « voici ce qui a avancé, voici l'objectif de décembre ».",
   "fm": "Vous disposez déjà des briques : conditions écrites, test diagnostique d'entrée par classe, kit de révision des prérequis pour la première séance, bilan mensuel. Il reste à les enchaîner dans un parcours d'accueil unique.",
   "err": "Démarrer les cours sans diagnostic « pour ne pas perdre de temps ». Sans point de départ, vous ne pourrez rien montrer à la fin du mois.",
   "cle": "Le premier mois suit un parcours écrit : bienvenue, diagnostic, comptes rendus, bilan.",
   "q": "Qu'est-ce qu'une nouvelle famille reçoit de vous, par écrit, pendant son premier mois ?",
   "id": "parents-1"
  },
  {
   "t": "Informer régulièrement, sans envahir",
   "p": [
    "Le parent paie pour un résultat qu'il ne voit pas : il n'assiste pas à la séance. Votre communication est donc la partie visible du service. Deux lignes après chaque séance valent mieux qu'un long rapport de temps en temps.",
    "Un bon compte rendu dit trois choses : ce qui a été travaillé, comment l'élève s'en est sorti, ce qu'il doit faire avant la prochaine séance. Il ne juge pas l'enfant, il décrit des faits.",
    "Fixez un cadre : un seul canal, des horaires de réponse annoncés, un ton constant. Vous restez disponible sans être joignable à toute heure."
   ],
   "ex": "« Bonsoir Madame. Aujourd'hui : équations du premier degré. Lamine réussit la résolution, il doit encore s'entraîner à poser l'équation à partir d'un énoncé. Travail pour samedi : exercices 3 et 5 de la fiche. Bonne soirée. »",
   "fm": "Vos préférences de rédaction pour les messages aux parents (ton doux, humain, naturel) s'appliquent ici. Le compte rendu après chaque séance figure déjà dans vos actions de suivi.",
   "err": "N'écrire au parent que pour la facture ou pour un problème. Il associe alors vos messages à de mauvaises nouvelles.",
   "cle": "Deux lignes factuelles après chaque séance : travaillé, résultat, travail à faire.",
   "q": "Si un parent relisait vos dix derniers messages, que comprendrait-il de la progression de son enfant ?",
   "id": "parents-2"
  },
  {
   "t": "Gérer les moments difficiles",
   "p": [
    "Quatre situations reviennent : un paiement en retard, une mauvaise note malgré les cours, des absences répétées, un parent mécontent. Aucune n'est une attaque personnelle ; chacune se traite avec la même méthode.",
    "La méthode tient en cinq temps. Écouter jusqu'au bout sans se justifier. Reformuler pour montrer que vous avez compris. Revenir aux faits : comptes rendus, bilans, conditions annoncées. Proposer une action précise et datée. Confirmer par écrit.",
    "Choisissez le bon moment et le bon canal : jamais devant l'élève, jamais à chaud par message vocal. Un appel calme, puis un écrit qui résume, protège la relation et vous protège."
   ],
   "ex": "Mauvaise note après six semaines : « Je comprends votre déception, je la partage. Le devoir portait sur un chapitre que nous n'avions pas encore repris. Voici ce que montrent les évaluations sur les chapitres travaillés. Je propose de consacrer les deux prochaines séances à ce chapitre et de refaire le devoir avec lui. »",
   "fm": "Vos conditions prévoient déjà le cadre pour les absences (report si la famille prévient 24 h avant) et les paiements (5 jours, suspension au-delà de 10 jours). S'y référer évite d'en faire une affaire personnelle.",
   "err": "Se justifier longuement ou rejeter la faute sur l'élève. Le parent retient le ton, pas les arguments.",
   "cle": "Écouter, reformuler, revenir aux faits, proposer une action datée, confirmer par écrit.",
   "q": "Quelle situation difficile récente auriez-vous traitée autrement avec cette méthode ?",
   "id": "parents-3"
  },
  {
   "t": "Fidéliser et préparer la réinscription",
   "p": [
    "Garder une famille coûte beaucoup moins que d'en trouver une nouvelle : pas de prospection, pas de séance de découverte, pas de période d'essai. Une famille qui reste deux ans vaut plusieurs familles d'un trimestre.",
    "La fidélité se construit aux moments clés : la fin de chaque trimestre (bilan et objectifs), les résultats de l'établissement (féliciter, ajuster), la fin de l'année (proposition pour les vacances et la rentrée). À chacun de ces moments, prenez l'initiative.",
    "Mesurez-la simplement : combien de familles présentes en octobre le sont encore en juin, et combien se réinscrivent à la rentrée. Quand une famille part, demandez-lui pourquoi ; c'est l'information la plus précieuse que vous puissiez obtenir."
   ],
   "ex": "En mai, message à chaque famille : « Voici le bilan de l'année de Coumba. Pour bien préparer la 3e, je propose le stage de vacances en août, puis la reprise dès la première semaine d'octobre. Souhaitez-vous que je vous réserve son créneau du samedi ? »",
   "fm": "Votre stage de vacances (8 séances de 2 h sur 2 semaines, 40 000 F) est un pont naturel entre deux années scolaires. Vous avez déjà une famille cliente revenue d'une année sur l'autre : c'est le modèle à reproduire.",
   "err": "Attendre la rentrée pour recontacter les familles. Entre-temps, certaines auront trouvé une autre solution.",
   "cle": "On prépare la réinscription avant la fin de l'année, et on demande toujours la raison d'un départ.",
   "q": "Combien de vos familles de l'an dernier sont encore avec vous, et que savez-vous des raisons de celles qui sont parties ?",
   "id": "parents-4"
  }
 ],
 "cas": {
  "t": "Le bulletin décevant",
  "s": "Fin du premier trimestre. Le fils de Mme Fall, en 4e, a 8/20 en maths alors que vous le suivez depuis octobre. Elle vous écrit, sèche : « Je ne vois pas à quoi servent ces cours. »",
  "q": [
   "Que faites-vous avant de répondre ?",
   "Comment conduisez-vous l'échange ?",
   "Quelle proposition concrète et datée faites-vous ?"
  ],
  "r": [
   "Relire vos comptes rendus et évaluations, demander les copies des devoirs de classe, ne pas répondre à chaud.",
   "Par un appel : écouter, reformuler, puis présenter les faits (point de départ, chapitres travaillés, écart avec les devoirs de classe).",
   "Un plan sur quatre semaines : reprise des chapitres évalués en classe, un devoir blanc corrigé, un point d'étape écrit à une date précise."
  ]
 },
 "atelier": {
  "t": "Votre message de bienvenue",
  "c": "Rédigez le message envoyé à une famille le jour de l'inscription : remerciement, rappel de la formule et du créneau, conditions en trois lignes, ce qui se passera à la première séance, et la date du premier bilan."
 },
 "outil": {
  "t": "Parcours d'accueil d'une nouvelle famille",
  "usage": "À suivre à l'identique pour chaque inscription.",
  "lignes": [
   "## Avant la première séance",
   "Message de bienvenue et conditions écrites envoyés ; confirmation reçue.",
   "Jour, heure et lieu confirmés ; nom et classe de l'élève notés dans la base.",
   "## Première séance",
   "Test diagnostique d'entrée ; premiers repères de méthode.",
   "Compte rendu au parent le soir même, avec le résultat du diagnostic.",
   "## Semaines 2 à 4",
   "Deux lignes après chaque séance : travaillé, résultat, travail à faire.",
   "## Jour 30",
   "Bilan mensuel d'une page ; échange de dix minutes avec le parent.",
   "Objectif du mois suivant fixé ; facture envoyée.",
   "## Après le premier mois",
   "Demander un témoignage si la famille est satisfaite, et le nom d'un parent à qui vous recommander."
  ]
 },
 "actions": [
  "Écrire le parcours d'accueil et l'appliquer à la prochaine famille",
  "Envoyer un compte rendu de deux lignes après chaque séance pendant un mois",
  "Préparer dès mai la proposition de réinscription pour chaque famille",
  "Demander la raison de son départ à toute famille qui arrête"
 ],
 "quiz": [
  [
   "Que fait une famille pendant les premières semaines ?",
   [
    "Elle décide de rester ou de partir",
    "Elle ne remarque rien",
    "Elle compare seulement les prix"
   ],
   0,
   "Ponctualité, accroche de l'enfant, information : trois points observés."
  ],
  [
   "Que contient un bon compte rendu de séance ?",
   [
    "Un jugement sur l'élève",
    "Ce qui a été travaillé, le résultat, le travail à faire",
    "Le détail de chaque exercice"
   ],
   1,
   "Deux lignes factuelles suffisent."
  ],
  [
   "Quel est le premier temps face à un parent mécontent ?",
   [
    "Se justifier",
    "Écouter jusqu'au bout",
    "Proposer une remise"
   ],
   1,
   "On écoute avant de reformuler et de revenir aux faits."
  ],
  [
   "Où traite-t-on un désaccord avec un parent ?",
   [
    "Devant l'élève",
    "Par un appel calme, confirmé par écrit",
    "Dans un groupe WhatsApp"
   ],
   1,
   "Jamais devant l'élève, jamais à chaud."
  ],
  [
   "Pourquoi fidéliser coûte-t-il moins que prospecter ?",
   [
    "Pas de prospection, pas de découverte, pas d'essai",
    "Parce que les prix baissent",
    "Parce que les séances sont plus courtes"
   ],
   0,
   "Une famille qui reste deux ans vaut plusieurs familles d'un trimestre."
  ],
  [
   "Quand préparer la réinscription ?",
   [
    "À la rentrée",
    "Avant la fin de l'année scolaire",
    "Jamais, elle est automatique"
   ],
   1,
   "On prend l'initiative en mai-juin."
  ],
  [
   "Que demander à une famille qui s'en va ?",
   [
    "Rien",
    "La raison de son départ",
    "Un dédommagement"
   ],
   1,
   "C'est l'information la plus précieuse pour progresser."
  ],
  [
   "Sans diagnostic d'entrée, que se passe-t-il à la fin du mois ?",
   [
    "Rien de particulier",
    "Aucune progression ne peut être montrée",
    "Le prix augmente"
   ],
   1,
   "Il faut un point de départ mesuré."
  ]
 ],
 "sources": [
  [
   "Education Endowment Foundation — One to one tuition (lien avec la classe et suivi des progrès)",
   "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition"
  ],
  [
   "Conditions générales et préférences de rédaction FayeMath Academy (vos documents)",
   ""
  ]
 ],
 "veille": [
  1
 ]
}
);
