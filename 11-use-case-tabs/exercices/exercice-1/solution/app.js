/* ═══════════════════════════════════════════════════════════════
   PROJET 11 — CORRIGÉ : LE SYSTÈME D'ONGLETS

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Les deux collections ───────────────────────────────── */

const onglets  = document.querySelectorAll(".tab");
const panneaux = document.querySelectorAll(".tab-content");

console.log("Onglets :", onglets.length, "· Panneaux :", panneaux.length);


/* ── 2 · La fonction qui active un onglet ───────────────────── */

function activer(onglet) {

  // a · tout éteindre — les onglets ET les panneaux
  for (const autre of onglets) {
    autre.classList.remove("tab-active");
  }
  for (const panneau of panneaux) {
    panneau.classList.remove("active");
  }

  // b · allumer l'onglet cliqué
  onglet.classList.add("tab-active");

  // c · retrouver SON panneau, par l'attribut data-content-id
  const identifiant = onglet.getAttribute("data-content-id");
  const panneau = document.querySelector("#" + identifiant);

  // d · l'allumer, s'il existe
  if (panneau) {
    panneau.classList.add("active");
  }

  console.log("Onglet :", onglet.textContent, "→ panneau :", identifiant);
}


/* ── 3 · Un écouteur par onglet ─────────────────────────────── */

for (const onglet of onglets) {
  onglet.addEventListener("click", function () {
    activer(onglet);
  });
}


/* ── 4 · Au chargement : le premier onglet est ouvert ───────── */

activer(onglets[0]);
