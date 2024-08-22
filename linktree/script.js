document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Initialize the slider
showSlides(slideIndex);


    function openModal(imageSrc) {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    document.querySelectorAll('.portopolio-image').forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);
    });
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    document.querySelector('.close').addEventListener('click', closeModal);
});


