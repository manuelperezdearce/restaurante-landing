export default function Register() {
    return `
    <section class="container">
        <form class="form" id="register-form" action="/register" method="POST">
            <h2>Registrar</h2>
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required maxlength="50">
            </div>
            <div class="form-group">
                <label for="lastname">Apellido:</label>
                <input type="text" id="lastname" name="lastname" required maxlength="50">
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required maxlength="100">
            </div>
            <div class="form-group">
                <label for="telephone">Teléfono:</label>
                <input type="tel" id="telephone" name="telephone" required pattern="[0-9]{9,15}" maxlength="15" placeholder="Ej: 912345678">
            </div>
            <div class="form-group">
                <label for="dnitype">Tipo de Documento:</label>
                <select id="dnitype" name="dnitype" required>
                    <option value="">Seleccione una opción</option>
                    <option value="0">DNI</option>
                    <option value="1">RUT</option>
                    <option value="2">Cédula</option>
                    <option value="3">Pasaporte</option>
                </select>
            </div>

            <div class="form-group">
                <label for="dninumber">Número de Documento:</label>
                <input type="text" id="dninumber" name="dninumber" required maxlength="20">
            </div>

            <div class="form-group">
                <label for="birthdate">Fecha de Nacimiento:</label>
                <input type="date" id="birthdate" name="birthdate" required>
            </div>

            <div class="form-group">
                <label>Género:</label>
                <div class="form-group-option">
                 <input type="radio" id="gender-male" name="gender" value="male" required>
                <label for="gender-male">Masculino</label>
            </div>
            <div class="form-group-option">
                <input type="radio" id="gender-female" name="gender" value="female">
                <label for="gender-female">Femenino</label>
            </div>
            <div class="form-group-option">
                <input type="radio" id="gender-other" name="gender" value="other">
                <label for="gender-other">No binario / Prefiero no indicar</label>
            </div>
            </div>

            <div class="form-group">
                <label for="comments">Comentarios:</label>
                <textarea id="comments" name="comments" rows="4" maxlength="300" placeholder="Agrega algún comentario adicional..."></textarea>
            </div>

            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required minlength="6" maxlength="32">
            </div>

            <div class="form-group">
                <label for="confirmpassword">Confirmar Contraseña:</label>
                <input type="password" id="confirmpassword" name="confirmpassword" required minlength="6" maxlength="32">
            </div>
            
            <button class="primary-button" type="submit">Registrar</button>
        </form>
    </section>
    `;
}