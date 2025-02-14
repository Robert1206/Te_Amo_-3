document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de imágenes
    const carousel = document.querySelector(".carousel");
    let index = 0;

    function nextSlide() {
        // Avanza al siguiente índice
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        // Calcula el desplazamiento para mostrar la imagen actual
        const offset = -index * 100; // 100% por cada imagen
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Cambia de imagen cada 7 segundos
    setInterval(nextSlide, 7000);

    // Reproducción automática del audio
    const audio = document.getElementById("audio");
    const audioMessage = document.getElementById("audio-message");

    // Intenta reproducir el audio automáticamente
    audio.play().catch(() => {
        // Si falla, muestra un mensaje al usuario
        audioMessage.style.display = "block";
    });

    // Reproduce el audio cuando el usuario interactúa con la página
    document.addEventListener("click", function () {
        audio.play();
        audioMessage.style.display = "none";
    });
});
