import React from 'react';
import './ygo-font.css';
import './App.css';

import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('PT-BR');
  const [activeCategory, setActiveCategory] = useState('Sobre');
  const t = {
    'PT-BR': {
      categories: ['Sobre', 'Experiências', 'Projetos', 'Formação'],
      about: {
        hello: 'Olá, eu sou Pedro Soeiro!',
        dev: 'Desenvolvedor Full Stack',
        desc1: 'Desenvolvedor formado e experiência prática em TI. Atua com Python, JavaScript, TypeScript, Node.js, React, Supabase, MongoDB, Linux, C++, GitHub e IA aplicando boas práticas e fundamentos de engenharia de software. Possui certificações de Harvard, IBM e Microsoft em Cibersegurança, Inteligência Artificial, Data Science, Cs50 e Lógica de Programação.',
        desc2: 'Focado em criar aplicações funcionais, seguras e escaláveis, unindo conhecimento técnico e criatividade para gerar soluções de alto impacto.',
        resume: 'Baixar Currículo',
        skills: 'Minhas Skills',
      },
      jobs: 'Experiências',
      jobsList: [
        {
          company: 'Data Voice Informática',
          date: 'Fevereiro/2021 - Dezembro/2024',
          items: [
            'Atendimento ao público e suporte técnico.',
            'Edição básica de logomarcas e documentos (Word, PDF, Excel).',
            'Personalização gráfica: criação de cardápios e cartões de visita.',
            'Manutenção e reparos em computadores, notebooks e impressoras.'
          ]
        },
        {
          company: 'CEF',
          date: 'Fevereiro/2021 - Dezembro/2021',
          items: [
            'Atendimento ao público.',
            'Edição de documentos (Word, PDF, Excel).',
            'Emissão de Carnês, Boletim Escolar e Planilhas.'
          ]
        },
        {
          company: 'Freelancer',
          date: 'Fevereiro/2024 - Atualmente',
          items: [
            'Desenvolvi landing pages responsivas e focadas em conversão, com design moderno, animações leves, integração com formulários de captura e ferramentas de marketing. Otimizei para SEO e performance, garantindo melhor taxa de engajamento e leads para os clientes.',
            'Criei websites completos, responsivos e dinâmicos, incluindo seções de portfólio, blog, contato e serviços. Implementei funcionalidades como chat online, integração com redes sociais e painel de administração, além de otimização de SEO e performance, entregando sites modernos e funcionais para empresas e profissionais.',
            'Desenvolvi aplicações web SaaS focadas em resolver problemas específicos, com dashboard interativo, autenticação de usuários, integração com APIs externas e sistema de pagamentos online. Apliquei práticas de UX/UI premium, animações, cores personalizadas e layouts responsivos para garantir experiência fluida aos usuários.',
            'Criei mini games web interativos e responsivos, com pontuação, leaderboard e efeitos visuais e sonoros. Os jogos foram desenvolvidos para desktop e mobile, usando tecnologias modernas de HTML5, Canvas e frameworks como Phaser.js, oferecendo entretenimento e engajamento aos usuários.'
          ]
        }
      ],
      projects: 'Projetos',
      projectsList: [
        {
          company: 'Snake Game',
          tech: 'HTML, CSS, JavaScript',
          desc: 'Snake Game clássico feito em JavaScript, HTML e CSS.',
          btn: 'Jogar'
        },
        {
          company: 'Websites',
          tech: 'HTML, CSS, JavaScript',
          desc: 'Crio websites responsivos e otimizados, com foco em design moderno, usabilidade intuitiva e alta performance. Utilizo tecnologias atuais (HTML, CSS, JavaScript, React/Next.js, TailwindCSS) para entregar páginas rápidas, seguras e preparadas para SEO, sempre alinhadas à identidade e objetivos do cliente.',
          btn: 'Ver site'
        },
        {
          company: 'Landing Pages',
          tech: 'HTML, CSS, JavaScript, Tailwind, 3D',
          desc: 'Landing pages para nutricionistas, academias, advocacias, personal, etc... focadas em conversão. Interfaces modernas, atrativas e de alto desempenho.',
          btn: 'Ver landing'
        },
        {
          company: 'MicroSaaS',
          tech: 'HTML, CSS, JavaScript, React, Tailwind, Supabase',
          desc: 'Desenvolvo aplicações MicroSaaS focadas em nichos específicos, com arquitetura escalável, UX simples e processos automatizados. Meus projetos unem tecnologia moderna a um modelo de assinatura recorrente, entregando soluções digitais leves, acessíveis e com alto potencial de crescimento.',
          btn: 'Ver SaaS'
        }
      ],
      educations: 'Formação',
      educationsList: [
        {
          company: 'Ensino Superior',
          tech: 'Análise e Desenvolvimento de Sistemas',
          items: ['Formação superior em ADS.']
        },
        {
          company: 'Mestrado',
          tech: 'Em andamento',
          items: ['Programa de pós-graduação em curso.']
        }
      ],
      social: 'Redes Sociais',
      phone: 'Telefone',
      email: 'Email',
      download: 'Baixar Currículo',
    },
    'EN': {
      categories: ['About', 'Experiences', 'Projects', 'Education'],
      about: {
        hello: 'Hello, I am Pedro Soeiro!',
        dev: 'Full Stack Developer',
        desc1: 'Developer with a degree and practical experience in IT. Works with Python, JavaScript, TypeScript, Node.js, React, Supabase, MongoDB, Linux, C++, GitHub and AI, applying best practices and software engineering fundamentals. Holds certifications from Harvard, IBM and Microsoft in Cybersecurity, Artificial Intelligence, Data Science, Cs50 and Programming Logic.',
        desc2: 'Focused on creating functional, secure and scalable applications, combining technical knowledge and creativity to generate high-impact solutions.',
        resume: 'Download Resume',
        skills: 'My Skills',
      },
      jobs: 'Experiences',
      jobsList: [
        {
          company: 'Data Voice Informática',
          date: 'Feb/2021 - Dec/2024',
          items: [
            'Customer service and technical support.',
            'Basic editing of logos and documents (Word, PDF, Excel).',
            'Graphic customization: menu and business card creation.',
            'Maintenance and repair of computers, notebooks and printers.'
          ]
        },
        {
          company: 'CEF',
          date: 'Feb/2021 - Dec/2021',
          items: [
            'Customer service.',
            'Document editing (Word, PDF, Excel).',
            'Issuing payment books, school reports and spreadsheets.'
          ]
        },
        {
          company: 'Freelancer',
          date: 'Feb/2024 - Present',
          items: [
            'Developed responsive landing pages focused on conversion, with modern design, light animations, integration with capture forms and marketing tools. Optimized for SEO and performance, ensuring better engagement and leads for clients.',
            'Created complete, responsive and dynamic websites, including portfolio, blog, contact and services sections. Implemented features such as online chat, social media integration and admin panel, as well as SEO and performance optimization, delivering modern and functional sites for companies and professionals.',
            'Developed SaaS web applications focused on solving specific problems, with interactive dashboard, user authentication, integration with external APIs and online payment system. Applied premium UX/UI practices, animations, custom colors and responsive layouts to ensure a smooth user experience.',
            'Created interactive and responsive web mini games, with scoring, leaderboard and visual and sound effects. The games were developed for desktop and mobile, using modern HTML5 technologies, Canvas and frameworks such as Phaser.js, offering entertainment and engagement to users.'
          ]
        }
      ],
      projects: 'Projects',
      projectsList: [
        {
          company: 'Snake Game',
          tech: 'HTML, CSS, JavaScript',
          desc: 'Classic Snake Game made with JavaScript, HTML and CSS.',
          btn: 'Play'
        },
        {
          company: 'Websites',
          tech: 'HTML, CSS, JavaScript, React, TailwindCSS',
          desc: 'I create responsive and optimized websites, focusing on modern design, intuitive usability and high performance. I use current technologies (HTML, CSS, JavaScript, React.js, TailwindCSS) to deliver fast, secure and SEO-ready pages, always aligned with the client’s identity and goals.',
          btn: 'View site'
        },
        {
          company: 'Landing Pages',
          tech: 'HTML, CSS, JavaScript, Tailwind, 3D',
          desc: 'Landing pages for nutritionists, gyms, law firms, personal trainers, etc... focused on conversion. Modern, attractive and high-performance interfaces.',
          btn: 'View landing'
        },
        {
          company: 'MicroSaaS',
          tech: 'HTML, CSS, JavaScript, React, TailwindCSS, Supabase',
          desc: 'I develop MicroSaaS applications focused on specific niches, with scalable architecture, simple UX and automated processes. My projects combine modern technology with a recurring subscription model, delivering lightweight, accessible digital solutions with high growth potential.',
          btn: 'View SaaS'
        }
      ],
      educations: 'Education',
      educationsList: [
        {
          company: 'Higher Education',
          tech: 'Systems Analysis and Development',
          items: ['Bachelor degree in Systems Analysis and Development.']
        },
        {
          company: 'Master’s Degree',
          tech: 'In progress',
          items: ['Postgraduate program in progress.']
        }
      ],
      social: 'Social Link',
      phone: 'Phone',
      email: 'Email',
      download: 'Download Resume',
    },
  };
  React.useEffect(() => {
    // Sincroniza categoria ativa ao trocar idioma, mantendo equivalente
    const idx = Object.values(t).some(obj => obj.categories.includes(activeCategory))
      ? t[lang === 'PT-BR' ? 'EN' : 'PT-BR'].categories.indexOf(activeCategory)
      : t[lang].categories.indexOf(activeCategory);
    if (idx >= 0 && idx < t[lang].categories.length) {
      setActiveCategory(t[lang].categories[idx]);
    }
  }, [lang]);
  return (
    <div className="app-root">
      <div style={{position: 'fixed', top: 18, right: 18, zIndex: 9999}}>
        <button
          onClick={() => setLang(lang === 'PT-BR' ? 'EN' : 'PT-BR')}
          className="premium-lang-btn"
          title={lang === 'PT-BR' ? 'Switch to English' : 'Mudar para Português'}
        >
          <span style={{display:'flex',alignItems:'center',gap:8}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{marginRight:4}} xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#e5c07b" />
              <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#181818">{lang === 'PT-BR' ? 'PT' : 'EN'}</text>
            </svg>
            <span style={{fontWeight:'bold',fontSize:'1.08rem',color:'#181818'}}>{lang === 'PT-BR' ? 'PT' : 'EN'}</span>
          </span>
        </button>
      </div>
      <div className="portfolio-container">
        <div className="mac-window-bar">
          <span className="mac-btn mac-close"></span>
          <span className="mac-btn mac-min"></span>
          <span className="mac-btn mac-max"></span>
        </div>
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Categories</h2>
          </div>
          <nav className="sidebar-nav">
            <ul className="premium-categories">
              {t[lang].categories.map((cat, idx) => (
                <li
                  key={cat + '-' + idx}
                  className={activeCategory === t['EN'].categories[idx] || activeCategory === t['PT-BR'].categories[idx] ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="cat-dot" />{cat}
                </li>
              ))}
            </ul>
      <style>{`
        .premium-categories {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
          .premium-categories li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.13rem;
            font-weight: 600;
            color: #fffbe6;
            background: rgba(20,20,20,0.62);
            border-radius: 12px;
            padding: 8px 22px 8px 16px;
            margin-bottom: 2px;
            cursor: pointer;
            box-shadow: 0 1px 8px #bfa14a22, 0 0 0 1.5px #bfa14a22 inset;
            transition: box-shadow 0.25s, background 0.25s, color 0.25s, transform 0.25s;
            position: relative;
        }
        .premium-categories li:hover {
          background: linear-gradient(90deg, #bfa14a33 0%, #181818 100%);
          color: #fffbe6;
          box-shadow: 0 4px 18px #bfa14a55, 0 0 0 2.5px #e5c07b, 0 1.5px 8px 2px #0005;
          transform: translateY(-2px) scale(1.03);
        }
        .premium-categories li.active {
          background: linear-gradient(90deg, #bfa14a77 0%, #181818 100%);
          color: #181818;
          box-shadow: 0 4px 24px #bfa14a99, 0 0 0 2.5px #e5c07b, 0 1.5px 12px 2px #0005;
          font-weight: 700;
          transform: scale(1.06);
        }
        .premium-categories .cat-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 4px;
          background: linear-gradient(120deg, #bfa14a 0%, #e5c07b 100%);
          box-shadow: 0 0 6px #bfa14a77;
          opacity: 0.18;
          transition: opacity 0.2s, box-shadow 0.2s;
        }
        .premium-categories li.active .cat-dot {
          opacity: 1;
          box-shadow: 0 0 12px #bfa14a, 0 0 0 2px #e5c07b;
        }
        @keyframes fadeUpCat {
          0% { opacity: 0; transform: translateY(18px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
          </nav>
          <div className="sidebar-social premium-social">
            <h3>{t[lang].social}</h3>
            <ul>
              <li>
                <a className="premium-social-link" href="https://www.linkedin.com/in/pedro-baruc-pinto-soeiro-76217a26b" target="_blank" rel="noopener noreferrer">
                  <span className="psicon" style={{color:'#0a66c2'}}>
                    <svg width="20" height="20" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M12.1 13.6h-2.7v8.2h2.7v-8.2zm-1.3-1.3c.9 0 1.5-.6 1.5-1.4 0-.8-.6-1.4-1.5-1.4s-1.5.6-1.5 1.4c0 .8.6 1.4 1.5 1.4zm3.1 9.5h2.7v-4.6c0-.2 0-.4.1-.5.2-.4.6-.8 1.3-.8.9 0 1.2.6 1.2 1.5v4.4h2.7v-4.7c0-2.5-1.3-3.7-3-3.7-1.4 0-2 .8-2.3 1.3v-1.1h-2.7c.1.7 0 8.2 0 8.2z" fill="#0a66c2"/></svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="premium-social-link" href="https://github.com/PpedroSoeiroo" target="_blank" rel="noopener noreferrer">
                  <span className="psicon" style={{color:'#fff'}}>
                    <svg width="20" height="20" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#181818"/><path d="M16 7c-5 0-9 4-9 9 0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2-.2-4.1-1-4.1-4.3 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8.7-.2 1.5-.3 2.2-.3s1.5.1 2.2.3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.3-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5C22.4 23.4 25 20 25 16c0-5-4-9-9-9z" fill="#fff"/></svg>
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a className="premium-social-link" href="https://web.whatsapp.com/send?phone=5591981545349" target="_blank" rel="noopener noreferrer">
                  <span className="psicon" style={{color:'#25d366'}}>
                    <svg width="20" height="20" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16 7.1c-4.9 0-8.9 4-8.9 8.9 0 1.6.4 3.1 1.2 4.5l-1.3 4.7 4.8-1.3c1.3.7 2.7 1.1 4.2 1.1 4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9zm4.9 12.2c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.2-1.5.1-.3-.1-.7-.1-1.2-.3-.3-.1-.7-.2-1.2-.5-.7-.4-2.2-1.5-2.6-2.9-.3-.8-.3-1.5 0-2 .1-.2.2-.3.4-.4.1-.1.2-.1.3-.1h.2c.1 0 .2 0 .3.2.1.2.4.6.5.8.1.2.1.3 0 .5-.1.1-.2.3-.3.4-.1.1-.2.2-.1.4.2.4.7 1.1 1.5 1.5.7.4 1.2.5 1.4.3.2-.2.5-.6.6-.7.1-.1.2-.1.4 0 .1.1.4.2.5.3.1.1.2.1.3.2.1.1.1.2.1.3zm-4.9 5.2c-1.2 0-2.4-.3-3.4-.8l-.2-.1-3.2.9.9-3.1-.1-.2c-.6-1-1-2.2-1-3.4 0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1z" fill="#25d366"/></svg>
                  </span>
                  {t[lang].phone}
                </a>
              </li>
              <li>
                <a className="premium-social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=Pedrobaruc622@gmail.com" target="_blank" rel="noopener noreferrer">
                  <span className="psicon" style={{color:'#ea4335'}}>
                    <svg width="20" height="20" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M24 10.7v10.6c0 .6-.5 1.1-1.1 1.1H9.1c-.6 0-1.1-.5-1.1-1.1V10.7c0-.6.5-1.1 1.1-1.1h13.8c.6 0 1.1.5 1.1 1.1zm-2.2 0l-5.8 4.6-5.8-4.6v10.6h11.6V10.7zm-5.8 3.2l5.8-4.6H9.1l5.8 4.6z" fill="#ea4335"/></svg>
                  </span>
                  {t[lang].email}
                </a>
              </li>
            </ul>
          </div>
      <style>{`
        .premium-social ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .premium-social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(20,20,20,0.82);
          border-radius: 14px;
          padding: 10px 22px 10px 14px;
          margin-bottom: 12px;
          font-weight: 600;
          color: #fffbe6;
          font-size: 1.08rem;
          text-decoration: none;
          border: 1.5px solid #bfa14a55;
          box-shadow: 0 2px 12px #bfa14a22, 0 0 0 1.5px #bfa14a33 inset;
          transition: box-shadow 0.3s, background 0.3s, color 0.3s, border 0.3s, transform 0.3s;
          position: relative;
        }
        .premium-social-link:hover {
          background: linear-gradient(90deg, #bfa14a33 0%, #181818 100%);
          color: #fffbe6;
          border: 2px solid #e5c07b;
          box-shadow: 0 4px 24px #bfa14a77, 0 0 0 2.5px #e5c07b, 0 1.5px 12px 2px #0005;
          transform: translateY(-2px) scale(1.04);
        }
        .psicon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2em;
        }
      `}</style>
        </aside>
        <main className="main-content">
          {(activeCategory === t[lang].categories[0]) && (
            <>
              <header className="main-header">
                <div className="profile-info">
                  <h1>{t[lang].about.hello}</h1>
                  <p>{t[lang].about.dev}</p>
                  <div style={{ textAlign: 'justify' }}>
                    <p>{t[lang].about.desc1}</p>
                    <p>{t[lang].about.desc2}</p>
                  </div>
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/14DVmLxQqeGBPt2TF-jkAn-ghMIX4C9RN/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t[lang].about.resume}
                  </a>
                </div>
                <div className="profile-img">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '18px',
                      overflow: 'visible',
                      marginLeft: '28px',
                      zIndex: 1,
                      /* animation removida para evitar pisca ao trocar idioma */
                      perspective: '1200px',
                    }}
                  >
                    <div
                      className="profile-3d-premium"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '16px',
                          background: 'linear-gradient(120deg, #fffbe6 0%, #f7e7b6 100%)',
                          boxShadow: '0 18px 40px -8px #bfa14a99, 0 0 0 2.5px #e5c07b, 0 1.5px 12px 2px #0005',
                          position: 'relative',
                          overflow: 'hidden',
                          filter: 'drop-shadow(0 8px 24px #bfa14a55)',
                          transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
                          animation: 'profile3d 3.2s cubic-bezier(.4,2,.6,1) infinite',
                        }}
                    >
                      <img 
                        src="https://i.postimg.cc/yNp5JD61/Any-Conv-com-Pedro-Soeiro-2.webp" 
                        alt="Pedro Soeiro" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '16px',
                          boxShadow: '0 0 0 2.5px #e5c07b, 0 0 20px 4px #bfa14a44',
                          filter: 'brightness(1.09) saturate(1.12)',
                          transition: 'box-shadow 0.3s, filter 0.3s',
                        }}
                      />
                      {/* Efeito de brilho dourado animado refinado */}
                      <div style={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        borderRadius: '16px',
                        zIndex: 2,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0, left: 0, right: 0, bottom: 0,
                          borderRadius: '16px',
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.0) 38%, rgba(255,230,120,0.28) 50%, rgba(255,255,255,0.0) 62%)',
                          filter: 'blur(1.1px)',
                          /* animation removida para evitar pisca ao trocar idioma */
                        }} />
                      </div>
                      {/* Luz lateral simulando relevo */}
                      <div style={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        borderRadius: '16px',
                        zIndex: 2,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0, left: 0, right: 0, bottom: 0,
                          borderRadius: '16px',
                          background: 'linear-gradient(105deg, rgba(255,255,255,0.0) 60%, rgba(255,255,255,0.13) 70%, rgba(255,255,255,0.0) 80%)',
                          filter: 'blur(2.2px)',
                        }} />
                      </div>
                      {/* Sombra "chão" para efeito de elevação */}
                      <div style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '-18px',
                        width: '60%',
                        height: '28px',
                        background: 'radial-gradient(ellipse at center, #bfa14a55 0%, #fff0 80%)',
                        filter: 'blur(2.5px)',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                      }} />
                    </div>
                    <style>{`
                      @keyframes profile3d {
                        0% {
                          transform: rotateY(-13deg) rotateX(7deg) scale(1.01) translateY(0);
                        }
                        20% {
                          transform: rotateY(-18deg) rotateX(10deg) scale(1.03) translateY(-8px);
                        }
                        50% {
                          transform: rotateY(-8deg) rotateX(0deg) scale(1.04) translateY(-14px);
                        }
                        80% {
                          transform: rotateY(-18deg) rotateX(10deg) scale(1.03) translateY(-8px);
                        }
                        100% {
                          transform: rotateY(-13deg) rotateX(7deg) scale(1.01) translateY(0);
                        }
                      }
                      @keyframes shinePremium {
                        0% { opacity: 0; transform: translateX(-80%) skewX(-18deg); }
                        40% { opacity: 1; }
                        60% { opacity: 1; }
                        100% { opacity: 0; transform: translateX(120%) skewX(-18deg); }
                      }
                    `}</style>
                  </div>
                </div>
              </header>

              <section className="skills-section">
                <h2>{t[lang].about.skills}</h2>
                <div className="skills-list premium-skills-list">
      <style>{`
        .premium-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 24px 32px;
        }
        .premium-skills-list .skill-item {
          background: rgba(20,20,20,0.72);
          border-radius: 16px;
          box-shadow: 0 2px 16px #bfa14a22, 0 0 0 1.5px #bfa14a33 inset;
          padding: 12px 28px 12px 18px;
          font-weight: 600;
          color: #fffbe6;
          font-size: 1.13rem;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          cursor: pointer;
          transition: box-shadow 0.3s, background 0.3s, transform 0.3s;
          /* animation removida para evitar pisca ao trocar idioma */
        }
        .premium-skills-list .skill-item:hover {
          box-shadow: 0 4px 32px #bfa14a77, 0 0 0 2.5px #e5c07b, 0 1.5px 12px 2px #0005;
          background: linear-gradient(90deg, #bfa14a33 0%, #181818 100%);
          transform: translateY(-4px) scale(1.045);
        }
        .premium-skills-list .skill-item::after {
          content: '';
          display: block;
          position: absolute;
          left: 0; top: 0; right: 0; bottom: 0;
          border-radius: 16px;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255,230,120,0.13) 0%, rgba(255,255,255,0.09) 60%, rgba(255,230,120,0.13) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .premium-skills-list .skill-item:hover::after {
          opacity: 1;
          animation: shineSkill 1.2s linear;
        }
        @keyframes shineSkill {
          0% { opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes fadeUpSkill {
          0% { opacity: 0; transform: translateY(32px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.5 114.1L8.1 0h111.8l-11.4 114.1L63.9 128"/><path fill="#F16529" d="M64 117.2l36.7-10.2 9.8-98.1H64"/><path fill="#EBEBEB" d="M64 52.6H45.6l-1.2-13.2H64V26.6H30.7l.3 3.5 3.1 32.7H64zm0 33.6l-.1.1-15.3-4.1-.9-10.2H36.6l1.7 19.1 25.6 7.1.1-.1z"/><path fill="#FFF" d="M63.9 52.6v12.8h16.2l-1.5 16.7-14.7 4.1v13.1l25.6-7.1.2-2.1 2.9-32.7.3-3.5H63.9zm0-26v12.8h17.2l1.2-13.2H63.9z"/></svg></span>HTML</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#41B883" d="M6.5 20.5h22.7l34.8 60.3 34.8-60.3h22.7L64 107.5z"/><path fill="#34495E" d="M6.5 20.5h22.7l34.8 60.3 34.8-60.3h22.7L64 107.5z" opacity=".2"/><path fill="#41B883" d="M6.5 20.5h22.7l34.8 60.3 34.8-60.3h22.7L64 107.5z"/><path fill="#34495E" d="M27.7 20.5h20.7L64 60.7l15.6-40.2h20.7L64 81.5z"/></g></svg></span>Vue.js</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.5 114.1L8.1 0h111.8l-11.4 114.1L63.9 128"/><path fill="#33A9DC" d="M64 117.2l36.7-10.2 9.8-98.1H64"/><path fill="#fff" d="M64 52.6H45.6l-1.2-13.2H64V26.6H30.7l.3 3.5 3.1 32.7H64zm0 33.6l-.1.1-15.3-4.1-.9-10.2H36.6l1.7 19.1 25.6 7.1.1-.1z"/><path fill="#EBEBEB" d="M63.9 52.6v12.8h16.2l-1.5 16.7-14.7 4.1v13.1l25.6-7.1.2-2.1 2.9-32.7.3-3.5H63.9zm0-26v12.8h17.2l1.2-13.2H63.9z"/></svg></span>CSS</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path d="M89.464 99.432c2.047 3.34 4.71 5.803 9.42 5.803 3.957 0 6.49-1.98 6.49-4.71 0-3.273-2.595-4.437-6.97-6.35l-2.39-1.02c-6.91-2.94-11.51-6.63-11.51-14.41 0-7.18 5.47-12.65 14.02-12.65 6.08 0 10.46 2.12 13.59 7.67l-7.43 4.77c-1.64-2.94-3.41-4.09-6.16-4.09-2.8 0-4.58 1.78-4.58 4.09 0 2.86 1.78 4.03 5.89 5.8l2.39 1.02c8.13 3.48 12.73 7.02 12.73 14.99 0 8.58-6.74 13.28-15.81 13.28-8.86 0-14.59-4.23-17.37-9.77zm-35.36.8c1.5 2.66 2.87 4.91 6.16 4.91 3.15 0 5.13-1.23 5.13-6.01V70.5h9.56v27.01c0 9.92-5.82 14.42-14.32 14.42-7.68 0-12.15-3.98-14.44-8.82z"/></svg></span>JavaScript</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/D08xsZ5f/icons8-typescript-48.png" alt="TypeScript" width="28" height="28" style={{display:'block'}} /></span>TypeScript</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><g><path fill="#3776AB" d="M63.9 1.6c-4.2.02-8.3.38-12.3 1.06-10.9 1.84-12.9 5.7-12.9 12.8v9.4h25.8v3.1H28.7c-7.2 0-13.5 4.32-15.5 12.5-2.3 9.1-2.4 14.8 0 24.2 1.8 7.2 5.9 12.5 13.1 12.5h8.5v-11.3c0-8.2 7.1-15.3 15.3-15.3h25.7c7.1 0 12.9-5.8 12.9-12.9v-24c0-7.1-5.8-11.7-12.9-12.8-4.2-.68-8.5-1.04-12.7-1.06z"/><path fill="#FFD43B" d="M101.6 28.9v10.7c0 8.5-7.2 15.7-15.7 15.7H60.2c-7.1 0-12.9 5.8-12.9 12.9v24c0 7.1 5.8 11.7 12.9 12.8 8.2 1.3 16.2 1.3 24.4 0 10.9-1.84 12.9-5.7 12.9-12.8v-9.4H72.7v-3.1h25.8c7.2 0 13.5-4.32 15.5-12.5 2.3-9.1 2.4-14.8 0-24.2-1.8-7.2-5.9-12.5-13.1-12.5h-8.5z"/></g></svg></span>Python</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/wxZC28N4/icons8-n-js-48.png" alt="Node.js" width="28" height="28" style={{display:'block'}} /></span>Node.js</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>Supabase</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><g><path fill="#00599C" d="M64 0l55.2 32v64L64 128 8.8 96V32z"/><path fill="#fff" d="M64 8.6l48.1 27.9v55.9L64 119.4 15.9 92.4V36.5z"/><path fill="#00599C" d="M64 17.2l41.1 23.9v46.7L64 110.8 22.9 87.8V41.1z"/><path fill="#fff" d="M64 25.8l34.1 19.8v37.5L64 102.2 29.9 83.1V45.6z"/><path fill="#00599C" d="M64 34.4l27.1 15.7v28.3L64 93.6 36.9 78.4V50.1z"/></g></svg></span>C++</div>
                  <div className="skill-item"><span className="skill-icon"><svg width="28" height="28" viewBox="0 0 128 128"><g><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="6" fill="none"><ellipse rx="56" ry="24" cx="64" cy="64"/><ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(120 64 64)"/></g></g></svg></span>React</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/TPK1zvkL/icons8-tailwind-css-48.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>Tailwind CSS</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/BvbPJKvv/icons8-mongodb-48.png" alt="MongoDB" width="28" height="28" style={{display:'block'}} /></span>MongoDB</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/qq3MFBqj/icons8-linux-48.png" alt="Linux" width="28" height="28" style={{display:'block'}} /></span>Linux</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/rsGFcVXj/icons8-intelig-ncia-64.png" alt="IA" width="28" height="28" style={{display:'block', filter:'brightness(0) invert(1)'}} /></span>IA</div>
                  <div className="skill-item"><span className="skill-icon"><img src="https://i.postimg.cc/SKYL0fhm/icons8-github-50.png" alt="GitHub" width="28" height="28" style={{display:'block'}} /></span>GitHub</div>
                </div>
              </section>
            </>
          )}
          {activeCategory === 'Skills' && (
            {/* Guia Skills removida */}
          )}

          {(activeCategory === t[lang].categories[1]) && (
            <section className="jobs-section">
              <h2>{t[lang].jobs}</h2>
              <div className="jobs-list">
                {t[lang].jobsList.map((job, idx) => (
                  <article className={`job-card${idx === 0 || idx === 2 ? ' freelancer-card' : ''}`} key={job.company} style={idx === 2 ? {gridColumn: '1 / span 2'} : {}}>
                    <header className="job-header">
                      <div>
                        <h3 className="job-company">{job.company}</h3>
                        {idx === 1 && lang === 'PT-BR' && <div className="job-title" style={{fontWeight:'bold'}}>Secretário</div>}
                        {idx === 1 && lang === 'EN' && <div className="job-title">Secretary</div>}
                      </div>
                      <div className="job-dates">{job.date}</div>
                    </header>
                    <ul className="job-list">
                      {job.items.map((item, i) => <li key={item + '-' + i}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )}

          {(activeCategory === t[lang].categories[2]) && (
      <section className="projects-section">
        <div className="jobs-list">
          {/* Snake Game Card */}
          <article className="job-card freelancer-card">
            <header className="job-header">
              <div>
                <h3 className="job-company">{t[lang].projectsList[0].company}</h3>
                <div className="job-title" style={{display:'flex',flexWrap:'wrap',gap:'12px',margin:'6px 0'}}>
                  {t[lang].projectsList[0].tech.split(',').map((tech, idx) => {
                    const techNorm = tech.trim().toLowerCase().replace(/\s/g, '');
                    const icons = {
                      html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      javascript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      tailwind: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      tailwindcss: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabase: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabasedb: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      '3d': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="3D" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />
                    };
                    return (
                      <span key={idx} style={{display:'flex',alignItems:'center'}}>
                        {icons[techNorm] || null}
                      </span>
                    );
                  })}
                </div>
              </div>
            </header>
            <ul className="job-list">
              <li>{t[lang].projectsList[0].desc}</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>1 <span style={{ fontSize: '0.95rem', fontWeight: 'normal' }}>(Snake Game)</span></span>
              <a href="https://snaakegamee.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </article>

          {/* Websites Card */}
          <article className="job-card">
            <header className="job-header">
              <div>
                <h3 className="job-company">{t[lang].projectsList[1].company}</h3>
                <div className="job-title" style={{display:'flex',flexWrap:'wrap',gap:'12px',margin:'6px 0'}}>
                  {t[lang].projectsList[1].tech.split(',').map((tech, idx) => {
                    const techNorm = tech.trim().toLowerCase().replace(/\s/g, '');
                    const icons = {
                      html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      javascript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      tailwind: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      tailwindcss: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabase: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabasedb: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      '3d': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="3D" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />
                    };
                    return (
                      <span key={idx} style={{display:'flex',alignItems:'center'}}>
                        {icons[techNorm] || null}
                      </span>
                    );
                  })}
                </div>
              </div>
            </header>
            <ul className="job-list">
              <li>{t[lang].projectsList[1].desc}</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>1</span>
              <a href="https://barbeariareall.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </article>

          {/* Landing Pages Card */}
          <article className="job-card">
            <header className="job-header">
              <div>
                <h3 className="job-company">{t[lang].projectsList[2].company}</h3>
                <div className="job-title" style={{display:'flex',flexWrap:'wrap',gap:'12px',margin:'6px 0'}}>
                  {t[lang].projectsList[2].tech.split(',').map((tech, idx) => {
                    const techNorm = tech.trim().toLowerCase().replace(/\s/g, '');
                    const icons = {
                      html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      javascript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      tailwind: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      tailwindcss: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabase: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabasedb: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      '3d': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="3D" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />
                    };
                    return (
                      <span key={idx} style={{display:'flex',alignItems:'center'}}>
                        {icons[techNorm] || null}
                      </span>
                    );
                  })}
                </div>
              </div>
            </header>
            <ul className="job-list">
              <li>{t[lang].projectsList[2].desc}</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
              {/* Botão 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>1</span>
                <a href="https://automizepro.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              {/* Botão 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>2</span>
                <a href="https://erikanutricionista.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              {/* Botão 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>3</span>
                <a href="https://nutrizenn.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              {/* Botão 4 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>4</span>
                <a href="https://kassianovaess.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </article>

          {/* MicroSaaS Card */}
          <article className="job-card">
            <header className="job-header">
              <div>
                <h3 className="job-company">{t[lang].projectsList[3].company}</h3>
                <div className="job-title" style={{display:'flex',flexWrap:'wrap',gap:'12px',margin:'6px 0'}}>
                  {t[lang].projectsList[3].tech.split(',').map((tech, idx) => {
                    const techNorm = tech.trim().toLowerCase().replace(/\s/g, '');
                    const icons = {
                      html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      javascript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />, 
                      tailwind: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      tailwindcss: <span className="skill-icon"><img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabase: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      supabasedb: <span className="skill-icon"><img src="https://i.postimg.cc/hjbBwCqQ/icons8-supabase-48.png" alt="Supabase" width="28" height="28" style={{display:'block'}} /></span>, 
                      '3d': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="3D" style={{height:'28px',objectFit:'contain',background:'none',border:'none',padding:0}} />
                    };
                    return (
                      <span key={idx} style={{display:'flex',alignItems:'center'}}>
                        {icons[techNorm] || null}
                      </span>
                    );
                  })}
                </div>
              </div>
            </header>
            <ul className="job-list">
              <li>{t[lang].projectsList[3].desc}</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
              {/* Botão 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>1</span>
                <a href="https://autosaudeproo.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              {/* Botão 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>2</span>
                <a href="https://liistadetarefass.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="landing-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#e5c07b"/>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
          )}

          {(activeCategory === t[lang].categories[3]) && (
            <section className="jobs-section">
              <h2>{t[lang].educations}</h2>
              <div className="jobs-list">
                {t[lang].educationsList.map((edu) => (
                  <article className="job-card" key={edu.company}>
                    <header className="job-header">
                      <div>
                        <h3 className="job-company">{edu.company}</h3>
                        <div className="job-title">{edu.tech}</div>
                      </div>
                    </header>
                    <ul className="job-list">
                      {edu.items.map((item, i) => <li key={item + '-' + i}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}


export default App;

// --- Yu-Gi-Oh! Card Component ---
function YuGiOhCardWithLanyard() {
  const cardRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragY, setDragY] = React.useState(0);
  const [isBouncing, setIsBouncing] = React.useState(false);
  const startY = React.useRef(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsBouncing(false);
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
    document.body.style.userSelect = 'none';
  };
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const delta = Math.max(0, y - startY.current);
    setDragY(Math.min(delta, 80));
  };
  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
      setDragY(0);
    }, 600);
    document.body.style.userSelect = '';
  };
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('touchmove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging]);

  return (
  <div style={{ width: '60mm', height: '98mm', maxWidth: '100%', maxHeight: '90vh', margin: '0 0 0 auto', position: 'relative', userSelect: 'none', fontFamily: 'Times New Roman, serif', background: '#BEA137', borderRadius: 10, boxShadow: '0 0 0 4px #0e1832, 0 4px 16px #000c', aspectRatio: '60/98' }}>
      {/* Lanyard SVG */}
      <svg className="ygo-lanyard" width="60" height="90" viewBox="0 0 60 90" style={{ position: 'absolute', left: '50%', top: -70, transform: 'translateX(-50%)', zIndex: 2 }}>
        <rect x="25" y="0" width="10" height="60" rx="5" fill="#b71c1c" />
        <rect x="25" y="0" width="10" height="20" rx="5" fill="#d32f2f" />
        <ellipse cx="30" cy="60" rx="8" ry="6" fill="#bbb" />
      </svg>
      {/* Outer blue border and shadow */}
      <div
        ref={cardRef}
        style={{
          background: '#BEA137',
          borderRadius: 7,
          boxShadow: '0 0 0 4px #0e1832, 0 4px 16px #000c',
          padding: 0,
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          margin: '0',
          position: 'relative',
          aspectRatio: '60/98',
          transform: `translateY(${dragY}px)`
        }}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* Gold frame with local texture and shadow */}
        <div style={{
          background: `url('./src/ygo-frame-texture.png'), linear-gradient(180deg, #fbe7a2 0%, #e2c16a 100%)`,
          backgroundBlendMode: 'multiply',
          borderRadius: 4,
          border: '2.5px solid #e0b146',
          boxShadow: '0 2px 7px #0007, 0 0 0 1px #fff6 inset',
          padding: 0,
          minHeight: 290,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          {/* Title Bar with shadow */}
          <div style={{
            background: 'linear-gradient(180deg, #fbe7a2 80%, #e2c16a 100%)',
            borderRadius: '4px 4px 0 0',
            borderBottom: '2px solid #bfa14a',
            minHeight: 32,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 0 0 14px',
            height: 38,
            boxShadow: '0 2px 6px #0003',
          }}>
            <span style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: '1.32rem',
              fontWeight: 700,
              color: '#1a1100',
              letterSpacing: '0.5px',
              textShadow: '0 1.5px 0 #fff8, 0 1.5px 2px #0002',
              flex: 1,
              textAlign: 'left',
              marginTop: 1,
              lineHeight: 1.1,
            }}>PEDRO SOEIRO</span>
            {/* Attribute orb with TREVAS and kanji, idêntico ao card */}
            <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'relative', display: 'inline-block', width: 30, height: 30 }}>
                <svg width="30" height="30" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="15" fill="#a13c7b" stroke="#fff" strokeWidth="1.2" />
                  <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontFamily="serif" fill="#fff" fontWeight="bold" style={{filter:'drop-shadow(0 0 1.5px #000)'}}>闇</text>
                </svg>
                {/* TREVAS label */}
                <span style={{ position: 'absolute', top: 1, left: '50%', transform: 'translateX(-50%)', fontSize: '0.62rem', color: '#fff', fontWeight: 700, letterSpacing: '1.1px', fontFamily: 'Georgia, Times New Roman, serif', textShadow: '0 1px 2px #a13c7b', background: 'rgba(161,60,123,0.95)', borderRadius: 6, padding: '0 3px' }}>TREVAS</span>
              </span>
            </span>
          </div>
          {/* Stars Row - centralizadas, grandes */}
          <div style={{ display: 'flex', gap: '4.5px', margin: '7px 0 6px 0', justifyContent: 'center', alignItems: 'center', height: 20 }}>
            {[...Array(7)].map((_,i)=>(
              <span key={i} style={{ color: '#f7b500', fontSize: 18, textShadow: '0 1px 2px #b24a00' }}>★</span>
            ))}
          </div>
          {/* Image Frame - borda cinza/prateada, sombra, proporção idêntica */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 0 0 0' }}>
            <div style={{
              background: '#181818',
              border: '2.5px solid #bfc6d1',
              borderRadius: 4,
              width: '90%',
              maxWidth: 210,
              aspectRatio: '1.05/1',
              minHeight: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: '0 auto',
              marginTop: 2,
              marginBottom: 2,
              boxShadow: '0 2px 8px #000a',
            }}>
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Pedro" alt="Cartoon Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'none' }} />
            </div>
          </div>
          {/* Edition and Code Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#1a1100', margin: '2px 10px 0 10px', fontFamily: 'Times New Roman, serif', letterSpacing: '0.4px' }}>
            <span>1ª Edição</span>
            <span>YM01-PT005</span>
          </div>
          {/* Description Box - borda dupla vermelha */}
          <div style={{
            background: '#f9f6e3',
            border: '1.5px solid #bfa14a',
            borderRadius: 3,
            fontFamily: 'Times New Roman, serif',
            fontSize: '0.89rem',
            color: '#2d1c00',
            margin: '6px 5px 0 5px',
            padding: '6px 7px 6px 7px',
            minHeight: 32,
            boxShadow: '0 1px 2px #0001',
            borderBottom: '4px double #a00',
            borderTop: '1.5px solid #bfa14a',
            borderLeft: '1.5px solid #bfa14a',
            borderRight: '1.5px solid #bfa14a',
            letterSpacing: '0.08px',
          }}>
            <span style={{ fontWeight: 700, fontFamily: 'Times New Roman, serif', fontSize: '0.89rem', letterSpacing: 0 }}>[Full Stack Developer]</span><br/>
            <span style={{ fontStyle: 'italic', fontSize: '0.81rem', color: '#222', fontFamily: 'Times New Roman, serif' }}>Focado em criar aplicações funcionais, seguras e escaláveis, unindo conhecimento técnico e criatividade para gerar soluções de alto impacto.</span>
          </div>
          {/* ATK/DEF Bar - fonte, cor e espaçamento idênticos */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', fontFamily: 'Times New Roman, serif', fontSize: '0.98rem', color: '#2d1c00', margin: '3px 10px 6px 0', letterSpacing: '0.7px', fontWeight: 600 }}>
            <span>ATK/2500</span>
            <span style={{ marginLeft: '2em' }}>DEF/2100</span>
          </div>
          {/* Copyright Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#222', margin: '0 6px 0 6px', fontFamily: 'Times New Roman, serif', letterSpacing: '0.13px' }}>
            <span>46986414</span>
            <span>©1998 Pedro Soeiro</span>
          </div>
          {/* Watermark corner (pixel-perfect) */}
          <div style={{ position: 'absolute', right: 4, bottom: 3, opacity: 0.98 }}>
            <img src="https://i.imgur.com/9nA9YUG.png" alt="Yu-Gi-Oh! logo" style={{ width: 24, height: 14, opacity: 0.98, filter: 'drop-shadow(0 0 2px #fff)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
