# Intro


__Estruture a suas soluções em pastas para cada exercício.__

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor.__

--------


# Ex 1

Observe o código HTML do ficheiro `ex1.html` na pasta `ex1`.
Adicione um script JavaScript que

1. Modifique o conteúdo da div#one para: "This is a div".
2. Modifique o conteúdo da div#two para: "This is a `<div>`".


**Nota: o script não precisa de ser interactivo. As modificações podem ocorrer logo que a página é carregada pelo browser.**


# Ex 2
Observe o código HTML e CSS dentro da pasta `ex2`. Use JavaScript para:

1. Colocar o estilo da borda da `div#one` a "1px solid red".  
2. Colocar a cor de fundo da `div#two` em `lightblue`.


**Nota: o script não precisa de ser interactivo. As modificações podem ocorrer logo que a página é carregada pelo browser.**


# Ex 3
Observe o conteúdo dos ficheiros na pasta `ex3`.
Adicione JavaScript de forma a que quando o *utilizador clicar*:

1. No botão `One`, o conteúdo da div#one seja modificado para: "This is a div".
2. No botão `Two`, o conteúdo da div#two seja modificado para: "This is a `<div>`".

**Nota: Consegue fazer com que os botões funcionem como *toggle*: ou seja voltando a clicar, se desfaça a modificação**


# Ex 4
Observe o código da pasta `ex4`. Usando JavaScript faça com que um clique nos botões tenha como resultado o seguinte:
1. (Botão 1) Adicione um elemento `<span>` vazio dentro da `div#one`
2. (Botão 2) Adicione um link para `http://uc.pt` dentro da `div#two`.
3. (Botão 3) Remova o elemento `<span>` da div#three.

# Ex 5
Observe o código da pasta `ex5`. Usando JavaScript:

1. Adicione um listener de clique à `div#one`. Quando clicada, a propriedade CSS `left` da `div#one` deve ser alterada para `200px`.
2. Adicione um listener de `mouseenter` à `div#two`. Quando o cursor do rato entrar na div, deve alterar o seu fundo para vermelho.
3. Adicione também um listener de `mouseleave` para reverter o efeito.

# Ex 6
Crie uma função JavaScript com nome `setBorder` que aceite dois parâmetros: 
1. um selector CSS e
2. um valor para a propriedade `border`.

Essa função deverá alterar o estilo da propriedade `border` do elemento seleccionado pelo selector, para o valor especificado.

Use a função para alterar o estilo da borda de um elemento do seu documento HTML, por exemplo:

setBorder("h1", "1px solid red");

