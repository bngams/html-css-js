# Projet 10 — Réagir aux actions du visiteur

**Jour 3 · après-midi · 3 exercices · guidage : peu guidé**

Au projet 9, votre code construisait la page — une fois, au chargement, puis plus
rien. C'était un **monologue**.

À partir d'ici, la page **écoute** : un clic, une frappe au clavier, un formulaire
envoyé. C'est ce qui sépare une page d'une **application**.

---

## ⚠️ Le guidage se réduit encore

| Projets | Ce que contient le fichier à compléter |
|---|---|
| P1–P4 | Des trous balisés `???` et des commentaires numérotés |
| P6–P8 | Des marqueurs `// TODO:` seuls |
| **P9–P11** | **Un objectif, des critères d'acceptation — et un fichier presque vide** |

Même format qu'au projet 9, mais les critères en disent moins sur l'ordre des
étapes. À vous de le décider.

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Le premier clic | `addEventListener`, l'événement `click`, la fonction qu'on ne rappelle jamais soi-même |
| **2** | Écouter pendant qu'on tape | `input`, lire `.value`, filtrer une liste en direct |
| **3** | Un formulaire qui ne recharge pas | `submit`, `preventDefault`, ajouter une ligne aux données |

---

## 🔗 Ce que vous savez déjà

Tout le projet 9 vous sert ici, sans exception :

```js
document.querySelector("#bouton");          // trouver      (exo 1)
element.textContent = "…";                  // modifier     (exo 2)
element.classList.add("actif");             // habiller     (exo 2)
document.createElement("li");               // fabriquer    (exo 3)
liste.append(li);                           // insérer      (exo 3)
```

Et le schéma complet de l'exercice 4 : **vider, construire, relire, résumer**.
Un événement ne fait rien d'autre que le **relancer** au bon moment.

---

## ✅ Vous avez terminé quand…

- [ ] Vous savez attacher une fonction à un bouton avec `addEventListener`
- [ ] Vous savez pourquoi on ne met **pas** de parenthèses au nom de la fonction
- [ ] Vous savez lire ce que le visiteur a tapé dans un champ
- [ ] Vous savez empêcher un formulaire de recharger la page
- [ ] Vous savez reconstruire une liste à chaque action, sans la dupliquer

---

## 🔎 Pour aller plus loin

- [MDN — Introduction aux événements](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Events)
- [MDN — `addEventListener()`](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [MDN — `preventDefault()`](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault)
- [javascript.info — Introduction aux événements du navigateur](https://fr.javascript.info/introduction-browser-events)

**Projet précédent :** `09-js-dom` — manipuler la page
**Projet suivant :** `11-use-case-tabs` — un système d'onglets
