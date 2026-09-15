/* ═══════════════════════════════════════════════════════════════
   EXERCICE 2 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html, elle, est figée : n'y touchez pas.

   ── LE GESTE : il y a DEUX sortes de TODO ────────────────────

   A. « écrire … » / « afficher … »
      → EFFACEZ la ligne du TODO en entier, marqueurs compris,
        et TAPEZ votre instruction à la place.

   B. « remplacer la valeur ci-dessous … »
      → NE touchez PAS à la ligne qui suit le TODO.
        Modifiez seulement ce qui se trouve APRÈS le signe =,
        puis effacez la ligne du TODO.

   ⚠️ Pour un TODO de type B, écrivez votre calcul APRÈS le
      signe = , sur la ligne elle-même. Si vous mettez une
      instruction séparée au-dessus, vous obtiendrez une
      erreur rouge « Cannot access … before initialization ».
      Ce n'est pas grave : c'est le navigateur qui vous aide.

   Dans les deux cas : enregistrez (Ctrl+S), rechargez (F5).

   ── COMMENT TESTER ───────────────────────────────────────────

   Tout s'affiche dans la CONSOLE (F12). Gardez-la ouverte.

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F : aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : lire une fonction, en écrire une ──────────────── */


/* ── La fonction qui vous est DONNÉE ──────────────────────────

   Lisez-la avant de continuer : c'est le modèle de toutes
   celles que vous allez écrire.                                */

function addition(a, b) {
  return a + b;
}


/* ── 1 · Appeler la fonction donnée ───────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     5 + 3 =
      puis         le résultat de addition(5, 3)

   Vous devez obtenir 8.                                        */

// TODO: 1 — afficher le résultat de addition(5, 3)


/* ── 2 · Écrire la soustraction ───────────────────────────────

   Sur le modèle exact d'addition, écrivez une fonction
   soustraction(a, b) qui renvoie a - b.

   ⚠️ N'oubliez pas le return : sans lui, la fonction ne
      renvoie rien.                                             */

// TODO: 2 — écrire la fonction soustraction(a, b)


/* ── 3 · L'appeler ────────────────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     5 - 3 =
      puis         le résultat de soustraction(5, 3)

   Vous devez obtenir 2.                                        */

// TODO: 3 — afficher le résultat de soustraction(5, 3)


/* ── PARTIE 2 : le piège du return oublié ────────────────────── */


/* ── La fonction VOLONTAIREMENT incomplète ────────────────────

   Son nom le dit : elle multiplie, mais ne REND rien.
   Elle n'est PAS cassée — elle calcule vraiment, correctement.
   Le résultat est simplement jeté, faute de return.

   Ne la corrigez pas tout de suite : l'étape 4 consiste à
   CONSTATER le problème.                                       */

function multiplierSansRendre(a, b) {
  a * b;
}


/* ── 4 · Constater le problème ────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     multiplierSansRendre(5, 3) =
      puis         le résultat de multiplierSansRendre(5, 3)

   Lisez le résultat : ce n'est pas 15.                         */

// TODO: 4 — afficher le résultat de multiplierSansRendre(5, 3)


/* ── 5 · Écrire la version correcte ───────────────────────────

   Écrivez multiplication(a, b) qui, elle, RENVOIE a * b.      */

// TODO: 5 — écrire la fonction multiplication(a, b)


/* ── 6 · Vérifier ─────────────────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     5 × 3 =
      puis         le résultat de multiplication(5, 3)

   Vous devez obtenir 15.                                       */

// TODO: 6 — afficher le résultat de multiplication(5, 3)


/* ── PARTIE 3 : une fonction vraiment utile ──────────────────── */


/* ── 7 · Le calcul de TVA ─────────────────────────────────────

   Écrivez une fonction prixTTC(prixHT) — UN SEUL paramètre —
   qui renvoie le prix augmenté de 20 %.

   Rappel du projet 6 : multiplier par 1.2 ajoute 20 %.
   ⚠️ Le séparateur décimal est le POINT.                      */

// TODO: 7 — écrire la fonction prixTTC(prixHT)


/* ── 8 · Trois prix, une seule fonction ───────────────────────

   Affichez dans la console TROIS instructions séparées :

      le texte  Abonnement :   puis  prixTTC(24)
      le texte  Retard :       puis  prixTTC(2)
      le texte  Perte :        puis  prixTTC(15)

   C'est tout l'intérêt : le calcul n'est écrit qu'UNE fois.    */

// TODO: 8 — afficher les trois prix TTC


/* ── 9 · Réutiliser le résultat dans un calcul ────────────────

   Rangez dans totalDeuxAbos le résultat de prixTTC(24)
   multiplié par 2.

   C'est possible parce que la fonction RENVOIE une valeur —
   elle ne se contente pas de l'afficher.                       */

// TODO: 9 — remplacer la valeur ci-dessous par le calcul
const totalDeuxAbos = 0;


/* ── 10 · Annoncer le total ───────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Deux abonnements :
      puis         totalDeuxAbos
      puis         le texte  €                                  */

// TODO: 10 — afficher le total


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. Dans la console, tapez ces trois appels et expliquez
      chaque résultat :

         addition(5)
         addition(5, 3, 99)
         addition("5", 3)

      Le dernier doit vous rappeler un piège du projet 6.

   2. Tapez  addition  SANS parenthèses, puis  typeof addition.
      Que voyez-vous ? Pourquoi rien ne se calcule ?

   3. Ajoutez une ligne console.log("après") APRÈS le return
      d'addition, rechargez, et regardez si elle s'affiche.
      (cours, section 4)
   ═══════════════════════════════════════════════════════════════ */
