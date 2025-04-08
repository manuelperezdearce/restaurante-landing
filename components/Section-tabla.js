
class customSection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const title = this.getAttribute("title");
        const dataURL = this.getAttribute("dataURL");

        // Renderizar el título y un contenedor vacío mientras se cargan los datos
        shadow.innerHTML = `
            <link rel="stylesheet" href="./components/Section-tabla.css">
            <section class="container">
                <h4>${title}</h4>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr>
                        <td colspan="4" class="loading">Cargando...</td>
                    </tr>
                </tbody>
                </table>
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
                    <tr>
                        <td scope="row">
                            <img src="${menu.img}">
                        </td>
                        <td scope="row">
                            <p>${menu.name}</p>
                        </td>
                        <td scope="row">
                            <p>${menu.description}</p>
                        </td>
                         <td scope="row">
                            <p>${menu.price}</p>
                        </td>
                    </tr>
                `;
            }).join("");

            // Actualizar el contenido del contenedor de tarjetas
            const container = shadow.querySelector(".table-body");
            container.innerHTML = cardsHTML;
        } catch (error) {
            console.error(error);
            const container = shadow.querySelector(".table-body");
            container.innerHTML = `<p>Error al cargar los datos.</p>`;
        }
    }
}

customElements.define("section-tabla", customSection);