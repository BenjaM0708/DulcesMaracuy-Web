//Variables

const { createElement } = require("react");

const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const photoArray = document.querySelectorAll(".photo-carrusel");
const dotIndicator = document.getElementById('indicator-dot');

//Slider

let count = 0;

sliderPrev.addEventListener("click", () =>{

  if(count > 0){
    for(let i=0; i < photoArray.length; i++){
      let a = (count-1)*100;
      photoArray[i].style.transform = `translateX(-${a}%)`;
  }
  count--;
}

});

sliderNext.addEventListener("click", () => {
  
  if(count < photoArray.length-1){
    for(let i=0; i < photoArray.length; i++){
      let a = (count+1)*100;
      photoArray[i].style.transform = `translateX(-${a}%)`;
  }
  count++;
}
});

//Dots

let function = (photoArray.length) => {
  for(let i = 0; i <= photoArray.length; i++){
  const btn = document.createElement('button');
  btn.classList.add('dot');
  dotIndicator.append(btn);
}
}