# FayeMath Formation — application locale et mobile (version 2.2)

Application de formation du fondateur de FayeMath Academy. Elle fonctionne sur cet ordinateur, sans compte et sans connexion (sauf pour ouvrir les liens des « Entreprises modèles »).

## Ouvrir
Double-cliquez sur le raccourci « FayeMath Formation » du Bureau, ou sur `index.html` dans ce dossier (Chrome ou Edge).

## Contenu
| Partie | Contenu |
|---|---|
| **Parcours du fondateur** | 4 pôles, 17 modules, 66 leçons (chacune avec approfondissement et mise en pratique), 17 cas pratiques, 17 ateliers, 17 fiches-outils, 136 questions de quiz, 54 actions |
| **Entreprises modèles** | 6 études de cas, 58 ressources en ligne, programme de 6 semaines |
| **S'entraîner** | Révision espacée par cartes, bilans de pôle, examen final, attestations internes |
| **Appliquer** | Boîte à outils, plan d'action, journal de bord, mes écrits |
| **Références** | Favoris, glossaire (44 termes), mode d'emploi, recherche dans toute la formation |

### Les 4 pôles
- **A. Fondations de l'entreprise** : identité, offre et prix, juridique, finances.
- **B. Développement commercial** : se faire connaître, vendre, relation parents et fidélisation.
- **C. Pédagogie** : comment un élève apprend, enseigner les maths et la PC, conduire une séance, évaluer et suivre, BFEM et Bac, motivation et difficultés.
- **D. Pilotage et croissance** : organisation, outils numériques et IA, posture du fondateur, grandir.

### Comment un module se valide
Toutes les leçons lues **et** quiz réussi à 80 %. Un pôle donne droit à son attestation quand tous ses modules sont validés et que son bilan (12 questions tirées au hasard) atteint 80 %.

## Nouveautés de la version 2.2 (15 novembre 2026)
- **Leçons approfondies** : chaque leçon gagne une partie « Pour aller plus loin » et une « Mise en pratique » à cocher.
- **Quiz** : l'ordre des réponses change à chaque tentative.
- **Examen final** (20 questions) et attestation générale, une fois les 4 pôles validés.
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
| `js/app.js` | Navigation, minuteur, clics et saisies |
| `donnees/pole-a.js` … `pole-d.js` | Texte des 17 modules (**modifiable** : corrigez une ligne, rechargez la page) |
| `donnees/glossaire.js` | Glossaire |
| `donnees/veille.js` | Les 58 ressources et le programme de 6 semaines |
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

Version 2 créée le 12 novembre 2026 · version 2.1 (téléphone) le 13 novembre 2026 · version 2.2 le 15 novembre 2026.
