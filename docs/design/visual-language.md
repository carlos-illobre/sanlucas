# Lenguaje visual – Fundación San Lucas

> Es la paleta y el estilo por defecto de todas las maquetas. Sale de [docs/perfil-fundacion.md](../perfil-fundacion.md), que tiene el detalle de la marca, la voz y las fuentes. La implementación está en `common/common.css`; si algo de este documento cambia, se cambia también ahí.
>
> Está **pendiente de validar con la Fundación**: los colores se tomaron de capturas de su Instagram y el logo es provisional (no tenemos el vector).

## Identidad en una frase
**La educación como puente:** cálida, digna y esperanzadora en la app del postulante, y sobria, clara y confiable en el panel de la Fundación.

## Marca
- **Logo:** `common/brand/logo-provisional.png`. Son manos abiertas en azul y verde que salen de un círculo luminoso con una cruz fina, y el texto "FUNDACIÓN PASTORAL / UNIVERSITARIA SAN LUCAS".
  - Siempre sobre fondo claro; nunca se recrea con fuentes ni se deforma.
  - El símbolo de las manos solo, en chico, puede ir en encabezados.
- **Símbolos religiosos:** la cruz aparece solo dentro del logo. La Fundación no exige afiliación religiosa, así que el flujo del postulante no lleva más iconografía religiosa.

## Color
| Token | HEX | Para qué |
|---|---|---|
| `--sl-verde` | `#207766` | **Acción principal**: botones, link activo, progreso |
| `--sl-azul` | `#3869A1` | Información, selección, gráficos |
| `--sl-azul-noche` | `#203758` | Títulos, texto fuerte, navegación del panel |
| `--sl-verde-agua` | `#3E9080` | Acentos, íconos, anillo de foco (no para texto chico) |
| `--sl-celeste` | `#91BEC6` | Solo decorativo |
| `--sl-bruma` / `--sl-cielo` | `#EEF5F4` / `#EDF2F9` | Fondos suaves de secciones |
| `--sl-fondo` | `#F7F7F7` | Fondo general |
| `--sl-texto` / `--sl-gris` | `#1C1C1C` / `#5F6B73` | Texto principal y secundario |
| Estados | éxito `#1E7B4F`, alerta `#9A6400`, error `#B3261E`, info `#3869A1` | Siempre con texto y con su fondo suave |

Reglas:
- **Calma por defecto:** fondo claro, tarjetas blancas con sombra suave y mucho aire. El color fuerte va en piezas chicas: el botón principal, una pastilla, un logro.
- **"No otorgada" no es un error.** Se comunica con el tono neutro o el azul, nunca con rojo ni con íconos de error. El rojo es solo para errores de validación.
- Contraste AA como mínimo. Nunca se transmite un estado solo con color.

## Tipografía
- **Montserrat** (600–700) en títulos, números grandes y placas. Va en mayúsculas solo en títulos cortos o en placas, como las piezas de la Fundación ("¿QUIÉNES SOMOS?").
- **Inter** para el texto, los formularios y los datos.
- Escala: 32 / 24 / 20 / 17 / 16 / 14 px. **Ningún texto de menos de 14 px.** El cuerpo en el celular es de 16 px.
- Las fuentes están en `common/fonts/` y se cargan desde `common.css`, sin internet.

## Forma y espacio
- Espaciado en múltiplos de 4 px.
- Radios de 8 px (campos), 12 px (tarjetas y botones) y 20 px (hojas).
- **Recursos de marca:**
  - Formas orgánicas curvas, como una gota u hoja que entra desde un borde (`.sl-forma`).
  - Placas de color con texto en mayúsculas (`.sl-placa`).
  - Círculos con anillo fino, para pasos y avatares.
- Íconos de una sola familia: **Lucide** (`common/icons.js`), con trazo de 2 px y tamaños de 20 o 24.

## Fotos e ilustraciones
- Fotos reales, cálidas y en grupo: estudiantes, aulas, encuentros. **Nunca fotos que muestren pobreza** ni que generen lástima.
- En los estados vacíos, ilustraciones lineales con la paleta de la marca.

## Voz
Voseo rioplatense, cercano, esperanzador y digno, con frases cortas. Ejemplos:
- "Tu camino a la universidad empieza acá."
- "¡Vas muy bien! Te quedan 2 pasos."
- "Necesitamos que vuelvas a subir tu constancia: la foto salió borrosa."

El detalle está en [perfil-fundacion.md § Voz y tono](../perfil-fundacion.md#4-voz-y-tono).

## Movimiento
- Corto (120 / 220 / 420 ms), con curva suave y solo con `transform` y `opacity`.
- Respeta `prefers-reduced-motion`.
- Los momentos de logro (como "postulación enviada") pueden tener una animación propia de las manos que se abren.

## Dispositivos
- **Celular:** 390 px de ancho. Es el dispositivo principal del postulante: Android de gama media o baja, una mano, datos móviles limitados. Toques de 48 px o más.
- **Computadora:** 1366 × 768. La usa el panel de la Fundación, y el postulante también puede entrar desde una PC (de la escuela, de un ciber o prestada). Se puede usar todo con el teclado, con las teclas a la vista (`.sl-tecla`).
- La app del postulante es **una sola aplicación**: celular y computadora son la misma pantalla con otra disposición.

## Muestras
`common/sample.html` (captura en `common/sample.png`) · `common/phone-frame.html` · `common/desktop-frame.html`
