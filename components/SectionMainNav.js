class SectionMainNav extends HTMLElement {
    constructor() {
        super();

        // Renderizar el contenido directamente en el DOM principal
        this.innerHTML = `
            <link rel="stylesheet" href="./components/SectionMainNav.css">
            <nav class="nav container">
                <ul class="nav-list">
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#bebidas">Bebidas</a></li>
                    <li><a href="#promociones">Promociones</a></li>
                    <li><a href="#platodelasemana">Plato de la Semana</a></li>
                    <li><a href="#videos">Vídeos Relacionados</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("section-main-nav", SectionMainNav);



