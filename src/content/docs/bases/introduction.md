---
title: Introduction
description: Nous allons voir les bases de la programmation
---

# Introduction au Web

Le **Web** repose sur trois technologies fondamentales : **HTML**, **CSS**, et **JavaScript**. Ensemble, elles permettent de structurer, styliser et dynamiser les pages web. Cette introduction vise à expliquer leur rôle et leur importance dans le développement web.

## 1. HTML - La Structure

L'**HTML** (_HyperText Markup Language_) est le langage qui définit la structure d'une page web.

-   Il permet de créer des titres, des paragraphes, des liens, des images, et bien plus.
-   Les éléments HTML sont organisés à l'aide de balises (`<h1>`, `<p>`, `<img>`, etc.).
-   Il sert de squelette à une page web.

### Exemple simple :

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Ma Première Page</title>
	</head>
	<body>
		<h1>Bienvenue</h1>
		<p>Ceci est une page web.</p>
	</body>
</html>
```

## 2. CSS - L'Apparence

Le **CSS** (_Cascading Style Sheets_) permet de styliser une page web en modifiant les couleurs, les polices, les espacements, et la disposition des éléments.

-   Il améliore l’expérience utilisateur en rendant les pages attrayantes.
-   Il utilise des sélecteurs pour cibler les éléments HTML (`body`, `.classe`, `#id`).
-   Il permet aussi de rendre un site adaptatif grâce aux **Media Queries**.

### Exemple de style CSS :

```css
body {
	background-color: lightgray;
	font-family: Arial, sans-serif;
}

h1 {
	color: blue;
	text-align: center;
}
```

## 3. JavaScript - L'Interactivité

Le **JavaScript** est un langage de programmation qui permet de rendre les pages web dynamiques et interactives.

-   Il peut modifier le contenu d’une page sans la recharger.
-   Il gère les événements utilisateurs (clics, formulaires, mouvements de souris).
-   Il permet d’utiliser des API pour récupérer et envoyer des données.

### Exemple simple de JavaScript :

```javascript
document.querySelector("button").addEventListener("click", function () {
	alert("Bouton cliqué !");
});
```

## 4. Comment ces technologies fonctionnent ensemble ?

1. **HTML** construit la base de la page (structure).
2. **CSS** l’embellit et la rend agréable à regarder.
3. **JavaScript** la rend interactive et dynamique.

### Schéma :

📦 **HTML** → 🎨 **CSS** → ⚡ **JavaScript**

## Conclusion

Comprendre **HTML, CSS et JavaScript** est essentiel pour développer des sites web modernes et performants. En maîtrisant ces trois technologies, vous pourrez créer des pages web attractives et interactives adaptées aux besoins des utilisateurs. 🚀
