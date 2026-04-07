const localePacks = {
  'pt-BR': {
    locale: 'pt-BR',
    localeLabel: 'PT-BR',
    alternateLocaleLabel: 'EN',
    appNames: {
      desktop: 'Desktop',
      finder: 'Finder',
      safari: 'Safari',
    },
    menu: {
      default: ['Arquivo', 'Editar', 'Visualizar', 'Ir', 'Ajuda'],
      finder: ['Arquivo', 'Editar', 'Visualizar', 'Ir', 'Janela', 'Ajuda'],
      safari: ['Arquivo', 'Editar', 'Visualizacao', 'Historico', 'Favoritos', 'Janela', 'Ajuda'],
    },
    profile: {
      role: 'iOS Developer Student @ Apple Developer Academy',
      summary:
        'Portfolio apresentado como um desktop macOS, com projetos reais navegaveis pelo Finder e pelo Safari.',
    },
    desktop: {
      hint: 'Clique nos icones da mesa para abrir os projetos ou revele o Dock para usar o Finder.',
    },
    menuBar: {
      network: 'Wi-Fi',
      themeDark: 'Dark',
      themeLight: 'Light',
      toggleTheme: 'Alternar tema',
      toggleLocale: 'Alternar idioma',
      battery: '100%',
    },
    dock: {
      openFinder: 'Abrir Finder',
      openSafari: 'Abrir Safari',
      finder: 'Finder',
      safari: 'Safari',
    },
    finder: {
      closeFinder: 'Fechar Finder',
      iconView: 'Visualizacao por icones',
      listView: 'Visualizacao em lista',
      favorites: 'Favoritos',
      locations: 'Locais',
      tags: 'Etiquetas',
      usersLabel: 'Usuarios',
      searchPlaceholder: 'Buscar',
      homeCaption: 'Sobre mim',
      activeFolderCaption: 'Pasta ativa',
      emptyTitle: 'Nenhum projeto corresponde a esta busca.',
      emptyBody: 'Tente outro termo ou volte para uma colecao diferente no sidebar.',
      footerHint: 'Abrir item selecionado no Safari',
      itemCount: (count) => `${count} ${count === 1 ? 'item' : 'itens'}`,
      screensCount: (count) => `${count} ${count === 1 ? 'tela' : 'telas'}`,
      teamCount: (count) => `${count} ${count === 1 ? 'perfil' : 'perfis'}`,
      galleryReady: 'Galeria pronta',
      teamPending: 'Equipe pendente',
      originPortfolio: 'Portfolio',
      listHeaders: {
        name: 'Nome',
        origin: 'Origem',
        screenshots: 'Capturas',
        team: 'Equipe',
      },
      collections: {
        all: {
          label: 'Portfolio',
          description: 'Todos os projetos',
        },
        github: {
          label: 'GitHub',
          description: 'Repositorios',
        },
        wiki: {
          label: 'Wikis',
          description: 'AGES e institucional',
        },
        gallery: {
          label: 'Capturas',
          description: 'Material visual',
        },
      },
    },
    safari: {
      title: 'Safari',
      startPageTitle: 'Pagina inicial',
      addressPlaceholder: 'Pesquisar ou inserir URL',
      closeLabel: 'Fechar Safari',
      returnToFinder: 'Finder',
      themeToggle: 'Alternar light e dark mode',
      localeToggle: 'Alternar idioma',
      homeLabel: 'Inicio',
      reloadLabel: 'Recarregar',
      profileLabel: 'Portfolio',
      startPageEyebrow: 'Safari',
      startPageHeroTitle: 'Explore os projetos em um layout mais editorial.',
      startPageHeroBody:
        'Abra qualquer app direto no Safari, alterne entre temas e navegue pelo portfolio com uma camada visual mais atual.',
      startPageSearchAction: 'Abrir',
      startPageCalloutBadge: 'Acesso direto',
      startPageCalloutTitle: 'Sem pagina intermediaria.',
      startPageCalloutBody:
        'Clicar em um item no Finder ou aqui abre a pagina autoral do projeto dentro do Safari.',
      topSitesEyebrow: 'Top Sites',
      topSitesTitle: 'Projetos fixados',
      availableCount: (count) => `${count} disponiveis`,
    },
    project: {
      motivationEyebrow: 'Motivacao',
      galleryEyebrow: 'Screenshots',
      galleryTitle: 'Galeria do app',
      galleryReal: 'Telas reais do projeto',
      galleryPlaceholder: 'Espaco pronto para imagens oficiais',
      contributionEyebrow: 'Contribuicao',
      contributionTitle: 'Maiores contribuicoes',
      contributionStackLabel: 'Stack e foco',
      contributionPlaceholderTitle: 'Secao pronta para registrar sua participacao',
      contributionPlaceholderBody:
        'Quando voce quiser detalhar sua atuacao neste projeto, esta area pode listar stack, responsabilidades e entregas mais importantes.',
      teamEyebrow: 'Equipe',
      teamTitle: 'Quem participou e o que cada pessoa fez',
      teamLinkedIn: 'LinkedIn',
      teamPlaceholderTitle: 'Equipe pronta para documentacao',
      teamPlaceholderMeta: 'Estrutura aberta',
      teamPlaceholderRole: 'Nome, LinkedIn, papel e contribuicao',
      teamPlaceholderBody:
        'Assim que voce consolidar os detalhes, esta secao ja aceita os perfis do projeto sem mudar a interface.',
      peopleCount: (count) => `${count} pessoa(s)`,
      downloadAppStore: 'Baixar na App Store',
      openSource: (label) => `Abrir ${label}`,
      officialDocumentSpace: (projectName) => `Espaco pronto para imagens oficiais de ${projectName}`,
    },
    support: {
      contact: 'Contato',
      lastUpdated: 'Ultima atualizacao',
    },
    profilePage: {
      eyebrow: 'Sobre mim',
      journeyEyebrow: 'Jornada',
      journeyTitle: 'Minha trajetoria',
      focusEyebrow: 'Foco atual',
      focusTitle: 'No que estou aprofundando agora',
      experienceEyebrow: 'Experiencia',
      experienceTitle: 'Experiencia profissional',
      educationEyebrow: 'Formacao',
      educationTitle: 'Formacao',
      languagesEyebrow: 'Idiomas',
      languagesTitle: 'Idiomas',
      technicalEyebrow: 'Technical Skills',
      technicalTitle: 'Habilidades tecnicas',
      agesEyebrow: 'AGES',
      agesTitle: 'Habilidades consolidadas nos projetos da AGES',
      linksEyebrow: 'Contato',
      linksTitle: 'Onde me encontrar',
    },
  },
  en: {
    locale: 'en',
    localeLabel: 'EN',
    alternateLocaleLabel: 'PT-BR',
    appNames: {
      desktop: 'Desktop',
      finder: 'Finder',
      safari: 'Safari',
    },
    menu: {
      default: ['File', 'Edit', 'View', 'Go', 'Help'],
      finder: ['File', 'Edit', 'View', 'Go', 'Window', 'Help'],
      safari: ['File', 'Edit', 'View', 'History', 'Bookmarks', 'Window', 'Help'],
    },
    profile: {
      role: 'iOS Developer Student @ Apple Developer Academy',
      summary:
        'Portfolio presented as a macOS desktop, with real projects navigable through Finder and Safari.',
    },
    desktop: {
      hint: 'Click the desktop icons to open projects, or reveal the Dock to use Finder.',
    },
    menuBar: {
      network: 'Wi-Fi',
      themeDark: 'Dark',
      themeLight: 'Light',
      toggleTheme: 'Toggle theme',
      toggleLocale: 'Toggle language',
      battery: '100%',
    },
    dock: {
      openFinder: 'Open Finder',
      openSafari: 'Open Safari',
      finder: 'Finder',
      safari: 'Safari',
    },
    finder: {
      closeFinder: 'Close Finder',
      iconView: 'Icon view',
      listView: 'List view',
      favorites: 'Favorites',
      locations: 'Locations',
      tags: 'Tags',
      usersLabel: 'Users',
      searchPlaceholder: 'Search',
      homeCaption: 'About me',
      activeFolderCaption: 'Active folder',
      emptyTitle: 'No projects match this search.',
      emptyBody: 'Try another term or switch to a different collection in the sidebar.',
      footerHint: 'Open selected item in Safari',
      itemCount: (count) => `${count} ${count === 1 ? 'item' : 'items'}`,
      screensCount: (count) => `${count} ${count === 1 ? 'screen' : 'screens'}`,
      teamCount: (count) => `${count} ${count === 1 ? 'profile' : 'profiles'}`,
      galleryReady: 'Gallery ready',
      teamPending: 'Team pending',
      originPortfolio: 'Portfolio',
      listHeaders: {
        name: 'Name',
        origin: 'Source',
        screenshots: 'Screens',
        team: 'Team',
      },
      collections: {
        all: {
          label: 'Portfolio',
          description: 'All projects',
        },
        github: {
          label: 'GitHub',
          description: 'Repositories',
        },
        wiki: {
          label: 'Wikis',
          description: 'AGES and institutional',
        },
        gallery: {
          label: 'Screenshots',
          description: 'Visual material',
        },
      },
    },
    safari: {
      title: 'Safari',
      startPageTitle: 'Start Page',
      addressPlaceholder: 'Search or enter website name',
      closeLabel: 'Close Safari',
      returnToFinder: 'Finder',
      themeToggle: 'Toggle light and dark mode',
      localeToggle: 'Switch language',
      homeLabel: 'Home',
      reloadLabel: 'Reload',
      profileLabel: 'Portfolio',
      startPageEyebrow: 'Safari',
      startPageHeroTitle: 'Explore the projects in a more editorial layout.',
      startPageHeroBody:
        'Open any app directly in Safari, switch themes, and navigate the portfolio through a more current visual layer.',
      startPageSearchAction: 'Open',
      startPageCalloutBadge: 'Direct access',
      startPageCalloutTitle: 'No intermediary page.',
      startPageCalloutBody:
        "Clicking an item in Finder or here opens the project's own page directly inside Safari.",
      topSitesEyebrow: 'Top Sites',
      topSitesTitle: 'Pinned projects',
      availableCount: (count) => `${count} available`,
    },
    project: {
      motivationEyebrow: 'Motivation',
      galleryEyebrow: 'Screenshots',
      galleryTitle: 'App gallery',
      galleryReal: 'Real project screens',
      galleryPlaceholder: 'Ready for official images',
      contributionEyebrow: 'Contribution',
      contributionTitle: 'Major contributions',
      contributionStackLabel: 'Stack and focus',
      contributionPlaceholderTitle: 'Section ready to register your contribution',
      contributionPlaceholderBody:
        'When you want to document your role in this project, this area can list stack, responsibilities, and main deliveries.',
      teamEyebrow: 'Team',
      teamTitle: 'Who worked on it and what each person did',
      teamLinkedIn: 'LinkedIn',
      teamPlaceholderTitle: 'Team section ready for documentation',
      teamPlaceholderMeta: 'Open structure',
      teamPlaceholderRole: 'Name, LinkedIn, role and contribution',
      teamPlaceholderBody:
        'As soon as you consolidate the details, this section is ready to receive project profiles without changing the interface.',
      peopleCount: (count) => `${count} people`,
      downloadAppStore: 'Download on the App Store',
      openSource: (label) => `Open ${label}`,
      officialDocumentSpace: (projectName) => `Ready for official ${projectName} images`,
    },
    support: {
      contact: 'Contact',
      lastUpdated: 'Last updated',
    },
    profilePage: {
      eyebrow: 'About me',
      journeyEyebrow: 'Journey',
      journeyTitle: 'My path so far',
      focusEyebrow: 'Current focus',
      focusTitle: 'What I am deepening right now',
      experienceEyebrow: 'Experience',
      experienceTitle: 'Professional experience',
      educationEyebrow: 'Education',
      educationTitle: 'Education',
      languagesEyebrow: 'Languages',
      languagesTitle: 'Languages',
      technicalEyebrow: 'Technical Skills',
      technicalTitle: 'Technical skills',
      agesEyebrow: 'AGES',
      agesTitle: 'Skills strengthened through AGES projects',
      linksEyebrow: 'Contact',
      linksTitle: 'Where to find me',
    },
  },
};

const profileTranslations = {
  en: {
    summary:
      'Portfolio presented as a macOS desktop, with real projects navigable through Finder and Safari.',
    overview:
      'I am an iOS Developer Student at the Apple Developer Academy in Brazil, focused on crafting premium digital experiences for the Apple ecosystem.',
    journey: [
      'My journey is defined by a passion for building polished digital products, transitioning from web development to a more specialized focus on iOS.',
      'Currently, I am dedicating my time to mastering Swift and SwiftUI, exploring the intersection of clean architecture, immersive design, and high-performance applications.',
    ],
    currentFocus:
      'Right now, I am deepening Swift, SwiftUI, clean architecture, Human Interface Guidelines, and the craft of building apps with product-level quality.',
    professionalExperience: [
      {
        title: 'Apple Developer Academy',
        organization: 'Apple / Instituto Eldorado / PUCRS',
        period: 'January 2025 - Current',
        highlights: [
          'Developed iOS apps using UIKit, SwiftUI, and Figma.',
          'Applied UI/UX best practices in real-world projects.',
          'Worked in agile, cross-functional teams.',
        ],
      },
    ],
    education: [
      {
        title: 'Software Engineering',
        institution: 'PUCRS',
      },
    ],
    languages: [
      {
        label: 'Portuguese',
        level: 'Fluent',
      },
      {
        label: 'English',
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
        title: 'Frontend, mobile, and product',
        items: [
          'TypeScript with React Native, React, and NestJS',
          'Complete interface flows from concept to delivery',
          'Figma applied from discovery through implementation',
          'Frontend leadership and product alignment',
        ],
      },
      {
        title: 'Backend, data, and integrations',
        items: [
          'JWT authentication',
          'AWS S3 integrations',
          'PostgreSQL participation and data modeling',
          'Frontend and backend contracts',
        ],
      },
      {
        title: 'Delivery and collaboration',
        items: [
          'Code review and merge request review',
          'Collaboration with AWS infrastructure',
          'Work inside AGES multidisciplinary teams',
          'Technical organization and project documentation',
        ],
      },
    ],
  },
};

const projectTranslations = {
  en: {
    retrotrip: {
      summary:
        'A gamified educational experience that turns the study of history into a more visual, curious, and interactive journey.',
      motivationTitle: 'Why RetroTrip was created',
      motivation:
        'RetroTrip was created to make studying history at school more fun, interesting, and less monotonous.',
      badges: ['Education', 'History', 'Gamification'],
      contributionSummary:
        'I worked on central product and infrastructure features for the app, with focus on Game Center, monetization, multiplayer, and CloudKit integrations.',
      contributionHighlights: [
        'I implemented ads and parts of the monetization layer.',
        'I worked on the Game Center integration and multiplayer.',
        'I developed map badges and the profile screen.',
        'I worked on the CloudKit database, CloudKit calls, and the seed for the database.',
        'I also contributed to widgets and the in-app store.',
      ],
      galleryPlaceholder:
        'The gallery is already connected. If you want to replace or expand the screens, just update the official project assets.',
      screenshots: [
        { caption: 'Home screen presenting the app visual identity.' },
        { caption: 'Guided exploration that makes the content more inviting.' },
        { caption: 'Navigation designed to keep the learning flow moving.' },
        { caption: 'A more immersive visual environment that reinforces curiosity.' },
        { caption: 'Progress tracking focused on continuity across the journey.' },
        { caption: 'Short interactions that revisit content without losing momentum.' },
      ],
    },
    powpow: {
      summary:
        'Pow Po Po is a chaotic survival roguelike where a chicken fights to escape the farm using eggs as weapons, blending humor, fast action, and different builds in every run.',
      motivationTitle: 'What drives Pow Po Po',
      motivation:
        'The game was created to deliver a fast, chaotic, and fun survival experience, where each run mixes pressure, progression, and absurd egg-based attack combinations.',
      badges: ['App Store', 'Product', 'Game'],
      contributionSummary:
        'I contributed to the gameplay development as part of the team, with work on core systems and a stronger focus on the bosses and their powers.',
      contributionHighlights: [
        'The whole team worked together on the core gameplay behavior, including how the chicken moves and how the enemies move.',
        'My biggest contribution was building the bosses and their powers.',
        'I implemented the game leaderboard.',
        'I worked on the Game Center integration.',
        'I contributed to the app Ads layer.',
      ],
      galleryPlaceholder:
        'Official Pow Po Po screenshots can be updated here anytime without changing the page structure.',
      screenshots: [
        { caption: 'Splash screen with the main identity of the project.' },
        { caption: 'Core gameplay moment showing the main interaction.' },
        { caption: 'A gameplay screen with more interface context.' },
        { caption: 'Progression and upgrade space inside the experience.' },
        { caption: 'Pause state that keeps the interface visually consistent.' },
        { caption: 'Game over screen closing the official flow.' },
      ],
    },
    thinkdifferentapp: {
      summary:
        'Break! Side Quests turns routine into small daily adventures, with one new challenge every twenty-four hours, collectible badges, and a streak that makes progress feel memorable.',
      motivationTitle: 'What kind of experience Break! Side Quests wants to create',
      motivation:
        'The app was created to break routine with light and curious side quests, turning small challenges into a daily ritual of discovery, achievement, and continuity.',
      badges: ['App Store', 'iOS', 'Product'],
      contributionSummary:
        'I worked on the CloudKit database, account flows, and key experience screens, connecting interface and persistence inside the app.',
      contributionHighlights: [
        'I structured the database on CloudKit.',
        'I implemented the login flow, including create account, delete account, and logout.',
        'I developed the stickers screen.',
        'I worked on CloudKit calls and the seed used to populate the database.',
      ],
      galleryPlaceholder:
        'The gallery is already wired to the project assets and can grow with future official screens.',
      screenshots: [
        { caption: 'Calendar flow tied to the organization of side quests.' },
        { caption: 'A completed challenge moment inside the app journey.' },
        { caption: 'Another challenge state showing progress and feedback.' },
        { caption: 'An additional product screen focused on the main interaction.' },
        { caption: 'Rewards view highlighting progression and collected items.' },
      ],
    },
    rotta: {
      finderSubtitle: 'iOS concept app',
      summary:
        'A motorsport guide built to follow Formula 2, Formula 3, and F1 Academy with rankings, schedules, and a clearer information structure.',
      motivationTitle: 'Why Rotta took shape',
      motivation:
        'Rotta was conceived to organize complex junior motorsport information into a cleaner, easier-to-navigate, and more enjoyable experience.',
      badges: ['Motorsport', 'iOS', 'Guide'],
      contributionSummary:
        'My contribution was concentrated on the CloudKit data layer and interface parts tied to the app technical content.',
      contributionHighlights: [
        'I worked on the CloudKit database.',
        'I implemented calls to CloudKit.',
        'I built the seed used to populate the CloudKit database.',
        'I developed the car components screen.',
      ],
      galleryPlaceholder:
        "These screens already show Rotta's visual direction. If a better selection comes later, the gallery can be updated without changing the layout.",
      screenshots: [
        { caption: 'Opening screen with a more sports-oriented product language.' },
        { caption: 'Information arranged to reduce navigation friction.' },
        { caption: 'Content presentation focused on faster reading.' },
        { caption: 'A layout built to follow schedules and context together.' },
        { caption: 'Visual hierarchy that adds depth without making the UI heavy.' },
        { caption: 'Data presented with stronger contrast and readability.' },
        { caption: 'Additional product context for people exploring the app in depth.' },
        { caption: 'A more detailed screen that expands the content without losing pace.' },
        { caption: 'Flow closing with visual consistency across sections.' },
      ],
    },
    ladob: {
      finderSubtitle: 'Visual project',
      summary:
        'A project page built to present the app with more presence, while leaving the context, motivation, and team details ready to evolve over time.',
      motivationTitle: 'Lado B motivation',
      motivation:
        'This section is ready to document why Lado B was created, the problem it aims to solve, and the product direction behind the project.',
      badges: ['Portfolio', 'App', 'Showcase'],
      contributionSummary:
        'My contribution in Lado B was concentrated on the favorites screen and on building reusable app components, including the use of an external library for that experience.',
      contributionHighlights: [
        'I developed the favorites screen for the app.',
        'I used an external library to support this visual navigation experience.',
        'I worked on building reusable interface components.',
      ],
      galleryPlaceholder:
        "Lado B's screens are already connected. More context or additional images can be added later without rebuilding the page.",
      screenshots: [
        { caption: 'First visual read of the app inside the portfolio.' },
        { caption: 'Visual continuity that helps show the product personality.' },
        { caption: 'A flow slice with a more authored visual language.' },
        { caption: 'Another interface moment ready to receive richer context.' },
        { caption: 'Gallery closing with existing visual material from the project.' },
      ],
    },
    'opera-es-gaeco': {
      summary:
        'An institutional project presented as a product page to gather context, links, and visual structure without depending only on the technical wiki.',
      motivationTitle: 'Operações MPRS motivation',
      motivation:
        'This area is ready to receive the institutional context, the need that triggered the project, and the main problem the solution addresses.',
      badges: ['Wiki', 'Institutional', 'AGES'],
      galleryPlaceholder:
        'Whenever you separate screenshots or visual material from Operações MPRS, this gallery is ready to present them cleanly.',
      screenshots: [
        { caption: 'System overview with the main operation context.' },
        { caption: 'Institutional navigation organized for more objective consultation.' },
        { caption: 'Structured content designed to support reading and tracking.' },
        { caption: 'Another real slice of the project with a consistent visual language.' },
      ],
      contributionSummary:
        'AGES III · I worked in TypeScript with React Native as frontend lead, while also contributing to AWS infrastructure setup and the project Figma.',
      contributionHighlights: [
        'I acted as the frontend lead throughout the project.',
        'I designed the full Figma for the application.',
        'I contributed to the AWS infrastructure setup.',
        'I reviewed more than 80 merged pull requests during development.',
      ],
      contributionLinks: [
        {
          label: 'Merge request review history',
        },
      ],
    },
    'comunidade-universitaria': {
      name: 'University Community',
      summary:
        'An academic social network created to connect students, groups of interest, documents, and events inside a single environment.',
      motivationTitle: 'Why University Community was created',
      motivation:
        'The project was born to strengthen the connection between students and make academic life more integrated, with space for groups, shared material, and event organization.',
      badges: ['AGES', 'Community', 'Academic'],
      galleryPlaceholder:
        'The University Community gallery already uses real material and can grow as you curate more screens.',
      screenshots: [
        { caption: 'The first product view inside the academic ecosystem.' },
        { caption: 'A main flow designed for discovery, content, and connections.' },
        { caption: 'Information arranged for more practical day-to-day use.' },
        { caption: 'Another layer of the experience centered on user interaction.' },
        { caption: 'A visual detail showing consistency across the flow.' },
        { caption: 'Another product slice ready to receive richer context later.' },
        { caption: 'Gallery closing with real material already available.' },
      ],
      contributionSummary:
        'AGES I · I worked in TypeScript using React Native and NestJS, with my main focus on the frontend experience.',
      contributionHighlights: [
        'I developed the login screen.',
        'I implemented the groups screen.',
        'I implemented the events screen.',
        'I worked on the flows to view, create, edit, and delete content.',
      ],
    },
    excedentes: {
      summary:
        'A platform focused on reducing food waste by connecting surplus products with consumers in a more accessible way.',
      motivationTitle: 'The problem that guided Excedentes',
      motivation:
        'The project was designed to fight food waste and promote responsible consumption by connecting companies with surplus products to consumers.',
      badges: ['AGES', 'Platform', 'Social impact'],
      galleryPlaceholder:
        'The Excedentes gallery is already built with real screenshots and can receive new screens whenever needed.',
      screenshots: [
        { caption: 'First contact with the platform and its main flow.' },
        { caption: 'Navigation designed to organize information and availability.' },
        { caption: 'A visual layer ready to explain the user journey.' },
        { caption: 'Another real system screen already connected to the page.' },
        { caption: 'Gallery closing with visual continuity across the project.' },
      ],
      contributionSummary:
        'AGES II · I worked with TypeScript in React and NestJS, focusing mostly on the backend while also contributing to the frontend, Figma, and PostgreSQL.',
      contributionHighlights: [
        'I implemented JWT token authentication during user login.',
        'I worked on the AWS S3 integration in the backend.',
        'I also contributed in the frontend to capture user location and connect frontend and backend flows.',
        'I had additional participation in Figma and PostgreSQL.',
      ],
    },
  },
};

const documentTranslations = {
  en: {
    'retrotrip-privacy': {
      title: 'Privacy Policy',
      shortLabel: 'Privacy',
      eyebrow: 'Support document',
      summary:
        'In short: RetroTrip uses only the Game Center username for game features and does not collect, store, or share other personal data.',
      sections: [
        {
          title: '1. Information collected',
          paragraphs: [
            'RetroTrip collects only the Game Center username in a limited way to identify the player in features such as leaderboards and achievements.',
            'It does not collect real name, email, phone number, address, location data, payment information, or usage data beyond what is required for basic operation.',
          ],
        },
        {
          title: '2. How this information is used',
          paragraphs: [
            'The Game Center username is used exclusively to identify the player, display leaderboards and achievements, and enable the basic social features of Game Center.',
          ],
        },
        {
          title: '3. Sharing',
          paragraphs: [
            'Information is not sold, transferred, or shared with third parties, except when legally required or necessary to protect rights and safety.',
          ],
        },
        {
          title: '4. Storage and security',
          paragraphs: [
            'The Game Center username is managed directly by Apple through the service itself. RetroTrip does not store this data on its own servers.',
          ],
        },
        {
          title: '5. User rights',
          bullets: [
            'Disable Game Center in the device settings at any time.',
            'Remove the app and end its association with the Game Center username.',
            'Get in touch to request clarification about this policy.',
          ],
        },
        {
          title: "6. Children's privacy",
          paragraphs: [
            "RetroTrip is suitable for all ages. For children under 13, supervision by a parent or guardian is recommended. There is no intentional collection of children's personal data.",
          ],
        },
        {
          title: '7. Updates to this policy',
          paragraphs: [
            'This policy may be updated occasionally. Relevant changes should be communicated through app updates or appropriate channels.',
          ],
        },
      ],
      lastUpdated: 'April 6, 2026',
    },
  },
};

const groupTitleTranslations = {
  'Professor Orientador': {
    en: 'Faculty Advisor',
  },
  Clientes: {
    en: 'Clients',
  },
  'Alunos I': {
    en: 'Students I',
  },
  'Alunos II': {
    en: 'Students II',
  },
  'Alunos III': {
    en: 'Students III',
  },
  'Alunos IV': {
    en: 'Students IV',
  },
};

const groupNoteTranslations = {
  'Responsaveis por codigo e testes.': {
    en: 'Responsible for code and testing.',
  },
  'Responsaveis pelo codigo e pelo banco de dados.': {
    en: 'Responsible for code and database work.',
  },
  'Responsaveis pela arquitetura do projeto e pelo codigo.': {
    en: 'Responsible for project architecture and code.',
  },
  'Responsaveis pela gestao do projeto.': {
    en: 'Responsible for project management.',
  },
};

const roleTranslations = {
  'Professor Orientador': {
    en: 'Faculty Advisor',
  },
  Cliente: {
    en: 'Client',
  },
  Aluno: {
    en: 'Student',
  },
};

export function getLocalePack(locale = 'pt-BR') {
  return localePacks[locale] ?? localePacks['pt-BR'];
}

export function toggleLocale(locale = 'pt-BR') {
  return locale === 'pt-BR' ? 'en' : 'pt-BR';
}

export function toggleTheme(theme = 'dark') {
  return theme === 'dark' ? 'light' : 'dark';
}

export function localizeProfile(profile, locale = 'pt-BR') {
  if (locale === 'pt-BR') {
    return profile;
  }

  const override = profileTranslations.en;

  return {
    ...profile,
    ...override,
    links: profile.links,
  };
}

export function localizeRole(role, locale = 'pt-BR') {
  if (locale === 'pt-BR') return role;
  return roleTranslations[role]?.en ?? role;
}

export function localizeGroupTitle(title, locale = 'pt-BR') {
  if (locale === 'pt-BR') return title;
  return groupTitleTranslations[title]?.en ?? title;
}

export function localizeGroupNote(note, locale = 'pt-BR') {
  if (locale === 'pt-BR') return note;
  return groupNoteTranslations[note]?.en ?? note;
}

function localizeTeam(team, locale = 'pt-BR') {
  if (locale === 'pt-BR') return team;

  return team.map((member) => ({
    ...member,
    role: localizeRole(member.role, locale),
    group: localizeGroupTitle(member.group, locale),
    groupNote: localizeGroupNote(member.groupNote, locale),
    meta: member.meta,
  }));
}

export function localizeProject(project, locale = 'pt-BR') {
  if (locale === 'pt-BR') {
    return project;
  }

  const override = projectTranslations.en[project.id] ?? {};
  const screenshots = project.screenshots.map((screenshot, index) => ({
    ...screenshot,
    ...(override.screenshots?.[index] ?? {}),
  }));

  return {
    ...project,
    ...override,
    contributionLinks:
      override.contributionLinks?.map((link, index) => ({
        ...project.contributionLinks?.[index],
        ...link,
      })) ?? project.contributionLinks,
    screenshots,
    team: localizeTeam(project.team, locale),
  };
}

export function localizeDocument(document, locale = 'pt-BR') {
  if (locale === 'pt-BR') {
    return document;
  }

  const override = documentTranslations.en[document.id];
  if (!override) return document;

  return {
    ...document,
    ...override,
    contact: document.contact,
  };
}
