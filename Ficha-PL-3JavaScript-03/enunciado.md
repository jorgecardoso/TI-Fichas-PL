[Voltar](/.tutorial/1.begin.md)
# Ficha PL JavaScript

## Intro

**Estruture a suas soluções em pastas para cada exercício. Para cada exercício deve criar uma pasta (`ex1`, `ex2`, `ex3`, etc.) e colocar dentro dessa pasta um ficheiro html (`ex1.html`, `ex2.html`, `ex3.html`, etc.) e outros ficheiros necessários (por exemplo, CSS).**

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor uma vez que este tem bugs.__

--- 

## Ex 0
Crie um objeto carro que contenha informações sobre um carro, como a marca, o modelo e o ano. Em seguida, crie uma função que exiba essas informações no console.

Passos:
1. Crie um objeto chamado carro com as seguintes propriedades:
  - marca: String representando a marca do carro.
  - modelo: String representando o modelo do carro.
  - ano: Número representando o ano do carro.
1. Crie uma função chamada mostrarInfoCarro que, ao ser chamada, exiba no console as informações do carro em formato legível.
1. Chame a função mostrarInfoCarro para exibir as informações.

```javascript
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
```

Saída esperada:
```javascript
Carro: Toyota Corolla, Ano: 2020
```
## Ex 1 
Dado o seguinte código JavaScript (deve copiar este código para o início do seu ficheiro JavaScript):
```js
let rafael = {
	age: 16,
	name: "Rafael",
	sports: [
		{ name: "hockey", days: ["monday", "thursday"] },
		{ name: "basketball", days: ["tuesday", "saturday"] },
            { name: "football", days: ["wednesday", "sunday"] }
	]
};
```


Escreva a instrução que obtém, do objecto JavaScript, o nome do terceiro desporto praticado pelo Rafael.
Use `console.log` para mostrar esse valor na consola.


## Ex 2
Copie o código do exercício anterior e adicione um outro objecto com uma estrutura semelhante, e.g.:
```js
let jorge = {
  age: 24,
  name: "Jorge",
  sports: [<preencher com alguns desportos>]
}
```

Crie depois uma função `toHTML(object)` que recebe como parâmetro um objecto e o representa como HTML. A função deverá retornar uma `<div>` :

```js
function toHTML(object) {
   // o seu código aqui
  
  return mainDiv;
}
```
Use esta função para adicionar as representações HTML dos dois objectos ao documento HTML:

```javascript
document.body.appendChild(toHTML(rafael));
document.body.appendChild(toHTML(jorge));
```

## Ex 3
Observe o código JavaScript do ficheiro `ex3.js` que faz uma chamada à API RandomUser. A chamada retorna dados de *um* utilizador aleatório (mas note que o resultado vem dentro de um array).

Escreva código para mostrar na consola:
1. O género do utilizador
2. O nome completo (título, primeiro, último nomes)
3. A idade
4. O URL da imagem de retrato, em tamanho _thumbnail_


[Voltar](/.tutorial/1.begin.md)
