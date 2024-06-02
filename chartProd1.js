document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("barra").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Linha 1", "Linha 2", "Linha 3", "Linha 4"],
      datasets: [
        {
          label: "Produção Mensal (kg)",
          data: [12500, 11632, 14054, 12387],
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
