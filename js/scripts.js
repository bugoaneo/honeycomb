let innerSliders = document.querySelectorAll('.gallery__nested-slider');

let outerSlider = new Splide('.gallery__main-slider', {
 arrows: false,
 wheel: true,
 drag: true,
 pagination: true,
 breakpoints: {
  950: {
   arrows: true,
   drag: false,
   pagination: false,
   wheel: false,
  }
 },
});

outerSlider.mount();

innerSliders.forEach(item => new Splide(item, {
 perPage: 1,
 perMove: 1,
 updateOnMove: true,
 pagination: true,
 type: 'slider',
 arrows: false,
 mediaQuery: 'min',
 breakpoints: {
  600: {
   wheel: false,
   focus: 'center',
   type: 'loop',
   perPage: 3,
  },
  950: {
   destroy: true,
  },
 },
}).mount());
