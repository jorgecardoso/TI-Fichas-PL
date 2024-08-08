
  let hrefs = document.querySelectorAll("ol li [href]").forEach(el=> {
    let numberOfExercises = Number(el.dataset.count);
    let countElement = document.createElement('span');
    countElement.innerText = 0 + " / " + numberOfExercises;
    el.parentElement.appendChild(countElement);
    
    let key = el.getAttribute('href').replace(/\W/g, '');
     console.log(key)
    fetch("/.service.php?key=" + key ).then(data=>{return data.json()}).then(val=>{
      console.log(key, val, el.dataset.count);
      

      
      
      if (val) {
        if(el.dataset.count && val) {
          console.log(val)
          let counttrue = 0;
          for (const [key, value] of Object.entries(val)) {
            console.log(`${key}: ${value}`);
            if (value == true) counttrue++;
          }
          console.log(counttrue, numberOfExercises)
          countElement.innerText = counttrue + " / " + numberOfExercises;
          if (numberOfExercises <= counttrue) {
            el.parentElement.classList.add('done');

            let d = document.createElement("div");
            d.classList.add("firework");
            el.parentElement.parentElement.parentElement.appendChild(d);
          } else if (counttrue > 0) {
            el.parentElement.classList.add('partial');
          }
        }
      }
    
    }).catch(e=>{});
  });

  