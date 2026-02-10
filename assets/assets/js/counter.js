document.addEventListener("DOMContentLoaded", function() {
  const countEl = document.getElementById('count');
  let count = 0;
  const maxCount = 60;
  let isCarouselActive = false;

  // This function will only increment the counter if the carousel is not active
  function incrementCounter() {
    if (!isCarouselActive && count < maxCount) {
      count++;
      countEl.textContent = count + '+'; // Always append "+" to the count
      setTimeout(incrementCounter, 120); // Adjust time for faster or slower counting
    }
  }

  incrementCounter();

  // Listen for carousel activation to stop auto-incrementing
  document.querySelector('.carousel').addEventListener('slide.bs.carousel', function() {
    isCarouselActive = true;
  });

  // Listen for carousel deactivation to restart counting
  document.querySelector('.carousel').addEventListener('slid.bs.carousel', function() {
    isCarouselActive = false;
    incrementCounter();  // Resume auto-counting after carousel interaction
  });
});
