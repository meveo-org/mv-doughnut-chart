export const DOUGHNUT_CONFIG = {
  type: "doughnut",
  imgUrl: "./donutchart/src/img/donut-img.svg",
  options: {

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold"
        }
      }
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      enabled: false
    }
  }
}
