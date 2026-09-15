/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html, elle, est figée : n'y touchez pas.

   ⚠️ NOUVEAUTÉ : ce fichier n'est pas du HTML.
      Les commentaires s'écrivent ici avec deux barres obliques,
      comme cette ligne. Les commentaires du HTML ne fonctionnent
      PAS dans un fichier .js.

   ── LE GESTE : il y a DEUX sortes de TODO ────────────────────

   A. « écrire … » / « afficher … »
      → EFFACEZ la ligne du TODO en entier, marqueurs compris,
        et TAPEZ votre instruction à la place.

   B. « remplacer la valeur ci-dessous … »
      → NE touchez PAS à la ligne qui suit le TODO.
        Modifiez seulement ce qui se trouve APRÈS le signe =,
        puis effacez la ligne du TODO.

        Avant :  let prenom = "";
        Après :  let prenom = votre instruction ici;

   ⚠️ Pour un TODO de type B, écrivez votre calcul APRÈS le
      signe = , sur la ligne elle-même. Si vous mettez une
      instruction séparée au-dessus, vous obtiendrez une
      erreur rouge « Cannot access … before initialization ».
      Ce n'est pas grave : c'est le navigateur qui vous aide.

   Dans les deux cas : enregistrez (Ctrl+S), rechargez (F5).

   ── COMMENT TESTER ───────────────────────────────────────────

   Gardez la CONSOLE OUVERTE (F12) : une partie du résultat s'y
   affiche, l'autre dans les boîtes de dialogue.

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F : aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Un premier message pour VOUS ─────────────────────────

   Avant toute chose, vérifions que le fichier est bien chargé.
   Écrivez dans la console le message : Le script est chargé
   (rien ne doit apparaître sur la page, uniquement dans la console) */

// TODO: 1 — écrire "Le script est chargé" dans la console


/* ── 2 · Un message pour le VISITEUR ──────────────────────────

   Affichez une boîte d'alerte souhaitant la bienvenue :
   Bienvenue à la médiathèque !                                */

// TODO: 2 — afficher une boîte d'alerte de bienvenue


/* ── 3 · Demander son prénom ──────────────────────────────────

   Posez la question : Comment vous appelez-vous ?
   et RANGEZ la réponse dans la boîte nommée prenom ci-dessous.

   Le mot « let » crée une boîte pour y garder une valeur.
   Vous l'étudierez en détail à l'exercice 3 ; ici, contentez-vous
   de compléter ce qui suit le signe =                          */

// TODO: 3 — remplacer la valeur ci-dessous par une question posée au visiteur
let prenom = "";


/* ── 4 · Le saluer par son prénom ─────────────────────────────

   Affichez une alerte qui assemble : Bonjour puis son prénom,
   par exemple :  Bonjour Camille !

   Souvenez-vous de l'exercice 1 : le + assemble les textes.    */

// TODO: 4 — afficher une alerte qui salue le visiteur par son prénom


/* ── 5 · Demander son âge ─────────────────────────────────────

   Posez la question : Quel âge avez-vous ?
   et rangez la réponse dans la boîte nommée ageSaisi.          */

// TODO: 5 — remplacer la valeur ci-dessous par une question posée au visiteur
let ageSaisi = "";


/* ── 6 · Observer le PIÈGE ────────────────────────────────────

   Affichez dans la console, sur une seule instruction, ces deux
   valeurs côte à côte (séparées par une virgule) :

      le texte           L'an prochain, version texte :
      puis le calcul     ageSaisi + 1

   Regardez bien le résultat. Si vous avez saisi 25, la console
   n'affichera PAS 26. C'est voulu : vous devez le constater.   */

// TODO: 6 — afficher dans la console le libellé puis ageSaisi + 1


/* ── 7 · Corriger le piège ────────────────────────────────────

   Rangez dans la boîte age ci-dessous le même âge, mais CONVERTI
   en nombre, avec Number(...).                                 */

// TODO: 7 — remplacer la valeur ci-dessous par la conversion de ageSaisi
let age = 0;


/* ── 8 · Vérifier la correction ───────────────────────────────

   Affichez dans la console, sur une seule instruction :

      le texte           L'an prochain, version nombre :
      puis le calcul     age + 1

   Cette fois, 25 doit bien donner 26.                          */

// TODO: 8 — afficher dans la console le libellé puis age + 1


/* ── 9 · Poser une question fermée ────────────────────────────

   Demandez : Souhaitez-vous recevoir la newsletter ?
   et rangez la réponse dans la boîte nommée newsletter.        */

// TODO: 9 — remplacer la valeur ci-dessous par une question à deux boutons (confirm)
let newsletter = false;


/* ── 10 · Afficher le récapitulatif ───────────────────────────

   Affichez dans la console, sur une seule instruction, ces
   quatre valeurs côte à côte :

      le texte  Récapitulatif :
      prenom
      age
      newsletter

   Observez dans la console que les trois valeurs n'ont pas la
   même couleur : ce sont trois TYPES différents.               */

// TODO: 10 — afficher le récapitulatif dans la console


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   Reprenez le TODO 3 et proposez une valeur par défaut dans le
   champ de saisie : la question accepte un second argument.

   Puis testez ceci, sans rien changer d'autre : rechargez la page
   et cliquez sur ANNULER à la première question. Regardez ce que
   le récapitulatif affiche à la place du prénom.
   ═══════════════════════════════════════════════════════════════ */
