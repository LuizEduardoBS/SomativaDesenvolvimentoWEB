var ctx2 = document.getElementById("doughnut").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [     
    "Granola Frutas",
    "Granola Original",
    "Granola Banana",
    "Descarte",
    "Granola Power",
  ],

    datasets: [
      {
        label: "Produção (Proporção)",
        data: [12500, 11632, 12387, 3266, 14054],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
