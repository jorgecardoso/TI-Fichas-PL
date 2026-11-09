let persons = [
  { image: "images/person-01.svg", name: "Ana Martins", title: "Designer", empregadodomes: false },
  { image: "images/person-02.svg", name: "Bruno Costa", title: "Programador" },
  { image: "images/person-03.svg", name: "Carla Sousa", title: "Professora" },
  { image: "images/person-04.svg", name: "Diogo Alves", title: "Fotógrafo", empregadodomes: true },
  { image: "images/person-05.svg", name: "Eva Ferreira", title: "Investigadora" },
  { image: "images/person-06.svg", name: "Filipe Rocha", title: "Arquiteto" },
  { image: "images/person-07.svg", name: "Inês Lopes", title: "Ilustradora" },
  { image: "images/person-08.svg", name: "João Silva", title: "Músico" },
];

let peopleGrid = document.querySelector("#people-grid");

for (let i = 0; i < persons.length; i++) {
  let person = persons[i];

  let personElement = document.createElement("div");

  personElement.classList.add("person");

  if (person.empregadodomes) {
    personElement.classList.add("highlight");
  }

  let imageElement = document.createElement("img");
  imageElement.src = person.image;
  imageElement.alt = `Retrato ilustrado de ${person.name}`;

  let nameElement = document.createElement("span");
  nameElement.classList.add("person-name")
  nameElement.textContent = person.name;

  let titleElement = document.createElement("span");
  titleElement.classList.add("person-title");
  titleElement.textContent = person.title;

  //Criar o elemento da pessoa, juntando as peças: imagem, nome e título
  personElement.append(imageElement, nameElement, titleElement);


  //Adicionar o elemento da pessoa à grelha
  peopleGrid.append(personElement);
}
