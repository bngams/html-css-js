/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── Le tableau de départ (fourni) ─────────────────────────────  */

const fruits = ["Pomme", "Banane", "Cerise", "Mangue", "Poire"];


/* ── PARTIE 1 : lire un tableau ──────────────────────────────── */


/* ── 1 · Combien de fruits ? ──────────────────────────────────  */

console.log("Nombre de fruits :", fruits.length);


/* ── 2 · Le troisième fruit ───────────────────────────────────

   Index 2, pas 3 : les cases sont numérotées à partir de zéro. */

console.log("3e fruit :", fruits[2]);


/* ── 3 · Le dernier fruit ─────────────────────────────────────

   length - 1 est TOUJOURS le dernier index. Écrire 4 en dur
   marcherait aujourd'hui, et casserait dès qu'on ajoute un
   fruit — ce qui arrive justement à l'étape 7.                 */

console.log("Dernier :", fruits[fruits.length - 1]);


/* ── 4 · Une case qui n'existe pas ────────────────────────────

   Affiche undefined. Aucune erreur : JavaScript répond « rien »
   et continue. C'est ce qui rend le piège du <= si discret.    */

console.log("Case 5 :", fruits[5]);


/* ── PARTIE 2 : parcourir avec for ───────────────────────────── */


/* ── 5 · Tous les fruits, avec leur numéro ────────────────────

   i part de 0, s'arrête AVANT length. Cinq tours : 0,1,2,3,4. */

for (let i = 0; i < fruits.length; i++) {
  console.log("→", i, fruits[i]);
}


/* ── PARTIE 3 : parcourir avec for…of ────────────────────────── */


/* ── 6 · Tous les fruits, sans compteur ───────────────────────

   Pas d'index, donc pas de piège possible sur les bornes.     */

for (const fruit of fruits) {
  console.log("·", fruit);
}


/* ── PARTIE 4 : modifier le tableau ─────────────────────────── */


/* ── 7 · Ajouter un fruit ─────────────────────────────────────

   Permis malgré const : on modifie le CONTENU de la boîte,
   on ne remplace pas la boîte elle-même.                       */

fruits.push("Kiwi");


/* ── 8 · Vérifier ─────────────────────────────────────────────  */

console.log("Après ajout :", fruits.length);


/* ── 9 · Tout assembler en une phrase ─────────────────────────

   join colle toutes les cases avec le séparateur donné.        */

const listeTexte = fruits.join(" - ");


/* ── 10 · Afficher la phrase ──────────────────────────────────  */

console.log("Liste :", listeTexte);


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. Avec  i <= fruits.length , la boucle fait SIX tours au lieu
      de cinq. Le dernier affiche :

         → 5 undefined

      Il n'y a pas de case 5 : JavaScript répond undefined, sans
      erreur. C'est pourquoi la règle est  i < length .

   2. [10, 9, 2].sort()              → [10, 2, 9]
      [10, 9, 2].sort((a, b) => a-b) → [2, 9, 10]

      sort() compare les valeurs EN TANT QUE TEXTE : "10" vient
      avant "2" comme "Ab" vient avant "B". C'est exactement le
      piège de "10" < "9" du projet 7. La seconde écriture donne
      à sort une règle de comparaison numérique.

   3. fruits = ["Autre chose"]  →  TypeError: Assignment to
      constant variable.

      const interdit de REMPLACER la boîte. push(), lui, ne fait
      qu'ajouter une case dans la boîte existante : le contenu
      change, la boîte reste la même.
   ═══════════════════════════════════════════════════════════════ */
