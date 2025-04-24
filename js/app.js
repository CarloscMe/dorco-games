const boton = document.querySelector("button");
const lista = document.querySelector("ul");
const imagen = document.querySelector(".img");
let visible = false;

const menu = {

    abrir : "./assets/menu.png",
    cerrar : "./assets/cerrar.png"
}

const { abrir, cerrar} = menu;

boton.addEventListener("click",()=>{

    visible = !visible;

    if(visible){
     lista.style.display = "flex";
     imagen.src = cerrar;
    }
    else{
    lista.style.display = "none";
    imagen.src = abrir;
    }
});
