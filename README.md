# Portfólio Linktree

Este projeto consiste em um desafio da [Codante](https://codante.io/mini-projetos/pagina-de-links) para criar uma página de links no estilo Linktree, onde o objetivo é exibir links de forma organizada, com foco em uma apresentação simples e responsiva. A página é alimentada por dados armazenados em um arquivo JSON, permitindo uma fácil configuração de informações sobre o usuário e suas redes sociais.

## Requisitos

A página exibe as seguintes informações:

- **Avatar e nome do usuário**: O nome é exibido com o último sobrenome em negrito.
- **Descrição breve**: Uma descrição concisa sobre o usuário.
- **Lista de até 5 links**: Links para produtos, serviços, portfólio, entre outros.
- **Redes sociais**: Exibição de ícones e links para redes sociais como LinkedIn, Facebook e Instagram. A lista de redes sociais é carregada a partir de um arquivo JSON e pode ser facilmente estendida.

## Funcionalidades

- A página é **mobile-first** e possui design responsivo, garantindo uma boa experiência em dispositivos móveis e desktop.
- **Avatar** e **nome** do usuário são exibidos com um design agradável e acessível.
- **Lista de links** configurável via arquivo JSON.
- **Redes sociais**: Links e ícones são extraídos do arquivo JSON e exibidos dinamicamente na página.

## Estrutura do Projeto

- **index.html**: Estrutura HTML da página.
- **style.css**: Estilos para a página com design responsivo.
- **script.js**: Script JavaScript que carrega e exibe dados do arquivo JSON.
- **redes-sociais.json**: Arquivo JSON contendo informações sobre as redes sociais.

### Exemplo do arquivo JSON

```json
{
  "name": "Mariana Candido",
  "avatar": "imagens/profile.png",
  "description": "Página criada inicialmente para demonstrar minhas habilidades de desenvolvimento web.",
  "links": [
    { "name": "Produtos", "url": "#" },
    { "name": "Serviços", "url": "#" },
    { "name": "Quem sou", "url": "#" },
    { "name": "Portfólio", "url": "#" },
    { "name": "Contato", "url": "#" }
  ],
  "socialLinks": [
    { "name": "LinkedIn", "url": "https://www.linkedin.com", "icon": "imagens/linkedin.svg" },
    { "name": "Instagram", "url": "https://www.instagram.com", "icon": "imagens/instagram.svg" },
    { "name": "GitHub", "url": "https://www.github.com", "icon": "imagens/github.svg" }
  ]
}
