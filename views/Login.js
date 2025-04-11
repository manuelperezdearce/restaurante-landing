export default function About() {
    return `
    <section class="container">
            <form class="form" id="login-form" action="/login" method="POST">
                <h2>Iniciar Sesión</h2>
                <div class="form-group">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required>
                </div>

<div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
</div>
                <button type="submit">Ingresar</button> 
                <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
            </form>
            </section>
    `;
}