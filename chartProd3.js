document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("barraMes").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Dia 1",
      "Dia 2",
      "Dia 3",
      "Dia 4",
      "Dia 5",
      "Dia 6",
      "Dia 7",
      "Dia 8", 
      "Dia 9",
      "Dia 10",
      "Dia 11",
      "Dia 12",
      "Dia 13",
      "Dia 14",
      "Dia 15",
      "Dia 16",
      "Dia 17",
      "Dia 18",
      "Dia 19",
      "Dia 20",
      "Dia 21",
      "Dia 22",
      "Dia 23",
      "Dia 24",
      "Dia 25",
      "Dia 26",
      "Dia 27",
      "Dia 28",
      "Dia 29",
      "Dia 30",
      "Dia 31"],
      datasets: [
        {
          label: "Produção Mensal (kg)",
          data: [360, 180, 150, 230, 245, 210, 320, 322, 199, 222, 310, 315, 320, 345, 336, 
            289, 300, 303, 400, 389, 410, 420, 450, 430, 480, 410, 430, 410, 470, 450
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
