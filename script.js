var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h2tag = document.getElementById("bgColor");

console.log(css);
console.log(color1);
console.log(color2);

//input even listens to input changes

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//background color is changed in the body tag

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h2tag.innerHTML =
    " Current CSS background is " + color1.value + " " + color2.value;
    css.textContent = body.style.background + ";";
}


