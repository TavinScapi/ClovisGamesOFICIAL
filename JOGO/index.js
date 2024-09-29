// Selecionar os elementos principais
const mainImage = document.getElementById("main-image");
const mainVideo = document.getElementById("main-video");
const thumbnails = document.querySelectorAll(".thumbnail");

// Função para trocar a mídia
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        const type = this.getAttribute("data-type");
        const src = this.getAttribute("data-src");

        // Ocultar as mídias
        mainImage.style.display = "none";
        mainVideo.style.display = "none";
        mainVideo.src = "";  // Reiniciar vídeo para garantir que ele pare

        if (type === "image") {
            // Exibir a imagem
            mainImage.src = src;
            mainImage.style.display = "block";
        } else if (type === "video") {
            // Exibir o vídeo
            mainVideo.src = src;  // Atualiza o link do iframe
            mainVideo.style.display = "block";
        }
    });
});

// Função para alternar a visibilidade do texto "Ler mais"
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const moreText = document.getElementById('more-text');
    let isExpanded = false;

    toggleButton.addEventListener('click', function () {
        if (isExpanded) {
            moreText.classList.add('hidden');
            toggleButton.textContent = 'Ler mais';
        } else {
            moreText.classList.remove('hidden');
            toggleButton.textContent = 'Ler menos';
        }
        isExpanded = !isExpanded;
    });
});
