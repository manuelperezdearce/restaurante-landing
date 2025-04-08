
class platoSemana extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const title = this.getAttribute("title");

        // Renderizar el título y un contenedor vacío mientras se cargan los datos
        shadow.innerHTML = `
            <link rel="stylesheet" href="./components/Section-plato-semana.css">
            <section class="container">
                <h4>${title}</h4>
                <article class="plato-semana">
                    <h3>Humita Chilena</h3>
                    <div class="plato-semana-img">
                        <img src="https://i.ytimg.com/vi/g83xeXyrAog/sddefault.jpg?v=601b3fd0" alt="Plato de la Semana">
                        <img src="https://www.gourmet.cl/wp-content/uploads/2012/01/Humitas-e1325692985982.jpg" alt="Plato de la Semana">
                    </div>
                    <p>La humita es un plato tradicional sudamericano, especialmente popular en países como Chile,  Argentina, Perú, Ecuador y Bolivia. Consiste principalmente en una preparación hecha con granos frescos de maíz choclo, los cuales se muelen hasta formar una pasta suave que luego se mezcla con ingredientes como cebolla, albahaca, manteca o aceite, leche y condimentos al gusto. <a href="https://es.wikipedia.org/wiki/Humita" target="_blank" >Ver más</a></p>
                    
                    <audio controls>
                        <source src="./public/humita-audio.mp3" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </article>
            </section>
        `;

        // Cargar los datos dinámicamente
    }
}

customElements.define("plato-semana", platoSemana);