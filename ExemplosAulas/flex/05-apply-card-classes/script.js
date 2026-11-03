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

let cardElements = document.querySelectorAll(".task-card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  const element = cardElements[i];

  if (card.done) {
    element.classList.add("completed");
  }

  element.classList.add(card.type);
}

// Alternativa com forEach:
// cards.forEach(function(card, i) {
//   if (card.done) cardElements[i].classList.add("completed");
//   cardElements[i].classList.add(card.type);
// });