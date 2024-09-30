$(function () {
  $("#header .gnb")
    .on("mouseenter", function () {
      $("#header").addClass("on");
    })
    .on("mouseleave", function () {
      $("#header").removeClass("on");
    });

  // main_slider
  const swiper = new Swiper(".main_slider .swiper", {
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
    },
    loop: false,
    pagination: {
      el: ".main_slider .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number < 7 ? "" + number : number;
      },
      formatFractionbetween: function (string) {
        return string;
      },
      formatFractionTotal: function (number) {
        return number < 7 ? "" + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          "<span> / </spna>" +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    navigation: {
      nextEl: ".main_slider .swiper-button-next",
      prevEl: ".main_slider .swiper-button-prev",
    },
    on: {
      slideChange: function () {
        changeBackgroundColor(this.activeIndex);
      },
    },
  });

  let stopPlay = false;
  $(".btn_wrap .toggle_btn").on("click", function () {
    if (stopPlay) {
      $(this).find("i").attr("class", "ri-pause-fill");
      swiper.autoplay.start();
      stopPlay = false;
    } else {
      $(this).find("i").attr("class", "ri-play-fill");
      swiper.autoplay.stop();
      stopPlay = true;
    }
  });

  function changeBackgroundColor(index) {
    const container = document.getElementById("mainSlide");
    const colors = [
      "#92b5f5",
      "#c9b980",
      "#88c7ec",
      "#d3b290",
      "#efb4ac",
      "#67aadf",
      "#70c9f0",
    ];

    container.style.backgroundColor = colors[index] || "#fff";
  }

  const serviceSwiper = new Swiper('.main_service .swiper', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  })

  $(document).ready(function () {
    function toggleTabContent(tabClass, contentClass) {
      $(".main_service_tab li").removeClass("active");
      $(".main_service_content").hide();
  
      $(tabClass).addClass("active");
      $(contentClass).show();
    }
  
    $(".main_service_tab li a").on("click", function (e) {
      e.preventDefault();
  
      const selectedTab = $(this).parent();
  
      if (selectedTab.hasClass("tab1")) {
        toggleTabContent(".tab1", ".cont1");
      } else if (selectedTab.hasClass("tab2")) {
        toggleTabContent(".tab2", ".cont2");
      }
    });
  
    // 초기 상태: 첫 번째 탭과 콘텐츠 활성화
    toggleTabContent(".tab1", ".cont1");
  });
  
  
});
