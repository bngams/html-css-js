# Projet 12 — Cas pratique : le registre des emprunts

**Jour 3 · fin de parcours · 1 exercice · guidage : autonome**

Dernier projet. La médiathèque tient enfin son **registre** : un vrai tableau, avec
des colonnes, un statut calculé pour chaque emprunt, et un formulaire qui l'alimente
en direct.

C'est l'aboutissement du fil rouge commencé au projet 9 — la liste `<ul>` des
premiers pas devient un `<table>` piloté par des données.

---

## 🟥 Aucun squelette

C'est le seul projet du parcours où **aucun fichier JavaScript ne vous est fourni**.

Pas de `app.js` avec des commentaires à compléter, pas de `// TODO`. Vous recevez :

- une **page figée** (`travail.html`) avec le formulaire, le tableau vide et tout le CSS ;
- un **énoncé** avec des critères d'acceptation ;
- rien d'autre.

À vous de créer votre fichier, d'y écrire les données de départ, et de le brancher
sur une copie de la page. C'est exactement ce que vous ferez dans vos propres projets.

---

## 🎯 Ce que le projet demande

| Étape | Ce qu'il faut faire |
|---|---|
| **1** | Afficher au chargement les emprunts d'un tableau de données |
| **2** | Calculer le **statut** de chaque emprunt à partir des jours restants |
| **3** | Ajouter une ligne depuis le formulaire, sans recharger la page |
| **4** | Refuser les saisies incomplètes ou non numériques |
| **5** | *(bonus)* Charger des emprunts depuis une **API publique** |

---

## 🔗 Tout est déjà vu

| Geste | Vu au |
|---|---|
| `createElement`, `append`, `remove` | projet 9, exercices 3 et 4 |
| Vider avant de reconstruire | projet 9, exercice 4 |
| `classList` selon un état | projet 9, exercice 2 |
| `submit` + `preventDefault` | projet 10, exercice 3 |
| `.value`, `.trim()`, validation | projet 10, exercices 2 et 3 |
| `push` sur un tableau `const` | projet 8, exercice 1 |
| `Number()`, `isNaN` | projets 6 et 7 |

**Une seule chose est neuve, et seulement pour le bonus :** `fetch`, qui va chercher
des données sur un serveur.

---

## ⚠️ Le bonus demande un serveur local

`fetch` ne fonctionne pas quand la page est ouverte en double-clic (`file://`). Pour
le bonus uniquement, lancez un serveur depuis le dossier du projet :

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000`. Tout le reste du projet fonctionne sans cela.

---

## ✅ Vous avez terminé quand…

- [ ] Le tableau affiche les emprunts au chargement, avec leur statut coloré
- [ ] Le formulaire ajoute une ligne sans recharger la page
- [ ] Une saisie incomplète ou non numérique est refusée, avec un message en rouge
- [ ] Le résumé sous le tableau est juste, et se met à jour
- [ ] Votre code ne contient ni couleur, ni `display`, ni `innerHTML`

---

## 🔎 Pour aller plus loin

- [MDN — `fetch()`](https://developer.mozilla.org/fr/docs/Web/API/Window/fetch)
- [MDN — JSON](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON)
- [MDN — les tableaux HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [dummyjson.com](https://dummyjson.com/users) — l'API publique du bonus

**Projet précédent :** `11-use-case-tabs` — les onglets
**C'est le dernier projet du parcours.**
