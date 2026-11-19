/* P14 · Documentación — datos ficticios e ilustraciones de documentos compartidos por las variantes.
   Nada de esto es real: nombres inventados, documentos dibujados con SVG (sin datos legibles).
   Uso: window.SLD.docs, SLD.people, SLD.art(kind, {blur, dark, w}), SLD.chip(state), SLD.toast(texto). */
(function () {
  var people = [
    { id: 'yo', name: 'Camila', full: 'Camila Benítez', rel: 'Vos', ini: 'CB', tint: '#207766' },
    { id: 'hogar', name: 'Tu hogar', full: 'Domicilio en González Catán', rel: 'Domicilio', ini: '', icon: 'house', tint: '#3869A1' },
    { id: 'mirta', name: 'Mirta', full: 'Mirta Benítez', rel: 'Mamá · trabaja por su cuenta', ini: 'MB', tint: '#3E9080' },
    { id: 'lautaro', name: 'Lautaro', full: 'Lautaro Benítez', rel: 'Hermano · empleado', ini: 'LB', tint: '#3869A1' },
    { id: 'thiago', name: 'Thiago', full: 'Thiago Benítez', rel: 'Hermano · 12 años', ini: 'TB', tint: '#203758' }
  ];

  var docs = [
    { id: 'dni-yo', who: 'yo', kind: 'dni', title: 'DNI', detail: 'Frente y dorso', pages: 2, req: true, state: 'aprobado', when: '14/11' },
    { id: 'cuil-yo', who: 'yo', kind: 'cuil', title: 'Constancia de CUIL', detail: 'La bajás gratis de ANSES', pages: 1, req: true, state: 'revision', when: '17/11' },
    { id: 'analitico', who: 'yo', kind: 'analitico', title: 'Analítico del secundario', detail: 'Notas de los últimos 3 años', pages: 2, req: true, state: 'observado', when: '16/11',
      reason: 'La foto salió borrosa en la parte de abajo: no se leen las notas de 5.º año.' },
    { id: 'factura', who: 'hogar', kind: 'factura', title: 'Factura de un servicio', detail: 'Luz, gas o agua, a nombre de alguien del hogar', pages: 1, req: true, state: 'cargado', when: '18/11' },
    { id: 'dni-mirta', who: 'mirta', kind: 'dni', title: 'DNI de Mirta', detail: 'Frente y dorso', pages: 2, req: true, state: 'cargado', when: '18/11' },
    { id: 'ing-mirta', who: 'mirta', kind: 'ddjj', title: 'Ingresos de Mirta', detail: 'Declaración jurada de ingresos informales', pages: 1, req: true, state: 'pendiente' },
    { id: 'dni-lautaro', who: 'lautaro', kind: 'dni', title: 'DNI de Lautaro', detail: 'Frente y dorso', pages: 2, req: true, state: 'pendiente' },
    { id: 'rec-lautaro', who: 'lautaro', kind: 'recibo', title: 'Recibo de sueldo de Lautaro', detail: 'El último que cobró', pages: 1, req: true, state: 'pendiente' },
    { id: 'dni-thiago', who: 'thiago', kind: 'dni', title: 'DNI de Thiago', detail: 'Frente y dorso', pages: 2, req: true, state: 'aprobado', when: '14/11' },
    { id: 'carta', who: 'yo', kind: 'carta', title: 'Carta de motivación', detail: 'Opcional · contanos por qué Informática', pages: 1, req: false, state: 'pendiente' },
    { id: 'discap', who: 'yo', kind: 'cert', title: 'Certificado de discapacidad', detail: 'Opcional · solo si corresponde', pages: 1, req: false, state: 'pendiente' }
  ];

  var STATES = {
    pendiente: { label: 'Falta', cls: 'neutro', icon: 'circle-dot' },
    cargado:   { label: 'Cargado', cls: 'info', icon: 'cloud-upload' },
    revision:  { label: 'En revisión', cls: 'info', icon: 'clock' },
    aprobado:  { label: 'Aprobado', cls: 'exito', icon: 'circle-check' },
    observado: { label: 'Para corregir', cls: 'alerta', icon: 'triangle-alert' },
    subiendo:  { label: 'Subiendo…', cls: 'info', icon: 'loader' }
  };

  function chip(state) {
    var s = STATES[state] || STATES.pendiente;
    return '<span class="sl-chip ' + s.cls + '">' + (window.slIcon ? window.slIcon(s.icon, 16) : '') + s.label + '</span>';
  }

  function isReady(d) { return d.state === 'cargado' || d.state === 'revision' || d.state === 'aprobado'; }
  function counts() {
    var req = docs.filter(function (d) { return d.req; });
    return {
      total: req.length,
      ready: req.filter(isReady).length,
      missing: req.filter(function (d) { return d.state === 'pendiente'; }).length,
      fix: docs.filter(function (d) { return d.state === 'observado'; }).length
    };
  }
  function person(id) { for (var i = 0; i < people.length; i++) if (people[i].id === id) return people[i]; }
  function doc(id) { for (var i = 0; i < docs.length; i++) if (docs[i].id === id) return docs[i]; }

  /* ---------- Ilustraciones de documentos (SVG, sin texto legible) ---------- */
  var uid = 0;
  function lines(x, y, w, n, gap, color, vary) {
    var s = '';
    for (var i = 0; i < n; i++) {
      var lw = w * (vary ? (0.55 + ((i * 37) % 45) / 100) : 1);
      s += '<rect x="' + x + '" y="' + (y + i * gap) + '" width="' + lw.toFixed(1) + '" height="3" rx="1.5" fill="' + color + '"/>';
    }
    return s;
  }
  function art(kind, o) {
    o = o || {};
    var id = 'sld' + (uid++);
    var blur = o.blur ? ' filter="url(#' + id + 'b)"' : '';
    var defs = '<defs><filter id="' + id + 'b"><feGaussianBlur stdDeviation="' + (o.blur || 2) + '"/></filter>' +
      '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9F3F1"/><stop offset=".55" stop-color="#DCEAF3"/><stop offset="1" stop-color="#EAE6F2"/></linearGradient></defs>';
    var ink = '#C9D1D6', ink2 = '#AEB8BF', body = '';
    var w = o.w ? ' width="' + o.w + '"' : '';
    if (kind === 'dni') {
      body = '<rect x="2" y="2" width="156" height="100" rx="8" fill="url(#' + id + 'g)" stroke="#C8D6DC"/>' +
        '<rect x="12" y="12" width="70" height="5" rx="2.5" fill="#7FA3BF"/>' +
        '<rect x="12" y="26" width="34" height="44" rx="4" fill="#C3D3DD"/>' +
        '<circle cx="29" cy="41" r="8" fill="#A8BDCB"/><path d="M17 68c2-9 8-13 12-13s10 4 12 13z" fill="#A8BDCB"/>' +
        lines(54, 28, 88, 6, 7, '#B9C9D3', true) +
        '<rect x="12" y="80" width="136" height="12" rx="3" fill="#CFDDE4"/>' +
        '<circle cx="138" cy="20" r="9" fill="none" stroke="#9FB9C9" stroke-width="2"/>';
      return '<svg viewBox="0 0 160 104"' + w + ' xmlns="http://www.w3.org/2000/svg" class="sld-art" aria-hidden="true">' + defs + '<g' + blur + '>' + body + '</g></svg>';
    }
    var head = { cuil: '#3869A1', analitico: '#207766', factura: '#E0A526', recibo: '#3869A1', ddjj: '#5F6B73', carta: '#91BEC6', cert: '#3E9080' }[kind] || '#5F6B73';
    body = '<rect x="2" y="2" width="116" height="156" rx="4" fill="#fff" stroke="#DDE2E6"/>' +
      '<rect x="12" y="12" width="28" height="8" rx="2" fill="' + head + '"/>' +
      '<rect x="70" y="13" width="38" height="3" rx="1.5" fill="' + ink2 + '"/><rect x="80" y="19" width="28" height="3" rx="1.5" fill="' + ink + '"/>';
    if (kind === 'analitico') {
      body += lines(12, 32, 96, 1, 0, ink2) ;
      for (var r = 0; r < 9; r++) body += '<rect x="12" y="' + (44 + r * 10) + '" width="62" height="3" rx="1.5" fill="' + ink + '"/><rect x="88" y="' + (44 + r * 10) + '" width="8" height="3" rx="1.5" fill="' + head + '"/><rect x="100" y="' + (44 + r * 10) + '" width="8" height="3" rx="1.5" fill="' + ink2 + '"/>';
      body += '<circle cx="92" cy="140" r="9" fill="none" stroke="' + head + '" stroke-width="1.5"/>' + lines(12, 138, 50, 2, 6, ink, true);
    } else if (kind === 'factura') {
      body += lines(12, 32, 96, 3, 7, ink, true) + '<rect x="12" y="58" width="96" height="40" rx="3" fill="#F6F1E4"/>' +
        '<path d="M18 90 L34 78 L50 84 L66 68 L82 74 L100 62" fill="none" stroke="' + head + '" stroke-width="2"/>' +
        lines(12, 108, 60, 3, 7, ink, true) + '<rect x="78" y="108" width="30" height="10" rx="2" fill="' + ink2 + '"/>' +
        '<g fill="#5F6B73">' + [0, 3, 5, 9, 11, 14, 17, 19, 23, 26, 28, 31].map(function (x) { return '<rect x="' + (14 + x * 3) + '" y="132" width="' + (x % 2 ? 2 : 1) + '" height="16"/>'; }).join('') + '</g>';
    } else if (kind === 'recibo') {
      body += lines(12, 32, 96, 2, 7, ink, true) + '<rect x="12" y="50" width="96" height="1" fill="' + ink2 + '"/>';
      for (var k = 0; k < 7; k++) body += '<rect x="12" y="' + (58 + k * 9) + '" width="50" height="3" rx="1.5" fill="' + ink + '"/><rect x="84" y="' + (58 + k * 9) + '" width="24" height="3" rx="1.5" fill="' + ink2 + '"/>';
      body += '<rect x="12" y="126" width="96" height="14" rx="3" fill="#EDF2F9"/><rect x="72" y="131" width="32" height="4" rx="2" fill="' + head + '"/>' +
        '<path d="M16 150 q6 -8 12 0 t12 0" fill="none" stroke="' + ink2 + '" stroke-width="1.5"/>';
    } else if (kind === 'carta') {
      body += lines(12, 34, 96, 13, 8, ink, true) + '<path d="M14 146 q8 -10 16 -2 t18 -2" fill="none" stroke="' + ink2 + '" stroke-width="1.5"/>';
    } else {
      body += lines(12, 34, 96, 4, 7, ink2, true) + '<rect x="12" y="66" width="96" height="30" rx="3" fill="#F2F5F7"/>' + lines(18, 74, 80, 2, 8, ink, true) +
        lines(12, 106, 96, 3, 7, ink, true) + '<circle cx="94" cy="140" r="10" fill="none" stroke="' + head + '" stroke-width="1.5"/>';
    }
    return '<svg viewBox="0 0 120 160"' + w + ' xmlns="http://www.w3.org/2000/svg" class="sld-art" aria-hidden="true">' + defs + '<g' + blur + '>' + body + '</g></svg>';
  }

  /* Aviso corto (usa .sl-aviso de common.css) */
  function toast(text, icon) {
    var el = document.querySelector('.sl-aviso[data-sld]');
    if (!el) { el = document.createElement('div'); el.className = 'sl-aviso'; el.setAttribute('data-sld', ''); el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.innerHTML = (icon && window.slIcon ? window.slIcon(icon, 20) : '') + '<span>' + text + '</span>';
    requestAnimationFrame(function () { el.classList.add('visible'); });
    clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('visible'); }, 2600);
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.SLD = { people: people, docs: docs, STATES: STATES, chip: chip, counts: counts, person: person, doc: doc, isReady: isReady, art: art, toast: toast, reduce: reduce,
    convocatoria: { name: 'Becas 2027 · UADE', career: 'Ingeniería en Informática', closes: '12/12', daysLeft: 23 } };
})();
