## Control 5 - Programación Web I

**Tema:** Estilización avanzada de formularios y control de herencia en CSS  
**Tecnologías:** HTML y CSS

### Objetivos:
- Mejorar visualmente los formularios de acceso y registro mediante reglas CSS.
- Aplicar selectores CSS adecuados para distintos elementos de formulario.
- Comprender la herencia y la cascada en CSS para lograr una presentación coherente.
- Prevenir colisiones de estilos durante la construcción de la página web.

### Requisitos Técnicos:
- Código CSS claro, estructurado y comentado.
- Uso correcto de selectores: etiqueta, clase, identificador y atributo.
- Aplicación práctica de herencia, cascada y especificidad.
- Estandarización visual en todo el sitio, con excepciones controladas.

### Actividades a realizar:

#### 1. Estilización de formularios (acceso y registro)
- [x] Incluir fragmentos de código CSS dentro del HTML o como hoja externa para aplicar estilos a:
  - Etiquetas `<label>` y campos `<input>`, `<select>`, `<textarea>`.
- [x] Utilizar distintos tipos de selectores:
  - **Selector de tipo** para aplicar estilo base a todos los `input`.
  - **Selector de clase** para inputs específicos como `.form-control`.
  - **Selector de ID** para secciones únicas como `#login-form`.
  - **Selector de atributo** para dar estilo a elementos según su `type`, como `input[type="email"]`.
- [x] Explicar la razón del uso de cada tipo de selector en función de su especificidad y reutilización.

#### 2. Herencia y cascada en la sección “Quiénes somos”
- [ ] Revisar el CSS aplicado a encabezados y párrafos de la sección.
- [ ] Explicar cómo se aplican los conceptos de:
  - **Herencia**: cómo ciertos estilos como `font-family` o `color` se transmiten.
  - **Cascada**: cómo se resuelven conflictos entre reglas CSS según su origen y especificidad.
- [ ] Especificar cómo estandarizar el diseño del sitio (por ejemplo, tipografía general) y cómo crear una excepción para la sección "Quiénes somos".
- [ ] Incluir ejemplos de código para:
  - Estilos generales heredables.
  - Sobrescritura de estilos específicos mediante clases o ID en “Quiénes somos”.

#### 3. Prevención de colisiones de estilos
- [ ] Describir una técnica para evitar colisiones de estilos al trabajar con diferentes secciones (como formularios, tablas, listas, etc.).
- [ ] Argumentar el uso de:
  - **Nombres de clase específicos y contextualizados** (por ejemplo, `.form-login input`).
  - **Encapsulamiento mediante estructuras de componentes o BEM**.
  - **Uso del Scope o Shadow DOM en componentes web si aplica**.
- [ ] Incluir fragmentos de CSS que muestren cómo evitar que una regla general afecte a un componente específico no deseado.


## Control 4 - Programación Web I

**Tema:** Aplicación de estilos visuales con CSS  
**Tecnologías:** HTML y CSS

### Objetivos:
- Aplicar reglas CSS para mejorar el diseño visual de una página web.
- Incorporar hojas de estilo utilizando los métodos `@import` y `<link>`.
- Evaluar compatibilidad entre navegadores y tecnologías CSS3.
- Diseñar estilos personalizados para listas, tablas y secciones del sitio.

### Requisitos Técnicos:
- Código ordenado y comentado.
- Separación clara entre contenido (HTML) y presentación (CSS).
- Uso correcto de métodos de incorporación de hojas de estilo.
- Aplicación del modelo de formato visual en listas y tablas.

### Actividades a realizar:

#### 1. Infografía sobre compatibilidad con CSS3
- [x] Elaborar una infografía que muestre cuál navegador, según tu criterio, ofrece **mayor compatibilidad con CSS3**.
- [x] Incluir en la infografía características clave como: soporte para selectores avanzados, animaciones, flexbox/grid, entre otros.
- [x] Basarse en fuentes confiables y recursos de profundización entregados.

#### 2. Estilo para sección “Quiénes somos”
- [x] Incluir un bloque de reglas CSS dentro del documento HTML para cambiar el estilo visual de esta sección.
- [x] Modificar al menos los estilos de encabezados (`h2`, `h3`, etc.) y párrafos (`p`), como color, tamaño de fuente, margen, etc.
- [x] Explicar brevemente el procedimiento seguido para aplicar los estilos y su ubicación dentro del documento HTML.

#### 3. Estilos con `@import` para listas no enumeradas
- [x] Crear una hoja de estilo externa con reglas CSS para dar formato a la lista no ordenada de la sección **Promociones especiales**.
- [x] Incorporar dicha hoja utilizando `@import` dentro de una hoja de estilo principal o dentro del documento HTML.
- [x] Aplicar estilo a elementos como `ul`, `li`, y establecer colores, íconos personalizados, tipografía, entre otros.

#### 4. Estilos con `<link>` para tablas
- [x] Crear una segunda hoja de estilo para dar formato a las **tablas** de las secciones Platos, Bebidas y Postres.
- [x] Vincular esta hoja al documento HTML utilizando la etiqueta `<link>` dentro del `<head>`.
- [x] Personalizar bordes, espaciado, colores de fondo alternados, tipografía y alineación de texto en las tablas.

#### 5. Descripción del modelo de formato visual aplicado
- [x] Redactar una breve explicación sobre cómo aplicaste el **modelo de formato visual** (cajas, márgenes, bordes, paddings y contenido) a las listas y tablas.
- [x] Mencionar cómo se aplicaron estas propiedades en relación con los elementos HTML y el impacto visual logrado.


## Control 3 - Programación Web I

**Tema:** Desarrollo de una Landing Page  
**Tecnologías:** HTML, CSS, JavaScript

### Objetivos:
- Incorporar sección con video embebido desde YouTube usando iframe.
- Crear formulario de acceso con controles de entrada.
- Diseñar formulario de registro de usuarios con validación básica.
- Aplicar etiquetas semánticas, marcos flotantes, y formularios HTML.

### Requisitos Técnicos:
- Código ordenado y comentado.
- Uso correcto de etiquetas semánticas (header, nav, main, footer, section, etc.).
- Aplicación de CSS para estructura, colores, tipografías, márgenes y adaptabilidad básica.

### Actividades a realizar:

#### 1. Sección “Videos relacionados”
- [X] Agregar una nueva sección al final de la página llamada **"Videos relacionados"**.
- [X] Incluir un **iframe** para reproducir un video de YouTube.
- [X] El video debe mostrar la preparación de un plato típico o de la zona geográfica de origen.

#### 2. Formulario de acceso a la página (Login)
- [x] Crear un formulario con los siguientes campos:
  - [x] Nombre de usuario (input tipo `text`)
  - [x] Contraseña (input tipo `password`)
  - [x] Botón para enviar el formulario (`submit`)
- [x] Incluir una breve descripción de las etiquetas (`<form>`, `<input>`, etc.) y los atributos utilizados (`type`, `name`, `required`, etc.).

#### 3. Formulario de registro de nuevos usuarios
- [x] Crear un formulario que solicite los siguientes datos:
  - [x] Nombre y Apellido (input tipo `text`)
  - [x] Tipo de documento (select con opciones: **DNI, RUT, Cédula, Pasaporte**)
  - [x] Número de documento (input tipo `text` o `number`)
  - [x] Fecha de nacimiento (input tipo `date`)
  - [x] Sexo (radio buttons: Masculino, Femenino)
  - [x] Correo electrónico (input tipo `email`)
  - [x] Teléfono móvil (input tipo `tel`)
  - [x] Comentarios (textarea)
- [x] Aplicar controles de entrada:
  - [x] Atributos como `required`, `maxlength`, `pattern`, etc.
- [x] Describir brevemente las etiquetas y atributos usados para cada campo.

## Control 2 - Programación Web I

**Tema:** Desarrollo de una Landing Page  
**Tecnologías:** HTML, CSS, JavaScript

### Objetivos:
- Agregar nuevas secciones con distintos tipos de contenido HTML.
- Implementar elementos multimedia (tablas, listas, imágenes).
- Preparar la página para futuras interacciones con JavaScript.

### Requisitos Técnicos:
- Código ordenado y comentado.
- Uso correcto de etiquetas HTML según tipo de contenido.
- Inclusión de tablas, listas, secciones y estilos básicos.

### Actividades a realizar:

#### 1. Secciones adicionales del menú
- [x] Crear sección “Platos” con tabla de nombre, descripción y precio.
- [x] Crear sección “Bebidas” con otra tabla.
- [x] Crear sección “Postres” con tabla respectiva.
- [x] Todas las tablas deben tener encabezados y estilo básico aplicado.

#### 2. Promociones especiales
- [x] Agregar sección “Promociones especiales”.
- [x] Incluir una **lista no ordenada** con al menos 3 promociones vigentes.

#### 3. Especialidades de la casa
- [x] Incluir una **lista ordenada** con los 5 platos más representativos del restaurante.
- [x] Añadir una breve descripción para cada uno.


## Control 1 - Programación Web I

**Tema:** Desarrollo de una Landing Page  
**Tecnologías:** HTML y CSS

### Objetivos:
- Crear una página web estática (Landing Page) usando HTML semántico.
- Aplicar estilos con CSS para mejorar el diseño visual y la experiencia de usuario.

### Requisitos Técnicos:
- Código ordenado y comentado.
- Uso correcto de etiquetas semánticas (`header`, `nav`, `main`, `footer`, `section`, etc.).
- Aplicación de CSS para estructura, colores, tipografías, márgenes y adaptabilidad básica.

### Actividades a realizar:

#### 1. Estructura básica HTML
- [x] Definir estructura semántica del sitio: encabezado, navegación, contenido principal y pie de página.
- [x] Incluir sección “Quiénes somos” con información del restaurante.
- [x] Incluir sección “Especialidades de la casa” usando listas.
- [x] Crear sección “Plato de la semana” con descripción destacada.

#### 2. Aplicación de estilos CSS
- [x] Crear hoja de estilo externa y vincularla con `<link>`.
- [x] Aplicar estilos visuales a cada sección (colores, márgenes, tipografías).
- [x] Usar selectores de clase y etiqueta para definir reglas específicas.


