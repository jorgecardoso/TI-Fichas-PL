# Ficha Laboratorial 1: A Minha Primeira Página Web

## Objetivos

No final desta aula deverá ser capaz de:

- Compreender a estrutura básica de um documento HTML.
- Criar conteúdo utilizando títulos, parágrafos, listas e hiperligações.
- Aplicar estilos básicos com CSS.
- Integrar um ficheiro JavaScript numa página Web.
- Utilizar as ferramentas de desenvolvimento do navegador para inspecionar uma página Web.

---

# 1. Criar a Estrutura do Projeto

No interior da pasta desta ficha crie os seguintes ficheiros:

```text
lab01/
│
├── index.html
├── style.css
└── script.js
```

---

# 2. Criar a Primeira Página HTML

No ficheiro `index.html`, crie a estrutura básica de um documento HTML5.

__Nota:__ Escreva manualmente o código seguinte no ficheiro `index.html`. Em fases mais avançadas pode copiar e colar código de exemplos ou gerados por IA, mas é importante, ao começar, escrever manualmente o código:

```html
<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título placeholder</title>
</head>
<body>

</body>
</html>
```

O documento deverá conter:

- um título da página;
- um cabeçalho principal;
- uma breve apresentação pessoal;
- uma lista de interesses;
- uma hiperligação para um website à sua escolha.

Exemplo de resultado esperado:

```text
A Minha Página Web

Olá!
Sou estudante da UC de Tecnologias Web.

Interesses:
- Música
- Desporto
- Tecnologia

Website favorito: ...
```

---

# 3. Separar Conteúdo e Apresentação

Crie um ficheiro `style.css` e associe-o ao documento HTML, colocando o seguinte código dentro do `<head>`:
```html
<link rel="stylesheet" href="./style.css">
```

Use selectores simples, de elemento, no `style.css` e adicione estilos para:

- cor de fundo da página;
- tipo de letra;
- cor do título principal;
- alinhamento do conteúdo;
- espaçamento entre secções.


Alguns exemplos:
```css
body {
    background-color: #f0f4f8;
    font-family: Arial, sans-serif;
    color: #222222;
    text-align: center;
}

h1 {
    color: #1e3a8a;
    font-size: 36px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

ul {
    padding: 0;
}

li {
    margin: 8px 0;
}
```

Experimente diferentes combinações de cores e tamanhos de letra.

---

# 4. Utilizar o Inspetor do Navegador

Abra as **Developer Tools** do navegador.

Utilize o separador **Elements** (ou **Inspector**) para:

- identificar elementos HTML;
- observar os estilos CSS aplicados;
- modificar temporariamente propriedades CSS.

## Exercício

Utilizando apenas as Developer Tools:

- altere a cor de fundo da página;
- altere a dimensão do título principal;
- altere a cor do texto.

Observe o que acontece após atualizar a página.

### Questão

Porque desaparecem as alterações efetuadas através do inspetor?

---

# 5. Adicionar JavaScript

Associe o ficheiro `script.js` ao documento HTML, colocando o seguinte código imediatamente antes de `<\body>`:
```html
<script src="./script.js"></script>
```

No ficheiro JavaScript escreva:

```javascript
console.log("Olá, Tecnologias da Internet!");
```

Abra a consola do navegador e confirme que a mensagem é apresentada.

---

# 6. Primeira Interação

Adicione um botão (`<button> </button>`à página com o texto:

```text
Clique aqui
```

Quando o utilizador clicar no botão, deverá surgir uma mensagem na consola.

Exemplo:

```text
Botão pressionado!
```



---

# 7. Desafio

Melhore a página adicionando:

- uma fotografia;
- uma secção "Sobre Mim";
- uma secção "Contactos";
- pelo menos três estilos CSS adicionais.

Sugestões:

- alterar margens ou espaçamentos;
- alterar a aparência dos links;
- adicionar uma cor de fundo ao cabeçalho;
- utilizar bordas ou cantos arredondados.

---

# Entrega

No final da aula deverá existir na pasta desta ficha:

```text
Ficha-Lab-01/
│
├── index.html
├── style.css
└── script.js
```

Todos os ficheiros devem funcionar corretamente quando o ficheiro `index.html` é aberto no navegador.

---

# Questões de Reflexão

Responda às seguintes questões:

1. Qual é o papel do HTML numa página Web?
2. Qual é o papel do CSS?
3. Qual é o papel do JavaScript?
4. Porque é vantajoso manter HTML, CSS e JavaScript em ficheiros separados?
5. O que acontece quando executamos uma instrução `console.log()`?

---

# Objetivo da Ficha

Compreender que uma aplicação Web resulta da combinação de três componentes fundamentais:

- **HTML**: estrutura e conteúdo;
- **CSS**: apresentação visual;
- **JavaScript**: comportamento e interação.

Esta ideia será aprofundada ao longo de toda a unidade curricular.