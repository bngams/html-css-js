/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les noms
   ou les libellés : ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : const ou let ? ────────────────────────────────── */


/* ── 1 · Le nom de la médiathèque ─────────────────────────────

   Une valeur qui ne change jamais → const.                     */

const NOM_MEDIATHEQUE = "Médiathèque des Trois Rivières";


/* ── 2 · Le prix d'un abonnement ────────────────────────────── */

const PRIX_ABONNEMENT = 24;


/* ── 3 · Le compteur d'emprunts ───────────────────────────────

   Cette valeur va changer → let.                               */

let nombreEmprunts = 0;


/* ── 4 · Trois emprunts ───────────────────────────────────────

   On ne réécrit PAS let : la boîte existe déjà.                */

nombreEmprunts = 3;


/* ── 5 · Un emprunt de plus ───────────────────────────────────

   Le = se lit de droite à gauche : calcule 3 + 1, range dans
   nombreEmprunts.                                              */

nombreEmprunts = nombreEmprunts + 1;


/* ── 6 · Vérifier ─────────────────────────────────────────────  */

console.log("Emprunts :", nombreEmprunts);


/* ── PARTIE 2 : les types ─────────────────────────────────────── */


/* ── 7 · Trois valeurs, trois types ───────────────────────────

   Affiche : string number number                               */

console.log(typeof NOM_MEDIATHEQUE, typeof PRIX_ABONNEMENT, typeof nombreEmprunts);


/* ── PARTIE 3 : des calculs avec Math ─────────────────────────── */


/* ── 8 · La moyenne de pages ────────────────────────────────── */

const moyennePages = (312 + 247 + 190) / 3;


/* ── 9 · Afficher la moyenne brute ────────────────────────────

   Résultat : 249.66666666666666 — une division qui ne tombe
   pas juste, comme souvent avec une moyenne.                   */

console.log("Moyenne brute :", moyennePages);


/* ── 10 · Arrondir ────────────────────────────────────────────

   Math.round arrondit au plus proche : 249.67 → 250.           */

const moyenneArrondie = Math.round(moyennePages);


/* ── 11 · Afficher l'arrondi ────────────────────────────────── */

console.log("Moyenne arrondie :", moyenneArrondie);


/* ── 12 · Le livre le plus long ───────────────────────────────

   Math.max compare autant de nombres qu'on veut.               */

console.log("Le plus long :", Math.max(312, 247, 190));


/* ── 13 · Le prix avec la TVA ─────────────────────────────────

   24 × 1.2 = 28.799999999999997 — les décimaux en binaire.
   C'est précisément pourquoi l'étape suivante existe.          */

const prixTTC = PRIX_ABONNEMENT * 1.2;


/* ── 14 · Afficher le prix à deux décimales ───────────────────

   toFixed(2) renvoie du TEXTE : "28.80". C'est parfait pour
   afficher, mais il ne faudrait pas calculer avec.             */

console.log("Prix TTC :", prixTTC.toFixed(2), "€");


/* ── 15 · Un tirage au sort ───────────────────────────────────

   Math.random() donne un nombre sous 1, jamais 1 exactement.
   × 6 → sous 6.  Math.floor → 0 à 5.  + 1 → 1 à 6.            */

const gagnant = Math.floor(Math.random() * 6) + 1;


/* ── 16 · Annoncer le gagnant ─────────────────────────────────  */

console.log("Lecteur tiré au sort :", gagnant);


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. PRIX_ABONNEMENT = 30  déclenche :

         TypeError: Assignment to constant variable.

      Parce que const interdit de remplacer la valeur.
      nombreEmprunts, lui, a été créé avec let : le remplacement
      est autorisé, aucune erreur.

   2. prixTTC.toFixed(2) + 1          → "28.801"
      Number(prixTTC.toFixed(2)) + 1  → 29.8

      toFixed renvoie du TEXTE. Le + assemble alors au lieu
      d'additionner — exactement le piège de l'exercice 2.
      Number() reconvertit en nombre et l'addition redevient
      une vraie addition.

      À retenir : toFixed sert à AFFICHER, jamais à calculer.
   ═══════════════════════════════════════════════════════════════ */
