[Voltar](/.tutorial/1.begin.md)
# Ficha PL JavaScript

## Intro

**Estruture a suas soluções em pastas para cada exercício. Para cada exercício deve criar uma pasta (`ex1`, `ex2`, `ex3`, etc.) e colocar dentro dessa pasta um ficheiro html (`ex1.html`, `ex2.html`, `ex3.html`, etc.) e outros ficheiros necessários (por exemplo, CSS).**

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor uma vez que este tem bugs.__

--- 

## Ex 0
Crie uma página HTML com um parágrafo e um botão. Ao clicar no botão, o texto do parágrafo deve ser alterado por meio de JavaScript.

Passos:
1. Crie uma página HTML com:
    - Um parágrafo (`<p>`) com algum texto inicial.
    - Um botão (`<button>`) com o texto "Clique aqui".
1. Escreva um script em JavaScript que, ao clicar no botão, altere o texto do parágrafo.
1. Utilize a manipulação do DOM para mudar o conteúdo do parágrafo.

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Interatividade</title>
</head>
<body>
    <p id="meuParagrafo">Este é o texto original.</p>
    <button id="meuBotao">Clique aqui</button>

    <script src="script.js"></script>
</body>
</html>
```

# Ex 1
Porque é que o script `ex1.js` (pasta `ex1`) não funciona? Corrija-o, mantendo a inclusão do script no `<head>` do HTML.

**Nota: Para ver o erro, abra a consola de JavaScript e recarregue a página `ex1.html`**



# Ex 2
Observe o código da pasta `ex2`. 
Implemente o seguinte comportamento em JavaScript:
1. Quando clicar no `<h2>` deverá esconder o conteúdo da `<div>`.
2. Se voltar a clicar, deverá mostrar o conteúdo da `<div>`.

Para esconder ou mostrar a `<div>` deverá aplicar / remover uma classe css `show`. As regras dessa classe deverão ser definidas por si.



# Ex 3
Crie uma função JavaScript chamada `createImg` que aceite como parâmetro o URL de uma imagem e devolva o elemento `<img>` com o atributo `src` preenchido com esse URL.

**Nota: pesquise informação sobre a função _element_.setAttribute()** 

Use essa função para criar e adicionar três imagens ao HTML (pasta `ex3`).
O script deverá percorrer o array (este array já tem os URLs de três imagens) já declarado no ficheiro `ex3.js`.


[Voltar](/.tutorial/1.begin.md)