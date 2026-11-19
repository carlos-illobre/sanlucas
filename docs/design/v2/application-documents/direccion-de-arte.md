# P14 · Documentación de la postulación: dirección de arte

> Tres variantes para elegir piezas: [A · Tablero de documentos](variante-a-clasica.html) · [B · Una cosa por vez](variante-b-premium.html) · [C · La ronda](variante-c-disruptiva.html) · [comparativa](index.html). Cada HTML tiene selector de estados arriba y el interruptor "Mostrar rótulos de piezas".

## 1. Análisis de la pantalla

- **Job-to-be-done:** "Juntar, a lo largo de varios días y desde un celular modesto, todos los papeles que pide mi convocatoria (los míos y los de mi familia), con la tranquilidad de que cada uno se ve bien y va a ser aceptado."
- **Acción primaria (una sola):** cargar el próximo documento que necesita atención. Primero lo observado y después lo obligatorio pendiente. El botón cambia de texto ("Sacar la foto de nuevo", "Sacar foto", "Revisar y enviar"), pero siempre ocupa el mismo lugar. **Secundarias:** elegir un archivo en vez de la cámara, ver, reemplazar o borrar un documento, filtrar y continuar a la revisión cuando está todo.
- **Jerarquía:** 1) qué hay que corregir y por qué; 2) cuánto falta ("6 de 9 obligatorios listos"); 3) lo próximo que conviene hacer; 4) la lista agrupada por persona (Tuyos, Del hogar, Mamá, Thiago, Luz); 5) los opcionales; 6) ayuda, guardado y privacidad.
- **Estados cubiertos:** vacío (0 de 9), cargando (esqueleto), parcial (principal), cámara o escáner, control de calidad (foto borrosa), permiso pedido (pre-explicación y diálogo del sistema), permiso denegado, sin conexión (cola local), todo listo. Por documento: pendiente, cargado, en revisión, aprobado, observado y, cuando no hay señal, en espera.
- **Datos:** postulante Ailén Belén Fernández; mamá **María de los Ángeles Quiroga Villafañe** (el nombre más largo, para probar el peor caso); hermano Thiago (monotributista); hermana Luz (menor). Son 9 obligatorios y 2 opcionales; la convocatoria cierra el 12/02/2027; la foto pasa de 2,4 MB a 310 KB. **Peor caso de cantidad:** con 0 ítems (grupo familiar sin cargar) se mostraría (no está maquetado) "Primero completá tu grupo familiar para saber qué pedirte", con un enlace a P12. Con 200 ítems (una familia muy grande o muchas páginas), la lista se virtualiza (`FlashList`), los grupos se colapsan por persona y el filtro "Para hacer" queda por defecto.
- **Mapa de capacidades (A y B):**

| Sensor o API | Fricción que elimina | Permiso | Si se niega | Soporte |
|---|---|---|---|---|
| Cámara + detección de bordes | Recortar a mano y fotos torcidas | Just-in-time al tocar "Sacar foto", con una hoja previa que explica para qué | Galería o PDF primero; Ajustes después | Expo `expo-camera` / escáner nativo [VERIFICAR]; web `getUserMedia` (Safari iOS con HTTPS) |
| Control de calidad en el dispositivo | Que la observación llegue días después | No requiere | — | JS/nativo; en web sin OpenCV (pesa demasiado) |
| Compresión y recorte | Gastar datos móviles | No | — | `expo-image-manipulator` / canvas |
| Estado de la red + cola | Perder la foto si se corta la señal | No | — | NetInfo; web `navigator.onLine` + IndexedDB |
| Linterna | Repetir la foto por falta de luz | Incluida en la cámara | Sin botón | `expo-camera` `enableTorch`; no en web iOS [VERIFICAR] |
| Háptica (B) | Mirar la pantalla para confirmar | No | — | `expo-haptics`; no en web iOS |
| Notificaciones | Entrar a chequear si revisaron | Después de subir el primer documento | Correo e insignia en "Avisos" | Expo Notifications; web push en iOS solo como PWA instalada [VERIFICAR] |

Quedan afuera de A y B la biometría, el GPS, el giroscopio, el micrófono y NFC, porque no eliminan pasos en esta pantalla. El sensor de luz no existe en la web, así que la oscuridad se mide sobre la imagen.

## 2. Variante A · Clásica de productividad: "Tablero de documentos"

**Concepto:** una lista de control agrupada por persona, predecible como una planilla bien hecha, con una sola acción fija que siempre dice qué sigue.

| Token | Valor |
|---|---|
| Tipografía | Montserrat 700 solo en títulos; Inter en el resto. Ratio **1,125**: 14 / 16 / 18 / 20 / 23 / 26 px; interlineado 20 / 24 / 24 / 28 / 32 / 32 |
| Grilla | Base 4 pt (`--a-sp-1` a `--a-sp-16`: 4 a 64). Desktop: lateral de 256, contenido fluido, inspector de 400; márgenes de 32 |
| Color | superficie `#FFF`, lienzo `#F7F7F7`, texto `#1C1C1C` / `#5F6B73`, títulos `#203758`, acento único `#207766`, foco `#3E9080`. Estados con texto + ícono + fondo: pendiente gris, cargado azul noche, en revisión `#3869A1`, aprobado `#1E7B4F`, observado `#8A5A00` (ámbar, nunca rojo) |
| Radios / elevación | 4 (chips, teclas) · 6 (botones) · 8 (paneles); sombra solo en hojas y diálogos |
| Movimiento | 120 / 220 / 420 ms, `cubic-bezier(.2,0,0,1)`, solo `transform` y `opacity`; respeta `prefers-reduced-motion` |
| Íconos | Lucide, trazo de 2 px a 20 / 24 (equivale al peso medio de Inter) |
| Toques | 48 px en el celular; controles de 36 px solo en la computadora (con mouse y teclado) |

**Decisiones clave**
- La **barra de acción fija** (A-06) muestra lo próximo en texto y el botón principal a todo el ancho, arriba de la navegación. En el squint test es lo primero que se ve, y lo segundo es el "6 de 9" del resumen.
- La **barra segmentada** (A-02) tiene un segmento por documento obligatorio, y el observado va rayado: el estado no depende solo del color, y la leyenda repite las cantidades en texto.
- **Agrupar por persona** y no por tipo, porque así es como el postulante consigue los papeles ("esto se lo pido a mamá").
- En la computadora, la estructura es maestro-detalle: **tabla + inspector** (A-22, A-24). La fila seleccionada lleva una barra verde de 4 px; las acciones aparecen al pasar el mouse; hay atajos J/K/N/U/Espacio y "/" visibles en el pie (A-23).
- El **pre-permiso** (A-11) sale como hoja propia antes del diálogo del sistema, y el **denegado** (A-12) ofrece primero la galería. Nunca se bloquea.
- **Control de calidad** (A-25): dice qué falló (nitidez), qué está bien (luz, bordes) y cuánto se ahorró (2,4 MB → 310 KB). "Usar esta igual" queda como opción terciaria, porque la regla dice "avisar", no impedir.
- Cifras tabulares en fechas, contadores y tamaños.

**Piezas destacadas:** A-06 barra de acción principal · A-02 resumen de avance · A-22 tabla agrupada por persona · A-24 inspector · A-25 control de calidad.

## 3. Variante B · Premium estilo Apple: "Una cosa por vez"

**Concepto:** un número grande, una sola tarjeta con lo próximo y un escáner que endereza solo; todo lo demás calla.

| Token | Valor |
|---|---|
| Tipografía | Texto: `-apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", Roboto, Inter, system-ui` (SF solo donde está licenciada). Display: Montserrat 700 (marca). Ratio **1,2**: 14 / 17 / 20 / 24 / 29 / 35 / 42 px, con tracking de +0,01 em a −0,035 em según el tamaño |
| Grilla | 8 pt con medio paso de 4; margen del celular de 20; desktop: lateral de 280, lista de 420, detalle fluido |
| Color | un único acento `#207766`; etiquetas `#1C1C1C` / `#5F6B73`; el estado va en el glifo (aprobado `#1E7B4F`, revisión `#3869A1`) y en el texto solo cuando hay que corregir (`#8A5A00`) |
| Forma | esquinas continuas `corner-shape: squircle`: 12 / 18 / 26 / 36, cápsulas de 999 |
| Materiales | `rgba(247,247,247,.72)` + `saturate(180%) blur(20px)` solo en la barra de navegación, la tab bar, la lateral y los controles sobre la cámara |
| Movimiento | springs con `linear()`: *snappy* 320 ms (sobrepasa 3%) y *gentle* 560 ms (sobrepasa 3,5%); en RN, `withSpring({damping: 18, stiffness: 220})` [VERIFICAR] |
| Íconos | Lucide con trazo de 1,5 px (fino, a la par del texto regular del sistema) |

**Decisiones clave**
- La jerarquía se resuelve con **tamaño y peso**: "6 de 9" en 42 px domina sin color; el único verde fuerte es el botón de la tarjeta "Lo próximo" (B-04).
- El **large title colapsa** al hacer scroll en la barra translúcida (B-01, B-02), y el contenido de lectura nunca queda bajo material.
- La **hoja con detents** (B-07): en el detent medio elegís entre Escanear y Galería; en el grande aparece el ejemplo "así se ve bien / así no se lee". El pre-permiso (B-09) y el denegado (B-09b) son la misma hoja transformada, sin cambiar de contexto.
- **Escáner** (B-08) con cuadrilátero detectado y disparo automático, y háptica en tres momentos (B-10): hoja detectada, advertencia y éxito.
- En la computadora, **tres columnas** al estilo Mail o Archivos: lateral translúcida, lista inset y detalle con lienzo de páginas. El documento pendiente se convierte en zona para soltar el archivo (B-17).
- Nada de sombras sobre las tarjetas: blanco sobre `#F7F7F7` y separadores de 0,5 px. Lo sofisticado es lo que no está.

**Piezas destacadas:** B-03 avance protagonista · B-04 tarjeta de lo próximo · B-07 hoja con detents · B-08 escáner · B-05 tab bar flotante.

**Factibilidad:** el blur en Android de gama baja es caro; se cae a color sólido [VERIFICAR]. `corner-shape` solo funciona en Chromium reciente; en RN, `borderCurve: 'continuous'` funciona en iOS y en Android hace falta una librería.

## 4. Variante C · Disruptiva: "La ronda"

**Concepto:** los papeles no se cargan, se juntan en ronda: un círculo de manos (el símbolo del logo hecho interfaz) que se enciende a medida que cada integrante de la familia aporta lo suyo, con la cámara como única puerta.

**Sistema:** luz sobre noche. Las unidades son la *luz* (de 0 a 1: respira, brilla cálido o está encendida) y la *distancia al centro*. Usa Instrument Serif para hablar e Inter para rotular, y un ritmo de respiración de 3,2 s para lo pendiente. El sonido (WebAudio real) y la háptica funcionan como lenguaje: un toc grave, dos notas que suben, una que baja y un acorde que se abre.

**Capítulos (prototipo navegable):** C-01 la ronda de manos · C-02 visor universal que reconoce qué papel es y de quién · C-03 nivel de mesa (el giroscopio dispara solo cuando el celular está paralelo y quieto; hay un control "Simular inclinación" y otro para usar el sensor real) · C-04 pasar la mano a un familiar por QR o WhatsApp, con su vista web sin instalar nada (C-04b) y "la tarde de los papeles" (C-04c) · C-05 declaración jurada de ingresos informales contada con la voz y firmada con el dedo · C-06 la observación como conversación con una persona de la Fundación · C-07 envío ritual: mantener apretado y las manos se abren · C-08 tabla de sonido y háptica.

### Restricciones desafiadas

| Restricción rota | Origen | Qué opción abre |
|---|---|---|
| El postulante es el único usuario | Requerimiento (rules.md "Quién la usa") | Que la familia cargue sus propios papeles: es lo que más demora el paso hoy |
| Cada documento se elige y se carga por separado | Requerimiento (regla 3) | Una sola puerta: la cámara reconoce el papel y propone a quién pertenece |
| La declaración jurada es un archivo que hay que conseguir | Requerimiento (regla 1) | Generar el documento en la app, con la voz, para quien vive de changas |
| "Observado" es un estado con un motivo | Requerimiento (regla 6) | Una conversación con nombre propio; obliga a pensar un canal de mensajes en el panel |
| P14, P15 y P16 son pantallas separadas | Especificación de pantallas | Que enviar sea un gesto ritual dentro de la misma metáfora |
| El avance se muestra como "5 de 8" | Requerimiento (regla 8) | El progreso como luz y por persona: quién falta, no qué falta |
| El logo nunca se recrea | Marca (visual-language) | El símbolo de las manos como sistema de interfaz propio del producto |
| Calma por defecto y fondo claro | Constitución visual | Un modo noche cálido, íntimo, para usar de noche en casa |
| Ningún texto de menos de 14 px; toques de 48 | Accesibilidad / constitución | Rótulos dentro del círculo; obliga a decidir si el círculo es decorado o control |
| Montserrat + Inter | Marca | Una voz editorial (serif) para un trámite que es un hito de vida |
| El giroscopio y la voz no tienen lugar | Convención / prompt A-B | Inclinación y voz como input principal |
| Una sola app RN | Stack | Una página web liviana para familiares, sin cuenta ni instalación |
| Consentimiento único del postulante | Ley 25.326 tal como se pensó | Consentimiento por integrante, más fiel a la ley, para los datos de terceros |

## 5. Inventario de piezas

| ID | Pieza | Var. | Dependencias para usarla afuera | Compatible con | Factibilidad |
|---|---|---|---|---|---|
| A-01 | Barra superior con migas | A | `--a-fs-*`, `--a-appbar`, íconos chevron y ayuda | B (reemplaza B-01 si se quiere sobriedad) | Trivial |
| A-02 | Resumen de avance segmentado | A | Tokens de estado, `isReady()` | B, C | Trivial |
| A-03 | Filtros por estado | A | Contadores por estado | B | Trivial |
| A-04 | Aviso de observación | A | `.notice.obs` | B | Trivial |
| A-05 | Grupo por persona | A | Datos del grupo familiar (P12) | B, C | Depende del modelo de datos |
| A-06 | Barra de acción principal | A | `nextDoc()` | B, C | Trivial; ojo con el teclado en Android |
| A-07 | Navegación inferior | A | — | B | Trivial |
| A-08 | Fila de documento | A | Chips de estado | B | Trivial |
| A-09 | Visor de cámara con guía | A | Cámara | B, C | expo-camera |
| A-10 | Hoja para elegir cómo cargar | A | Selector de documentos | B | expo-document-picker |
| A-11 | Pre-permiso de cámara | A | — | B, C | Trivial |
| A-12 | Permiso denegado con alternativa | A | `Linking.openSettings()` | B, C | Trivial |
| A-13 | Aviso sin conexión | A | NetInfo + cola | B, C | Cola offline: esfuerzo medio |
| A-14 | Esqueleto de carga | A | — | B | Trivial |
| A-15 | Estado vacío | A | Ilustración lineal | B | Trivial |
| A-16 | Aviso de completo | A | — | B | Trivial |
| A-17 | Detalle del documento (hoja) | A | Vista previa con URL temporal | B | Storage de Supabase con links firmados |
| A-18 | Navegación lateral de pasos | A | Estado por sección | B | Trivial |
| A-19 | Encabezado con migas y avance | A | A-02 | B | Trivial |
| A-20 | Barra de comandos | A | Búsqueda local | B | Trivial |
| A-21 | Zona para soltar archivos | A | Drag and drop (solo web) | B | react-native-web: con un div nativo [VERIFICAR] |
| A-22 | Tabla agrupada por persona | A | — | — | En RN web conviene una tabla HTML |
| A-23 | Pie con atajos y continuar | A | Atajos de teclado | B | Solo web |
| A-24 | Inspector del documento | A | A-17 | B | Trivial |
| A-25 | Control de calidad | A | Análisis de nitidez y luz | B, C | Esfuerzo medio (nativo o worklet) |
| B-01 | Barra de navegación translúcida | B | Material, scroll | A | expo-blur; caro en Android bajo |
| B-02 | Large title colapsable | B | Scroll animado | A | Reanimated, esfuerzo medio |
| B-03 | Avance protagonista | B | Montserrat display | A, C | Trivial |
| B-04 | Tarjeta de lo próximo | B | `next()` | A, C | Trivial |
| B-05 | Tab bar flotante | B | Material | A | Medio |
| B-06 | Lista agrupada inset | B | Squircle | A | Trivial |
| B-07 | Hoja con detents | B | Springs | A, C | `@gorhom/bottom-sheet` |
| B-08 | Escáner con detección de bordes | B | Escáner nativo | A, C | Build de desarrollo, no Expo Go [VERIFICAR] |
| B-09 / B-09b | Pre-permiso y denegado en la hoja | B | B-07 | A | Trivial |
| B-10 | Revisión de calidad | B | A-25 (misma lógica) | A | Medio |
| B-11 | Aviso sin conexión | B | Cola | A | Medio |
| B-12 | Estado vacío | B | — | A | Trivial |
| B-13 | Cierre completo | B | Spring | A, C | Trivial |
| B-14 | Barra lateral translúcida | B | Material | A | Solo web/desktop |
| B-15 | Columna de lista | B | B-06 | A | Trivial |
| B-16 | Barra de herramientas | B | — | A | Trivial |
| B-17 | Zona para soltar | B | Drag and drop | A | Como A-21 |
| B-18 | Lienzo de vista previa | B | Miniaturas | A | Trivial |
| B-19 | Panel de estado y acciones | B | — | A | Trivial |
| C-01 | La ronda de manos | C | SVG generado, datos por persona | A, B como widget de avance | SVG en RN: `react-native-svg`; esfuerzo medio |
| C-02 | Visor universal que reconoce el papel | C | Clasificador (OCR + reglas o modelo) | A, B como atajo | Alto: ML Kit Text Recognition + reglas; modelo en servidor |
| C-03 | Nivel de mesa con disparo por inclinación | C | expo-sensors (DeviceMotion) | B-08 | Medio; en Safari web pide permiso con gesto [VERIFICAR] |
| C-04 / C-04b | Pasar la mano y vista web del familiar | C | Link firmado por integrante, página web liviana | A, B | Alto: cambia el modelo de permisos y el consentimiento |
| C-04c | La tarde de los papeles | C | Calendario y WhatsApp (compartir nativo) | A, B | Bajo |
| C-05 | Declaración jurada por voz | C | Transcripción y generación de PDF | A, B | Alto; requiere validación legal de la Fundación |
| C-06 | Observación como conversación | C | Mensajes en el panel de administración | A, B | Medio-alto (afecta otro módulo) |
| C-07 | Envío ritual | C | Gesto de mantener apretado | B | Bajo; agregar una alternativa accesible |
| C-08 | Lenguaje de sonido y háptica | C | WebAudio / expo-av + expo-haptics | A, B | Bajo |

## 6. Recomendación del director de arte

Elegiría **B como base**, porque es la que mejor encarna la idea de "digno, no asistencialista": un número grande, una sola tarea y nada que suene a planilla para un pibe que hace esto por primera vez en su familia. Le agregaría el rigor de A donde B se queda corto: la barra de acción fija **A-06** (en una mano, en el colectivo, el botón tiene que estar siempre en el mismo lugar), el resumen segmentado **A-02** debajo del número de B-03, para que el avance no dependa solo de una cifra, y en la computadora la **tabla con inspector A-22 / A-24** con atajos, porque en un ciber se trabaja con mouse y apuro. Pediría al Maquetador que se lleve tres ideas de C aunque no adopte su estética: **C-04 "pasar la mano"** (es la que más reduce el tiempo real del paso, que es esperar los papeles de otros), **C-05 la declaración jurada por voz** para los ingresos informales y **C-06 la observación como mensaje de una persona**. Las tres piden decisiones de la Fundación, y vale la pena llevárselas al referente antes del 10/12.

## 7. Supuestos

1. La Fundación puede revisar documentos **antes** de que se envíe la postulación (por eso aparecen "en revisión", "aprobado" y "observado" en el borrador). Si solo revisa después del envío, esos estados se ven en P17 y P18 y no en P14.
2. "Listo" = cargado, en revisión o aprobado. Lo observado y lo que espera señal no cuenta como listo.
3. La factura de un servicio se pide una sola vez por hogar, no por persona.
4. La foto borrosa se puede **subir igual** (la regla dice "avisar", no bloquear).
5. Un documento aprobado no se puede borrar, pero sí reemplazar.
6. La app se identifica en el sistema como "San Lucas".
7. Pantalla de referencia de la computadora: 1440 × 900 (el lenguaje visual dice 1366 × 768; el layout de A y B entra en ambas).
8. Límite de archivo de 10 MB y compresión a ~300 KB por página (a validar con el backend).

### Ideas fuera de alcance (A y B)
- **Continuar en el celular desde la PC** con un QR, para sacar la foto con la cámara del teléfono cuando la computadora del ciber no tiene.
- **Recibir desde "Compartir"** de WhatsApp (share intent) para cargar directamente la foto que mandó la mamá. Expo necesita un config plugin [VERIFICAR]; Web Share Target solo funciona como PWA instalada en Android.
- **Precargar los documentos del año anterior** en la renovación, para no tener que cargarlos de nuevo si siguen vigentes.
