(function () {
  const $ = id => document.getElementById(id);

  /* Navegação: menu mobile, link ativo, progresso de leitura */
  const toggle = $("nav-toggle"), links = $("nav-links"), bar = $("nav-progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
  };
  onScroll(); addEventListener("scroll", onScroll, { passive: true });

  const setMenu = open => {
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    links.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) navAnchors.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navAnchors.forEach(a => { const s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });

  /* Linha do processo acende quando entra na tela */
  const proc = $("process-list");
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { proc.classList.add("is-on"); o.disconnect(); } }), { threshold: 0.35 }).observe(proc);

  /* Brilho discreto que segue o cursor (serviços e projetos) */
  document.querySelectorAll(".service, .project").forEach(c => c.addEventListener("pointermove", e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }));

  /* Contato: WhatsApp / formulário */
  const wa = SITE.whatsapp.replace(/\D/g, "");
  const waLink = text => `https://wa.me/${wa}${text ? "?text=" + encodeURIComponent(text) : ""}`;
  const btnWa = $("cta-wa");
  if (wa) {
    btnWa.hidden = false; btnWa.href = waLink("Olá, Lucas! Vi seu portfólio e quero conversar sobre um projeto.");
    btnWa.target = "_blank"; btnWa.rel = "noopener";
    btnWa.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.wa}</svg>Chamar no WhatsApp`;
  }

  $("cta-start").addEventListener("click", () => setTimeout(() => $("form-nome").focus({ preventScroll: true }), 400));

  const form = $("contact-form"), msg = $("form-msg");
  const say = (text, kind) => { msg.textContent = text; msg.className = "form__msg " + (kind || ""); };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const missing = ["nome", "contato", "mensagem"].filter(k => !String(d[k] || "").trim());
    form.querySelectorAll("input, textarea").forEach(f => f.setAttribute("aria-invalid", missing.includes(f.name)));
    if (missing.length) return say("Preencha nome, contato e mensagem para enviar.", "err");

    const text = `Olá, Lucas! Meu nome é ${d.nome}.\nPreciso de: ${d.tipo}.\n\n${d.mensagem}\n\nContato: ${d.contato}`;

    if (d._honey) return say("Mensagem enviada. Respondo em breve.", "ok"); /* campo escondido: só robôs preenchem */

    if (SITE.formEndpoint) {
      const payload = {
        nome: d.nome, contato: d.contato, "tipo de projeto": d.tipo, mensagem: d.mensagem,
        _subject: `Novo contato pelo portfólio: ${d.tipo}`, _template: "table", _captcha: "false"
      };
      if (String(d.contato).includes("@")) payload._replyto = d.contato;
      const btn = form.querySelector('button[type="submit"]'); btn.disabled = true;
      try {
        const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || j.success === "false" || j.success === false) throw 0;
        form.reset(); return say("Mensagem enviada. Respondo em breve.", "ok");
      } catch {
        if (wa) { window.open(waLink(text), "_blank", "noopener"); return say("Não foi possível enviar agora. Abri o WhatsApp com a sua mensagem.", "err"); }
        return say("Não foi possível enviar agora. Tente novamente em instantes.", "err");
      } finally { btn.disabled = false; }
    }
    if (wa) { window.open(waLink(text), "_blank", "noopener"); return say("Abrindo o WhatsApp com a sua mensagem.", "ok"); }
    if (SITE.email) { location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Projeto: " + d.tipo)}&body=${encodeURIComponent(text)}`; return say("Abrindo o seu e-mail com a mensagem pronta.", "ok"); }
    say("O envio será ativado assim que o contato for cadastrado em js/data/site.js.", "err");
  });

  /* Analytics (ative preenchendo SITE.analyticsId) */
  if (SITE.analyticsId) {
    const s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(SITE.analyticsId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", SITE.analyticsId);
  }
})();
