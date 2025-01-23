---
title: JavaScript
description: Découvrez les bases du JavaScript
---

# Introduction au JavaScript

Le **JavaScript** est un langage de programmation utilisé pour rendre les pages web interactives. Il permet de manipuler le DOM, gérer des événements et interagir avec des API.

## 1. Le DOM (Document Object Model)

Le **DOM** est une représentation en arbre de la structure HTML d'une page. JavaScript permet de le manipuler pour modifier dynamiquement le contenu affiché.

### a) Sélection d'éléments

-   `document.getElementById("id")` : Sélectionne un élément par son ID.
-   `document.querySelector(".classe")` : Sélectionne le premier élément correspondant au sélecteur CSS donné.
-   `document.querySelectorAll("element")` : Sélectionne tous les éléments correspondants.

### b) Modification du contenu

-   `element.textContent = "Nouveau texte";`
-   `element.innerHTML = "<strong>Texte en gras</strong>";`

### c) Modification des styles

-   `element.style.color = "red";`
-   `element.classList.add("nouvelle-classe");`

## 2. Gestion des événements

JavaScript permet d'ajouter des événements aux éléments HTML pour les rendre interactifs.

### Exemple :

```javascript
document.querySelector("button").addEventListener("click", function () {
	alert("Bouton cliqué !");
});
```

## 3. Bonnes pratiques JavaScript

-   **Utiliser `let` et `const`** au lieu de `var` pour déclarer des variables.
-   **Éviter l'insertion directe de contenu HTML** avec `innerHTML` pour des raisons de sécurité.
-   **Séparer le JavaScript du HTML** en utilisant un fichier externe.
-   **Utiliser des fonctions et des modules** pour organiser le code.

Le JavaScript est un langage puissant permettant de dynamiser les pages web et d'améliorer l'expérience utilisateur. 🚀
