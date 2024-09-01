$(function () {
  $("#header .gnb")
    .on("mouseenter", function () {
      $("#header").addClass("on");
    })
    .on("mouseleave", function () {
      $("#header").removeClass("on");
    });

    const swiper = new Swiper('.swiper', {
      autoplay: {
        delay: 3000,
      },
      loop: false,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          changeBackgroundColor(this.activeIndex);
        }
      },
     });

    function changeBackgroundColor(index) {
      const container = document.getElementById('mainSlide');
      const colors = [
        '#92b5f5',
        '#c9b980',
        '#88c7ec',
        '#d3b290',
        '#efb4ac',
        '#67aadf',
        '#70c9f0'
      ];

      container.style.backgroundColor = colors[index] || '#fff'
    }
});
