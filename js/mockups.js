/* Mockups visuais gerados para projetos sem imagem real. */
(function () {
  const rep = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join("");

  const builders = {
    crm: () => `<div class="mock mk-crm">${rep(3, c => `
      <div class="col"><div class="ln w" style="width:55%"></div>
        ${rep(c === 1 ? 2 : 3, k => `<div class="card ${c === 1 && k === 0 ? "hot" : ""}"><div class="ln w" style="width:${70 - k * 12}%"></div><div class="ln" style="width:${50 + k * 10}%"></div></div>`)}
      </div>`)}</div>`,

    system: () => `<div class="mock mk-system">
      <div class="top"><div class="bar" style="width:34%"></div><div class="pill"></div></div>
      ${rep(4, i => `<div class="row"><i></i><div class="ln w" style="width:${70 - i * 6}%"></div><div class="ln"></div><b></b></div>`)}</div>`,

    automation: () => `<div class="mock mk-automation">
      <div class="n"></div><div class="w"></div><div class="n on"></div><div class="w"></div><div class="n"></div><div class="w"></div><div class="n on"></div></div>`,

    landing: () => `<div class="mock mk-landing">
      <div class="nv"><div class="bar" style="width:18%"></div><div class="bar" style="width:34%"></div></div>
      <div class="hd"><div class="ln"></div><div class="ln"></div><div class="ln"></div></div>
      <div class="ft"><div class="pill"></div><div class="pill g"></div></div></div>`,

    dashboard: () => `<div class="mock mk-dashboard">
      <div class="kp">${rep(3, () => `<div class="box"><div class="ln" style="width:50%"></div><div class="ln w" style="width:75%;height:1.2em"></div></div>`)}</div>
      <div class="box chart">${[40, 62, 48, 80, 58, 90, 70].map(h => `<i style="--h:${h}%"></i>`).join("")}</div></div>`,

    mobile: () => `<div class="mock mk-mobile">
      <div class="ph"><i></i><div class="ln w" style="width:60%"></div><div class="hl"></div><div class="it"></div><div class="it"></div></div>
      <div class="ph b"><i></i><div class="it" style="height:7em"></div><div class="ln" style="width:55%"></div></div></div>`,

    api: () => `<div class="mock mk-api">
      <div class="rq"><em>GET</em><span>/clientes</span><b>200</b></div>
      <div class="rq on"><em>POST</em><span>/pedidos</span><b>201</b></div>
      <div class="rq"><em>GET</em><span>/relatorios</span><b>200</b></div>
      <div class="rq"><em>PUT</em><span>/agenda/42</span><b>200</b></div></div>`
  };

  window.mockup = type => (builders[type] || builders.dashboard)();
})();
