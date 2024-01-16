document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("primary-navigation");
    const buttonLines = document.getElementById("button-lines1");

    menuButton.addEventListener("click", function () {
        // Toggle the 'active' class on the button
        buttonLines.classList.toggle("active");

        // Toggle the 'active' class on the navigation
        nav.classList.toggle("active");
    });

    // Header transparency code
    const header = document.querySelector("header");
    let isTransparent = true;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0 && isTransparent) {
            header.style.backgroundColor = "rgba(0, 0, 0, 1)";
            isTransparent = false;
        } else if (window.scrollY === 0 && !isTransparent) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0)";
            isTransparent = true;
        }
    });

    // Call the slideshow function after the DOM is loaded
    let slideIndex = 0; // Initialize slideIndex to 0
    showSlides(); // Initial call to showSlides function

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("myslides");

        // Reset all slides to display none
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment slideIndex or reset to 0 if it exceeds the number of slides
        slideIndex = (slideIndex + 1) % slides.length;

        // Display the current slide
        slides[slideIndex].style.display = "block";

        // Automatic slideshow
        setTimeout(showSlides, 4000); // 4000 milliseconds (4 seconds)
    }
});



