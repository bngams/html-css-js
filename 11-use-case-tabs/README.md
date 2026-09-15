# Projet 11 — Cas pratique : les onglets

**Jour 3 · après-midi · 1 exercice · guidage : cadré**

Les onglets sont partout : réglages d'une application, fiche produit, tableau de
bord. C'est le premier **composant** que vous allez écrire en entier — un morceau
d'interface qui fonctionne tout seul, sans rien devoir au reste de la page.

Le décor reste celui des projets 9 et 10 : la **médiathèque**. Trois onglets, trois
vues — le catalogue, les emprunts, les retards.

---

## 🧩 Un cas pratique, pas un cours

Une seule notion nouvelle : lire un attribut `data-` avec `getAttribute()`.

Tout le reste est déjà à vous :

| Geste | Vu au |
|---|---|
| `querySelectorAll` + `for…of` | projet 9, exercice 1 |
| `classList.add` / `.remove` | projet 9, exercice 2 |
| `addEventListener("click", …)` | projet 10, exercice 1 |
| Une fonction appelée depuis deux endroits | projet 10, exercice 2 |

**L'enjeu n'est pas d'apprendre, c'est d'assembler.**

---

## 🎯 Le principe des onglets

Un système d'onglets tient en une phrase : **tout éteindre, puis rallumer un seul**.

```js
// éteindre
for (const p of panneaux) { p.classList.remove("active"); }
// rallumer
panneau.classList.add("active");
```

C'est l'exclusivité qui fait l'onglet : à tout instant, **un seul** panneau est
visible, et **un seul** onglet est souligné.

---

## 🎨 Qui décide de l'apparence ?

Le CSS de la page est **déjà complet**. Il sait afficher un panneau qui porte la
classe `active` et souligner un onglet qui porte `tab-active`.

Votre JavaScript **ne décide pas de l'apparence** : il décide de **l'état**. Il pose
et retire des classes — jamais une couleur, jamais un `display`.

C'est la règle du projet 9, exercice 2, et ce projet en est la démonstration
grandeur nature : à la fin, **aucun attribut `style`** n'aura été écrit dans la page.

---

## ✅ Vous avez terminé quand…

- [ ] Les trois onglets basculent, dans n'importe quel ordre
- [ ] Un seul panneau est visible à la fois, un seul onglet souligné
- [ ] Le premier onglet est déjà ouvert **au chargement**, sans clic
- [ ] Votre code ne contient ni couleur, ni `display`, ni `.style`
- [ ] Vous savez expliquer pourquoi on éteint **tout** avant de rallumer

---

## 🔎 Pour aller plus loin

- [MDN — les attributs `data-*`](https://developer.mozilla.org/fr/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [MDN — `getAttribute()`](https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute)
- [MDN — `classList`](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)

**Projet précédent :** `10-js-evenements` — les événements
**Projet suivant :** `12-use-case-table-json` — tableau dynamique et JSON
