/* Projetos do portfólio. Cada projeto tem um card na home e uma página de case (projeto.html?p=<slug>).
   Para adicionar: copie um bloco e preencha. Para remover: apague o bloco. A ordem aqui é a ordem na tela.

   Campos do card:
   - slug:        identificador na URL da página de case (sem espaços ou acentos)
   - filter:      grupo do filtro da home (ex.: "Sistemas", "Automações")
   - mockup:      "crm" | "system" | "automation" | "landing" | "dashboard" | "mobile" | "api" (visual gerado)
   - image:       imagem real (ex.: "assets/projects/crm.png"). Substitui o mockup.
   - url:         código ou site do projeto (botão na página de case). Pode ficar vazio.
   - placeholder: true = mostra "Exemplo ilustrativo"

   Campos da página de case:
   - role:        seu papel no projeto
   - challenge:   lista de parágrafos (o desafio)
   - solution:    parágrafo sobre a solução
   - features:    lista de funcionalidades
   - gallery:     [{ src: "assets/projects/tela1.png", caption: "Legenda" }]. Vazio = seção oculta
   - results:     [{ value: "...", label: "..." }]. Só preencha com resultados reais. Vazio = seção oculta
*/
window.PROJECTS = [
  {
    slug: "crm-agenda-whatsapp",
    name: "CRM de agenda com WhatsApp",
    filter: "Sistemas",
    category: "CRM / SaaS",
    description: "CRM de agendamento com agenda visual, ficha de clientes, dashboard e integração com WhatsApp e Google Calendar.",
    problem: "Atendimentos e clientes controlados à mão, sem lembretes automáticos nem visão da agenda do mês.",
    tech: ["React", "NestJS", "PostgreSQL", "Google Calendar", "WhatsApp"],
    mockup: "crm", image: "", url: "https://github.com/laitartlucas/CRM_Luana", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Uma consultoria de imagem e styling, com uma profissional principal e cerca de 60 atendimentos por mês, precisava organizar agenda, clientes e comunicação em um só lugar.",
      "Sem isso, o agendamento dependia de controle manual e de mensagens enviadas uma a uma, sem uma visão clara do que estava marcado."
    ],
    solution: "Um CRM de agendamento completo, com WhatsApp e Google Calendar integrados nativamente. A agenda, a ficha de cada cliente e os indicadores ficam no mesmo sistema, e os avisos saem de forma automática.",
    features: [
      "Agenda visual com calendário",
      "Ficha de clientes e catálogo de serviços",
      "Notificações e fluxos de WhatsApp",
      "Sincronização com o Google Calendar",
      "Dashboard com indicadores"
    ],
    gallery: [], results: []
  },
  {
    slug: "sistema-pedidos-online",
    name: "Sistema de pedidos online",
    filter: "Sistemas",
    category: "Sistema Web",
    description: "Aplicativo de pedidos para o cliente, painel da cozinha e agente de impressão térmica.",
    problem: "Pedidos chegando por canais diferentes e passados para a cozinha de forma manual.",
    tech: ["React", "Node.js", "Prisma", "PWA"],
    mockup: "system", image: "", url: "https://github.com/laitartlucas/Sistema-Bares", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Uma pizzaria precisava receber pedidos online e levá-los até a cozinha sem depender de repasse manual.",
      "O pedido do cliente, o preparo e a impressão da comanda precisavam funcionar como uma única operação."
    ],
    solution: "Um sistema em três partes que conversam entre si: o aplicativo do cliente (PWA), o painel da pizzaria para acompanhar os pedidos e um agente que imprime as comandas em impressora térmica.",
    features: [
      "Aplicativo do cliente instalável (PWA)",
      "Painel da cozinha para acompanhar pedidos",
      "Agente de impressão térmica",
      "API própria com banco de dados",
      "Tipos compartilhados entre as aplicações"
    ],
    gallery: [], results: []
  },
  {
    slug: "bot-ofertas-ia",
    name: "Bot de ofertas com IA",
    filter: "Automações",
    category: "Automação",
    description: "Painel web que recebe o link do produto, gera a descrição com IA e envia imagem e texto prontos para grupos de WhatsApp.",
    problem: "Montar e postar cada oferta manualmente nos grupos, um por um.",
    tech: ["Node.js", "WhatsApp", "Claude API", "Web scraping"],
    mockup: "automation", image: "", url: "https://github.com/laitartlucas/Afiliate_bot", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Quem mantém grupos de ofertas no WhatsApp precisa, para cada produto, pegar título, preço e imagem, escrever uma descrição e enviar para vários grupos.",
      "Feito à mão, esse trabalho se repete a cada oferta."
    ],
    solution: "Um painel web multiusuário. Basta colar o link de afiliado (Mercado Livre, Shopee ou Amazon): o sistema coleta os dados do produto, a IA escreve a descrição e o conjunto sai pronto para os grupos de destino.",
    features: [
      "Login e painel para vários usuários",
      "Coleta automática de título, preço, imagem e características",
      "Descrição criada com a API do Claude",
      "Conexão de WhatsApp por QR Code, uma por usuário",
      "Lista própria de grupos de destino"
    ],
    gallery: [], results: []
  },
  {
    slug: "automacao-dropshipping",
    name: "Automação de pedidos de dropshipping",
    filter: "Automações",
    category: "Automação",
    description: "Fluxo que lê pedidos no Google Sheets, confere o pagamento no checkout, avisa o cliente no WhatsApp e atualiza a planilha.",
    problem: "Conferir pedidos pagos e responder cada cliente manualmente, com risco de erro.",
    tech: ["Python", "Playwright", "Google Sheets", "WhatsApp"],
    mockup: "automation", image: "", url: "https://github.com/laitartlucas/Luna-Automation", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "No dropshipping, conferir pedidos pagos, enviar informações no WhatsApp e preencher planilhas é um processo manual, lento e sujeito a erros."
    ],
    solution: "Uma automação que une três plataformas em um fluxo contínuo: Google Sheets, painel do checkout e WhatsApp, com o resultado de volta na planilha.",
    features: [
      "Leitura de pedidos no Google Sheets, filtrando por data e forma de pagamento (PIX ou cartão)",
      "Consulta ao painel do checkout por automação de navegador",
      "Mensagens enviadas pelo WhatsApp",
      "Planilha atualizada ao final de cada etapa"
    ],
    gallery: [], results: []
  },
  {
    slug: "ev-chargeops",
    name: "EV ChargeOps",
    filter: "Sistemas",
    category: "Sistema / IA, projeto em equipe",
    description: "Projeto em equipe do Enterprise Challenge GoodWe + FIAP. Protótipo para condomínios que registra sessões de recarga de veículos elétricos, divide o consumo entre usuários e valida medições com IA.",
    problem: "Dividir a energia dos carregadores entre moradores sem um critério claro e confiável.",
    tech: ["Python", "Modbus", "IA"],
    mockup: "dashboard", image: "", url: "https://github.com/laitartlucas/ENTERPRISE-CHALLENGE-2026-GOODWE-FIAP-SPRINT2", placeholder: false,
    role: "Integrante da equipe (3 pessoas)",
    challenge: [
      "Em condomínios com carregadores de veículos elétricos, é preciso saber quanto cada morador consumiu e dividir esse custo de forma justa.",
      "O desafio foi proposto no Enterprise Challenge 2026, parceria entre GoodWe e FIAP."
    ],
    solution: "A segunda sprint implementa em Python o fluxo central da solução, da sessão de recarga até a fatura, na arquitetura de quatro camadas definida na primeira sprint, com um módulo de IA para validar as medições.",
    features: [
      "Registro de sessões de recarga a partir dos registradores Modbus do carregador",
      "Cálculo do consumo por usuário e por unidade",
      "Modelo de rateio entre os moradores",
      "Módulo de IA para validar a medição",
      "Geração da fatura"
    ],
    gallery: [], results: []
  }
];
