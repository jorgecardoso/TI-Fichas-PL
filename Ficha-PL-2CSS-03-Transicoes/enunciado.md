[Voltar](../main.md)
# Ficha PL CSS - Transições

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
    <title>Exercício de Transições CSS</title>
</head>
<body>
    <button>Clique em mim!</button>
</body>
</html>
```

Adicione um ficheiro CSS (`ex0.css`) e ligue-o ao HTML. O CSS deverá ter as seguintes regras:
```css
    button {
        background-color: lightblue;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
       
    }

    button:hover {
        background-color: deepskyblue;
    }

```

No CSS, defina:

Uma transição para o botão que altere suavemente a cor de fundo ao passar o mouse por cima.
Use a propriedade transition para definir a duração da transição (ex.: 0.3 segundos).

## Ex 1

Observe o conteúdo e resultado dos ficheiros na pasta `ex1`.
No ficheiro `ex1.css`, sem modificar o código existente, adicione uma transição à largura do item. A transição deve demorar `300ms`.

## Ex 2
Duplique a solução do Ex 1 para a pasta `ex2`.
Adicione regras CSS de forma a que exista, para além de uma transição sobre a largura do item, uma transição de cor de fundo. Quando se passa o cursor do rato por cima do item, a cor deve transitar de `orange` para `red`, em `200ms`. 

## Ex 3
Duplique agora a solução do Ex 2 para a pasta `ex3`. Modifique a solução de forma a encadear as duas transições:
- Quando se passa o cursor do rato por cima do item, deve iniciar-se a transição de largura.
- Quando a transição de largura terminar, deve iniciar-se a transição de cor.

[Voltar](../main.md)