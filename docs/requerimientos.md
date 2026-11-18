# Requerimientos conocidos

**Estado:** borrador inicial · **Fuente:** reunión informativa del 18/11/2026 (Juan Alberto Bulfon, UADE) · **Última actualización:** 18/11/2026

> La Fundación todavía no compartió los requerimientos formales: se entregarán una vez confirmados los equipos, durante el relevamiento con el referente (hasta el 8–10/12). Este documento separa lo **confirmado en la reunión** de lo **supuesto** y de las **preguntas abiertas**, y debe actualizarse después de cada sesión con el referente.

---

## 1. Contexto

- La **Fundación Pastoral Universitaria San Lucas** es una entidad externa a las universidades que otorga becas a estudiantes que necesitan ayuda económica.
- Otorga becas en **múltiples universidades** (UADE, UCA, Universidad de San Andrés, universidades nacionales, etc.).
- Se ocupa del proceso completo: desde el análisis del postulante hasta el otorgamiento, según los requisitos de cada beca.
- La Fundación, a través de la presidencia de UADE, planteó la necesidad de **automatizar las postulaciones** mediante un sistema web o móvil.
- El sistema será **para todas las universidades**; UADE impulsa el proyecto porque tiene muchos becados de la Fundación.

## 2. Objetivo

Desarrollar una solución que gestione el **ciclo completo de becas**, compuesta por:

1. **Postulación** – realizada por el postulante (se recomienda aplicación móvil).
2. **Administración** – análisis, validación, seguimiento, informe y dictamen, realizada por la Fundación.

## 3. Actores

| Actor | Descripción | Canal |
|---|---|---|
| Postulante | Estudiante que se postula por primera vez o renueva su beca | App móvil |
| Administrador de la Fundación | Abre convocatorias, revisa postulaciones y da seguimiento | Sistema de administración |
| Evaluador socioambiental | Personal de la Fundación que visita el domicilio y registra la evaluación | Sistema de administración *(ver RF-ADM-06 y preguntas abiertas)* |
| Comité / responsable de dictamen | Elabora el informe y el dictamen por universidad | Sistema de administración *(supuesto)* |

## 4. Requerimientos funcionales confirmados

### 4.1 Convocatorias

| ID | Requerimiento |
|---|---|
| RF-CONV-01 | El administrador puede **abrir una convocatoria** desde el sistema de administración (ej.: "Becas 2027 – Universidad X"). |
| RF-CONV-02 | Las convocatorias se **administran por universidad**. |

### 4.2 Postulación (app móvil)

| ID | Requerimiento |
|---|---|
| RF-POS-01 | El postulante puede **cargar una postulación** a una convocatoria abierta. |
| RF-POS-02 | Carga de **datos personales**. |
| RF-POS-03 | Carga de información del **grupo familiar**. |
| RF-POS-04 | Carga del **lugar de residencia**. |
| RF-POS-05 | Carga de información del **colegio o de la universidad**, según el tipo de postulación. |
| RF-POS-06 | Distinción entre **postulación inicial** y **renovación** de beca. |
| RF-POS-07 | **Carga de documentación** (cualquier tipo de documentación requerida). |

### 4.3 Administración

| ID | Requerimiento |
|---|---|
| RF-ADM-01 | **Seguimiento** de cada postulación. |
| RF-ADM-02 | **Trazabilidad** de cada postulación hasta determinar si el estudiante accede o no a la beca. |
| RF-ADM-03 | **Análisis** de la postulación. |
| RF-ADM-04 | **Validación** de la información y documentación. |
| RF-ADM-05 | Seguimiento de **renovaciones**. |
| RF-ADM-06 | **Carga de la evaluación socioambiental**: la Fundación visita el domicilio, analiza las condiciones del hogar y vuelca la información en el sistema. |
| RF-ADM-07 | Elaboración de un **informe** posterior a la evaluación. |
| RF-ADM-08 | Elaboración de un **dictamen por universidad**. |

## 5. Requerimientos sugeridos en la reunión (opcionales)

| ID | Requerimiento | Comentario |
|---|---|---|
| RF-OPC-01 | **Carga automática de datos desde el DNI** (lectura del documento) para evitar la carga manual. | Mencionado explícitamente como posible. El DNI argentino tiene un código PDF417 en el frente con los datos principales. |

## 6. Requerimientos no funcionales y restricciones

| ID | Requerimiento / restricción |
|---|---|
| RNF-01 | **Tecnología libre**: se pueden usar las tecnologías que el equipo elija, siempre que resuelvan la necesidad. Se valoran las tecnologías mostradas en la presentación. |
| RNF-02 | **Multi-universidad**: el sistema debe servir a todas las universidades con las que trabaja la Fundación. |
| RNF-03 | **Datos personales**: el sistema maneja muchos datos sensibles. El alcance de los datos está definido con la Fundación y será compartido. Aplica la Ley 25.326 de Protección de Datos Personales. |
| RNF-04 | **Producto hosteado para la evaluación**: la Fundación debe recibir un link para probar todo el proceso por su cuenta. |
| RNF-05 | **Traspaso**: después de la entrega, la Fundación se ocupa del hosting y de un eventual mantenimiento. El sistema debe poder operarse y mantenerse sin el equipo. |

## 7. Entregables

- Producto **funcional, probado y testeado**.
- **Código fuente**.
- **Documentación**.
- Link al producto hosteado para que la Fundación lo pruebe.
- La autoría es del equipo, pero el sistema se **entrega a la Fundación** (derechos de autor a definir).

## 8. Reglas de la competencia

- Equipos de **hasta 5 integrantes**, máximo 6 equipos (ajustable según inscriptos).
- Solo estudiantes de la **Facultad de Ingeniería** (Ing. Informática, Lic. en Gestión de Tecnologías, Lic. en IA y Ciencia de Datos, Tecnicatura en Desarrollo de Software, Videojuegos).
- Cada equipo tiene un **referente de la Fundación** (becado) con rol de **product owner**: aporta el análisis y los requerimientos.
- **8 semanas** de desarrollo durante el verano.
- **Todos los integrantes deben asistir** a la presentación (1ª semana de febrero).
- La presentación es la **"venta" de la solución** ante un jurado (decana, referentes de UADE y de la Fundación). Habrá preguntas técnicas sobre la solución, no preguntas teóricas.
- **Premios:**
  - 1er puesto: reconocimiento de una materia del 1er cuatrimestre 2027 vía examen libre (el estudiante abona las cuotas). Probablemente materias de desarrollo.
  - Resto de los equipos: primer parcial aprobado de alguna materia que cursen.
  - Todos: distinción de la Fundación y mención en el suplemento al título.

## 9. Supuestos (a validar con el referente)

- S-01: La app del postulante debe funcionar en Android e iOS.
- S-02: Cada convocatoria puede tener requisitos y documentación distintos según la universidad y según sea inicial o renovación.
- S-03: La postulación pasa por estados (ej.: borrador → enviada → en revisión → observada → socioambiental → dictamen → otorgada / rechazada).
- S-04: El administrador puede pedir correcciones o documentación faltante al postulante.
- S-05: El postulante puede consultar el estado de su postulación desde la app.
- S-06: Existen distintos roles internos en la Fundación con distintos permisos.

## 10. Preguntas abiertas

**Proceso**
1. ¿Cuántas postulaciones por año se reciben y para cuántas universidades?
2. ¿Cómo es el proceso actual paso a paso y qué herramientas se usan (Excel, papel, mail)?
3. ¿Qué es lo que más tiempo hace perder hoy?
4. ¿Quién decide el otorgamiento? ¿Hay un puntaje o criterios formales?

**Postulación**

5. ¿Qué datos y qué documentos se piden en una postulación inicial y cuáles en una renovación?
6. ¿Los requisitos cambian por universidad?
7. ¿Los postulantes usan mayoritariamente Android o iPhone? ¿Tienen datos móviles limitados?

**Socioambiental**

8. ¿Qué contiene la ficha socioambiental? ¿Hay un modelo?
9. ¿Quién la realiza y tiene conexión a internet durante la visita? ¿Sería útil cargarla en el momento desde un celular o tablet?
10. ¿Se toman fotos de la vivienda?

**Informe y dictamen**

11. ¿Cuál es el formato del informe y del dictamen? ¿Hay un modelo?
12. ¿El dictamen es por postulante, por universidad o ambos?

**Datos y operación**

13. ¿Cuál es el alcance de datos personales definido con la Fundación?
14. ¿Cuánto tiempo se deben conservar los datos y los documentos?
15. ¿La Fundación tiene preferencia o restricciones de hosting y presupuesto mensual?
16. ¿Qué usuarios internos usarán el sistema y con qué permisos?

## 11. Registro de cambios

| Fecha | Cambio |
|---|---|
| 18/11/2026 | Versión inicial a partir de la reunión informativa. |
