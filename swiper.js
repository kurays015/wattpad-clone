  
  const swiper = new Swiper('.swiper', { 
      autoplay: {
      delay: 3300,
      disableOnInteraction: true, // set to true to pause autoplay on interaction
    },
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      speed: 400, 
      spaceBetween: 10,
      direction: 'horizontal',
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
      },
      reverse: false,
});