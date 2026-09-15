/* ═══════════════════════════════════════════════════════════════
   EXERCICE 4 — CORRIGÉ

   Rappel : dans cet exercice, DEUX fichiers étaient à modifier.
   Le plus important est invisible ici — c'est le déplacement de
   la balise script, tout en bas du body de la page.
   ═══════════════════════════════════════════════════════════════ */


/* ── 2 · Vérifier que le script est bien chargé ──────────────── */

console.log("script.js chargé");


/* ── 3 · Attraper le titre de la page ──────────────────────────

   querySelector accepte les mêmes sélecteurs qu'en CSS.
   Placé en fin de body, le h1 a déjà été lu par le navigateur :
   l'élément est donc trouvé.                                   */

const titre = document.querySelector("h1");


/* ── 4 · Vérifier ce qu'on a attrapé ──────────────────────────

   Script bien placé  → affiche l'élément <h1>
   Script dans le head → aurait affiché null                    */

console.log("Titre trouvé :", titre);


/* ── 5 · Écrire le nombre d'emprunts dans la page ─────────────

   Un id se désigne par un dièse, exactement comme en CSS.      */

document.querySelector("#compteur").textContent = 47;


/* ── 6 · Écrire le message ──────────────────────────────────── */

document.querySelector("#message").textContent = "emprunts enregistrés aujourd'hui";


/* ═══════════════════════════════════════════════════════════════
   BONUS — les réponses

   1. Avec la balise dans le head, l'erreur est :

         TypeError: Cannot set properties of null (setting 'textContent')

      Elle désigne la ligne du TODO 5 — la PREMIÈRE qui essaie de
      MODIFIER un élément. La ligne du TODO 3 ne plante pas : elle
      se contente de ranger null dans une boîte, ce qui est permis.
      C'est seulement en voulant écrire DANS ce null que tout
      s'arrête.

   2. defer signifie « charge maintenant, exécute une fois la page
      lue ». Le code s'exécute donc après la création du body, et
      retrouve les éléments — comme s'il était en bas.

   3. Modifier le titre depuis la console ne change que l'affichage
      en mémoire. Le fichier HTML n'est pas touché : au rechargement,
      le titre d'origine revient. C'est tout l'objet du projet 9.
   ═══════════════════════════════════════════════════════════════ */
