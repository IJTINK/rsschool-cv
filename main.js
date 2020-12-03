//burger

let burger = document.querySelector(".burger_button");
let burgerMenu = document.querySelector(".burger_menu");

let burgerServices = document.querySelector(".burger_services");
let burgerPortfolio = document.querySelector(".burger_portfolio");
let burgerHome = document.querySelector(".burger_home");

let burgerMenuOut = () => {
  burger.classList.toggle("rotate");
  burgerMenu.classList.toggle("burger_menu_active");
};

burger.addEventListener("click", burgerMenuOut);
burgerPortfolio.addEventListener("click", burgerMenuOut);
burgerServices.addEventListener("click", burgerMenuOut);
burgerHome.addEventListener("click", burgerMenuOut);


// slider

let leftArrow = document.querySelector(".left_arrow");
let rightArrow = document.querySelector(".right_arrow");

let redSlide = document.querySelector(".red_slide");
let blueSlide = document.querySelector(".blue_slide");



// let moveLeft = () => {
//       line.style.transform = 'translateX(100%)';
// }


// leftArrow.addEventListener("click", moveLeft);

let moveLeft = () => {
      line.style.transform = 'translateX(-100%)';
}


leftArrow.addEventListener("click", moveLeft);


let moveRight = () => {
      line.style.transform = 'translateX(0)';
}


rightArrow.addEventListener("click", moveRight);

