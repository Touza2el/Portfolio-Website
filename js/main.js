// #-1 Header Fixed When Scrolling

window.onscroll = function() {
  const docScrollTop = document.documentElement.scrollTop;
  // if window width > 991px then the header will be fixed else it won't
  if (window.innerWidth > 991) {
    // if the scroll position (docScrollTop) > 100 then the header will be fixed
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

// #-2 Add Active Class to Clicked NavBar Link

const navBar = document.querySelector(".nav-bar");
a = navBar.querySelectorAll("a");
a.forEach(function(element) {
  element.addEventListener("click", function() {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// #-4 Hamburger Menu Click

const hamBurgerMenu = document.querySelector(".hamburger-menu");

hamBurgerMenu.addEventListener("click", function() {
  document.querySelector(".nav-bar").classList.toggle("show");
});

// #-3 Gallery Items Filter

const filterButtons = document.querySelector("#filter-btns").children;
const item = document.querySelector(".portfolio-gallery");
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function() {
    // remove active class from all buttons
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    // add active class to this clicked button
    this.classList.add("active");
    // filter items by gategory
    const target = this.getAttribute("data-target");
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
        item.style.justifyContent = "space-around";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}
// #-4 Pop Up Lightbox

const lightBox = document.querySelector(".lightbox");
const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");
const lightBoxImage = lightBox.querySelector("img");
const closeIcon = document.querySelector(".close-lightbox");

// show The Lightbox When The + Icon clicked
galleryItem.forEach(function(element) {
  element.querySelector(".fa-plus").addEventListener("click", function() {
    lightBox.classList.remove("hide");
    lightBox.classList.add("show");
    //  Change Image Source of The Lightbox
    lightBoxImage.src = element.querySelector("img").getAttribute("src");
  });
});
// Hide The Lightbox When The Close Icon clicked
closeIcon.addEventListener("click", function() {
  lightBox.classList.remove("show");
  lightBox.classList.add("hide");
});
