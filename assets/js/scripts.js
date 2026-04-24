// ==========================================
// 1. DICIONÁRIO E ESTADO GLOBAL
// ==========================================
const dicionario = {
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_projects: "Projetos", nav_contact: "Contatos",
        hero_greet: "Bem-vindo! Eu sou o Marcus", hero_title: "Desenvolvedor Full Stack", hero_desc: "Desenvolvendo sistemas completos e focados na melhor experiência para o usuário.",
        btn_contact: "Entre em contato", btn_more: "Saiba mais...",
        projects_title: "Meus Projetos", contact_title: "Entre em contato", contact_desc: "Sinta-se à vontade para entrar em contato comigo!",
        form_name: "Nome", form_ph_name: "Digite o seu nome completo",
        form_email: "E-mail", form_ph_email: "Digite o seu e-mail",
        form_subject: "Assunto", form_ph_subject: "Digite o assunto da mensagem",
        form_message: "Mensagem", form_ph_message: "Digite a sua mensagem",
        btn_send: "Enviar Mensagem", btn_sending: "Enviando...",
        footer_text: "Desenvolvido por Marcus Wendell - 2026",
        about_title: "Sobre mim",
        about_p1: "Olá! Sou o Marcus Wendell, estudante de Sistemas de Computação na UFF e Desenvolvedor Full Stack em formação pela Generation Brazil. Durante minha trajetória acadêmica, construí uma base sólida em lógica de programação e resolução de problemas utilizando Python.",
        about_p2: "Atualmente, me dedico a criar aplicações escaláveis utilizando o ecossistema JavaScript (TypeScript, Node.js, NestJS e React). Sou apaixonado por resolver problemas reais de forma otimizada e busco minha primeira oportunidade profissional, focado em agregar valor através da tecnologia e do aprendizado contínuo.",
        lbl_followers: "Seguidores", lbl_repos: "Repositórios",
        btn_resume: "Currículo", link_resume: "./assets/docs/curriculo_marcus.pdf",
        desc_repo_default: "Projeto desenvolvido no GitHub", btn_deploy: "Deploy",
        err_name: "O nome deve ter no mínimo 3 caracteres", err_email: "Digite um endereço de e-mail válido",
        err_subject: "O assunto deve ter no mínimo 5 caracteres", err_empty: "A mensagem não pode ser vazia"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
        hero_greet: "Welcome! I am Marcus", hero_title: "Full Stack Developer", hero_desc: "Developing complete systems focused on the best user experience.",
        btn_contact: "Get in touch", btn_more: "Learn more...",
        projects_title: "My Projects", contact_title: "Get in touch", contact_desc: "Feel free to reach out to me!",
        form_name: "Name", form_ph_name: "Enter your full name",
        form_email: "E-mail", form_ph_email: "Enter your e-mail",
        form_subject: "Subject", form_ph_subject: "Enter the message subject",
        form_message: "Message", form_ph_message: "Enter your message",
        btn_send: "Send Message", btn_sending: "Sending...",
        footer_text: "Developed by Marcus Wendell - 2026",
        about_title: "About me",
        about_p1: "Hello! I'm Marcus Wendell, a Computer Systems student at UFF and an aspiring Full Stack Developer training at Generation Brazil. During my academic journey, I built a solid foundation in programming logic and problem-solving using Python.",
        about_p2: "Currently, I am dedicated to creating scalable applications using the JavaScript ecosystem (TypeScript, Node.js, NestJS, and React). I am passionate about solving real problems in an optimized way and am looking for my first professional opportunity, focused on adding value through technology and continuous learning.",
        lbl_followers: "Followers", lbl_repos: "Repositories",
        btn_resume: "Resume", link_resume: "./assets/docs/curriculo_marcus_en.pdf",
        desc_repo_default: "Project developed on GitHub", btn_deploy: "Live Demo",
        err_name: "Name must be at least 3 characters long", err_email: "Enter a valid e-mail address",
        err_subject: "Subject must be at least 5 characters long", err_empty: "Message cannot be empty"
    }
};

let idiomaAtual = localStorage.getItem('lang') || 'pt';
let temaEscuro = localStorage.getItem('theme') === 'dark';
let cachePerfil = null;
let cacheRepos = null;

// ==========================================
// 2. LÓGICA DE TEMA E IDIOMA
// ==========================================
const btnTheme = document.getElementById('btn-theme');
const btnLang = document.getElementById('btn-lang');

function inicializarPreferencias() {
    if (temaEscuro) {
        document.body.classList.add('dark-mode');
        btnTheme.textContent = '☀️';
    }
    btnLang.textContent = idiomaAtual === 'pt' ? 'EN' : 'PT';
    traduzirPagina();
}

btnTheme.addEventListener('click', () => {
    temaEscuro = !temaEscuro;
    document.body.classList.toggle('dark-mode');
    btnTheme.textContent = temaEscuro ? '☀️' : '🌙';
    localStorage.setItem('theme', temaEscuro ? 'dark' : 'light');
});

btnLang.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    btnLang.textContent = idiomaAtual === 'pt' ? 'EN' : 'PT';
    localStorage.setItem('lang', idiomaAtual);
    traduzirPagina();
});

function traduzirPagina() {
    // Traduz textos estáticos
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        if (dicionario[idiomaAtual][chave]) elemento.textContent = dicionario[idiomaAtual][chave];
    });
    // Traduz placeholders de input/textarea
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n-placeholder');
        if (dicionario[idiomaAtual][chave]) elemento.placeholder = dicionario[idiomaAtual][chave];
    });
    
    // Re-renderiza dinâmicos
    if (cachePerfil) renderizarAbout(cachePerfil);
    if (cacheRepos) renderizarProjetos(cacheRepos);
}

// ==========================================
// 3. REQUISIÇÕES E RENDERIZAÇÃO
// ==========================================
const about = document.querySelector('#about');
const swiperWrapper = document.querySelector('.swiper-wrapper');

async function carregarDadosGitHub() {
    try {
        const [resPerfil, resRepos] = await Promise.all([
            fetch('https://api.github.com/users/mwendellsmce'),
            fetch('https://api.github.com/users/mwendellsmce/repos?sort=pushed&per_page=6')
        ]);
        cachePerfil = await resPerfil.json();
        cacheRepos = await resRepos.json();

        renderizarAbout(cachePerfil);
        renderizarProjetos(cacheRepos);
    } catch (error) {
        console.error('Erro ao buscar dados no GitHub', error);
    }
}

function renderizarAbout(perfil) {
    const t = dicionario[idiomaAtual];
    about.innerHTML = `
      <figure class="about-image">
        <img src="${perfil.avatar_url}" alt="${perfil.name}">
      </figure>
      <article class="about-content">
        <h2>${t.about_title}</h2>
        <p>${t.about_p1}</p>
        <p>${t.about_p2}</p>
        <div class="about-buttons-data">
          <div class="buttons-container">
            <a href="${perfil.html_url}" target="_blank" class="botao">GitHub</a>
            <a href="${t.link_resume}" target="_blank" class="botao-outline">${t.btn_resume}</a>
          </div>
          <div class="data-container">
            <div class="data-item">
              <span class="data-number">${perfil.followers}</span>
              <span class="data-label">${t.lbl_followers}</span>
            </div>
            <div class="data-item">
              <span class="data-number">${perfil.public_repos}</span>
              <span class="data-label">${t.lbl_repos}</span>
            </div>
          </div>
        </div>
      </article>
    `;
}

function renderizarProjetos(repositorios) {
    const t = dicionario[idiomaAtual];
    swiperWrapper.innerHTML = '';

    const linguagens = {
        'JavaScript': 'javascript', 'TypeScript': 'typescript', 'Python': 'python',
        'Java': 'java', 'HTML': 'html', 'CSS': 'css', 'PHP': 'php', 'C#': 'csharp',
        'Go': 'go', 'Kotlin': 'kotlin', 'Swift': 'swift', 'C': 'c', 'C++': 'c_plus', 'GitHub': 'github',
    };

    repositorios.forEach((repositorio) => {
        const linguagem = repositorio.language || 'GitHub';
        const icone = linguagens[linguagem] ?? linguagens['GitHub'];
        const urlIcone = `./assets/icons/languages/${icone}.svg`;
        const nomeFormatado = repositorio.name.replace(/[-_]/g, ' ').replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+t[a-z0-9]+$/i, '').toUpperCase();
        const truncar = (texto, limite) => texto.length > limite ? texto.substring(0, limite) + '...' : texto;
        const descricao = repositorio.description ? truncar(repositorio.description, 100) : t.desc_repo_default;
        
        const tags = repositorio.topics?.length > 0
            ? repositorio.topics.slice(0, 3).map(topic => `<span class="tag">${topic}</span>`).join('')
            : `<span class="tag">${linguagem}</span>`;

        const botaoDeploy = repositorio.homepage
            ? `<a href="${repositorio.homepage}" target="_blank" class="botao-outline botao-sm">${t.btn_deploy}</a>` : '';

        swiperWrapper.innerHTML += `
          <div class="swiper-slide">
            <article class="project-card">
              <figure class="project-image">
                <img src="${urlIcone}" alt="Ícone ${linguagem}">
              </figure>
              <div class="project-content">
                <h3>${nomeFormatado}</h3>
                <p>${descricao}</p>
                <div class="project-tags">${tags}</div>
                <div class="project-buttons">
                  <a href="${repositorio.html_url}" target="_blank" class="botao botao-sm">GitHub</a>
                  ${botaoDeploy}
                </div>
              </div>
            </article>
          </div>
        `;
    });
    iniciarSwiper();
}

function iniciarSwiper() {
    new Swiper('.projects-swiper', {
        slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 24, centeredSlides: false, loop: true, watchOverflow: true,
        breakpoints: {
            0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 40 },
            769: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 40 },
            1025: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 54 },
        },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
        autoplay: { delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false },
        grabCursor: true
    });
}

// ==========================================
// 4. FORMULÁRIO E VALIDAÇÕES
// ==========================================
const formulario = document.querySelector('#formulario');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const t = dicionario[idiomaAtual];

    document.querySelectorAll('form span').forEach((span) => (span.innerHTML = ''));
    let isValid = true;

    const nome = document.querySelector('#nome');
    const erroNome = document.querySelector('#erro-nome');
    if (nome.value.trim().length < 3) {
        erroNome.innerHTML = t.err_name;
        if (isValid) nome.focus();
        isValid = false;
    }

    const email = document.querySelector('#email');
    const erroEmail = document.querySelector('#erro-email');
    if (!email.value.trim().match(emailRegex)) {
        erroEmail.innerHTML = t.err_email;
        if (isValid) email.focus();
        isValid = false;
    }

    const assunto = document.querySelector('#assunto');
    const erroAssunto = document.querySelector('#erro-assunto');
    if (assunto.value.trim().length < 5) {
        erroAssunto.innerHTML = t.err_subject;
        if (isValid) assunto.focus();
        isValid = false;
    }

    const mensagem = document.querySelector('#mensagem');
    const erroMensagem = document.querySelector('#erro-mensagem');
    if (mensagem.value.trim().length === 0) {
        erroMensagem.innerHTML = t.err_empty;
        if (isValid) mensagem.focus();
        isValid = false;
    }

    if (isValid) {
        const submitButton = formulario.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = t.btn_sending;
        formulario.submit();
    }
});

// Inicializa a aplicação
inicializarPreferencias();
carregarDadosGitHub();