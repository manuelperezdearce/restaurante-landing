import "./SectionCards.js";
import "./Section-tabla.js";
import "./Section-plato-semana.js";
import "./Section-promociones.js";
import "./SectionVideos.js"

class Main extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <link rel="stylesheet" href="./components/Main.css">
            <main class="Main">
                <section-cards id="menu" title="Menu de Platos" dataURL="./mock/ListaEspecialidades.json"></section-cards>
                <plato-semana id="platodelasemana" title="Plato de la Semana" dataURL="../mock/ListaPlatosSemana.json"></plato-semana>
                <section-tabla id="bebidas" title="Menu de Bebidas" dataURL="./mock/ListaBebidas.json"></section-tabla>
                <section-promociones id="promociones" title="Promociones" dataURL="./mock/ListaPromociones.json"></section-promociones>
                <section-videos id="videos" title="Videos Relacionados" dataURL="./mock/ListaPromociones.json"></section-promociones>
            </main>
        `;
        this.handleNavigation();
    }

    handleNavigation() {
        document.querySelectorAll("nav a").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = this.shadowRoot.querySelector(`#${targetId}`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }
}

customElements.define("custom-main", Main);