[Voltar](/1.begin.md)
# Ficha PL CSS - Flexbox

## Intro
Para uma introdução ao CSS: https://developer.mozilla.org/en-US/docs/Learn/CSS

--- 

**Estruture a suas soluções em pastas para cada exercício. Para cada exercício deve criar uma pasta (`ex1`, `ex2`, `ex3`, etc.) e colocar dentro dessa pasta um ficheiro html (`ex1.html`, `ex2.html`, `ex3.html`, etc.) e outros ficheiros necessários (por exemplo, CSS). É fornecido um exemplo para o Ex 1.**

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor uma vez que este tem bugs.__

--- 

## Ex 0
Crie um document HTML (`ex0.html`) com a seguinte estrutura:
```html
<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Flexbox CSS</title>
</head>
<body>
    <div id="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
</body>
</html>
```

Adicione um CSS:
```css
#container {
  width: 400px;
  height: 300px;
}
```

Adicione regras para fazer o seguinte:

- Estilize o #container para usar o display flex.
- Use as propriedades Flexbox para centralizar os três itens no centro da tela, tanto horizontal quanto verticalmente.
- Dê aos itens um tamanho de 100px por 100px e uma cor de fundo diferente para cada item.

# Ex 1

Observe o conteúdo e resultado dos ficheiros na pasta `ex1`.
No ficheiro `ex1.css`, sem modificar o código existente, use `display: flex` e configure para que as imagens fiquem sempre centradas horizontalmente na janela, qualquer que seja a largura da janela. 

Nota: o número de imagens por linha pode variar consoante a largura da janela.

![](assets/fig1.png)
Figura 1


# Ex 2
Observe o conteúdo e resultado dos ficheiros na pasta `ex2`.
Adicione regras `flexbox` de forma a que o item central se expanda de acordo com a largura da janela.

![](assets/fig2.png)
Figura 2

# Ex 3
Observe o conteúdo e resultado dos ficheiros na pasta `ex3`.
Modifique o ficheiro `ex3.css`:
- Comece por fazer com que o título de cada imagem se sobreponha à mesma.
- Aplique depois regras `flexbox` ao `<aside>` de forma a que as imagens sejam apresentadas numa coluna vertical.
  
![](assets/fig3.png)
Figura 3


[Voltar](/1.begin.md)