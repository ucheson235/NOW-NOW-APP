function toggleNav() {
    
    const navLinks = document.getElementById("navLinks");
  
    
    navLinks.classList.toggle("active");
  }

  //keeps track of the current state of the images

  let images = [
    "./asset/cbn.webp",
    "./asset/ndic.webp",
    "./asset/mastercard.webp",
    "./asset/dss.webp"
];

let currentIndex = 0;

function showImage(index) {
    document.getElementById("slider-image").src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Automatically change the image every 3 seconds
setInterval(nextSlide, 3000);

// Add event listeners to buttons
document.getElementById("next-btn").addEventListener("click", nextSlide);
document.getElementById("prev-btn").addEventListener("click", prevSlide);
