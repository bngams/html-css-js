/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.

   Note : les quatre méthodes sont réunies dans UNE seule classe.
   L'énoncé les fait ajouter une par une (étapes 1, 4, 6, 8) —
   c'est le même résultat, écrit en une fois.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 et 2 : le moule et ses savoir-faire ───────────── */


class Rectangle {

  /* ── 1 · Le constructor ─────────────────────────────────────

     this.largeur désigne « la largeur DE CET OBJET-CI ».
     Sans this., la valeur reçue ne serait rangée nulle part.  */

  constructor(largeur, hauteur) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  /* ── 4 · calculAire ─────────────────────────────────────────

     Une fonction rangée dans un objet : des paramètres (aucun
     ici), un return — comme au projet 7. Deux différences
     d'écriture : pas de « function », pas de virgule après.   */

  calculAire() {
    return this.largeur * this.hauteur;
  }

  /* ── 6 · calculPerimetre ────────────────────────────────── */

  calculPerimetre() {
    return 2 * (this.largeur + this.hauteur);
  }

  /* ── 8 · decrire ────────────────────────────────────────────

     this. sert aussi à appeler une AUTRE méthode du même objet. */

  decrire() {
    return "Rectangle " + this.largeur + "×" + this.hauteur +
           ", aire " + this.calculAire();
  }
}


/* ── 2 · Fabriquer un rectangle ───────────────────────────────

   new crée un objet vide, exécute le constructor dessus, et le
   rend. Sans new : TypeError explicite.                        */

const premier = new Rectangle(10, 5);


/* ── 3 · Lire ses propriétés ──────────────────────────────────  */

console.log("Premier :", premier.largeur, "×", premier.hauteur);


/* ── 5 · L'aire ───────────────────────────────────────────────  */

console.log("Aire :", premier.calculAire());


/* ── 7 · Le périmètre ─────────────────────────────────────────  */

console.log("Périmètre :", premier.calculPerimetre());


/* ── 9 · La description ───────────────────────────────────────  */

console.log("Description :", premier.decrire());


/* ── PARTIE 3 : plusieurs objets sur le même moule ──────────── */


/* ── 10 · Trois formes ────────────────────────────────────────

   Un tableau d'objets — comme à l'exercice 3 — mais fabriqués
   par le moule au lieu d'être écrits à la main.                */

const formes = [
  new Rectangle(2, 3),
  new Rectangle(4, 5),
  new Rectangle(6, 7)
];


/* ── 11 · Décrire chacune ─────────────────────────────────────  */

for (const forme of formes) {
  console.log("·", forme.decrire());
}


/* ── 12 · La somme des aires ──────────────────────────────────

   Même motif qu'à l'exercice 3 : on part de 0, on ajoute au fil
   de la boucle. Seule différence : la valeur vient d'un appel
   de méthode, pas d'une propriété.                             */

let totalAires = 0;

for (const forme of formes) {
  totalAires = totalAires + forme.calculAire();
}


/* ── 13 · L'afficher ──────────────────────────────────────────  */

console.log("Total des aires :", totalAires);


/* ── PARTIE 4 : ce que JSON ne sait pas transporter ─────────── */


/* ── 14 · En JSON ─────────────────────────────────────────────

   Résultat : {"largeur":10,"hauteur":5}

   Les DONNÉES sont là, les MÉTHODES ont disparu — exactement
   comme les fonctions à l'exercice 3. JSON ne transporte pas
   de comportement.                                             */

console.log("En JSON :", JSON.stringify(premier));


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. Rectangle(10, 5)   sans new →

         TypeError: Class constructor Rectangle cannot be
         invoked without 'new'

      Le message dit exactement quoi faire. Contrairement à la
      plupart des pièges de ce cours, celui-là se VOIT.

   2. Sans this. dans calculAire() →

         ReferenceError: largeur is not defined

      JavaScript cherche une VARIABLE nommée largeur, pas la
      propriété de l'objet. Les deux n'ont rien à voir : this.
      est ce qui fait le lien avec l'objet courant.

   3. const copie = JSON.parse(JSON.stringify(premier));

         copie.largeur      → 10          ✅ les données sont là
         copie.calculAire() → TypeError: copie.calculAire is
                              not a function

      L'aller-retour par JSON n'a gardé que les données. L'objet
      revenu RESSEMBLE à un rectangle, mais ce n'en est plus un :
      il a perdu son moule. (Le mot exact pour vérifier cela est
      « instanceof » — voir la page solution.)

      C'est la suite directe de l'exercice 3 : JSON transporte
      des données, jamais du comportement.
   ═══════════════════════════════════════════════════════════════ */
