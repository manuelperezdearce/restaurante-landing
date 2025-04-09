class SectionVideos extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const title = this.getAttribute("title");
        const dataURL = this.getAttribute("dataURL");

        // Renderizar el título y un contenedor vacío mientras se cargan los datos
        shadow.innerHTML = `
            <link rel="stylesheet" href="./components/SectionVideos.css">
            <section class="container">
                <h4>${title}</h4>
                <div class="cards-container">
                <iframe src="https://www.youtube.com/embed/kPJKlSOhnqY" title="Humitas. Cómo hacer la receta perfecta para obtener las mejores humitas chilenas." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5>Humitas. Cómo hacer la receta perfecta para obtener las mejores humitas chilenas.</h5>
                </div>
            </section>
        `;

    }
}
customElements.define("section-videos", SectionVideos);



