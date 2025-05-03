document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("slideshow-image"); // Main image
    const dots = document.querySelectorAll(".dot"); // Dots

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
    
    // Set initial image and activate first dot
    image.src = images[index];
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    // Start slideshow
    setInterval(() => {
        index = (index + 1) % images.length; // Move to next image, loop back
        image.src = images[index]; // Update image

        // Update dots to show active slide
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }, 2000); // Change every 2 seconds
});
