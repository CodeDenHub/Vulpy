---
title: HTML
description: Découvrez les bases de l'HTML
---

# Introduction à l'HTML

L'**HTML** (_HyperText Markup Language_) est le langage de balisage utilisé pour structurer le contenu des pages web. Il permet d'organiser le texte, d'afficher des images, de créer des liens et bien plus encore.

## 1. Architecture d'une page HTML

Une page HTML suit une structure de base composée de plusieurs éléments :

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Titre de la page</title>
	</head>
	<body>
		<h1>Bienvenue sur ma page</h1>
		<p>Ceci est un paragraphe.</p>
	</body>
</html>
```

-   `<!DOCTYPE html>` : Indique la version de l'HTML.
-   `<html>` : L'élément racine de la page.
-   `<head>` : Contient les métadonnées et les liens vers les styles/scripts.
-   `<body>` : Contient le contenu visible de la page.

## 2. Les balises HTML

Les balises HTML sont les blocs de construction d'une page. Voici quelques-unes des plus courantes :

### a) Balises de texte

-   `<h1>` à `<h6>` : Titres.
-   `<p>` : Paragraphe.
-   `<strong>` : Texte en gras.
-   `<em>` : Texte en italique.

### b) Balises de structure

-   `<div>` : Division générique.
-   `<span>` : Élément en ligne pour styliser du texte.

### c) Balises de liens et médias

-   `<a href="https://example.com">Lien</a>` : Créer un lien.
-   `<img src="image.jpg" alt="Description">` : Afficher une image.
-   `<video>` et `<audio>` : Intégrer des médias.

## 3. Les attributs HTML

Les attributs permettent de configurer les balises. Exemples :

-   `id` et `class` : Identifier ou grouper des éléments.
-   `src` : Définir la source d'une image ou d'un script.
-   `alt` : Décrire une image pour l'accessibilité.
-   `href` : Définir un lien hypertexte.

## 4. Bonnes pratiques HTML

-   Toujours utiliser une structure sémantique correcte (`<header>`, `<main>`, `<footer>`, etc.).
-   Vérifier la validité du code avec [le validateur W3C](https://validator.w3.org/).
-   Optimiser l'accessibilité en utilisant des balises adaptées (`alt`, `label`, `aria-*`).
