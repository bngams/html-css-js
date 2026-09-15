/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — À VOUS DE JOUER

   ⚠️ NOUVEAUTÉ : CET EXERCICE UTILISE DEUX FICHIERS.

      · travail.html   → le TODO 1 (déplacer la balise script)
      · script.js      → ce fichier, les TODO 2 à 6

   👉 COMMENCEZ PAR travail.html. Tant que la balise script est
      mal placée, RIEN de ce fichier ne pourra fonctionner.

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

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F dans LES DEUX fichiers :
   aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── 2 · Vérifier que le script est bien chargé ────────────────

   Écrivez dans la console le message : script.js chargé
   Si vous ne le voyez pas, le fichier n'est pas trouvé.        */

// TODO: 2 — écrire "script.js chargé" dans la console


/* ── 3 · Attraper le titre de la page ──────────────────────────

   Rangez dans titre le premier élément h1 de la page,
   avec la méthode vue au cours (section 4).

   ⚠️ Quand le script est dans le head, cette ligne ne PLANTE pas :
      elle ne trouve rien et range null dans la boîte, sans erreur.
      C'est plus bas, en voulant ÉCRIRE dans ce null, que tout
      s'arrêtera. Retenez-le pour le bonus.                     */

// TODO: 3 — remplacer la valeur ci-dessous par la recherche du h1
const titre = null;


/* ── 4 · Vérifier ce qu'on a attrapé ──────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Titre trouvé :
      puis         titre

   · Script mal placé  → null
   · Script bien placé → l'élément h1                           */

// TODO: 4 — afficher le titre trouvé dans la console


/* ── 5 · Écrire le nombre d'emprunts dans la page ─────────────

   La page contient un élément d'identifiant  compteur.
   Rappel : en CSS, on désigne un id par un dièse.

   Remplacez son texte par le nombre 47.
   Rappel du cours : .textContent contient le texte affiché.    */

// TODO: 5 — écrire 47 dans l'élément d'id compteur


/* ── 6 · Écrire le message ────────────────────────────────────

   La page contient aussi un élément d'identifiant  message.
   Remplacez son texte par :  emprunts enregistrés aujourd'hui

   Rechargez : le nombre et le message doivent s'afficher dans
   la page, sans aucune boîte de dialogue.                      */

// TODO: 6 — écrire le message dans l'élément d'id message


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. REMETTEZ la balise script dans le head, rechargez, et
      lisez le message d'erreur EN ENTIER. Il nomme la ligne
      fautive. Sauriez-vous dire pourquoi c'est celle-là ?
      Puis remettez la balise en bas.

   2. Toujours dans le head, ajoutez cette fois le mot defer :

         <script defer src="script.js"></script>

      La page refonctionne. Pourquoi ? (cours, section 3)

   3. Dans la console, tapez :

         document.querySelector("h1").textContent = "Test"

      Le titre de la page change sous vos yeux. Rechargez :
      il revient. Rien n'a été enregistré — c'est le projet 9
      qui expliquera cette manipulation en détail.
   ═══════════════════════════════════════════════════════════════ */
