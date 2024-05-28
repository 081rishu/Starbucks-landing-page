var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    // loop: true,
    centerSlide: true,
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  var swiperLatestOffering = new Swiper(".slide-container-latest-offerings", {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    centerSlides: true,
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next-latest-offerings",
      prevEl: ".swiper-button-prev-latest-offerings",
    },
  });

  // var swiperLatestOffering = new Swiper(" .barista-recommends-slide-container", {
  //   slidesPerView: 3,
  //   // spaceBetween: 20,
  //   // loop: true,
  //   centerSlides: true,
  //   fade: "true",
  //   grabCursor: "true",
  //   navigation: {
  //     nextEl: ".swiper-button-next-barista-recommends",
  //     prevEl: ".swiper-button-prev-barista-recommends",
  //   },
  // });  