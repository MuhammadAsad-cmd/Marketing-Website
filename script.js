// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}

let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  startSwipe(e.clientX);
});

sliderContainer.addEventListener("touchstart", (e) => {
  startSwipe(e.touches[0].clientX);
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
  endSwipe();
});

sliderContainer.addEventListener("mouseleave", () => {
  if (pressed) {
    endSwipe();
  }
});

sliderContainer.addEventListener("touchend", () => {
  endSwipe();
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (pressed) {
    swipe(e.clientX);
  }
});

sliderContainer.addEventListener("touchmove", (e) => {
  if (pressed) {
    swipe(e.touches[0].clientX);
  }
});

const startSwipe = (clientX) => {
  pressed = true;
  startX = clientX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
};

const swipe = (clientX) => {
  if (!pressed) return;
  x = clientX;
  innerSlider.style.left = `${x - startX}px`;
  checkBoundary();
};

const endSwipe = () => {
  pressed = false;
  sliderContainer.style.cursor = "grab";
  checkBoundary();
};

const checkBoundary = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};
