document.addEventListener("DOMContentLoaded", function () {
  var ctxPolar = document.getElementById("areaPolar").getContext("2d");

  const polarData = {
    labels: [
      "Granola Frutas",
      "Granola Original",
      "Granola Banana",
      "Descarte",
      "Granola Power",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [12500, 11632, 12387, 3266, 14054],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const polarConfig = {
    type: "polarArea",
    data: polarData,
    options: {
      responsive: true,
      scales: {
        r: {
          ticks: {
            backdropColor: "rgba(0,0,0,0)", // Remover fundo das marcas de escala
          },
        },
      },
    },
  };

  new Chart(ctxPolar, polarConfig);
});
