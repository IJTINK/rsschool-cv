let burger = document.querySelector(".burger_button");
let burgerMenu = document.querySelector(".burger_menu");

let burgerServices = document.querySelector(".burger_services");
let burgerPortfolio = document.querySelector(".burger_portfolio");
let burgerHome = document.querySelector(".burger_home");

let leftArrow = document.querySelector(".left_arrow");
let rightArrow = document.querySelector(".right_arrow");



let burgerMenuOut = () => {
      burger.classList.toggle("rotate");
      burgerMenu.classList.toggle("burger_menu_active");

     
};

burger.addEventListener("click", burgerMenuOut);
burgerPortfolio.addEventListener("click", burgerMenuOut);
burgerServices.addEventListener("click", burgerMenuOut);
burgerHome.addEventListener("click", burgerMenuOut);







// let filterButtonAll = document.querySelectorAll(".portfolio-item");

// filterButtonAll.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     if (e.target.classList.contains("portfolio-item")) {
//       removeClass();
//       addClass(e);
//       if (e.target.innerHTML === "All") {
//         showAllImages();
//       } else {
//         setOrderImage(e.target.innerHTML);
//       }
//     }
//   });
// });

// function addClass(e) {
//   e.target.classList.add("portfolio_button_active");
// }

// function removeClass() {
//   filterButtonAll.forEach((item) => {
//     item.classList.remove("portfolio_button_active");
//   });
// }

// function setOrderImage(tagname) {
//   let images = document.querySelectorAll(".portfolio-image");
//   images.forEach((picture) => {
//     picture.classList.remove("order");
//     if (picture.dataset.image === tagname) {
//       picture.classList.add("order");
//     }
//   });
// }

// function showAllImages() {
//   let images = document.querySelectorAll(".portfolio-image");
//   images.forEach((image) => {
//     image.classList.remove("order");
//   });
// }

