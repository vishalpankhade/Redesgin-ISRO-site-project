// show loader first

// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     // document.querySelector("#loader").style.visibility = "block";
//   } else {
//     // document.querySelector("#loader").style.display = "visible";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };


document.addEventListener('DOMContentLoaded', function() {
  // Show loader immediately
  document.querySelector("body").style.visibility = "hidden";

  // Hide loader after a short delay
  setTimeout(function() {
    document.querySelector("body").style.visibility = "visible";
  }, 500); // Adjust delay as needed
});


// loader

function hideLoader() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-150%";
  }, 12000);
}

// toggleMenu

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
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
  }, 12000);

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

