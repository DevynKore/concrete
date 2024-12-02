document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const leftButton = carousel.querySelector('.carousel-button.left');
        const rightButton = carousel.querySelector('.carousel-button.right');
        
        let scrollPosition = 0;
        const imageWidth = imagesContainer.offsetWidth; // Width of one image in the carousel

        leftButton.addEventListener('click', () => {
            // Calculate new scroll position for left navigation
            scrollPosition = Math.min(scrollPosition + imageWidth, 0);
            imagesContainer.style.transform = `translateX(${scrollPosition}px)`;
        });

        rightButton.addEventListener('click', () => {
            // Calculate max scroll limit
            const maxScroll = -(imagesContainer.scrollWidth - imagesContainer.clientWidth);
            // Calculate new scroll position for right navigation
            scrollPosition = Math.max(scrollPosition - imageWidth, maxScroll);
            imagesContainer.style.transform = `translateX(${scrollPosition}px)`;
        });
    });
});

