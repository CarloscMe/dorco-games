const boton = document.querySelector("button");
const lista = document.querySelector("ul");
const imagen = document.querySelector(".img");
const item = document.querySelector(".item--caja1");
let visible = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      item.classList.add('item--caja2'); 
      observer.unobserve(item);
      item.style.opacity = "1";
    } else{
      item.style.opacity ="0";
    }
  });
});

document.querySelectorAll(".info--caja2").forEach(box => {
  observer.observe(box);
})

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
