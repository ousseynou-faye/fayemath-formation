# FayeMath Formation — application locale et mobile (version 2.4)

Application de formation du fondateur de FayeMath Academy. Elle fonctionne sur cet ordinateur et sur le téléphone, sans compte et sans connexion (sauf pour ouvrir les liens externes et regarder les vidéos).

## Ouvrir
Double-cliquez sur le raccourci « FayeMath Formation » du Bureau, ou sur `index.html` dans ce dossier (Chrome ou Edge).

## Contenu
| Partie | Contenu |
|---|---|
| **Parcours du fondateur** | 4 pôles (A à D), 22 modules, 87 leçons, 22 cas pratiques, 22 ateliers, 22 fiches-outils, 176 questions de quiz |
| **Parcours du formateur en ligne** | Pôle E, 7 modules, 23 leçons, 7 cas, 7 ateliers, 7 fiches-outils, 56 questions de quiz, bilan et attestation propres |
| **Médiathèque du formateur** | 34 ressources vérifiées (formations, synthèses de recherche, tutoriels vidéo, outils gratuits), vos propres ressources, lecteur YouTube intégré, notes « 3 idées + 1 action » |
| **Entreprises modèles** | 6 études de cas, 58 ressources en ligne, programme de 6 semaines |
| **S'entraîner** | Révision espacée par cartes, bilans de pôle, examen final, attestations internes |
| **Appliquer** | Guide des situations (37 problèmes résolus), 98 actions au total, boîte à outils, plan d'action, journal de bord, mes écrits |
| **Références** | Favoris, glossaire (70 termes), mode d'emploi, recherche dans toute la formation |

### Les pôles
- **A. Fondations de l'entreprise** : identité, offre et prix, juridique, finances.
- **B. Développement commercial** : se faire connaître, vendre, relation parents, fidéliser et résoudre les problèmes clients.
- **C. Pédagogie** : comment un élève apprend, apprendre à apprendre, enseigner maths et PC (méthode générale), didactique de chaque domaine des maths, didactique de la physique-chimie, conduire une séance, profils d'élèves et différenciation, évaluer et suivre, BFEM et Bac, motivation et difficultés.
- **D. Pilotage et croissance** : organisation, outils numériques et IA, posture du fondateur, grandir.
- **E. Enseigner en ligne** (parcours du formateur) : fondamentaux et recherche, équipement et connexion, conduire une séance, maths et physique-chimie à distance, évaluer et suivre, cadre et protection des élèves, produire des vidéos de cours.

### Comment un module se valide
Toutes les leçons lues **et** quiz réussi à 80 %. Un pôle donne droit à son attestation quand tous ses modules sont validés et que son bilan (12 questions tirées au hasard) atteint 80 %.

## Nouveautés de la version 2.4 (25 novembre 2026)
- **Parcours du formateur en ligne (pôle E)** : 7 modules et 23 leçons fondés sur la recherche (synthèse de l'EEF, étude de Guo et al. sur les vidéos, principes multimédias de Mayer, guides de protection des enfants), adaptés au Sénégal (connexion, données, loi 2008-12).
- **Médiathèque** : formations, articles, outils et tutoriels vidéo filtrables ; case « vu », notes, ajout de vos propres liens ; les vidéos YouTube que vous ajoutez se regardent dans l'application.
- 4 nouvelles situations « Cours en ligne », 16 termes de glossaire, menu en deux parcours.
- L'examen final et l'attestation générale restent ceux du fondateur (pôles A à D) ; le pôle E a son bilan et son attestation.

## Nouveautés de la version 2.3 (25 novembre 2026)
- **Pôle Pédagogie renforcé (6 → 10 modules)** : Apprendre à apprendre ; Enseigner chaque domaine des mathématiques ; Enseigner la physique-chimie ; Profils d'élèves et différenciation ; nouvelle leçon « La première séance chez une nouvelle famille ».
- **Nouveau module « Fidéliser durablement et résoudre les problèmes clients »** (pôle B).
- **Guide des situations** : 33 problèmes en 9 familles, chacun avec signes, causes, solutions, message type à copier et prévention ; recherche et filtres ; liens depuis les modules.
- Les modules sont désormais numérotés de 1 à 22 ; la progression déjà faite est conservée.

## Nouveautés de la version 2.2 (15 novembre 2026)
- **Leçons approfondies** : chaque leçon gagne une partie « Pour aller plus loin » et une « Mise en pratique » à cocher.
- **Quiz** : l'ordre des réponses change à chaque tentative.
- **Examen final** (20 questions) et attestation générale, une fois les pôles A à D validés.
- **Fusion de sauvegardes** : réunit la progression du téléphone et celle de l'ordinateur sans rien effacer ; partage direct de la sauvegarde depuis le téléphone ; rappel hebdomadaire.
- **Favoris**, **historique d'étude sur 28 jours**, **date de fin estimée**, **taille du texte**, **mode d'emploi**.
- **Avis de mise à jour** sur le téléphone, et numéro de version en bas du menu.

### Publier une nouvelle version
1. Changer le numéro dans `js/etat.js` (`APP_VERSION`) et dans `sw.js` (`VERSION`).
2. `git add .` puis `git commit -m "Version x.y"` puis `git push`.
3. Sur le téléphone, ouvrir l'application avec une connexion : le bandeau « Nouvelle version » apparaît, toucher « Recharger ».

## Organisation des fichiers
| Emplacement | Rôle |
|---|---|
| `index.html` | Page de l'application |
| `css/style.css` | Mise en forme (écran, téléphone, impression) |
| `js/etat.js` | Progression et sauvegarde |
| `js/moteur.js` | Calculs : progression, validation, révision, recherche |
| `js/vues-parcours.js` | Écrans du parcours (tableau de bord, modules, leçons, quiz, bilans) |
| `js/vues-outils.js` | Révision, boîte à outils, plan d'action, journal, écrits, glossaire, sauvegarde |
| `js/vues-veille.js` | Entreprises modèles |
| `js/vues-media.js` | Médiathèque du formateur |
| `js/app.js` | Navigation, minuteur, clics et saisies |
| `donnees/pole-a.js` … `pole-e.js` | Texte des 29 modules (**modifiable** : corrigez une ligne, rechargez la page) |
| `donnees/glossaire.js` | Glossaire |
| `donnees/situations.js` | Guide des situations (**modifiable** : ajoutez un bloc pour une nouvelle situation) |
| `donnees/veille.js` | Les 58 ressources et le programme de 6 semaines |
| `donnees/mediatheque.js` | Les ressources de la médiathèque (**modifiable**) |
| `sauvegardes/` | Rangez ici vos fichiers de sauvegarde |
| `_archive-v1/` | Copie de la version 1 (12 novembre 2026) |

Les fichiers `app.js`, `donnees-formation.js` et `donnees-veille.js` restés à la racine appartiennent à la version 1 : ils ne sont plus utilisés et peuvent être supprimés (une copie est dans `_archive-v1/`).

## Progression et sauvegarde
La progression est gardée par le navigateur. La progression de la version 1 (leçons lues, ateliers, ressources cochées, notes) est reprise automatiquement au premier lancement ; les quiz de module sont à refaire (8 questions, seuil de 80 %).
Une fois par semaine : écran « Sauvegarde et réglages » → « Enregistrer la sauvegarde », puis rangez le fichier dans `sauvegardes/`.

## Sur le téléphone (Android)
L'application est aussi installable depuis GitHub Pages (version 2.1) :
1. Ouvrir l'adresse `https://ousseynou-faye.github.io/fayemath-formation/` dans Chrome sur le téléphone.
2. Menu ⋮ de Chrome → « Ajouter à l'écran d'accueil » → « Installer ».
3. Après la première ouverture, elle fonctionne sans connexion (sauf les liens des « Entreprises modèles »).

| Fichier | Rôle |
|---|---|
| `manifest.webmanifest` | Nom, couleurs et icônes de l'application installée |
| `sw.js` | Réserve hors connexion (actif uniquement en https) |
| `icones/` | Icônes de l'écran d'accueil |
| `.gitignore` | Ce qui n'est **pas** envoyé sur GitHub : archives, sauvegardes, anciens fichiers |
| `.nojekyll` | Indique à GitHub Pages de publier les fichiers tels quels |

**Mettre à jour la version en ligne** après une modification, dans ce dossier :
`git add .` puis `git commit -m "Mise à jour"` puis `git push`. Le téléphone reçoit la nouvelle version à la deuxième ouverture avec connexion.

**La progression du téléphone et celle de l'ordinateur sont séparées.** Pour les réunir : « Partager » ou « Enregistrer la sauvegarde » sur l'un, puis « Fusionner avec une copie » sur l'autre (rien n'est effacé). Le dépôt GitHub est public : n'y déposez jamais vos fichiers de sauvegarde (le `.gitignore` les exclut).

## Sources
Chaque module liste ses sources. Les chiffres FayeMath viennent de vos documents de référence ; si un document change, corrigez la ligne correspondante dans `donnees/`. Les durées et coefficients d'examen (module 12) sont à revérifier à chaque rentrée sur les sujets officiels.

Version 2 créée le 12 novembre 2026 · version 2.1 (téléphone) le 13 novembre 2026 · version 2.2 le 15 novembre 2026 · version 2.3 le 25 novembre 2026.
