/* Projetos do portfólio. Cada projeto tem um card na home e uma página de case (projeto.html?p=<slug>).
   Para adicionar: copie um bloco e preencha. Para remover: apague o bloco. A ordem aqui é a ordem na tela.

   Campos do card:
   - slug:        identificador na URL da página de case (sem espaços ou acentos)
   - filter:      grupo do filtro da home (ex.: "Sistemas", "Automações")
   - mockup:      "crm" | "system" | "automation" | "landing" | "dashboard" | "mobile" | "api" (visual gerado)
   - image:       imagem real (ex.: "assets/projects/crm.png"). Substitui o mockup.
   - url:         código ou site do projeto (botão na página de case). Pode ficar vazio.
   - site:        endereço do site no ar (aparece como "Ver o site" no case)
   - links:       links extras na página de case: [{ label: "Nome", url: "https://..." }]
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
    description: "CRM com painel de indicadores, leads e pipeline comercial, agenda, clientes e integração com WhatsApp e Google Calendar.",
    problem: "Atendimentos e clientes controlados à mão, sem lembretes automáticos nem visão da agenda do mês.",
    tech: ["React", "NestJS", "PostgreSQL", "Google Calendar", "WhatsApp"],
    mockup: "crm", image: "assets/projects/crm-capa.jpg", url: "https://github.com/laitartlucas/CRM_Luana", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Uma consultoria de imagem e styling, com uma profissional principal e cerca de 60 atendimentos por mês, precisava organizar agenda, clientes e comunicação em um só lugar.",
      "Sem isso, o agendamento dependia de controle manual e de mensagens enviadas uma a uma, sem uma visão clara do que estava marcado."
    ],
    solution: "Um CRM de agendamento completo, com WhatsApp e Google Calendar integrados nativamente. A agenda, a ficha de cada cliente e os indicadores ficam no mesmo sistema, e os avisos saem de forma automática.",
    features: [
      "Painel com indicadores: faturamento, agendamentos, taxa de confirmação, no-show, ocupação da agenda e ticket médio",
      "Leads, pipeline comercial com funil e origem das leads, com exportação em CSV",
      "Agenda visual com os agendamentos do dia",
      "Clientes, serviços e tarefas",
      "Notificações e fluxos de WhatsApp",
      "Sincronização com o Google Calendar"
    ],
    gallery: [
      { src: "assets/projects/crm-painel.jpg", caption: "Painel principal, com indicadores do mês, agendamentos do dia, funil do pipeline e origem das leads. Nomes de clientes e valores em reais ocultados." }
    ],
    results: []
  },
  {
    slug: "bot-ofertas-ia",
    name: "Bot de ofertas com IA",
    filter: "Automações",
    category: "Automação",
    description: "Painel web que recebe o link de afiliado, usa IA para ler o produto e escrever a oferta, e envia texto, preço e imagem prontos para um grupo de WhatsApp.",
    problem: "Criar a descrição, buscar o preço e formatar cada oferta manualmente, link por link.",
    tech: ["Node.js", "WhatsApp", "Claude API", "Web scraping"],
    mockup: "automation", image: "assets/projects/bot-capa.jpg", url: "https://github.com/laitartlucas/Afiliate_bot", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Quem divulga produtos do Mercado Livre no WhatsApp precisa, para cada link, escrever uma descrição, buscar o preço e formatar a mensagem.",
      "Feito à mão, isso se repete dezenas de vezes por dia e consome tempo que poderia ir para a divulgação."
    ],
    solution: "Um painel web protegido por senha. Depois de conectar o WhatsApp por QR Code e escolher o grupo de destino, basta colar o link de afiliado: a IA lê o produto, escreve uma descrição atrativa, puxa o preço e a imagem, e a mensagem completa vai direto para o grupo.",
    features: [
      "Login por senha no painel",
      "Conexão do WhatsApp por QR Code",
      "Escolha do grupo de destino",
      "Descrição criada pela IA, com preço e desconto",
      "Envio da mensagem com imagem para o grupo",
      "Suporte a links do Mercado Livre, Shopee e Amazon, com vários usuários"
    ],
    gallery: [
      { src: "assets/projects/bot-1-painel.png", caption: "Painel do bot: status do WhatsApp, grupo de destino e campo para o link de afiliado. Ilustração fiel à interface." },
      { src: "assets/projects/bot-2-mensagem.png", caption: "Mensagem gerada pela IA a partir do link, com preço e desconto, e confirmação de envio. Ilustração fiel à interface." },
      { src: "assets/projects/bot-3-whatsapp.png", caption: "Como a oferta chega no grupo de WhatsApp (imagem do produto omitida)." }
    ],
    results: []
  },
  {
    slug: "automacao-dropshipping",
    name: "Automação de pedidos de dropshipping",
    filter: "Automações",
    category: "Automação",
    description: "Duas ferramentas que trabalham juntas: um bot que confere os pedidos na planilha e no checkout e avisa pelo WhatsApp, e uma extensão do Chrome que preenche o endereço do cliente.",
    problem: "Cada pedido exigia conferir o pagamento e digitar os dados do cliente à mão, todos os dias.",
    tech: ["Python", "Playwright", "Node.js", "Google Sheets", "Extensão Chrome"],
    mockup: "automation", image: "assets/projects/dropshipping-capa.jpg", url: "https://github.com/laitartlucas/Luna-Automation", placeholder: false,
    urlLabel: "Ver a automação no GitHub",
    links: [{ label: "Ver a extensão do Chrome no GitHub", url: "https://github.com/laitartlucas/Extension-Shopee" }],
    role: "Desenvolvimento",
    challenge: [
      "No dropshipping, cada pedido seguia o mesmo caminho manual: abrir a planilha, pegar o ID, pesquisar no checkout, confirmar se estava pago, anotar o produto, abrir a Shopee e digitar nome, endereço, CEP e telefone do cliente.",
      "Esse processo se repetia para todos os pedidos, todos os dias."
    ],
    solution: "Duas ferramentas que trabalham juntas. O bot (Python e Node.js) lê a fila de pedidos na planilha, confere o pagamento no checkout por automação de navegador e envia pelo WhatsApp o link e o nome do produto. A extensão do Chrome preenche o endereço do cliente na Shopee a partir desse link.",
    features: [
      "Conexão do WhatsApp por QR Code",
      "Escolha da data de corte e da forma de pagamento (cartão, PIX ou ambos)",
      "Levantamento dos pedidos na planilha, com confirmação antes de processar",
      "Consulta ao checkout com a sessão já salva, confirmando se o pedido está pago",
      "Link e nome do produto enviados no WhatsApp",
      "Extensão do Chrome que preenche nome, telefone, CEP, rua, número, bairro e complemento",
      "Valor e e-mail do cliente gravados automaticamente na planilha"
    ],
    gallery: [
      { src: "assets/projects/dropshipping-1-config.png", caption: "Início da execução: data de corte e filtro por forma de pagamento." },
      { src: "assets/projects/dropshipping-2-pedidos.png", caption: "Pedidos encontrados na planilha, aguardando confirmação para processar." },
      { src: "assets/projects/dropshipping-3-processamento.png", caption: "Processamento de um pedido: pagamento confirmado, mensagens enviadas e dados gravados na planilha." },
      { src: "assets/projects/dropshipping-4-whatsapp.png", caption: "O link do pedido e o nome do produto chegam no WhatsApp. Dados do cliente ocultados." },
      { src: "assets/projects/dropshipping-5-extensao.jpg", caption: "A extensão do Chrome preenche o formulário de endereço da Shopee. Dados do cliente ocultados." }
    ],
    results: [
      { value: "Quase 100%", label: "do processo de pedidos automatizado, segundo o autor" },
      { value: "De horas a minutos", label: "tempo para zerar a fila de pedidos, que antes era feita à mão" }
    ]
  },
  {
    slug: "playbook-acessorios",
    name: "Playbook digital de acessórios",
    filter: "Sites e páginas",
    category: "Site / Material digital",
    description: "Material de leitura online com índice lateral, capítulos, checklist e tema claro e escuro, para ensinar um método de combinação de acessórios.",
    problem: "Um método de consultoria de imagem precisava de um formato digital fácil de consultar.",
    tech: ["HTML", "CSS", "JavaScript"],
    mockup: "landing", image: "assets/projects/playbook-1.jpg", site: "https://laitartlucas.github.io/Playbook_Luana/", url: "https://github.com/laitartlucas/Playbook_Luana", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Uma consultora de imagem tinha um método para finalizar qualquer look em menos de 2 minutos, escolhendo cinto, bolsa, sapato e acessórios.",
      "O conteúdo precisava virar um material de consulta rápida, organizado em capítulos e fácil de navegar."
    ],
    solution: "Um playbook em formato de site: o leitor navega pelo índice lateral, acompanha os capítulos e usa o checklist no momento de montar o look.",
    features: [
      "Índice lateral que acompanha a leitura",
      "Capítulos com os pilares do método, regras, fórmula rápida e erros comuns",
      "Playbook por ocasião e checklist rápido",
      "Tema claro e escuro"
    ],
    gallery: [
      { src: "assets/projects/playbook-1.jpg", caption: "Abertura do playbook, com índice lateral e acesso ao tema claro e escuro." },
      { src: "assets/projects/playbook-2.jpg", caption: "Capítulo sobre os três pilares do look, no tema claro." }
    ],
    results: []
  },
  {
    slug: "teste-de-estilo",
    name: "Teste de estilo interativo",
    filter: "Sites e páginas",
    category: "Site / Quiz",
    description: "Teste de sete perguntas que revela o perfil de estilo de quem responde, com escolha por texto ou por imagem e atalhos de teclado.",
    problem: "Conhecer o estilo de cada pessoa de forma leve, antes da consultoria.",
    tech: ["HTML", "CSS", "JavaScript"],
    mockup: "landing", image: "assets/projects/quiz-1.jpg", site: "https://laitartlucas.github.io/Teste_Luana/", url: "https://github.com/laitartlucas/Teste_Luana", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Uma consultoria de imagem queria uma forma simples de a pessoa descobrir os estilos que mais combinam com ela.",
      "A experiência precisava ser curta e agradável, com uma pergunta de cada vez."
    ],
    solution: "Um teste de uma pergunta por tela. Em algumas, a pessoa escolhe pela imagem que representa seu gosto, podendo marcar até duas opções. No final, o teste revela o perfil de estilo.",
    features: [
      "Uma pergunta por tela, com contagem de progresso",
      "Escolha por texto ou por imagem, com até duas opções",
      "Atalhos de teclado (1 a 7, Enter e setas)",
      "Resultado com o perfil de estilo"
    ],
    gallery: [
      { src: "assets/projects/quiz-1.jpg", caption: "Tela de abertura do teste." },
      { src: "assets/projects/quiz-2.jpg", caption: "Primeira pergunta, com opções numeradas e atalhos de teclado." }
    ],
    results: []
  },
  {
    slug: "pagina-de-vendas-desafio",
    name: "Página de vendas de um desafio online",
    filter: "Sites e páginas",
    category: "Landing Page",
    description: "Página de vendas do Desafio Look Pronto, com promessa clara, provas reais, explicação do método e chamada para a inscrição.",
    problem: "Apresentar o desafio e levar a visitante até a inscrição em uma única página.",
    tech: ["HTML", "CSS", "JavaScript"],
    mockup: "landing", image: "assets/projects/vendas-1.jpg", site: "https://laitartlucas.github.io/Pagina-de-vendas/", url: "https://github.com/laitartlucas/Pagina-de-vendas", placeholder: false,
    role: "Desenvolvimento",
    challenge: [
      "Um desafio de 7 dias para montar 40 looks com apenas 10 peças precisava de uma página que explicasse a proposta e convencesse a visitante a participar."
    ],
    solution: "Uma landing page com a promessa logo no topo, depoimentos reais, identificação com as dores da visitante, o método em três passos e o botão de inscrição. Hoje a página mostra as vendas como encerradas.",
    features: [
      "Promessa e benefícios no primeiro bloco",
      "Seção de provas reais, com depoimentos",
      "Explicação do método em três passos",
      "Botão de inscrição (hoje indicando vendas encerradas)"
    ],
    gallery: [
      { src: "assets/projects/vendas-1.jpg", caption: "Topo da página, com a promessa do desafio." },
      { src: "assets/projects/vendas-2.jpg", caption: "Seção que apresenta o guarda-roupa de 10 peças." }
    ],
    results: []
  }
];
