let delay = 0;

document.querySelectorAll("#treino>div:first-child ol li [href]").forEach(el=> {
   setCompletedExercises(el.parentElement, 0);
});

delay = 100;
document.querySelectorAll("#html ol li [href]").forEach(el=> {
   setCompletedExercises(el.parentElement, delay+=100);
});

delay = 1000;
document.querySelectorAll("#css ol li [href]").forEach(el=> {
   setCompletedExercises(el.parentElement, delay+=100);
});

delay = 1500;
document.querySelectorAll("#javascript ol li [href]").forEach(el=> {
   setCompletedExercises(el.parentElement, delay+=100);
});


delay = 2000;
document.querySelectorAll("#php ol li [href]").forEach(el=> {
   setCompletedExercises(el.parentElement, delay+=100);
});



function setCompletedExercises(el, delay) {  // el: <li>
  
  let a = el.querySelector("[href]");
  let key = a.getAttribute('href').replace(/\W/g, '');

  let numberOfExercises = Number(a.dataset.count);
  let countElement = document.createElement('span');
  countElement.innerText = 0 + " / " + numberOfExercises;
  el.appendChild(countElement);
  
  fetch("/.progress/.service.php?key=" + key ).then(data=>{return data.json()}).then(val=>{
    console.log(key, val, a.dataset.count);
    if (val) {
      if(a.dataset.count && val) {
        console.log(val)
        let counttrue = 0;
        for (const [key, value] of Object.entries(val)) {
          console.log(`${key}: ${value}`);
          if (value == true) counttrue++;
        }
        console.log(counttrue, numberOfExercises)
        countElement.innerText = counttrue + " / " + numberOfExercises;
        if (numberOfExercises <= counttrue) {
          el.classList.add('done');

          let d = document.createElement("div");
          d.classList.add("firework");
          console.log(delay);

          setTimeout(function() {
            el.parentElement.parentElement.appendChild(d);
          }, delay);
         
        } else if (counttrue > 0) {
          el.classList.add('partial');
        }
      }
    }
  }).catch(e=>{});
  
}
  