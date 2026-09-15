# Projet 5 — Votre page, votre thème

**Jour 1 · fin de journée · 1 h à 1 h 30 · guidage : libre**

Quatre projets pour apprendre, un pour construire. Cette fois, il n'y a **ni
fichier à compléter, ni corrigé** : vous partez d'une page vide et vous faites
votre site.

---

## ⚠️ Ce projet est différent des quatre précédents

| | Projets 1 à 4 | **Projet 5** |
|---|---|---|
| Fichier à modifier | imposé (`travail.html` ou `style.css`) | **le vôtre, que vous copiez** |
| Contenu | fourni | **le vôtre** |
| Corrigé | `solution/` commenté | **aucun** — il n'y a pas une bonne réponse |
| Vérification | tableau « ce que vous devez voir » | **une checklist de 17 points** |

---

## 📁 Ce que contient le projet

```
05-projet-libre/
├── index.html                    ← l'accueil du projet
├── consignes.html                ← 📋 LA CHECKLIST — commencez par là
├── depart/                       ← 🚀 à copier chez vous
│   ├── index.html                   squelette HTML valide
│   ├── style.css                    les fondations CSS
│   └── LISEZ-MOI.txt
└── inspiration/                  ← 💡 quatre exemples très différents
    ├── portfolio/                   sobre, palette neutre
    ├── landing/                     couleurs vives, formulaire
    ├── evenement/                   fond sombre, mise en page dense
    ├── dataviz/                     graphique SVG + tableau + lien PDF
    └── assets/                      images et document partagés
```

---

## 🚀 Comment démarrer

1. Lisez **`consignes.html`** — la checklist et la méthode
2. **Copiez le dossier `depart/`** chez vous (le Bureau, par exemple) et
   renommez-le comme votre projet
3. Ouvrez la copie dans VSCode : *Fichier → Ouvrir le dossier…*
4. Travaillez comme depuis le projet 3 : j'écris → j'enregistre → je recharge

> 💡 **Un conseil de méthode :** écrivez d'abord *tout le contenu* en HTML brut,
> sans aucun style. Vous verrez bien mieux la structure, et le CSS ira ensuite
> beaucoup plus vite. C'est l'ordre professionnel — le fond, puis la forme.

---

## ✅ La checklist en bref

Les 17 points détaillés sont dans `consignes.html`. En résumé :

- **Structure** (projets 1-2) — squelette valide, balises sémantiques, hiérarchie
  de titres, une liste, une image avec `alt`, trois liens, un tableau *ou* un
  formulaire
- **Mise en forme** (projet 3) — feuille externe, vos classes nommées par leur
  rôle, deux ou trois couleurs, espacements maîtrisés, une zone en Flexbox
- **Adaptation** (projet 4) — `box-sizing`, `img { max-width: 100% }`,
  des `max-width`, aucune barre horizontale de 360 à 1600 px, une media query

---

## 💡 Sur les pages d'inspiration

Elles sont **volontairement très différentes** — en sujet, en couleurs, en
disposition — pour montrer l'étendue du possible avec ce que vous savez déjà.

La quatrième, le **rapport chiffré**, montre trois choses que les autres n'ont
pas : un **graphique en SVG écrit dans la page** (projet 1), un tableau de données
avec `scope` (projet 2), et un **lien vers un PDF** (projet 1).

Ce sont des **idées, pas des modèles à copier**. Regardez-les, redimensionnez-les,
ouvrez leur code si un détail vous intrigue. Puis faites autre chose.

Les trois premières respectent les 17 points de la checklist : c'est d'ailleurs un
bon exercice de lecture que d'y retrouver les balises sémantiques, la media query,
le `alt` de l'image.

Le rapport chiffré fait exception sur le point 5, et volontairement : il n'a pas
d'`<img>` mais un SVG en ligne, dont l'équivalent du `alt` s'écrit avec
`role="img"`, `<title>` et `<desc>`.

---

## 🎤 La restitution

En fin de journée, chacun montre sa page en deux minutes : le sujet choisi, ce
dont vous êtes content, et la difficulté rencontrée.

La difficulté est la partie la plus utile pour tout le monde — c'est souvent celle
que trois autres personnes ont eue aussi.

---

**Projet précédent :** `04-css-responsive`
**Suite :** jour 2 — JavaScript
