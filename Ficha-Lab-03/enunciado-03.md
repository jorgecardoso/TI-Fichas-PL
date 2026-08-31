# Ficha Laboratorial 3: Imagens e Multimédia na Web

## Objetivos

No final desta aula deverá ser capaz de:

- Inserir imagens numa página Web.
- Utilizar texto alternativo (*alternative text*).
- Compreender a diferença entre formatos de imagem comuns.
- Controlar a apresentação de imagens com CSS.
- Incorporar conteúdo multimédia.
- Utilizar elementos HTML apropriados para figuras e legendas.
- Criar uma galeria simples de imagens.


_Pode ver no final da ficha uma screenshot exemplificativo de um possível resultado final_

---

# Preparação

Crie uma pasta para a ficha:

```text
Ficha-Lab-03/
│
├── index.html
├── style.css
└── images/
```

Guarde na pasta `images` algumas imagens à sua escolha.

Ao longo desta ficha irá criar uma página intitulada:

```text
Os Meus Destinos Favoritos
```

A página deverá apresentar alguns locais que gostaria de visitar (ou que já visitou), utilizando imagens, legendas e conteúdos multimédia.

No final da aula terá produzido uma pequena galeria multimédia completamente funcional.

---

# 1. Primeira Imagem

Crie a página:

```text
Os Meus Destinos Favoritos
```

__Nota:__ O ficheiro HTML para esta página deve chamar-se `index.html`.

Adicione:

- um cabeçalho;
- um pequeno texto introdutório;
- uma primeira imagem relativa a um dos destinos.

Exemplo:

```html
<img src="images/foto.jpg" width="400" height="300" alt="Foto de uma mulher a olhar para o rio Mondego.">
```

Utilize também um atributo `alt` adequado. 

## Questão

Porque é importante utilizar o atributo `alt`?

---

# 2. Destinos e Legendas

Adicione mais uma imagem.

Utilize os elementos:

```html
<figure>
    <img src="images/foto.jpg" width="400" height="300" alt="Foto de uma mulher a olhar para o rio Mondego.">

    <figcaption>
        Nome do destino e pequena descrição.
    </figcaption>
</figure>
```

Cada destino deverá apresentar:

- imagem;
- nome do local;
- legenda descritiva.

---

# 3. Dimensionamento com CSS

Crie estilos para as imagens.

Exemplo:

```css
img {
    width: 300px;
}
```

Experimente:

```css
width
height
max-width
```

### Exercício

Observe o comportamento das imagens quando altera os diferentes valores.

---

# 4. Imagens Responsivas

Nem todos os utilizadores possuem o mesmo tamanho de ecrã.

Uma abordagem comum consiste em utilizar:

```css
img {
    max-width: 100%;
    height: auto;
}
```
__Nota:__ Esta é uma abordagem ainda básica às imagens responsivas.

### Exercício

Aplique esta técnica às imagens da página.

Redimensione a janela do navegador e observe o comportamento.

---

# 5. Criar uma Galeria

Transforme as imagens existentes numa galeria.

Adicione novos destinos até perfazer pelo menos:

- seis imagens;
- seis legendas.

Exemplo:

```text
+-------+ +-------+
| Img 1 | | Img 2 |
+-------+ +-------+

+-------+ +-------+
| Img 3 | | Img 4 |
+-------+ +-------+

+-------+ +-------+
| Img 5 | | Img 6 |
+-------+ +-------+
```

Utilize CSS para organizar visualmente a galeria.

Sempre que possível tente apresentar as imagens lado a lado.

---

# 6. Estilo da Galeria

Experimente algumas propriedades CSS aplicadas às imagens.

Exemplos:

```css
border
border-radius
box-shadow
```

### Exercício

Procure criar uma apresentação visual agradável e consistente para todos os destinos da galeria.

---

# 7. Explorar um Destino

Uma imagem também pode funcionar como hiperligação.

Exemplo:

```html
<a href="https://www.uc.pt">
    <img src="images/foto.jpg" width="400" height="300" alt="Foto de uma mulher a olhar para o rio Mondego.">
</a>
```

### Exercício

Transforme uma das imagens numa hiperligação.

A ligação deve abrir uma página com mais informação sobre esse destino.

---

# 8. Vídeo sobre um Destino

O HTML permite reproduzir vídeos diretamente.

Exemplo:

```html
<video controls width="600" src="videos/video.mp4">
</video>
```

### Exercício

Adicione um vídeo relacionado com um dos destinos apresentados.

__Nota:__ Use um ficheiro de vídeo pequeno nestes exercícios. Se não tiver nenhum, use o vídeo em `OutrosExercicios\Ficha-PL-1HTML-03-Elementos-de-media\videos`

---

# 9. Vídeo Incorporado

Alguns serviços disponibilizam código para incorporação.

Exemplo:

```html
<iframe src="https://...">
</iframe>
```

### Exercício

Crie uma nova secção denominada:

```text
Vídeos de Viagem
```

Incorpore um vídeo do YouTube relacionado com um dos destinos da galeria.

---

# 10. Comparação de Formatos de Imagem

Investigue as características dos seguintes formatos:

- JPEG/JPG
- PNG
- GIF
- SVG
- WebP

### Questão

Para cada formato indique:

- principais características;
- vantagens;
- situações de utilização recomendadas.

---

# 11. Utilização das Developer Tools

Utilize as ferramentas de desenvolvimento para:

- inspeccionar imagens;
- verificar dimensões reais e apresentadas;
- observar as regras CSS aplicadas.

### Exercício

Modifique temporariamente:

- largura;
- borda;
- margem;

de uma imagem diretamente no navegador.

---

# Resultado Final

No final da aula deverá possuir uma página intitulada:

```text
Os Meus Destinos Favoritos
```

A página deverá incluir:

- cabeçalho;
- texto introdutório;
- galeria com pelo menos seis imagens;
- legendas para todas as imagens;
- pelo menos uma imagem utilizada como hiperligação;
- um vídeo local;
- um vídeo incorporado;
- estilos CSS personalizados;
- imagens responsivas.


Screenshot exemplo:
![Figura 1](../.assets/images/screencapture-10-11-0-26-5500-Ficha-Lab-03-index-html-2026-08-29-11_28_17.png)
---

# Questões de Reflexão

1. Qual a função do atributo `alt`?
2. Porque é importante utilizar imagens responsivas?
3. Qual a diferença entre JPEG e PNG?
4. Quando faz sentido utilizar SVG?
5. Quais as vantagens de utilizar um vídeo incorporado (por exemplo, YouTube) em vez de alojar o ficheiro localmente?

---

# Objetivo da Ficha

Aprender a integrar imagens e conteúdos multimédia em páginas Web, garantindo uma apresentação visual adequada, acessível e adaptável a diferentes dispositivos.






---
---
# Exercícios Extra
---
---








## Ex 0
Crie um documento HTML no ficheiro `ex0.html` e insira um elemento de imagem `<img src="imagens/poster_rodents_bunnysize.jpg" alt="Um poster de um filme com três roedores; o do meio tem um ar ameaçador.">`

- Verifique se a imagem é exibida na pré-visualização da página `ex0.html`
- Repare que o atributo `src` tem o valor `imagens/poster...`. O que acontece se remover a parte `imagens/` do `src`? Porquê?
- Para que serve o atributo `alt`? Leia em https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#accessibility
- Acrescente atributos `width="300"` e `height="200"`. O que acontece?

**Nota: Não deve usar os atributos `width` e `height` para alterar substancialmente a dimensão da imagem a exibir. Para isso deverá alterar fisicamente a imagem usando um editor de imagens.**

## Ex 1

1. Tire uma foto com o seu smartphone (ou utilize uma foto que já possua)
2. Transfira-a para o seu Replit (pasta `Ficha-PL-1HTML-03-Elementos-de-media/imagens`)
3. Inclua-a no documento HTML `ex1.html`.
1. Aponte o tamanho do ficheiro da imagem (abra o File Explorer ou Finder e verifique o tamanho do ficheiro de imagem)
   4. Aponte o tamanho no ficheiro `respostas.txt`
4. Use a ferramenta developer tools do Google Chrome para simular a visualização da página `ex1.html` através de um telemóvel com ligação 3G (veja a Figura 1 para saber como simular). 
   - Quanto tempo demora a carregar a página?
   - Aponte os valores no ficheiro `respostas.txt`

![](/.assets/images/extra03fig1.png)
Figura 1


## Ex 2
Usando a mesma foto do Ex 1, use um editor de imagem (e.g., GIMP, ou PhotoShop) e crie três versões da foto, todas com 1200x900 píxeis e todas em formato JPG. Uma versão de alta qualidade, uma versão de média qualidade e uma versão de baixa qualidade. (_A qualidade é um parâmetro que pode controlar durante a exportação da imagem e normalmente consiste numa percentagem de compressão: quanto maior a compressão, menor a qualidade._)

1. Inclua as três fotos num novo documento HTML (`ex2.html`).
2. Responda ao seguinte no ficheiro `respostas.txt`:
     1. Use a ferramenta _developer tools_ do Google Chrome para simular a visualização da página através de um telemóvel com ligação 3G e meça os tempos de download de cada imagem.
     4. Quais das três versões acharia aceitável usar no seu site? Porquê?



## Ex 3
Crie um novo documento HTML (`ex5.html`).
- Insira o vídeo (elemento `<video>`) `big_buck_bunny_480p_h264.webm` que encontra na pasta `videos`.
- Configure o vídeo de forma a que comece a reprodução automaticamente, mas sem possibilitar o controlo por parte do utilizador. (*Nota: devido às restrições de reprodução dos browsers, é possível que o vídeo não inicie automaticamente no seu browser. Se tal acontecer, adicione o atributo `muted` ao elemento `<video>`*)
- Insira depois um outro video (na mesma página) documento em que o vídeo não começa a reprodução automaticamente, permite que o utilizador controle a reprodução, e exibe uma imagem de poster (use a imagem `poster_rodents_bunnysize.jpg` que encontra na pasta `imagens`).

## Ex 4
Com os ficheiros de áudio disponíveis na pasta `audio`, crie um novo documento HTML (`ex6.html`) com uma lista não ordenada dos áudios de forma a que o utilizador consiga reproduzir cada um deles (Figura 4).

![](/.assets/images/extra03fig4.png)
Figura 4
