document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
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

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            const form = e.target;
            const formData = new FormData(form);
            const responseMessage = document.getElementById('formResponse');

            responseMessage.textContent = "Sending your message..."; // Initial message
            responseMessage.style.color = "#007BFF"; // Blue color for loading state

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    responseMessage.textContent = "Thank you! Your message has been sent.";
                    responseMessage.style.color = "green";
                    form.reset(); // Clear the form fields
                } else {
                    responseMessage.textContent = "Oops! Something went wrong. Please try again.";
                    responseMessage.style.color = "red";
                }
            } catch (error) {
                responseMessage.textContent = "Failed to send the message. Please check your internet connection and try again.";
                responseMessage.style.color = "red";
            }
        });
    }
});
