document.querySelector('.carousel').addEventListener('slide.bs.carousel', function (event) {
  // Change the counter number on each slide transition
  const count = event.to + 1;  // Adjust count based on the slide index
});
