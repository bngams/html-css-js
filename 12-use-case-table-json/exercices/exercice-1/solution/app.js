/* ═══════════════════════════════════════════════════════════════
   PROJET 12 — CORRIGÉ : LE REGISTRE DES EMPRUNTS

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données de départ ──────────────────────────────────── */

const emprunts = [
  { livre: "Dune",                  lecteur: "Karim", jours: 21 },
  { livre: "Fondation",             lecteur: "Léa",   jours: 5  },
  { livre: "Les Fourmis",           lecteur: "Tomas", jours: 14 },
  { livre: "Le Nom du vent",        lecteur: "Amina", jours: -3 },
  { livre: "Chroniques martiennes", lecteur: "Léa",   jours: -12 }
];


/* ── 1 · Les éléments de la page ────────────────────────────── */

const corps    = document.querySelector("tbody");
const form     = document.querySelector("#form-emprunt");
const champL   = document.querySelector("#livre");
const champLec = document.querySelector("#lecteur");
const champJ   = document.querySelector("#jours");
const message  = document.querySelector("#message");
const resume   = document.querySelector("#resume");


/* ── 2 · Le statut découle des jours restants ───────────────── */

function statutDe(jours) {
  if (jours < 0)  return { texte: "En retard",  classe: "statut--retard" };
  if (jours <= 7) return { texte: "Bientôt dû", classe: "statut--bientot" };
  return { texte: "En cours", classe: "statut--ok" };
}


/* ── 3 · Fabriquer une ligne du tableau ─────────────────────── */

function ajouterLigne(emprunt) {

  const tr = document.createElement("tr");

  const tdLivre = document.createElement("td");
  tdLivre.textContent = emprunt.livre;

  const tdLecteur = document.createElement("td");
  tdLecteur.textContent = emprunt.lecteur;

  const tdJours = document.createElement("td");
  tdJours.textContent = emprunt.jours;

  const tdStatut = document.createElement("td");
  const badge = document.createElement("span");
  const statut = statutDe(emprunt.jours);
  badge.textContent = statut.texte;
  badge.classList.add("statut");
  badge.classList.add(statut.classe);
  tdStatut.append(badge);

  tr.append(tdLivre, tdLecteur, tdJours, tdStatut);
  corps.append(tr);
}


/* ── 4 · Tout redessiner depuis les données ─────────────────── */

function afficher() {

  for (const ancienne of corps.querySelectorAll("tr")) {
    ancienne.remove();
  }

  for (const emprunt of emprunts) {
    ajouterLigne(emprunt);
  }

  let enRetard = 0;
  for (const emprunt of emprunts) {
    if (emprunt.jours < 0) {
      enRetard = enRetard + 1;
    }
  }

  resume.textContent = emprunts.length + " emprunt(s) · " + enRetard + " en retard";

  console.log("Tableau :", corps.children.length, "ligne(s) ·", enRetard, "en retard");
}


/* ── 5 · Au chargement ──────────────────────────────────────── */

afficher();


/* ── 6 · Le formulaire ajoute un emprunt ────────────────────── */

form.addEventListener("submit", function (evenement) {

  evenement.preventDefault();

  const livre   = champL.value.trim();
  const lecteur = champLec.value.trim();
  const saisie  = champJ.value.trim();

  if (livre === "" || lecteur === "" || saisie === "") {
    message.textContent = "Les trois champs sont obligatoires.";
    message.classList.add("erreur");
    console.log("Refusé : un champ est vide");
    return;
  }

  const jours = Number(saisie);

  if (isNaN(jours)) {
    message.textContent = "Les jours restants doivent être un nombre.";
    message.classList.add("erreur");
    console.log("Refusé : jours non numérique");
    return;
  }

  emprunts.push({ livre: livre, lecteur: lecteur, jours: jours });

  afficher();

  message.textContent = "« " + livre + " » ajouté.";
  message.classList.remove("erreur");

  champL.value = "";
  champLec.value = "";
  champJ.value = "";

  console.log("Ajouté :", livre, "→", emprunts.length, "emprunt(s)");
});
