import "/components/SectionCards.js";
import "/components/Section-tabla.js";
import "/components/Section-plato-semana.js";
import "/components/Section-promociones.js";

class Main extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <link rel="stylesheet" href="/components/Main.css">
            <main class="Main">
                <section-cards id="menu" title="Menu de Platos" dataURL="/mock/ListaEspecialidades.json"></section-cards>
                <plato-semana id="platodelasemana" title="Plato de la Semana" dataURL="/mock/ListaPlatosSemana.json"></plato-semana>
                <custom-section id="bebidas" title="Menu de Bebidas" dataURL="/mock/ListaBebidas.json"></custom-section>
                <section-promociones id="promociones" title="Promociones" dataURL="/mock/ListaPromociones.json"></section-promociones>
            </main>
        `;
        // Manejar la navegación
        this.handleNavigation();
    }
    handleNavigation() {
        // Escuchar clics en los enlaces del menú
        document.querySelectorAll("nav a").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1); // Obtener el ID del destino
                const targetElement = this.shadowRoot.querySelector(`#${targetId}`); // Buscar el elemento dentro del Shadow DOM

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazarse suavemente
                }
            });
        });
    }
}



customElements.define("custom-main", Main);