/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — CORRIGÉ

   Une solution possible. Avec ce format, la vôtre peut différer :
   seuls les critères d'acceptation comptent.
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Le titre de la page ──────────────────────────────────

   .textContent en ÉCRITURE : à gauche du =, il reçoit.          */

document.querySelector("#titre-page").textContent =
  "Tableau de bord — mise à jour";


/* ── 2 · Le bandeau d'état ────────────────────────────────────

   Deux gestes distincts, et c'est volontaire :
     · le TEXTE change avec .textContent
     · l'APPARENCE change avec .classList

   La classe .ouvert existe déjà dans le CSS de la page. On ne
   fabrique pas une couleur ici : on pose une classe qui en
   porte une.                                                   */

const bandeau = document.querySelector("#bandeau");

bandeau.textContent = "Médiathèque ouverte";
bandeau.classList.add("ouvert");

console.log("Bandeau :", bandeau.className);


/* ── 3 · Les livres volumineux ────────────────────────────────

   On parcourt, on lit le texte du nombre de pages, on convertit,
   on compare.

   Number("712 pages") rendrait NaN : le texte n'est pas QUE un
   nombre. On le coupe donc au premier espace avec .split(" "),
   et on convertit sa première case — cours §6.                  */

let volumineux = 0;

for (const livre of document.querySelectorAll(".livre")) {
  const texte = livre.querySelector(".livre__pages").textContent;
  const pages = Number(texte.split(" ")[0]);

  if (pages > 700) {
    livre.classList.add("volumineux");
    volumineux = volumineux + 1;
  }
}

console.log("Volumineux :", volumineux);


/* ── 4 · Vérifier une classe ──────────────────────────────────

   contains rend true ou false — pratique pour décider sans
   toucher à rien.                                              */

const premier = document.querySelector(".livre");

console.log("Le premier est-il disponible ?",
            premier.classList.contains("disponible"));


/* ── 5 · Retirer une classe ───────────────────────────────────

   Le dernier livre était emprunté : il revient en rayon.
   Deux gestes : on retire une classe, on en pose une autre.    */

const livres = document.querySelectorAll(".livre");
const dernier = livres[livres.length - 1];

dernier.classList.remove("emprunte");
dernier.classList.add("disponible");

console.log("Dernier :", dernier.className);


/* ── 6 · toggle, et ce qu'il rend ─────────────────────────────

   toggle pose la classe si elle est absente, la retire sinon —
   et RETOURNE true dans le premier cas, false dans le second.  */

const etat1 = bandeau.classList.toggle("ferme");
const etat2 = bandeau.classList.toggle("ferme");

console.log("toggle 1 :", etat1, "· toggle 2 :", etat2);


/* ═══════════════════════════════════════════════════════════════
   NOTES

   · Aucune ligne de ce corrigé n'utilise .style. Tout passe par
     des classes déjà écrites dans le CSS de la page. C'est la
     règle du cours §5 : on change la classe, pas le style.

   · Si l'on avait écrit bandeau.style.backgroundColor = "green",
     la classe .ouvert serait devenue SANS EFFET — le style en
     ligne l'emporte — et il aurait fallu le vider explicitement
     pour revenir en arrière.

   · .textContent et .classList sont indépendants : changer le
     texte ne touche pas aux classes, et inversement.
   ═══════════════════════════════════════════════════════════════ */
