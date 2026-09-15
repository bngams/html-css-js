# Projet 7 — Décider et regrouper

**Jour 2 · après-midi · 4 exercices · guidage : guidé**

Au projet 6, votre code s'exécutait **toujours pareil**, de haut en bas. Ici il
apprend à **décider** (les conditions) et à **se regrouper** en blocs réutilisables
(les fonctions).

---

## 📁 Le fichier change de nom : `app.js`

| Projet | Comment le JS est chargé | La gêne qui fait avancer |
|---|---|---|
| **P6** | la console, puis `<script>` dans la page | « ça marche, mais ça pollue le HTML » |
| **P7** | **un fichier `app.js` séparé** | « mieux — mais tout est dans un seul gros fichier » |
| **P8** | *(mention)* `<script type="module">` | « quand ça grossit, on découpe » |

Le nom `app.js` est une **convention** : c'est le fichier principal d'une petite
application. Rien de technique — `script.js` fonctionnerait pareil. Mais vous
croiserez `app.js` partout, autant y être habitué.

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Si… sinon | `if` / `else`, les comparaisons, et le piège `==` contre `===` |
| **2** | Vos premières fonctions | `function`, les paramètres, `return` |
| **3** | Enchaîner les décisions | `else if`, `&&`, `\|\|`, `!` |
| **4** | Le jeu de devinette | Tout réunir dans un mini-programme qui tourne |

---

## ⚠️ Le piège qui revient — et qu'il faut avoir compris

Au projet 6, vous avez découvert que **`prompt()` renvoie toujours du texte**.
Ici, cela devient dangereux :

```js
let saisie = prompt("Votre âge ?");   // "25", du TEXTE
saisie === 25                          // false  ← jamais vrai !
Number(saisie) === 25                  // true   ✅
```

Une condition qui compare un texte à un nombre peut être **fausse pour toujours**,
sans la moindre erreur rouge. C'est le fil conducteur des quatre exercices.

---

## ✅ Vous avez terminé quand…

- [ ] Vous savez écrire une condition `if` / `else` correcte
- [ ] Vous savez quand utiliser `===` plutôt que `==`, et pourquoi
- [ ] Vous savez écrire une fonction avec des paramètres et un `return`
- [ ] Vous savez combiner plusieurs conditions avec `&&` et `||`
- [ ] Vous savez convertir une saisie avant de la comparer

---

## 🔎 Pour aller plus loin

- [MDN — Prendre des décisions](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Conditionals)
- [MDN — Les fonctions](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Functions)
- [javascript.info — Les conditions](https://fr.javascript.info/ifelse)

**Projet précédent :** `06-js-intro` — découvrir JavaScript
**Projet suivant :** `08-js-bases-2` — boucles, tableaux et objets
