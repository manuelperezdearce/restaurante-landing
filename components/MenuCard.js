class MenuCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Leer atributos del elemento
        const img = this.getAttribute("img");
        const name = this.getAttribute("name");
        const description = this.getAttribute("description");
        const price = this.getAttribute("price");

        // Renderizar el contenido dinámicamente
        shadow.innerHTML = `
            <link rel="stylesheet" href="/components/MenuCard.css">
            <div class="card">
                <img src="${img}" alt="${name}">
                <div class="card-content">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <p class="price">${price}</p>
                </div>
            </div>
            
        `;
    }
}

customElements.define("menu-card", MenuCard);