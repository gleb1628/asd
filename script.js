function sliderChange(elem) {
    var images = document.querySelector('.images');
    images.style.transform = 'translateX(-' + (elem.value * 33.33) + '%)';
}
var slider = document.querySelector('.slider input[type="range"]');

setInterval(function() {
if (slider.value == slider.max) {
    slider.value = 0;
} else {
    slider.value++;
}
sliderChange(slider);
}, 3000);

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', function() {
  if (slider.value == 0) {
    slider.value = 5;
  } else {
    slider.value--;
  }
  sliderChange(slider);
});

nextBtn.addEventListener('click', function() {
  if (slider.value == 5) {
    slider.value = 0;
  } else {
    slider.value++;
  }
  sliderChange(slider);
});