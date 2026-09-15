# Projet 4 — CSS, le responsive

**Jour 1 · 3 exercices · guidage : guidé**

Vos pages savent se montrer (projet 3). Elles vont maintenant apprendre à
s'adapter — au téléphone, à la tablette, au grand écran.

---

## 📄 Les fichiers

Même forme qu'au projet 3 :

| Fichier | Rôle |
|---|---|
| `travail.html` | 🔒 **Fourni et figé** — n'y touchez pas |
| `style.css` | 👉 **C'EST CELUI QUE VOUS MODIFIEZ** |

Le responsive est **entièrement affaire de CSS** : la même page HTML sert à tous
les écrans. C'est d'ailleurs tout l'intérêt — un seul contenu, une seule adresse,
et une présentation qui s'ajuste.

---

## 🚀 Démarrer

Ouvrez `index.html` dans votre navigateur.

| Méthode | Comment |
|---|---|
| **Double-clic** | Double-cliquez sur `index.html` |
| **VSCode + Live Preview** | Clic droit → *Show Preview* |

---

## 📋 Les exercices

| # | Titre | Ce que vous allez apprendre |
|---|---|---|
| **1** | Le viewport et les unités | La balise `meta viewport`, les unités relatives (`%`, `rem`), `max-width` sur les images |
| **2** | Les media queries | `@media`, les points de rupture, l'approche mobile-first |
| **3** | Une page entièrement adaptative | Menu qui s'empile, grille qui passe en colonne, typographie fluide |

---

## 🔍 Comment tester une page responsive

C'est la nouveauté de ce projet : **recharger ne suffit plus**, il faut
**redimensionner**.

### Méthode 1 — la fenêtre (la plus simple)

Attrapez le bord de votre fenêtre de navigateur et faites-la glisser lentement.
Regardez la page se réorganiser.

### Méthode 2 — le mode appareil mobile (le plus précis)

1. Clic droit sur la page → **Inspecter**
2. Cliquez sur l'icône 📱 en haut du panneau (ou `Ctrl+Maj+M` / `Cmd+Maj+M`)
3. Choisissez un appareil dans la liste déroulante, ou saisissez une largeur

> 💡 Cette barre affiche la **largeur en pixels** en haut de la page. C'est elle
> qui vous dira si votre point de rupture se déclenche au bon moment.

### Les largeurs de référence

| Appareil | Largeur typique |
|---|---|
| Téléphone | 360 – 430 px |
| Tablette (portrait) | 768 px |
| Ordinateur portable | 1280 – 1440 px |

---

## ✅ Vous avez terminé quand…

- [ ] Les trois pages s'adaptent correctement entre 360 px et 1440 px
- [ ] Aucune barre de défilement **horizontale** n'apparaît, à aucune largeur
- [ ] Dans chaque `style.css`, `Ctrl+F` sur `TODO` ne trouve plus rien
- [ ] Le [validateur CSS du W3C](https://jigsaw.w3.org/css-validator/#validate_by_upload)
      ne signale aucune erreur

---

## 🔎 Pour aller plus loin

- [MDN — Design web responsive](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [MDN — Les media queries](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Media_queries)
- [MDN — La balise meta viewport](https://developer.mozilla.org/fr/docs/Web/HTML/Guides/Viewport_meta_element)

**Projet précédent :** `03-css-mise-en-forme`
**Projet suivant :** `05-projet-libre` — votre page, votre thème
