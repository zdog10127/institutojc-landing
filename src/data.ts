// Conteúdo extraído da landing page original:
// http://institutojc.com/portal/landing-page-carisio/

export const IMG_BASE =
  "https://institutojc.com/portal/wp-content/uploads/2026/07";

export const images = {
  logoDark: `${IMG_BASE}/Logo-JC-fundo-escuro-1.png`,
  logoFooter: `${IMG_BASE}/Logo-JC-fundo-escuro.png`,
  preparationTable: `${IMG_BASE}/ChatGPT-Image-16-de-jul.-de-2026-20_25_46.png`,
  cardEssencial: `${IMG_BASE}/Adobe-Express-2026-07-16-21.49.49.png`,
  cardOrientada: `${IMG_BASE}/Adobe-Express-2026-07-16-21.50.10-683x1024.png`,
  cardExclusiva: `${IMG_BASE}/Adobe-Express-2026-07-16-21.50.27-683x1024.png`,
};

export const videos = {
  heroYoutubeId: "Gs4nLzIhBn4",
};

export const links = {
  instagram: "https://www.instagram.com/institutojc/",
  youtube:
    "https://www.youtube.com/channel/UCfCfLIktEB-F_1BYSv2yNGw/videos?view_as=subscriber",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5534988241804&text=Ol%c3%a1,%20estou%20entrando%20em%20contato%20via%20link%20do%20Instagram",
};

export const steps = [
  {
    n: "①",
    title: "Compra Segura",
    text: "Realize sua compra pela plataforma de forma simples e 100% segura",
  },
  {
    n: "②",
    title: "Acesso Imediato",
    text: "Após confirmação do pagamento, você recebe acesso imediato ao Portal JC",
  },
  {
    n: "③",
    title: "Escolha da Música",
    text: "Você escolhe suas músicas conforme a modalidade contratada e inicia sua experiência de forma prática e organizada.",
  },
  {
    n: "④",
    title: "Desenvolvimento",
    text: "Nossa equipe inicia o desenvolvimento da sua preparação conforme a(s) música(s) e assessoria escolhida.",
  },
  {
    n: "⑤",
    title: "Ensaios",
    text: "Chegou a hora de transformar todo o planejamento em segurança, confiança e naturalidade para o Grande Dia.",
  },
  {
    n: "⑥",
    title: "Ajuste Finais",
    text: "Realizamos os últimos alinhamentos para que tudo esteja pronto e exatamente como planejado.",
  },
  {
    n: "⑦",
    title: "Viva esse Momento!",
    text: "Agora é só aproveitar! Dance com tranquilidade, emocione seus convidados e transforme esse momento numa lembrança inesquecível.",
  },
];

export const comparisonNote =
  "1 COREOGRAFIA = 1 música de dança a dois ou 2 músicas de danças soltas devidamente editadas para o tempo ideal de dança.";

export interface PricingCard {
  id: string;
  image: string;
  name: string;
  price: string;
  includes: string[];
  courtesy: string[];
  choreographyReceives: string[];
  footnotes: string[];
}

export const pricingCards: PricingCard[] = [
  {
    id: "essencial",
    image: images.cardEssencial,
    name: "Assessoria Essencial",
    price: "R$ 99",
    includes: [
      "Acesso ao Curso Completo de Valsa",
      "Acesso à biblioteca de Valsas pré editadas",
      "Acesso às Instruções da Metodologia JC para uma dança perfeita",
      "Checklist JC para o grande dia",
    ],
    courtesy: [
      "Acesso ao Acervo JC com mais de 580 Trilhas/Coreografias, entre danças A2 ou Soltas",
    ],
    choreographyReceives: [
      "Vídeo profissional da(s) coreografia(s) escolhida(s)",
      "Trilha(s) editada(s) profissionalmente",
      "Vídeo aulas com dicas dos principais movimentos",
    ],
    footnotes: [
      "Os prazos de entrega variam conforme a(s) coreografia(s) escolhida(s) e serão informados no momento da seleção",
      "As trilhas são entregues individualmente. Junções, cortes ou edições adicionais podem ser contratados separadamente. O mesmo é válido para alterações em coreografias",
      "As vídeo aulas dos movimentos são disponibilizadas como cortesia para coreografias A2 e para movimentos de maior dificuldade",
    ],
  },
  {
    id: "orientada",
    image: images.cardOrientada,
    name: "Assessoria Orientada",
    price: "R$ 599",
    includes: [
      "1 Atendimento online + 4 Ensaios Presenciais com um Professor credenciado JC",
      "Desenvolvimento de até 2 (duas) coreografias adaptadas ao seu perfil",
      "Acesso às Instruções da Metodologia JC para uma dança perfeita",
      "Checklist JC para o grande dia",
      "Gravação em vídeo da coreografia durante os ensaios para facilitar os estudos em casa",
    ],
    courtesy: [
      "Acesso às playlists JC com sugestões das melhores músicas para a dança no seu grande dia",
      "Edição profissional da(s) música(s) escolhida(s)",
      "Acesso ao Curso Completo de Valsa",
      "Acesso à biblioteca de Valsas pré editadas",
    ],
    choreographyReceives: [],
    footnotes: [
      "O local dos ensaios será determinado pelo Professor Credenciado e poderá ser negociado um upgrade diretamente com ele;",
      "1 COREOGRAFIA = 1 música de dança a dois ou 2 músicas de danças soltas devidamente editadas;",
      "O Professor Credenciado JC entrará em contato para realizar um estudo de perfil e indicar as playlists mais adequadas para você;",
    ],
  },
  {
    id: "exclusiva",
    image: images.cardExclusiva,
    name: "Assessoria Exclusiva",
    price: "R$ 999",
    includes: [
      "1 Atendimento online + 5 Ensaios Presenciais + com um Professor credenciado JC",
      "Desenvolvimento de até 3 (três) coreografias totalmente exclusivas",
      "Acesso às Instruções da Metodologia JC para uma dança perfeita",
      "Checklist JC para o grande dia",
      "Gravação em vídeo da coreografia durante os ensaios para facilitar os estudos em casa",
    ],
    courtesy: [
      "Acesso às playlists JC com sugestões das melhores músicas para a dança no seu grande dia",
      "Edição profissional e personalizada da(s) música(s) escolhida(s)",
      "Acesso ao Curso Completo de Valsa",
      "Acesso à biblioteca de Valsas pré editadas",
      "1 Lapidação personalizada da(s) coreografia(s)",
    ],
    choreographyReceives: [],
    footnotes: [
      "O local dos ensaios será determinado pelo Professor Credenciado e poderá ser negociado um upgrade diretamente com ele;",
      "1 COREOGRAFIA = 1 música de dança a dois ou 2 músicas de danças soltas devidamente editadas;",
      "O Professor Credenciado JC entrará em contato para realizar um estudo de perfil e indicar as playlists mais adequadas para você;",
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Nunca Dancei. Vou conseguir?",
    answer:
      "Sim. A Metodologia JC foi desenvolvida para atender desde pessoas sem qualquer experiência até quem deseja uma apresentação sofisticada. Cada assessoria oferece um nível diferente de acompanhamento para que você evolua com segurança e tranquilidade.",
  },
  {
    question: "Com quanto tempo de antecedência é ideal começar?",
    answer:
      "Sugerimos a antecedência mínima de 4 meses para aproveitar o processo com calma e tranquilidade. Porém até 15 dias antes é possível desenvolver sua dança (mais simplificada) de forma segura.\n\nO fato é: Quanto antes você contratar, MELHOR! Assim você aproveita valores sem atualizações, todo o material fica disponível até a data do seu evento (independente da data de compra) e você tem muito mais flexibilidade / tranquilidade para aproveitar o processo.",
  },
  {
    question: "Qual a diferença entre as Assessorias?",
    answer:
      "A Assessoria Essencial é ideal para quem busca autonomia e economia.\n\nA Orientada oferece acompanhamento de um Professor Credenciado JC.\n\nA Exclusiva, além de oferecer acompanhamento de um Professor Credenciado JC, proporciona uma experiência com maior nível de personalização e desenvolvimento individual.",
  },
  {
    question: "Posso escolher qualquer música?",
    answer:
      "Sim. Você pode utilizar músicas de sua preferência ou solicitar sugestões da nossa equipe. Dependendo da assessoria escolhida, as trilhas poderão ser editadas conforme a Metodologia JC ou de forma totalmente personalizada.",
  },
  {
    question: "Os ensaios são Presenciais ou online?",
    answer:
      "Os ensaios previstos nas assessorias Orientada e Personalizada são presenciais, realizados por Professores Credenciados JC. Mesmo na Assessoria Essencial, caso deseje, ensaios extras, mentorias online e outros serviços, eles também poderão ser contratados posteriormente.",
  },
  {
    question: "Em quanto tempo recebo acesso ao Portal JC?",
    answer:
      "O acesso é liberado automaticamente após a confirmação do pagamento, permitindo que você inicie sua preparação imediatamente.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Em todas as assessorias nossa equipe estará disponível para esclarecer dúvidas e prestar suporte durante toda a sua preparação por meio dos canais oficiais de atendimento. Entretanto, nas Assessorias Orientada e Exclusiva o Professor Credenciado JC estará sempre à disposição para te atender de forma direta e personalizada.",
  },
  {
    question: "Posso fazer upgrade da minha assessoria depois?",
    answer:
      "Sim. Caso deseje uma assessoria mais completa ou adicionar novos serviços durante sua preparação, basta solicitar o upgrade diretamente pelo Portal JC ou pelo nosso atendimento.",
  },
  {
    question: "Vocês atendem todo o Brasil?",
    answer:
      "Sim. Os materiais digitais podem ser acessados de qualquer lugar. Já os serviços presenciais dependem da disponibilidade de um Professor Credenciado JC na sua região.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Sim, 100% segura! Todos os pagamentos são processados pela Kiwify, uma plataforma reconhecida internacionalmente pela segurança e proteção dos dados. Após a confirmação do pagamento, seu acesso é liberado imediatamente.",
  },
];
