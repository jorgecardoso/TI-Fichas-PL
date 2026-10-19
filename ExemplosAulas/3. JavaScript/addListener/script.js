let firstLiEl = document.querySelector("main ul li");

firstLiEl.addEventListener("click", handleClickElOne);

function handleClickElOne(evt) {
  if (firstLiEl.style.backgroundColor == "salmon") {
    firstLiEl.style.backgroundColor = "orangered";  
  } else {
    firstLiEl.style.backgroundColor = "salmon";
  }
  
}

/*

let liEls = document.querySelectorAll("main ul li");

for (let i = 0; i < liEls.length; i++) {
  let el = liEls[i];
  el.addEventListener("click", handleClickEl);
}

function handleClickEl(evt) {
  // this: represents the clicked element
  console.log(this);
  
  if (this.style.backgroundColor == "salmon") {
    this.style.backgroundColor = "orangered";  
  } else {
    this.style.backgroundColor = "salmon";
  }
}



let inputEl = document.querySelector("[name='username']");
inputEl.addEventListener("input", handleInput);
inputEl.addEventListener("change", handleChange);

function handleInput(evt) {
  console.log("input", inputEl.value);
}

function handleChange(evt) {
  console.log("change", inputEl.value);
}*/