/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — CORRIGÉ

   Une solution possible. Avec ce format, la vôtre peut différer :
   seuls les critères d'acceptation comptent.
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies) ───────────────────────────────────  */

const catalogue = [
  { titre: "La Horde du Contrevent", pages: 712 },
  { titre: "Dune", pages: 900 },
  { titre: "Fondation", pages: 420 },
  { titre: "Le Nom du vent", pages: 850 },
  { titre: "Les Fourmis", pages: 300 }
];


/* ── 1 · Retirer le message « aucun livre » ───────────────────

   remove() détache l'élément de la page. Il ne le vide pas :
   il le fait disparaître.                                      */

document.querySelector("#vide").remove();


/* ── 2 · La liste à remplir ───────────────────────────────────  */

const liste = document.querySelector("#catalogue");

console.log("Au départ :", liste.children.length, "élément(s)");


/* ── 3 · Construire une ligne par livre ───────────────────────

   Le createElement est DANS la boucle : un tour, un élément
   neuf. Placé avant, il n'en fabriquerait qu'un seul — et comme
   append DÉPLACE au lieu de copier, on n'obtiendrait qu'une
   seule ligne, portant le dernier titre. (cours §4 et §6)

   On assemble de l'intérieur vers l'extérieur, et on n'insère
   dans la page qu'à la fin.                                    */

let volumineux = 0;

for (const livre of catalogue) {

  const li = document.createElement("li");
  li.classList.add("livre");

  const titre = document.createElement("span");
  titre.classList.add("livre__titre");
  titre.textContent = livre.titre;

  const pages = document.createElement("span");
  pages.classList.add("livre__pages");
  pages.textContent = livre.pages + " pages";

  li.append(titre, pages);

  if (livre.pages > 700) {
    li.classList.add("volumineux");
    volumineux = volumineux + 1;
  }

  liste.append(li);
}

console.log("Lignes créées :", liste.children.length);
console.log("Volumineux :", volumineux);


/* ── 4 · Un total, ajouté en fin de liste ─────────────────────

   Une sixième ligne, fabriquée comme les autres mais sans la
   classe .livre : elle ne doit pas ressembler à un livre.      */

let totalPages = 0;

for (const livre of catalogue) {
  totalPages = totalPages + livre.pages;
}

const total = document.createElement("li");
total.textContent = "Total : " + totalPages + " pages";
liste.append(total);

console.log("Total des pages :", totalPages);


/* ── 5 · Vérifier ce qu'on a construit ────────────────────────

   querySelectorAll fonctionne sur des éléments FABRIQUÉS
   exactement comme sur ceux écrits à la main : une fois dans la
   page, rien ne les distingue.                                 */

console.log("Titres en place :", liste.querySelectorAll(".livre__titre").length);


/* ═══════════════════════════════════════════════════════════════
   NOTES

   · Aucune ligne de ce corrigé n'utilise innerHTML. Tout est
     construit avec createElement et append — c'est le §8 du
     cours, et ce n'est pas une préférence de style : innerHTML
     recollerait toute la liste à chaque tour.

   · Le paragraphe #vide est retiré AVANT la boucle. Si on le
     faisait après, il apparaîtrait puis disparaîtrait — sans
     conséquence visible ici, mais l'ordre a une logique.

   · liste.children.length compte les ÉLÉMENTS enfants. Après la
     boucle et le total, il en trouve six : cinq livres plus la
     ligne de total.
   ═══════════════════════════════════════════════════════════════ */
