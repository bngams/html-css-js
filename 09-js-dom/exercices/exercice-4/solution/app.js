/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — CORRIGÉ : UNE PAGE QUI SE CONSTRUIT SEULE

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies) ─────────────────────────────────── */

const emprunts = [
  { titre: "La Horde du Contrevent", lecteur: "Amina",  jours: 3  },
  { titre: "Dune",                   lecteur: "Karim",  jours: 21 },
  { titre: "Fondation",              lecteur: "Léa",    jours: 14 },
  { titre: "Le Nom du vent",         lecteur: "Amina",  jours: 45 },
  { titre: "Les Fourmis",            lecteur: "Tomas",  jours: 8  },
  { titre: "Chroniques martiennes",  lecteur: "Léa",    jours: 30 }
];


/* ── 1 · Le ménage : on vide avant de reconstruire ──────────── */

const liste = document.querySelector("#emprunts");

for (const ancien of liste.querySelectorAll("li")) {
  ancien.remove();
}

console.log("Après le ménage :", liste.children.length, "élément(s)");


/* ── 2 · La construction, un emprunt par ligne ──────────────── */

let enRetard = 0;

for (const emprunt of emprunts) {

  const li = document.createElement("li");
  li.classList.add("emprunt");

  const titre = document.createElement("span");
  titre.classList.add("emprunt__titre");
  titre.textContent = emprunt.titre;

  const lecteur = document.createElement("span");
  lecteur.classList.add("emprunt__lecteur");
  lecteur.textContent = emprunt.lecteur;

  const duree = document.createElement("span");
  duree.classList.add("emprunt__jours");
  duree.textContent = emprunt.jours + " jours";

  li.append(titre, lecteur, duree);

  if (emprunt.jours > 28) {
    li.classList.add("retard");
    enRetard = enRetard + 1;
  }

  liste.append(li);
}

console.log("Lignes construites :", liste.children.length);
console.log("En retard :", enRetard);


/* ── 3 · Relire la page qu'on vient d'écrire ────────────────── */

let totalJours = 0;

for (const ligne of liste.querySelectorAll(".emprunt__jours")) {
  totalJours = totalJours + Number(ligne.textContent.split(" ")[0]);
}

console.log("Total des jours :", totalJours);

const moyenne = Math.round(totalJours / emprunts.length);
console.log("Durée moyenne :", moyenne, "jours");


/* ── 4 · Le bandeau de synthèse ─────────────────────────────── */

const bandeau = document.querySelector("#bilan");
bandeau.textContent = emprunts.length + " emprunts, dont " + enRetard + " en retard";

if (enRetard > 0) {
  bandeau.classList.add("alerte");
}

console.log("Bandeau :", bandeau.className);
