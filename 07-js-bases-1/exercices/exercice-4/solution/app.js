/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : les réglages du jeu ──────────────────────────── */


/* ── 1 · Les bornes ───────────────────────────────────────────

   En majuscules par convention : ce sont des réglages fixes.
   Les regrouper en haut permet de changer le jeu en une ligne. */

const MINIMUM = 1;
const MAXIMUM = 10;


/* ── PARTIE 2 : tirer le nombre secret ───────────────────────── */


/* ── 2 · La fonction de tirage ────────────────────────────────

   Math.random() donne un nombre sous 1, jamais 1 exactement.
   × MAXIMUM → sous 10.  Math.floor → 0 à 9.  + MINIMUM → 1 à 10. */

function tirerSecret() {
  return Math.floor(Math.random() * MAXIMUM) + MINIMUM;
}

/*  ⚠️ Cette écriture suppose MINIMUM = 1.

    Pour un intervalle quelconque — 5 à 10, par exemple — il
    faudrait :

       Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MINIMUM

    Avec MINIMUM = 5 et MAXIMUM = 10, la version ci-dessus
    tirerait entre 5 et 14 : des secrets impossibles à deviner,
    et aucune erreur pour vous prévenir.

    Vous saurez écrire la version générale sans peine — ce n'est
    simplement pas l'objet de cet exercice.                     */


/* ── 3 · Tirer le secret ──────────────────────────────────────  */

const secret = tirerSecret();


/* ── 4 · Tricher, pour pouvoir tester ─────────────────────────

   Indispensable pendant le développement : sans cette ligne,
   impossible de vérifier les quatre cas. On la retire avant de
   livrer le jeu à un vrai joueur.                              */

console.log("[triche] le secret est :", secret);


/* ── PARTIE 3 : demander et convertir ────────────────────────── */


/* ── 5 · Poser la question ────────────────────────────────────  */

const saisie = prompt("Devinez un nombre entre 1 et 10");


/* ── 6 · Convertir ────────────────────────────────────────────

   LE point critique du jeu. prompt rend du TEXTE :
   sans Number(), la comparaison de l'étape 8 serait fausse à
   tous les coups, et le joueur perdrait même en trouvant.      */

const proposition = Number(saisie);


/* ── 7 · Vérifier ce qu'on a reçu ─────────────────────────────

   Ce que montre cette ligne selon l'action du joueur :

      tape 7        → saisie : "7"    proposition : 7
      tape abc      → saisie : "abc"  proposition : NaN
      valide vide   → saisie : ""     proposition : 0
      annule        → saisie : null   proposition : 0            */

console.log("saisie :", saisie, "→ proposition :", proposition);


/* ── PARTIE 4 : décider ──────────────────────────────────────── */


/* ── 8 · La fonction de réponse ───────────────────────────────

   L'ordre est essentiel. Le test isNaN vient en PREMIER :
   placé plus bas, il ne serait jamais atteint, car NaN n'est
   égal à rien — pas même à lui-même — et toutes les
   comparaisons le concernant sont fausses.                     */

function reponse(proposition) {
  if (isNaN(proposition)) {
    return "Ce n'est pas un nombre.";
  } else if (proposition === secret) {
    return "Gagné !";
  } else if (proposition < secret) {
    return "Trop petit.";
  } else {
    return "Trop grand.";
  }
}


/* ── 9 · Annoncer le résultat au joueur ───────────────────────  */

alert(reponse(proposition));


/* ── 10 · Et dans la console ──────────────────────────────────  */

console.log("Proposition :", proposition, "· Secret :", secret,
            "· Verdict :", reponse(proposition));


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. Les cinq cas, avec secret = 7 par exemple :

         7      → "Gagné !"
         3      → "Trop petit."
         9      → "Trop grand."
         abc    → "Ce n'est pas un nombre."
         Annuler → prompt rend null, Number(null) vaut 0,
                   donc le jeu répond "Trop petit."

      L'annulation n'est donc PAS traitée comme une absence de
      réponse : elle devient un 0. C'est un défaut connu de ce
      jeu — le corriger proprement demande un test sur null,
      que vous saurez écrire après le projet 8.

   2. "10" > "9"          → false
      Number("10") > 9    → true

      Deux TEXTES se comparent caractère par caractère, comme
      dans un dictionnaire : "1" vient avant "9", et on s'arrête
      là. La longueur du nombre n'entre pas en jeu. Convertir
      règle le problème.

   3. Compter les essais suppose de pouvoir en faire plusieurs,
      donc une boucle : c'est le projet 8.
   ═══════════════════════════════════════════════════════════════ */
