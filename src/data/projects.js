import {
    ages1Images,
    ages2Images,
    ages3Images,
    retroTripImages,
    retroIcon,
    rottaImages,
    projectXImages,
    ladoBImages,
    shredImages
} from '../utils/assets';

export const projectsData = [
    // 1. Retro Trip (Focus)
    {
        id: 'retro-trip',
        tech: ['SwiftUI', 'SceneKit', 'GameKit', 'AVFoundation', 'CloudKit', 'MVVM'],
        color: 'bg-indigo-50 border-indigo-100 text-indigo-900',
        link: 'https://apps.apple.com/br/app/retrotrip/id6752355019?l=en-GB',
        images: retroTripImages,
        icon: retroIcon,
        pt: {
            title: 'Retro Trip',
            subtitle: 'Jogo Educacional',
            description: 'Uma experiência educacional imersiva que combina visualização 3D, narração de áudio e quizzes interativos.',
            longDescription: 'Retro Trip é uma jornada educativa gamificada. O app utiliza tecnologias avançadas da Apple para criar imersão. Desenvolvido inteiramente em SwiftUI, explora conceitos de Gamificação para tornar o aprendizado sobre história e cultura mais envolvente.',
            bullets: [
                'Explore eventos históricos diretamente no mapa',
                'Responda quizzes desafiadores em ambientes 3D',
                'Desbloqueie conquistas e colecione distintivos',
                'Aprenda enquanto se diverte através de uma jornada interativa'
            ]
        },
        en: {
            title: 'Retro Trip',
            subtitle: 'Educational Game',
            description: 'An immersive educational experience combining 3D visualization, audio narration, and interactive quizzes.',
            longDescription: 'Retro Trip is a gamified educational journey using advanced Apple technologies for immersion. Built entirely in SwiftUI, it explores Gamification concepts to make learning history and culture engaging.',
            bullets: [
                'Explore historical events directly on the map',
                'Take challenging quizzes in 3D environments',
                'Unlock achievements and collect badges',
                'Learn while having fun through an interactive journey'
            ]
        }
    },
    // 2. Project X (Incognito) - Using Break images
    {
        id: 'incognito',
        tech: ['SwiftUI', 'AI', 'CloudKit'],
        color: 'bg-zinc-900 text-zinc-100 border-zinc-800',
        dark: true,
        images: projectXImages,
        pt: {
            title: 'Project X',
            subtitle: 'Em Desenvolvimento',
            description: 'Um novo projeto inovador em fase de desenvolvimento. Fique ligado.',
            longDescription: 'Este projeto está atualmente em fase confidencial. O foco é resolver problemas complexos com uma interface intuitiva.'
        },
        en: {
            title: 'Project X',
            subtitle: 'In Development',
            description: 'A new innovative project currently in development. Stay tuned.',
            longDescription: 'This project is currently in a confidential phase. The focus is on solving complex problems with an intuitive interface.'
        }
    },
    // 3. AGES III
    {
        id: 'ages-3',
        tech: ['React Native', 'Spring Boot', 'AWS', 'PostgreSQL'],
        color: 'bg-blue-50 border-blue-100 text-blue-900',
        link: 'https://tools.ages.pucrs.br/mp-rs',
        images: ages3Images,
        pt: {
            title: 'Operações MPRS',
            subtitle: 'AGES III',
            description: 'Solução Web responsiva para integração de operações do Ministério Público (MPRS).',
            longDescription: 'Solução Web desenvolvida para o Ministério Público (MPRS/GAECO) que integra três sistemas vitais (MBA Digital, Recupera, Cumpra-se). A plataforma centraliza a gestão de mandados de busca e apreensão, recuperação de veículos e mandados de prisão, facilitando o controle da cadeia de custódia de evidências digitais.',
            responsibilities: ['Apoio a AGES I e II', 'Definição de arquitetura', 'Code Review', 'Planejamento de Testes (V&V)'],
            artifacts: ['Rotas de Backend', 'Diagramas de Arquitetura', 'Diagrama de Deploy', 'Documentação']
        },
        en: {
            title: 'MPRS Operations',
            subtitle: 'AGES III',
            description: 'Responsive Web solution for integrating Public Ministry (MPRS) operations.',
            longDescription: 'Web solution developed for the Public Ministry (MPRS/GAECO) integrating three vital systems (MBA Digital, Recupera, Cumpra-se). The platform centralizes the management of search and seizure warrants, vehicle recovery, and arrest warrants, facilitating digital evidence custody chain control.',
            responsibilities: ['Support to AGES I & II', 'Architecture Definition', 'Code Review', 'Test Planning (V&V)'],
            artifacts: ['Backend Routes', 'Architecture Diagrams', 'Deploy Diagram', 'Documentation']
        }
    },
    // 4. Rotta
    {
        id: 'rotta',
        tech: ['UIKit', 'Swift', 'Clean Architecture'],
        color: 'bg-gray-50 border-gray-200 text-gray-900',
        images: rottaImages,
        pt: {
            title: 'Rotta',
            subtitle: 'Guia de Automobilismo',
            description: 'O guia definitivo para Fórmula 2, Fórmula 3 e F1 Academy. Rankings, calendários e glossário técnico.',
            longDescription: 'Originalmente concebido como um app completo para fãs de automobilismo de base. O projeto foca em UX/UI limpa para apresentar dados complexos de corridas. Inclui funcionalidades de calendário, detalhamento de pilotos e equipes, e um glossário técnico interativo.'
        },
        en: {
            title: 'Rotta',
            subtitle: 'Motorsport Guide',
            description: 'The definitive guide for Formula 2, Formula 3, and F1 Academy. Rankings, calendars, and technical glossary.',
            longDescription: 'Originally designed as a complete app for junior motorsport fans. The project focuses on clean UX/UI to present complex race data. It includes calendar features, driver and team details, and an interactive technical glossary.'
        }
    },
    // 5. Shred (Figma Only)
    {
        id: 'shred',
        tech: ['Figma', 'UI/UX Design', 'Prototyping'],
        color: 'bg-rose-50 border-rose-100 text-rose-900',
        images: shredImages,
        designOnly: true,
        pt: {
            title: 'Shred',
            subtitle: 'Design de Interface',
            description: 'Conceito visual e protótipo de alta fidelidade para app de esportes.',
            longDescription: 'Este projeto focou exclusivamente na fase de descoberta e design. O objetivo foi criar uma identidade visual radical e enérgica. O trabalho envolveu a criação de design system, fluxos de usuário e prototipação no Figma. Não houve implementação de código.'
        },
        en: {
            title: 'Shred',
            subtitle: 'Interface Design',
            description: 'Visual concept and high-fidelity prototype for a sports app.',
            longDescription: 'This project focused exclusively on the discovery and design phase. The goal was to create a radical and energetic visual identity. The work involved creating a design system, user flows, and prototyping in Figma. No code implementation involved.'
        }
    },
    // 6. Lado B
    {
        id: 'lado-b',
        tech: ['UIKit', 'Swift'],
        color: 'bg-purple-50 border-purple-100 text-purple-900',
        images: ladoBImages,
        pt: {
            title: 'Lado B',
            subtitle: 'App',
            description: 'Mais informações em breve.',
            longDescription: 'Informações detalhadas sobre o projeto serão adicionadas em breve.',
        },
        en: {
            title: 'Lado B',
            subtitle: 'App',
            description: 'More information coming soon.',
            longDescription: 'Detailed information about this project will be added soon.',
        }
    },
    // 7. AGES II
    {
        id: 'ages-2',
        tech: ['TypeScript', 'React', 'Nest'],
        color: 'bg-emerald-50 border-emerald-100 text-emerald-900',
        link: 'https://tools.ages.pucrs.br/excedentes',
        images: ages2Images,
        pt: {
            title: 'Excedentes',
            subtitle: 'AGES II',
            description: 'Sistema de gestão de excedentes com foco em otimização de banco de dados.',
            longDescription: 'Projeto alinhado aos ODS da ONU, focado em combater o desperdício de alimentos (Fome Zero) e promover o consumo responsável. A plataforma web conecta empresas com excedentes alimentares a consumidores, oferecendo produtos a preços acessíveis. Atuei fortemente na otimização de banco de dados e diagramação.',
            responsibilities: ['Apoio a AGES I', 'Desenvolvimento de software e BD', 'Modelagem de dados', 'Execução de testes funcionais'],
            artifacts: ['Mockups dos frontend', 'Banco de dados (SQL)', 'Diagramas de ER', 'Documentação técnica']
        },
        en: {
            title: 'Surplus Management',
            subtitle: 'AGES II',
            description: 'Surplus management system focused on database optimization.',
            longDescription: 'Project aligned with UN SDGs, focused on fighting food waste (Zero Hunger) and promoting responsible consumption. The web platform connects companies with food surplus to consumers, offering products at affordable prices. I worked heavily on database optimization and diagramming.',
            responsibilities: ['Support to AGES I', 'Software & DB Development', 'Data Modeling', 'Functional Testing'],
            artifacts: ['Frontend Mockups', 'Database (SQL)', 'ER Diagrams', 'Technical Documentation']
        }
    },
    // 8. AGES I
    {
        id: 'ages-1',
        tech: ['React Native', 'TypeScript', 'NestJS', 'PostgreSQL'],
        color: 'bg-orange-50 border-orange-100 text-orange-900',
        link: 'https://tools.ages.pucrs.br/comunidade-universitaria',
        images: ages1Images,
        pt: {
            title: 'Comunidade Universitária',
            subtitle: 'AGES I',
            description: 'Portal para a comunidade universitária, focado no desenvolvimento frontend e metodologias ágeis.',
            longDescription: 'Rede social acadêmica premiada com uma vaga na AGES no evento Act In Space 2022. A plataforma visa integrar estudantes, permitindo a criação de grupos de interesse, compartilhamento de documentos e organização de eventos, fortalecendo a coesão da comunidade.',
            responsibilities: ['Desenvolver software', 'Levantamento de Requisitos', 'Executar testes funcionais'],
            artifacts: ['Código GIT', 'Wiki', 'Relatórios de Sprints']
        },
        en: {
            title: 'University Community',
            subtitle: 'AGES I',
            description: 'Portal for the university community, focused on frontend development and agile methodologies.',
            longDescription: 'Academic social network awarded a spot in AGES at the Act In Space 2022 event. The platform aims to integrate students, enabling interest group creation, document sharing, and event organization, strengthening community cohesion.',
            responsibilities: ['Software Development', 'Requirements Gathering', 'Functional Testing'],
            artifacts: ['GIT Code', 'Wiki', 'Sprint Reports']
        }
    }
];
