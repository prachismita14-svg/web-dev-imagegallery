const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("close");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

let currentIndex = 0;



images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});



function showImage() {

    lightboxImage.src = images[currentIndex].src;

}



closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});



nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});



prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});



lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});