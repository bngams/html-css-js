/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — CORRIGÉ : UN FORMULAIRE QUI NE RECHARGE PAS

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies, et qui vont GRANDIR) ─────────────── */

const emprunts = [
  { titre: "Dune",              lecteur: "Karim" },
  { titre: "Fondation",         lecteur: "Léa" },
  { titre: "Les Fourmis",       lecteur: "Tomas" }
];


/* ── 1 · Les éléments de la page ────────────────────────────── */

const form     = document.querySelector("#ajout");
const champT   = document.querySelector("#titre");
const champL   = document.querySelector("#lecteur");
const liste    = document.querySelector("#liste");
const compteur = document.querySelector("#compteur");
const message  = document.querySelector("#message");


/* ── 2 · La fonction qui reconstruit la liste ───────────────── */

function afficher() {

  for (const ancien of liste.querySelectorAll("li")) {
    ancien.remove();
  }

  for (const emprunt of emprunts) {

    const li = document.createElement("li");
    li.classList.add("emprunt");

    const titre = document.createElement("span");
    titre.classList.add("emprunt__titre");
    titre.textContent = emprunt.titre;

    const lecteur = document.createElement("span");
    lecteur.classList.add("emprunt__lecteur");
    lecteur.textContent = emprunt.lecteur;

    li.append(titre, lecteur);
    liste.append(li);
  }

  compteur.textContent = emprunts.length + " emprunt(s)";
}


/* ── 3 · Au chargement ──────────────────────────────────────── */

afficher();

console.log("Au départ :", emprunts.length, "emprunt(s)");


/* ── 4 · À l'envoi du formulaire ────────────────────────────── */

form.addEventListener("submit", function (evenement) {

  evenement.preventDefault();

  const titre   = champT.value.trim();
  const lecteur = champL.value.trim();

  if (titre === "" || lecteur === "") {
    message.textContent = "Remplissez les deux champs.";
    message.classList.add("erreur");

    console.log("Refusé : un champ est vide");
    return;
  }

  emprunts.push({ titre: titre, lecteur: lecteur });

  afficher();

  message.textContent = "« " + titre + " » ajouté.";
  message.classList.remove("erreur");

  champT.value = "";
  champL.value = "";

  console.log("Ajouté :", titre, "→", emprunts.length, "emprunt(s)");
});
