/* ═══════════════════════════════════════════════════════════════
   PROJET 11 — LE SYSTÈME D'ONGLETS

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   Même format qu'aux projets 9 et 10 : pas de marqueurs à
   remplacer, des CRITÈRES D'ACCEPTATION dans l'énoncé.

   ── CE QUE LA PAGE CONTIENT ──────────────────────────────────

      .tab            les trois boutons d'onglet
      .tab-content    les trois panneaux (cachés par le CSS)

      Chaque bouton porte un attribut qui désigne SON panneau :

        <button class="tab" data-content-id="content2">Emprunts</button>
        <div id="content2" class="tab-content"> … </div>
                  ↑ le même texte des deux côtés

   ── LES CLASSES DÉJÀ ÉCRITES DANS LE CSS ─────────────────────

      .tab-active           l'onglet choisi : souligné, en bleu
      .tab-content.active   le panneau visible

      N'écrivez AUCUNE couleur, AUCUN display. Posez les classes,
      le CSS fait le reste. (projet 9, exercice 2, section 5)

   ── LA SEULE NOTION NOUVELLE ─────────────────────────────────

      getAttribute("data-content-id")   cours §4

      Tout le reste est déjà vu :

        projet 10 ex1  addEventListener · click
        projet 10 ex2  une fonction appelée depuis deux endroits
        projet 9 ex1   querySelectorAll · NodeList · for…of
        projet 9 ex2   classList (add / remove)
        projet 7       les fonctions · les paramètres

   ── COMMENT TESTER ───────────────────────────────────────────

      Rechargez (F5) PUIS cliquez sur les onglets.
      Vérifiez aussi l'état AU CHARGEMENT, avant tout clic.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


// Écrivez votre code ci-dessous.
