document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message!");
            form.reset();
        });
    }

    const sliderImage = document.getElementById("sliderImage");
    if (sliderImage) {
        const images = ["images/myPhoto.jpg"];
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            sliderImage.src = images[currentIndex];
        }, 3000);
    }
});
