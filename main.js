let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navList");

menu.addEventListener("click", function (){
  navList.classList.toggle("active");
});

window.onscroll = () => {
  navList.classList.remove("active");
};