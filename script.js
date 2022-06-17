let boton = document.querySelector(".ham");

boton.addEventListener("click",MostrarMenu);

function MostrarMenu (){
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-close");

}