<h1>Documentação do HTML - Projeto Portfólio</h1>



### 🧱 **Estrutura e Documento**

| **Tag**           | **Função / Descrição**                                      | **Atributos Comuns**                      | **Exemplo de Uso**                                           |
| ----------------- | ----------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `<!DOCTYPE html>` | Define o tipo de documento HTML5.                           | —                                         | `<!DOCTYPE html>`                                            |
| `<html>`          | Elemento raiz do documento HTML.                            | `lang`, `dir`.                            | `<html lang="pt-br">`                                        |
| `<head>`          | Contém metadados, links, scripts e título.                  | —                                         | `<head> ... </head>`                                         |
| `<meta>`          | Fornece metadados (charset, descrição, autor, etc.).        | `charset`, `name`, `content`, `viewport`. | `<meta name="description" content="Portfólio de Rafael Queiróz">` |
| `<title>`         | Define o título da página exibido no navegador.             | —                                         | `<title>Portfólio do Rafael</title>`                         |
| `<link>`          | Liga o documento a recursos externos (CSS, ícones, fontes). | `rel`, `href`, `type`, `crossorigin`.     | `<link rel="stylesheet" href="./assets/css/styles.css">`     |
| `<script>`        | Vincula ou contém código JavaScript.                        | `src`, `defer`, `type`.                   | `<script src="./assets/js/scripts.js"></script>`             |

<br />

### 🎨 **Estrutura Visual (Layout da Página)**

| **Tag**     | **Função / Descrição**                                | **Atributos Comuns** | **Exemplo de Uso**                                        |
| ----------- | ----------------------------------------------------- | -------------------- | --------------------------------------------------------- |
| `<body>`    | Contém todo o conteúdo visível da página.             | `class`, `id`.       | `<body> ... </body>`                                      |
| `<header>`  | Cabeçalho da página (logo, menu, navegação).          | `class`, `id`.       | `<header class="menu_container">...</header>`             |
| `<main>`    | Seção principal do conteúdo da página.                | —                    | `<main>...</main>`                                        |
| `<section>` | Agrupa blocos de conteúdo relacionados.               | `id`, `class`.       | `<section id="hero" class="hero_container">...</section>` |
| `<article>` | Bloco de conteúdo independente (texto, imagem, etc.). | `class`, `id`.       | `<article class="hero_content">...</article>`             |
| `<nav>`     | Define uma área de navegação com links.               | —                    | `<nav>...</nav>`                                          |
| `<footer>`  | Rodapé da página.                                     | —                    | `<footer>Feito com ❤️ por Rafael</footer>`                 |
| `<div>`     | Estruturação e agrupamento de layout                  | `class`, `id`.       | `<div class="buttons-container">...</div>`                |

<br />

### 🧭 **Navegação e Listas**

| **Tag** | **Função / Descrição**                   | **Atributos Comuns**              | **Exemplo de Uso**                             |
| ------- | ---------------------------------------- | --------------------------------- | ---------------------------------------------- |
| `<ul>`  | Lista não ordenada (sem numeração).      | `class`, `id`.                    | `<ul class="menu_list">...</ul>`               |
| `<li>`  | Item de lista.                           | —                                 | `<li><a href="#hero">Início</a></li>`          |
| `<a>`   | Cria hiperlinks entre páginas ou seções. | `href`, `target`, `rel`, `title`. | `<a href="#contact" class="botao">Contato</a>` |

<br />

### 🧍‍♂️ **Conteúdo e Texto**

| **Tag**         | **Função / Descrição**             | **Atributos Comuns**    | **Exemplo de Uso**                      |
| --------------- | ---------------------------------- | ----------------------- | --------------------------------------- |
| `<h1>` – `<h4>` | Títulos e subtítulos hierárquicos. | `id`, `class`.          | `<h1>Desenvolvedor Full Stack</h1>`     |
| `<p>`           | Parágrafo de texto.                | `id`, `class`.          | `<p>Transformo ideias em código.</p>`   |
| `<span>`        | Trecho de texto em linha (inline). | `id`, `class`, `style`. | `<span id="txtEmail"></span>`           |
| `<br>`          | Quebra de linha.                   | —                       | `Obrigado! <br /> Retornarei em breve.` |

<br />

### 🧾 **Mídia e Elementos Gráficos**

| **Tag**    | **Função / Descrição**     | **Atributos Comuns**                      | **Exemplo de Uso**                                           |
| ---------- | -------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `<img>`    | Exibe uma imagem.          | `src`, `alt`, `width`, `height`, `class`. | `<img src="./assets/img/eu.png" alt="Ilustração de desenvolvedor">` |
| `<figure>` | Agrupa imagens e legendas. | `class`, `id`.                            | `<figure class="hero_image">...</figure>`                    |

<br />

### 📨 **Formulários e Interação**

| **Tag**      | **Função / Descrição**                      | **Atributos Comuns**                                    | **Exemplo de Uso**                                           |
| ------------ | ------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| `<form>`     | Agrupa campos de entrada e botões de envio. | `action`, `method`, `id`, `class`.                      | `<form action="https://formsubmit.co" method="POST">...</form>` |
| `<label>`    | Define rótulo associado a um campo.         | `for`, `class`.                                         | `<label for="nome">Nome</label>`                             |
| `<input>`    | Campo de entrada de dados.                  | `type`, `name`, `id`, `placeholder`, `value`, `hidden`. | `<input type="text" name="nome" placeholder="Seu nome">`     |
| `<textarea>` | Campo de texto multilinha.                  | `id`, `name`, `rows`, `placeholder`.                    | `<textarea id="mensagem" name="mensagem"></textarea>`        |
| `<button>`   | Botão clicável (enviar, resetar, etc.).     | `type`, `class`, `id`.                                  | `<button type="submit" class="botao">Enviar</button>`        |

<br />

### 🧩 **Recursos e Acessibilidade**

| **Tag**                     | **Função / Descrição**                                   | **Atributos Comuns**                               | **Exemplo de Uso**                                           |
| --------------------------- | -------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| `<link rel="preconnect">`   | Otimiza a conexão com servidores externos.               | `href`, `crossorigin`.                             | `<link rel="preconnect" href="https://fonts.googleapis.com">` |
| `<meta name="viewport">`    | Controla escala e layout em dispositivos móveis.         | `content="width=device-width, initial-scale=1.0"`. | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta name="theme-color">` | Define cor da barra de navegação no mobile.              | `content="#6366f1"`.                               | `<meta name="theme-color" content="#6366f1">`                |
| `<meta name="robots">`      | Indica instruções de indexação para mecanismos de busca. | `content="index, follow"`.                         | `<meta name="robots" content="index, follow">`               |
| `<meta name="author">`      | Define o autor da página.                                | `content="Rafael Queiróz"`.                        | `<meta name="author" content="Rafael Queiróz">`              |

<br />

### 💡 **Outras Tags Internas e Técnicas**

| **Tag**                 | **Função / Descrição**              | **Atributos Comuns** | **Exemplo de Uso**                                       |
| ----------------------- | ----------------------------------- | -------------------- | -------------------------------------------------------- |
| `<input type="hidden">` | Campo oculto enviado no formulário. | `name`, `value`.     | `<input type="hidden" name="_next" value="sucess.html">` |
| `<a target="_blank">`   | Abre link em nova aba.              | `target="_blank"`.   | `<a href="#" target="_blank">LinkedIn</a>`               |