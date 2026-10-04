/* Página de case: lê ?p=<slug> e monta o conteúdo a partir de js/data/projects.js */
(function () {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const root = document.getElementById("conteudo");
  const NE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(p => p.slug === slug);

  document.getElementById("footer-socials").innerHTML = Object.entries(SITE.socials)
    .filter(([, url]) => url)
    .map(([name, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a>`).join("");
  document.getElementById("year").textContent = "© " + new Date().getFullYear();

  if (i < 0) {
    document.title = "Projeto não encontrado | Lucas Matheus Laitart";
    root.innerHTML = `<div class="container notfound">
      <h1 style="font-size:clamp(2rem,5vw,3.5rem);letter-spacing:-0.04em">Esse projeto não foi encontrado.</h1>
      <p>O link pode estar incompleto ou o projeto foi removido. Veja todos os projetos na página inicial.</p>
      <a class="btn btn--light" href="index.html#projetos">Ver todos os projetos</a></div>`;
    return;
  }

  const p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
  document.title = `${p.name} | Lucas Matheus Laitart`;
  document.querySelector('meta[name="description"]').setAttribute("content", p.description);

  const hero = p.image ? `<img src="${esc(p.image)}" alt="Imagem do projeto ${esc(p.name)}">` : mockup(p.mockup);

  root.innerHTML = `
    <section class="container case__intro">
      <a class="back" href="index.html#projetos"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Todos os projetos</a>
      <div class="case__chips"><span class="chip">${esc(p.category)}</span>${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <h1>${esc(p.name)}</h1>
      <p class="case__lead">${esc(p.description)}</p>
      <dl class="facts">
        <div><dt>Categoria</dt><dd>${esc(p.category)}</dd></div>
        <div><dt>Papel</dt><dd>${esc(p.role || "Desenvolvimento")}</dd></div>
        <div><dt>Problema resolvido</dt><dd>${esc(p.problem)}</dd></div>
        ${p.url ? `<div><dt>Código</dt><dd><a href="${esc(p.url)}" target="_blank" rel="noopener">Ver no GitHub ${NE}</a></dd></div>` : ""}
      </dl>
    </section>

    <section class="container" style="padding-top:clamp(40px,5vw,64px)">
      <div class="case__hero gridbg">${hero}</div>
    </section>

    <section class="container case__section">
      <div class="story">
        <div class="story__label"><span>01</span><h2>O desafio</h2></div>
        <div class="story__body">${(p.challenge || []).map(t => `<p>${esc(t)}</p>`).join("")}</div>
      </div>
      <div class="story">
        <div class="story__label"><span>02</span><h2>A solução</h2></div>
        <div class="story__body">
          <p>${esc(p.solution || "")}</p>
          ${p.features && p.features.length ? `<ul class="checks">${p.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>
    </section>

    ${p.gallery && p.gallery.length ? `<section class="container case__section"><div class="gallery">
      ${p.gallery.map(g => `<figure><div class="gallery__img"><img src="${esc(g.src)}" alt="${esc(g.caption || p.name)}" loading="lazy"></div>${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure>`).join("")}
    </div></section>` : ""}

    ${p.results && p.results.length ? `<section class="container case__section">
      <div class="story__label"><span style="font:400 .8125rem var(--font-mono);color:var(--faint)">03</span><h2 style="font-size:1.75rem;letter-spacing:-.025em">O resultado</h2></div>
      <div class="results">${p.results.map(r => `<div><strong>${esc(r.value)}</strong><span>${esc(r.label)}</span></div>`).join("")}</div>
    </section>` : ""}

    <section class="container case__section" style="padding-bottom:clamp(64px,8vw,96px)">
      <a class="next" href="projeto.html?p=${esc(next.slug)}">
        <div class="next__info">
          <span class="next__label">Próximo projeto</span>
          <span class="next__name">${esc(next.name)}</span>
          <span class="next__meta">${esc(next.category)}</span>
        </div>
        <span class="next__go"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
    </section>`;
})();
