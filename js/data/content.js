/* Serviços, processo, diferenciais e tecnologias. */

window.SERVICES = [
  { icon: "globe",   title: "Sites",                 text: "Sites institucionais, páginas profissionais e experiências digitais modernas." },
  { icon: "target",  title: "Landing Pages",         text: "Páginas focadas em conversão, campanhas e geração de leads." },
  { icon: "layers",  title: "Sistemas",              text: "Sistemas web personalizados para processos internos e operações empresariais." },
  { icon: "users",   title: "CRMs",                  text: "Plataformas para gerenciamento de clientes, leads, funis, tarefas e equipes." },
  { icon: "phone",   title: "Aplicativos",           text: "Aplicações mobile e experiências digitais personalizadas." },
  { icon: "flow",    title: "Automações",            text: "Automação de tarefas repetitivas e integração entre ferramentas." },
  { icon: "chart",   title: "Dashboards",            text: "Painéis para visualização e acompanhamento de indicadores." },
  { icon: "puzzle",  title: "Soluções Personalizadas", text: "Projetos que não se encaixam em uma categoria específica." }
];

window.PROCESS = [
  { title: "Entendimento",        text: "Entendo a necessidade, o problema e o objetivo do projeto." },
  { title: "Planejamento",        text: "Defino funcionalidades, estrutura, experiência e tecnologia adequada." },
  { title: "Desenvolvimento",     text: "Transformo o planejamento em uma solução funcional." },
  { title: "Testes",              text: "Valido funcionamento, experiência e comportamento da aplicação." },
  { title: "Entrega e evolução",  text: "Entrego a solução e posso continuar evoluindo o projeto conforme novas necessidades." }
];

window.PILLARS = [
  { icon: "search",  title: "Entendo o problema",                          text: "Antes de escrever qualquer linha, descubro o que realmente precisa ser resolvido." },
  { icon: "layers",  title: "Construo a solução",                          text: "Transformo o que foi entendido em algo funcional, do jeito que o seu negócio opera." },
  { icon: "users",   title: "Penso na experiência de quem vai utilizar",   text: "Uma boa solução é a que as pessoas conseguem usar sem esforço no dia a dia." }
];

/* Tecnologias: adicione ou remova itens dentro de cada lista `items`.
   Só estão preenchidas as que foram informadas. Categoria sem itens aparece apenas com a descrição. */
window.TECH = [
  { category: "Frontend",       text: "HTML, CSS, JavaScript e demais tecnologias utilizadas nos projetos.", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Backend",        text: "APIs, servidores, bancos de dados e tecnologias backend.",           items: ["Python", "Node.js", "APIs REST"] },
  { category: "Banco de Dados", text: "SQL e bancos relacionais.",                                           items: ["SQL", "MySQL", "IBExpert", "Power BI", "Excel"] },
  { category: "Automação",      text: "APIs, integrações, scripts e ferramentas de automação.",             items: ["Playwright", "Puppeteer", "Web scraping", "Extensões do Chrome", "PowerShell", "Claude AI"] },
  { category: "Infraestrutura", text: "Windows Server, serviços, ambientes e infraestrutura necessária para aplicações.", items: ["Windows Server", "TCP/IP e DNS", "Git", "Sistemas ERP"] }
];

window.ABOUT_TILES = ["Desenvolvimento", "Sistemas", "Automação", "Tecnologia"];

/* Ícones (traço 24x24) */
window.ICONS = {
  globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".6"/>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
  users:  '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.4c1.8.8 3 2.6 3 5.6"/>',
  phone:  '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  flow:   '<rect x="3" y="4" width="6" height="5" rx="1.5"/><rect x="15" y="15" width="6" height="5" rx="1.5"/><path d="M6 9v3.5a2 2 0 0 0 2 2h7"/>',
  chart:  '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  puzzle: '<path d="M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4h2a2 2 0 1 0 0-4H6V6h4V4Z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  arrow:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
  wa:     '<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20Z"/><path d="M9 8.5c0 3.5 3 6.5 6.500 6.500"/>'
};
