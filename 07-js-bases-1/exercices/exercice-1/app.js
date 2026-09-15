/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html, elle, est figée : n'y touchez pas.

   📁 NOUVEAUTÉ : le fichier s'appelle désormais app.js.
      C'est une convention — le fichier principal d'une petite
      application. Rien ne change techniquement.

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


/* ── PARTIE 1 : votre première décision ───────────────────────── */


/* ── 1 · L'âge du visiteur ────────────────────────────────────

   Rangez 20 dans une boîte nommée age.
   Cette valeur ne changera pas : choisissez le bon mot-clé.    */

// TODO: 1 — créer une boîte age contenant 20


/* ── 2 · Majeur ou mineur ? ───────────────────────────────────

   Écrivez une condition qui affiche dans la console :
      Majeur   si age vaut 18 ou plus
      Mineur   sinon

   Utilisez la forme complète : si … sinon.                     */

// TODO: 2 — écrire la condition qui affiche Majeur ou Mineur


/* ── 3 · Vérifier l'autre cas ─────────────────────────────────

   Changez la valeur de age en 15, enregistrez, rechargez.
   La console doit maintenant afficher Mineur.

   Puis REMETTEZ 20 avant de continuer.

   ⚠️ SI VOUS OUBLIEZ DE REMETTRE 20, tout le reste fonctionnera
      quand même — mais vous lirez Mineur au lieu de Majeur, et
      Tarif : 12 € au lieu de 24 €. Le nombre de lignes, lui,
      sera identique. AUCUNE erreur ne vous préviendra.

   ⚠️ Cette étape ne s'écrit pas : elle se FAIT. Effacez
      simplement la ligne du TODO une fois le test effectué.    */

// TODO: 3 — tester avec 15, vérifier, puis remettre 20


/* ── PARTIE 2 : le piège de la comparaison ───────────────────── */


/* ── 4 · Une saisie qui ressemble à un nombre ─────────────────

   Rangez dans saisie le TEXTE "20" — avec les guillemets.
   C'est exactement ce que renverrait un prompt().             */

// TODO: 4 — remplacer la valeur ci-dessous par le texte "20"
const saisie = 0;


/* ── 5 · Constater le piège ───────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     saisie === 20 :
      puis         la comparaison  saisie === 20

   Lisez bien le résultat. Il va vous surprendre.               */

// TODO: 5 — afficher le résultat de saisie === 20


/* ── 6 · Comparer avec l'autre opérateur ──────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     saisie == 20 :
      puis         la comparaison  saisie == 20  (DEUX signes)

   Les deux résultats diffèrent. C'est tout l'objet du cours.   */

// TODO: 6 — afficher le résultat de saisie == 20


/* ── 7 · La bonne façon de faire ──────────────────────────────

   Rangez dans saisieNombre la saisie CONVERTIE en nombre,
   avec l'outil vu au projet 6.                                 */

// TODO: 7 — remplacer la valeur ci-dessous par la conversion de saisie
const saisieNombre = 0;


/* ── 8 · Vérifier la correction ───────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     saisieNombre === 20 :
      puis         la comparaison  saisieNombre === 20

   Cette fois, le résultat doit être true.                      */

// TODO: 8 — afficher le résultat de saisieNombre === 20


/* ── PARTIE 3 : une décision utile ───────────────────────────── */


/* ── 9 · Le tarif de la médiathèque ───────────────────────────

   L'abonnement coûte 24 euros, mais 12 euros pour les mineurs.

   Écrivez une condition qui range le bon tarif dans la boîte
   tarif ci-dessous, en fonction de age.

   ⚠️ Ici on utilise let : la valeur va justement changer selon
      le cas. C'est exactement l'usage de let vu au projet 6.   */

let tarif = 0;

// TODO: 9 — écrire la condition qui donne à tarif la bonne valeur


/* ── 10 · Annoncer le tarif ───────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Tarif :
      puis         tarif
      puis         le texte  €

   Avec age valant 20, vous devez obtenir :  Tarif : 24 €       */

// TODO: 10 — afficher le tarif dans la console


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. Dans la console, tapez ces trois lignes et comparez :

         "10" < "9"
         10 < 9
         Number("10") < Number("9")

      Pourquoi la première est-elle vraie ? (cours, section 6)

   2. Dans app.js, remplacez le === de l'étape 8 par un seul
      signe = et rechargez. Les trois premières lignes
      s'affichent normalement, PUIS le programme s'arrête net
      sur une erreur rouge — faites défiler pour la voir.
      Elle a un nom précis, et elle est ici votre amie.

      Puis testez ceci dans la console, et comparez :

         let n = 20;
         if (n = 18) { console.log("bloc exécuté"); }

      Cette fois, aucune erreur. Pourquoi ?

   3. Que vaut la condition  if ("0")  ? Et  if ("")  ?
      Testez-les dans la console avec Boolean("0") et Boolean("").
      Le résultat surprend souvent.
   ═══════════════════════════════════════════════════════════════ */
