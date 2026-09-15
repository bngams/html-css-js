/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — CORRIGÉ : LE PREMIER CLIC

   Une solution possible. Seuls les critères d'acceptation comptent :
   une autre écriture qui les remplit tous est tout aussi juste.
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Trouver les éléments (projet 9, exercice 1) ─────────── */

const bouton    = document.querySelector("#allumer");
const lampe     = document.querySelector("#lampe");
const etat      = document.querySelector("#etat");
const compteur  = document.querySelector("#compteur");
const raz       = document.querySelector("#raz");

let clics = 0;


/* ── 2 · La fonction qui réagit au clic ──────────────────────── */

function basculer() {
  clics = clics + 1;

  lampe.classList.toggle("allumee");

  if (lampe.classList.contains("allumee")) {
    etat.textContent = "La lampe est allumée";
  } else {
    etat.textContent = "La lampe est éteinte";
  }

  compteur.textContent = clics + " clic(s)";

  console.log("Clic n°", clics, "· allumée ?", lampe.classList.contains("allumee"));
}


/* ── 3 · Attacher la fonction au bouton ──────────────────────── */

bouton.addEventListener("click", basculer);

console.log("Écouteur posé sur :", bouton.textContent);


/* ── 4 · Un second bouton — au passage, l'autre écriture ──────
      (cours §7) : même geste, sans nom. Les deux se valent.    */

raz.addEventListener("click", function () {
  clics = 0;
  compteur.textContent = "0 clic(s)";
  lampe.classList.remove("allumee");
  etat.textContent = "La lampe est éteinte";

  console.log("Remise à zéro");
});

console.log("État initial :", etat.textContent);
