const images = [
  'basketball_court.jpg', // Replace with actual image paths
  'pickleball_court.jpg',
  'football_turf.jpg',
  'beach_volleyball.jpg',
  'swimming_pool.jpg'
];

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slideshow img');
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainer = document.querySelector('.slideshow');
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    slideshowContainer.appendChild(img);
  });
  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // Change slides every 3 seconds
});
