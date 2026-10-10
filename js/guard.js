/* Candado de dominio de la propuesta: si esta copia se sirve desde un dominio
   no autorizado, la página se sustituye por un aviso. Disuasorio, no blindaje. */
(function () {
  var s = document.currentScript, ok = (s && s.dataset.hosts || "").split(",");
  var h = location.hostname;
  if (ok.some(function (d) { d = d.trim(); return d && (h === d || h.endsWith("." + d)); })) return;
  document.documentElement.innerHTML = "<head><meta charset='utf-8'><title>Copia no autorizada</title></head><body style='font:18px/1.5 system-ui;padding:10vh 8vw;color:#140b3d'><h1>Copia no autorizada</h1><p>Esta propuesta solo puede verse en su dirección original.</p></body>";
})();
