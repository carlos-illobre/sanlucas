/* Navegación entre pantallas de las maquetas.

   Contrato:
   - Cada elemento que lleva a otra pantalla se marca con data-ir="<screen>", donde <screen> es el
     nombre de una carpeta de docs/design/mockups/ (por ejemplo, data-ir="application-status").
   - Un elemento propio de la pantalla que se llama igual que otra pantalla (una pestaña, un filtro)
     lleva data-no-ir y no navega.
   - Dentro del visor (docs/design/index.html) el clic le avisa al visor, que abre esa pantalla en el
     mismo dispositivo. Si la pantalla todavía no existe, el visor lo dice.
   - Abierta sola (file:// o sin visor), muestra un aviso con la pantalla de destino.
*/
(function () {
  function aviso(texto) {
    var el = document.querySelector('.sl-aviso[data-navegacion]');
    if (!el) {
      el = document.createElement('div');
      el.className = 'sl-aviso';
      el.setAttribute('data-navegacion', '');
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = texto;
    requestAnimationFrame(function () { el.classList.add('visible'); });
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove('visible'); }, 2200);
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-ir]');
    if (!el || el.closest('[data-no-ir]')) return;
    ev.preventDefault();
    var destino = el.getAttribute('data-ir');
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ tipo: 'sl-ir', pantalla: destino }, '*');
    } else {
      aviso('Esto lleva a la pantalla «' + destino + '». Abrí el visor para navegar.');
    }
  });
})();
