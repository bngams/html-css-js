/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — UN FORMULAIRE QUI NE RECHARGE PAS

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   Dernier exercice du projet 10. Même format : pas de marqueurs
   à remplacer, des CRITÈRES D'ACCEPTATION dans l'énoncé.

   ── CE QUE LA PAGE CONTIENT ──────────────────────────────────

      #ajout      le <form> (deux champs + un bouton)
      #titre      le champ « Titre du livre »
      #lecteur    le champ « Prénom du lecteur »
      #message    un paragraphe vide, pour le retour à l'utilisateur
      #compteur   un paragraphe vide, pour le décompte
      #liste      une liste <ul> … VIDE

   ── LES CLASSES DÉJÀ ÉCRITES DANS LE CSS ─────────────────────

      .emprunt            la carte d'un emprunt
      .emprunt__titre     le titre, en gras
      .emprunt__lecteur   le prénom, en bleu
      #message.erreur     le message en rouge (sinon il est vert)

   ── LES NOTIONS NOUVELLES ────────────────────────────────────

      L'événement "submit"       cours §2
      evenement.preventDefault() cours §3
      .trim()                    cours §6

      Tout le reste est déjà vu :

        exercice 1     addEventListener · fonction anonyme
        exercice 2     .value · vider et reconstruire
        projet 9       createElement · append · remove · classList
        projet 8       tableaux · for…of · push (même avec const)
        projet 7       fonctions · return

   ── ⚠️ AVANT D'ÉCRIRE : ESSAYEZ LE FORMULAIRE ────────────────

      Ouvrez travail.html, tapez un titre, appuyez sur Entrée.
      La page se recharge et tout est perdu. C'est le problème
      que cet exercice résout.

   ── COMMENT TESTER ───────────────────────────────────────────

      Rechargez (F5) PUIS utilisez le formulaire.
      Essayez aussi : les deux champs vides, un seul rempli,
      et un titre entouré d'espaces.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── Les données (fournies, et qui vont GRANDIR) ──────────────  */

const emprunts = [
  { titre: "Dune",              lecteur: "Karim" },
  { titre: "Fondation",         lecteur: "Léa" },
  { titre: "Les Fourmis",       lecteur: "Tomas" }
];


// Écrivez votre code ci-dessous.
