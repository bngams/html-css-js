# Projet 1 — Structure d'une page HTML

**Jour 1 · 3 exercices · guidage : très guidé**

Vos premières pages web, écrites à la main. À la fin de ce projet, vous saurez
construire une page valide et y placer du texte, des listes, des liens, des
images et des contenus embarqués.

---

## 🚀 Démarrer

Ouvrez `index.html` dans votre navigateur — c'est la page d'accueil du projet,
avec un lien vers chaque exercice.

**Deux façons de l'ouvrir :**

| Méthode | Comment |
|---|---|
| **Double-clic** (le plus simple) | Double-cliquez sur `index.html` dans l'explorateur de fichiers |
| **VSCode + Live Preview** (recommandé) | Clic droit sur `index.html` → *Show Preview* — la page se recharge toute seule à chaque enregistrement |

> 💡 **Live Preview** est une extension à installer depuis le Marketplace de VSCode
> (cherchez « Live Preview », éditeur Microsoft). Elle n'est pas indispensable pour
> ce projet, mais elle évite d'appuyer sur F5 à chaque modification.

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Le squelette d'une page | `doctype`, `lang`, `charset`, `title`, `h1`, `p` |
| **2** | Texte, listes et liens | `h1`/`h2`, `strong`/`em`, `ul`/`ol`/`li`, liens externes, internes et e-mail |
| **3** | Images et contenus embarqués | `img` + `alt`, `figure`/`figcaption`, SVG, `video`, `iframe`, lien PDF |

---

## 📁 Structure du projet

```
01-html-structure/
├── index.html                    ← page d'accueil (fournie)
├── styles/
│   └── home.css                  ← style de l'accueil (fourni)
├── assets/
│   ├── photo.svg                 ← image utilisée dans l'exercice 3
│   └── programme.pdf             ← document utilisé dans l'exercice 3
└── exercices/
    ├── exercice-1/
    │   ├── cours.html            ← 📖 la leçon
    │   ├── enonce.html           ← 📋 la consigne
    │   ├── travail.html          ← 👉 LE FICHIER QUE VOUS MODIFIEZ
    │   ├── solution.html         ← ✅ le corrigé expliqué
    │   └── solution/index.html   ← le corrigé, commenté ligne par ligne
    ├── exercice-2/
    │   ├── cours.html            ← 📖 la leçon
    │   ├── enonce.html           ← 📋 la consigne
    │   ├── travail.html          ← 👉 LE FICHIER QUE VOUS MODIFIEZ
    │   ├── solution.html         ← ✅ le corrigé expliqué
    │   └── solution/index.html   ← le corrigé, commenté ligne par ligne
    └── exercice-3/
        ├── index.html            ← 👉 à compléter
        └── solution/index.html
```

> ⚠️ L'exercice 3 utilise encore l'ancienne forme (un seul fichier).
> Il passera aux 4 onglets comme les exercices 1 et 2.

---

## 💡 Comment travailler

Chaque exercice vous donne **l'objectif**, les **critères de réussite** et
**comment vérifier** le résultat. Selon l'exercice, ces informations sont :

| Exercice | Où lire la consigne | Quel fichier modifier |
|---|---|---|
| **1 et 2** | l'onglet 📋 **Énoncé** | `travail.html` |
| **3** | l'encadré en haut du fichier | `index.html` |

### La boucle de travail

À répéter à chaque `TODO` :

1. J'écris dans le fichier à modifier
2. J'**enregistre** — `Ctrl+S` (Windows) ou `Cmd+S` (Mac)
3. Je **recharge** l'onglet du navigateur — `F5`
4. Je regarde ce qui a changé

> 💡 Si rien ne change à l'écran, c'est presque toujours **l'enregistrement qui
> manque**. C'est l'erreur numéro un des débuts.

### Les marqueurs dans le code

Les consignes sont écrites en **commentaires HTML** — des lignes que le
navigateur ne montre jamais. Chaque `TODO` correspond à **une** chose à écrire :

```html
<!-- TODO: ajouter un h1 -->
```

L'indice est dans le commentaire juste au-dessus, avec parfois un `???` à
remplacer par la bonne valeur.

> ⚠️ Un fichier de départ qui ne contient que des commentaires s'affiche
> **vide** dans le navigateur. C'est normal : votre page se remplira au fur
> et à mesure.

### Et la solution ?

Chaque exercice a son dossier `solution/`. **Ouvrez-le après avoir cherché**, pas
avant — c'est en bloquant un peu que ça rentre. La solution est abondamment
commentée : lisez-la même quand vous avez réussi, elle explique *pourquoi* on
écrit les choses ainsi.

---

## ✅ Vous avez terminé quand…

- [ ] Vos trois pages s'affichent sans erreur dans le navigateur
- [ ] Les accents (é, à, ç) s'affichent correctement
- [ ] Tous les liens de l'exercice 2 fonctionnent
- [ ] Dans l'exercice 3, remplacez volontairement le chemin de l'image par un nom qui n'existe pas : le texte alternatif s'affiche à la place. Remettez le bon chemin ensuite
- [ ] Vous savez expliquer à quoi servent `doctype`, `lang` et `charset`

---

## 🔎 Pour aller plus loin

- [MDN — Structurer le web avec HTML](https://developer.mozilla.org/fr/docs/Learn/HTML) — la référence, en français
- [MDN — Liste des éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element)
- [Validateur HTML du W3C](https://validator.w3.org/#validate_by_upload) — déposez votre fichier, il liste les erreurs

**Prochain projet :** `02-html-semantique-formulaires` — donner du sens à votre
structure et créer des formulaires.
