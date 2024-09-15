[Voltar](/1.begin.md)
# Ficha PL JavaScript

## Intro

**Estruture a suas soluções em pastas para cada exercício. Para cada exercício deve criar uma pasta (`ex1`, `ex2`, `ex3`, etc.) e colocar dentro dessa pasta um ficheiro html (`ex1.html`, `ex2.html`, `ex3.html`, etc.) e outros ficheiros necessários (por exemplo, CSS).**

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor uma vez que este tem bugs.__

--- 

## Ex 0 
Crie um programa em JavaScript que calcule a área de um retângulo com base em valores pré-definidos para a largura e altura, e exiba o resultado no console.

1. Defina duas variáveis: `largura` e `altura`, com valores numéricos.
1. Calcule a área do retângulo usando a fórmula: `Area = largura × altura
1. Exiba o resultado da área na consola.

Para executar este programa, crie um documento HTML (`ex0.html`) e associe um script (ficheiro `ex0.js`). 

Faça preview to HTML e abra a consola JavaScript para ver o resultado.

## Ex 1

Observe o código HTML do ficheiro `ex1.html` na pasta `ex1`.
- Adicione um script JavaScript:
  - Crie um ficheiro `ex1.js` dentro da pasta `ex1`
  - Faça a "ligação" entre o HTML e o JavaScript incluindo o elemento `<script src="ex1.js"></script>` antes do fim do `<body>`.

No script que acabou de adicionar, escreva código que:
1. Modifique o conteúdo da div#one para: "This is a div".
2. Modifique o conteúdo da div#two para: "This is a `<div>`".


**Nota: o script não precisa de ser interactivo. As modificações podem ocorrer logo que a página é carregada pelo browser.**


## Ex 2
Observe o código HTML e CSS dentro da pasta `ex2`. Use JavaScript para:

1. Colocar o estilo da borda da `div#one` a "1px solid red".  
2. Colocar a cor de fundo da `div#two` em `lightblue`.


**Nota: o script não precisa de ser interactivo. As modificações podem ocorrer logo que a página é carregada pelo browser.**


## Ex 3
Observe o conteúdo dos ficheiros na pasta `ex3`.
Adicione JavaScript de forma a que quando o *utilizador clicar*:

1. No botão `One`, o conteúdo da div#one seja modificado para: "This is a div".
2. No botão `Two`, o conteúdo da div#two seja modificado para: "This is a `<div>`".

**Nota: Consegue fazer com que os botões funcionem como *toggle*: ou seja voltando a clicar, se desfaça a modificação**


## Ex 4
Observe o código da pasta `ex4`. Usando JavaScript faça com que um clique nos botões tenha como resultado o seguinte:
1. (Botão 1) Adicione um elemento `<span>` vazio dentro da `div#one`
2. (Botão 2) Adicione um link para `http://uc.pt` dentro da `div#two`.
3. (Botão 3) Remova o elemento `<span>` da div#three.

## Ex 5
Observe o código da pasta `ex5`. Usando JavaScript:

1. Adicione um listener de clique à `div#one`. Quando clicada, a propriedade CSS `left` da `div#one` deve ser alterada para `200px`.
2. Adicione um listener de `mouseenter` à `div#two`. Quando o cursor do rato entrar na div, deve alterar o seu fundo para vermelho.
3. Adicione também um listener de `mouseleave` para reverter o efeito.

## Ex 6
Crie uma função JavaScript com nome `setBorder` que aceite dois parâmetros: 
1. um selector CSS e
2. um valor para a propriedade `border`.

Essa função deverá alterar o estilo da propriedade `border` do elemento seleccionado pelo selector, para o valor especificado.

Use a função para alterar o estilo da borda de um elemento do seu documento HTML, por exemplo:

`setBorder("h1", "1px solid red");`

**Pode usar esta função de forma não-interactiva: logo que a página carregar pode invocar a função para alterar a borda de um elemento.**

[Voltar](/1.begin.md)