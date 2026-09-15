/* ═══════════════════════════════════════════════════════════════
   EXERCICE 3 — CORRIGÉ

   Une solution possible. La vôtre peut différer sur les libellés :
   ce qui compte est le comportement.
   ═══════════════════════════════════════════════════════════════ */


/* ── PARTIE 1 : quatre tarifs avec else if ───────────────────── */


/* ── 1 · La fonction des tarifs ───────────────────────────────

   L'ordre est essentiel : du plus restrictif au plus large.
   Le PREMIER cas vrai gagne, les suivants ne sont même pas
   examinés — c'est ce qui évite qu'un enfant de 8 ans tombe
   aussi dans « jeune » puis « adulte ».                        */

function categorie(age) {
  if (age < 12) {
    return "enfant";
  } else if (age < 18) {
    return "jeune";
  } else if (age < 65) {
    return "adulte";
  } else {
    return "senior";
  }
}


/* ── 2 · Vérifier les quatre cas ────────────────────────────── */

console.log("8 ans :", categorie(8));
console.log("15 ans :", categorie(15));
console.log("30 ans :", categorie(30));
console.log("70 ans :", categorie(70));


/* ── PARTIE 2 : le piège de l'intervalle ─────────────────────── */


/* ── 3 · L'âge du visiteur ────────────────────────────────────  */

const age = 70;


/* ── 4 · L'écriture mathématique naïve ────────────────────────

   JavaScript lit de gauche à droite, en deux temps :

      18 <= 70     donne true
      true < 65    donne true   (true est converti en 1)

   Le résultat final n'a plus aucun rapport avec la question.   */

const testMaths = 18 <= age < 65;


/* ── 5 · L'écriture correcte ──────────────────────────────────

   La variable est répétée de chaque côté du « et ».            */

const testCorrect = age >= 18 && age < 65;


/* ── 6 · Comparer les deux ────────────────────────────────────

   age vaut 70 : la bonne réponse est false.
   La version « maths » répond true — sans la moindre erreur.   */

console.log("18 <= age < 65 (maths) :", testMaths);
console.log("age >= 18 && age < 65 (JS) :", testCorrect);


/* ── PARTIE 3 : combiner plusieurs conditions ────────────────── */


/* ── Les données du visiteur (fournies) ───────────────────────  */

const habitantCommune = true;
const estEtudiant = false;


/* ── 7 · La gratuité ──────────────────────────────────────────

   Les parenthèses ne sont pas décoratives : sans elles, le &&
   serait évalué avant le ||, ce qui donne ici le même résultat
   par hasard — mais rend l'intention illisible. On les met.

   age vaut 70, donc age < 12 est faux.
   estEtudiant est faux, donc le « et » est faux.
   Faux OU faux → false.                                        */

const gratuit = age < 12 || (habitantCommune && estEtudiant);


/* ── 8 · Annoncer la gratuité ─────────────────────────────────  */

console.log("Gratuit :", gratuit);


/* ── 9 · L'inverse ────────────────────────────────────────────

   Le « non » inverse la valeur : false devient true.           */

console.log("Doit payer :", !gratuit);


/* ── 10 · Le message final ────────────────────────────────────

   On réutilise la fonction de l'étape 1 : écrite une fois,
   elle sert partout.                                           */

console.log("Visiteur de", age, "ans, catégorie :", categorie(age));


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. true || false && false     → true
      (true || false) && false   → false

      && est évalué AVANT || , comme la multiplication avant
      l'addition. Dans la première ligne, JavaScript calcule
      d'abord false && false (= false), puis true || false
      (= true). Les parenthèses de la seconde ligne forcent
      l'ordre inverse. D'où la règle : mettez des parenthèses.

   2. Avec « age < 18 » placé AVANT « age < 12 » :

         categorie(8) → "jeune"        au lieu de "enfant"

      Un enfant de 8 ans satisfait déjà age < 18, donc le
      premier cas vrai l'emporte et le cas « enfant » devient
      INATTEIGNABLE. Aucune erreur n'apparaît : c'est du code
      mort silencieux. L'ordre va toujours du plus restrictif
      au plus large.

   3. "10" < "9"          → true     ⚠️
      Number("10") < 9    → false    ✅

      Les deux résultats sont OPPOSÉS. Quand les DEUX côtés sont
      du texte, la comparaison devient alphabétique : "1" vient
      avant "9" dans l'ordre du dictionnaire, comme "chat" vient
      avant "zèbre".

      Attention à ne pas se tromper de piège : comparer du texte
      à un NOMBRE fonctionne, et pas par hasard — JavaScript
      convertit alors systématiquement le texte en nombre.

         "30" >= 18 && "30" < 65     → true     (8 ans : false)

      Cette écriture-là donne toujours le bon résultat. Le danger
      n'apparaît que texte contre texte.

      La règle sûre : convertissez UNE FOIS avec Number(), dès la
      saisie, et ne travaillez plus qu'avec le nombre. Vous ne
      dépendrez plus de conversions automatiques que vous ne
      contrôlez pas.
   ═══════════════════════════════════════════════════════════════ */
