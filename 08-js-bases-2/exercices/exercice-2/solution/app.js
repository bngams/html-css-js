/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : la mécanique du while ────────────────────────── */


/* ── 1 · Un compte à rebours ──────────────────────────────────

   compte-- fait DIMINUER le compteur : c'est lui qui finit par
   rendre la condition fausse. Sans cette ligne, la boucle
   tournerait pour toujours.                                    */

let compte = 3;

while (compte > 0) {
  console.log("Décollage dans", compte);
  compte--;
}


/* ── 2 · L'annonce finale ─────────────────────────────────────

   Hors de la boucle : ne s'affiche qu'une fois, à la fin.      */

console.log("Décollage !");


/* ── PARTIE 2 : break et continue ────────────────────────────── */


/* ── 3 · S'arrêter en chemin ──────────────────────────────────

   break quitte la boucle entièrement : rien après 3.           */

for (let i = 0; i < 10; i++) {
  if (i === 4) break;
  console.log("stop:", i);
}


/* ── 4 · Sauter un tour ───────────────────────────────────────

   continue saute AU TOUR SUIVANT : le 2 manque, mais la boucle
   continue jusqu'à 4.                                          */

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("saut:", i);
}


/* ── PARTIE 3 : le jeu qui redemande enfin ──────────────────── */


/* ── Les réglages (fournis) ───────────────────────────────────  */

const MAXIMUM = 10;
const secret = Math.floor(Math.random() * MAXIMUM) + 1;

console.log("[triche] le secret est :", secret);


/* ── 5 · Les deux témoins ─────────────────────────────────────

   let, car les deux vont changer pendant la partie.            */

let trouve = false;
let essais = 0;


/* ── 6 · La boucle du jeu ─────────────────────────────────────

   L'ordre des instructions compte :

   · le test de l'annulation vient AVANT la conversion, car
     Number(null) vaut 0 — une fois converti, l'abandon devient
     indiscernable d'une proposition de zéro, et le joueur se
     retrouve prisonnier de la boîte de dialogue ;

   · le test isNaN vient avant les comparaisons, comme au
     projet 7 : NaN n'est égal à rien, pas même à lui-même.     */

while (trouve === false) {
  const saisie = prompt("Votre proposition ?");

  if (saisie === null) {
    break;
  }

  essais++;

  const proposition = Number(saisie);

  if (isNaN(proposition)) {
    alert("Ce n'est pas un nombre.");
  } else if (proposition === secret) {
    trouve = true;
  } else if (proposition < secret) {
    alert("Trop petit.");
  } else {
    alert("Trop grand.");
  }
}


/* ── 7 · Le bilan ─────────────────────────────────────────────  */

console.log("Partie terminée. Essais :", essais);


/* ── 8 · Féliciter, ou pas ────────────────────────────────────

   L'écriture  condition ? valeurACoup : valeurSinon  est un
   if…else en une ligne. Ici elle règle l'accord du pluriel.    */

if (trouve === true) {
  alert("Gagné en " + essais + (essais > 1 ? " essais" : " essai") + " !");
} else {
  alert("Partie abandonnée.");
}


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. Sans  compte-- , la condition  compte > 0  reste vraie
      pour toujours : l'onglet se fige. C'est LE symptôme de la
      boucle infinie. La parade est toujours la même question :
      « qu'est-ce qui, dans le bloc, va rendre la condition
      fausse ? »

   2. Sans le test  saisie === null , annuler ne sort pas du
      jeu : prompt rend null, Number(null) vaut 0, ce n'est pas
      le secret, donc la boucle redemande… et la boîte revient
      indéfiniment. Le joueur ne peut plus quitter la page
      autrement qu'en fermant l'onglet.

      C'est pourquoi le test porte sur saisie (le texte brut) et
      non sur proposition (déjà convertie).

   3. Avec do…while, aucune différence visible ici : la première
      question est posée dans les deux cas, puisque trouve vaut
      false au départ et que la condition est donc vraie dès le
      premier passage.

      La différence n'apparaîtrait que si la condition était
      FAUSSE d'entrée : while ne poserait aucune question,
      do…while en poserait une quand même.
   ═══════════════════════════════════════════════════════════════ */
