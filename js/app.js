new WOW().init();

$(document).on("click", 'a[href^="#"]', function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    1000,
    "linear"
  );
});

$(".carousel-items").slick({
  dots: false,
  nextArrow: '<div class="nav-btn next-slide"></div>',
  prevArrow: '<div class="nav-btn prev-slide"></div>',
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var testimoniosWaypoint = new Waypoint({
  element: document.getElementById("cifras"),
  handler: function(direction) {
    if (!counterCreditos.error) {
      counterCreditos.start();
    } else {
      console.error(counterCreditos.error);
    }
    if (!counterAnios.error) {
      counterAnios.start();
    } else {
      console.error(counterAnios.error);
    }
    if (!counterColaboradores.error) {
      counterColaboradores.start();
    } else {
      console.error(counterColaboradores.error);
    }
  },
  offset: "50%"
});

// animacion de contadores con libreria countUp.js
var counterCreditos = new CountUp("count-creditos", 0, 27000, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
  suffix: ""
});

var counterAnios = new CountUp("count-anios", 0, 5, 0, 6, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: "."
});

var counterColaboradores = new CountUp("count-colaboradores", 0, 20, 0, 8, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: "."
});
