# Sistema de Gestión de Becas – Fundación Pastoral Universitaria San Lucas

Solución para gestionar el ciclo completo de becas universitarias de la Fundación Pastoral Universitaria San Lucas: desde la apertura de una convocatoria hasta el dictamen final, para todas las universidades con las que trabaja la Fundación.

Proyecto desarrollado en el marco de la competencia (estilo hackathon) organizada por la Facultad de Ingeniería de UADE junto con la Fundación.

## Componentes

| Componente | Carpeta | Descripción |
|---|---|---|
| App del postulante | `apps/mobile` | Aplicación móvil para postularse, cargar documentación y seguir el estado de la beca |
| Panel de administración | `apps/admin` | Aplicación web para la Fundación: convocatorias, revisión, socioambiental, informes y dictámenes |
| Backend | `backend` | API, base de datos, autenticación y almacenamiento de documentos |

> El stack tecnológico todavía no está definido. Ver la propuesta en [docs/plan-de-accion.md](docs/plan-de-accion.md#stack-recomendado).

## Documentación

- [Requerimientos conocidos](docs/requerimientos.md): lo que sabemos hasta ahora, preguntas abiertas y supuestos.
- [Plan de acción](docs/plan-de-accion.md): cronograma, roles, entregables y estrategia para la competencia.
- [Perfil de la Fundación](docs/perfil-fundacion.md): misión, valores, marca, voz y lineamientos de interfaz.
- [Lenguaje visual](docs/design/visual-language.md): colores, tipografía, íconos y reglas de la interfaz.

## Maquetas

Se ven funcionando en el [visor de maquetas](https://carlos-illobre.github.io/sanlucas/docs/design/) (celular y computadora).

| Pantalla | Versión | Enlace |
|---|---|---|
| P14 · Documentación | Director de arte (skill): 1 · Lista clara, 2 · De a uno, 3 · La mesa | [Abrir en el visor](https://carlos-illobre.github.io/sanlucas/docs/design/#screen=application-documents&variant=0&device=phone) |
| P14 · Documentación | Prompt directo (v2): A · Tablero, B · Una cosa por vez, C · La ronda (solo celular) | [A](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-a-clasica.html) · [B](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-b-premium.html) · [C](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-c-disruptiva.html) · [Comparativa](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/) |

## Fechas clave (tentativas)

| Fecha | Hito |
|---|---|
| Mar 24/11/2026 | Confirmación de equipos |
| Hasta 8–10/12/2026 | Relevamiento de requerimientos con el referente de la Fundación |
| Dic 2026 – Ene 2027 | Desarrollo y pruebas |
| 18/01/2027 | Retoma de la universidad – checkpoint de avance |
| 1ª semana de feb 2027 | Presentación del producto ante el jurado (asistencia obligatoria de todo el equipo) |
| Feb 2027 | Evaluación por la Fundación (producto hosteado) y premiación |
