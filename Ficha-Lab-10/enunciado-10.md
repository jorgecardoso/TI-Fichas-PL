# Ficha Lab 10
# Transições, Animações e Conteúdo Dinâmico

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

Utilize pelo menos três dos seguintes seletores:

```css
:first-child
:last-child
:nth-child()
:not()
```

Observe o efeito produzido nos elementos da página.

---

# Parte 5. Conteúdo Dinâmico

## Exercício 8

Crie um array de objetos contendo pelo menos cinco produtos.

Exemplo:

```javascript
{
    nome: "Portátil",
    categoria: "Computadores",
    preco: 999
}
```

---

## Exercício 9

Crie dinamicamente os cartões de produto a partir do array.

Os cartões devem ser adicionados ao contentor principal utilizando JavaScript.

---

## Exercício 10

Adicione um botão com o texto:

```text
Adicionar Produto
```

Quando pressionado, deve ser criado dinamicamente um novo cartão de produto.

---

# Parte 6. Manipulação do DOM

## Exercício 11

Adicione um botão com o texto:

```text
Remover Último Produto
```

Quando pressionado, o último cartão apresentado deve ser removido da página.

---

## Exercício 12

Crie um contador que apresente o número total de produtos atualmente visíveis.

O contador deve atualizar-se automaticamente quando produtos são adicionados ou removidos.

---

# Desafio

Crie um efeito em que os novos cartões:

- apareçam com uma animação de entrada;
- utilizem simultaneamente CSS Animation e JavaScript.

---

# Checklist Final

- [ ] Utilização de transições CSS.
- [ ] Utilização de transformações CSS.
- [ ] Criação de animações com `@keyframes`.
- [ ] Utilização de seletores CSS avançados.
- [ ] Criação dinâmica de elementos HTML.
- [ ] Utilização de arrays de objetos.
- [ ] Adição dinâmica de elementos.
- [ ] Remoção dinâmica de elementos.
- [ ] Atualização dinâmica de informação na página.