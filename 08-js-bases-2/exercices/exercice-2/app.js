/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   ⚠️⚠️ ATTENTION PARTICULIÈRE À CET EXERCICE ⚠️⚠️

   Une boucle mal écrite peut FIGER VOTRE ONGLET. Si la page ne
   répond plus : fermez l'onglet (Ctrl+W ou Cmd+W), corrigez le
   fichier, rouvrez la page. Rien n'est cassé définitivement.

   Deux causes possibles, toutes deux traitées dans le cours :
      · le compteur qui n'avance pas          (cours §3)
      · l'annulation du prompt non testée     (cours §6)

   ── LE GESTE ─────────────────────────────────────────────────

   A. « écrire … » → effacez la ligne du TODO, tapez votre code.
   B. « remplacer la valeur ci-dessous … » → écrivez APRÈS le
      signe = , puis effacez la ligne du TODO.

   Enregistrez (Ctrl+S), rechargez (F5).

   Avant de terminer : Ctrl+F sur « TODO », aucun résultat.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : la mécanique du while ────────────────────────── */


/* ── 1 · Un compte à rebours ──────────────────────────────────

   Avec une boucle while, affichez dans la console :

      Décollage dans 3
      Décollage dans 2
      Décollage dans 1

   puis, APRÈS la boucle :   Décollage !

   ⚠️ N'oubliez pas de faire DIMINUER le compteur dans le bloc,
      sinon la boucle ne s'arrêtera jamais.                     */

let compte = 3;

// TODO: 1 — écrire la boucle du compte à rebours


/* ── 2 · L'annonce finale ─────────────────────────────────────

   Affichez  Décollage !  dans la console, après la boucle.     */

// TODO: 2 — afficher Décollage !


/* ── PARTIE 2 : break et continue ────────────────────────────── */


/* ── 3 · S'arrêter en chemin ──────────────────────────────────

   Avec une boucle for de 0 à 9, affichez  stop:  puis le
   nombre — mais SORTEZ de la boucle dès que le nombre vaut 4.

   Vous devez obtenir quatre lignes : 0, 1, 2, 3.               */

// TODO: 3 — boucle for avec break à 4


/* ── 4 · Sauter un tour ───────────────────────────────────────

   Avec une boucle for de 0 à 4, affichez  saut:  puis le
   nombre — mais SAUTEZ le tour où le nombre vaut 2.

   Vous devez obtenir : 0, 1, 3, 4.                             */

// TODO: 4 — boucle for avec continue à 2


/* ── PARTIE 3 : le jeu qui redemande enfin ──────────────────── */


/* ── Les réglages (fournis) ───────────────────────────────────  */

const MAXIMUM = 10;
const secret = Math.floor(Math.random() * MAXIMUM) + 1;

console.log("[triche] le secret est :", secret);


/* ── 5 · Les deux témoins ─────────────────────────────────────

   Créez deux boîtes qui vont CHANGER pendant la partie :
      trouve   valant false au départ
      essais   valant 0 au départ

   Choisissez le mot-clé qui autorise le changement.            */

// TODO: 5 — créer trouve (false) et essais (0)


/* ── 6 · La boucle du jeu ─────────────────────────────────────

   Écrivez une boucle while qui tourne TANT QUE trouve vaut
   false. À l'intérieur, dans cet ordre :

     a) demander  Votre proposition ?  et ranger dans saisie
     b) SI saisie vaut null (le joueur a annulé) → sortir
        de la boucle avec break
        ⚠️ Ce test est OBLIGATOIRE. Sans lui, un joueur qui
           annule ne peut plus quitter la page. (cours §6)
     c) ajouter 1 à essais
        — après le test d'annulation, donc un abandon immédiat
          comptera 0 essai. C'est normal.
     d) convertir saisie en nombre, dans proposition
     e) comparer :
          si ce n'est pas un nombre  → alerte  Ce n'est pas un nombre.
          sinon si égal au secret    → trouve devient true
          sinon si plus petit        → alerte  Trop petit.
          sinon                      → alerte  Trop grand.        */

// TODO: 6 — écrire la boucle du jeu


/* ── 7 · Le bilan ─────────────────────────────────────────────

   APRÈS la boucle, affichez dans la console :
      le texte  Partie terminée. Essais :   puis essais         */

// TODO: 7 — afficher le nombre d'essais


/* ── 8 · Féliciter, ou pas ────────────────────────────────────

   SI trouve vaut true, affichez une alerte :

      Gagné en 3 essais !      (avec le vrai nombre)

   ⚠️ Accordez le pluriel : « 1 essai », « 2 essais ».
      Le cours §7 donne une écriture en une ligne — ou écrivez
      un if…else ordinaire, au choix.

   SINON, affichez une alerte :   Partie abandonnée.            */

// TODO: 8 — féliciter le joueur, ou constater l'abandon


/* ═══════════════════════════════════════════════════════════════
   BONUS

   1. Retirez le test  saisie === null  de l'étape 6, rechargez,
      et cliquez sur Annuler. La boîte revient sans fin : vous
      venez de PROVOQUER le blocage, donc vous savez d'où il
      vient. Fermez l'onglet (Ctrl+W), remettez le test.

   2. ⚠️ À FAIRE EN DERNIER — celle-ci fige la page AVANT même
      la première question, donc avant tout le reste de votre
      travail.

      Retirez le  compte--  de l'étape 1, rechargez. L'onglet se
      fige immédiatement : fermez-le (Ctrl+W), remettez la
      ligne. Vous connaîtrez alors les DEUX symptômes.

   3. Remplacez le while de l'étape 6 par un do…while.
      Y a-t-il une différence visible ici ? Pourquoi ?
      (cours §8)
   ═══════════════════════════════════════════════════════════════ */
