import "./../components/Main.js";
import { router, handleNavigation } from "./../router/router.js";

// Inicializa el enrutador al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    router();

    // Agrega eventos a los enlaces de navegación
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", handleNavigation);
    });
});

// Escucha los cambios en el historial del navegador (botones de atrás/adelante)
window.addEventListener("popstate", router);