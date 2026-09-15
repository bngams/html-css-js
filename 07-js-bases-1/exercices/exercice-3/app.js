/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html, elle, est figée : n'y touchez pas.

   ── LE GESTE : il y a DEUX sortes de TODO ────────────────────

   A. « écrire … » / « afficher … »
      → EFFACEZ la ligne du TODO en entier, marqueurs compris,
        et TAPEZ votre instruction à la place.

   B. « remplacer la valeur ci-dessous … »
      → NE touchez PAS à la ligne qui suit le TODO.
        Modifiez seulement ce qui se trouve APRÈS le signe =,
        puis effacez la ligne du TODO.

   ⚠️ Pour un TODO de type B, écrivez votre calcul APRÈS le
      signe = , sur la ligne elle-même. Si vous mettez une
      instruction séparée au-dessus, vous obtiendrez une
      erreur rouge « Cannot access … before initialization ».
      Ce n'est pas grave : c'est le navigateur qui vous aide.

   Dans les deux cas : enregistrez (Ctrl+S), rechargez (F5).

   ── COMMENT TESTER ───────────────────────────────────────────

   Tout s'affiche dans la CONSOLE (F12). Gardez-la ouverte.

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F : aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : quatre tarifs avec else if ───────────────────── */


/* ── 1 · La fonction des tarifs ───────────────────────────────

   Écrivez une fonction categorie(age) qui RENVOIE :

      "enfant"   si age est inférieur à 12
      "jeune"    si age est inférieur à 18
      "adulte"   si age est inférieur à 65
      "senior"   dans tous les autres cas

   ⚠️ Une seule chaîne if / else if / else, dans CET ordre —
      du plus restrictif au plus large.                         */

// TODO: 1 — écrire la fonction categorie(age)


/* ── 2 · Vérifier les quatre cas ──────────────────────────────

   Affichez dans la console QUATRE instructions séparées :

      le texte  8 ans :    puis  categorie(8)
      le texte  15 ans :   puis  categorie(15)
      le texte  30 ans :   puis  categorie(30)
      le texte  70 ans :   puis  categorie(70)

   Vous devez obtenir enfant, jeune, adulte, senior.            */

// TODO: 2 — afficher les quatre catégories


/* ── PARTIE 2 : le piège de l'intervalle ─────────────────────── */


/* ── 3 · L'âge du visiteur ────────────────────────────────────

   Rangez 70 dans une boîte nommée age.                         */

// TODO: 3 — créer une boîte age contenant 70


/* ── 4 · Écrire l'intervalle À LA MANIÈRE DES MATHS ───────────

   Rangez dans testMaths le résultat de l'écriture mathématique
   naïve, telle qu'on l'écrirait sur une feuille :

      18 <= age < 65

   ⚠️ C'est VOLONTAIREMENT faux. Ne corrigez pas : l'étape 6
      vous fera constater le problème.                          */

// TODO: 4 — remplacer la valeur ci-dessous par 18 <= age < 65
const testMaths = false;


/* ── 5 · Écrire l'intervalle CORRECTEMENT ─────────────────────

   Rangez dans testCorrect le même test, écrit comme il faut :
   la variable répétée de chaque côté, reliée par « et ».       */

// TODO: 5 — remplacer la valeur ci-dessous par le test correct
const testCorrect = false;


/* ── 6 · Comparer les deux ────────────────────────────────────

   Affichez dans la console DEUX instructions séparées :

      le texte  18 <= age < 65 (maths) :        puis  testMaths
      le texte  age >= 18 && age < 65 (JS) :    puis  testCorrect

   age vaut 70 : la bonne réponse est false.
   Regardez ce que donne la première.                           */

// TODO: 6 — afficher les deux résultats


/* ── PARTIE 3 : combiner plusieurs conditions ────────────────── */


/* ── Les données du visiteur (fournies) ───────────────────────  */

const habitantCommune = true;
const estEtudiant = false;


/* ── 7 · La gratuité ──────────────────────────────────────────

   La médiathèque est gratuite pour les moins de 12 ans
   ET pour les habitants de la commune qui sont étudiants.

   Rangez dans gratuit le test complet :

      age inférieur à 12
      OU  ( habitantCommune ET estEtudiant )

   ⚠️ Mettez des PARENTHÈSES autour du « et » : le cours,
      section 6, explique pourquoi.                             */

// TODO: 7 — remplacer la valeur ci-dessous par le test de gratuité
const gratuit = false;


/* ── 8 · Annoncer la gratuité ─────────────────────────────────

   Affichez dans la console :
      le texte     Gratuit :
      puis         gratuit                                      */

// TODO: 8 — afficher si l'entrée est gratuite


/* ── 9 · L'inverse ────────────────────────────────────────────

   Affichez dans la console :
      le texte     Doit payer :
      puis         l'INVERSE de gratuit, avec l'opérateur « non » */

// TODO: 9 — afficher l'inverse de gratuit


/* ── 10 · Le message final ────────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Visiteur de
      puis         age
      puis         le texte  ans, catégorie :
      puis         categorie(age)

   Cela réutilise la fonction de l'étape 1 : une fonction écrite
   une fois sert partout.                                       */

// TODO: 10 — afficher le message final


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. Dans la console, tapez ces deux lignes et expliquez la
      différence :

         true || false && false
         (true || false) && false

      (cours, section 6)

   2. Reprenez la fonction categorie et INVERSEZ les deux
      premiers cas : mettez « age < 18 » avant « age < 12 ».
      Rechargez, puis regardez ce que renvoie categorie(8).
      Aucune erreur n'apparaît. Pourquoi le résultat est-il faux ?

   3. Dans la console, tapez ces deux lignes :

         "10" < "9"
         Number("10") < 9

      Les résultats sont OPPOSÉS. Pourquoi ?
      (indice : cours section 7, et exercice 1 section 6)
   ═══════════════════════════════════════════════════════════════ */
