# Ficha Laboratorial 10: Transições, Animações e Conteúdo Dinâmico

## Objetivos

No final desta aula deverá ser capaz de:

- Aplicar transições CSS.
- Criar animações CSS simples.
- Utilizar transformações CSS.
- Aplicar seletores CSS mais avançados.
- Criar elementos HTML dinamicamente.
- Utilizar objetos JavaScript para representar informação.
- Adicionar e remover elementos da página através de JavaScript.

---

# Contexto

Pretende-se enriquecer visualmente o catálogo desenvolvido nas fichas anteriores, adicionando animações e efeitos visuais. Além disso, o conteúdo do catálogo será gerado dinamicamente através de JavaScript.

---


# Preparação

Copie os ficheiros da Ficha-Lab-09 para esta ficha:

```text
Ficha-Lab-10/
│
├── index.html
├── style.css
└── script.js
```


# Parte 1. Transições CSS

## Exercício 1

Selecione os cartões de produto existentes e aplique uma transição suave a uma propriedade visual da sua escolha.

Experimente propriedades como:

```css
background-color
color
transform
box-shadow
```

---

## Exercício 2

Quando o utilizador passar o rato sobre um cartão (`hover`):

- altere a sua aparência visual;
- utilize a transição criada anteriormente para suavizar a alteração.

---

# Parte 2. Transformações

## Exercício 3

Utilize a propriedade:

```css
transform
```

para criar um efeito visual quando o cursor passa sobre um cartão.

Experimente:

```css
scale()
rotate()
translate()
```

---

## Exercício 4

Crie um botão com um efeito visual ao passar o rato.

Combine:

- `transform`
- `transition`

---

# Parte 3. Animações CSS

## Exercício 5

Crie uma animação utilizando:

```css
@keyframes
```

que altere uma propriedade visual ao longo do tempo.

Exemplos:

- opacidade;
- cor;
- posição.

---

## Exercício 6

Aplique a animação criada ao cabeçalho da página ou a um elemento promocional.

Experimente diferentes valores para:

```css
animation-duration
animation-iteration-count
animation-delay
```

---

# Parte 4. Seletores CSS Avançados

## Exercício 7

Utilize pelo menos três dos seguintes seletores na página do catálogo:

```css
:first-child
:last-child
:nth-child()
:not()
```

Aplica estes seletores aos elementos da grelha de produtos, por exemplo:

- o primeiro cartão da grelha deve ter um destaque visual;
- o último cartão da lista pode ter uma margem ou uma cor diferente;
- os cartões em posições pares ou ímpares podem ter estilos distintos;
- todos os cartões que não sejam "destaque" podem receber uma aparência base.

Exemplo de aplicação:

```css
.produto:first-child {
    border-top: 4px solid #2563eb;
}

.produto:last-child {
    margin-bottom: 0;
}

.produto:nth-child(even) {
    background: #f8fafc;
}

.produto:not(.produto-destaque) {
    opacity: 0.96;
}
```

Experimente observar o efeito produzido nos cartões do catálogo e escolha os estilos que ache mais interessantes.

---

# Parte 5. Conteúdo Dinâmico e Carregamento Assíncrono

## Exercício 8

Simule o carregamento de produtos a partir de uma API remota, sem usar um array local imediatamente disponível.

Use uma função em JavaScript que:

- aguarda alguns segundos antes de devolver os dados dos produtos;
- em vez de mostrar os cartões imediatamente, apresenta um skeleton de cartão enquanto os dados estão a carregar;
- quando os produtos chegarem, substitui os skeletons pelos cartões reais do catálogo.

Pense na seguinte sequência:

1. ao carregar a página, o conteúdo ainda não está disponível;
2. mostra-se um placeholder visual do tipo "cartão em carregamento";
3. após um pequeno atraso, o código simula a resposta da API;
4. cada produto é renderizado dinamicamente no contentor principal;
5. o skeleton desaparece e o conteúdo real ocupa o seu lugar.

Exemplo de ideia:

```javascript

function renderizarProduto(produto) {
  // codigo para renderizar HTML do produto
}

function carregarProdutosUmAUm() {
    const produtos = [
        { nome: "Portátil", categoria: "Computadores", preco: 999 },
        { nome: "Tablet", categoria: "Computadores", preco: 499 },
        { nome: "Monitor", categoria: "Periféricos", preco: 199 }
    ];

    produtos.forEach((_, i) => {
        setTimeout(() => {
            const card = document.querySelectorAll(".skeleton")[0];
            if (card) card.remove();

            renderizarProduto(produtos[i]);
        }, i * 2000);
    });
}
```

Neste exemplo, cada produto é "carregado" com um atraso de 2 segundos, como se estivesse a chegar de uma API remota. 

Crie também um estilo para o skeleton, por exemplo:

```css
.skeleton {
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: shimmer 1.2s infinite;
}


@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
```

Atenção:

- o skeleton deve representar a estrutura do cartão;
- o conteúdo real deve substituir o placeholder quando os dados estiverem disponíveis;
- o efeito deve parecer uma carregamento realista, como se os dados estivessem a chegar de uma API.

---

## Exercício 9

Adicione um botão com o texto:

```text
Adicionar Produto
```

Quando pressionado, deve ser criado dinamicamente um novo cartão de produto.

Para tornar o exercício mais interessante, pode simular que a adição também tem um pequeno carregamento, mostrando novamente um skeleton antes de apresentar o novo produto.

---

# Parte 6. Manipulação do DOM

## Exercício 10

Adicione um botão com o texto:

```text
Remover Último Produto
```

Quando pressionado, o último cartão apresentado deve ser removido da página.

---

## Exercício 11

Crie um contador que apresente o número total de produtos atualmente visíveis.

O contador deve atualizar-se automaticamente quando produtos são adicionados ou removidos.

---



# Resultado final

A pasta deverá apresentar a seguinte estrutura:

```text
Ficha-Lab-09/
│
├── index.html
├── style.css
└── script.js
```

A página deverá demonstrar:

- [ ] Utilização de transições CSS.
- [ ] Utilização de transformações CSS.
- [ ] Criação de animações com `@keyframes`.
- [ ] Utilização de seletores CSS avançados.
- [ ] Criação dinâmica de elementos HTML.
- [ ] Utilização de arrays de objetos.
- [ ] Adição dinâmica de elementos.
- [ ] Remoção dinâmica de elementos.
- [ ] Atualização dinâmica de informação na página.

Screenshot exemplo:
![Figura 1](../.assets/images/ficha10-screenshot.png)


## Exercícios extras sugeridos
- [OutrosExercicios/Ficha-PL-2CSS-03-Transicoes/enunciado.md](/OutrosExercicios/Ficha-PL-2CSS-03-Transicoes/enunciado.md): Ex 1, Ex 2, Ex 3
- [OutrosExercicios/Ficha-PL-2CSS-05-Animacoes/enunciado.md](/OutrosExercicios/Ficha-PL-2CSS-05-Animacoes/enunciado.md): Ex 0, Ex 1, Ex 2