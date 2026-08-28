# Ficha Lab 11
# Objetos JavaScript e JSON

## Objetivos

No final desta aula deverá ser capaz de:

- Criar objetos JavaScript.
- Aceder a propriedades de objetos.
- Utilizar arrays de objetos.
- Percorrer estruturas de dados complexas.
- Representar informação em formato JSON.
- Converter entre objetos JavaScript e JSON.
- Gerar conteúdo HTML a partir de dados estruturados.

---

# Contexto

Pretende-se desenvolver uma pequena aplicação para apresentar informação sobre cursos de formação.

A informação será armazenada em objetos JavaScript e posteriormente convertida para JSON.

---

# Parte 1. Objetos JavaScript

## Exercício 1

Crie um objeto que represente um curso.

O objeto deve conter:

- nome;
- área;
- duração;
- número de vagas.

Exemplo:

```javascript
const curso = {
    nome: "Desenvolvimento Web",
    area: "Informática",
    duracao: 40,
    vagas: 20
};
```

---

## Exercício 2

Apresente na consola os valores das propriedades do objeto.

Experimente diferentes formas de acesso às propriedades.

---

# Parte 2. Arrays de Objetos

## Exercício 3

Crie um array contendo pelo menos cinco cursos.

Cada curso deve ser representado por um objeto.

---

## Exercício 4

Utilize um ciclo para percorrer todos os cursos.

Apresente na consola:

```text
Nome
Área
Duração
```

de cada curso.

---

## Exercício 5

Crie dinamicamente um cartão HTML para cada curso.

Cada cartão deve apresentar:

- nome;
- área;
- duração;
- vagas.

---

# Parte 3. Estruturas de Dados

## Exercício 6

Adicione novas propriedades aos cursos.

Por exemplo:

```javascript
{
    nome: "...",
    area: "...",
    duracao: 40,
    vagas: 20,
    online: true
}
```

Apresente essa informação nos cartões.

---

## Exercício 7

Utilize uma estrutura condicional para destacar cursos online.

Sugestão:

- adicionar uma classe CSS específica;
- apresentar uma etiqueta "Online".

---

# Parte 4. Introdução ao JSON

## Exercício 8

Crie uma variável contendo uma representação JSON de um curso.

Exemplo:

```json
{
    "nome": "Desenvolvimento Web",
    "area": "Informática",
    "duracao": 40
}
```

Compare a sintaxe com a utilizada nos objetos JavaScript.

---

## Exercício 9

Utilize:

```javascript
JSON.stringify()
```

para converter um objeto JavaScript para JSON.

Apresente o resultado na consola.

---

## Exercício 10

Utilize:

```javascript
JSON.parse()
```

para converter novamente o JSON para um objeto JavaScript.

Verifique que as propriedades podem voltar a ser utilizadas normalmente.

---

# Parte 5. Integração

## Exercício 11

Crie um array de objetos JavaScript.

Converta esse array para JSON utilizando:

```javascript
JSON.stringify()
```

Apresente o resultado formatado na consola.

---

## Exercício 12

Utilize os objetos originais para gerar dinamicamente uma lista ou grelha de cursos na página.

Toda a informação apresentada deve ser obtida a partir dos objetos JavaScript.

---

# Desafio

Adicione uma propriedade:

```javascript
modulos
```

contendo um array de módulos do curso.

Exemplo:

```javascript
{
    nome: "Desenvolvimento Web",
    modulos: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
}
```

Apresente também esses módulos na página.

---

# Checklist Final

- [ ] Criação de objetos JavaScript.
- [ ] Utilização de arrays de objetos.
- [ ] Percurso de estruturas de dados com ciclos.
- [ ] Criação dinâmica de conteúdo HTML.
- [ ] Utilização de propriedades de objetos.
- [ ] Conversão para JSON com `JSON.stringify()`.
- [ ] Conversão para objetos com `JSON.parse()`.
- [ ] Geração de conteúdo a partir de dados