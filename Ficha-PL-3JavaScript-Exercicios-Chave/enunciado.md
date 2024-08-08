[Voltar](/.tutorial/1.begin.md)
# Ficha PL JavaScript Exercícios-chave



# Ex 1
Crie uma função JavaScript, com nome `addLi`, que adicione um elemento de lista `<li>` a uma lista. A lista deve ser passada como um parâmetro na forma de selector CSS, o valor do novo elemento deve também ser passado.
Use a sua função sobre o HTML da pasta `ex1` da seguinte forma:

```javascript
addLi("ol", "Dois");
addLi("ul", "<a href='#'> Dois </a>");
```

O resultado deverá ser semelhante ao apresentado na Figura 1.

![](assets/fig7.png)
Figura 1


# Ex 2
Implemente o código do script `ex2.js`, de forma a emular o comportamento exemplificado na Figura 2: cliques fazem toggle das áreas.

![](assets/demo.gif)
Figura 2


# Ex 3
Observe o código JavaScript do ficheiro `ex3.js` que faz uma chamada à API RandomUser. A chamada retorna dados de dois utilizadores aleatórios.

Escreva o resto do código para converter o resultado em HTML mostrado no documento HTML:
1. Comece por inspecionar o objecto que resulta da chamada na consola JavaScript e perceba a sua estrutura.
2. Escreva uma função que converte um objecto em HTML 
3. Use essa função para adicionar o HTML ao documento.