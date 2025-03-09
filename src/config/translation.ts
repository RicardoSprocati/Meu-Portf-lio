import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          header: {
            about: "Sobre Mim",
            portfolio: "Portfólio",
            contacts: "Contatos",
          },
          carousel: {
            slide1: "Landing page: Restaurante",
            slide2: "Landing page: Bootstrap",
            slide3: "E-commerce: Loja de games",
            slide4: "E-commerce: Carrinho",
            slide5: "E-commerce: Cadastro",
            slide6: "E-commerce: Finalização do pedido",
            slide7: "Agenda: Gerenciamento",
            slide8: "Agenda: Cadastro",
            slide9: "Landing page: FAQ",
            slide10: "Habilidades: Grunt",
            slide11: "Habilidades: Cypress",
            slide12: "Habilidades: Testing-library",
            slide13: "Habilidades: Responsividade",
            slide14: "Habilidades: Organização de código",
            slide15: "Habilidades: API",
          },
          aboutMe: {
            welcome: '🚀 Olá! Seja bem-vindo ao meu universo tech!',
            introduction: '👋 Me chamo Ricardo e sou Desenvolvedor Front-end em transição de carreira.',
            studies: '🎓 Estudando Full Stack Python na EBAC e aprimorando o inglês.',
            skillsTitle: '🧑‍💻 Minhas habilidades técnicas',
            frontend: '💡 Front-end: React, JavaScript, HTML, CSS.',
            tools: '⚙️ Ferramentas: Gulp, Less, Bibliotecas, Parcel.',
            backend: '🖥 Back-end em progresso: Python, Node.js e bancos de dados.',
            journeyTitle: '🎯 Minha jornada até aqui',
            journey1: '🛒 Operador de Caixa → Cálculos rápidos.',
            journey2: '📈 Mercado Financeiro → Estratégia & paciência.',
            journey3: '🍔 Empreendedor → Gestão de tempo & organização.',
            nextStepsTitle: '🚀 Próximos Passos',
            step1: '✅ Finalizar meus estudos no back-end e me tornar full stack.',
            step2: '✅ Fazer uma graduação em ADS.',
            step3: '✅ Evoluir no inglês para oportunidades internacionais.',
            step4: '✨ E claro! Fazer parte da sua equipe e contribuir com projetos incríveis. 💼🚀😊'
          },
          projects: {
            readMore: 'Leia mais',
            readLess: 'Leia menos',
            topFive: 'Meu Top Five Projetos',
            viewProject: 'Ver Projeto',
            project1: {
              title: 'Landing Page: Al Khubz',
              description: 'Desenvolvimento de uma página para um restaurante árabe, utilizando diversas ferramentas do Bootstrap, incluindo carrossel, menu hambúrguer e sidebar. A implementação também envolveu CSS e JavaScript. O projeto foi versionado no GitHub e publicado na plataforma Vercel.',
            },
            project2: {
              title: 'E-commerce: E-PLAY',
              description: 'Desenvolvimento de uma página de games responsiva, utilizando React, React Router e Styled-Components para criar um layout dinâmico e estilizado. A aplicação incluiu funcionalidades como validação de formulários com Formik e Yup, além de máscaras de entrada com React-Input-Mask. O gerenciamento de estado foi implementado com Redux Toolkit. Foram realizadas integrações com APIs, incluindo o uso de mutations para gerenciamento de dados. O projeto foi versionado no GitHub e publicado na plataforma Vercel.',
            },
            project3: {
              title: 'E-commerce: Efood',
              description: 'Um e-commerce de pratos de comida baseado em um layout desenvolvido no Figma, utilizando React, React Router e Styled-Components para criar uma interface responsiva e estilizada. A aplicação incluiu validação de formulários com Formik e Yup. Foram realizadas integrações com APIs, incluindo o uso de mutations para gerenciamento de dados dinâmicos. O projeto contou com configurações avançadas utilizando EditorConfig, ESLint e Prettier para padronização e qualidade do código. O código foi versionado no GitHub e publicado na plataforma Vercel.',
            },
            project4: {
              title: 'Minhas Tarefas',
              description: 'Minhas Tarefas é uma aplicação de agenda pessoal desenvolvida com React, Redux Toolkit e TypeScript, permitindo que os usuários gerenciem seus lembretes de forma prática e organizada. A aplicação possibilita a inserção de lembretes com descrição detalhada e classificação de prioridade, além de permitir sua edição e marcação como concluídos. Para facilitar a navegação e organização, há um campo de busca para filtrar atividades rapidamente.A interface do projeto foi construída utilizando styled-components, garantindo uma estilização modular e flexível. Para a navegação entre diferentes telas, foi implementado o React Router Dom. Além disso, o projeto conta com Testing Library para testes eficientes e assegura um código limpo e padronizado com ESLint e Prettier.',
            },
            project5: {
              title: 'Clone Disney+',
              description: 'O EBAC Projeto Clone Disney+ é uma recriação da página inicial do Disney Plus, desenvolvida para absorver e aplicar diversos conceitos fundamentais de desenvolvimento web. O projeto foca na construção de uma interface fiel ao original, garantindo responsividade e otimização de recursos.Para o desenvolvimento, foi utilizada a ferramenta Gulp, que automatiza tarefas como compilação e otimização de arquivos. A estilização foi feita com Sass, uma poderosa extensão do CSS que facilita a organização e manutenção do código. Além disso, o projeto conta com gulp-sass para processar os estilos, gulp-imagemin para otimização de imagens, e gulp-uglify para minificação de arquivos JavaScript, garantindo melhor performance.',
            }
          },
          footer: {
            footerTitle: 'Contatos :',
            copyright: '© 2025 Todos os direitos reservados'
          }
        },
      },
      en: {
        translation: {
          header: {
            about: "About Me",
            portfolio: "Portfolio",
            contacts: "Contacts",
          },
          carousel: {
            slide1: "Landing page: Restaurant",
            slide2: "Landing page: Bootstrap",
            slide3: "E-commerce: Game store",
            slide4: "E-commerce: Cart",
            slide5: "E-commerce: Registration",
            slide6: "E-commerce: Checkout",
            slide7: "Agenda: Management",
            slide8: "Agenda: Registration",
            slide9: "Landing page: FAQ",
            slide10: "Skills: Grunt",
            slide11: "Skills: Cypress",
            slide12: "Skills: Testing-library",
            slide13: "Skills: Responsiveness",
            slide14: "Skills: Code organization",
            slide15: "Skills: API",
          },
          aboutMe: {
            welcome: '🚀 Hello! Welcome to my tech universe!',
            introduction: '👋 My name is Ricardo and I am a Front-end Developer transitioning careers.',
            studies: '🎓 Studying Full Stack Python at EBAC and improving my English.',
            skillsTitle: '🧑‍💻 My technical skills',
            frontend: '💡 Front-end: React, JavaScript, HTML, CSS.',
            tools: '⚙️ Tools: Gulp, Less, Libraries, Parcel.',
            backend: '🖥 Back-end in progress: Python, Node.js, and databases.',
            journeyTitle: '🎯 My journey so far',
            journey1: '🛒 Cashier → Quick calculations.',
            journey2: '📈 Financial Market → Strategy & patience.',
            journey3: '🍔 Entrepreneur → Time management & organization.',
            nextStepsTitle: '🚀 Next Steps',
            step1: '✅ Complete my back-end studies and become full stack.',
            step2: '✅ Earn a degree in Computer Science.',
            step3: '✅ Improve my English for international opportunities.',
            step4: '✨ And of course! Join your team and contribute to amazing projects. 💼🚀😊'
          },
          projects: {
            readMore: 'Read More',
            readLess: 'Read less',
            topFive: 'My Top Five Projects',
            viewProject: 'View Project',
            project1: {
              title: 'Landing Page: Al Khubz',
              description: 'Development of a landing page for an Arabic restaurant, using various Bootstrap tools including carousel, hamburger menu, and sidebar. The implementation also involved CSS and JavaScript. The project was versioned on GitHub and deployed on Vercel.',
            },
            project2: {
              title: 'E-commerce: E-PLAY',
              description: 'Development of a responsive game store page using React, React Router, and Styled-Components to create a dynamic and styled layout. The application included features such as form validation with Formik and Yup, as well as input masks with React-Input-Mask. State management was implemented with Redux Toolkit. API integrations were made, including mutations for data management. The project was versioned on GitHub and deployed on Vercel.',
            },
            project3: {
              title: 'E-commerce: Efood',
              description: 'An e-commerce site for food, based on a layout developed in Figma, using React, React Router, and Styled-Components to create a responsive and styled interface. The application included form validation with Formik and Yup. API integrations were made, including mutations for dynamic data management. The project also had advanced configurations with EditorConfig, ESLint, and Prettier to ensure code quality and consistency. The code was versioned on GitHub and deployed on Vercel.',
            },
            project4: {
              title: 'My Tasks',
              description: 'My Tasks is a personal agenda app developed with React, Redux Toolkit, and TypeScript, allowing users to manage their reminders in an organized and practical way. The app allows adding reminders with detailed descriptions and priority classification, as well as editing and marking them as completed. There is a search bar to quickly filter tasks. The interface was built using styled-components for modular and flexible styling. React Router was used for navigation between screens. The project also uses Testing Library for efficient testing and ensures clean code with ESLint and Prettier.',
            },
            project5: {
              title: 'Clone Disney+',
              description: 'The EBAC Clone Disney+ project is a recreation of the Disney Plus homepage, developed to apply fundamental web development concepts. The project focuses on building a faithful interface to the original, ensuring responsiveness and resource optimization. Gulp was used for automation tasks like file compilation and optimization. Styling was done with Sass, a powerful CSS extension that helps organize and maintain the code. The project also uses gulp-sass for processing styles, gulp-imagemin for image optimization, and gulp-uglify for JavaScript file minification, ensuring better performance.',
            },
          },
          footer: {
            footerTitle: 'Contacts :',
            copyright: '© 2025 All rights reserved'
          }
        },
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
