export const DOUGHNUT_CONFIG = {
  type: "king",
  result: Math.floor(Math.random() * 100),
  imgUrl: "./src/img/donut-img.svg",
  data: {

    names: [
      'Apple',
      'Windows',
      'Nokia',
      'Huawai',
      'Android',
      'linux'
    ],
    datasets: [{
      label: 'Donut',
      data: [Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)],
      backgroundColor: [

        '#0D94AD',
        '#7b4c9f',
        '#cc18e0',
        '#F14665',
        '#F1960C',
        '#4c9f62'

      ],
      links: [
        '',
        'http://microsoft.com',
        'http://nokia.com',
        'http://huawai.com',
        'http://google.com',
        'http://linux.org'

      ],
      hoverOffset: 4,
      doughnut: {
        borderWidth: 100
      }
    }]
  },
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
};
