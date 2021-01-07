//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const titel = document.querySelector(".titel");
const sneaker = document.querySelector(".sneaker img");
const kopen = document.querySelector(".kopen");
const beschrijving = document.querySelector(".info h3");
const maten = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  titel.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  beschrijving.style.transform = "translateZ(50px)";
  maten.style.transform = "translateZ(50px)";
  kopen.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  titel.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  beschrijving.style.transform = "translateZ(0px)";
  maten.style.transform = "translateZ(0px)";
  kopen.style.transform = "translateZ(0px)";
});
