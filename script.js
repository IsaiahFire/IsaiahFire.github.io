// Smooth scrolling for navigatione links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
let currentIndex = 0;  // Start with the first video
let slides = document.querySelectorAll('.video-slide');
let thumbnails = document.querySelectorAll('.thumbnail');

// Function to show the slide at the specified index
function showSlide(index) {
    // Hide all the slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
        thumbnails[i].style.opacity = '0.6';  // Reset all thumbnails to grey
    });

    // Show the current slide
    slides[index].classList.add('active-slide');
    thumbnails[index].style.opacity = '1';  // Highlight the current thumbnail
}

// Show the first slide initially
showSlide(currentIndex);

// Function for next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;  // Loop back to first if at last
    showSlide(currentIndex);
}

// Function for previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Loop back to last if at first
    showSlide(currentIndex);
}

// Function to jump to a specific slide
function currentSlide(index) {
    currentIndex = index - 1;  // Index in thumbnails is 1-based, but slides array is 0-based
    showSlide(currentIndex);
}
