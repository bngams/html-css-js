/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — UNE PAGE QUI SE CONSTRUIT SEULE

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   Comme aux exercices 1, 2 et 3 : pas de marqueurs à remplacer,
   des CRITÈRES D'ACCEPTATION dans l'énoncé.

   ── CE QUE LA PAGE CONTIENT ──────────────────────────────────

      #bilan      un paragraphe VIDE, pour la synthèse
      #emprunts   une liste <ul> contenant TROIS lignes périmées,
                  écrites à la main dans le HTML

   ── LES CLASSES DÉJÀ ÉCRITES DANS LE CSS ─────────────────────

      .emprunt            la carte d'un emprunt
      .emprunt.retard     bordure rouge, pour les emprunts trop longs
      .emprunt__titre     le titre, en gras
      .emprunt__lecteur   le prénom du lecteur, en bleu
      .emprunt__jours     la durée, en gris
      #bilan.alerte       le bandeau en rouge

   ── AUCUNE NOTION NOUVELLE ───────────────────────────────────

      Tout est déjà vu :

        exercice 1   querySelector · querySelectorAll · NodeList
        exercice 2   textContent · classList · .split() · className
        exercice 3   createElement · append · remove · .children
        projet 8     tableau d'objets · for…of · l'accumulateur
        projet 6     Number() · Math.round()

      C'est un exercice de SYNTHÈSE : rien à apprendre, tout à
      assembler.

   ── COMMENT TESTER ───────────────────────────────────────────

      Le résultat se voit SUR LA PAGE et dans la console.
      Enregistrez (Ctrl+S), rechargez (F5).

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies) ───────────────────────────────────  */

const emprunts = [
  { titre: "La Horde du Contrevent", lecteur: "Amina",  jours: 3  },
  { titre: "Dune",                   lecteur: "Karim",  jours: 21 },
  { titre: "Fondation",              lecteur: "Léa",    jours: 14 },
  { titre: "Le Nom du vent",         lecteur: "Amina",  jours: 45 },
  { titre: "Les Fourmis",            lecteur: "Tomas",  jours: 8  },
  { titre: "Chroniques martiennes",  lecteur: "Léa",    jours: 30 }
];


// Écrivez votre code ci-dessous.
