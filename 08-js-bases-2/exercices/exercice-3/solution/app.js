/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : créer et lire un objet ──────────────────────── */


/* ── 1 · La fiche d'un livre ──────────────────────────────────

   Pas de virgule après la dernière paire : JavaScript la tolère
   sans erreur, mais JSON l'interdit. Autant prendre l'habitude.  */

const livre = {
  titre: "La Horde du Contrevent",
  auteur: "Damasio",
  pages: 712
};


/* ── 2 · Lire avec le point ───────────────────────────────────  */

console.log("Titre :", livre.titre);


/* ── 3 · Lire avec les crochets ───────────────────────────────

   Strictement équivalent au point. Les crochets deviennent
   indispensables à l'étape 7, quand la clé est une variable.   */

console.log("Auteur :", livre["auteur"]);


/* ── 4 · Une clé qui n'existe pas ─────────────────────────────

   undefined, sans erreur — comme fruits[5] à l'exercice 1.     */

console.log("Éditeur :", livre.editeur);


/* ── PARTIE 2 : modifier l'objet ────────────────────────────── */


/* ── 5 · Ajouter une clé ──────────────────────────────────────

   Permis malgré const : on change le CONTENU de l'objet, on ne
   remplace pas l'objet lui-même.                               */

livre.editeur = "La Volte";


/* ── 6 · Vérifier l'ajout ─────────────────────────────────────  */

console.log("Après ajout :", livre.editeur);


/* ── PARTIE 3 : parcourir ───────────────────────────────────── */


/* ── 7 · Toutes les propriétés ────────────────────────────────

   livre[cle] avec des CROCHETS : le nom de la clé est dans une
   variable. Écrire livre.cle chercherait une propriété nommée
   littéralement « cle », et rendrait undefined.

   Quatre lignes ici : la clé editeur a été ajoutée à l'étape 5. */

for (const cle in livre) {
  console.log("·", cle, "=", livre[cle]);
}


/* ── PARTIE 4 : un tableau d'objets ─────────────────────────── */


/* ── Le catalogue (fourni) ────────────────────────────────────  */

const catalogue = [
  { titre: "Dune", pages: 900 },
  { titre: "La Horde", pages: 712 },
  { titre: "Fondation", pages: 420 }
];


/* ── 8 · Le premier titre ─────────────────────────────────────

   Un index de tableau, puis un accès par point : deux notions
   déjà connues, combinées.                                     */

console.log("1er du catalogue :", catalogue[0].titre);


/* ── 9 · Tous les titres ──────────────────────────────────────  */

for (const livreDuCatalogue of catalogue) {
  console.log("→", livreDuCatalogue.titre);
}


/* ── 10 · Le total des pages ──────────────────────────────────

   On part de 0, et on ajoute au fil de la boucle. C'est le
   « accumulateur » : un motif que vous réutiliserez souvent.   */

let totalPages = 0;

for (const livreDuCatalogue of catalogue) {
  totalPages = totalPages + livreDuCatalogue.pages;
}


/* ── 11 · Afficher le total ───────────────────────────────────  */

console.log("Total des pages :", totalPages);


/* ── PARTIE 5 : JSON ────────────────────────────────────────── */


/* ── 12 · Transformer en texte ────────────────────────────────  */

const livreTexte = JSON.stringify(livre);


/* ── 13 · Observer le résultat et son type ────────────────────

   Le résultat ressemble à l'objet, mais typeof répond "string".
   On ne peut donc plus écrire livreTexte.titre dessus.

   Remarquez aussi que les clés y sont entre guillemets DOUBLES :
   c'est la règle de JSON, plus stricte que celle de JavaScript. */

console.log("JSON :", livreTexte, "· type :", typeof livreTexte);


/* ── 14 · Revenir à un objet ──────────────────────────────────  */

const livreRetrouve = JSON.parse(livreTexte);


/* ── 15 · Vérifier l'aller-retour ─────────────────────────────

   Le type redevient "object", et le point refonctionne.        */

console.log("Retrouvé :", livreRetrouve.titre, "· type :", typeof livreRetrouve);


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. livre.horaires        → undefined      (aucune erreur)
      livre.horaires.lundi  → TypeError: Cannot read properties
                              of undefined (reading 'lundi')

      CHERCHER une clé absente est permis : on obtient undefined.
      Mais aller chercher DEDANS ne l'est pas : on demande une
      propriété à « rien ».

      C'est le mécanisme exact du projet 7, quand querySelector
      ne trouvait pas d'élément. Quand vous voyez ce message,
      remontez d'un cran : c'est le niveau AU-DESSUS qui manque.

   2. livreTexte.titre → undefined

      livreTexte est une CHAÎNE, pas un objet. Elle contient les
      caractères « titre », mais une chaîne n'a pas de propriété
      de ce nom. L'apparence n'est pas le type — comme "25" et
      25 au projet 6.

   3. JSON.stringify({ a: 1, saluer: function(){} })
      → {"a":1}

      Les fonctions sont PERDUES, sans le moindre avertissement.
      JSON ne transporte que des données : textes, nombres,
      booléens, tableaux, objets — jamais du comportement.
   ═══════════════════════════════════════════════════════════════ */
