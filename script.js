document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const audioMessage = document.getElementById("audio-message");

    // Muestra el mensaje si el audio no se reproduce automáticamente
    audio.play().catch(() => {
        audioMessage.style.display = "block";
    });

    // Reproduce el audio cuando el usuario interactúa con la página
    document.addEventListener("click", function () {
        audio.play();
        audioMessage.style.display = "none";
    });
});
