
  let hrefs = document.querySelectorAll("ol li [href]").forEach(el=> {
    
    
    let key = el.getAttribute('href').replace(/\W/g, '');
     console.log(key)
    fetch("/.service.php?key=" + key ).then(data=>{return data.json()}).then(val=>{
      console.log(key, val, el.dataset.count);
      let numberOfExercises = Number(el.dataset.count);
      if (val) {
        if(el.dataset.count && val) {
          console.log(val)
          let counttrue = 0;
          for (const [key, value] of Object.entries(val)) {
            console.log(`${key}: ${value}`);
            if (value == true) counttrue++;
          }
          console.log(counttrue, numberOfExercises)
          if (numberOfExercises <= counttrue) {
            el.parentElement.classList.add('done');
          }
        }
      }
    
    }).catch(e=>{});
  });

  