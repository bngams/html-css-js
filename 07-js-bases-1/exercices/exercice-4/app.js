/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html, elle, est figée : n'y touchez pas.

   🎓 EXERCICE DE SYNTHÈSE : aucune notion nouvelle.
      Tout vient des projets 6 et 7. Si vous bloquez, la réponse
      est dans un exercice précédent.

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

   Ce jeu ouvre une BOÎTE DE DIALOGUE au chargement.
   Gardez aussi la console ouverte (F12) : le secret y est
   affiché pour vous permettre de tester tous les cas.

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F : aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : les réglages du jeu ──────────────────────────── */


/* ── 1 · Les bornes ───────────────────────────────────────────

   Créez deux boîtes qui ne changeront jamais :
      MINIMUM  valant 1
      MAXIMUM  valant 10

   Écrites en majuscules par convention : ce sont des réglages. */

// TODO: 1 — créer MINIMUM (1) et MAXIMUM (10)


/* ── PARTIE 2 : tirer le nombre secret ───────────────────────── */


/* ── 2 · La fonction de tirage ────────────────────────────────

   Écrivez une fonction tirerSecret() — SANS paramètre — qui
   RENVOIE un entier au hasard de MINIMUM à MAXIMUM, dans le cas
   où MINIMUM vaut 1.

   Rappel du projet 6 :
      Math.floor(Math.random() * 10) + 1

   Remplacez le 10 par MAXIMUM, et le 1 par MINIMUM.            */

// TODO: 2 — écrire la fonction tirerSecret()


/* ── 3 · Tirer le secret ──────────────────────────────────────

   Rangez dans secret le résultat de tirerSecret().             */

// TODO: 3 — remplacer la valeur ci-dessous par l'appel de tirerSecret()
const secret = 0;


/* ── 4 · Tricher, pour pouvoir tester ─────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     [triche] le secret est :
      puis         secret

   Sans cela, vous ne pourriez pas vérifier votre jeu.
   Dans un vrai jeu, on retirerait cette ligne avant livraison. */

// TODO: 4 — afficher le secret dans la console


/* ── PARTIE 3 : demander et convertir ────────────────────────── */


/* ── 5 · Poser la question ────────────────────────────────────

   Rangez dans saisie la réponse à la question :
      Devinez un nombre entre 1 et 10                           */

// TODO: 5 — remplacer la valeur ci-dessous par la question posée au joueur
const saisie = "";


/* ── 6 · Convertir ────────────────────────────────────────────

   Rangez dans proposition la saisie CONVERTIE en nombre.

   ⚠️ Sans cette conversion, la comparaison de l'étape 8 serait
      fausse à tous les coups : prompt rend du TEXTE.           */

// TODO: 6 — remplacer la valeur ci-dessous par la conversion de saisie
const proposition = 0;


/* ── 7 · Vérifier ce qu'on a reçu ─────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     saisie :
      puis         saisie
      puis         le texte  → proposition :
      puis         proposition

   Essayez ensuite de taper des lettres, ou d'annuler : vous
   verrez ce que cela donne.                                    */

// TODO: 7 — afficher la saisie et la proposition


/* ── PARTIE 4 : décider ──────────────────────────────────────── */


/* ── 8 · La fonction de réponse ───────────────────────────────

   Écrivez une fonction reponse(proposition) qui RENVOIE le
   message adapté, dans CET ordre :

      si la proposition n'est pas un nombre
          → "Ce n'est pas un nombre."
      sinon si elle est égale au secret
          → "Gagné !"
      sinon si elle est plus petite que le secret
          → "Trop petit."
      sinon
          → "Trop grand."

   Pour le premier cas, utilisez la fonction du cours qui teste
   si une valeur n'est pas un nombre (section 5).

   ⚠️ L'ordre compte : le test « pas un nombre » doit venir en
      PREMIER, sinon il ne sera jamais atteint.                 */

// TODO: 8 — écrire la fonction reponse(proposition)


/* ── 9 · Annoncer le résultat au joueur ───────────────────────

   Affichez le message dans une BOÎTE D'ALERTE, en appelant
   reponse(proposition).                                        */

// TODO: 9 — afficher la réponse dans une alerte


/* ── 10 · Et dans la console ──────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Proposition :
      puis         proposition
      puis         le texte  · Secret :
      puis         secret
      puis         le texte  · Verdict :
      puis         reponse(proposition)                         */

// TODO: 10 — afficher le bilan complet dans la console


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. Testez les quatre cas, en vous servant du secret affiché
      dans la console :
         · la bonne réponse
         · un nombre trop petit
         · un nombre trop grand
         · des lettres (abc)
      Puis un cinquième : cliquez sur ANNULER. Que se passe-t-il ?
      Regardez la ligne du TODO 7 pour comprendre.

   2. Dans la console, tapez :

         "10" > "9"
         Number("10") > 9

      Pourquoi la première est-elle fausse ? (cours, section 4)

   3. Rendez le jeu plus aimable : au lieu de "Trop petit.",
      affichez "Trop petit, essayez plus haut." — et pour la
      victoire, ajoutez le nombre d'essais… sauf qu'il n'y en a
      qu'un. Ce sera possible au projet 8, avec les boucles.
   ═══════════════════════════════════════════════════════════════ */
