# Instruções

O enunciado completo do projeto está disponível aqui:
[https://docs.google.com/document/d/1OG1i7ak_IoVNzZZjc85_XYWCorovMWFavUQ8N4W7gzo/edit?usp=sharing](https://docs.google.com/document/d/1OG1i7ak_IoVNzZZjc85_XYWCorovMWFavUQ8N4W7gzo/edit?usp=sharing)

Este documento não repete o enunciado pelo que é essencial começar por o ler. 

Em vez disso, pretende dar algumas orientações práticas sobre boa organização e desenvolvimento de um website, especialmente para quem está a fazer o primeiro contacto com HTML, CSS e JavaScript.

Para complementar estas ideias, podem consultar também a seguinte referência:
[MDN - Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing)

---

# Organização de um website

Um projeto de website deve ser organizado de forma clara e previsível. Isso facilita a manutenção, a leitura do código e a evolução do trabalho ao longo do projeto.

## Estrutura recomendada

Uma organização simples e útil pode ser a seguinte:

```text
projecto/
├── index.html
├── sobre.html
├── servicos.html
├── contactos.html
├── assets/
│   ├── imagens/
│   │   ├── hero.jpg
│   │   ├── equipa/
│   │   └── produtos/
│   ├── videos/
│   ├── icones/
│   └── fontes/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── componentes.css
│   └── responsivo.css
├── js/
│   ├── main.js
│   ├── menu.js
│   └── faq.js
├── data/
│   └── dados.json
└── README.md
```

Esta organização ajuda a separar diferentes tipos de recursos e evita que todos os ficheiros fiquem misturados numa única pasta.

## Boas práticas importantes
- A página principal (de entrada) no site deve sempre ser chamada de `index.html`
- Use nomes de ficheiros simples, sem espaços, acentos ou caracteres especiais.
- Os nomes dos ficheiros devem ser significativos: em vez de pagina1.html, prefira nomes como inicio.html, sobre.html, servicos.html ou contacto.html.
- Mantenha a estrutura semântica do HTML: use header, nav, main, section, article, footer, etc.
- Separe o CSS em ficheiros por função, em vez de criar um único ficheiro gigante.
- Use classes com nomes claros e consistentes, por exemplo: .menu, .hero, .card, .faq.
- Evite repetir regras idênticas em vários lugares.
- Guarde imagens e vídeos em pastas específicas e use dimensões adequadas ao objetivo da página.
- Quando cria um website responsivo, pense primeiro no mobile e depois adapte para ecrãs maiores.

> Importante: um ficheiro como pagina1.html pode ser confuso e pouco descritivo. O ideal é usar nomes que descrevam claramente o conteúdo ou a função da página.

---

# Estrutura do CSS

Para um projeto mais organizado, é útil dividir o CSS por categorias:

- base.css: reset, tipografia base, variáveis, cores, estilos gerais.
- layout.css: estrutura da página, grid/flexbox, espaçamento, alinhamentos.
- componentes.css: botões, cards, menus, formulários, banners, listas, FAQ.
- responsivo.css: media queries e ajustes específicos para tablet e telemóvel.

Se o projeto for pequeno, pode usar apenas alguns ficheiros em vez de muitos. O importante é manter uma lógica clara e evitar colocar tudo no mesmo CSS.

Também é boa prática:

- definir um conjunto de estilos base e reutilizáveis,
- usar classes e não estilos inline,
- manter um padrão uniforme para margens, espaçamento e tipografia,
- testar o site em diferentes larguras de ecrã.

---

# Processo recomendado de desenvolvimento

Para alunos que estão a começar no desenvolvimento web, o processo mais útil costuma ser o seguinte:

1. Definir o objetivo do website e o tema.
2. Organizar a informação em páginas e secções.
3. Criar a estrutura HTML com conteúdo e semântica adequados.
4. Fazer a primeira versão visual com CSS básico.
5. Melhorar o layout com Flexbox e/ou Grid.
6. Adicionar interatividade com JavaScript.
7. Validar o HTML e o CSS e testar em diferentes dispositivos.

Este processo ajuda a evitar começar pelo visual sem primeiro ter a estrutura correta. Em projetos web, a organização do conteúdo e da informação costuma ser tão importante como o design.


# Recomendação final

O objetivo do projeto não é apenas “fazer páginas bonitas”, mas sim aprender a organizar bem um site, a separar responsabilidade entre HTML, CSS e JavaScript, e a desenvolver um processo de trabalho claro.

Uma boa prática é começar sempre pela estrutura, depois pelo estilo, e só no fim pela interatividade. Assim, o projeto fica mais fácil de entender, de testar e de melhorar.

Se tiver dúvidas sobre organização de ficheiros, estrutura CSS ou desenvolvimento de páginas responsivas, pode começar por consultar a referência do MDN e aplicar os princípios de forma simples e consistente.
