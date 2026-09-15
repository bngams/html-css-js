/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : votre première décision ───────────────────────── */


/* ── 1 · L'âge du visiteur ────────────────────────────────────

   La valeur ne change pas dans le programme → const.          */

const age = 20;


/* ── 2 · Majeur ou mineur ? ───────────────────────────────────

   Un seul des deux blocs s'exécute, jamais les deux.          */

if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}


/* ── 3 · Vérifier l'autre cas ─────────────────────────────────

   Étape à FAIRE, pas à écrire : avec age = 15, la console
   affiche Mineur. On remet ensuite 20.                         */


/* ── PARTIE 2 : le piège de la comparaison ───────────────────── */


/* ── 4 · Une saisie qui ressemble à un nombre ─────────────────

   Les guillemets sont essentiels : c'est du TEXTE, exactement
   ce que renvoie prompt().                                     */

const saisie = "20";


/* ── 5 · Constater le piège ───────────────────────────────────

   false — car === compare AUSSI le type, et "20" est du texte
   tandis que 20 est un nombre.                                 */

console.log("saisie === 20 :", saisie === 20);


/* ── 6 · Comparer avec l'autre opérateur ──────────────────────

   true — car == convertit d'abord et ferme les yeux sur le
   type. C'est précisément ce qu'on veut éviter.                */

console.log("saisie == 20 :", saisie == 20);


/* ── 7 · La bonne façon de faire ──────────────────────────────

   Number() transforme le texte en vrai nombre.                 */

const saisieNombre = Number(saisie);


/* ── 8 · Vérifier la correction ───────────────────────────────

   true — et cette fois sans rien cacher : les deux valeurs
   sont bien des nombres.                                       */

console.log("saisieNombre === 20 :", saisieNombre === 20);


/* ── PARTIE 3 : une décision utile ───────────────────────────── */


/* ── 9 · Le tarif de la médiathèque ───────────────────────────

   let, car la valeur change selon le cas.                      */

let tarif = 0;

if (age >= 18) {
  tarif = 24;
} else {
  tarif = 12;
}


/* ── 10 · Annoncer le tarif ───────────────────────────────────  */

console.log("Tarif :", tarif, "€");


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. "10" < "9"                 → true
      10 < 9                     → false
      Number("10") < Number("9") → false

      Deux TEXTES se comparent caractère par caractère, comme
      dans un dictionnaire : "1" vient avant "9", et on s'arrête
      là. La longueur du nombre n'entre pas en jeu.

   2. Remplacer === par = à l'étape 8 donne :

         TypeError: Assignment to constant variable.

      Car saisieNombre a été déclaré avec const : on ne peut
      pas ranger une valeur dedans. L'erreur vous sauve ici.

      ⚠️ Mais elle n'apparaît PAS toujours. Testez dans la
      console, avec une boîte déclarée en let :

         let age = 20;
         if (age = 18) { console.log("bloc exécuté"); }

      Aucune erreur : le bloc s'exécute, et age vaut désormais
      18. La condition est vraie parce que 18 est une valeur
      "vraie". C'est exactement le genre de bogue silencieux
      que === vous évite.

   3. Boolean("0")  → true    ⚠️ un texte non vide est "vrai"
      Boolean("")   → false   un texte vide est "faux"

      Le contenu du texte n'a aucune importance : seule compte
      sa présence. "false" est vrai lui aussi.
   ═══════════════════════════════════════════════════════════════ */
