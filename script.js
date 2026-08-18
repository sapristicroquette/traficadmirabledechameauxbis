/* =========================
   SCORE
========================= */

function answer(points, next) {

    // Récupère le score actuel
    let score = Number(localStorage.getItem("score")) || 0;

    // Ajoute les points
    score += Number(points);

    // Sauvegarde le nouveau score
    localStorage.setItem("score", String(score));

    // Debug dans la console
    console.log("Points ajoutés :", points);
    console.log("Score actuel :", score);

    // Passe à la question suivante
    window.location.href = next;
}


/* =========================
   FIN DU QUIZ
========================= */

function finish(points) {

    let score = Number(localStorage.getItem("score")) || 0;

    // Ajoute les derniers points
    score += Number(points);

    // Sauvegarde
    localStorage.setItem("score", String(score));

    // Debug
    console.log("Points ajoutés :", points);
    console.log("Score final :", score);

    // Va au résultat
    window.location.href = "result.html";
}


/* =========================
   CHAMEAUX
========================= */

window.onload = function () {

    const desert = document.getElementById("desert");

    // S'il n'y a pas de désert sur la page, on ne fait rien
    if (!desert) return;

    const nbCamels = 20;

    for (let i = 0; i < nbCamels; i++) {

        const camel = document.createElement("div");

        camel.classList.add("camel");

        camel.textContent = "🐪";

        // Taille aléatoire
        const size = Math.floor(Math.random() * 71) + 40;

        camel.style.fontSize = size + "px";

        // Position verticale aléatoire
        camel.style.top = Math.random() * 90 + "vh";

        // Vitesse aléatoire
        const speed = Math.random() * 12 + 8;

        camel.style.animationDuration = speed + "s";

        // Départ décalé
        camel.style.animationDelay = Math.random() * 5 + "s";

        desert.appendChild(camel);
    }
};