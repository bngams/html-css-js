/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   🎓 DERNIER EXERCICE DU PROJET 8 — et du jour 2.

   ── LE GESTE ─────────────────────────────────────────────────

   A. « écrire … » → effacez la ligne du TODO, tapez votre code.
   B. « remplacer la valeur ci-dessous … » → écrivez APRÈS le
      signe = , sur la ligne elle-même, puis effacez le TODO.

      ⚠️ Une instruction séparée AU-DESSUS d'une ligne
         « const … = … ; » donne une erreur rouge
         « Cannot access … before initialization ».

   Enregistrez (Ctrl+S), rechargez (F5). Tout s'affiche dans la
   CONSOLE (F12).

   Avant de terminer : Ctrl+F sur « TODO », aucun résultat.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : le moule ─────────────────────────────────────── */


/* ── 1 · La classe Rectangle ──────────────────────────────────

   La coquille de la classe vous est donnée ci-dessous, avec
   quatre emplacements marqués. Complétez le constructor : il
   reçoit largeur et hauteur, et les range dans l'objet.

   ⚠️ N'oubliez pas this. devant chaque propriété : sans lui,
      la valeur reçue n'est rangée nulle part. (cours §5)

   ⚠️ LES ÉTAPES 4, 6 ET 8 S'ÉCRIVENT ICI AUSSI, aux endroits
      marqués — à l'INTÉRIEUR des accolades. Une méthode écrite
      en dehors provoque une SyntaxError qui arrête TOUT le
      fichier : même les lignes déjà réussies disparaissent.    */

class Rectangle {

  // TODO: 1 — écrire le constructor ici

  // ← emplacement de l'étape 4 : calculAire()

  // ← emplacement de l'étape 6 : calculPerimetre()

  // ← emplacement de l'étape 8 : decrire()

}


/* ── 2 · Fabriquer un rectangle ───────────────────────────────

   Rangez dans premier un Rectangle de 10 sur 5.

   ⚠️ Le mot-clé qui fabrique est indispensable. (cours §3)    */

// TODO: 2 — remplacer la valeur ci-dessous par un Rectangle 10 × 5
const premier = null;


/* ── 3 · Lire ses propriétés ──────────────────────────────────

   Affichez, en une seule instruction :
      le texte  Premier :  puis sa largeur
      puis le texte  ×  puis sa hauteur                         */

// TODO: 3 — afficher les dimensions du premier rectangle


/* ── PARTIE 2 : les savoir-faire ────────────────────────────── */


/* ── 4 · La méthode calculAire ────────────────────────────────

   Ajoutez à la classe Rectangle une méthode calculAire() qui
   RENVOIE la largeur multipliée par la hauteur.

   ⚠️ Pas de mot function devant, pas de virgule après.
   ⚠️ this. est obligatoire pour lire les propriétés.          */

// TODO: 4 — écrire calculAire() DANS la classe, à l'emplacement
//           marqué « étape 4 » (remontez tout en haut du fichier)


/* ── 5 · L'utiliser ───────────────────────────────────────────

   Affichez : le texte  Aire :  puis le résultat de la méthode
   appelée sur premier.

   Vous devez obtenir 50.                                       */

// TODO: 5 — afficher l'aire du premier rectangle


/* ── 6 · La méthode calculPerimetre ───────────────────────────

   Ajoutez une deuxième méthode calculPerimetre() qui renvoie
   2 × (largeur + hauteur).                                     */

// TODO: 6 — écrire calculPerimetre() DANS la classe, à
//           l'emplacement marqué « étape 6 »


/* ── 7 · L'utiliser ───────────────────────────────────────────

   Affichez : le texte  Périmètre :  puis le résultat.

   Vous devez obtenir 30.                                       */

// TODO: 7 — afficher le périmètre du premier rectangle


/* ── 8 · Une méthode qui en appelle une autre ─────────────────

   Ajoutez une méthode decrire() qui RENVOIE un texte de la
   forme :

      Rectangle 10×5, aire 50

   Assemblez-le avec les propriétés ET un appel à calculAire().

   ⚠️ Pour appeler une méthode depuis une autre : this.       */

// TODO: 8 — écrire decrire() DANS la classe, à l'emplacement
//           marqué « étape 8 »


/* ── 9 · L'utiliser ───────────────────────────────────────────

   Affichez : le texte  Description :  puis le résultat.        */

// TODO: 9 — afficher la description du premier rectangle


/* ── PARTIE 3 : plusieurs objets sur le même moule ──────────── */


/* ── 10 · Trois formes d'un coup ──────────────────────────────

   Rangez dans formes un TABLEAU de trois Rectangle :
   2 × 3, puis 4 × 5, puis 6 × 7.                               */

// TODO: 10 — remplacer la valeur ci-dessous par un tableau de trois Rectangle
const formes = [];


/* ── 11 · Décrire chacune ─────────────────────────────────────

   Avec une boucle for…of, affichez une ligne par forme :
      le texte  ·  puis sa description                          */

// TODO: 11 — parcourir le tableau et décrire chaque forme


/* ── 12 · La somme des aires ──────────────────────────────────

   Rangez dans totalAires la somme des aires des trois formes,
   calculée avec une boucle.

   Même motif qu'à l'exercice 3 : partir de 0, ajouter au fil.  */

let totalAires = 0;

// TODO: 12 — calculer la somme des aires avec une boucle


/* ── 13 · L'afficher ──────────────────────────────────────────

   Affichez : le texte  Total des aires :  puis totalAires      */

// TODO: 13 — afficher le total des aires


/* ── PARTIE 4 : ce que JSON ne sait pas transporter ─────────── */


/* ── 14 · Transformer en JSON ─────────────────────────────────

   Affichez : le texte  En JSON :  puis premier transformé en
   texte JSON, avec l'instruction de l'exercice 3.

   Regardez bien : que manque-t-il ?                            */

// TODO: 14 — afficher le premier rectangle en JSON


/* ═══════════════════════════════════════════════════════════════
   BONUS

   1. Dans la console, tapez :

         Rectangle(10, 5)

      sans le mot-clé qui fabrique. Lisez l'erreur : elle dit
      exactement quoi faire. (cours §3)

   2. Retirez un  this.  dans calculAire(), rechargez, et lisez
      l'erreur. Que cherchait JavaScript ? (cours §5)
      Remettez-le ensuite.

   3. Dans la console :

         const copie = JSON.parse(JSON.stringify(premier));
         copie.largeur
         copie.calculAire()

      La première ligne fonctionne, la seconde non. Pourquoi ?
      (cours §8)
   ═══════════════════════════════════════════════════════════════ */
