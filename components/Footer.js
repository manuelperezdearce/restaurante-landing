// FILE: components/Footer.js
export default function Footer() {
    return `
        <footer class="footer">
            <section class=container-footer>
                <article>
                    <a class="a-logo" href="#/"><img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante"></a>
                    <h1>Restaurante Rico & Sabroso</h1>
                </article>
                <article>
                    <h4>Contacto</h4>
                    <p>
                        Teléfono: +56 9 1234 5678<br>
                        Email: ricoysabroso@restaurante.cl
                        <h4>Dónde encontrarnos</h4>
                    <address>
                        Av. Las Acacias 1234, Local 501, Providencia, Santiago, Chile. Código Postal: 7501234.
                    </address>
                </article>
               
                <article>
                    <h4>Desarrollador por</h5>
                        <p>
                            Manuel Pérez de Arce
                        </p>
                </article>
        </section>
    </footer>
    `;
}