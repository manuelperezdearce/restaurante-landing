import "/components/MenuCard.js";

class SectionPromociones extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const title = this.getAttribute("title");
        const dataURL = this.getAttribute("dataURL");

        // Renderizar el título y un contenedor vacío mientras se cargan los datos
        shadow.innerHTML = `
            <link rel="stylesheet" href="/components/Section-promociones.css">
            <section class="container">
                <h4>${title}</h4>
                <ul class="cards-container">Cargando...</ul>
            </section>
        `;

        // Cargar los datos dinámicamente
        this.loadData(dataURL, shadow);
    }

    async loadData(dataURL, shadow) {
        try {
            const response = await fetch(dataURL);
            if (!response.ok) {
                throw new Error(`Error al cargar los datos desde ${dataURL}: ${response.statusText}`);
            }
            const data = await response.json();

            // Generar las tarjetas dinámicamente
            const cardsHTML = data.map((menu) => {
                return `
                    <li>
                        <menu-card
                        img="${menu.img}" 
                        name="${menu.name}" 
                        description="${menu.description}" 
                        price="${menu.price}">
                        <menu-card>
                    </li>
                `;
            }).join("");

            // Actualizar el contenido del contenedor de tarjetas
            const container = shadow.querySelector(".cards-container");
            container.innerHTML = cardsHTML;
        } catch (error) {
            console.error(error);
            const container = shadow.querySelector(".cards-container");
            container.innerHTML = `<p>Error al cargar los datos.</p>`;
        }
    }
}

customElements.define("section-promociones", SectionPromociones);