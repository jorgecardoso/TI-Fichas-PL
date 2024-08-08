// add checkboxes
let hrefs = document.querySelectorAll("ol li [href]").forEach(el => {
  let check = document.createElement('input');
  check.type= 'checkbox';
  el.parentElement.appendChild(check);
});

  
// get state of all exercises
let key = window.location.pathname.replace(/\W/g, '');
let state = {};
fetch("/.service.php?key=" + key)
  .then(response => response.json()).then(val=>{
    console.log("received state: ", val);
    if (val && typeof val === 'object') state = val;
    document.querySelectorAll("ol li [href]").forEach(el=> {
      let check = el.querySelector('input');
      let localkey = el.getAttribute('href').replace(/\W/g, '');
      if (state[localkey]) {
        el.parentElement.querySelector('input[type=checkbox]').checked=true;
        el.parentElement.classList.add('done');
      }
    });
  }).catch(function(err){
      console.log(err);
});

document.querySelectorAll('input[type=checkbox]').forEach(el=>{
  el.addEventListener('input', function(evt){
    if (el.checked) {
      el.parentElement.classList.add('done');
    } else {
      el.parentElement.classList.remove('done');
    }
      
    let localkey = el.parentElement.querySelector('[href]').getAttribute('href').replace(/\W/g, '');
    state[localkey] = el.checked;
    console.log("New state: ", state);
    fetch("/.service.php?key=" + encodeURI(key) + "&value=" + JSON.stringify(state));
  });
});
  

