/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — ÉCOUTER PENDANT QU'ON TAPE

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   Même format qu'à l'exercice 1 : pas de marqueurs à remplacer,
   des CRITÈRES D'ACCEPTATION dans l'énoncé.

   ── CE QUE LA PAGE CONTIENT ──────────────────────────────────

      #recherche   le champ de saisie (vide au départ)
      #compteur    un paragraphe vide, pour le décompte
      #resultats   une liste <ul> … VIDE

   ── LES CLASSES DÉJÀ ÉCRITES DANS LE CSS ─────────────────────

      .livre           la carte d'un livre
      .livre__titre    le titre, en gras
      .livre__auteur   l'auteur, en gris
      #compteur.vide   le décompte en rouge, quand rien ne correspond

   ── LES NOTIONS NOUVELLES ────────────────────────────────────

      L'événement "input"   cours §2
      champ.value           cours §3
      .toLowerCase()        cours §5
      .includes()           cours §5

      Tout le reste est déjà vu :

        exercice 1     addEventListener · fonction anonyme
        projet 9 ex3   createElement · append · remove
        projet 9 ex4   vider avant de reconstruire
        projet 7       les fonctions · return
        projet 8       for…of · l'accumulateur

   ── COMMENT TESTER ───────────────────────────────────────────

      Rechargez (F5) PUIS tapez dans le champ.
      Essayez : du · DU · dune · xyz · puis effacez tout.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies) ───────────────────────────────────  */

const livres = [
  { titre: "La Horde du Contrevent", auteur: "Alain Damasio" },
  { titre: "Dune",                   auteur: "Frank Herbert" },
  { titre: "Fondation",              auteur: "Isaac Asimov" },
  { titre: "Le Nom du vent",         auteur: "Patrick Rothfuss" },
  { titre: "Les Fourmis",            auteur: "Bernard Werber" },
  { titre: "Chroniques martiennes",  auteur: "Ray Bradbury" }
];


// Écrivez votre code ci-dessous.
