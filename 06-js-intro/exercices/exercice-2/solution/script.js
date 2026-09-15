/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés
   ou les guillemets : ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── 1 · Un premier message pour VOUS ───────────────────────── */

console.log("Le script est chargé");


/* ── 2 · Un message pour le VISITEUR ────────────────────────── */

alert("Bienvenue à la médiathèque !");


/* ── 3 · Demander son prénom ────────────────────────────────── */

let prenom = prompt("Comment vous appelez-vous ?");


/* ── 4 · Le saluer par son prénom ───────────────────────────── */

alert("Bonjour " + prenom + " !");


/* ── 5 · Demander son âge ───────────────────────────────────── */

let ageSaisi = prompt("Quel âge avez-vous ?");


/* ── 6 · Observer le PIÈGE ──────────────────────────────────────

   prompt renvoie TOUJOURS du texte. Avec 25 saisi, ageSaisi vaut
   la chaîne "25" et non le nombre 25. Le + assemble alors au lieu
   d'additionner :  "25" + 1  donne  "251"                      */

console.log("L'an prochain, version texte :", ageSaisi + 1);


/* ── 7 · Corriger le piège ──────────────────────────────────────

   Number() convertit le texte en nombre.                       */

let age = Number(ageSaisi);


/* ── 8 · Vérifier la correction ─────────────────────────────────

   Cette fois l'addition est une vraie addition :  25 + 1  →  26 */

console.log("L'an prochain, version nombre :", age + 1);


/* ── 9 · Poser une question fermée ──────────────────────────────

   confirm renvoie un booléen : true si OK, false si Annuler.   */

let newsletter = confirm("Souhaitez-vous recevoir la newsletter ?");


/* ── 10 · Afficher le récapitulatif ─────────────────────────────

   Dans la console, les trois valeurs n'ont pas la même couleur :
   prenom est du texte, age est un nombre, newsletter est un
   booléen. Trois types différents.                             */

console.log("Récapitulatif :", prenom, age, newsletter);


/* ═══════════════════════════════════════════════════════════════
   BONUS

   Une valeur par défaut se donne en deuxième argument :

       let prenom = prompt("Comment vous appelez-vous ?", "Camille");

   Et si l'on clique sur ANNULER, prompt ne renvoie pas un texte
   vide mais null — le mot qui signifie « rien du tout ». Le
   récapitulatif affiche alors null à la place du prénom.

   Traiter proprement ce cas demande une CONDITION : ce sera
   l'objet du projet 7.
   ═══════════════════════════════════════════════════════════════ */
