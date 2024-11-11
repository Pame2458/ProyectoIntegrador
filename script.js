  // Carrusel

let indiceImagen = 0;
  mostrarImagen(indiceImagen);

  function cambiarImagen(n) {
    mostrarImagen(indiceImagen += n);
  }

  function mostrarImagen(n) {
    let i;
    let imagenes = document.getElementsByClassName("carrusel-img");

    if (n >= imagenes.length) { indiceImagen = 0 }
    if (n < 0) { indiceImagen = imagenes.length - 1 }

    for (i = 0; i < imagenes.length; i++) {
      imagenes[i].style.display = "none";
    }
    imagenes[indiceImagen].style.display = "block";
  }

  // Cambio automático de imagen cada 3 segundos
  setInterval(function() {
    cambiarImagen(1);
  }, 3000);


  // menu 
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}