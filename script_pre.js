let currentIndex = 0; // Inicia com a primeira imagem

// Função para mudar as imagens
function mudarImagem(direction) {
    const imagens = document.querySelectorAll('.gallery img');
    const totalImagens = imagens.length;

    // Remove a classe "active" da imagem atual
    imagens[currentIndex].classList.remove('active');

    // Calcula o novo índice
    currentIndex = (currentIndex + direction + totalImagens) % totalImagens;

    // Adiciona a classe "active" à nova imagem
    imagens[currentIndex].classList.add('active');
}

// Exibe a primeira imagem ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.gallery img');
    imagens[currentIndex].classList.add('active');
});
