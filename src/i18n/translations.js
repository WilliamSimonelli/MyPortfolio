const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      title: 'Software Engineer',
      description:
        'Software Engineer with 3 years of experience building scalable cloud-native systems and automation solutions. Strong background in AWS-based architectures, distributed systems, and backend development.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      scrollDown: 'Scroll down',
      chips: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'React Native', 'SQL'],
    },
    timeline: {
      sectionTitle: 'Experience & Education',
      sectionSubtitle:
        'My professional journey and the experiences that shaped my expertise in software development.',
      items: [
        {
          title: 'Software Engineer',
          company: 'DevFuture',
          period: '2026 – Present',
          description:
            'Building scalable cloud-native systems and automation solutions. Designing distributed architectures and leading technical initiatives to deliver high-impact solutions across multiple business areas.',
          skills: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'Microservices'],
          type: 'work',
        },
        {
          title: 'IT Analyst',
          company: 'BTG Pactual',
          period: '01/2026 – 2026',
          description:
            'Worked with cloud architecture, designing and implementing scalable and high-performance systems. Led ecosystem migration initiatives, moving applications across new cloud accounts. Modernized legacy applications into robust microservices-based architectures and provided technical leadership across projects.',
          skills: ['AWS', 'Python', 'TypeScript', 'Distributed Systems', 'Microservices'],
          type: 'work',
        },
        {
          title: 'IT Assistant',
          company: 'BTG Pactual',
          period: '04/2025 – 01/2026',
          description:
            'Led development of 4+ core projects across Agro and ALM business areas. Acted as technical reference for web development within the team. Mentored new contributors and supported onboarding into ongoing projects.',
          skills: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'React Native'],
          type: 'work',
        },
        {
          title: 'Regular Internship',
          company: 'BTG Pactual',
          period: '08/2023 – 03/2025',
          description:
            'Led development of internal web systems and cloud infrastructure. Built automation solutions using AWS (Lambda, S3, DynamoDB), reducing manual processes and operational risk. Developed fullstack applications using FastAPI and React Native, working directly with stakeholders.',
          skills: ['AWS Lambda', 'FastAPI', 'React Native', 'Python', 'DynamoDB'],
          type: 'work',
        },
        {
          title: 'Summer Internship',
          company: 'BTG Pactual',
          period: '04/2023 – 08/2023',
          description:
            'Developed automation solutions for internal teams, improving efficiency and reducing errors. Collaborated with cross-functional teams to deliver fast and effective solutions.',
          skills: ['Python', 'AWS', 'Automation'],
          type: 'work',
        },
        {
          title: "Bachelor's in Computer Engineering",
          company: 'EESC – University of São Paulo (USP)',
          period: '2020 – 2025',
          description:
            "Bachelor's Degree in Computer Engineering (expected December 2025). Participated in Tupã EESC team, contributing to an electric vehicle for engineering competitions. Managed financial planning and automated financial processes.",
          skills: ['Computer Engineering', 'Algorithms', 'Software Engineering', 'Data Structures'],
          type: 'education',
        },
      ],
    },
    skills: {
      sectionTitle: 'Skills & Expertise',
      sectionSubtitle:
        'Technical skills and tools I use to build scalable cloud-native systems and high-impact solutions.',
      categories: [
        {
          title: 'Backend & Cloud Core',
          icon: 'backend',
          color: 'primary',
          skills: [
            { name: 'Python', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'FastAPI', level: 85 },
            { name: 'AWS Lambda / S3 / DynamoDB', level: 90 },
            { name: 'AWS RDS / ECS / EKS', level: 80 },
          ],
        },
        {
          title: 'Cloud & Data',
          icon: 'cloud',
          color: 'secondary',
          skills: [
            { name: 'AWS Glue / Athena', level: 75 },
            { name: 'SNS / SQS / EventBridge', level: 80 },
            { name: 'CloudWatch', level: 80 },
            { name: 'SQL (PostgreSQL, MySQL, SQL Server)', level: 80 },
            { name: 'Pandas', level: 75 },
          ],
        },
        {
          title: 'Frontend & Mobile',
          icon: 'frontend',
          color: 'primary',
          skills: [
            { name: 'JavaScript', level: 80 },
            { name: 'React Native', level: 75 },
            { name: 'React', level: 75 },
            { name: 'HTML5 / CSS3', level: 80 },
          ],
        },
        {
          title: 'Tools & Practices',
          icon: 'tools',
          color: 'secondary',
          skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Azure DevOps', level: 75 },
            { name: 'Microservices Architecture', level: 85 },
            { name: 'Distributed Systems', level: 80 },
            { name: 'Agile / Scrum', level: 85 },
          ],
        },
        {
          title: 'iOS & iPad Development',
          icon: 'ios',
          color: 'primary',
          skills: [
            { name: 'Swift', level: 70 },
            { name: 'SwiftUI', level: 65 },
            { name: 'Xcode', level: 70 },
            { name: 'iPad OS', level: 70 },
            { name: 'React Native', level: 75 },
          ],
        },
      ],
      certificationsTitle: 'Languages & Education',
      certifications: [
        'EESC – USP, Computer Engineering (2020–2025)',
        'English: Advanced',
        'Portuguese: Native',
      ],
    },
    projects: {
      sectionTitle: 'Featured Projects',
      sectionSubtitle:
        'A selection of projects that showcase my skills and passion for creating scalable solutions.',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      viewAll: 'View All Projects on GitHub',
    },
    contact: {
      sectionTitle: 'Get In Touch',
      sectionSubtitle:
        "I'm always interested in new opportunities and interesting projects. Let's connect and discuss how we can work together.",
      infoTitle: 'Contact Information',
      formTitle: 'Send Me a Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      send: 'Send Message',
      successMessage: "Message sent successfully! I'll get back to you soon.",
      followTitle: 'Follow Me',
      location: 'São Paulo, Brazil',
    },
    footer: {
      description:
        'Software Engineer passionate about building scalable cloud-native systems and delivering high-impact solutions.',
      quickLinks: 'Quick Links',
      connect: 'Connect With Me',
      rights: 'All rights reserved. Built with React & Material-UI.',
    },
  },

  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, sou',
      title: 'Engenheiro de Software',
      description:
        'Engenheiro de Software com 3 anos de experiência construindo sistemas cloud-native escaláveis e soluções de automação. Forte background em arquiteturas baseadas em AWS, sistemas distribuídos e desenvolvimento backend.',
      viewWork: 'Ver Meu Trabalho',
      getInTouch: 'Entre em Contato',
      scrollDown: 'Role para baixo',
      chips: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'React Native', 'SQL'],
    },
    timeline: {
      sectionTitle: 'Experiência & Educação',
      sectionSubtitle:
        'Minha jornada profissional e as experiências que moldaram minha expertise em desenvolvimento de software.',
      items: [
        {
          title: 'Engenheiro de Software',
          company: 'DevFuture',
          period: '2026 – Presente',
          description:
            'Construindo sistemas cloud-native escaláveis e soluções de automação. Projetando arquiteturas distribuídas e liderando iniciativas técnicas para entregar soluções de alto impacto em múltiplas áreas de negócio.',
          skills: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'Microsserviços'],
          type: 'work',
        },
        {
          title: 'Analista de TI',
          company: 'BTG Pactual',
          period: '01/2026 – 2026',
          description:
            'Atuação com arquitetura cloud, projetando e implementando sistemas escaláveis e de alta performance. Liderança de iniciativas de migração de ecossistema e modernização de aplicações legadas em arquiteturas baseadas em microsserviços, com liderança técnica em projetos estratégicos.',
          skills: ['AWS', 'Python', 'TypeScript', 'Sistemas Distribuídos', 'Microsserviços'],
          type: 'work',
        },
        {
          title: 'Assistente de TI',
          company: 'BTG Pactual',
          period: '04/2025 – 01/2026',
          description:
            'Liderou o desenvolvimento de 4+ projetos centrais nas áreas de Agro e ALM. Atuou como referência técnica em desenvolvimento web. Mentorou novos colaboradores e aprimorou sistemas existentes, aumentando confiabilidade e performance.',
          skills: ['Python', 'TypeScript', 'AWS', 'FastAPI', 'React Native'],
          type: 'work',
        },
        {
          title: 'Estágio Regular',
          company: 'BTG Pactual',
          period: '08/2023 – 03/2025',
          description:
            'Liderou o desenvolvimento de sistemas web internos e infraestrutura cloud. Construiu soluções de automação usando AWS (Lambda, S3, DynamoDB), reduzindo processos manuais. Desenvolveu aplicações fullstack com FastAPI e React Native, trabalhando diretamente com stakeholders.',
          skills: ['AWS Lambda', 'FastAPI', 'React Native', 'Python', 'DynamoDB'],
          type: 'work',
        },
        {
          title: 'Estágio de Verão',
          company: 'BTG Pactual',
          period: '04/2023 – 08/2023',
          description:
            'Desenvolveu soluções de automação para times internos, melhorando eficiência e reduzindo erros. Colaborou com times multifuncionais para entregar soluções rápidas e eficazes.',
          skills: ['Python', 'AWS', 'Automação'],
          type: 'work',
        },
        {
          title: 'Bacharelado em Engenharia de Computação',
          company: 'EESC – Universidade de São Paulo (USP)',
          period: '2020 – 2025',
          description:
            'Bacharelado em Engenharia de Computação (previsão: dezembro de 2025). Participou do time Tupã EESC, contribuindo no desenvolvimento de veículo elétrico para competições de engenharia, gerenciamento financeiro e automação de processos.',
          skills: ['Engenharia de Computação', 'Algoritmos', 'Engenharia de Software', 'Estruturas de Dados'],
          type: 'education',
        },
      ],
    },
    skills: {
      sectionTitle: 'Habilidades & Expertise',
      sectionSubtitle:
        'Habilidades técnicas e ferramentas que uso para construir sistemas cloud-native escaláveis e soluções de alto impacto.',
      categories: [
        {
          title: 'Backend & Cloud Core',
          icon: 'backend',
          color: 'primary',
          skills: [
            { name: 'Python', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'FastAPI', level: 85 },
            { name: 'AWS Lambda / S3 / DynamoDB', level: 90 },
            { name: 'AWS RDS / ECS / EKS', level: 80 },
          ],
        },
        {
          title: 'Cloud & Dados',
          icon: 'cloud',
          color: 'secondary',
          skills: [
            { name: 'AWS Glue / Athena', level: 75 },
            { name: 'SNS / SQS / EventBridge', level: 80 },
            { name: 'CloudWatch', level: 80 },
            { name: 'SQL (PostgreSQL, MySQL, SQL Server)', level: 80 },
            { name: 'Pandas', level: 75 },
          ],
        },
        {
          title: 'Frontend & Mobile',
          icon: 'frontend',
          color: 'primary',
          skills: [
            { name: 'JavaScript', level: 80 },
            { name: 'React Native', level: 75 },
            { name: 'React', level: 75 },
            { name: 'HTML5 / CSS3', level: 80 },
          ],
        },
        {
          title: 'Ferramentas & Práticas',
          icon: 'tools',
          color: 'secondary',
          skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Azure DevOps', level: 75 },
            { name: 'Arquitetura de Microsserviços', level: 85 },
            { name: 'Sistemas Distribuídos', level: 80 },
            { name: 'Agile / Scrum', level: 85 },
          ],
        },
        {
          title: 'iOS & Desenvolvimento iPad',
          icon: 'ios',
          color: 'primary',
          skills: [
            { name: 'Swift', level: 70 },
            { name: 'SwiftUI', level: 65 },
            { name: 'Xcode', level: 70 },
            { name: 'iPad OS', level: 70 },
            { name: 'React Native', level: 75 },
          ],
        },
      ],
      certificationsTitle: 'Idiomas & Formação',
      certifications: [
        'EESC – USP, Engenharia de Computação (2020–2025)',
        'Inglês: Avançado',
        'Português: Nativo',
      ],
    },
    projects: {
      sectionTitle: 'Projetos em Destaque',
      sectionSubtitle:
        'Uma seleção de projetos que demonstram minhas habilidades e paixão por criar soluções escaláveis.',
      viewCode: 'Ver Código',
      liveDemo: 'Demo ao Vivo',
      viewAll: 'Ver Todos os Projetos no GitHub',
    },
    contact: {
      sectionTitle: 'Entre em Contato',
      sectionSubtitle:
        'Estou sempre interessado em novas oportunidades e projetos interessantes. Vamos conversar e discutir como podemos trabalhar juntos.',
      infoTitle: 'Informações de Contato',
      formTitle: 'Envie uma Mensagem',
      namePlaceholder: 'Seu Nome',
      emailPlaceholder: 'Seu E-mail',
      messagePlaceholder: 'Sua Mensagem',
      send: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      followTitle: 'Me Siga',
      location: 'São Paulo, Brasil',
    },
    footer: {
      description:
        'Engenheiro de Software apaixonado por construir sistemas cloud-native escaláveis e entregar soluções de alto impacto.',
      quickLinks: 'Links Rápidos',
      connect: 'Conecte-se Comigo',
      rights: 'Todos os direitos reservados. Desenvolvido com React & Material-UI.',
    },
  },
};

export default translations;
