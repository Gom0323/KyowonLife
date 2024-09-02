$(function () {
  $("#header .gnb")
    .on("mouseenter", function () {
      $("#header").addClass("on");
    })
    .on("mouseleave", function () {
      $("#header").removeClass("on");
    });

  const swiper = new Swiper(".swiper", {
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
    },
    loop: false,
    pagination: {
      el: ".swiper-pagination",
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
});
