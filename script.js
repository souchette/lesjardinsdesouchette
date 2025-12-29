document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.carousel-btn.next');
        const prevButton = carousel.querySelector('.carousel-btn.prev');
        
        // Initial state
        let currentSlideIndex = 0;
        
        const updateSlidePosition = () => {
             // Move track
            track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        };

        nextButton.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });
    });
});
