fetch('https://randomuser.me/api/').then(function(data){
  return data.json();
}).then(function(obj) {
  console.log(obj);

  // escreva o código aqui 
});

