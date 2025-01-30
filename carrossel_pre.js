let index = 0;
const slides = document.querySelectorAll('.carousel img');  // Seleciona todas as imagens do carrossel
const totalSlides = slides.length;

function moveSlide(direction) {
    // Remove a classe 'active' de todas as imagens
    slides.forEach(slide => slide.classList.remove('active'));

    // Atualiza o índice com base na direção
    index = (index + direction + totalSlides) % totalSlides;

    // Adiciona a classe 'active' à imagem atual
    slides[index].classList.add('active');
}

// Inicia o carrossel com a primeira imagem visível
moveSlide(0);
