# Projet 2 — HTML sémantique et formulaires

**Jour 1 · 3 exercices · guidage : guidé**

Vous savez écrire une page valide et y placer du texte, des liens et des images
(projet 1). On s'attaque maintenant au *sens* : dire au navigateur ce que
représente chaque partie de la page, présenter des données, et recueillir celles
de vos visiteurs.

---

## 🚀 Démarrer

Ouvrez `index.html` dans votre navigateur — la page d'accueil du projet, avec un
lien vers chaque exercice.

| Méthode | Comment |
|---|---|
| **Double-clic** | Double-cliquez sur `index.html` dans l'explorateur de fichiers |
| **VSCode + Live Preview** | Clic droit sur `index.html` → *Show Preview* |

> 💡 **Live Preview** est une extension du Marketplace VSCode (éditeur Microsoft).
> Elle recharge la page à chaque enregistrement.

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Les balises sémantiques | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, et quand `div` reste légitime |
| **2** | Les tableaux de données | `table`, `thead`, `tbody`, `tr`, `th`, `td`, `caption`, l'attribut `scope` |
| **3** | Les formulaires | `form`, `label`, `input` et ses types, `select`, `textarea`, `required` |

---

## 📁 Structure du projet

```
02-html-semantique-formulaires/
├── index.html                    ← page d'accueil (fournie)
├── styles/
│   ├── home.css                  ← style de l'accueil (fourni)
│   └── exercice.css              ← style des pages d'exercice (fourni)
└── exercices/
    ├── exercice-1/
    │   ├── cours.html            ← 📖 la leçon
    │   ├── enonce.html           ← 📋 la consigne
    │   ├── travail.html          ← 👉 LE FICHIER QUE VOUS MODIFIEZ
    │   ├── solution.html         ← ✅ le corrigé expliqué
    │   └── solution/index.html   ← le corrigé, commenté ligne par ligne
    ├── exercice-2/               ← même structure
    └── exercice-3/               ← même structure
```

---

## 💡 Comment travailler

Chaque exercice vous donne l'**objectif**, les **critères de réussite** et
**comment vérifier** — dans l'onglet 📋 **Énoncé**. Le fichier que vous modifiez
est toujours `travail.html`.

### La boucle de travail

1. J'écris dans `travail.html`
2. J'**enregistre** — `Ctrl+S` (Windows) / `Cmd+S` (Mac)
3. Je **recharge** l'onglet du navigateur — `Ctrl+R` / `Cmd+R` (ou `F5`)
4. Je regarde ce qui a changé

> 💡 Si rien ne change à l'écran, c'est presque toujours **l'enregistrement qui
> manque**.

### Les marqueurs dans le code

Les consignes sont écrites en **commentaires HTML** — le navigateur ne les affiche
jamais. Chaque `TODO` correspond à **une** chose à écrire :

```html
<!-- TODO: écrire le header -->
```

Effacez la ligne du `TODO` en entier, marqueurs compris, et tapez votre balise à
la place. Votre code ne doit jamais se trouver *à l'intérieur* d'un commentaire.

---

## ✅ Vous avez terminé quand…

- [ ] Vos trois pages s'affichent sans erreur
- [ ] Dans chaque `travail.html`, `Ctrl+F` sur `<!-` ne trouve plus rien
- [ ] Le [validateur du W3C](https://validator.w3.org/nu/#file) annonce
      *« No errors or warnings to show »* sur chacune
- [ ] Vous savez expliquer pourquoi `<section>` vaut mieux que `<div>` — et quand
      `<div>` reste le bon choix

---

## 🔎 Pour aller plus loin

- [MDN — Structurer un document](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
- [MDN — Les tableaux HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [MDN — Les formulaires](https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Forms)

**Projet précédent :** `01-html-structure` — Structure d'une page HTML
**Projet suivant :** `03-css-mise-en-forme` — donner une apparence à tout ça
