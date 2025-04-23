const boton = document.querySelector("button");
const lista = document.querySelector("ul");
const imagen = document.querySelector("img");
let visible = false;

const menu = {

    raya : "../assets/menu.png",
     x : "../assets/cerrar.png"
}

const { raya, x} = menu;

boton.addEventListener("click",()=>{

    visible = !visible;

    if(visible){
     lista.style.display = "flex";
     imagen.src = x;
    }
    else{
    lista.style.display = "none";
    imagen.src = raya;
    }
});
