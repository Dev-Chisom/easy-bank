const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  if (links.classList.contains("nav__showLinks")) {
    links.classList.remove("nav__showLinks");
    navToggle.innerHTML = '<i class="fas fa-bars effect"></i>';
  } else {
    navToggle.innerHTML = '<i class="fas fa-times effect"></i>';
    links.classList.add("nav__showLinks");
  }
});


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementsByClassName("nav__container").style.padding = "10px";
//     // document.getElementById("logo").style.width = "70%";
//   } else {
//     document.getElementsByClassName("nav__container").style.padding = "15px";
//     // document.getElementById("logo").style.width= "100%";
//   }
// }

