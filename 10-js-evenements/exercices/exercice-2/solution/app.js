/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — CORRIGÉ : ÉCOUTER PENDANT QU'ON TAPE

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies) ─────────────────────────────────── */

const livres = [
  { titre: "La Horde du Contrevent", auteur: "Alain Damasio" },
  { titre: "Dune",                   auteur: "Frank Herbert" },
  { titre: "Fondation",              auteur: "Isaac Asimov" },
  { titre: "Le Nom du vent",         auteur: "Patrick Rothfuss" },
  { titre: "Les Fourmis",            auteur: "Bernard Werber" },
  { titre: "Chroniques martiennes",  auteur: "Ray Bradbury" }
];


/* ── 1 · Les éléments de la page ────────────────────────────── */

const champ    = document.querySelector("#recherche");
const liste    = document.querySelector("#resultats");
const compteur = document.querySelector("#compteur");


/* ── 2 · Une fonction qui reconstruit la liste ──────────────── */

function afficher(filtre) {

  // Le ménage d'abord (projet 9, exercice 4)
  for (const ancien of liste.querySelectorAll("li")) {
    ancien.remove();
  }

  let trouves = 0;

  for (const livre of livres) {

    const titre = livre.titre.toLowerCase();

    if (titre.includes(filtre)) {

      const li = document.createElement("li");
      li.classList.add("livre");

      const nom = document.createElement("span");
      nom.classList.add("livre__titre");
      nom.textContent = livre.titre;

      const auteur = document.createElement("span");
      auteur.classList.add("livre__auteur");
      auteur.textContent = livre.auteur;

      li.append(nom, auteur);
      liste.append(li);

      trouves = trouves + 1;
    }
  }

  compteur.textContent = trouves + " livre(s) sur " + livres.length;

  if (trouves === 0) {
    compteur.classList.add("vide");
  } else {
    compteur.classList.remove("vide");
  }

  return trouves;
}


/* ── 3 · Au chargement : tout afficher ──────────────────────── */

console.log("Au départ :", afficher(""), "livre(s)");


/* ── 4 · À chaque frappe : refiltrer ────────────────────────── */

champ.addEventListener("input", function () {

  const filtre = champ.value.toLowerCase();

  const trouves = afficher(filtre);

  console.log("Recherche :", champ.value, "→", trouves, "résultat(s)");
});
