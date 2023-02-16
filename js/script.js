// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const navbarSocial = document.querySelector(".nav-social");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  navbarSocial.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


// parallax hero
// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();

//   console.log(wScroll);
// });
// const hero = document.querySelector('.hero');
// const content = document.querySelector('.content');
// const starfield = document.querySelector('#starfield');

// window.addEventListener('scroll', function() {
//   let wScroll = this.pageYOffset;

//   starfield.style.backgroundPosition = `10 ${wScroll / 0}px`;
//   content.style.transform = `translateY(${wScroll / 5}%)`;
// });




