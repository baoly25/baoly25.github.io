document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("slideshow-image");
    const dots = document.querySelectorAll(".dot");

    const images = [
        "images/image1.png",
        "images/image2.png",
        "images/image3.png",
        "images/image4.png",
        "images/image5.png",
        "images/image6.png",
        "images/image7.png"
    ];
    
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        image.src = images[index];

        // updating dots
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }, 2000); // interval of 2 seconds
});
