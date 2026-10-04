/* Monta as seções a partir dos arquivos em js/data. */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  const media = p => p.image ? `<img src="${esc(p.image)}" alt="Imagem do projeto ${esc(p.name)}" loading="lazy">` : mockup(p.mockup);
  const NE = '<svg class="arrow-ne" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  /* Console do hero */
  const CONSOLE = [
    { label: "/web-app", mock: "system" },
    { label: "/crm", mock: "crm" },
    { label: "/mobile", mock: "mobile" },
    { label: "/automação", mock: "automation" },
    { label: "/api", mock: "api" },
    { label: "/dashboard", mock: "dashboard" }
  ];
  const tabs = $("console-tabs"), view = $("console-view");
  tabs.innerHTML = CONSOLE.map((c, i) => `<button class="console__tab" role="tab" type="button" data-i="${i}" aria-selected="${i === 1}">${c.label}</button>`).join("");
  const show = i => {
    tabs.querySelectorAll(".console__tab").forEach((t, k) => t.setAttribute("aria-selected", k === i));
    view.innerHTML = mockup(CONSOLE[i].mock);
  };
  tabs.addEventListener("click", e => { const t = e.target.closest("[data-i]"); if (t) show(+t.dataset.i); });
  tabs.addEventListener("pointerover", e => { const t = e.target.closest("[data-i]"); if (t && e.pointerType === "mouse") show(+t.dataset.i); });
  show(1);

  /* Projetos */
  $("projects-grid").innerHTML = PROJECTS.map((p, i) => `
    <article class="project ${i === 0 ? "project--featured" : ""}" data-filter="${esc(p.filter || "")}">
      <div class="project__media">
        ${p.placeholder ? '<span class="project__flag">Exemplo ilustrativo</span>' : ""}
        ${media(p)}
      </div>
      <div class="project__body">
        <div style="display:flex;flex-direction:column;gap:10px">
          <span class="project__meta">${esc(p.category)}</span>
          <div class="project__title"><h3>${esc(p.name)}</h3>${i === 0 ? "" : NE}</div>
          <p class="project__desc">${esc(p.description)}</p>
          <p class="project__problem"><b>Problema resolvido</b>${esc(p.problem)}</p>
          <div class="project__tech">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </div>
        <a class="project__link" href="projeto.html?p=${esc(p.slug)}" aria-label="Ver o case ${esc(p.name)}">Ver case ${NE}</a>
      </div>
    </article>`).join("");

  /* Filtros (gerados a partir do campo `filter` de cada projeto) */
  const kinds = [...new Set(PROJECTS.map(p => p.filter).filter(Boolean))];
  const filters = $("project-filters");
  if (kinds.length > 1) {
    filters.innerHTML = ["Todos", ...kinds].map((k, i) => `<button class="filter" type="button" data-k="${i ? esc(k) : ""}" aria-pressed="${i === 0}">${esc(k)}</button>`).join("");
    filters.addEventListener("click", e => {
      const b = e.target.closest("[data-k]"); if (!b) return;
      const k = b.dataset.k;
      filters.querySelectorAll(".filter").forEach(f => f.setAttribute("aria-pressed", f === b));
      const cards = [...document.querySelectorAll(".project")];
      cards.forEach(c => c.classList.toggle("is-hidden", !!k && c.dataset.filter !== k));
      cards.forEach((c, i) => c.classList.toggle("project--featured", !k && i === 0));
    });
  }

  /* Serviços */
  $("services-grid").innerHTML = SERVICES.map(s => `
    <article class="service">
      ${icon(s.icon)}
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </article>`).join("");

  /* Processo */
  $("process-list").innerHTML = PROCESS.map((s, i) => `
    <li class="step"><span class="step__n">${String(i + 1).padStart(2, "0")}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("");

  /* Pilares */
  $("pillars-list").innerHTML = PILLARS.map(s => `
    <article class="pillar">${icon(s.icon)}<div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></article>`).join("");

  /* Tecnologias */
  $("tech-list").innerHTML = TECH.map(c => `
    <div class="tech__col">
      <h3>${esc(c.category)}</h3>
      <p>${esc(c.text)}</p>
      ${c.items.length ? `<div class="tech__items">${c.items.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
    </div>`).join("");

  /* Sobre */
  const tileIcons = ["layers", "puzzle", "flow", "globe"];
  $("about-visual").innerHTML = SITE.photo
    ? `<div class="about__photo"><img src="${esc(SITE.photo)}" alt="${esc(SITE.name)}" loading="lazy"></div>`
    : `<div class="gridbg" aria-hidden="true"></div>` +
      ABOUT_TILES.map((t, i) => `<div class="tile">${icon(tileIcons[i % 4])}<span>${esc(t)}</span></div>`).join("");

  /* Rodapé: redes só aparecem se preenchidas */
  $("footer-socials").innerHTML = Object.entries(SITE.socials)
    .filter(([, url]) => url)
    .map(([name, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a>`).join("");
  $("year").textContent = "© " + new Date().getFullYear();

})();
