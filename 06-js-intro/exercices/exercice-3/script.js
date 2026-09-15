/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — À VOUS DE JOUER

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

        Avant :  const total = 0;
        Après :  const total = votre calcul ici;

   💡 Les boîtes déjà écrites pour vous utilisent const :
      ces valeurs sont calculées une fois et ne changent plus.
      C'est la règle vue au cours — const par défaut.

   ⚠️ Pour un TODO de type B, écrivez votre calcul APRÈS le
      signe = , sur la ligne elle-même. Si vous mettez une
      instruction séparée au-dessus, vous obtiendrez une
      erreur rouge « Cannot access … before initialization ».
      Ce n'est pas grave : c'est le navigateur qui vous aide.

   Dans les deux cas : enregistrez (Ctrl+S), rechargez (F5).

   ── COMMENT TESTER ───────────────────────────────────────────

   Tout s'affiche dans la CONSOLE (F12). Gardez-la ouverte.
   Cet exercice n'ouvre aucune boîte de dialogue.

   ── AVANT DE TERMINER ────────────────────────────────────────

   Cherchez « TODO » avec Ctrl+F : aucun résultat ne doit rester.

   ↩ L'énoncé : enonce.html   ·   Le cours : cours.html
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : const ou let ? ────────────────────────────────── */


/* ── 1 · Le nom de la médiathèque ─────────────────────────────

   Cette valeur ne changera JAMAIS pendant le programme.
   Choisissez donc le bon mot-clé, et rangez dedans le texte :
   Médiathèque des Trois Rivières                               */

// TODO: 1 — créer une boîte NOM_MEDIATHEQUE avec le bon mot-clé


/* ── 2 · Le prix d'un abonnement ──────────────────────────────

   Le tarif de base est de 24 euros. Il ne changera pas non plus. */

// TODO: 2 — créer une boîte PRIX_ABONNEMENT contenant 24


/* ── 3 · Le compteur d'emprunts ───────────────────────────────

   Celui-ci va CHANGER au fil du programme : il démarre à 0.
   Choisissez le mot-clé qui autorise le changement.            */

// TODO: 3 — créer une boîte nombreEmprunts démarrant à 0


/* ── 4 · Trois emprunts ───────────────────────────────────────

   Faites passer nombreEmprunts de 0 à 3, SANS réécrire le
   mot-clé (la boîte existe déjà).                              */

// TODO: 4 — donner la valeur 3 à nombreEmprunts


/* ── 5 · Un emprunt de plus ───────────────────────────────────

   Ajoutez 1 au compteur en vous servant de sa valeur actuelle.
   Rappel du cours : on lit l'ancienne valeur, on range la
   nouvelle. Le résultat attendu est 4.                         */

// TODO: 5 — ajouter 1 à nombreEmprunts


/* ── 6 · Vérifier ─────────────────────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Emprunts :
      puis         nombreEmprunts                               */

// TODO: 6 — afficher le nombre d'emprunts dans la console


/* ── PARTIE 2 : les types ─────────────────────────────────────── */


/* ── 7 · Trois valeurs, trois types ───────────────────────────

   Affichez dans la console, en une seule instruction, le type
   de ces trois boîtes, dans cet ordre :

      NOM_MEDIATHEQUE, PRIX_ABONNEMENT, nombreEmprunts

   Utilisez l'instruction vue au cours qui donne le type.
   Vous devez obtenir : string number number                    */

// TODO: 7 — afficher le type des trois boîtes


/* ── PARTIE 3 : des calculs avec Math ─────────────────────────── */


/* ── 8 · La moyenne de pages ──────────────────────────────────

   Trois livres font 312, 247 et 190 pages.
   Rangez leur moyenne dans moyennePages.
   (moyenne = somme divisée par le nombre de valeurs)           */

// TODO: 8 — remplacer la valeur ci-dessous par le calcul de la moyenne
const moyennePages = 0;


/* ── 9 · Afficher la moyenne brute ────────────────────────────

   Affichez dans la console :
      le texte     Moyenne brute :
      puis         moyennePages

   Observez le résultat : il tombe rarement juste.              */

// TODO: 9 — afficher la moyenne brute dans la console


/* ── 10 · Arrondir ────────────────────────────────────────────

   Rangez dans moyenneArrondie la moyenne arrondie à l'entier
   le PLUS PROCHE, avec l'outil vu au cours.                    */

// TODO: 10 — remplacer la valeur ci-dessous par la moyenne arrondie
const moyenneArrondie = 0;


/* ── 11 · Afficher l'arrondi ──────────────────────────────────

   Affichez dans la console :
      le texte     Moyenne arrondie :
      puis         moyenneArrondie                              */

// TODO: 11 — afficher la moyenne arrondie dans la console


/* ── 12 · Le livre le plus long ───────────────────────────────

   Affichez dans la console, en une seule instruction :
      le texte     Le plus long :
      puis         le plus grand des trois nombres 312, 247, 190
                   obtenu avec l'outil du cours (pas à la main)  */

// TODO: 12 — afficher le maximum des trois nombres


/* ── 13 · Le prix avec la TVA ─────────────────────────────────

   La TVA est de 20 %. Rangez dans prixTTC le prix de
   l'abonnement augmenté de 20 %.

   Indice : multiplier par 1.2 augmente de 20 %.
   ⚠️ Le séparateur décimal est le POINT.                       */

// TODO: 13 — remplacer la valeur ci-dessous par le calcul du prix TTC
const prixTTC = 0;


/* ── 14 · Afficher le prix à deux décimales ───────────────────

   Affichez dans la console :
      le texte     Prix TTC :
      puis         prixTTC formaté à DEUX décimales
                   avec l'outil vu au cours
      puis         le texte  €                                  */

// TODO: 14 — afficher le prix TTC à deux décimales


/* ── 15 · Un tirage au sort ───────────────────────────────────

   La médiathèque tire au sort un lecteur parmi 6.
   Rangez dans gagnant un entier au hasard entre 1 et 6,
   avec la formule vue au cours.

   Rechargez plusieurs fois : le nombre doit changer, et rester
   toujours entre 1 et 6.                                       */

// TODO: 15 — remplacer la valeur ci-dessous par un tirage entre 1 et 6
const gagnant = 0;


/* ── 16 · Annoncer le gagnant ─────────────────────────────────

   Affichez dans la console :
      le texte     Lecteur tiré au sort :
      puis         gagnant                                      */

// TODO: 16 — annoncer le gagnant dans la console


/* ═══════════════════════════════════════════════════════════════
   BONUS — seulement si vous avez fini et qu'il vous reste du temps

   1. Dans la console, tapez :   PRIX_ABONNEMENT = 30
      Lisez le message d'erreur : il porte un nom précis.
      Pourquoi cette erreur n'apparaît-elle PAS avec
      nombreEmprunts ?

   2. Toujours dans la console, comparez :

         prixTTC.toFixed(2) + 1
         Number(prixTTC.toFixed(2)) + 1

      Les deux résultats diffèrent. Sauriez-vous dire pourquoi ?
      (le cours, section 5, donne la réponse)
   ═══════════════════════════════════════════════════════════════ */
