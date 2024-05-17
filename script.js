// loader

function hideLoader() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-150%";
  }, 6000);
}

// Initialize LocomotiveScroll
function initLocomotiveScroll() {
  return new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.8,
  });
}

// Initialize Swiper instances without storing them in variables
function initSwipers() {
  setTimeout(function () {
    new Swiper(".mySwiper", {
      spaceBetween: 1,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } );

  new Swiper(".anotherSwiper", {
    spaceBetween: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
  });
}

// Attach event listeners to Swiper buttons
function handleSwiperButtonListeners() {
  var swiperButtons = document.querySelectorAll(".control-button");
  var swiperContainer = document.querySelector(".mySwiper");

  swiperButtons.forEach(function (swiperButton) {
    swiperButton.addEventListener("mouseenter", function () {
      // Access the Swiper instance through its container element
      swiperContainer.swiper.autoplay.stop();
    });

    swiperButton.addEventListener("mouseleave", function () {
      // Access the Swiper instance through its container element
      swiperContainer.swiper.autoplay.start();
    });
  });
}

// Handle news scroll
function handleNewsScroll() {
  const flashNewsElement = document.querySelector(".flash-news");
  const textElement = document.getElementById("scrollingText");

  flashNewsElement.addEventListener("mouseover", () => {
    textElement.style.animationPlayState = "paused";
  });

  flashNewsElement.addEventListener("mouseout", () => {
    textElement.style.animationPlayState = "running";
  });
}

// Execute functions
hideLoader();
initLocomotiveScroll();
initSwipers();
handleSwiperButtonListeners();
handleNewsScroll();