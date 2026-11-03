let cards = [
  { done: true, type: "work" },
  { done: false, type: "study" },
  { done: false, type: "work" },
  { done: true, type: "study" },
  { done: false, type: "study" },
  { done: true, type: "personal" },
  { done: false, type: "work" },
  { done: false, type: "study" },
  { done: true, type: "personal" },
  { done: false, type: "work" },
  { done: false, type: "study" },
  { done: true, type: "personal" }
];

// O índice do objeto corresponde ao cartão HTML com o mesmo índice.
for (let i = 0; i < cards.length; i++) {
  console.log(i, cards[i].type, cards[i].done);
  
}

// Alternativa: forEach percorre os elementos sem gerir o índice.
// cards.forEach(function(card, i) {
//   console.log(i, card.type, card.done);
// });