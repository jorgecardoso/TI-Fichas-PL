[Voltar](../main.md)
# Ficha PL CSS - Grelha e Design Responsivo

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
    <title>Exercício de Media Queries CSS</title>
</head>
<body>
    <div id="caixa">Caixa Responsiva</div>
</body>
</html>
```
Adicione um CSS:
```css
#caixa {
    width: 300px;
    height: 300px;
    background-color: lightblue;
}
```

Use uma media query para alterar o tamanho da caixa para 100% de largura e 150px de altura quando a janela for menor que 600px de largura.

# Ex 1

Observe a estrutura HTML fornecida para o documento `ex1.html`:
```html
<body>
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <footer>Footer</footer>
</body>
```

Usando CSS Grid, implemente o seguinte layout para computador Desktop:
```txt
 ------------------------------------
|             Header                 |
 ------------------------------------
|  Nav  |       Main Content         |
|       |                            |
|       |                            |
|       |                            |
|       |                            |
|       |                            |
 ------------------------------------
|             Footer                 |
 ------------------------------------
``` 


# Ex 2
Copie a sua solução do __Ex 1__ para os documentos relativos ao __Ex 2__. Adicione uma stylesheet para tornar o design responsivo. Considere apenas o caso smartphone e reproduza o seguinte layout:

```txt
 ---------------
|     Header    |
 ---------------
|      Nav      |
 ---------------
| Main Content  |
|               |
|               |
|               |
 ---------------
|    Footer     |
 ---------------
```

Aplique mais regras CSS para esconder o footer no layout smartphone:
```txt
 ---------------
|     Header    |
 ---------------
|      Nav      |
 ---------------
| Main Content  |
|               |
|               |
|               |
 ---------------
```

# Ex 3
À sua solução para o __Ex 2__, acrescente conteúdo ao elemento de navegação de forma a criar um menu com links:

Desktop:
```txt
 ------------------------------------
|             Header                 |
 ------------------------------------
| Link1 |       Main Content         |
| Link2 |                            |
| Link3 |                            |
| Link4 |                            |
| Link5 |                            |
| Link6 |                            |
 ------------------------------------
|             Footer                 |
 ------------------------------------
```

Smartphone (os links devem ficar posicionados numa linha horizontal que quebra quando chega ao limite do ecrã. Na imagem apenas aparecem dois links por linha porque não haveria mais espaço.)
```txt
 ---------------
|     Header    |
 ---------------
| Link1 Link2   |
| Link3 Link4   |
| Link5 Link6   |
 ---------------
| Main Content  |
|               |
|               |
|               |
 ---------------
|    Footer     |
 ---------------
```

# Ex 4

Partindo da sua solução do __Ex 2__ ou __Ex 3__, adicione uma imagem responsiva ao "Main content", tendo em conta as seguintes indicações:

- Utilize o ficheiro `a-dog-running.jpeg` que se encontra na pasta `images`
- A imagem deve ocupar toda a largura do contentor "Main content"
- A imagem deve ser responsiva ("resolution switching use case"). Descarregue a imagem para o seu computador e produza versões com menor resolução (uma com 1024 pixeis de largura, outra com 640 pixeis de largura).
- Aplique a solução de imagens responsivas em HTML às três versões (640px, 1024px, 4368px (original)).

# Ex 5

Altere o seu __Ex 4__ da seguinte forma: 

- No layout para smartphone, a imagem deve mostrar apenas o cão (faça uma versão da imagem em que remove as laterais com as flores, ficando com uma imagem tipo retrato do cão).
- Aplique a solução de imagens responsivas em HTML ("art direction use case") para mostrar esta segunda versão da imagem no layout para smartphones.

[Voltar](../main.md)