# Portfólio — Lucas Matheus Laitart

Site estático (HTML + CSS + JS puro), sem build. Abra `index.html` ou rode `python -m http.server`.

## Onde editar
| O quê | Arquivo |
|---|---|
| WhatsApp, e-mail, redes, foto, formulário, analytics | `js/data/site.js` |
| Projetos (adicionar/remover/editar) | `js/data/projects.js` |
| Serviços, processo, diferenciais, tecnologias | `js/data/content.js` |
| Textos fixos (hero, sobre, CTA) | `index.html` |
| Cores e tipografia | `css/tokens.css` |

## Projetos reais
Em `projects.js`: coloque a imagem em `assets/projects/`, preencha `image`, `url` e remova `placeholder: true`.

## Próximos passos já previstos
- Página por projeto: use o campo `url` apontando para `projetos/<nome>.html`.
- Formulário: preencha `formEndpoint` (Formspree, Getform...). Sem ele, abre WhatsApp/e-mail.
- Analytics: preencha `analyticsId`. Domínio: aponte no provedor de hospedagem (Netlify, Vercel, Cloudflare Pages).
- Blog e depoimentos: criar `js/data/posts.js` / `testimonials.js` e uma seção em `index.html` seguindo o padrão de `render.js`.
