// File: views/About.js
export default function About() {
    return `
        <section class="about-container">
            <h2>Acerca de Nosotros</h1>
            <article class="max-width-800">
                <h4>Quienes somos</h5>
                    <p>
                        En Restaurante Rico & Sabroso, celebramos con orgullo el sabor y la tradición de la cocina
                        chilena. Somos un restaurante típico chileno dedicado a rescatar las recetas de antaño, los
                        ingredientes locales y el calor de hogar que caracteriza nuestra mesa.
                        </br>
                        Desde unas empanadas recién horneadas, pasando por un buen pastel de choclo o unas humitas
                        caseras, hasta un enjundioso plato de cazuela o porotos granados, nuestro compromiso es ofrecer
                        una experiencia auténtica, sabrosa y cargada de historia.

                        Nos inspira el campo, la costa, la cordillera y cada rincón de Chile que aporta sabores únicos a
                        nuestra cocina. Atendemos con cariño, como en casa, porque creemos que la comida chilena no solo
                        se saborea: también se comparte.

                        ¡Bienvenidos a nuestro rincón criollo!
                    </p>
            </article>
            <article class="about-fotos-restaurante">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/c3/95/e8/capogrossi-cucina-bar.jpg?w=600&h=-1&s=1" alt="Logo del restaurante">
                
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/c9/23/a0/40-suliko-restaurant.jpg?w=500&h=-1&s=1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9utWeXCrKYcVKlSxyk5sYEVKasaUwckxRCxBrEgNKd6NWlCUrrgnciCwbxthNvbUVRsw&usqp=CAU">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/56/61/58/la-mejor-terraza-en-el.jpg?w=600&h=-1&s=1">
            </article>
            <article class="max-width-800">
                <h4>Dónde encontrarnos</h4>
                <address>
                    Av. Las Acacias 1234, Local 501, Providencia, Santiago, Chile. Código Postal: 7501234.
                </address>
                <iframe loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=New+River+Gorge+Bridge%2C+West+Virginia&output=embed"></iframe>
            </article>
            </section>
    `;
}