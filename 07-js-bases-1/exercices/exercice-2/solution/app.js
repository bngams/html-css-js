/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés
   ou les noms de paramètres : ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : lire une fonction, en écrire une ──────────────── */


/* ── La fonction donnée, qui sert de modèle ─────────────────── */

function addition(a, b) {
  return a + b;
}


/* ── 1 · Appeler la fonction donnée ─────────────────────────── */

console.log("5 + 3 =", addition(5, 3));


/* ── 2 · Écrire la soustraction ───────────────────────────────

   Exactement le même moule : function, paramètres, return.     */

function soustraction(a, b) {
  return a - b;
}


/* ── 3 · L'appeler ──────────────────────────────────────────── */

console.log("5 - 3 =", soustraction(5, 3));


/* ── PARTIE 2 : le piège du return oublié ────────────────────── */


/* ── La fonction volontairement INCOMPLÈTE ────────────────────

   Son nom le dit : elle multiplie, mais ne REND rien.
   a * b est bien CALCULÉ… puis jeté, faute de return.
   Elle n'est pas cassée : elle calcule vraiment.                */

function multiplierSansRendre(a, b) {
  a * b;
}


/* ── 4 · Constater le problème ────────────────────────────────

   Affiche undefined, et non 15. La fonction a travaillé pour
   rien : elle n'a rien renvoyé.                                */

console.log("multiplierSansRendre(5, 3) =", multiplierSansRendre(5, 3));


/* ── 5 · Écrire la version correcte ─────────────────────────── */

function multiplication(a, b) {
  return a * b;
}


/* ── 6 · Vérifier ───────────────────────────────────────────── */

console.log("5 × 3 =", multiplication(5, 3));


/* ── PARTIE 3 : une fonction vraiment utile ──────────────────── */


/* ── 7 · Le calcul de TVA ─────────────────────────────────────

   Un seul paramètre suffit : le taux est fixe.                 */

function prixTTC(prixHT) {
  return prixHT * 1.2;
}


/* ── 8 · Trois prix, une seule fonction ───────────────────────

   Le calcul n'est écrit qu'une fois. Si le taux change un jour,
   une seule ligne est à modifier — c'est tout l'intérêt.

   Note : 24 * 1.2 donne 28.799999999999997, à cause du stockage
   binaire des décimaux vu au projet 6. Mais 2 * 1.2 donne
   exactement 2.4, et 15 * 1.2 exactement 18 : le défaut ne
   touche que certains nombres, de façon imprévisible.
   On affiche les valeurs brutes ici ; .toFixed(2) servirait
   dans une vraie interface.                                    */

console.log("Abonnement :", prixTTC(24));
console.log("Retard :", prixTTC(2));
console.log("Perte :", prixTTC(15));


/* ── 9 · Réutiliser le résultat dans un calcul ────────────────

   Possible uniquement parce que prixTTC RENVOIE une valeur.
   Avec un console.log à la place du return, on obtiendrait NaN. */

const totalDeuxAbos = prixTTC(24) * 2;


/* ── 10 · Annoncer le total ─────────────────────────────────── */

console.log("Deux abonnements :", totalDeuxAbos, "€");


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. addition(5)          → NaN
         b n'a rien reçu : il vaut undefined, et 5 + undefined
         ne donne pas un nombre.

      addition(5, 3, 99)   → 8
         L'argument en trop est ignoré, SANS erreur. La fonction
         n'a que deux paramètres, le troisième n'est lu par
         personne.

      addition("5", 3)     → "53"
         Le piège du projet 6 : dès qu'un côté est du texte, le
         + assemble au lieu d'additionner. Une fonction ne vous
         en protège pas — convertissez AVANT d'appeler.

   2. addition          → affiche le code source de la fonction
      typeof addition   → "function"

         Sans parenthèses, on DÉSIGNE la fonction au lieu de
         l'EXÉCUTER. Ce sont les parenthèses qui déclenchent.

   3. La ligne après return ne s'affiche jamais : return sort
      immédiatement de la fonction. Tout ce qui suit dans le
      même bloc est du code mort.
   ═══════════════════════════════════════════════════════════════ */
