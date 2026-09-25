/**
 * Conteúdo do site da GLDN Tech — fonte: Documents/Plano de Negócio — GLDN Tecnologia.docx
 * e o modelo de Proposta Comercial do Diagnóstico. Edite textos, preços e contatos aqui;
 * as páginas só compõem estes dados com o design system.
 */
import type { IconName } from "@ds/components";

export const company = {
  name: "GLDN Tech",
  legalName: "GLDN Tecnologia Ltda",
  tagline: "Soluções em Copilot & IA para empresas",
  url: "https://gldntech.com.br",
  email: "contato@gldntech.com.br",
  linkedin: "https://www.linkedin.com/company/gldn",
  founder: "Rodrigo Galdino",
  description:
    "Fazemos o Microsoft Copilot da sua empresa gerar retorno mensurável, com segurança e custo sob controle — em qualquer sistema que você já usa, Dynamics incluído.",
};

export const nav = [
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Dynamics", href: "/dynamics" },
  { label: "Capacitação", href: "/capacitacao" },
  { label: "Sobre", href: "/sobre" },
];

export const primaryCta = { label: "Agendar diagnóstico", href: "/contato?interesse=diagnostico" };

/**
 * Preço público do Diagnóstico (oferta de entrada). Os demais produtos saem em proposta.
 * Para exibir outra faixa, altere aqui.
 */
export const diagnosticPrice = { from: "R$ 9.000", note: "preço fechado conforme o porte, impostos inclusos" };

export type Card = { icon: IconName; title: string; description: string };

export const pains: Card[] = [
  { icon: "circle-dashed", title: "Adoção superficial", description: "O uso fica em resumir e-mail e reunião. A licença está paga, mas o ganho de tempo não aparece em nenhum indicador." },
  { icon: "shield-alert", title: "Risco de exposição de dados", description: "O Copilot mostra tudo o que cada pessoa já pode ver. Permissões antigas no SharePoint e no OneDrive viram risco real quando a IA é ligada." },
  { icon: "coins", title: "Custo difícil de prever", description: "Agentes do Copilot Studio consomem créditos de um pool compartilhado. O experimento de um time pode esgotar a cota de todos, sem dono claro do consumo." },
  { icon: "compass", title: "Falta de direção", description: "Não há casos de uso priorizados por área nem métrica de retorno. A diretoria não sabe se o investimento está se pagando." },
];

export const audiences: Card[] = [
  { icon: "users", title: "Usuários", description: "Produtividade real no dia a dia — não só familiaridade com o chat." },
  { icon: "shield-check", title: "TI", description: "Governança, segurança dos dados e controle do custo de licenças e créditos." },
  { icon: "trending-up", title: "Diretoria e financeiro", description: "ROI mensurável e previsibilidade de gasto com IA." },
];

export const idealFor = [
  { title: "Empresas de 50 a 500 usuários", text: "Já compraram o Copilot e ainda não veem retorno." },
  { title: "Empresas avaliando a compra", text: "Querem decidir com dados: prontidão, licenças e um piloto controlado." },
  { title: "Usuários de Dynamics 365 ou Power Platform", text: "Querem agentes conectados ao ERP, não só ao Office." },
];

export type Pillar = Card & { slug: string; items: string[] };

export const pillars: Pillar[] = [
  {
    slug: "estrategia", icon: "compass", title: "Estratégia e adoção",
    description: "Onde a IA gera valor na sua empresa e como fazer o time usar de verdade.",
    items: ["Diagnóstico de prontidão", "Casos de uso por área com método Lean (Gemba)", "KPIs e ROI por função", "Programa de Champions", "Comunicação e gestão da mudança"],
  },
  {
    slug: "governanca", icon: "shield-check", title: "Segurança, governança e compliance",
    description: "O Copilot encontra só o que deve — com trilha de auditoria e aderência à LGPD.",
    items: ["Avaliação de oversharing no SharePoint e OneDrive", "Microsoft Purview: rótulos, DLP e retenção", "Entra ID: acesso condicional e convidados", "Ciclo de vida de agentes e ambientes Power Platform", "Auditoria de uso e aderência à LGPD"],
  },
  {
    slug: "finops", icon: "wallet", title: "FinOps de Copilot",
    description: "Licenças certas para as pessoas certas e créditos com dono e orçamento.",
    items: ["Modelos de licença: Chat, Business/Enterprise e Studio", "O que consome créditos e o que não consome", "Modelo de compra: pay-as-you-go, pacote ou pré-compra", "Billing policies e alertas de orçamento", "Relatório mensal de consumo e chargeback por área"],
  },
  {
    slug: "capacitacao", icon: "graduation-cap", title: "Capacitação de usuários",
    description: "Trilhas práticas por nível e por área, com exemplos do trabalho de cada time.",
    items: ["Níveis essencial, intermediário e avançado", "Trilhas para Financeiro, RH, Comercial, Jurídico e Operações", "Trilha específica para a TI", "Turmas de até 20 pessoas"],
  },
  {
    slug: "agentes", icon: "workflow", title: "Agentes e automação",
    description: "Agentes que resolvem processos reais, com custo analisado antes de construir.",
    items: ["Copilot Studio: conhecimento, tópicos e ações", "Conectores para Exchange, Teams e Microsoft Graph", "Power Automate e agent flows", "Agentes externos com análise de custo prévia", "Testes e publicação controlada"],
  },
  {
    slug: "business-apps", icon: "database", title: "Integração com Business Apps",
    description: "Copilot ligado ao ERP e aos sistemas que já rodam a sua operação.",
    items: ["Copilot nativo no Dynamics 365 (F&O, Business Central, CE)", "Agentes conectados ao Dataverse e a dados de ERP", "Integração com sistemas legados", "Consulta de pedido, aprovações, cobrança e atendimento interno"],
  },
];

export const coe = {
  title: "Sustentação e Centro de Excelência",
  description: "Acompanhamento mensal de adoção, custo e novos casos de uso; atualização sobre as mudanças da Microsoft; evolução do portfólio de agentes.",
};

export type Product = { icon: IconName; name: string; description: string; effort: string };

/** Produtos de escopo fechado (turnkey). Preços saem na proposta, exceto o Diagnóstico. */
export const products: Product[] = [
  { icon: "search-check", name: "Diagnóstico Copilot Readiness", description: "Segurança, licenças, adoção e casos de uso avaliados com dados do seu ambiente, mais um roadmap de 90 dias.", effort: "3 semanas" },
  { icon: "shield-check", name: "Governança e Segurança", description: "Correção dos riscos de exposição e políticas de uso de IA no Microsoft 365 e na Power Platform.", effort: "60 a 100 horas" },
  { icon: "receipt", name: "FinOps de Créditos", description: "Setup de billing policies, alertas de orçamento e o primeiro relatório de consumo por área.", effort: "20 a 30 horas" },
  { icon: "presentation", name: "Treinamento por turma", description: "Turma de até 20 pessoas, 4 horas, com trilha adaptada à área e ao nível do grupo.", effort: "4 horas por turma" },
  { icon: "bot", name: "Agente simples", description: "Agente de conhecimento publicado no Teams, com fontes oficiais da empresa.", effort: "Escopo fechado" },
  { icon: "factory", name: "Agente integrado ao Dynamics", description: "Agente conectado ao Dynamics 365 ou ao Dataverse para consultas e ações no ERP.", effort: "Escopo fechado" },
  { icon: "refresh-cw", name: "Kaizen de IA", description: "Uma semana dentro de uma área: mapear o fluxo, eliminar desperdícios e implantar agentes com métricas de antes e depois.", effort: "1 área, 1 semana" },
];

export const engagementModels = [
  {
    number: "01", name: "Projeto fechado", audience: "Para entradas e entregas com resultado claro.", kicker: "Turnkey",
    features: [
      { icon: "file-check" as IconName, label: "Escopo, entregáveis e aceite por escrito" },
      { icon: "wallet" as IconName, label: "50% no início, 50% no aceite" },
      { icon: "route" as IconName, label: "Mudanças via pedido de mudança aprovado" },
    ],
  },
  {
    number: "02", name: "Sustentação mensal", audience: "Para evoluir adoção, custo e agentes todo mês.", kicker: "Banco de horas", featured: true, badge: "Continuidade",
    features: [
      { icon: "timer" as IconName, label: "Pacotes de 20, 40 ou 80 horas por mês" },
      { icon: "hourglass" as IconName, label: "Horas válidas por 3 meses" },
      { icon: "bar-chart-3" as IconName, label: "Relatório mensal de adoção e consumo" },
      { icon: "refresh-cw" as IconName, label: "Atualização sobre mudanças da Microsoft" },
    ],
  },
  {
    number: "03", name: "Treinamento por turma", audience: "Para capacitar áreas inteiras.", kicker: "Por turma",
    features: [
      { icon: "users" as IconName, label: "Até 20 pessoas por turma" },
      { icon: "clock" as IconName, label: "4 horas, presencial ou remoto" },
      { icon: "clipboard-list" as IconName, label: "Cobrado por turma, não por hora" },
    ],
  },
];

export const journey = [
  { number: "01", title: "Diagnóstico", description: "Três semanas para medir segurança, licenças, adoção e retorno — e sair com um roadmap de 90 dias." },
  { number: "02", title: "Projeto", description: "Execução do que o roadmap priorizou, com escopo fechado, entregáveis e critérios de aceite." },
  { number: "03", title: "Sustentação", description: "Banco de horas mensal para acompanhar adoção e custo e evoluir o portfólio de agentes." },
];

export const differentials: Card[] = [
  { icon: "factory", title: "16 anos de Dynamics", description: "Agentes do Copilot integrados a ambientes de ERP de verdade — não só ao pacote Office." },
  { icon: "key-round", title: "Credibilidade com a TI", description: "Experiência com SSO, SAML e rollouts de ERP em vários países: EUA, Canadá e Brasil." },
  { icon: "refresh-cw", title: "Método Lean", description: "Kaizen, Gemba e PDCA para mapear processos e medir o ganho — não só ensinar prompt." },
];

export const positioning = [
  { icon: "ban" as IconName, title: "Não revendemos licenças.", text: "Recomendamos o que você precisa comprar — e o que pode cortar." },
  { icon: "ban" as IconName, title: "Não é curso de prompt.", text: "Capacitação entra junto com governança, custo e agentes." },
  { icon: "ban" as IconName, title: "Não é material genérico.", text: "Trabalhamos no seu tenant, com os seus dados e processos." },
  { icon: "circle-check" as IconName, title: "Especialista e ponta a ponta.", text: "Do diagnóstico ao agente funcionando dentro do Dynamics." },
];

export const diagnostic = {
  questions: [
    { icon: "shield-check" as IconName, title: "Estamos seguros?", description: "Quais dados sensíveis estão expostos ao Copilot hoje e o que corrigir primeiro." },
    { icon: "wallet" as IconName, title: "Estamos pagando o certo?", description: "Quem precisa de licença, quem não usa e como reduzir o consumo de créditos." },
    { icon: "trending-up" as IconName, title: "Onde está o retorno?", description: "Quais 5 a 10 casos de uso, por área, geram mais ganho de tempo." },
    { icon: "route" as IconName, title: "O que fazer em 90 dias?", description: "Um plano priorizado, com esforço e investimento estimados." },
  ],
  scope: [
    { icon: "lock" as IconName, title: "Segurança e governança", description: "Permissões e compartilhamentos no SharePoint, OneDrive e Teams; rótulos e DLP no Purview; acesso no Entra ID; quem pode criar e publicar agentes." },
    { icon: "coins" as IconName, title: "Licenciamento e créditos", description: "Distribuição e uso real das licenças; modelo de compra de créditos; consumo por ambiente e por agente; billing policies." },
    { icon: "bar-chart-3" as IconName, title: "Adoção e uso", description: "Relatórios de uso por área e aplicativo, entrevistas com usuários-chave e nível de maturidade." },
    { icon: "list-checks" as IconName, title: "Casos de uso", description: "Mapeamento de processos em 3 áreas prioritárias, com tarefas repetitivas e ganho potencial em horas." },
    { icon: "database" as IconName, title: "Integrações (opcional)", description: "Conexão de agentes a sistemas que você já usa: Dynamics 365, Dataverse, ERPs e fontes externas." },
  ],
  schedule: [
    { number: "S1", title: "Levantamento", description: "Kick-off, acesso de leitura aos portais de administração e coleta de relatórios de uso, licenças e consumo. Sua TI: 4 horas." },
    { number: "S2", title: "Análise e Gemba", description: "Riscos de exposição, entrevistas e observação do trabalho em 3 áreas, cálculo do ganho potencial. Usuários-chave: 1 hora cada." },
    { number: "S3", title: "Roadmap", description: "Priorização dos casos de uso, modelagem de custo de licenças e créditos e plano de 90 dias. Sponsor: 1 hora de validação." },
    { number: "✓", title: "Apresentação", description: "Apresentação executiva de 1h30 para diretoria e TI, com todos os entregáveis." },
  ],
  deliverables: [
    { icon: "file-text" as IconName, title: "Relatório executivo", description: "Cerca de 10 páginas: achados principais, nível de maturidade e recomendações para a diretoria." },
    { icon: "file-spreadsheet" as IconName, title: "Mapa de riscos de exposição", description: "Sites, bibliotecas e compartilhamentos de risco, por criticidade e com ação sugerida." },
    { icon: "receipt" as IconName, title: "Análise de licenças e créditos", description: "Uso por usuário, licenças ociosas, projeção de consumo e economia estimada em reais." },
    { icon: "list-checks" as IconName, title: "Portfólio de casos de uso", description: "5 a 10 casos priorizados por área, com ganho estimado em horas por mês." },
    { icon: "route" as IconName, title: "Roadmap de 90 dias", description: "Ações em ordem de prioridade, com esforço, responsável sugerido e investimento estimado." },
  ],
  premises: [
    "Acesso somente leitura (Global Reader ou equivalente) aos portais de administração",
    "Usuários-chave de 3 áreas disponíveis para entrevistas na semana 2",
    "Trabalho remoto, com visitas presenciais quando combinadas",
    "Nenhuma configuração do seu ambiente é alterada",
  ],
  outOfScope: [
    "Correção de permissões ou configuração de políticas",
    "Treinamento de usuários",
    "Construção de agentes ou integrações",
    "Compra ou revenda de licenças e créditos da Microsoft",
  ],
  conditions: [
    { title: "Pagamento em duas parcelas", text: "50% na assinatura e 50% na apresentação executiva." },
    { title: "Boleto ou Pix", text: "Com nota fiscal de serviços." },
    { title: "Metade do valor vira crédito", text: "Se você contratar o projeto seguinte em até 60 dias." },
    { title: "Os entregáveis são seus", text: "Todos passam a ser da sua empresa após o pagamento." },
  ],
  after: [
    { title: "Governança e Segurança", text: "Correção dos riscos mapeados e políticas de uso de IA." },
    { title: "Capacitação", text: "Trilhas por nível e por área, cobradas por turma." },
    { title: "Agentes sob medida", text: "Construção dos casos de uso priorizados, inclusive integrados ao ERP." },
    { title: "Sustentação mensal", text: "Banco de horas para adoção, custo e evolução de agentes." },
  ],
};

export const dynamics = {
  inScope: [
    "Agentes de Copilot embutidos no Finance & Operations, Business Central ou Customer Engagement",
    "Governança de dados e permissões num ambiente Dynamics 365 já existente",
    "Automação de processos do Dynamics via Copilot Studio e Power Automate",
    "Agentes conectados ao Dataverse e a dados de ERP",
    "Integração com sistemas legados",
  ],
  outOfScope: [
    "Implementação completa de ERP do zero",
    "Upgrades de versão e migrações AX → D365",
    "Consultoria funcional pura (parametrização de módulo, sem IA)",
  ],
  useCases: [
    { icon: "search" as IconName, title: "Consulta de pedido", description: "Status, itens e entrega de um pedido perguntando no Teams, sem abrir o ERP." },
    { icon: "badge-check" as IconName, title: "Aprovações", description: "Pedidos de compra, despesas e documentos aprovados pela conversa, com as regras do ERP." },
    { icon: "receipt" as IconName, title: "Cobrança", description: "Títulos em aberto, histórico do cliente e rascunho de contato de cobrança num só pedido." },
    { icon: "headset" as IconName, title: "Atendimento interno", description: "Dúvidas de processo respondidas com base nos dados e nos procedimentos oficiais." },
  ],
};

export const training = {
  levels: [
    { number: "01", title: "Essencial", description: "Como pedir, revisar e confiar na resposta. O Copilot no Outlook, Teams, Word e Excel do dia a dia." },
    { number: "02", title: "Intermediário", description: "Prompts por área, análise de dados, documentos longos e reuniões que viram plano de ação." },
    { number: "03", title: "Avançado", description: "Agentes, Copilot Studio e automações simples para quem vai multiplicar o uso no time." },
  ],
  areas: {
    Financeiro: ["Análise de planilhas e variações sem fórmula", "Relatórios de fechamento e comentários de resultado", "Conferência e resumo de contratos e notas"],
    RH: ["Descrições de vaga e roteiros de entrevista", "Políticas internas respondidas com fonte oficial", "Comunicados e materiais de integração"],
    Comercial: ["Preparação de reunião com histórico do cliente", "Propostas e follow-ups no tom certo", "Resumo de oportunidades e próximos passos"],
    Jurídico: ["Revisão e comparação de cláusulas", "Resumo de contratos longos", "Minutas a partir de modelos aprovados"],
    Operações: ["Procedimentos e checklists padronizados", "Análise de indicadores e desvios", "Atas e planos de ação de reuniões de rotina"],
    TI: ["Governança e permissões para a IA", "Primeiro agente no Copilot Studio", "Monitoramento de uso, custo e suporte"],
  } as Record<string, string[]>,
  formats: [
    { icon: "users" as IconName, title: "Turmas de até 20 pessoas", description: "Quatro horas por turma, presencial ou remoto, cobradas por turma — não por hora." },
    { icon: "user-round" as IconName, title: "Programa de Champions", description: "Multiplicadores internos que sustentam a adoção depois do treinamento." },
    { icon: "clipboard-list" as IconName, title: "Material de apoio", description: "Guias de prompt por área e exemplos do trabalho real de cada time." },
  ],
};

export const founder = {
  name: "Rodrigo Galdino",
  role: "Fundador",
  bio: [
    "20 anos em TI, cerca de 16 no ecossistema Microsoft Dynamics.",
    "Rollouts de ERP em vários países — EUA, Canadá e Brasil — e cerca de 11 anos à frente de processos de suporte de ERP em multinacionais.",
    "Integrações, modernização de sistemas e autenticação corporativa (SSO via SAML 2.0).",
    "Formação Lean aplicada: Kaizen, Gemba, PDCA e trabalho padronizado.",
    "5 certificações Microsoft, incluindo MB-500 (Dynamics 365 Finance & Operations Developer).",
  ],
};

export const faq = [
  { question: "O diagnóstico altera alguma configuração do nosso ambiente?", answer: "Não. Trabalhamos com acesso somente leitura aos portais de administração. Correções de permissões e políticas são um projeto à parte, se você decidir fazer." },
  { question: "Quanto custa e quanto tempo leva o diagnóstico?", answer: `Três semanas a partir do kick-off, com investimento a partir de ${diagnosticPrice.from}, ${diagnosticPrice.note}. Se você contratar o projeto seguinte em até 60 dias, metade do valor vira crédito.` },
  { question: "Precisamos já ter licenças do Copilot?", answer: "Não. Para quem está avaliando a compra, o diagnóstico mostra a prontidão do ambiente, quantas licenças fazem sentido e para quem — antes de qualquer compra." },
  { question: "A GLDN vende licenças da Microsoft?", answer: "Não. Licenças e créditos são contratados pela sua empresa diretamente com a Microsoft ou com o seu parceiro CSP. Isso nos deixa livres para recomendar o que você realmente precisa." },
  { question: "Vocês fazem implantação de ERP?", answer: "Não. Trabalhamos com IA aplicada a ambientes Dynamics que já existem: agentes, automações e governança. Implantação de ERP, upgrades e migrações ficam fora do nosso escopo." },
  { question: "Como os dados da empresa são tratados?", answer: "Com confidencialidade, sob NDA e em conformidade com a LGPD. Os entregáveis do diagnóstico são de propriedade da sua empresa após o pagamento." },
  { question: "Como é a contratação depois do diagnóstico?", answer: "Projetos saem com escopo fechado, entregáveis e critérios de aceite por escrito (50% no início, 50% no aceite). Para evolução contínua, há banco de horas mensal." },
];

/** Opções do formulário de contato — alinhadas aos campos da proposta comercial. */
export const leadForm = {
  interests: [
    { value: "diagnostico", label: "Diagnóstico Copilot Readiness" },
    { value: "governanca", label: "Governança e segurança" },
    { value: "finops", label: "Custo de licenças e créditos (FinOps)" },
    { value: "capacitacao", label: "Capacitação de usuários" },
    { value: "agentes", label: "Agentes e automação" },
    { value: "dynamics", label: "Copilot no Dynamics 365" },
    { value: "kaizen", label: "Kaizen de IA" },
    { value: "sustentacao", label: "Sustentação mensal" },
    { value: "outro", label: "Outro assunto" },
  ],
  sizes: ["Até 50 usuários", "51 a 100 usuários", "101 a 300 usuários", "301 a 500 usuários", "Mais de 500 usuários"],
  copilotStatus: ["Já temos licenças do Copilot", "Estamos avaliando a compra", "Ainda não usamos o Copilot"],
  erp: ["Dynamics 365 Finance & Operations", "Dynamics 365 Business Central", "Dynamics 365 Customer Engagement", "Power Platform / Dataverse", "Outro ERP", "Não usamos"],
};

/**
 * Títulos e descrições para o Google e para compartilhamento. Título até ~48 caracteres (o
 * layout acrescenta " · GLDN Tech"); descrição até ~155. Use os termos que o cliente busca.
 */
export const seo = {
  home: {
    title: "Consultoria Microsoft Copilot e IA para empresas | GLDN Tech",
    description: "Consultoria em Microsoft 365 Copilot: segurança dos dados, custo de licenças e créditos sob controle, capacitação e agentes — inclusive no Dynamics 365.",
  },
  diagnostico: {
    title: "Diagnóstico Microsoft Copilot em 3 semanas",
    description: `Prontidão, riscos de exposição de dados, uso de licenças e créditos e casos de uso por área, com roadmap de 90 dias. Preço fechado a partir de ${diagnosticPrice.from}.`,
  },
  solucoes: {
    title: "Consultoria Copilot: governança, FinOps e agentes",
    description: "Governança e LGPD, FinOps de licenças e créditos, capacitação, agentes com Copilot Studio e integração com Dynamics 365. Projetos fechados ou banco de horas.",
  },
  dynamics: {
    title: "Copilot no Dynamics 365: agentes para o seu ERP",
    description: "Agentes de Copilot no Finance & Operations, Business Central e Customer Engagement, conectados ao Dataverse. 16 anos de experiência em Microsoft Dynamics.",
  },
  capacitacao: {
    title: "Treinamento de Microsoft Copilot para empresas",
    description: "Treinamento de Copilot por nível e por área — Financeiro, RH, Comercial, Jurídico, Operações e TI. Turmas de até 20 pessoas, cobradas por turma.",
  },
  sobre: {
    title: "Sobre: consultoria de Copilot e Dynamics 365",
    description: "Consultoria de Microsoft Copilot fundada por Rodrigo Galdino: 20 anos em TI, 16 no ecossistema Dynamics, método Lean para medir o retorno da IA.",
  },
  contato: {
    title: "Solicite uma proposta de consultoria Copilot",
    description: "Conte onde sua empresa está com o Microsoft Copilot. Respondemos com os próximos passos e uma proposta com escopo e preço fechados.",
  },
  privacidade: {
    title: "Política de privacidade",
    description: "Como a GLDN Tecnologia trata os dados enviados pelo site, conforme a LGPD.",
  },
  conteudo: {
    title: "Artigos sobre Microsoft Copilot, custo e governança",
    description: "Guias práticos sobre Microsoft Copilot: quanto custa um agente, oversharing no SharePoint, créditos do Copilot Studio e Copilot no Dynamics 365.",
  },
};
