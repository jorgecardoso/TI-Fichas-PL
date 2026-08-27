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

---

# 1. Inserir uma Imagem

Adicione uma imagem à página.

Utilize o elemento:

```html
<img src="images/foto.jpp">
```

## Exercício

Adicione:

- uma imagem;
- uma descrição adequada através do atributo `alt`.

## Questão

Porque é importante utilizar o atributo `alt`?

---

# 2. Figura e Legenda

As imagens muitas vezes necessitam de contexto.

Utilize os elementos:

```html
<figure>
    <img src="images/">    
    <figcaption>Legenda da imagem</figcaption>
</figure>
```

## Exercício

Adicione pelo menos duas figuras com legendas.

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

### Exercício

Aplique esta técnica às imagens da página.

Redimensione a janela do navegador e observe o comportamento.

---

# 5. Criar uma Galeria

Crie uma secção denominada:

```text
Galeria
```

Adicione pelo menos quatro imagens.

Exemplo:

```text
+-------+ +-------+
| Img 1 | | Img 2 |
+-------+ +-------+

+-------+ +-------+
| Img 3 | | Img 4 |
+-------+ +-------+
```

Utilize CSS para organizar visualmente a galeria.

### Desafio

Tente apresentar as imagens lado a lado.

---

# 6. Efeitos Visuais com CSS

Experimente algumas propriedades CSS aplicadas às imagens.

Exemplos:

```css
border
border-radius
box-shadow
```

### Exercício

Crie uma moldura personalizada para as imagens.

---

# 7. Imagens como Ligações

Uma imagem também pode funcionar como hiperligação.

Exemplo:

```html
<a href="ww.uc.pt">
    <img src="images/logo.jpg" alt="Universo UC"></a>
```

Transforme uma das imagens da página numa hiperligação.

---

# 8. Incorporar Vídeo

O HTML permite reproduzir vídeos diretamente.

Exemplo:

```html
<video controls width="600">
    <source src="videos/video.mp4">
    </video>
```

### Exercício

Adicione um vídeo à página.

Caso não disponha de um ficheiro de vídeo, utilize um vídeo fornecido pelo docente.

---

# 9. Incorporar Conteúdo Externo

Alguns serviços disponibilizam código para incorporação.

Exemplo:

```html
<iframe
    width="560"
    height="315"
    src
```
### Exercício
Incorpore um vídeo do YouTube numa nova secção da página.

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

# Desafio Final

Crie uma página intitulada:

```text
Os Meus Destinos Favoritos
```

A página deverá incluir:

- um cabeçalho;
- uma breve descrição;
- uma galeria com pelo menos seis imagens;
- legendas para todas as imagens;
- um vídeo incorporado;
- estilos CSS personalizados.

---

# Resultado final

No final da aula deverá existir uma estrutura semelhante a:

```text
Ficha-Lab-03/
│
├── index.html
├── style.css
└── images/
```

A página deverá conter:

- imagens;
- legendas;
- uma galeria;
- conteúdo multimédia;
- estilos CSS próprios.

---

# Questões de Reflexão

1. Qual a função do atributo `alt`?
2. Porque é importante utilizar imagens responsivas?
3. Qual a diferença entre JPEG e PNG?
4. Quando faz sentido utilizar SVG?
5. Quais as vantagens de utilizar um vídeo incorporado em vez de alojar o ficheiro localmente?

---

# Objetivo da Ficha

Aprender a integrar imagens e conteúdos multimédia em páginas Web, garantindo uma apresentação visual adequada, acessível e adaptável a diferentes dispositivos.