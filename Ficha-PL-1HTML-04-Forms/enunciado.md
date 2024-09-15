[Voltar](../main.md)
# Ficha PL HTML 04 - Forms

## Intro  
Um formulário é um conjunto de campos de entrada que permitem ao utilizador de um website introduzir informação com o propósito (normalmente) de enviar informação para o servidor.

Por exemplo, no momento de registo de um utilizador num website, é usualmente necessário que o utilizador escolha um *username* e uma *password*. Outro exemplo seria quando queremos deixar uma avaliação associada a um produto - normalmente temos um conjunto de campos de input para indicar a nossa avaliação, eventualmente com um campo de texto livre para comentários.

Nesta ficha, não vamos aprender como enviar os dados para o servidor, mas apenas como construir o conjunto de campos de entrada, dependendo do tipo de dados que queremos obter do utilizador.

Um formulário em HTML é definido dentro do elemento `<form>`. Quase todos os formulários têm um botão para o utilizador submeter os dados depois de os introduzir nos campos. Esse botão é criado com o elemento `<input type="submit">`:

```html
<body>
  <form>

    <input type="submit">
  </form>
</body>
```

O elemento `<input>` é na verdade o elemento mais frequente dentro de um formulário, podendo ter vários usos dependendo do valor do atributo `type`.

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

## Ex 6 
Duplique a sua solução do Ex 5 no ficheiro `ex6.html`. Substitua a entrada de dados de escolha do tipo de almoço por um `<select>`. Veja um exemplo em https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

[Voltar](../main.md)