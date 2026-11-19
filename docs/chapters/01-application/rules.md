# Módulo 01 – Postulación: reglas

> Reglas del módulo de postulación de la app del postulante. Salen de [docs/requerimientos.md](../../requerimientos.md) (entre paréntesis va el ID de cada requerimiento) y del perfil de la Fundación ([docs/perfil-fundacion.md](../../perfil-fundacion.md)).
>
> **Estado:** borrador, sin validar con el referente de la Fundación. Las reglas marcadas **(supuesto)** son hipótesis.

## Quién la usa
- **Postulante:** joven de 17 a 30 años que quiere empezar o seguir una carrera universitaria con una beca de la Fundación.
  - Más del 70% es **primera generación universitaria** de su familia; muchos **trabajan** mientras estudian y vienen de distintas provincias.
  - Usa sobre todo un **celular Android** de gama media o baja, con **datos móviles limitados** y a veces con mala señal. Puede tener que pedir documentos a su familia o a la escuela, así que la postulación **no se completa en una sola sesión**.
  - No necesita ninguna afiliación religiosa.
- Del otro lado, la **Fundación** revisa cada postulación desde el panel de administración (módulo aparte).

## Reglas generales de la postulación
1. Toda postulación pertenece a **una convocatoria**, y cada convocatoria a **una universidad** (RF-CONV-01/02).
2. Una postulación es **inicial** o **renovación** (RF-POS-06). En la renovación se precarga lo del año anterior.
3. Tiene secciones: datos personales (RF-POS-02), grupo familiar (RF-POS-03), domicilio (RF-POS-04), datos académicos (RF-POS-05) y documentación (RF-POS-07).
4. Se guarda sola como **borrador** y se puede retomar en cualquier momento, hasta el cierre de la convocatoria **(supuesto)**.
5. Se envía cuando todas las secciones y todos los documentos obligatorios están completos. Después de enviada, solo se corrige lo que la Fundación observe **(supuesto S-04)**.
6. El postulante ve el **estado** de su postulación **(supuesto S-05)**.
7. Antes de cargar cualquier dato, el postulante acepta el **consentimiento de datos personales** (Ley 25.326).
8. Los datos que ya se conocen no se vuelven a pedir. Por ejemplo, los datos del DNI se pueden leer del código del documento (RF-OPC-01).

## Reglas de la documentación (pantalla P14)
1. **La convocatoria define qué documentos se piden.** Cambian según la universidad y según sea una postulación inicial o una renovación **(supuesto S-02)**. Ejemplo verosímil de una convocatoria inicial:
   - DNI, frente y dorso (obligatorio).
   - Constancia de CUIL (obligatorio).
   - Analítico o certificado de notas de los últimos 3 años del secundario, o constancia de alumno regular si todavía lo cursa (obligatorio).
   - Comprobantes de ingresos del grupo familiar: recibos de sueldo, constancia de monotributo, certificación negativa de ANSES o declaración jurada de ingresos informales (obligatorio, **uno por cada integrante que trabaje**).
   - Factura de un servicio a nombre de algún integrante del hogar, como constancia de domicilio (obligatorio).
   - DNI de cada integrante del grupo familiar (obligatorio).
   - Certificado de discapacidad, si corresponde (opcional).
   - Carta de motivación (opcional según la convocatoria).
   - En una renovación: certificado de materias aprobadas y constancia de alumno regular del año en curso.
2. Algunos documentos se piden **por persona**. Se desprenden del grupo familiar que se cargó antes: si se declaró que la mamá y el hermano trabajan, aparecen dos comprobantes de ingresos, uno de cada uno.
3. Cada documento se carga con una **foto** (cámara) o un **archivo** (PDF o imagen). Un documento puede tener varias páginas o caras (por ejemplo, el DNI tiene frente y dorso).
4. **Calidad antes de subir:** se avisa si la foto está borrosa, oscura o cortada, y se recorta y comprime antes de subirla para ahorrar datos.
5. Si se corta la conexión, la carga se reintenta sola y no se pierde lo que ya se sacó **(supuesto)**.
6. Cada documento tiene un **estado**: pendiente → cargado → en revisión → aprobado / **observado**.
   - Si un documento queda observado, se muestra el motivo en lenguaje simple ("la foto salió borrosa") y se puede reemplazar.
7. Se puede **ver, reemplazar o borrar** un documento mientras la postulación no esté enviada.
8. El paso muestra cuánto falta ("5 de 8 documentos listos") y cuáles son obligatorios.
9. Tono: voseo, cercano y digno, como indica el perfil. Nunca se culpa al postulante ("La foto salió borrosa", no "Subiste mal el documento").

## Fuera de este módulo
- El panel de administración: la revisión, la validación, la socioambiental, el informe y el dictamen.
- La registración, el ingreso y el perfil.
