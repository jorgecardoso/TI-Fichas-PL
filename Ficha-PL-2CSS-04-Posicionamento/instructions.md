# Intro
You may want to read the following tutorial to learn about the basics of CSS: 

https://developer.mozilla.org/en-US/docs/Learn/CSS

--- 

**Estruture a suas soluções em pastas para cada exercício. **

--- 


# Ex 1

Crie um novo documento HTML e copie o código seguinte para o corpo do documento. 

```html 
<p>First sentence.</p>

<p>Second sentence.</p>

<p>Third sentence.</p>

<p>Fourth sentence.</p>
```

Associe uma folha de estilos CSS e copie o seguinte código para lá:
```css
p {
 outline: 1px solid black;
 height: 100px;
 width: 300px;
}
```

- Sem modificar o HTML, adicione ao CSS fornecido as regras CSS para reproduzir o resultado da Figura 1: todos os parágrafos devem ficar sobrepostos. Use obrigatoriamente **posicionamento relativo** nos `<p>`.


---
![Figura 1](assets/fig1.png)
Figura 1
___ 


# Ex 2
Crie um novo documento HTML e copie o código seguinte para o corpo do documento:
```html
 <div class="box" id="one">One</div>
 <div class="box" id="two">Two</div>
 <div class="box" id="three">Three</div>
 <div class="box" id="four">Four</div>
 ```
 
 Associe uma folha de estilos CSS e copie o seguinte código para essa folha:
 ```css
 .box {
   display: inline-block;
   width: 100px;
   height: 100px;
   background: red;
   color: white;
}

```

- Sem modificar o HTML, adicione ao CSS fornecido as regras CSS para reproduzir o resultado da Figura 2: a caixa azul deve mover-se ligeiramente para a direita e para baixo quando o rato passa por cima. Responda às seguintes questões no ficheiro `respostas.txt`
  - Que posicionamento é mais adequado neste caso?
  - Para que serve a propriedade “display: inline-block”?
---
![Figura 2](assets/fig2.png)
Figura 2
___ 

# Ex 3
Crie um novo documento HTML e copie o código seguinte para o corpo do documento:
```html
<div class="container">
 <div class="box" id="one">One</div>
 <div class="box" id="two">Two</div>
 <div class="box" id="three">Three</div>
 <div class="box" id="four">Four</div>
</div>
```

Associe uma folha de estilos CSS copie o código seguinte:
```css
.container {
 width: 400px;
 height: 400px;
 position: relative;
 border: 1px solid black;
}
```

- Sem modificar o HTML, adicione ao CSS fornecido as regras CSS para reproduzir o resultado da Figura 3. As regras a escrever referem-se apenas às `<div>` interiores (com classe `box`). Responda às seguintes questões no ficheiro `respostas.txt`
  - Que posicionamento é mais adequado neste caso?
  - Porque é que a `<div>` “container” precisa da propriedade `position: relative`?
---
![Figura 3](assets/fig3.png)
Figura 3
___ 

# Ex 4
Crie um novo documento HTML e copie o código seguinte para o corpo do documento:
```html
<div id="first">
   <p>First sentence.</p>
</div>
<div id="second">
   <p>Second sentence.</p>
</div>
```

Associe uma folha de estilos CSS e, sem modificar o HTML, escreva as regras CSS para fazer com que:
- a primeira `<div>` tenha
   - 150 píxeis de largura,
   - borda preta e
   - esteja posicionada a 10 píxeis do topo e 10 píxeis do lado esquerdo da janela.
 - a segunda `<div>` deve ter
   - 150 píxeis de largura,
   - borda vermelha e
   - estar posicionada a 10 píxeis do topo e 10 píxeis do lado direito da janela.

---
![Figura 4](assets/fig4.png)
Figura 4
___ 

# Ex 5
Crie um novo documento HTML e copie o código seguinte para o corpo do documento:
```html
<header>
  <div class="logo">
   Logo Here
  </div>
  <div class="menu">
   <span class="menuitem">Button 1</span>
   <span class="menuitem">Button 2</span>
   <span class="menuitem">Button 3</span>
  </div>
</header>

```

Associe uma folha de estilos CSS e, sem modificar o HTML, aplique os estilos que reproduzem o resultado da Figura 5.

---
![Figura 5](assets/fig5.png)
Figura 5
___ 
