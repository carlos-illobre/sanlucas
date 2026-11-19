# Sistema de Gestión de Becas – Fundación Pastoral Universitaria San Lucas

## Maquetas

**[Abrir el visor de maquetas](https://carlos-illobre.github.io/sanlucas/docs/design/)** (celular y computadora)

### P14 · Documentación de la postulación

**Versión 1: director de arte con skill** (se navega en el visor)
- [1 · Lista clara](https://carlos-illobre.github.io/sanlucas/docs/design/#screen=application-documents&variant=0&device=phone)
- [2 · De a uno](https://carlos-illobre.github.io/sanlucas/docs/design/#screen=application-documents&variant=1&device=phone)
- [3 · La mesa (audaz)](https://carlos-illobre.github.io/sanlucas/docs/design/#screen=application-documents&variant=2&device=phone)

**Versión 2: prompt directo** (abre cada variante por separado)
- [A · Tablero de documentos](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-a-clasica.html), celular y computadora
- [B · Una cosa por vez](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-b-premium.html), celular y computadora
- [C · La ronda](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/variante-c-disruptiva.html), solo celular
- [Comparativa de las tres](https://carlos-illobre.github.io/sanlucas/docs/design/v2/application-documents/)

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

## Fechas clave (tentativas)

| Fecha | Hito |
|---|---|
| Mar 24/11/2026 | Confirmación de equipos |
| Hasta 8–10/12/2026 | Relevamiento de requerimientos con el referente de la Fundación |
| Dic 2026 – Ene 2027 | Desarrollo y pruebas |
| 18/01/2027 | Retoma de la universidad – checkpoint de avance |
| 1ª semana de feb 2027 | Presentación del producto ante el jurado (asistencia obligatoria de todo el equipo) |
| Feb 2027 | Evaluación por la Fundación (producto hosteado) y premiación |
