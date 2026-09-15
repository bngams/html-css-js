/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — À VOUS DE JOUER

   👉 C'EST CE FICHIER QUE VOUS MODIFIEZ.
      La page travail.html est figée : n'y touchez pas.

   ── LE GESTE ─────────────────────────────────────────────────

   A. « écrire … » → effacez la ligne du TODO, tapez votre code.
   B. « remplacer la valeur ci-dessous … » → écrivez APRÈS le
      signe = , sur la ligne elle-même, puis effacez le TODO.

      ⚠️ Une instruction séparée AU-DESSUS d'une ligne
         « const … = … ; » donne une erreur rouge
         « Cannot access … before initialization ».

   Enregistrez (Ctrl+S), rechargez (F5). Tout s'affiche dans la
   CONSOLE (F12).

   Avant de terminer : Ctrl+F sur « TODO », aucun résultat.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : créer et lire un objet ──────────────────────── */


/* ── 1 · La fiche d'un livre ──────────────────────────────────

   Créez un objet nommé livre avec exactement ces trois clés :

      titre   valant  La Horde du Contrevent
      auteur  valant  Damasio
      pages   valant  712

   ⚠️ Pas de virgule après la dernière paire : JavaScript la
      tolère, mais JSON l'interdit. Prenez l'habitude tout de
      suite — vous verrez pourquoi à la partie 5.               */

// TODO: 1 — créer l'objet livre


/* ── 2 · Lire avec le point ───────────────────────────────────

   Affichez : le texte  Titre :  puis le titre du livre.        */

// TODO: 2 — afficher le titre


/* ── 3 · Lire avec les crochets ───────────────────────────────

   Affichez : le texte  Auteur :  puis l'auteur, en utilisant
   cette fois l'écriture avec crochets.                         */

// TODO: 3 — afficher l'auteur, avec des crochets


/* ── 4 · Une clé qui n'existe pas ─────────────────────────────

   Affichez : le texte  Éditeur :  puis livre.editeur
   Constatez : aucune erreur, mais rien non plus.               */

// TODO: 4 — afficher l'éditeur (absent)


/* ── PARTIE 2 : modifier l'objet ────────────────────────────── */


/* ── 5 · Ajouter une clé ──────────────────────────────────────

   Ajoutez à livre une clé  editeur  valant  La Volte           */

// TODO: 5 — ajouter la clé editeur


/* ── 6 · Vérifier l'ajout ─────────────────────────────────────

   Affichez : le texte  Après ajout :  puis livre.editeur       */

// TODO: 6 — afficher le nouvel éditeur


/* ── PARTIE 3 : parcourir ───────────────────────────────────── */


/* ── 7 · Toutes les propriétés ────────────────────────────────

   Avec une boucle for…in, affichez une ligne par propriété :

      le texte  ·  puis la clé, puis le texte  =  puis la valeur

   Exemple de première ligne :   · titre = La Horde du Contrevent

   ⚠️ Pour la valeur, utilisez les CROCHETS : le nom de la clé
      est dans une variable. (cours §4)                         */

// TODO: 7 — parcourir l'objet avec for…in


/* ── PARTIE 4 : un tableau d'objets ─────────────────────────── */


/* ── Le catalogue (fourni) ────────────────────────────────────  */

const catalogue = [
  { titre: "Dune", pages: 900 },
  { titre: "La Horde", pages: 712 },
  { titre: "Fondation", pages: 420 }
];


/* ── 8 · Le premier titre ─────────────────────────────────────

   Affichez : le texte  1er du catalogue :  puis le titre du
   premier livre du tableau.                                    */

// TODO: 8 — afficher le titre du premier livre


/* ── 9 · Tous les titres ──────────────────────────────────────

   Avec une boucle for…of, affichez une ligne par livre :

      le texte  →  puis le titre                                */

// TODO: 9 — parcourir le catalogue avec for…of


/* ── 10 · Le total des pages ──────────────────────────────────

   Rangez dans totalPages la somme des pages des trois livres,
   calculée avec une boucle — pas à la main.

   Indice : partez de 0, et ajoutez au fil de la boucle.        */

let totalPages = 0;

// TODO: 10 — calculer le total avec une boucle


/* ── 11 · Afficher le total ───────────────────────────────────

   Affichez : le texte  Total des pages :  puis totalPages      */

// TODO: 11 — afficher le total


/* ── PARTIE 5 : JSON ────────────────────────────────────────── */


/* ── 12 · Transformer en texte ────────────────────────────────

   Rangez dans livreTexte l'objet livre transformé en TEXTE
   JSON, avec l'instruction vue au cours §7.                    */

// TODO: 12 — remplacer la valeur ci-dessous par la conversion en JSON
const livreTexte = "";


/* ── 13 · Observer le résultat et son type ────────────────────

   Affichez, en une seule instruction :
      le texte  JSON :  puis livreTexte
      puis le texte  · type :  puis le type de livreTexte

   ⚠️ Le résultat RESSEMBLE à l'objet, mais son type ne l'est
      pas. C'est tout l'objet de cette partie.                  */

// TODO: 13 — afficher le JSON et son type


/* ── 14 · Revenir à un objet ──────────────────────────────────

   Rangez dans livreRetrouve le texte JSON retransformé en
   objet.                                                       */

// TODO: 14 — remplacer la valeur ci-dessous par la relecture du JSON
const livreRetrouve = {};


/* ── 15 · Vérifier l'aller-retour ─────────────────────────────

   Affichez, en une seule instruction :
      le texte  Retrouvé :  puis le titre de livreRetrouve
      puis le texte  · type :  puis le type de livreRetrouve    */

// TODO: 15 — afficher le titre retrouvé et son type


/* ═══════════════════════════════════════════════════════════════
   BONUS

   1. Dans la console, tapez :

         livre.horaires
         livre.horaires.lundi

      La première ligne ne produit aucune erreur, la seconde si.
      Lisez le message : pourquoi ? (cours §5)

   2. Toujours dans la console :

         livreTexte.titre

      Pourquoi undefined, alors que le texte contient bien un
      titre ? (cours §7)

   3. Tapez :

         JSON.stringify({ a: 1, saluer: function(){} })

      Où est passée la fonction ? Aucune erreur ne le signale.
   ═══════════════════════════════════════════════════════════════ */
