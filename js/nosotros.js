new WOW().init();
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
var counterCreditos = new CountUp("count-creditos", 0, 85000, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
  suffix: ""
});

var counterAnios = new CountUp("count-anios", 0, 4, 0, 6, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: "."
});

var counterColaboradores = new CountUp("count-colaboradores", 0, 30, 0, 8, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: "."
});
