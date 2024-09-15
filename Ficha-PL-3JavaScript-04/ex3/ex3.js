fetch('https://randomuser.me/api/?results=2').then(function(data){
  return data.json();
}).then(function(obj) {
  console.log(obj);

  // invoque aqui uma função para converter o obj em HTML 
});

