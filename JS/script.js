const navLink = document.querySelector(".nav-link");
const hambuger = document.querySelector(".hamburger");


const hambugerHandler = () => {
    navLink.classList.toggle("nav-link__")
}
hambuger.addEventListener("click", hambugerHandler)