const boton = document.querySelector("button");
const color = document.getElementById("color");

function cambiarColor() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener("click", ( ) =>{
    let colorAleatorio = cambiarColor();
    // actualiza el texto
    color.textContent = colorAleatorio;
    // actualiza el color de fondo
    document.body.style.backgroundColor = colorAleatorio; 
})
