# Ficha Laboratorial 4: Formulários e Interação

## Objetivos

No final desta aula deverá ser capaz de:

- Criar formulários HTML.
- Utilizar os elementos de formulário mais comuns.
- Associar eventos JavaScript a formulários.
- Obter valores introduzidos pelo utilizador.
- Utilizar estruturas condicionais simples.
- Modificar a página em resposta à interação do utilizador.

---

# Contexto

Pretende-se desenvolver uma pequena página de registo para um evento.

A página deverá recolher informações do utilizador e apresentar uma mensagem personalizada.

---

# Preparação

Crie uma pasta para esta ficha:

```text
Ficha-Lab-04/
│
├── index.html
├── style.css
└── script.js
```

__Nota:__ A partir de agora, que já sabe como criar manualmente um _esqueleto_ de um site, associando três ficheiros (`HTML`, `CSS` e `JavaScript`), pode agilizar este passo usando IA: 
1. Abra o painel dos agentes de IA do lado direito
2. Use o IAEdu (OpenAI GPT), ou outro chat de IA que tenha configurado no VSCode, e escreva uma prompt do género:
    > Cria os 3 ficheiros html, css, e javascript para um site sem conteúdo, dentro da pasta Ficha-Lab-04.
3. Verifique sempre o código resultante antes de continuar.
---

# 1. Estrutura do Formulário

Crie uma página contendo um formulário com os seguintes campos:

- Nome
- Email
- Idade

Todos os campos devem possuir uma etiqueta (`label`) associada.

Exemplo:

```html
<label for="nome">Nome</label>
<input type="text" id="nome">
```

---

# 2. Botão de Submissão

Adicione um botão ao formulário.

```html
<button type="submit">
    Submeter
</button>
```

Adicione também uma área vazia para apresentar resultados.

```html
<div id="resultado"></div>
```

---

# 3. Ler Dados do Formulário

Associe um evento de submissão ao formulário.

Quando o utilizador clicar em **Submeter**:

- impedir a submissão normal do formulário;
- obter os valores dos campos;
- escrever os valores na consola.

Exemplo de resultado:

```text
Nome: Ana
Email: ana@email.pt
Idade: 20
```

---

# 4. Apresentar uma Mensagem Personalizada

Utilize JavaScript para apresentar uma mensagem dentro do elemento:

```html
<div id="resultado"></div>
```

Exemplo:

```text
Olá Ana!

Obrigado pela sua inscrição.
```

---

# 5. Utilizar Variáveis

Guarde os valores introduzidos pelo utilizador em variáveis.

Exemplo:

```javascript
let nome = ...
let email = ...
let idade = ...
```

Construa a mensagem utilizando essas variáveis.

---

# 6. Utilizar Condicionais

Acrescente uma condição baseada na idade.

Se a idade for inferior a 18 anos:

```text
Participação sujeita a autorização.
```

Caso contrário:

```text
Inscrição aceite.
```

Utilize uma estrutura:

```javascript
if (...) {

}
else {

}
```

---

# 7. Alterar Estilos Dinamicamente

Dependendo do resultado da validação:

- mostrar a mensagem a verde para participantes adultos;
- mostrar a mensagem a laranja para participantes menores.

Exemplo:

```javascript
resultado.style.color = "green";
```

---

# 8. Validar Campos

Antes de processar a inscrição, verifique se todos os campos possuem conteúdo.

Caso algum campo esteja vazio:

```text
Por favor preencha todos os campos.
```

Mostre a mensagem na página.

---

# 9. Melhorar o Formulário

Utilize tipos adequados para os campos.

Exemplos:

```html
<input type="email">
```

```html
<input type="number">
```

Teste o comportamento do navegador.

---

# 10. Criar Elementos Dinamicamente

Em vez de substituir texto existente, crie um novo elemento HTML através de JavaScript.

Exemplo:

```javascript
const p = document.createElement("p");
```

Adicione esse elemento à página para apresentar a mensagem final.

---

# Desafio

Adicione um novo campo:

```text
Área de Interesse
```

Utilize uma lista de seleção (`select`) com opções como:

- Web Design
- Programação
- Inteligência Artificial
- Multimédia

A mensagem apresentada deverá incluir a opção selecionada.

Exemplo:

```text
Olá Ana!

Obrigado pela sua inscrição em Programação.
```

---

# Entrega

A pasta deverá apresentar a seguinte estrutura:

```text
lab04/
│
├── index.html
├── style.css
└── script.js
```

A página deverá:

- conter um formulário funcional;
- ler os dados introduzidos pelo utilizador;
- apresentar uma mensagem personalizada;
- utilizar JavaScript para processar a informação.

Screenshot exemplo:
![Figura 1](../.assets/images/ficha4-screenshot.png)
---

# Questões de Reflexão

1. Qual a função do elemento `<form>`?
2. Qual a diferença entre um `label` e um `input`?
3. Porque é importante validar os dados introduzidos pelo utilizador?
4. O que acontece quando um evento de submissão é desencadeado?
5. Como pode o JavaScript modificar uma página já carregada?

---

# Objetivo da Ficha

Compreender como recolher informação introduzida pelo utilizador e utilizar JavaScript para processar essa informação, produzindo páginas Web interativas e personalizadas.










---
---
# Exercícios Extra
---
---







## Ex 1

Ao `<form>` existente no documento `ex1.html`, acrescente um campo de input para o nome do utilizador:

```html
<input type="text" name="nome">
```

Atenção: O atributo `name` é apenas usado para o envio dos dados para o servidor. Visualmente não tem impacto, mas é boa prática incluí-lo desde já. 

- Acrescente o HTML do `<input>` ao `ex1.html` e verifique o resultado.
  - Introduza um valor no campo e clique em `submit`.
  - Verifique que o endereço na barra de endereços do seu browser mostra os dados introduzidos, na forma `nome=valor`.

## Ex 2
Imagine que queria garantir que o utilizador introduzia um valor no campo *nome*, isto é, que o utilizador não conseguia submeter um nome vazio. 

- No documento `ex2.html`, acrescente o `<input>` para o nome tal como no `ex1.html` e depois acrescente um atributo `required` ao campo.
- Tente submeter o formulário sem preencher o campo. O que acontece? Responda no ficheiro `respostas.txt`


## Ex 3

O formulário anterior não é claro quanto ao significado do campo de texto. É comum os campos do formulário terem descrições associadas. Estas descrições são definidas através do elemento `<label>`:

```html
<label for="nome">Nome:</label>    
<input id="nome" type="text" name="nome" required>
```

O elemento `<label>` tem um atributo `for` que relaciona a descrição com o campo de input. O valor de `for` deve ser igual ao `id` atribuido ao campo de input. 

**Nota:** É normal os atributos `id` e `name` do `<input>` ser iguais. Estes atributos têm propósitos diferentes. 

- No documento `ex3.html` adicione um campo de input (`<input type="text">`) e respectiva descrição (`<label>`) ao formulário para introdução do email do utilizador.

## Ex 4
Existem vários outros tipos de input, que fornecem automaticamente alguma validação de dados de entrada e que facilitam a entrada de dados pelo utilizador. Dependendo do tipo de dados necessário, o input certo pode facilitar a entrada de dados ajustando, por exemplo, o teclado do dispositivo móvel em que a página está a ser visualizada.

- Veja em https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input a lista de tipos de `<input>`.
- Reproduza o formulário do Ex 3, no ficheiro `ex4.html`, mas corrija o tipo de `<input>` do campo email, de forma a que o browser faça uma validação do conteúdo do campo.
- Adicione um campo para introdução da password. Que tipo de `<input>` deve usar neste caso?
- Adicione um campo para introduzir a idade do utilizador. Que tipo de `<input>` deve usar neste caso?
  - Visualize a página num smartphone e compare a introdução de dados nos campos. Que diferenças encontra? Responda no ficheiro `respostas.txt`

**Nota:** Deve ter reparado que os campos do formulário são apresentados todos na mesma linha. Nesta fase não se deve preocupar com a aparência do formulário, apenas com a funcionalidade.

## Ex 5
Copie a sua solução do Ex 4 para o ficheiro `ex5.html` e acrescente:
- Um conjunto de campos para introdução de um conjunto de preferências binárias do utilizador (sim/não). Leia em https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input como usar o tipo de campo `checkbox` e aplique-o para criar as seguintes opções:
  - Gosta de viajar:
  - Gosta de ir ao cinema:
  - Gosta de ler:
- Um conjunto de campos para o utilizador indicar uma única opção entre várias possíveis. Procure na documentação como usar o tipo de input `radio` para criar a seguinte entrada de dados:
  - Que tipo de prato prefere para o almoço:
    - Carne
    - Peixe
    - Vegetariano
