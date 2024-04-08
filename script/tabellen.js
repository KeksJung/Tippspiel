const xValues = ["1", "2", "3", "4", "5", "6", "7", "8"];
const yValues = [55, 49, 44, 35, 40, 40, 40,30]; //"rgba(0,0,255,1.0)"
const barColors = ["red", "green", "blue", "orange", "brown", "yellow", "darkgreen", "lightblue"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            borderWidth: 2
        }]
    },
    options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          legend: { display: false },
          title: {
              display: true,
              text: "Zwischenstand"
          }
    }
})

