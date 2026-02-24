// --------------------
// Función de control de video
// --------------------

function toggleVideo() {
    const button_Video = document.getElementById("button_Video");
    const Play = document.getElementById("Play");
    const Pause = document.getElementById("Pause");
    const video = document.getElementById("Reproducio_Video");

    if (!button_Video || !Play || !Pause || !video) {
        console.warn("¡Uno o más elementos del video no se encontraron!");
        return;
    }

    if (video.paused) {
        video.play();
        Play.style.display = "none";
        Pause.style.display = "inline";
        button_Video.classList.add("Play");
    } else {
        video.pause();
        Play.style.display = "inline";
        Pause.style.display = "none";
        button_Video.classList.remove("Play");
    }

    video.addEventListener("ended", () => {
        video.currentTime = 0;
        Play.style.display = "inline";
        Pause.style.display = "none";
        button_Video.classList.remove("Play");
    }, { once: true });
}

// --------------------
// Función para scroll horizontal de galería
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("GALERY_OPTION");
  const btnIzq = document.getElementById("BUTTON_GALERYL");
  const btnDer = document.getElementById("BUTTON_GALERYR");

  if (!scrollContainer || !btnIzq || !btnDer) {
    console.warn("¡Uno de los elementos del scroll horizontal no se encontró!");
    return;
  }

  // Función que obtiene el ancho actual del primer bloque
  const obtenerAnchoBloque = () => {
    const primerBloque = scrollContainer.querySelector("div");
    return primerBloque ? primerBloque.getBoundingClientRect().width : 0;
  };

  // Evento para desplazarse hacia la izquierda
  btnIzq.addEventListener("click", () => {
    const anchoBloque = obtenerAnchoBloque();
    scrollContainer.scrollBy({
      left: -anchoBloque,
      behavior: "smooth"
    });
  });

  // Evento para desplazarse hacia la derecha
  btnDer.addEventListener("click", () => {
    const anchoBloque = obtenerAnchoBloque();
    scrollContainer.scrollBy({
      left: anchoBloque,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    Galery(); // tu función de carga de imágenes iniciales
    iniciarRotacionGaleria(); // rotación infinita
    
});

function Galery() {
    const Personaje1 = document.getElementById("Personaje1");
    const Personaje2 = document.getElementById("Personaje2");
    const Personaje3 = document.getElementById("Personaje3");
    const Personaje4 = document.getElementById("Personaje4");
    const Personaje5 = document.getElementById("Personaje5");
    const Personaje6 = document.getElementById("Personaje6");
    const Personaje7 = document.getElementById("Personaje7");
    const Personaje8 = document.getElementById("Personaje8");

    const GALERY_CONTENEDOR0 = document.getElementById("GALERY_CONTENEDOR0");
    const GALERY_CONTENEDOR1 = document.getElementById("GALERY_CONTENEDOR1");
    const GALERY_CONTENEDOR2 = document.getElementById("GALERY_CONTENEDOR2");
    const GALERY_CONTENEDOR3 = document.getElementById("GALERY_CONTENEDOR3");

    // ✅ Transición suave y comparación para evitar recargas innecesarias
    function cambiarImagenes(src1, src2, src3, src4) {
        const imagenes = [GALERY_CONTENEDOR0, GALERY_CONTENEDOR1, GALERY_CONTENEDOR2, GALERY_CONTENEDOR3];
        const rutas = [src1, src2, src3, src4];

        imagenes.forEach((img, i) => {
            const rutaActual = img.getAttribute("src"); // más confiable que img.src
            if (rutaActual !== rutas[i]) {
                img.classList.add("fade-out");
                setTimeout(() => {
                    img.src = rutas[i];
                    img.classList.remove("fade-out");
                }, 400);
            }
        });
    }
    Personaje1.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Kaen Kurogami/Kaen Kurogami (1).jpg",
            "/Multimedias/Kaen Kurogami/Kaen Kurogami (2).jpg",
            "/Multimedias/Kaen Kurogami/Kaen Kurogami (3).jpg",
            "/Multimedias/Kaen Kurogami/Kaen Kurogami (4).jpg"
        );
    });

    Personaje2.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Lucen Odayama/Lucen Odayama (3).jpg",
            "/Multimedias/Lucen Odayama/Lucen Odayama (1).jpg",
            "/Multimedias/Lucen Odayama/Lucen Odayama (2).jpg",
            "/Multimedias/Lucen Odayama/Lucen Odayama (4).jpg"
        );
    });

    Personaje3.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Nara Kageyama/Nara Kageyama (1).jpg",
            "/Multimedias/Nara Kageyama/Nara Kageyama (2).jpg",
            "/Multimedias/Nara Kageyama/Nara Kageyama (3).jpg",
            "/Multimedias/Nara Kageyama/Nara Kageyama (4).jpg"
        );
    });

    Personaje4.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Dr. Maikō Nibuken/Dr. Maikō Nibuken (12).jpg",
            "/Multimedias/Dr. Maikō Nibuken/Dr. Maikō Nibuken (10).jpg",
            "/Multimedias/Dr. Maikō Nibuken/Dr. Maikō Nibuken (11).jpg",
            "/Multimedias/Dr. Maikō Nibuken/Dr. Maikō Nibuken (9).jpg"
        );
    });

    Personaje5.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Laila Yumekiri/Laila Yumekiri (1).jpg",
            "/Multimedias/Laila Yumekiri/Laila Yumekiri (2).jpg",
            "/Multimedias/Laila Yumekiri/Laila Yumekiri (3).jpg",
            "/Multimedias/Laila Yumekiri/Laila Yumekiri (4).jpg"
        );
    });

    Personaje6.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Kaito Senzoku/Kaito Senzoku (9).jpg",
            "/Multimedias/Kaito Senzoku/Kaito Senzoku (10).jpg",
            "/Multimedias/Kaito Senzoku/Kaito Senzoku (11).jpg",
            "/Multimedias/Kaito Senzoku/Kaito Senzoku (12).jpg"
        );
    });

    Personaje7.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Renji Akebono/Renji Akebono (9).jpg",
            "/Multimedias/Renji Akebono/Renji Akebono (10).jpg",
            "/Multimedias/Renji Akebono/Renji Akebono (11).jpg",
            "/Multimedias/Renji Akebono/Renji Akebono (12).jpg"
        );
    });

    Personaje8.addEventListener("click", () => {
        cambiarImagenes(
            "/Multimedias/Shiori/Shiori (1).jpg",
            "/Multimedias/Shiori/Shiori (2).jpg",
            "/Multimedias/Shiori/Shiori (3).jpg",
            "/Multimedias/Shiori/Shiori (4).jpg"
        );
    });
};

const img0 = document.getElementById("GALERY_CONTENEDOR0");
const img1 = document.getElementById("GALERY_CONTENEDOR1");
const img2 = document.getElementById("GALERY_CONTENEDOR2");
const img3 = document.getElementById("GALERY_CONTENEDOR3");

setInterval(() => {
    // Guardamos temporalmente los src actuales
    const src0 = img0.src;
    const src1 = img1.src;
    const src2 = img2.src;
    const src3 = img3.src;

        
    img0.src = src1;
    img1.src = src2;
    img2.src = src3;
    img3.src = src0;

}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("logoCarousel");

  // Duplicar el contenido para hacer un loop real
  carousel.innerHTML += carousel.innerHTML;

  let scrollAmount = 0;
  const speed = 0.5; // Ajusta la velocidad

  function animate() {
    scrollAmount += speed;
    if (scrollAmount >= carousel.scrollWidth / 2) {
      scrollAmount = 0; // Reinicia scroll sin corte
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
