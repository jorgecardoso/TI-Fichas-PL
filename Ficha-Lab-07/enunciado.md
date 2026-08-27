# Tecnologias Web
## Ficha Laboratorial 7: Layouts com Flexbox

### Objetivos

No final desta aula deverá ser capaz de:

- Utilizar Flexbox para construir layouts modernos.
- Compreender os conceitos de eixo principal e eixo secundário.
- Controlar alinhamento e distribuição de elementos.
- Criar menus de navegação com Flexbox.
- Construir grelhas simples de cartões.
- Aplicar JavaScript a interfaces construídas com Flexbox.
- Utilizar arrays para gerar conteúdo dinâmico.

---

# Contexto

Nesta ficha irá construir a homepage de uma instituição fictícia.

A página deverá incluir:

- cabeçalho;
- menu de navegação;
- secção de destaques;
- conjunto de cartões informativos;
- rodapé.

Todo o layout será construído utilizando **Flexbox**.

---

# Preparação

Crie uma pasta para esta ficha:

```text
lab07/
│
├── index.html
├── style.css
└── script.js
```

---

# 1. Estrutura da Página

Crie uma página contendo a seguinte estrutura:

```text
+-----------------------------+
| Header                      |
+-----------------------------+
| Navigation                  |
+-----------------------------+
| Destaque Principal          |
+-----------------------------+
| Card | Card | Card          |
+-----------------------------+
| Footer                      |
+-----------------------------+
```

Utilize elementos semânticos adequados.

---

# 2. Primeiro Container Flex

Crie uma secção contendo três blocos.

Exemplo:

```html
<div class="container">
    <div>Bloco 1</div>
    <div>Bloco 2</div>
    <div>Bloco 3</div>
</div>
```

Utilize:

```css
display: flex;
```

### Exercício

Observe a diferença entre:

```css
display: block;
```

e

```css
display: flex;
```

---

# 3. Direção dos Elementos

Experimente:

```css
flex-direction: row;
```

```css
flex-direction: column;
```

### Exercício

Registe as diferenças observadas.

---

# 4. Distribuição de Espaço

Experimente diferentes valores para:

```css
justify-content
```

Por exemplo:

```css
justify-content: flex-start;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

### Exercício

Observe como os elementos são distribuídos ao longo do eixo principal.

---

# 5. Alinhamento no Eixo Secundário

Experimente:

```css
align-items
```

Por exemplo:

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
```

### Exercício

Observe o posicionamento dos elementos.

---

# 6. Criar um Menu de Navegação

Construa um menu semelhante ao seguinte:

```text
Início    Serviços    Projetos    Contactos
```

Utilize:

```css
display: flex;
```

para posicionar os itens lado a lado.

### Desafio

Distribua os itens uniformemente ao longo da largura disponível.

---

# 7. Construir Cartões de Informação

Crie três cartões:

```text
+----------------+
| Curso          |
| Descrição      |
+----------------+

+----------------+
| Investigação   |
| Descrição      |
+----------------+

+----------------+
| Eventos        |
| Descrição      |
+----------------+
```

Apresente-os numa única linha utilizando Flexbox.

---

# 8. Permitir Quebrar Linhas

Experimente:

```css
flex-wrap: wrap;
```

Reduza a largura da janela do navegador e observe o comportamento.

### Questão

O que acontece aos cartões quando o espaço disponível deixa de ser suficiente?

---

# 9. Utilizar Arrays em JavaScript

Crie um array contendo nomes de secções.

Exemplo:

```javascript
const secoes = [
    "Cursos",
    "Projetos",
    "Eventos",
    "Investigação"
];
```

Apresente o array na consola.

---

# 10. Percorrer um Array

Utilize um ciclo para percorrer os elementos.

Exemplo:

```javascript
for (const secao of secoes) {
    console.log(secao);
}
```

### Exercício

Mostre todos os elementos na consola.

---

# 11. Gerar Cartões Dinamicamente

Crie um contentor vazio:

```html
<div id="cards"></div>
```

Utilize o array anterior para criar dinamicamente cartões.

Cada cartão deverá conter:

- um título;
- um pequeno texto.

Exemplo:

```text
+----------------+
| Cursos         |
| Informação...  |
+----------------+
```

Os cartões devem ser adicionados à página através de JavaScript.

---

# 12. Aplicar Flexbox aos Cartões Dinâmicos

Aplique Flexbox ao contentor dos cartões.

Objetivo:

```text
+------+ +------+ +------+
|Card  | |Card  | |Card  |
+------+ +------+ +------+
```

Quando a largura da janela diminuir, os cartões deverão reorganizar-se automaticamente.

---

# Desafio

Crie uma homepage institucional contendo:

- menu Flexbox;
- secção principal;
- cartões gerados dinamicamente através de JavaScript;
- rodapé.

Todos os cartões devem ser construídos a partir de um array JavaScript.

---

# Entrega

A pasta deverá apresentar a seguinte estrutura:

```text
lab07/
│
├── index.html
├── style.css
└── script.js
```

A página deverá demonstrar:

- utilização de Flexbox;
- alinhamento e distribuição de elementos;
- utilização de arrays;
- criação dinâmica de conteúdo.

---

# Questões de Reflexão

1. Qual a diferença entre `flex-direction: row` e `flex-direction: column`?
2. Qual a função de `justify-content`?
3. Qual a função de `align-items`?
4. Para que serve `flex-wrap`?
5. Quais as vantagens de gerar conteúdo a partir de arrays?

---

