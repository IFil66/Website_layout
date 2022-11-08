document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },

    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
    }
  });


  // Slider--
  document.querySelectorAll('.slider-about__button').forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      console.log(path)

      document.querySelectorAll('.slider-about__button').forEach(function(btn) {
        btn.classList.remove('slider-about__button2--active')});
      e.currentTarget.classList.add('slider-about__button2--active');

      document.querySelectorAll('.slider-about__container-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('slider-about__container-item--active')});

      document.querySelector(`[data-target="${path}"]`).classList.add('slider-about__container-item--active');
    });
  });
});


// FAQ
$(".accordion") .accordion({
  heightStyle: "content",
  active: 10,
  collapsible: true,
});


// The Tab moving in FAQ
document.addEventListener('DOMContentLoaded', function() {
  // 1
  document.querySelector('#details-faq__item-1').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#details-faq__text-title-1').click()
    }
  });
  // 2
  document.querySelector('#details-faq__item-2').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#details-faq__text-title-2').click()
    }
  });
  // 3
  document.querySelector('#details-faq__item-3').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#details-faq__text-title-3').click()
    }
  });
  // 4
  document.querySelector('#details-faq__item-4').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#details-faq__text-title-4').click()
    }
  });
  // 5
  document.querySelector('#details-faq__item-5').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#details-faq__text-title-5').click()
    }
  });
});



// Burger menu--
  // 1. Open the vertical menu (click)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-open').addEventListener('click', function() {
    document.getElementById('menu-burger').style.display = "block";
    setTimeout(timeOut, 50);
    function timeOut() {document.querySelector('#menu-burger').classList.toggle('menu-vertical__active')};
  });

  // 2. Open the vertical menu (press Enter)
  document.querySelector('#burger-open').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.getElementById('menu-burger').style.display = "block";
      setTimeout(timeOut, 50);
      function timeOut() {document.querySelector('#menu-burger').classList.toggle('menu-vertical__active')};
    }
  });

  // 3. Close the vertical menu (click)
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#menu-burger').classList.remove('menu-vertical__active');
    setTimeout(timeOut, 400);
    function timeOut() {document.getElementById('menu-burger').style.display = "none"};
  });

  // 4. Close the vertical menu (press Enter)
  document.querySelector('#burger-close').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#menu-burger').classList.toggle('menu-vertical__active')
      setTimeout(timeOut, 400);
      function timeOut() {document.getElementById('menu-burger').style.display = "none"};
    }
  })

  // 5. The Tab moving in the vertical menu
  let verticalMenuStart = document.querySelector('#burger-close');
  document.querySelector('#burger-open').addEventListener('click', function() {
    verticalMenuStart.focus()
  });

  let verticalMenuEnd = document.querySelector('#vertical-menu-end');
  verticalMenuEnd.addEventListener('blur', function() {
    verticalMenuStart.focus()
  });
});


// Search--
  // 1. Open the search space and disable #search-only-one
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-only-one').addEventListener('click', function() {
    document.getElementById('search-active').style.display = "block";
    setTimeout(timeOut, 50);
    function timeOut() {
      document.querySelector('#search-active').classList.toggle('search__active');
      document.getElementById('search-only-one').style.display = "none";
    };
  });

  // 2. Close the search space (click) and enable #search-only-one
  document.querySelector('#search-reset').addEventListener('click', function() {
    document.querySelector('#search-active').classList.remove('search__active');
    document.getElementById('search-only-one').style.display = "block";
    setTimeout(timeOut, 400);
    function timeOut() {
      document.getElementById('search-active').style.display = "none";
    };
  });

  // 3. The Tab moving in the search space
  let searchSpaceStart = document.querySelector('#search-space-start');
  document.querySelector('#search-only-one').addEventListener('click', function() {
    searchSpaceStart.focus()
  });

  let searchSpaceEnd = document.querySelector('#search-reset');
  searchSpaceEnd.addEventListener('blur', function() {
    searchSpaceStart.focus()
  });
});


// Basement's checkbox
  // 1. Basement's checkbox illumination
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#checkbox-agreement').addEventListener('focus', function() {
    document.querySelector('#basement-checkbox').classList.toggle('basement__name-checkbox-illumination');
  });
  document.querySelector('#checkbox-agreement').addEventListener('blur', function() {
    document.querySelector('#basement-checkbox').classList.remove('basement__name-checkbox-illumination');
  });

  // 2. Basement's checkbox on/off (press Enter)
  document.querySelector('#checkbox-agreement').addEventListener('keydown', function(f) {
    if (f.keyCode === 13) {
      document.querySelector('#checkbox-agreement').click()
    }
  })
});

