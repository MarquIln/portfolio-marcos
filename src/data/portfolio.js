import agesI1 from '../assets/ages-1/AGESI-1.png';
import agesI2 from '../assets/ages-1/AGESI-2.png';
import agesI3 from '../assets/ages-1/AGESI-3.png';
import agesI4 from '../assets/ages-1/AGESI-4.png';
import agesI5 from '../assets/ages-1/AGESI-5.png';
import agesI6 from '../assets/ages-1/AGESI-6.png';
import agesI7 from '../assets/ages-1/AGESI-7.png';
import agesII1 from '../assets/ages-2/AGESII-1.png';
import agesII2 from '../assets/ages-2/AGESII-2.png';
import agesII3 from '../assets/ages-2/AGESII-3.png';
import agesII4 from '../assets/ages-2/AGESII-4.png';
import agesII5 from '../assets/ages-2/AGESII-5.png';
import agesIII1 from '../assets/ages-3/AGESIII-1.png';
import agesIII2 from '../assets/ages-3/AGESIII-2.png';
import agesIII3 from '../assets/ages-3/AGESIII-3.png';
import agesIII4 from '../assets/ages-3/AGESIII-4.png';
import break1 from '../assets/break/Callendar.png';
import break2 from '../assets/break/Challenge Done-1.png';
import break3 from '../assets/break/Challenge Done.png';
import break4 from '../assets/break/Redraw.png';
import break5 from '../assets/break/Rewards Gallery.png';
import ladoB1 from '../assets/lado-b/LadoB-1.png';
import ladoB2 from '../assets/lado-b/LadoB-2.png';
import ladoB3 from '../assets/lado-b/LadoB-3.png';
import ladoB4 from '../assets/lado-b/LadoB-4.png';
import ladoB5 from '../assets/lado-b/LadoB-5.png';
import breakIcon from '../assets/system-icons/iconBreak.png';
import comunidadeUniversitariaIcon from '../assets/system-icons/iconComunidade.png';
import excedentesIcon from '../assets/system-icons/excedentes.png';
import ladoBIcon from '../assets/system-icons/iconLadoB.png';
import operaGaecoIcon from '../assets/system-icons/iconMPRS.png';
import powPowIcon from '../assets/system-icons/iconPowPow.png';
import retroTripIcon from '../assets/project-icons/retrotrip.png';
import rottaIcon from '../assets/system-icons/iconRotta.png';
import retroTrip1 from '../assets/retro-trip/RetroTrip-1.png';
import retroTrip2 from '../assets/retro-trip/RetroTrip-2.png';
import retroTrip3 from '../assets/retro-trip/RetroTrip-3.png';
import retroTrip4 from '../assets/retro-trip/RetroTrip-4.png';
import retroTrip5 from '../assets/retro-trip/RetroTrip-5.png';
import retroTrip6 from '../assets/retro-trip/RetroTrip-6.png';
import rotta1 from '../assets/rotta/Rotta-1.png';
import rotta2 from '../assets/rotta/Rotta-2.png';
import rotta3 from '../assets/rotta/Rotta-3.jpg';
import rotta4 from '../assets/rotta/Rotta-4.png';
import rotta5 from '../assets/rotta/Rotta-5.png';
import rotta6 from '../assets/rotta/Rotta-6.png';
import rotta7 from '../assets/rotta/Rotta-7.jpg';
import rotta8 from '../assets/rotta/Rotta-8.png';
import rotta9 from '../assets/rotta/Rotta-9.png';
import powPoPo1 from '../assets/pow-po-po/SPLASH.png';
import powPoPo2 from '../assets/pow-po-po/GAMEPLAY.png';
import powPoPo3 from '../assets/pow-po-po/SCREEN PLAY.png';
import powPoPo4 from '../assets/pow-po-po/UPGRADE.png';
import powPoPo5 from '../assets/pow-po-po/PAUSE.png';
import powPoPo6 from '../assets/pow-po-po/DEAD.png';
import finderIcon from '../assets/system-icons/finderIcon.png';
import safariIcon from '../assets/system-icons/safari.png';

function placeholderContribution(projectName) {
  return `Estrutura pronta para registrar a contribuicao desta pessoa no ${projectName}.`;
}

function placeholderRole() {
  return 'Papel a detalhar';
}

function createTeamMember({
  name,
  linkedin,
  projectName,
  role = placeholderRole(),
  contribution = placeholderContribution(projectName),
  tags = [],
  group,
  groupNote,
  meta,
  photoSrc,
  isPlaceholder = true,
}) {
  return {
    name,
    linkedin,
    role,
    contribution,
    tags,
    group,
    groupNote,
    meta,
    photoSrc,
    isPlaceholder,
  };
}

function createTeamGroup(projectName, group, members, defaults = {}) {
  return members.map((entry) => {
    const member = typeof entry === 'string' ? { name: entry } : entry;

    return createTeamMember({
      name: member.name,
      linkedin: member.linkedin,
      projectName,
      role: member.role ?? defaults.role ?? group,
      contribution: member.contribution ?? defaults.contribution ?? '',
      tags: member.tags ?? defaults.tags ?? [],
      group,
      groupNote: member.groupNote ?? defaults.groupNote,
      meta: member.meta ?? defaults.meta,
      photoSrc: member.photoSrc ?? defaults.photoSrc,
      isPlaceholder: false,
    });
  });
}

function projectTheme(theme) {
  return {
    accent: theme.accent,
    accentSoft: theme.accentSoft,
    accentStrong: theme.accentStrong,
    heroFrom: theme.heroFrom,
    heroTo: theme.heroTo,
    shadow: theme.shadow,
  };
}

function screenshot(src, alt, caption) {
  return { src, alt, caption };
}

const retroTripScreenshots = [
  screenshot(retroTrip1, 'Tela inicial do RetroTrip', 'Tela inicial com a identidade visual do app.'),
  screenshot(
    retroTrip2,
    'Exploracao visual no RetroTrip',
    'Exploracao guiada para deixar o conteudo mais convidativo.',
  ),
  screenshot(
    retroTrip3,
    'Fluxo de navegacao no RetroTrip',
    'Navegacao pensada para manter o ritmo do aprendizado.',
  ),
  screenshot(
    retroTrip4,
    'Tela imersiva do RetroTrip',
    'Ambiente visual mais imersivo para reforcar a curiosidade.',
  ),
  screenshot(
    retroTrip5,
    'Momento de progresso no RetroTrip',
    'Acompanhamento da jornada com foco em continuidade.',
  ),
  screenshot(
    retroTrip6,
    'Quiz do RetroTrip',
    'Interacoes curtas para revisar conteudo sem perder dinamismo.',
  ),
];

const rottaScreenshots = [
  screenshot(
    rotta1,
    'Tela do Rotta com destaque visual',
    'Primeira camada visual do app com linguagem de produto mais esportiva.',
  ),
  screenshot(
    rotta2,
    'Fluxo do Rotta',
    'Organizacao das informacoes para reduzir atrito de navegacao.',
  ),
  screenshot(
    rotta3,
    'Exploracao do Rotta',
    'Apresentacao de conteudo com foco em leitura rapida.',
  ),
  screenshot(
    rotta4,
    'Tela adicional do Rotta',
    'Composicao pensada para acompanhar calendario e contexto.',
  ),
  screenshot(
    rotta5,
    'Detalhe visual do Rotta',
    'Camada visual que reforca hierarquia sem deixar a interface pesada.',
  ),
  screenshot(
    rotta6,
    'Tela de dados do Rotta',
    'Dados apresentados com melhor contraste e leitura.',
  ),
  screenshot(
    rotta7,
    'Outra tela do Rotta',
    'Mais contexto de produto para quem quer explorar o app por completo.',
  ),
  screenshot(
    rotta8,
    'Tela detalhada do Rotta',
    'Detalhamento visual para aprofundar o conteudo sem perder ritmo.',
  ),
  screenshot(
    rotta9,
    'Tela final do Rotta',
    'Fechamento de fluxo com consistencia visual entre secoes.',
  ),
];

const ladoBScreenshots = [
  screenshot(ladoB1, 'Tela principal do LadoB', 'Primeira leitura visual do app dentro do portfolio.'),
  screenshot(ladoB2, 'Tela secundaria do LadoB', 'Continuidade visual para mostrar a cara do produto.'),
  screenshot(ladoB3, 'Outra tela do LadoB', 'Recorte do fluxo com linguagem mais autoral.'),
  screenshot(
    ladoB4,
    'Tela detalhada do LadoB',
    'Mais um momento da interface pronto para receber contexto.',
  ),
  screenshot(
    ladoB5,
    'Tela final do LadoB',
    'Fechamento da galeria com material visual ja existente.',
  ),
];

const comunidadeScreenshots = [
  screenshot(
    agesI1,
    'Tela da Comunidade Universitaria',
    'Primeira visao do produto dentro do ecossistema academico.',
  ),
  screenshot(
    agesI2,
    'Fluxo da Comunidade Universitaria',
    'Fluxo principal pensado para descoberta de conteudo e conexoes.',
  ),
  screenshot(
    agesI3,
    'Interface da Comunidade Universitaria',
    'Organizacao de informacoes para uso mais pratico no dia a dia.',
  ),
  screenshot(
    agesI4,
    'Tela adicional da Comunidade Universitaria',
    'Mais uma camada da experiencia focada em interacao entre usuarios.',
  ),
  screenshot(
    agesI5,
    'Detalhe do app Comunidade Universitaria',
    'Exemplo de continuidade visual ao longo do fluxo.',
  ),
  screenshot(
    agesI6,
    'Outra tela da Comunidade Universitaria',
    'Mais um recorte do produto pronto para ganhar contexto complementar.',
  ),
  screenshot(
    agesI7,
    'Tela final da Comunidade Universitaria',
    'Fechamento da galeria com material visual real ja disponivel.',
  ),
];

const excedentesScreenshots = [
  screenshot(
    agesII1,
    'Tela do Excedentes',
    'Primeiro contato com a plataforma e seu fluxo principal.',
  ),
  screenshot(
    agesII2,
    'Fluxo do Excedentes',
    'Navegacao pensada para organizar informacoes e disponibilidade.',
  ),
  screenshot(
    agesII3,
    'Interface do Excedentes',
    'Camada visual pronta para explicar a jornada do usuario.',
  ),
  screenshot(
    agesII4,
    'Tela adicional do Excedentes',
    'Mais um recorte do sistema ja com material real.',
  ),
  screenshot(
    agesII5,
    'Tela final do Excedentes',
    'Fechamento da galeria com continuidade visual do projeto.',
  ),
];

const operaGaecoScreenshots = [
  screenshot(agesIII1, 'Tela inicial do Operações MPRS', 'Visao geral do sistema com o contexto principal da operacao.'),
  screenshot(agesIII2, 'Fluxo do Operações MPRS', 'Navegacao institucional organizada para consulta mais objetiva.'),
  screenshot(agesIII3, 'Detalhe do Operações MPRS', 'Camada de conteudo estruturada para apoiar leitura e acompanhamento.'),
  screenshot(agesIII4, 'Outra tela do Operações MPRS', 'Mais um recorte real do projeto com linguagem visual consistente.'),
];

const powPoPoScreenshots = [
  screenshot(powPoPo1, 'Tela de abertura do Pow Po Po', 'Splash screen do app com a identidade principal do projeto.'),
  screenshot(powPoPo2, 'Gameplay do Pow Po Po', 'Momento principal de jogo mostrando a interacao central.'),
  screenshot(powPoPo3, 'Tela adicional do Pow Po Po', 'Recorte visual do fluxo de jogo com mais contexto de interface.'),
  screenshot(powPoPo4, 'Tela de upgrade do Pow Po Po', 'Espaco de progressao e evolucao dentro da experiencia.'),
  screenshot(powPoPo5, 'Tela de pausa do Pow Po Po', 'Estado intermediario do jogo para mostrar continuidade da interface.'),
  screenshot(powPoPo6, 'Tela de game over do Pow Po Po', 'Fechamento do fluxo com mais uma tela oficial do app.'),
];

const breakSideQuestsScreenshots = [
  screenshot(break1, 'Calendario do Break! Side Quests', 'Tela com recorte do fluxo ligado a organizacao das side quests.'),
  screenshot(break2, 'Desafio concluido no Break! Side Quests', 'Momento de conclusao dentro da jornada do app.'),
  screenshot(break3, 'Outra tela de desafio do Break! Side Quests', 'Mais um estado da experiencia mostrando progresso e retorno visual.'),
  screenshot(break4, 'Tela de redraw do Break! Side Quests', 'Recorte adicional do produto com foco na interacao principal.'),
  screenshot(break5, 'Galeria de recompensas do Break! Side Quests', 'Visualizacao das recompensas e da progressao do usuario.'),
];

const baseProjects = [
  {
    id: 'retrotrip',
    name: 'RetroTrip',
    finderSubtitle: 'App Store',
    searchTerms: 'retrotrip historia escola educacao gamificacao app store swiftui',
    source: {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/MarquIln/RetroTrip',
    },
    appStoreUrl: 'https://apps.apple.com/br/app/retrotrip/id6752355019?l=en-GB',
    supportingDocumentIds: ['retrotrip-privacy'],
    iconSrc: retroTripIcon,
    theme: projectTheme({
      accent: '#e8b45f',
      accentSoft: '#f7dd9a',
      accentStrong: '#3f5cff',
      heroFrom: '#0f1630',
      heroTo: '#3b4fc9',
      shadow: 'rgba(51, 79, 214, 0.34)',
    }),
    badges: ['Educacao', 'Historia', 'Gamificacao'],
    galleryRatio: 'portrait',
    summary:
      'Experiencia educacional gamificada que transforma o estudo de historia em uma jornada mais visual, curiosa e interativa.',
    motivationTitle: 'Por que o RetroTrip foi criado',
    motivation:
      'RetroTrip foi criado para tornar o estudo de historia na escola mais divertido, interessante e menos monotono.',
    motivationIsPlaceholder: false,
    screenshots: retroTripScreenshots,
    galleryPlaceholder:
      'A galeria ja esta conectada. Se voce quiser substituir ou expandir as telas, basta atualizar os assets oficiais do projeto.',
    contributionSummary:
      'Atuei em features centrais de produto e infraestrutura do app, com foco em Game Center, monetizacao, multiplayer e integracoes em CloudKit.',
    contributionStack: ['CloudKit', 'Game Center', 'Multiplayer', 'Ads', 'Monetizacao', 'Widgets', 'Store'],
    contributionHighlights: [
      'Implementei Ads e partes da camada de monetizacao.',
      'Trabalhei na integracao com Game Center e no multiplayer.',
      'Desenvolvi badges no mapa e a tela de perfil.',
      'Atuei no banco em CloudKit, nas chamadas para CloudKit e no seed da base.',
      'Tambem participei de widgets e da loja do app.',
    ],
    teamIntro:
      'Time do RetroTrip com os papeis confirmados ate agora.',
    team: [
      {
        name: 'Marcos Vinicius Raach',
        linkedin: 'https://www.linkedin.com/in/marcosraach/',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      },
      createTeamMember({
        name: 'Leonardo Simon',
        linkedin: 'https://www.linkedin.com/in/leonardosimon/',
        projectName: 'RetroTrip',
        role: 'UX/UI Designer',
        contribution: '',
        tags: ['Product Owner'],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Alex Fraga',
        linkedin: 'https://www.linkedin.com/in/alex-fraga1/',
        projectName: 'RetroTrip',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Antonio Costa',
        linkedin: 'https://www.linkedin.com/in/antoniocosta001/',
        projectName: 'RetroTrip',
        role: 'Developer',
        contribution: '',
        tags: ['Scrum Master'],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Eduardo Fensterseifer',
        linkedin: 'https://www.linkedin.com/in/eduardo-fensterseifer/',
        projectName: 'RetroTrip',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
    ],
  },
  {
    id: 'powpow',
    name: 'Pow Po Po',
    finderSubtitle: 'App Store',
    searchTerms: 'powpow pow po po github app projeto produto',
    source: {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/LuCecyl/PowPow',
    },
    appStoreUrl: 'https://apps.apple.com/es/app/pow-po-po/id6760563455',
    supportingDocumentIds: [],
    iconSrc: powPowIcon,
    theme: projectTheme({
      accent: '#ffb55e',
      accentSoft: '#ffdca8',
      accentStrong: '#ef6a52',
      heroFrom: '#261312',
      heroTo: '#da6b4f',
      shadow: 'rgba(222, 106, 79, 0.32)',
    }),
    badges: ['App Store', 'Produto', 'Projeto'],
    galleryRatio: 'portrait',
    summary:
      'Pow Po Po e um roguelike caotico de sobrevivencia em que uma galinha luta para escapar da fazenda usando ovos como armas, combinando humor, acao rapida e builds diferentes a cada partida.',
    motivationTitle: 'O que move o Pow Po Po',
    motivation:
      'O jogo foi criado para entregar uma experiencia de sobrevivencia veloz, caotica e divertida, em que cada run mistura pressao, progressao e combinacoes absurdas de ataques com ovos.',
    motivationIsPlaceholder: false,
    screenshots: powPoPoScreenshots,
    galleryPlaceholder:
      'Espaco pronto para screenshots oficiais do PowPow assim que elas forem selecionadas para o portfolio.',
    contributionSummary:
      'Participei do desenvolvimento do gameplay em time, com contribuicoes em sistemas centrais do jogo e destaque especial para os bosses e os poderes deles.',
    contributionStack: ['Gameplay Systems', 'Bosses', 'Boss Powers', 'Leaderboard', 'Game Center', 'Ads'],
    contributionHighlights: [
      'O time inteiro trabalhou junto no comportamento central do jogo, incluindo como a galinha se move e como os inimigos se movem.',
      'Minha maior contribuicao foi desenvolver os bosses e os poderes deles.',
      'Implementei o leaderboard do jogo.',
      'Trabalhei na integracao com Game Center.',
      'Atuei na camada de Ads do app.',
    ],
    teamIntro:
      'A estrutura da equipe ja esta pronta para nome, LinkedIn, papel e contribuicao de cada participante do PowPow.',
    team: [
      createTeamMember({
        name: 'Marcos Vinicius Raach',
        linkedin: 'https://www.linkedin.com/in/marcosraach/',
        projectName: 'Pow Po Po',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Luisa Cecilia',
        linkedin: 'https://www.linkedin.com/in/lucecyl/',
        projectName: 'Pow Po Po',
        role: 'UX/UI Designer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Fernanda Farias',
        linkedin: 'https://www.linkedin.com/in/fernanda-farias-uberti-34507926b/',
        projectName: 'Pow Po Po',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Barbara Dapper',
        linkedin: 'https://www.linkedin.com/in/barbara-dapper/',
        projectName: 'Pow Po Po',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Ana Poletto',
        linkedin: 'https://www.linkedin.com/in/ana-poletto-2a7222318/?locale=en_US',
        projectName: 'Pow Po Po',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
    ],
  },
  {
    id: 'thinkdifferentapp',
    name: 'Break! Side Quests',
    finderSubtitle: 'App Store',
    searchTerms: 'break side quests thinkdifferentapp think different github swift app',
    source: {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/MarquIln/ThinkDifferentApp',
    },
    appStoreUrl: 'https://apps.apple.com/es/app/break-side-quests/id6755115098',
    supportingDocumentIds: [],
    iconSrc: breakIcon,
    theme: projectTheme({
      accent: '#d3d6df',
      accentSoft: '#f1f3f8',
      accentStrong: '#63708c',
      heroFrom: '#131722',
      heroTo: '#3c465d',
      shadow: 'rgba(72, 86, 120, 0.3)',
    }),
    badges: ['App Store', 'iOS', 'Produto'],
    galleryRatio: 'portrait',
    summary:
      'Break! Side Quests transforma a rotina em pequenas aventuras diarias, com um desafio novo a cada vinte e quatro horas, badges colecionaveis e um streak que deixa o progresso mais memoravel.',
    motivationTitle: 'Que experiencia o Break! Side Quests quer criar',
    motivation:
      'O app foi criado para quebrar a rotina com side quests leves e curiosas, transformando pequenos desafios em um ritual diario de descoberta, conquista e continuidade.',
    motivationIsPlaceholder: false,
    screenshots: breakSideQuestsScreenshots,
    galleryPlaceholder:
      'A galeria esta pronta para receber as telas oficiais do Break! Side Quests quando voce decidir incluir esse material.',
    contributionSummary:
      'Atuei na base de dados em CloudKit, nos fluxos de conta e em telas centrais da experiencia, conectando interface e persistencia do app.',
    contributionStack: ['CloudKit', 'Login Flow', 'Database Seed', 'Stickers Screen', 'Account Management'],
    contributionHighlights: [
      'Estruturei o banco de dados em CloudKit.',
      'Implementei o fluxo de login, incluindo criar conta, deletar conta e logout.',
      'Desenvolvi a tela de stickers.',
      'Trabalhei nas chamadas para CloudKit e no seed para popular a base.',
    ],
    teamIntro:
      'Quando voce consolidar a equipe do Break! Side Quests, esta secao ja aceita nome, LinkedIn, papel e contribuicao individual.',
    team: [
      createTeamMember({
        name: 'Marcos Vinicius Raach',
        linkedin: 'https://www.linkedin.com/in/marcosraach/',
        projectName: 'Break! Side Quests',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Luisa Cecilia',
        linkedin: 'https://www.linkedin.com/in/lucecyl/',
        projectName: 'Break! Side Quests',
        role: 'UX/UI Designer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Enzo Tonatto',
        linkedin: 'https://www.linkedin.com/in/enzotonatto/',
        projectName: 'Break! Side Quests',
        role: 'Developer',
        contribution: '',
        tags: ['Product Owner'],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Carolina Silva',
        linkedin: 'https://www.linkedin.com/in/carolina-silva-dos-santos-a320111a7/',
        projectName: 'Break! Side Quests',
        role: 'Developer',
        contribution: '',
        tags: ['Product Owner'],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Lorenzo Fortes',
        linkedin: 'https://www.linkedin.com/in/lorenzo-fortes-573666174/',
        projectName: 'Break! Side Quests',
        role: 'Developer',
        contribution: '',
        tags: ['Scrum Master'],
        isPlaceholder: false,
      }),
    ],
  },
  {
    id: 'rotta',
    name: 'Rotta',
    finderSubtitle: 'Produto iOS',
    searchTerms: 'rotta motorsport formula 2 formula 3 f1 academy github',
    source: {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/MarquIln/Rotta',
    },
    hideSourceAction: true,
    supportingDocumentIds: [],
    iconSrc: rottaIcon,
    theme: projectTheme({
      accent: '#6ad9ff',
      accentSoft: '#d4f4ff',
      accentStrong: '#2f82ff',
      heroFrom: '#0c1b31',
      heroTo: '#1d4ed8',
      shadow: 'rgba(38, 111, 232, 0.32)',
    }),
    badges: ['Automobilismo', 'iOS', 'Guia'],
    galleryRatio: 'portrait',
    summary:
      'Guia de automobilismo pensado para acompanhar Formula 2, Formula 3 e F1 Academy com rankings, calendarios e glossario tecnico em uma interface mais clara.',
    motivationTitle: 'Por que o Rotta tomou forma',
    motivation:
      'O Rotta foi concebido para organizar informacoes complexas do automobilismo de base em uma experiencia mais limpa, facil de navegar e mais prazerosa para quem acompanha essas categorias.',
    motivationIsPlaceholder: false,
    screenshots: rottaScreenshots,
    galleryPlaceholder:
      'Essas telas ja mostram a direcao visual do Rotta. Se houver uma selecao melhor depois, a galeria pode ser atualizada sem mudar a estrutura da pagina.',
    contributionSummary:
      'Minha contribuicao ficou concentrada na camada de dados em CloudKit e em partes da interface ligadas ao conteudo tecnico do app.',
    contributionStack: ['CloudKit', 'Database Seed', 'Car Components Screen'],
    contributionHighlights: [
      'Trabalhei no banco de dados em CloudKit.',
      'Implementei chamadas para CloudKit.',
      'Montei o seed para popular a base no CloudKit.',
      'Desenvolvi a tela de componentes do carro.',
    ],
    teamIntro:
      'A estrutura da equipe do Rotta esta pronta para receber nomes, funcoes e contribuicoes detalhadas.',
    team: [
      createTeamMember({
        name: 'Marcos Vinicius Raach',
        linkedin: 'https://www.linkedin.com/in/marcosraach/',
        projectName: 'Rotta',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Giovana Diesel',
        linkedin: 'https://www.linkedin.com/in/giovana-diesel/',
        projectName: 'Rotta',
        role: 'Designer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Maria Eduarda Santellano',
        linkedin: 'https://www.linkedin.com/in/mariaeduardasantellano/',
        projectName: 'Rotta',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Sofia Leitão',
        linkedin: 'https://www.linkedin.com/in/sofiafleitao/',
        projectName: 'Rotta',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Isadora Guerra',
        linkedin: 'https://www.linkedin.com/in/isadoraferreiraguerra/',
        projectName: 'Rotta',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
    ],
  },
  {
    id: 'ladob',
    name: 'LadoB',
    finderSubtitle: 'Projeto visual',
    searchTerms: 'ladob lado b github ios app',
    source: {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/MarquIln/LadoB',
    },
    hideSourceAction: true,
    supportingDocumentIds: [],
    iconSrc: ladoBIcon,
    theme: projectTheme({
      accent: '#ff5faf',
      accentSoft: '#ffd7ea',
      accentStrong: '#5be0ff',
      heroFrom: '#241326',
      heroTo: '#a83dd4',
      shadow: 'rgba(147, 55, 197, 0.3)',
    }),
    badges: ['GitHub', 'App', 'Portfolio'],
    galleryRatio: 'portrait',
    summary:
      'Projeto com pagina propria para mostrar o app com mais presenca visual, enquanto os detalhes de contexto, motivacao e equipe ficam prontos para serem completados depois.',
    motivationTitle: 'Motivacao do LadoB',
    motivation:
      'Este espaco esta pronto para registrar por que o LadoB foi criado, o problema que ele busca resolver e a direcao de produto que orientou o projeto.',
    motivationIsPlaceholder: true,
    screenshots: ladoBScreenshots,
    galleryPlaceholder:
      'As telas do LadoB ja estao aqui. Falta apenas complementar com mais contexto e, se quiser, novas imagens oficiais.',
    contributionSummary:
      'Minha contribuicao no Lado B ficou concentrada na tela de favoritos e na construcao de componentes reutilizaveis do app, incluindo o uso de uma biblioteca externa para essa experiencia.',
    contributionStack: ['Favorites Screen', 'Components', 'UIKit', 'FSPagerView'],
    contributionHighlights: [
      'Desenvolvi a tela de favoritos do app.',
      'Usei uma biblioteca externa para apoiar essa experiencia de navegacao visual.',
      'Trabalhei na criacao de componentes reutilizaveis para a interface.',
    ],
    teamIntro:
      'A equipe do LadoB ainda pode ser documentada aqui com nome, link, papel e contribuicao.',
    team: [
      createTeamMember({
        name: 'Marcos Vinicius Raach',
        linkedin: 'https://www.linkedin.com/in/marcosraach/',
        projectName: 'LadoB',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Carolina Silva dos Santos',
        linkedin: 'https://www.linkedin.com/in/carolina-silva-dos-santos-a320111a7/',
        projectName: 'LadoB',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Vinicius Cadore',
        linkedin: 'https://www.linkedin.com/in/cadoreee/',
        projectName: 'LadoB',
        role: 'Designer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Vitor Bruno',
        linkedin: 'https://www.linkedin.com/in/vitor-bruno-243975258/',
        projectName: 'LadoB',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
      createTeamMember({
        name: 'Eduardo Ferrari',
        linkedin: 'https://www.linkedin.com/in/edurferrari/',
        projectName: 'LadoB',
        role: 'Developer',
        contribution: '',
        tags: [],
        isPlaceholder: false,
      }),
    ],
  },
  {
    id: 'opera-es-gaeco',
    name: 'Operações MPRS',
    finderSubtitle: 'Wiki institucional',
    searchTerms: 'operacoes mprs operacoes es gaeco opera es gaeco wiki ages institucional',
    source: {
      type: 'wiki',
      label: 'Wiki',
      url: 'https://tools.ages.pucrs.br/opera-es-gaeco/operacoes-gaeco-wiki/-/wikis/home',
    },
    supportingDocumentIds: [],
    iconSrc: operaGaecoIcon,
    theme: projectTheme({
      accent: '#58d0c2',
      accentSoft: '#d3fff9',
      accentStrong: '#0f766e',
      heroFrom: '#0b1d22',
      heroTo: '#115e59',
      shadow: 'rgba(15, 118, 110, 0.28)',
    }),
    badges: ['Wiki', 'Institucional', 'AGES'],
    galleryRatio: 'landscape',
    summary:
      'Projeto institucional exibido como pagina de produto para reunir contexto, links e estrutura visual sem depender apenas da wiki tecnica.',
    motivationTitle: 'Motivacao do projeto Operações MPRS',
    motivation:
      'A estrutura desta secao esta pronta para receber o contexto institucional, a necessidade que motivou o projeto e o problema principal que a solucao aborda.',
    motivationIsPlaceholder: true,
    screenshots: operaGaecoScreenshots,
    galleryPlaceholder:
      'Quando voce separar capturas ou materiais visuais do Operações MPRS, esta galeria ja esta pronta para exibi-los de forma organizada.',
    contributionSummary:
      'AGES III · Atuei em TypeScript com React Native como lider de frontend, com participacoes na configuracao da infraestrutura AWS e no Figma do projeto.',
    contributionStack: ['TypeScript', 'React Native', 'AWS', 'Figma', 'Frontend Leadership', 'Code Review'],
    contributionHighlights: [
      'Fui o lider do frontend ao longo do projeto.',
      'Desenhei o Figma completo da aplicacao.',
      'Participei da configuracao da infraestrutura na AWS.',
      'Revisei mais de 80 merge requests aceitas durante o desenvolvimento.',
    ],
    contributionLinks: [
      {
        label: 'Historico de merge requests revisadas',
        url: 'https://tools.ages.pucrs.br/opera-es-gaeco/operacoes-gaeco-mobile/-/merge_requests?scope=all&state=merged',
      },
    ],
    teamIntro:
      'A equipe do Operações MPRS pode ser documentada aqui com nome, LinkedIn, papel e contribuicao individual.',
    team: [
      ...createTeamGroup('Operações MPRS', 'Stakeholders', ['Rovena Zanchet', 'Frantiele Rodrigues dos Santos'], {
        role: 'Stakeholder',
      }),
      ...createTeamGroup('Operações MPRS', 'Professor Orientador', ['Rafael Chanin'], {
        role: 'Professor Orientador',
      }),
      ...createTeamGroup('Operações MPRS', 'AGES I', ['Fernando Neto', 'Natan Müller', 'Pedro Filipetto'], {
        role: 'Aluno',
        groupNote: 'Responsaveis por codigo e testes.',
      }),
      ...createTeamGroup(
        'Operações MPRS',
        'AGES II',
        [
          'Bruno Duarte',
          'Enzo Xavier',
          'Felipe Cruz Valiati',
          'Guilherme Vieira',
          'Március Moraes Vargas',
          'Raul Yugueros',
          'Vitória Graff',
        ],
        {
          role: 'Aluno',
          groupNote: 'Responsaveis pelo codigo e pelo banco de dados.',
        },
      ),
      ...createTeamGroup('Operações MPRS', 'AGES III', [
        'Erick Muniz',
        {
          name: 'Marcos Vinicius Raach',
          linkedin: 'https://www.linkedin.com/in/marcosraach/',
        },
      ], {
        role: 'Aluno',
        groupNote: 'Responsaveis pela arquitetura do projeto e pelo codigo.',
      }),
      ...createTeamGroup(
        'Operações MPRS',
        'AGES IV',
        ['Arthur Antunes de Souza Both', 'Lucas Scheidt Brandt', 'Luiza Heller Kroeff Plá', 'Pércio Reinert'],
        {
          role: 'Aluno',
          groupNote: 'Responsaveis pela gestao do projeto.',
        },
      ),
    ],
  },
  {
    id: 'comunidade-universitaria',
    name: 'Comunidade Universitaria',
    finderSubtitle: 'Wiki AGES',
    searchTerms: 'comunidade universitaria ages wiki rede social academica',
    source: {
      type: 'wiki',
      label: 'Wiki',
      url: 'https://tools.ages.pucrs.br/comunidade-universitaria/wiki/-/wikis/home',
    },
    supportingDocumentIds: [],
    iconSrc: comunidadeUniversitariaIcon,
    theme: projectTheme({
      accent: '#5bd17c',
      accentSoft: '#d8ffe1',
      accentStrong: '#2f66ff',
      heroFrom: '#0f1f22',
      heroTo: '#215a7a',
      shadow: 'rgba(39, 92, 123, 0.28)',
    }),
    badges: ['AGES', 'Comunidade', 'Academico'],
    galleryRatio: 'landscape',
    summary:
      'Rede social academica criada para aproximar estudantes, grupos de interesse, documentos e eventos em um unico ambiente.',
    motivationTitle: 'Por que a Comunidade Universitaria foi criada',
    motivation:
      'O projeto nasceu para fortalecer a conexao entre estudantes e tornar a vida academica mais integrada, com espaco para grupos, compartilhamento de materiais e organizacao de eventos.',
    motivationIsPlaceholder: false,
    screenshots: comunidadeScreenshots,
    galleryPlaceholder:
      'A galeria da Comunidade Universitaria ja esta populada com material real e pode crescer conforme voce selecionar mais telas.',
    contributionSummary:
      'AGES I · Trabalhei com TypeScript usando React Native e NestJS, com foco principal no frontend da experiencia.',
    contributionStack: ['TypeScript', 'React Native', 'NestJS', 'Frontend'],
    contributionHighlights: [
      'Desenvolvi a tela de login.',
      'Implementei a tela dos grupos.',
      'Implementei a tela de eventos.',
      'Trabalhei nos fluxos de visualizar, criar, editar e deletar.',
    ],
    teamIntro:
      'A estrutura da equipe pode ser reutilizada aqui quando voce quiser detalhar as pessoas envolvidas no projeto.',
    team: [
      ...createTeamGroup('Comunidade Universitaria', 'Clientes', ['Arthur Ilha', 'Guilherme Kollet', 'Lorenzo Windmoller'], {
        role: 'Cliente',
      }),
      ...createTeamGroup('Comunidade Universitaria', 'Professor Orientador', ['Rafael Chanin'], {
        role: 'Professor Orientador',
      }),
      ...createTeamGroup(
        'Comunidade Universitaria',
        'AGES I',
        [
          'Artur Santos Lampert',
          'Eduardo Felber Eichner',
          'Eduardo Juchem Balzan',
          'Erick Dorneles Muniz',
          {
            name: 'Marcos Vinicius Raach',
            linkedin: 'https://www.linkedin.com/in/marcosraach/',
          },
          'Maurício dos Santos Krziminski',
          'Tomás Bringhenti Onofrio',
          'Victor Hugo Boeira Leitte',
        ],
        {
          role: 'Aluno',
          groupNote: 'Responsaveis por codigo e testes.',
        },
      ),
      ...createTeamGroup(
        'Comunidade Universitaria',
        'AGES II',
        [
          'Eduarda Lodi Bertiz',
          'Leonardo Carvalho Santos',
          'Lucas Paprotzki Ehara',
          'Lucca Tisser Paradeda',
          'Rafael Fernando Blankenburg',
          'Tomaz Culau Bettio',
        ],
        {
          role: 'Aluno',
          groupNote: 'Responsaveis pelo codigo e pelo banco de dados.',
        },
      ),
      ...createTeamGroup('Comunidade Universitaria', 'AGES III', ['Matheus Moraes', 'Tiago de Quadros Villa'], {
        role: 'Aluno',
        groupNote: 'Responsaveis pela arquitetura do projeto e pelo codigo.',
      }),
      ...createTeamGroup('Comunidade Universitaria', 'AGES IV', ['Filipe Oliveira', 'Gustavo Lodi Vidaletti'], {
        role: 'Aluno',
        groupNote: 'Responsaveis pela gestao do projeto.',
      }),
    ],
  },
  {
    id: 'excedentes',
    name: 'Excedentes',
    finderSubtitle: 'Wiki AGES',
    searchTerms: 'excedentes ages wiki alimentos plataforma',
    source: {
      type: 'wiki',
      label: 'Wiki',
      url: 'https://tools.ages.pucrs.br/excedentes/wiki/-/wikis/home',
    },
    supportingDocumentIds: [],
    iconSrc: excedentesIcon,
    theme: projectTheme({
      accent: '#e9b949',
      accentSoft: '#fff2c8',
      accentStrong: '#3f9f62',
      heroFrom: '#231a0b',
      heroTo: '#4f8d3b',
      shadow: 'rgba(80, 141, 59, 0.28)',
    }),
    badges: ['AGES', 'Plataforma', 'Impacto social'],
    galleryRatio: 'landscape',
    summary:
      'Plataforma alinhada ao combate ao desperdicio de alimentos, conectando excedentes a consumidores de forma mais acessivel.',
    motivationTitle: 'O problema que guiou o Excedentes',
    motivation:
      'O projeto foi pensado para combater o desperdicio de alimentos e promover consumo responsavel, criando uma plataforma que conecta empresas com excedentes a consumidores.',
    motivationIsPlaceholder: false,
    screenshots: excedentesScreenshots,
    galleryPlaceholder:
      'A galeria do Excedentes ja esta montada com screenshots reais e pode receber novas telas quando necessario.',
    contributionSummary:
      'AGES II · Atuei com TypeScript em React e NestJS, com foco maior no backend e participacoes no frontend, no Figma e no banco de dados PostgreSQL.',
    contributionStack: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'JWT', 'AWS S3', 'Figma'],
    contributionHighlights: [
      'Implementei a autenticacao com token JWT no login da aplicacao.',
      'Trabalhei na integracao com o sistema S3 da AWS no backend.',
      'Atuei no frontend para capturar a localizacao do usuario e integrar front e backend.',
      'Tambem tive participacao no Figma e no banco de dados PostgreSQL.',
    ],
    teamIntro:
      'A estrutura de equipe do Excedentes esta pronta para ser preenchida quando voce quiser registrar o time e as entregas.',
    team: [
      ...createTeamGroup(
        'Excedentes',
        'Stakeholders',
        [
          { name: 'Felipe Luz', meta: 'Publicidade - PUCRS' },
          { name: 'Júlia Beatriz', meta: 'Publicidade - PUCRS' },
        ],
        {
          role: 'Stakeholder',
        },
      ),
      ...createTeamGroup('Excedentes', 'Professor Orientador', ['Michael Móra'], {
        role: 'Professor Orientador',
      }),
      ...createTeamGroup(
        'Excedentes',
        'AGES I',
        [
          'Ana Laura Souza Lopes',
          'Fernanda Farias Uberti',
          'Guilherme Velho Wojtysiak',
          'Gustavo Amaro da Silva',
          'Inácio Frick Pimentel',
          'João Henrique Pires Bergallo',
          'Matheus Melo da Silva',
        ],
        {
          role: 'Aluno',
          groupNote: 'Responsaveis por codigo e testes.',
        },
      ),
      ...createTeamGroup('Excedentes', 'AGES II', [
        'Adã Cardoso',
        'Gabriel Fernando Giaretta',
        {
          name: 'Marcos Vinicius Raach',
          linkedin: 'https://www.linkedin.com/in/marcosraach/',
        },
        'Mauricio Krziminski',
      ], {
        role: 'Aluno',
        groupNote: 'Responsaveis pelo codigo e pelo banco de dados.',
      }),
      ...createTeamGroup('Excedentes', 'AGES III', ['Adriana Anacleto Serpa', 'Lucas Gomes Martins', 'Vitória Ebeling Hahn'], {
        role: 'Aluno',
        groupNote: 'Responsaveis pela arquitetura do projeto e pelo codigo.',
      }),
      ...createTeamGroup('Excedentes', 'AGES IV', ['Aléxia de Jesus Dorneles Pereira', 'João Gabriel Dourado Cervo'], {
        role: 'Aluno',
        groupNote: 'Responsaveis pela gestao do projeto.',
      }),
    ],
  },
];

export const profile = {
  name: 'Marcos Vinicius Raach',
  role: 'iOS Developer Student @ Apple Developer Academy',
  summary:
    'Portfolio apresentado como um desktop macOS, com projetos reais navegaveis pelo Finder e pelo Safari.',
  overview:
    'Sou iOS Developer Student na Apple Developer Academy no Brasil, com foco em construir experiencias digitais premium para o ecossistema Apple.',
  journey: [
    'Minha jornada e guiada por uma paixao em criar produtos digitais bem resolvidos, saindo do desenvolvimento web para um foco cada vez mais especializado em iOS.',
    'Hoje, dedico meu tempo a aprofundar Swift e SwiftUI, explorando a interseccao entre arquitetura limpa, design imersivo e aplicacoes de alta performance.',
  ],
  currentFocus:
    'Atualmente, estou aprofundando Swift, SwiftUI, arquitetura limpa, interfaces guiadas pelas Human Interface Guidelines e a construcao de apps com qualidade de produto.',
  professionalExperience: [
    {
      title: 'Apple Developer Academy',
      organization: 'Apple / Instituto Eldorado / PUCRS',
      period: 'Janeiro de 2025 - Atual',
      highlights: [
        'Desenvolvimento de apps iOS com UIKit, SwiftUI e Figma.',
        'Aplicacao de boas praticas de UI/UX em projetos reais.',
        'Atuacao em times ageis e multidisciplinares.',
      ],
    },
  ],
  education: [
    {
      title: 'Engenharia de Software',
      institution: 'PUCRS',
    },
  ],
  languages: [
    {
      label: 'Portugues',
      level: 'Fluente',
    },
    {
      label: 'Ingles',
      level: 'C1',
    },
  ],
  technicalSkills: [
    {
      title: 'Mobile Development',
      items: ['Swift', 'SwiftUI', 'UIKit', 'SceneKit', 'GameKit', 'CloudKit', 'React Native', 'Kotlin'],
    },
    {
      title: 'Architecture & Design',
      items: ['Clean Architecture', 'MVVM', 'Human Interface Guidelines (HIG)', 'Figma'],
    },
  ],
  agesSkills: [
    {
      title: 'Frontend, mobile e produto',
      items: [
        'TypeScript com React Native, React e NestJS',
        'Construcao de fluxos completos de interface',
        'Figma aplicado do discovery ate a entrega',
        'Lideranca de frontend e alinhamento de produto',
      ],
    },
    {
      title: 'Backend, dados e integracoes',
      items: [
        'Autenticacao com JWT',
        'Integracoes com AWS S3',
        'Modelagem e participacao com PostgreSQL',
        'Contratos entre frontend e backend',
      ],
    },
    {
      title: 'Entrega e colaboracao',
      items: [
        'Code review e revisao de merge requests',
        'Participacao em infraestrutura AWS',
        'Trabalho em equipes multidisciplinares da AGES',
        'Documentacao e organizacao tecnica ao longo dos projetos',
      ],
    },
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/MarquIln',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marcosraach/',
    },
    {
      label: 'Email',
      url: 'mailto:marcosraach.1@gmail.com',
    },
  ],
};

export const systemAppIcons = {
  finder: finderIcon,
  safari: safariIcon,
};

export const supportDocuments = [
  {
    id: 'retrotrip-privacy',
    projectId: 'retrotrip',
    title: 'Politica de Privacidade',
    shortLabel: 'Politica',
    address: 'portfolio://apps/retrotrip/privacy-policy',
    eyebrow: 'Documento de suporte',
    summary:
      'Em resumo: o RetroTrip utiliza apenas o nome de usuario do Game Center para funcionalidades do jogo e nao coleta, armazena ou compartilha outros dados pessoais.',
    sections: [
      {
        title: '1. Informacoes coletadas',
        paragraphs: [
          'O RetroTrip coleta de forma limitada apenas o nome de usuario do Game Center para identificacao do jogador em recursos como rankings e conquistas.',
          'Nao sao coletados nome real, email, telefone, endereco, dados de localizacao, informacoes de pagamento ou dados de uso alem do necessario para o funcionamento basico.',
        ],
      },
      {
        title: '2. Como essas informacoes sao usadas',
        paragraphs: [
          'O nome de usuario do Game Center e usado exclusivamente para identificar o jogador, exibir rankings, conquistas e permitir os recursos sociais basicos do Game Center.',
        ],
      },
      {
        title: '3. Compartilhamento',
        paragraphs: [
          'As informacoes nao sao vendidas, transferidas nem compartilhadas com terceiros, exceto quando houver exigencia legal ou necessidade de proteger direitos e seguranca.',
        ],
      },
      {
        title: '4. Armazenamento e seguranca',
        paragraphs: [
          'O nome de usuario do Game Center e administrado diretamente pela Apple por meio do proprio servico. O RetroTrip nao armazena esse dado em servidores proprios.',
        ],
      },
      {
        title: '5. Direitos do usuario',
        bullets: [
          'Desativar o Game Center nas configuracoes do dispositivo a qualquer momento.',
          'Remover o app e encerrar a associacao com o nome de usuario do Game Center.',
          'Entrar em contato para solicitar esclarecimentos sobre esta politica.',
        ],
      },
      {
        title: '6. Privacidade infantil',
        paragraphs: [
          'O RetroTrip e indicado para todas as idades. Para criancas com menos de 13 anos, a recomendacao e de supervisao dos responsaveis. Nao ha coleta intencional de dados pessoais de menores.',
        ],
      },
      {
        title: '7. Atualizacoes desta politica',
        paragraphs: [
          'Esta politica pode ser atualizada ocasionalmente. Alteracoes relevantes devem ser comunicadas por meio de atualizacoes do app ou canais apropriados.',
        ],
      },
    ],
    contact: [
      {
        label: 'Email',
        value: 'marcosraach.1@gmail.com',
        href: 'mailto:marcosraach.1@gmail.com',
      },
    ],
    lastUpdated: '6 de abril de 2026',
  },
];

export const portfolioProjects = baseProjects;

export const projectMap = Object.fromEntries(
  portfolioProjects.map((project) => [project.id, project]),
);

export const supportDocumentMap = Object.fromEntries(
  supportDocuments.map((document) => [document.id, document]),
);

export const safariHomePage = {
  id: 'home',
  title: 'Pagina Inicial',
  address: 'favorites://start-page',
};

export const profilePage = {
  id: 'profile:marcos',
  title: 'Marcos Vinicius Raach',
  address: 'portfolio://about/marcos',
};

export function projectPageId(projectId) {
  return `project:${projectId}`;
}

export function documentPageId(documentId) {
  return `document:${documentId}`;
}

export function profilePageId() {
  return profilePage.id;
}

export function getProjectById(projectId) {
  return projectMap[projectId] ?? null;
}

export function getSupportDocumentById(documentId) {
  return supportDocumentMap[documentId] ?? null;
}

export function getPageById(pageId) {
  if (pageId === safariHomePage.id) {
    return {
      id: safariHomePage.id,
      type: 'home',
      title: safariHomePage.title,
      tabLabel: 'Start Page',
      address: safariHomePage.address,
    };
  }

  if (pageId.startsWith('project:')) {
    const project = getProjectById(pageId.replace('project:', ''));

    if (!project) return null;

    return {
      id: pageId,
      type: 'project',
      projectId: project.id,
      title: project.name,
      tabLabel: project.name,
      address: `portfolio://apps/${project.id}`,
    };
  }

  if (pageId.startsWith('document:')) {
    const document = getSupportDocumentById(pageId.replace('document:', ''));

    if (!document) return null;

    return {
      id: pageId,
      type: 'document',
      projectId: document.projectId,
      documentId: document.id,
      title: document.title,
      tabLabel: document.shortLabel,
      address: document.address,
    };
  }

  if (pageId === profilePage.id) {
    return {
      id: profilePage.id,
      type: 'profile',
      profileId: 'marcos',
      title: profilePage.title,
      tabLabel: 'Marcos',
      address: profilePage.address,
    };
  }

  return null;
}
