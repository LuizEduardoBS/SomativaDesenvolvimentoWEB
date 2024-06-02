var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Vendas",
        data: [
          562025.63, 458632.51, 690214.0, 741558.98, 725980.47, 890741.84,
          891652.02, 810456.32, 788934.0, 901273.51, 935963.06, 952321.04,
        ],
        backgroundColor: "rgba(41, 155, 99, 1)",
        borderColor: "rgba(41, 155, 99, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
