# Plan de acción para la competencia

> Estrategia del equipo. Los requerimientos del producto están en [requerimientos.md](requerimientos.md).

## 1. Qué hace ganar esta competencia

| Dato de la reunión | Qué significa para nosotros |
|---|---|
| Eligen la Fundación y la universidad (jurado mayormente no técnico) | Gana la solución que mejor resuelve su problema, no la más sofisticada. |
| La Fundación prueba el sistema sola, con un link hosteado | La facilidad de uso para gente no técnica pesa muchísimo. |
| Después la Fundación se ocupa del hosting y del mantenimiento | Barato, simple de hostear y fácil de mantener es una gran ventaja. |
| Cada equipo tiene un becado como product owner | Es nuestro mejor recurso para entender el problema. |
| El sistema es para todas las universidades | Multi-universidad y configurable por convocatoria desde el día 1. |
| La presentación es "la venta de la solución" | Pitch con historia, demo impecable y números concretos. |
| Datos personales muy sensibles | Hacerlo bien es un diferencial y una garantía para la Fundación. |

**Posicionamiento:** *"No es solo una app de postulación: es la herramienta que la Fundación puede operar sola, a bajo costo, para todas sus universidades."*

## 2. Cronograma

### Fase 0 – Hasta el martes 24/11: armar el equipo
- [ ] Cerrar un equipo de 5 con perfiles complementarios (idealmente interdisciplinario).
- [ ] Confirmar que los 5 pueden estar en la presentación de la 1ª semana de febrero (obligatorio) y pedir que se fije la fecha.
- [ ] Verificar quiénes tienen materias pendientes para el 1er cuatrimestre 2027.
- [ ] Anotarse en la planilla que se envía el martes.
- [ ] Preparar las preguntas para el referente (ver [requerimientos.md](requerimientos.md#10-preguntas-abiertas)).

### Fase 1 – 25/11 → 10/12: relevamiento (la fase más importante)
- [ ] 2 o 3 sesiones con el referente y, si se puede, con quien evalúa postulaciones o hace socioambientales.
- [ ] Conseguir materiales reales: formularios, planillas, ficha socioambiental, modelos de informe y dictamen, documentación exigida.
- [ ] Mapear el proceso actual y sus problemas.
- [ ] Definir usuarios, historias de usuario y prioridades (MoSCoW).
- [ ] Prototipo clicable (Figma) validado por el referente antes del 10/12.
- [ ] Modelo de datos y estados de la postulación.

### Fase 2 – Semana del 7/12: arranque técnico
- [ ] Repositorio, CI/CD, ambientes de desarrollo y staging.
- [ ] URL de staging funcionando desde la primera semana.
- [ ] Tablero de tareas y daily corta.

### Fase 3 – 14/12 → ~25/1: desarrollo en sprints de 1 semana

| Sprint | Fechas aprox. | Objetivo |
|---|---|---|
| S1 | 14–20/12 | Login y roles, universidades, ABM de convocatorias con requisitos configurables |
| S2 | 21/12–3/1 | Postulación paso a paso en la app, con borrador guardado |
| S3 | 4–10/1 | Carga de documentos, checklist por convocatoria, revisión y observaciones |
| S4 | 11–17/1 | Evaluación socioambiental, trazabilidad, notificaciones |
| S5 | 18–24/1 | Informe y dictamen (PDF), dashboard, renovaciones precargadas |
| — | 18/1 | Checkpoint con la universidad: producto deployado y demo de 5 minutos |

Demo al referente al final de cada sprint. Las fiestas rinden menos: planificarlo.

### Fase 4 – ~25/1 → presentación: estabilizar y preparar la venta
- [ ] Congelar features (~25/1): solo bugs, UX y pulido.
- [ ] Pruebas de aceptación con el referente y con alguien que nunca vio el sistema.
- [ ] Datos de demo realistas y anonimizados.
- [ ] Documentación y pitch; al menos 3 ensayos con cronómetro.

### Fase 5 – Presentación → evaluación
- [ ] Guardia para corregir problemas mientras la Fundación prueba.
- [ ] Guía de prueba paso a paso y usuarios de prueba por rol.

## 3. Diferenciales de producto

1. **Escaneo del DNI** (código PDF417 del frente del DNI argentino).
2. **Modo campo para la socioambiental**: formulario en celular/tablet, sin conexión, con fotos y geolocalización.
3. **Convocatorias configurables sin programar**: requisitos, documentos y fechas por universidad.
4. **Renovación en un clic** con datos del año anterior.
5. **Pensado para postulantes de bajos recursos**: celulares modestos, fotos comprimidas, borradores, lenguaje simple.
6. **Informe y dictamen automáticos** en PDF + dashboard de métricas.
7. **Notificaciones** por email y push.
8. **Opcional con IA, siempre con revisión humana**: validar/clasificar documentos o resumir la socioambiental. La IA nunca decide una beca.

**Datos personales:** consentimiento explícito (Ley 25.326), acceso por roles, registro de accesos, documentos con links temporales, cifrado, backups, mínimo de datos y política de retención.

## Stack recomendado

Prioridad: bajo costo, una sola tecnología, fácil de traspasar. *(A confirmar por el equipo.)*

- **App:** React Native con Expo.
- **Panel de administración:** Next.js (React).
- **Backend:** Supabase (Postgres, auth, storage, RLS) o NestJS + Postgres.
- Todo en **TypeScript**, monorepo, con **Docker** como alternativa de hosting.
- Presentar el **costo mensual estimado** del hosting en el pitch.

## 4. Roles (equipo de 5)

| Rol | Responsabilidades |
|---|---|
| Líder técnico / backend | Arquitectura, modelo de datos, seguridad, API |
| Mobile | App del postulante, escaneo de DNI, modo sin conexión |
| Frontend del panel | Panel de administración, dashboards, informes |
| QA / DevOps | CI/CD, deploys, testing, datos de demo, guía de pruebas |
| Producto / UX / docs | Vínculo con el referente, prototipos, manuales, pitch |

## 5. Entregables
- [ ] Producto hosteado, con usuarios de prueba por rol.
- [ ] Repositorio con README, guía de instalación/deploy y `.env.example`.
- [ ] Documentación de arquitectura, modelo de datos y API.
- [ ] Manuales por rol (PDF y videos cortos).
- [ ] Evidencia de testing.
- [ ] Plan de traspaso: hosting, costos y backups.
- [ ] Política de datos personales y texto de consentimiento.

## 6. Pitch (8–10 min)
1. El problema con una historia real (el becado del equipo, con su consentimiento).
2. La solución en una frase y los 3 diferenciales principales.
3. Demo en vivo de punta a punta, con video de respaldo.
4. Impacto: horas ahorradas, papel eliminado, universidades gestionables.
5. Sostenibilidad: costo, seguridad y traspaso.
6. Cierre: "La Fundación puede usarlo desde marzo".

## 7. Riesgos

| Riesgo | Mitigación |
|---|---|
| Verano y vacaciones | Calendario de ausencias y sprints con capacidad real |
| Scope creep | MVP cerrado al 10/12; diferenciales por prioridad |
| Alguien no puede ir a la presentación | Confirmar la fecha antes de arrancar |
| La Fundación prueba tarde | Staging desde la semana 1 y demos semanales |
| Fallos en la demo | Video de respaldo, datos estables, ensayos |
| Datos personales | Solo datos ficticios durante el desarrollo |
