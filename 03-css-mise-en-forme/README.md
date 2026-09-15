# Projet 3 — CSS, la mise en forme

**Jour 1 · 4 exercices · guidage : guidé**

Vos pages savent dire ce qu'elles contiennent (projets 1 et 2). Elles vont
maintenant apprendre à le montrer.

---

## ⚠️ Ce qui change dans ce projet

Jusqu'ici vous modifiiez **un** fichier : `travail.html`. À partir d'ici, chaque
exercice vous donne **deux** fichiers :

| Fichier | Rôle |
|---|---|
| `travail.html` | **Fourni et figé** — n'y touchez pas. C'est la page à habiller |
| `style.css` | **👉 C'EST CELUI QUE VOUS MODIFIEZ** — vos règles CSS |

C'est la séparation fondamentale du web : le HTML décrit la **structure**, le CSS
décrit l'**apparence**. Deux fichiers, deux métiers.

> **Sauf à l'exercice 4**, où vous modifierez les deux : on y apprend à poser
> soi-même les `class` et les `id` dans le HTML pour pouvoir les viser en CSS.
> Le fichier vous le rappellera en tête.

---

## 🚀 Démarrer

Ouvrez `index.html` dans votre navigateur — la page d'accueil du projet.

| Méthode | Comment |
|---|---|
| **Double-clic** | Double-cliquez sur `index.html` |
| **VSCode + Live Preview** | Clic droit → *Show Preview* |

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre | Fichiers modifiés |
|---|---|---|---|
| **1** | Écrire du CSS | Lier une feuille de style, la syntaxe, les sélecteurs, couleurs et polices | `style.css` |
| **2** | Le modèle de boîte | `margin`, `border`, `padding`, `box-sizing`, les unités | `style.css` |
| **3** | Disposer avec Flexbox | `display:flex`, `justify-content`, `align-items`, `gap`, plus bordures, ombres et `transition` | `style.css` |
| **4** | Poser ses propres accroches | Ajouter vous-même `class` et `id` dans le HTML, puis les viser en CSS | **`travail.html` ET `style.css`** |

> 💡 **L'exercice 4 rouvre le HTML.** Les trois premiers vous font styler une page
> figée : vous ne pouvez viser que ce qui existe déjà. Le quatrième boucle la
> boucle — vous créez vos propres points d'accroche, puis vous les stylez. C'est
> ainsi qu'on travaille réellement.

---

## 📁 Structure du projet

```
03-css-mise-en-forme/
├── index.html                    ← page d'accueil (fournie)
├── styles/                       ← style des pages de cours (fourni)
└── exercices/
    ├── exercice-1/
    │   ├── cours.html            ← 📖 la leçon
    │   ├── enonce.html           ← 📋 la consigne
    │   ├── travail.html          ← 🔒 fourni, ne pas modifier
    │   ├── style.css             ← 👉 LE FICHIER QUE VOUS MODIFIEZ
    │   ├── solution.html         ← ✅ le corrigé expliqué
    │   └── solution/             ← le corrigé exécutable + son CSS commenté
    ├── exercice-2/               ← même structure
    ├── exercice-3/
    └── exercice-4/
```

---

## 💡 Comment travailler

### La boucle de travail

1. J'écris mes règles dans **`style.css`**
2. J'**enregistre** — `Ctrl+S` / `Cmd+S`
3. Je **recharge** `travail.html` dans le navigateur — `Ctrl+R` / `Cmd+R`
4. Je regarde ce qui a changé

> 💡 Si rien ne change : soit l'enregistrement manque, soit votre sélecteur ne
> vise aucun élément. Le second cas est le plus fréquent — voir la manip de
> l'exercice 1.

### Les marqueurs dans le CSS

Les commentaires CSS ne s'écrivent **pas** comme en HTML :

```css
/* Ceci est un commentaire CSS */

/* TODO: colorer les titres en bleu */
```

Effacez la ligne du `TODO` en entier et écrivez votre règle à la place.

---

## ✅ Vous avez terminé quand…

- [ ] Les quatre pages ressemblent à leur modèle
- [ ] Dans chaque `style.css`, `Ctrl+F` sur `TODO` ne trouve plus rien
- [ ] Le [validateur CSS du W3C](https://jigsaw.w3.org/css-validator/#validate_by_upload)
      ne signale aucune erreur
- [ ] Vous savez expliquer la différence entre `margin` et `padding`

---

## 🔎 Pour aller plus loin

- [MDN — Les bases de CSS](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics)
- [MDN — Le modèle de boîte](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN — Flexbox](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox)

**Projet précédent :** `02-html-semantique-formulaires`
**Projet suivant :** `04-css-responsive` — adapter la page à toutes les tailles d'écran
