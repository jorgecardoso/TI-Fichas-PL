# Intro


__Estruture a suas soluções em pastas para cada exercício.__

__Use o preview em novo tab para verificar o seu trabalho. Não use o preview embebido no editor.__

--------


# Ex 1 
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


# Ex 2
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
function to HTML(object) {
   // o seu código aqui
  
  return mainDiv;
}
```
    

Use esta função para adicionar as representações HTML dos dois objectos ao documento HTML.

