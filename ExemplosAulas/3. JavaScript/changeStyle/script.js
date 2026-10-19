let liOneEl = document.querySelector("main ul li:nth-child(1)");
let liTwoEl = document.querySelector("main ul li:nth-child(2)");
let liThreeEl = document.querySelector("main ul li:nth-child(3)");
let liFourEl = document.querySelector("main ul li:nth-child(4)");

liOneEl.addEventListener("click", handleClickElOne);

function handleClickElOne(evt) {
  console.log("click on one");
  if (liOneEl.style.backgroundColor == "salmon") {
    liOneEl.style.backgroundColor = "orangered";  
  } else {
    liOneEl.style.backgroundColor = "salmon";
  }  
}


liTwoEl.addEventListener("click", handleClickElTwo);

function handleClickElTwo(evt) {
  console.log("click on two");
  //get header
  let headerEl = document.querySelector("header");

  if (headerEl.style.visibility == "visible") {
    headerEl.style.visibility = "hidden";
  } else {
    headerEl.style.visibility = "visible";
  }
}



liThreeEl.addEventListener("click", handleClickElThree);

function handleClickElThree(evt) {
  console.log("click on three")
  //get header
  let headerEl = document.querySelector("header");

  if (headerEl.style.display == "none") {
    headerEl.style.display = "block";
  } else {
    headerEl.style.display = "none";
  }
}


liFourEl.addEventListener("click", handleClickElFour);

function handleClickElFour(evt) {
  console.log("click on four")
  //get header
  let headerEl = document.querySelector("header");
  
    headerEl.style.cssText = "border: 1px solid red; color: white";
}
