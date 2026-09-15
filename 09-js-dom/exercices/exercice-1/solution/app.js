/* ═══════════════════════════════════════════════════════════════
   EXERCICE 1 — CORRIGÉ

   Une solution possible. Avec ce nouveau format, les vôtres
   peuvent différer davantage qu'avant : seuls les critères
   d'acceptation comptent.
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Le titre de la page ──────────────────────────────────

   querySelector accepte les sélecteurs CSS du projet 3.
   Ici un identifiant, donc un dièse.                           */

const titre = document.querySelector("#titre-page");

console.log("Titre :", titre.textContent);


/* ── 2 · Le premier livre, et lui seul ────────────────────────

   querySelector est au SINGULIER : il rend le premier élément
   qui correspond, même si cinq autres portent la même classe. */

const premier = document.querySelector(".livre");

console.log("Premier livre :", premier.querySelector(".livre__titre").textContent);


/* ── 3 · Tous les livres ──────────────────────────────────────

   querySelectorAll rend une NodeList — pas un tableau, mais
   elle a un .length et se parcourt avec for…of.                */

const livres = document.querySelectorAll(".livre");

console.log("Nombre de livres :", livres.length);


/* ── 4 · Les disponibles seulement ────────────────────────────

   Un sélecteur peut combiner deux classes : ".livre.disponible"
   ne prend que les éléments qui ont LES DEUX.                  */

const disponibles = document.querySelectorAll(".livre.disponible");

console.log("Disponibles :", disponibles.length);


/* ── 5 · Une recherche qui ne trouve rien ─────────────────────

   Différence essentielle avec querySelector : pas de null ici,
   mais une liste VIDE. On peut la parcourir sans risque.       */

const perdus = document.querySelectorAll(".livre.perdu");

console.log("Perdus :", perdus.length, "· est-ce null ?", perdus === null);


/* ── 6 · Parcourir et afficher chaque titre ───────────────────

   for…of du projet 8, appliqué à une NodeList.
   Le querySelector est ici appelé SUR un élément, pas sur
   document : il ne cherche qu'à l'intérieur de ce livre.       */

for (const livre of livres) {
  const titreLivre = livre.querySelector(".livre__titre").textContent;
  const auteur = livre.querySelector(".livre__auteur").textContent;
  console.log("·", titreLivre, "—", auteur);
}


/* ── 7 · Mettre le compteur à jour ────────────────────────────

   La seule ligne de cet exercice qui MODIFIE la page.
   Le reste ne fait que lire.                                   */

document.querySelector("#compteur").textContent =
  livres.length + " livres au catalogue, dont " + disponibles.length + " disponibles";


/* ═══════════════════════════════════════════════════════════════
   NOTES

   · Une NodeList n'est pas un tableau : Array.isArray(livres)
     rend false, et livres.map(...) n'existe pas. Pour utiliser
     les méthodes d'un tableau : Array.from(livres).

   · querySelectorAll sans résultat rend une liste vide, jamais
     null — contrairement à querySelector. C'est pourquoi la
     boucle de l'étape 6 serait sans danger même sur un
     catalogue vide.

   · En jQuery, les deux premières lignes s'écriraient
     $("#titre-page") et $(".livre"). Rien de plus : la
     librairie abrège, elle n'ajoute pas de pouvoir.
   ═══════════════════════════════════════════════════════════════ */
