const boton = document.querySelector("button");
const lista = document.querySelector("ul");
const imagen = document.querySelector(".img");
let visible = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('item--caja2');   // con esta api le aplico el view aunque necesito probarla mas
      }
    });
  });
  
  document.querySelectorAll('.item--caja').forEach(box => {
    observer.observe(box);
  });
  

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
