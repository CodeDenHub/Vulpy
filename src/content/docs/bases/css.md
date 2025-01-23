---
title: CSS
description: Découvrez les bases du CSS
---

# Introduction au CSS

Le **CSS** (_Cascading Style Sheets_) est un langage de style permettant de mettre en forme les documents HTML. Il permet de définir l'apparence des éléments HTML, de gérer la disposition des éléments et de créer des animations.

## 1. Sélecteurs CSS

Les sélecteurs permettent de cibler des éléments HTML pour leur appliquer des styles.

### a) Sélecteurs de base

-   `element {}` : Cible tous les éléments du type spécifié (ex: `p { color: red; }`).
-   `.classe {}` : Cible tous les éléments ayant une classe spécifique (`.btn { background: blue; }`).
-   `#id {}` : Cible un élément unique avec un ID (`#header { font-size: 20px; }`).

### b) Sélecteurs avancés

-   `element1, element2 {}` : Applique les styles à plusieurs éléments (`h1, h2 { color: green; }`).
-   `element element2 {}` : Cible les éléments à l’intérieur d’un autre (`div p { margin: 10px; }`).
-   `element > element2 {}` : Cible uniquement les enfants directs (`ul > li { list-style: none; }`).
-   `element + element2 {}` : Cible un élément immédiatement après un autre (`h1 + p { color: gray; }`).

## 2. Media Queries

Les **media queries** permettent d’adapter le design d’une page en fonction de la taille de l’écran.

### Exemple :

```css
@media (max-width: 768px) {
	body {
		background-color: lightgray;
	}
}
```

-   `(max-width: 768px)`: Applique les styles si la largeur de l’écran est inférieure ou égale à 768px.

## 3. Bonnes pratiques CSS

-   **Utiliser des classes et non des ID** pour les styles réutilisables.
-   **Éviter les styles en ligne** (`style="color: red;"`), privilégier les fichiers CSS.
-   **Organiser son CSS** en sections (`reset.css`, `main.css`, `responsive.css`).
-   **Optimiser le code** en évitant la redondance et en utilisant des préprocesseurs comme **Sass**.

Le CSS permet de donner vie à un site web en améliorant son design et son ergonomie. 🚀
