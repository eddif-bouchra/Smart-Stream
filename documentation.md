# Documentation – Sprint II

## 1. Programmation synchrone et asynchrone (async/await)

- **Synchrone :** les instructions s'exécutent une par une.
- **Asynchrone :** permet d'exécuter des opérations sans bloquer le programme.
- **Promise :** représente le résultat futur d'une opération asynchrone.
- **async :** déclare une fonction asynchrone.
- **await :** attend le résultat d'une Promise.
- **try/catch :** permet de gérer les erreurs.

## 2. jQuery

jQuery est une bibliothèque JavaScript qui facilite la manipulation du DOM et la gestion des événements.

Principales méthodes :
- `$("#id")` : sélectionner un élément.
- `.text()` : modifier le texte.
- `.html()` : modifier le contenu HTML.
- `.css()` : modifier le style.
- `.on()` : gérer les événements.
- `.append()` : ajouter un élément.

## 3. Validation de formulaire avec Parsley.js

Parsley.js est une bibliothèque JavaScript qui facilite la validation des formulaires.

Principaux attributs :
- `required` : champ obligatoire.
- `type="email"` : vérifier le format d'un e-mail.
- `minlength` : longueur minimale.
- `maxlength` : longueur maximale.
- `data-parsley-pattern` : imposer un format précis.

La validation côté client améliore l'expérience utilisateur, mais doit être complétée par une validation côté serveur.

## 4. Protection des données personnelles (RGPD)

Le RGPD est un règlement européen qui protège les données personnelles des utilisateurs.

Principes essentiels :
- Collecter uniquement les données nécessaires.
- Informer les utilisateurs.
- Protéger les données.
- Limiter leur durée de conservation.
- Respecter les droits des utilisateurs : accès, rectification et suppression.

Au Maroc, la loi 09-08 encadre également la protection des données personnelles.

## 5. Higher-Order Functions en JavaScript

Une Higher-Order Function est une fonction qui reçoit une autre fonction en argument ou retourne une fonction.

Méthodes principales :
- `forEach()` : parcourir un tableau.
- `map()` : transformer les éléments.
- `filter()` : filtrer les éléments.
- `find()` : trouver un élément.
- `reduce()` : calculer une valeur unique.
- `some()` : vérifier si au moins un élément respecte une condition.
- `every()` : vérifier si tous les éléments respectent une condition.

## 6. Gestion des dates en JavaScript

L'objet `Date` permet de créer, manipuler et comparer les dates.

Méthodes principales :
- `new Date()` : créer une date.
- `getFullYear()` : récupérer l'année.
- `getMonth()` : récupérer le mois (de 0 à 11).
- `getDate()` : récupérer le jour du mois.
- `getHours()` : récupérer l'heure.
- `toLocaleDateString()` : formater une date selon une langue.

## 7. Délégation d'événements et CRUD des utilisateurs

La délégation d'événements consiste à placer un écouteur sur un élément parent pour gérer les événements de ses éléments enfants, même créés dynamiquement.

**CRUD :**
- **Create :** ajouter un utilisateur.
- **Read :** afficher les utilisateurs.
- **Update :** modifier un utilisateur.
- **Delete :** supprimer un utilisateur.

Méthodes utiles :
- `addEventListener()` : écouter un événement.
- `closest()` : trouver un élément parent correspondant.
- `find()` : rechercher un utilisateur.
- `push()` : ajouter un utilisateur.
- `splice()` : supprimer un utilisateur.

## 8. Comparaison des formats de données

| Format | Description | Utilisation |
|---|---|---|
| JSON | Format textuel léger | Échange de données et API |
| BSON | Format binaire dérivé de JSON | MongoDB |
| YAML | Format textuel lisible basé sur l'indentation | Fichiers de configuration |
| XML | Format textuel basé sur des balises | Échange de données structurées |

**Conclusion :** ces concepts permettent de mieux comprendre JavaScript, la manipulation des données, la validation des formulaires et le développement d'applications web interactives.