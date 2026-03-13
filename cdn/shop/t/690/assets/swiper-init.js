document.addEventListener('DOMContentLoaded', function() {
  // Featured Products carousels
  document.querySelectorAll('.featured-products-carousel').forEach(function(el) {
    new Swiper(el, {
      slidesPerView: 1.3,
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: el.closest('.featured-products, .spaced-section')?.querySelector('.swiper-button-next'),
        prevEl: el.closest('.featured-products, .spaced-section')?.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        750: { slidesPerView: 2.3, spaceBetween: 15 },
        990: { slidesPerView: 4, spaceBetween: 20 },
      }
    });
  });

  // Announcement bar swipers
  document.querySelectorAll('.swiper-wrapper-announcement').forEach(function(wrapper) {
    var container = wrapper.closest('.swiper');
    if (container) {
      new Swiper(container, {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        speed: 500,
      });
    }
  });

  // Logo/press carousels
  document.querySelectorAll('.logo-carousel__swiper, [class*="logo-carousel"] .swiper').forEach(function(el) {
    if (!el.classList.contains('swiper-initialized')) {
      new Swiper(el, {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
          750: { slidesPerView: 4 },
          990: { slidesPerView: 6 },
        }
      });
    }
  });

  // Generic swipers with navigation that aren't initialized
  document.querySelectorAll('.swiper:not(.swiper-initialized)').forEach(function(el) {
    // Skip if it has no slides
    if (!el.querySelector('.swiper-slide')) return;
    // Skip virtual mirror swipers
    if (el.closest('[class*="virtual-mirror"]')) return;
    
    var section = el.closest('section, .shopify-section, .spaced-section');
    var nextBtn = section?.querySelector('.swiper-button-next');
    var prevBtn = section?.querySelector('.swiper-button-prev');
    var pagination = section?.querySelector('.swiper-pagination');
    
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      navigation: nextBtn ? { nextEl: nextBtn, prevEl: prevBtn } : false,
      pagination: pagination ? { el: pagination, clickable: true } : false,
      breakpoints: {
        750: { slidesPerView: 2 },
        990: { slidesPerView: 3 },
      }
    });
  });
});
