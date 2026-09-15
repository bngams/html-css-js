# Projet 9 — Manipuler la page

**Jour 3 · matin · 4 exercices · guidage : semi-guidé**

Depuis le projet 6, tout votre code parlait à la **console**. À partir
d'aujourd'hui, il parle à la **page** : lire ce qu'elle contient, le modifier,
ajouter des éléments qui n'existaient pas.

C'est le lien entre les trois langages du parcours : le **HTML** décrit, le
**CSS** habille, et le **JavaScript** vient enfin les changer en direct.

---

## ⚠️ Le guidage change de forme — pour de bon

| Projets | Ce que contient le fichier à compléter |
|---|---|
| P1–P4 | Des trous balisés `???` et des commentaires numérotés |
| P6–P8 | Des marqueurs `// TODO:` seuls |
| **P9–P11** | **Un objectif, des critères d'acceptation — et un fichier presque vide** |

Vous n'aurez plus de marqueur à remplacer ligne par ligne. L'énoncé dit **ce que
la page doit faire** ; à vous de décider comment. C'est ainsi qu'on travaille
vraiment.

Le cours reste à portée d'onglet, et la solution est toujours là — après avoir
cherché.

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Trouver dans la page | `querySelector`, `querySelectorAll`, et ce qu'une librairie remplace |
| **2** | Changer ce qu'on a trouvé | `textContent`, `classList`, `.style` — et lequel choisir |
| **3** | Créer et insérer | `createElement`, `append`, construire une liste depuis des données |
| **4** | Une page qui se construit seule | Tout réunir : des données en entrée, une page en sortie |

---

## 🔗 Ce que vous savez déjà

Le projet 6 vous a donné le premier geste :

```js
document.querySelector("h1").textContent = "Nouveau titre";
```

Vous savez aussi que **le script doit être en bas du `<body>`** — sinon il ne
trouve rien. Et depuis le projet 8, vous savez parcourir un tableau d'objets :
c'est exactement ce qui alimentera la page aux exercices 3 et 4.

---

## ✅ Vous avez terminé quand…

- [ ] Vous savez choisir entre `querySelector` et `querySelectorAll`
- [ ] Vous savez pourquoi une `NodeList` n'est pas tout à fait un tableau
- [ ] Vous savez changer un texte, une classe, et quand préférer l'un à l'autre
- [ ] Vous savez créer un élément et l'insérer dans la page
- [ ] Vous savez construire une liste HTML à partir d'un tableau d'objets
- [ ] Vous savez vider une liste avant de la reconstruire — et pourquoi l'ordre
      des opérations décide du résultat

---

## 🔎 Pour aller plus loin

- [MDN — Manipuler les documents](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/DOM_scripting)
- [MDN — `querySelectorAll()`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll)
- [MDN — `classList`](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)
- [javascript.info — Modifier le document](https://fr.javascript.info/modifying-document)

**Projet précédent :** `08-js-bases-2` — répéter et ranger
**Projet suivant :** `10-js-evenements` — réagir aux actions du visiteur
