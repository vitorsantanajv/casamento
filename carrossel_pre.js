let index = 0;

const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
    // Remove a classe 'active' de todas as imagens
    images.forEach((img) => {
        img.classList.remove('active');
    });

    // Adiciona a classe 'active' na imagem atual
    images[index].classList.add('active');

    // Atualiza o índice para a próxima imagem
    index = (index + 1) % totalImages;
}

// Inicializa a exibição da primeira imagem
changeImage();

// Troca de imagem automaticamente a cada 3 segundos
setInterval(changeImage, 3000);

// Função de controle manual
function moveSlide(direction) {
    index = (index + direction + totalImages) % totalImages;
    changeImage();
}

// Adiciona os botões para navegar manualmente (opcional)
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
