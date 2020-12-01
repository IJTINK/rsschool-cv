let burger = document.querySelector(".burger_button");
let burgerMenu = document.querySelector(".burger_menu");


let burgerServices = document.querySelector(".burger_services");
let burgerPortfolio = document.querySelector(".burger_portfolio");


let filterButtonAll = document.querySelectorAll(".portfolio-item");

burger.addEventListener("click", () => {
  burger.classList.toggle("rotate");
  burgerMenu.classList.toggle("burger_menu_active");
 });


 burgerServices.addEventListener("click", () => {
burgerMenu.classList.toggle("burger_menu_active");
burger.classList.toggle("rotate");
});


burgerPortfolio.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger_menu_active");
    burger.classList.toggle("rotate");
    });



filterButtonAll.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio-item")) {
      removeClass();
      addClass(e);
      if (e.target.innerHTML === "All") {
        showAllImages();
      } else {
        setOrderImage(e.target.innerHTML);
      }
    }
  });
});

function addClass(e) {
  e.target.classList.add("portfolio_button_active");
}

function removeClass() {
  filterButtonAll.forEach((item) => {
    item.classList.remove("portfolio_button_active");
  });
}

function setOrderImage(tagname) {
  let images = document.querySelectorAll(".portfolio-image");
  images.forEach((picture) => {
    picture.classList.remove("order");
    if (picture.dataset.image === tagname) {
      picture.classList.add("order");
    }
  });
}

function showAllImages() {
  let images = document.querySelectorAll(".portfolio-image");
  images.forEach((image) => {
    image.classList.remove("order");
  });
}
