/* FayeMath Formation — Guide des situations difficiles
   {id, c: catégorie, t: titre, s: signes, k: causes possibles, sol: solutions, msg: message type, prev: prévention, m: module lié}
   Pour ajouter une situation, copiez un bloc et modifiez-le. */
FM.situations = [
 {
  "c": "Paiement",
  "t": "Un paiement en retard",
  "s": "La date de paiement est dépassée de quelques jours, sans message de la famille.",
  "k": [
   "Simple oubli",
   "Gêne financière passagère",
   "Facture non reçue ou peu claire",
   "Mécontentement non exprimé"
  ],
  "sol": [
   "Envoyer un rappel courtois et factuel à l'échéance, avec la facture",
   "Proposer de confirmer la date à laquelle le paiement est possible",
   "Si gêne financière exprimée : convenir par écrit d'une date précise et unique",
   "Au-delà de 10 jours, appliquer la suspension annoncée dans les conditions, calmement"
  ],
  "msg": "Bonjour Madame, j'espère que vous allez bien. Je me permets de vous renvoyer la facture du mois de novembre (35 000 F), dont l'échéance était le 5. Pouvez-vous me dire quand le règlement sera possible ? Je vous envoie le reçu dès réception. Bonne journée.",
  "prev": "Envoyer la facture quelques jours avant l'échéance ; rappeler la date de paiement à l'inscription ; reçu systématique.",
  "m": "finances",
  "id": "S01"
 },
 {
  "c": "Paiement",
  "t": "La famille demande une remise",
  "s": "Un parent demande un prix réduit, pour une fratrie, une difficulté ou en échange de recommandations.",
  "k": [
   "Budget serré",
   "Comparaison avec un encadreur moins cher",
   "Habitude de négocier",
   "Doute sur la valeur du service"
  ],
  "sol": [
   "Demander d'abord : « Par rapport à quoi trouvez-vous cela cher ? »",
   "Rappeler le coût horaire et ce qui est inclus (comptes rendus, bilans, supports)",
   "Expliquer la règle des prix nets identiques pour toutes les familles",
   "Proposer une formule adaptée au besoin réel, jamais une baisse du prix d'une formule"
  ],
  "msg": "Je comprends tout à fait que le budget compte. Nos prix sont les mêmes pour toutes les familles, c'est une question d'équité. Ramené à l'heure, cela fait environ 2 500 F, avec un compte rendu après chaque séance et un bilan chaque mois.",
  "prev": "Présenter le contenu avant le prix ; afficher la grille par écrit dès le premier contact.",
  "m": "offre",
  "id": "S02"
 },
 {
  "c": "Paiement",
  "t": "La famille paie seulement une partie",
  "s": "Un paiement partiel arrive, avec ou sans explication.",
  "k": [
   "Difficulté financière",
   "Contestation d'une séance",
   "Malentendu sur le montant"
  ],
  "sol": [
   "Accuser réception du montant reçu et envoyer un reçu partiel",
   "Demander poliment la raison de l'écart et la date du complément",
   "Si une séance est contestée, vérifier dans vos notes et répondre par les faits",
   "Convenir par écrit d'un échéancier court si la difficulté est réelle"
  ],
  "msg": "Bonjour Monsieur, j'ai bien reçu 20 000 F, merci, je vous joins le reçu. Il reste 15 000 F sur la facture de novembre : pouvez-vous me dire quand le complément sera possible ?",
  "prev": "Factures détaillées (nombre de séances, dates) ; conditions de report écrites et appliquées.",
  "m": "finances",
  "id": "S03"
 },
 {
  "c": "Paiement",
  "t": "Un impayé qui dure",
  "s": "Plusieurs semaines sans paiement, relances restées sans effet.",
  "k": [
   "Difficulté financière sérieuse",
   "Volonté d'arrêter non exprimée",
   "Désaccord profond"
  ],
  "sol": [
   "Proposer un échange téléphonique calme pour comprendre la situation",
   "Suspendre les séances comme annoncé, sans reproche",
   "Proposer un échéancier écrit et réaliste pour le solde",
   "Mettre fin à la collaboration si rien n'avance, par écrit, en restant courtois"
  ],
  "msg": "Bonjour Madame, comme indiqué dans nos conditions, je suspends les séances tant que la facture de novembre n'est pas réglée. Si la période est difficile, je suis prêt à convenir avec vous d'un échéancier. Pouvons-nous en parler cette semaine ?",
  "prev": "Ne jamais laisser filer plus de 10 jours ; appliquer la règle la première fois qu'elle se présente.",
  "m": "finances",
  "id": "S04"
 },
 {
  "c": "Planning et absences",
  "t": "Annulations de dernière minute répétées",
  "s": "La famille annule souvent le jour même ou quelques heures avant.",
  "k": [
   "Emploi du temps familial chargé",
   "Créneau mal choisi",
   "Faible priorité donnée aux cours",
   "Élève qui refuse"
  ],
  "sol": [
   "Rappeler la règle : séance due si la famille ne prévient pas 24 h avant",
   "Chercher avec la famille un créneau plus stable",
   "Envoyer un rappel la veille de chaque séance",
   "Parler de l'enjeu avec le parent si l'élève est en cause"
  ],
  "msg": "Bonjour Madame, je comprends que les imprévus arrivent. Comme convenu dans nos conditions, une séance annulée moins de 24 h à l'avance reste due. Si le samedi devient difficile, cherchons ensemble un créneau plus pratique pour vous.",
  "prev": "Conditions écrites signées ; créneau choisi avec soin au départ ; rappel la veille.",
  "m": "offre",
  "id": "S05"
 },
 {
  "c": "Planning et absences",
  "t": "La famille veut changer de créneau",
  "s": "Demande de changement d'horaire ou de jour, ponctuelle ou durable.",
  "k": [
   "Changement d'emploi du temps scolaire",
   "Contrainte familiale",
   "Fatigue de l'élève à l'horaire actuel"
  ],
  "sol": [
   "Proposer deux ou trois créneaux libres compatibles avec vos tournées",
   "Privilégier un créneau proche de vos autres séances du même quartier",
   "Confirmer le nouveau créneau par écrit avec sa date de début"
  ],
  "msg": "Bonjour Monsieur, pas de problème. Je peux vous proposer le mardi à 17 h ou le jeudi à 16 h 30 à partir de la semaine prochaine. Lequel vous convient le mieux ?",
  "prev": "Faire le point des créneaux à chaque rentrée et après chaque changement d'emploi du temps scolaire.",
  "m": "organisation",
  "id": "S06"
 },
 {
  "c": "Planning et absences",
  "t": "L'élève est absent ou pas prêt à votre arrivée",
  "s": "Vous arrivez et l'élève n'est pas là, dort, ou n'a pas son matériel.",
  "k": [
   "Oubli de la famille",
   "Manque d'organisation de l'élève",
   "Désintérêt"
  ],
  "sol": [
   "Attendre un délai raisonnable, puis prévenir le parent par message",
   "Appliquer la règle : séance due si non annulée 24 h avant",
   "Si cela se répète, en parler avec le parent et l'élève ensemble",
   "Mettre en place un rappel la veille et une liste de matériel"
  ],
  "msg": "Bonjour Madame, je suis arrivé à 17 h pour la séance d'Ousmane, mais il n'était pas présent. Comme prévu dans nos conditions, la séance reste due. Pouvons-nous confirmer celle de samedi ?",
  "prev": "Rappel la veille ; règles posées à la première séance en présence de l'élève.",
  "m": "seance",
  "id": "S07"
 },
 {
  "c": "Planning et absences",
  "t": "Vous devez annuler ou êtes en retard",
  "s": "Imprévu de votre côté : transport, santé, autre engagement.",
  "k": [
   "Transport",
   "Santé",
   "Planning trop serré"
  ],
  "sol": [
   "Prévenir dès que possible, avant l'heure de la séance",
   "Proposer immédiatement deux créneaux de rattrapage",
   "En cas de retard, rattraper le temps perdu le jour même si possible",
   "Revoir votre planning s'il est trop serré"
  ],
  "msg": "Bonsoir Madame, je suis désolé, je ne pourrai pas assurer la séance de demain à cause d'un empêchement. Je vous propose de la rattraper jeudi à 17 h ou samedi à 10 h. Merci de votre compréhension.",
  "prev": "Créneaux tampons dans la semaine ; trajets prévus avec une marge.",
  "m": "fidelisation",
  "id": "S08"
 },
 {
  "c": "Résultats scolaires",
  "t": "Une mauvaise note malgré les cours",
  "s": "L'élève rapporte une note décevante ; le parent s'inquiète ou s'agace.",
  "k": [
   "Chapitre évalué non encore travaillé en séance",
   "Lacunes anciennes non réparées",
   "Stress en devoir",
   "Travail personnel insuffisant",
   "Rédaction négligée"
  ],
  "sol": [
   "Demander la copie et l'analyser avec le code d'erreurs",
   "Expliquer les causes réelles au parent, avec les faits",
   "Proposer un plan ciblé daté (deux à quatre semaines)",
   "Faire refaire le devoir en séance pour objectiver les progrès"
  ],
  "msg": "Bonjour Madame, merci de m'avoir prévenu. Pouvez-vous m'envoyer une photo de la copie ? Je vais l'analyser avec Awa à la prochaine séance et je vous propose ensuite un plan précis pour le prochain devoir.",
  "prev": "Connaître le calendrier des devoirs de la classe ; relier chaque séance au chapitre en cours.",
  "m": "evaluer",
  "id": "S09"
 },
 {
  "c": "Résultats scolaires",
  "t": "Le parent ne voit pas de progrès",
  "s": "« Je ne vois pas de changement » : le parent doute de l'utilité des cours.",
  "k": [
   "Progrès réels mais non montrés",
   "Progrès lents (bases en reconstruction)",
   "Attentes fixées sur la seule note de l'école"
  ],
  "sol": [
   "Présenter les indicateurs mesurés depuis le début (diagnostic, rappels, exercices sans aide)",
   "Montrer deux copies de l'élève, avant et maintenant",
   "Expliquer le délai attendu entre la reconstruction des bases et les notes",
   "Fixer ensemble un objectif mesurable et une date de point"
  ],
  "msg": "Je comprends votre attente. Je vous propose un point de dix minutes cette semaine : je vous montrerai où en était Lamine en octobre, où il en est aujourd'hui, et ce que nous visons pour le prochain trimestre.",
  "prev": "Bilan mensuel chiffré ; indicateurs choisis dès le diagnostic ; promesse de moyens, pas de note.",
  "m": "evaluer",
  "id": "S10"
 },
 {
  "c": "Résultats scolaires",
  "t": "Un examen approche et l'élève a beaucoup de retard",
  "s": "BFEM ou Bac dans quelques mois, lacunes importantes, inquiétude forte.",
  "k": [
   "Prise en charge tardive",
   "Programme de la classe en retard",
   "Lacunes anciennes"
  ],
  "sol": [
   "Être honnête : aucune garantie, mais un plan précis",
   "Diagnostic immédiat, puis priorité aux thèmes fréquents et aux points accessibles",
   "Rétroplanning avec examens blancs réguliers",
   "Proposer un volume adapté (formule supérieure, stage) si le besoin le justifie"
  ],
  "msg": "Je ne peux pas vous garantir un résultat, personne ne le peut honnêtement. Je vous propose un diagnostic cette semaine, puis un plan semaine par semaine jusqu'à l'examen, avec un examen blanc toutes les trois semaines pour mesurer les progrès.",
  "prev": "Proposer l'accompagnement d'examen dès la rentrée aux familles de 3e et de Terminale.",
  "m": "examens",
  "id": "S11"
 },
 {
  "c": "Résultats scolaires",
  "t": "Le professeur de l'école enseigne autrement",
  "s": "L'élève dit : « Ce n'est pas comme ça que le prof fait », ou se retrouve entre deux méthodes.",
  "k": [
   "Notations ou méthodes différentes",
   "Attentes de rédaction propres au professeur"
  ],
  "sol": [
   "Demander le cahier de cours et adopter les notations du professeur",
   "Montrer que les deux méthodes mènent au même résultat, puis retenir celle de la classe",
   "Ne jamais critiquer le professeur devant l'élève"
  ],
  "msg": "(À l'élève) Ton professeur a raison de faire ainsi, c'est sa méthode qui sera attendue au devoir. Je vais te la montrer pas à pas, et tu verras que c'est la même idée que ce que nous avons fait.",
  "prev": "Consulter le cahier de cours à chaque nouveau chapitre.",
  "m": "seance",
  "id": "S12"
 },
 {
  "c": "Comportement de l'élève",
  "t": "L'élève ne fait pas le travail entre les séances",
  "s": "Exercices non faits, séance après séance.",
  "k": [
   "Travail trop long",
   "Exercices non compris",
   "Pas de moment prévu",
   "Démotivation"
  ],
  "sol": [
   "Chercher la cause avec l'élève, sans reproche",
   "Réduire la quantité : moins d'exercices, mais faits",
   "Construire un emploi du temps de travail avec la famille",
   "Vérifier systématiquement en début de séance ; en parler à trois si cela persiste"
  ],
  "msg": "(Au parent) Je vous propose un petit cadre pour le travail à la maison : deux exercices seulement, faits le lundi et le jeudi à 19 h 30. Pourriez-vous simplement vérifier qu'ils sont faits ? Je les reprendrai au début de chaque séance.",
  "prev": "Travail court et précis, noté dans le cahier, vérifié à chaque séance.",
  "m": "autonomie",
  "id": "S13"
 },
 {
  "c": "Comportement de l'élève",
  "t": "L'élève est démotivé ou dit « je suis nul »",
  "s": "Peu d'efforts, phrases négatives sur lui-même, abandon rapide.",
  "k": [
   "Échecs répétés",
   "Comparaison avec d'autres",
   "Exercices trop difficiles",
   "Absence de progrès visible"
  ],
  "sol": [
   "Organiser des réussites réelles à la bonne difficulté",
   "Rendre le progrès visible (copies avant et après, courbe)",
   "Valoriser la stratégie plutôt que l'intelligence ; dire « pas encore »",
   "Fixer de petits objectifs proches et vérifiables"
  ],
  "msg": "(À l'élève) Tu ne sais pas encore factoriser, c'est différent de « je suis nul ». La semaine dernière tu ne savais pas développer, aujourd'hui tu as réussi quatre calculs sur cinq. On fait pareil pour la factorisation.",
  "prev": "Une réussite par séance ; montrer les progrès chaque mois.",
  "m": "motivation",
  "id": "S14"
 },
 {
  "c": "Comportement de l'élève",
  "t": "L'élève est distrait ou sur son téléphone",
  "s": "Regards au téléphone, conversation dispersée, concentration de quelques minutes.",
  "k": [
   "Téléphone à portée",
   "Lieu bruyant",
   "Séance trop longue sans variété",
   "Difficulté d'attention"
  ],
  "sol": [
   "Téléphone dans une autre pièce, règle posée avec le parent",
   "Varier les activités et fractionner en blocs courts",
   "Demander un lieu de travail calme",
   "Si l'inattention persiste malgré tout, observer et en parler au parent"
  ],
  "msg": "(Au parent) Pour qu'Ibou se concentre mieux, je vous propose que son téléphone reste au salon pendant la séance. Je pense que cela l'aidera beaucoup.",
  "prev": "Règles posées à la première séance en présence du parent.",
  "m": "seance",
  "id": "S15"
 },
 {
  "c": "Comportement de l'élève",
  "t": "L'élève est insolent ou refuse de travailler",
  "s": "Réponses désagréables, refus explicite, attitude d'opposition.",
  "k": [
   "Élève inscrit contre son gré",
   "Conflit familial",
   "Difficultés vécues comme humiliantes",
   "Fatigue"
  ],
  "sol": [
   "Rester calme et ne pas entrer dans le conflit",
   "Parler seul à seul : demander ce qui ne va pas",
   "Lui donner un peu de choix (ordre des exercices, méthode de vérification)",
   "Si cela persiste, en parler avec le parent, en présence de l'élève, sans l'humilier"
  ],
  "msg": "(À l'élève) Je vois que ça ne va pas aujourd'hui. Je ne suis pas là pour te juger mais pour t'aider à t'en sortir. Dis-moi ce qui te dérange dans nos séances.",
  "prev": "Cadre réciproque écrit ; relation respectueuse ; objectifs que l'élève a choisis avec vous.",
  "m": "motivation",
  "id": "S16"
 },
 {
  "c": "Relation avec le parent",
  "t": "Un parent mécontent ou agressif",
  "s": "Message sec, reproches, ton qui monte.",
  "k": [
   "Mauvaise note",
   "Inquiétude",
   "Malentendu",
   "Erreur réelle de votre part"
  ],
  "sol": [
   "Ne pas répondre à chaud ; accuser réception et proposer un appel",
   "Écouter jusqu'au bout, reformuler",
   "Revenir aux faits (comptes rendus, bilans, conditions)",
   "Proposer une action précise et datée, confirmer par écrit"
  ],
  "msg": "Bonjour Madame, j'ai bien reçu votre message et je comprends votre inquiétude. Je préfère en parler de vive voix : puis-je vous appeler ce soir à 19 h ?",
  "prev": "Communication régulière ; bilans honnêtes ; conditions claires.",
  "m": "parents",
  "id": "S17"
 },
 {
  "c": "Relation avec le parent",
  "t": "Un parent trop présent ou intrusif",
  "s": "Il assiste à toute la séance, intervient, conteste chaque méthode, écrit à toute heure.",
  "k": [
   "Inquiétude forte",
   "Manque de confiance",
   "Habitude de contrôler"
  ],
  "sol": [
   "Le rassurer par un compte rendu régulier et précis",
   "Proposer un point hebdomadaire fixe pour ses questions",
   "Expliquer calmement pourquoi l'élève travaille mieux sans intervention",
   "Fixer vos horaires de réponse aux messages"
  ],
  "msg": "Je comprends que vous vouliez suivre de près. Je vous propose un point de cinq minutes à la fin de chaque séance, et je vous envoie le compte rendu le soir même. Pendant la séance, Ndèye est plus à l'aise si elle travaille seule avec moi.",
  "prev": "Annoncer le fonctionnement et les horaires de réponse dès l'inscription.",
  "m": "parents",
  "id": "S18"
 },
 {
  "c": "Relation avec le parent",
  "t": "Un parent absent, qui ne répond jamais",
  "s": "Comptes rendus non lus, messages sans réponse, aucun échange.",
  "k": [
   "Parent très occupé",
   "Canal de communication mal choisi",
   "Désintérêt apparent"
  ],
  "sol": [
   "Demander le canal et le moment préférés (vocal, appel, autre parent)",
   "Raccourcir les messages : l'essentiel en deux lignes",
   "Identifier un autre interlocuteur dans la famille",
   "Faire un point en personne au moment du bilan"
  ],
  "msg": "Bonjour Monsieur, pour vous tenir informé sans vous déranger, préférez-vous un court message vocal après chaque séance ou un point mensuel par téléphone ?",
  "prev": "Choisir le canal avec le parent dès l'inscription.",
  "m": "parents",
  "id": "S19"
 },
 {
  "c": "Relation avec le parent",
  "t": "Les parents ne sont pas d'accord entre eux",
  "s": "Un parent veut continuer, l'autre arrêter ; consignes contradictoires.",
  "k": [
   "Désaccord sur le budget",
   "Désaccord sur la méthode ou les attentes"
  ],
  "sol": [
   "Rester neutre : ne jamais prendre parti",
   "Identifier le parent payeur et décideur",
   "Proposer un point commun avec les deux parents, sur les faits",
   "Mettre par écrit ce qui est décidé"
  ],
  "msg": "Pour que nous soyons tous d'accord, je vous propose un point de dix minutes avec vous deux, où je présenterai le bilan d'Abdou et le plan pour les prochaines semaines.",
  "prev": "Fiche d'inscription indiquant le parent payeur et les contacts.",
  "m": "parents",
  "id": "S20"
 },
 {
  "c": "Départ et concurrence",
  "t": "La famille annonce son départ",
  "s": "Message annonçant la fin des cours.",
  "k": [
   "Pas de progrès perçu",
   "Budget",
   "Concurrent moins cher",
   "Événement de vie",
   "Élève qui refuse"
  ],
  "sol": [
   "Remercier et demander un court échange pour comprendre",
   "Présenter les progrès mesurés si la raison est le doute",
   "Proposer une alternative (pause datée, autre créneau, plan ciblé)",
   "Si le départ est confirmé : dernier bilan, conseils, porte ouverte, raison notée"
  ],
  "msg": "Bonjour Madame, merci de m'avoir prévenu. Avant de clore, puis-je vous appeler quelques minutes ? J'aimerais comprendre ce qui vous a amenée à cette décision et vous remettre un dernier bilan pour la suite.",
  "prev": "Météo hebdomadaire des familles ; enquête trimestrielle ; progrès montrés chaque mois.",
  "m": "fidelisation",
  "id": "S21"
 },
 {
  "c": "Départ et concurrence",
  "t": "Un concurrent moins cher se présente",
  "s": "La famille compare avec un étudiant ou un autre encadreur à prix plus bas.",
  "k": [
   "Sensibilité au prix",
   "Valeur du service peu visible"
  ],
  "sol": [
   "Ne jamais critiquer le concurrent",
   "Rappeler ce qui est inclus et ce qui est mesuré",
   "Montrer les progrès concrets de l'élève",
   "Maintenir le prix ; laisser partir si seul le prix compte, porte ouverte"
  ],
  "msg": "Je comprends que vous compariez. Ce que je vous propose, c'est une méthode, un compte rendu après chaque séance et un bilan chiffré chaque mois. Je vous laisse juger sur les résultats de Khady depuis octobre.",
  "prev": "Rendre visible la valeur : comptes rendus, bilans, preuves.",
  "m": "offre",
  "id": "S22"
 },
 {
  "c": "Départ et concurrence",
  "t": "La famille veut faire une pause",
  "s": "Demande d'arrêt temporaire : vacances, fêtes, budget, compositions.",
  "k": [
   "Période de dépenses",
   "Fatigue de l'élève",
   "Calendrier scolaire"
  ],
  "sol": [
   "Accepter et fixer par écrit une date de reprise",
   "Proposer un travail léger pendant la pause (fiches, révisions)",
   "Recontacter quelques jours avant la date prévue"
  ],
  "msg": "Bien sûr. Je note une reprise le lundi 6 janvier, au même créneau. Je vous enverrai d'ici là deux fiches de révision pour que Modou garde le rythme.",
  "prev": "Anticiper les périodes creuses dans le calendrier de fidélité.",
  "m": "fidelisation",
  "id": "S23"
 },
 {
  "c": "Départ et concurrence",
  "t": "Fin d'année : préparer la réinscription",
  "s": "Mai-juin : la question de l'année suivante n'a pas encore été abordée.",
  "k": [
   "Habitude de recontacter à la rentrée",
   "Crainte de paraître insistant"
  ],
  "sol": [
   "Envoyer un bilan de l'année à chaque famille",
   "Proposer le stage de vacances et la réservation du créneau de rentrée",
   "Demander un témoignage ou un nom aux familles satisfaites"
  ],
  "msg": "Bonjour Madame, voici le bilan de l'année de Fatoumata. Pour bien préparer la 3e, je vous propose le stage de vacances en août puis la reprise dès la première semaine d'octobre. Souhaitez-vous que je vous réserve son créneau ?",
  "prev": "Calendrier annuel de fidélité.",
  "m": "parents",
  "id": "S24"
 },
 {
  "c": "Logistique et conditions",
  "t": "Les conditions de travail sont mauvaises",
  "s": "Télévision, bruit, passage, pas de table, mauvaise lumière.",
  "k": [
   "Logement exigu",
   "Famille qui n'y a pas pensé"
  ],
  "sol": [
   "Demander poliment une table au calme, toujours la même",
   "Proposer un autre horaire plus calme",
   "Adapter : supports compacts, séance plus structurée"
  ],
  "msg": "Pour que Sokhna travaille dans de bonnes conditions, serait-il possible de nous installer à la table de la chambre, ou à un moment où la pièce est plus calme ?",
  "prev": "Demander un lieu de travail dès la première séance.",
  "m": "seance",
  "id": "S25"
 },
 {
  "c": "Logistique et conditions",
  "t": "Le trajet devient trop long ou trop coûteux",
  "s": "Foyer éloigné, transport cher, temps de route important.",
  "k": [
   "Foyer isolé géographiquement",
   "Changement de domicile"
  ],
  "sol": [
   "Calculer le revenu net par heure engagée",
   "Regrouper avec d'autres séances du même quartier",
   "Proposer un créneau qui s'enchaîne avec une autre séance",
   "Si le foyer reste non rentable, en tenir compte à la rentrée"
  ],
  "msg": "(Décision interne : pas de message à la famille tant que la solution n'est pas choisie.)",
  "prev": "Calculer le trajet avant d'accepter un nouveau foyer.",
  "m": "finances",
  "id": "S26"
 },
 {
  "c": "Logistique et conditions",
  "t": "Le matériel manque",
  "s": "Pas de calculatrice, de règle ou de cahier ; supports perdus.",
  "k": [
   "Moyens limités",
   "Manque d'organisation"
  ],
  "sol": [
   "Avoir un kit de dépannage (règle, compas, calculatrice simple)",
   "Donner au parent une liste de matériel précise",
   "Proposer un classeur unique pour les supports FayeMath"
  ],
  "msg": "Bonjour Madame, pour les prochaines séances, Oumar aura besoin d'une calculatrice simple et d'un compas. Voici la liste complète.",
  "prev": "Liste de matériel remise à l'inscription.",
  "m": "seance",
  "id": "S27"
 },
 {
  "c": "Écoles et partenaires",
  "t": "Une école veut une facture ou un contrat",
  "s": "Une école propose une collaboration et demande des documents formels.",
  "k": [
   "Exigence administrative de l'établissement"
  ],
  "sol": [
   "Fournir un devis clair et vos conditions écrites",
   "Préparer un modèle de facture numérotée",
   "Vérifier avec un professionnel la forme adaptée",
   "Donner une date de retour précise, sans inventer de statut"
  ],
  "msg": "Monsieur le Directeur, merci pour votre proposition. Je vous transmets un devis et mes conditions. Pour la facturation, je reviens vers vous au plus tard vendredi avec les éléments administratifs.",
  "prev": "Préparer les documents de base avant d'en avoir besoin.",
  "m": "juridique",
  "id": "S28"
 },
 {
  "c": "Écoles et partenaires",
  "t": "Une école paie en retard",
  "s": "Facture mensuelle non réglée par l'établissement.",
  "k": [
   "Circuit administratif lent",
   "Facture mal adressée"
  ],
  "sol": [
   "Vérifier que la facture est au bon nom, à la bonne personne",
   "Relancer poliment par écrit le service compétent",
   "Demander la date de traitement prévue"
  ],
  "msg": "Bonjour, je me permets de revenir vers vous concernant la facture n° 12 du mois d'octobre. Pouvez-vous m'indiquer la date de traitement prévue ? Je reste disponible pour tout document complémentaire.",
  "prev": "Convenir dès le départ du circuit de paiement et de l'interlocuteur.",
  "m": "juridique",
  "id": "S29"
 },
 {
  "c": "Écoles et partenaires",
  "t": "Les élèves d'une classe ont des niveaux très différents",
  "s": "En cours dans une école, une partie de la classe décroche, une autre s'ennuie.",
  "k": [
   "Groupe hétérogène",
   "Volume horaire limité"
  ],
  "sol": [
   "Plans de travail par niveau",
   "Exercices à paliers avec un socle commun",
   "Temps de correction collective sur les erreurs fréquentes",
   "Bilan écrit à la direction avec des propositions"
  ],
  "msg": "(Bilan à la direction) Les élèves présentent des niveaux très différents en calcul. Je propose d'organiser les séances avec un socle commun et des exercices à paliers, et un point d'étape à la fin du trimestre.",
  "prev": "Diagnostic de la classe dès le début.",
  "m": "profils",
  "id": "S30"
 },
 {
  "c": "Vous-même",
  "t": "Vous avez fait une erreur dans un support",
  "s": "Un élève ou un parent signale une erreur dans un exercice ou un corrigé.",
  "k": [
   "Relecture insuffisante",
   "Contenu non vérifié"
  ],
  "sol": [
   "Reconnaître l'erreur et remercier celui qui l'a signalée",
   "Envoyer la version corrigée rapidement",
   "Vérifier les autres supports du même chapitre",
   "Renforcer la vérification (recalcul, relecture à froid)"
  ],
  "msg": "Merci beaucoup de me l'avoir signalé, Awa a raison : il y avait une erreur à la question 3. Voici le corrigé rectifié. Bravo à elle pour sa vigilance.",
  "prev": "Standard de production : chaque calcul vérifié, relecture à froid.",
  "m": "didactique",
  "id": "S31"
 },
 {
  "c": "Vous-même",
  "t": "Vous êtes débordé ou fatigué",
  "s": "Séances moins préparées, comptes rendus en retard, impatience, prospection abandonnée.",
  "k": [
   "Trop de foyers",
   "Planning sans marge",
   "Périodes d'examens"
  ],
  "sol": [
   "Revenir à votre limite de charge écrite",
   "Alléger ce qui peut l'être (production, administratif)",
   "Protéger un temps de repos fixe",
   "Changer de levier plutôt qu'ajouter des heures (prix, groupe, encadreur)"
  ],
  "msg": "(Décision interne.) Liste d'attente pour les nouvelles demandes ; stage de vacances pour les demandes de révision.",
  "prev": "Limite de charge écrite ; revue hebdomadaire ; signaux de fatigue surveillés.",
  "m": "posture",
  "id": "S32"
 },
 {
  "c": "Vous-même",
  "t": "Vous ne savez pas répondre à une question de l'élève",
  "s": "Question hors de votre préparation ou exercice difficile en séance.",
  "k": [
   "Chapitre non préparé",
   "Question réellement difficile"
  ],
  "sol": [
   "Le dire simplement : « Je vérifie et je te réponds à la prochaine séance »",
   "Chercher ensemble si c'est l'occasion d'un raisonnement partagé",
   "Revenir avec une réponse rigoureuse et vérifiée"
  ],
  "msg": "(À l'élève) Bonne question. Je préfère te donner une réponse juste plutôt qu'une réponse rapide : je vérifie et on la voit ensemble samedi.",
  "prev": "Préparer chaque séance ; connaître le chapitre suivant de la classe.",
  "m": "seance",
  "id": "S33"
 },
 {
  "c": "Cours en ligne",
  "t": "La connexion coupe pendant une séance en ligne",
  "s": "Image figée, son haché, appel interrompu, élève qui n'arrive pas à revenir.",
  "k": [
   "Réseau saturé à cette heure",
   "Données mobiles épuisées",
   "Appareil ou lieu inadapté",
   "Problème de votre côté"
  ],
  "sol": [
   "Appliquer le plan B annoncé : caméras coupées, puis appel audio et photos du cahier",
   "Rappeler sous cinq minutes comme prévu, sans reproche",
   "Terminer l'essentiel avec le plan court et envoyer le reste en plan de travail",
   "Appliquer la règle des coupures des conditions (rattrapage si la coupure vient de vous)",
   "Si cela se répète : chercher la cause avec le parent (heure, lieu, appareil, opérateur)"
  ],
  "msg": "Bonsoir Madame, la connexion a coupé plusieurs fois ce soir. Nous avons terminé l'essentiel en audio et j'ai envoyé à Awa les deux exercices restants. Je vous propose d'essayer samedi à 10 h, quand le réseau est souvent plus stable. Qu'en pensez-vous ?",
  "prev": "Essai de connexion avant la première séance ; plan B et règle des coupures écrits dans les conditions ; supports envoyés la veille.",
  "m": "enligne-equipement",
  "id": "S34"
 },
 {
  "c": "Cours en ligne",
  "t": "L'élève reste caméra éteinte et répond à peine",
  "s": "Caméra coupée, réponses en un mot, longs silences, travail non montré.",
  "k": [
   "Connexion faible",
   "Gêne ou timidité",
   "Lieu partagé ou bruyant",
   "Décrochage ou lassitude"
  ],
  "sol": [
   "Demander simplement s'il y a un problème technique ou de lieu",
   "Accepter la caméra éteinte pendant l'écoute, demander de l'allumer pour montrer le cahier",
   "Poser des questions qui obligent à produire (lis ta ligne, explique cette étape)",
   "Renforcer le rituel d'accueil et valoriser chaque réussite précise",
   "Informer le parent par un compte rendu positif et chercher ensemble un lieu calme"
  ],
  "msg": "Bonsoir Monsieur, Moussa a bien travaillé ce soir sur les puissances. Pour l'aider davantage, il faudrait qu'il puisse me montrer son cahier à la caméra pendant les exercices. Serait-il possible qu'il s'installe dans un endroit calme pour les prochaines séances ? Merci beaucoup.",
  "prev": "Charte du cours en ligne envoyée avant la première séance ; caméra sur le cahier comme règle ; parent invité au début du suivi.",
  "m": "enligne-seance",
  "id": "S35"
 },
 {
  "c": "Cours en ligne",
  "t": "Un parent veut enregistrer ou partager les séances",
  "s": "Le parent demande l'enregistrement, ou vous découvrez qu'un extrait a circulé dans un groupe.",
  "k": [
   "Besoin de revoir les explications",
   "Envie de montrer le travail à la famille",
   "Méconnaissance des règles sur l'image des mineurs"
  ],
  "sol": [
   "Accepter l'enregistrement seulement avec un accord écrit précis (quoi, qui conserve, combien de temps, qui y a accès)",
   "Proposer une alternative : capsules vidéo courtes sur les méthodes, sans élève à l'écran",
   "Si un extrait a circulé : demander calmement son retrait et rappeler la charte",
   "Inscrire la règle dans les conditions du cours en ligne"
  ],
  "msg": "Bonsoir Madame, c'est avec plaisir que j'enregistre la partie explication des séances pour que Fatou puisse la revoir. Je vous propose de convenir par écrit que la vidéo vous est envoyée à vous seule, qu'elle n'est pas partagée et qu'elle est supprimée en fin d'année. Cela vous convient-il ?",
  "prev": "Accord d'enregistrement et règle sur l'image dans la charte du cours en ligne.",
  "m": "enligne-cadre",
  "id": "S36"
 },
 {
  "c": "Cours en ligne",
  "t": "Vous soupçonnez une triche lors d'une évaluation en ligne",
  "s": "Réponses parfaites mais démarche absente, durée anormalement courte, explication orale impossible.",
  "k": [
   "Réponse cherchée sur internet ou par une application",
   "Aide d'un proche",
   "Peur de la mauvaise note"
  ],
  "sol": [
   "Ne pas accuser : demander à l'élève d'expliquer sa démarche à l'oral",
   "Rappeler que l'évaluation sert à l'aider, pas à le juger",
   "Refaire un exercice proche en direct, caméra sur le cahier",
   "Revoir vos évaluations : démarche exigée, questions « explique pourquoi », oral court après le quiz",
   "Établir un protocole écrit pour les devoirs blancs en ligne"
  ],
  "msg": "Bonsoir Monsieur, le devoir d'Ibrahima était très juste, mais il a eu du mal à m'expliquer sa démarche ce soir. Je vais lui proposer des exercices proches en séance pour vérifier que la méthode est bien acquise, et je vous tiendrai informé. Bonne soirée.",
  "prev": "Évaluations où l'on demande la démarche ; oral systématique après les quiz ; protocole de devoir blanc envoyé à l'avance.",
  "m": "enligne-suivi",
  "id": "S37"
 }
];
