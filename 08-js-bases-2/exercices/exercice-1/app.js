/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   ⚠️ LE GUIDAGE SE DESSERRE à partir de ce projet : les
      consignes sont plus courtes. Le cours reste à portée
      d'onglet — c'est là qu'il faut retourner chercher.

   ── LE GESTE ─────────────────────────────────────────────────

   A. « écrire … » / « afficher … »
      → effacez la ligne du TODO, tapez votre instruction.

   B. « remplacer la valeur ci-dessous … »
      → écrivez APRÈS le signe = , sur la ligne elle-même,
        puis effacez la ligne du TODO.

      ⚠️ Si vous écrivez une instruction séparée AU-DESSUS de
         la ligne « const … = … ; », vous obtiendrez une erreur
         rouge « Cannot access … before initialization ».
         Ce n'est pas grave : c'est le navigateur qui vous aide.

   Enregistrez (Ctrl+S), rechargez (F5). Tout s'affiche dans la
   CONSOLE (F12).

   Avant de terminer : Ctrl+F sur « TODO », aucun résultat.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── Le tableau de départ (fourni) ─────────────────────────────  */

const fruits = ["Pomme", "Banane", "Cerise", "Mangue", "Poire"];


/* ── PARTIE 1 : lire un tableau ──────────────────────────────── */


/* ── 1 · Combien de fruits ? ──────────────────────────────────

   Affichez : le texte  Nombre de fruits :  puis la longueur
   du tableau.                                                  */

// TODO: 1 — afficher le nombre de fruits


/* ── 2 · Le troisième fruit ───────────────────────────────────

   Affichez : le texte  3e fruit :  puis le fruit d'index 2.

   ⚠️ Le 3e fruit n'est pas à l'index 3 — voir le cours, §3.    */

// TODO: 2 — afficher le troisième fruit


/* ── 3 · Le dernier fruit ─────────────────────────────────────

   Affichez : le texte  Dernier :  puis le dernier fruit,
   SANS écrire 4 en dur — servez-vous de la longueur.           */

// TODO: 3 — afficher le dernier fruit


/* ── 4 · Une case qui n'existe pas ────────────────────────────

   Affichez : le texte  Case 5 :  puis fruits[5].
   Constatez : aucune erreur, mais rien non plus.               */

// TODO: 4 — afficher la case 5


/* ── PARTIE 2 : parcourir avec for ───────────────────────────── */


/* ── 5 · Tous les fruits, avec leur numéro ────────────────────

   Avec une boucle for classique, affichez une ligne par fruit :

      le texte  →  puis le numéro de case, puis le fruit

   Exemple de première ligne :   → 0 Pomme

   💡 Vous écrivez UN console.log, la console affichera CINQ
      lignes. C'est normal — c'est tout l'intérêt d'une boucle. */

// TODO: 5 — parcourir le tableau avec une boucle for


/* ── PARTIE 3 : parcourir avec for…of ────────────────────────── */


/* ── 6 · Tous les fruits, sans compteur ───────────────────────

   Même chose, mais avec for…of, et sans le numéro :

      le texte  ·  puis le fruit                                */

// TODO: 6 — parcourir le tableau avec for…of


/* ── PARTIE 4 : modifier le tableau ─────────────────────────── */


/* ── 7 · Ajouter un fruit ─────────────────────────────────────

   Ajoutez "Kiwi" à la fin du tableau.

   ⚠️ fruits est déclaré avec const : c'est permis. Le cours §8
      explique pourquoi.                                        */

// TODO: 7 — ajouter "Kiwi" à la fin


/* ── 8 · Vérifier ─────────────────────────────────────────────

   Affichez : le texte  Après ajout :  puis la nouvelle
   longueur du tableau.                                         */

// TODO: 8 — afficher la nouvelle longueur


/* ── 9 · Tout assembler en une phrase ─────────────────────────

   Rangez dans listeTexte tous les fruits assemblés en un seul
   texte, séparés par  " - "  (espace, tiret, espace).          */

// TODO: 9 — remplacer la valeur ci-dessous par l'assemblage
const listeTexte = "";


/* ── 10 · Afficher la phrase ──────────────────────────────────

   Affichez : le texte  Liste :  puis listeTexte.               */

// TODO: 10 — afficher la liste assemblée


/* ═══════════════════════════════════════════════════════════════
   BONUS

   1. Remplacez le  i < fruits.length  de l'étape 5 par
      i <= fruits.length , rechargez, et regardez la dernière
      ligne. Aucune erreur — mais que voyez-vous ? (cours §5)
      Remettez ensuite le chevron simple.

   2. Dans la console, tapez :

         [10, 9, 2].sort()
         [10, 9, 2].sort((a, b) => a - b)

      Pourquoi le premier donne-t-il 10, 2, 9 ? (cours §7)

   3. Toujours dans la console, essayez :

         fruits = ["Autre chose"]

      Lisez l'erreur. Pourquoi push() était-il permis, et pas
      celle-ci ? (cours §8)
   ═══════════════════════════════════════════════════════════════ */
