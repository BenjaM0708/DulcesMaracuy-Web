// Variables para rastrear la diapositiva actual
let currentSlideIndex = 1;

// Mostrar la diapositiva específica
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    // Validar que n está dentro del rango
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remover la clase activa de todos los indicadores
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Mostrar la diapositiva actual y activar su indicador
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

// Cambiar a la siguiente o anterior diapositiva
function changeSlide(n) {
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
}

// Ir a la diapositiva específica al hacer clic en un punto
function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

// Inicializar el carousel mostrando la primera diapositiva al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
});
