import Header from "./../components/Header.js";
import Footer from "./../components/Footer.js";
import "./../components/Main.js"; // Importa el componente Main
import "./../components/MenuCard.js"; // Importa el componente MenuCard
import Home from "../views/Home.js";
import About from "../views/About.js";
import Login from "../views/Login.js";

const body = document.querySelector("#app"); // Selecciona el contenedor principal del body

const routes = {
    "/": Home,
    "/about": About,
    "/login": Login,
    "/register": Login,
};

export function router() {
    const path = window.location.pathname; // Obtiene la ruta actual
    const view = routes[path] || Home; // Carga la vista correspondiente o la vista por defecto (Home)

    // Renderiza el contenido completo del body
    body.innerHTML = `
        ${Header()}
        <custom-main role="main">
            ${view()}
        </custom-main>
        ${Footer()}
    `;

    // Agrega eventos a los enlaces de navegación
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", handleNavigation);
    });
}

export function handleNavigation(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href"); // Obtiene la ruta del enlace
    window.history.pushState({}, "", path); // Cambia la URL sin recargar
    router(); // Renderiza la nueva vista
}