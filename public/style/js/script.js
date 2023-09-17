//ham-menu 

$(document).ready(function(){
    $(".head").show();
    $("#show-menu").click(function(){  
      if($(".head").hasClass('head--close-menu')) {
        $(".head").removeClass('head--close-menu');
        $("body").removeClass("rm-scroll");
        $(".head__menu").removeClass('head--close-menu');
        $(".head__menu__list").addClass('animation');
        
      }
      else {
        $("body").addClass("rm-scroll");
        $(".head").addClass('head--close-menu');
        $(".head__menu").addClass('head--close-menu');
        $(".head__menu__list").removeClass('animation');
        $(".head__menu__list").removeClass('animated');
      }
    });
    $(".p-home").addClass("p-home--animation");
});

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true
    },
    loop: true,

    // Navigation arrows
    
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  //animasi scrool
  const elementsHome = document.querySelectorAll('.animation');

  let options = {
    root: null,
  }
  const callbacks = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('animated');
      }
    });
  }

  const observerHome = new IntersectionObserver(callbacks, options);
  elementsHome.forEach(item => {
    observerHome.observe(item);
  });

  // const elementsContact = document.querySelectorAll('.head__menu__item');

  // let option = {
  //   root: null,
  // }
  // const callback = (entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting){
  //       entry.target.classList.add('active');
  //     }
  //   });
  // }

  // const observerContact = new IntersectionObserver(callback, option);
  // elementsContact.forEach(item => {
  //   observerContact.observe(item);
  // });