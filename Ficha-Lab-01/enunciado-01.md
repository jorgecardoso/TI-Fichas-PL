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
Ficha-Lab-01/
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

- um título da página (elemento HTML `<title>` no `<head>`);
- um cabeçalho principal (`<h1>`);
- uma breve apresentação pessoal (`<p>`);
- uma lista de interesses (`<ul>` e `<li>`);

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

Adicione um botão (`<button> </button>`) à página com o texto:

```text
Clique aqui
```

Quando o utilizador clicar no botão, deverá surgir uma mensagem na consola. Para isto acontecer, deve adicionar o seguinte código ao ficheiro `script.js`:

```javascript
let botao = document.querySelector("button");

botao.addEventListener("click", eventoClick);

function eventoClick() {
    console.log("Botão pressionado");
}
```

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
- adicionar uma cor de fundo ao cabeçalho;
- utilizar bordas ou cantos arredondados.

---

# Resultado final

No final da aula deverá existir na pasta desta ficha:

```text
Ficha-Lab-01/
│
├── index.html
├── style.css
└── script.js
```

Todos os ficheiros devem funcionar corretamente quando o ficheiro `index.html` é aberto no navegador. Não devem surgir erros na consola JavaScript.

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

---
---
# Exercícios Extra
---
---

## Ex 0
Crie um documento HTML `ex0.html` dentro da pasta `Ficha-PL-1HTML-01-Elementos-basicos`.

Escreva a estrutura básica do HTML (head, body). 

Use elementos HTML para escrever um pequeno documento composto por:
1. título (`h1`)
2. um parágrafo (`p`)
3. uma secção (`h2`)
4. outro parágrafo (`h3`)

(Use o gerador de lorem ipsum para o texto dos parágrafos https://www.lipsum.com/)


## Ex 1
Edite o documento HTML `ex1.html` e crie uma estrutura semelhante à da Figura 1.  (Use o gerador de lorem ipsum para o texto dos parágrafos https://www.lipsum.com/)

Responda no documento `respostas.txt`:

1. Que elementos deve usar para o título do documento? 
2. E para cada uma das secções e sub-secções? 
3. E os parágrafos dentro das secções?
4. Qual o título da página no tab do browser? 
5. Como pode mudar o título que surge no tab/janela do browser? 
 
![Figura 1](/.assets/images/extra01fig1.png)
Figura 1.


## Ex 2
Cole o HTML seguinte no `<body>` do documento do ficheiro `ex4.html` (terá de escrever o resto do HTML do `<head>` e altere-o de forma a que cada frase esteja numa linha diferente (Figura 2).


```html
<h1>Lorem Ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet massa id enim posuere congue. Pellentesque venenatis lobortis libero at varius. Nullam sit amet sapien at arcu porta placerat eget sed metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac felis eu libero eleifend commodo. In at varius tellus. Vivamus at sollicitudin diam, sed consectetur ipsum. Proin maximus nisi est, nec porttitor est lacinia vel. Vivamus sagittis sed ante eget finibus. Ut euismod, libero vitae varius blandit, tortor est iaculis magna, ut lobortis arcu nisi eu mi. Cras tempus justo a purus dapibus faucibus. In hac habitasse platea dictumst. Suspendisse eleifend malesuada libero sit amet pretium.</p>
```

![Figura 2](/.assets/images/extra01fig2.png)
Figura 2

## Ex 3
Transforme as palavras seguintes numa lista HTML: `Blue Orange Black White Brown Red Green Yellow Cyan` (Figura 3.1).

- Adicione uma sub-lista à entrada “Blue” (Figura 3.2)

Responda no documento `respostas.txt`:
1. A lista da Figura 3.1 é uma lista ordenada (`<ol>`), ou uma lista não ordenada (`<ul>`)?



![Figura 3.1](/.assets/images/extra01fig3.1.png)
Figura 3.1


![Figura 3.2](/.assets/images/extra01fig3.2.png)
Figura 3.2



## Ex 4

Observe o diagrama da Figura 4.

![](/.assets/images/extra01fig4.svg)
Figura 4

- O que representa o diagrama?
- Crie um documento no ficheiro `ex2.html` que tenha a estrutura de elementos HTML representada na Figura 1. Os elementos das folhas podem estar vazios (não precisa de adicionar conteúdo). Por exemplo para representar um dos `<li>` poderia simplesmente escrever `<li></li>`.


## Ex 5
Imagine que tinha de implementar uma estrutura HTML para a informação mostrada na Figura 5 (tirada de https://www.jn.pt/artes.html). 
- Que elementos contentores HTML usaria?
- Crie um documento HTML que ilustre a estrutura que usaria (use imagens fictícias). Não se preocupe com o aspecto visual, apenas com a estrutura interna da informação. Escreva o resultado no documento `ex5.html`.

![Figura 5](/.assets/images/extra01fig5.png)
Figura 5