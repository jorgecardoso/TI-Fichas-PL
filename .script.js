// get state of all exercises
let key = window.location.pathname.replace(/\W/g, '');
let state = {};
fetch("/.service.php?key=" + key ).then(data=>{return data.json()}).then(val=>{
  console.log("received state: ", val);
  if (val)  state = val;
  /*if (val.trim() === 'true') {
    console.log(el)
    el.parentElement.querySelector('input[type=checkbox]').checked=true;
  }*/


  let hrefs = document.querySelectorAll("ol li [href]").forEach(el=> {
    let check = document.createElement('input');
    check.type= 'checkbox';
    el.parentElement.appendChild(check);
    let key = el.getAttribute('href').replace(/\W/g, '');
    if (state[key]) {
      console.log(state[key])
       if (state[key] )
       {
         el.parentElement.querySelector('input[type=checkbox]').checked=true;
         el.parentElement.classList.add('done');
       }
    }
   
    
    /*console.log(key)
    fetch("/.service.php?key=" + key ).then(data=>{return data.text()}).then(val=>{
      console.log(val.trim());
      if (val.trim() === 'true') {
        console.log(el)
        el.parentElement.querySelector('input[type=checkbox]').checked=true;
      }
    })*/
  });

    let checkboxes = document.querySelectorAll('input[type=checkbox]').forEach(el=>{
      el.addEventListener('input', function(evt){
        if (el.checked) {
           el.parentElement.classList.add('done');
        } else {
           el.parentElement.classList.remove('done');
        }
        
        let localkey = el.parentElement.querySelector('[href]').getAttribute('href').replace(/\W/g, '');
        //let key = new URL(el.parentElement.querySelector("[href]")).pathname.replace(/\W/g, '');
        state[localkey] = el.checked;
        console.log(state);
        fetch("/.service.php?key=" + encodeURI(key) + "&value=" + JSON.stringify(state));
      })
    });
  
});
