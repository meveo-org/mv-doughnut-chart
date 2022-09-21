# mv-chart-donut

MvChartDonut is a Meveo chart component (based on lit-element) that renders a content chart.  This is a component wrapper for [chartjs](https://www.chartjs.org/)

## Quick Start

To experiment with the MvChart component.

1. Clone this repo.

2. npm install

3. npm run dev

4. Update the chart demo component in demo.js file

## Sample usage

```html
<mv-chart-donut .data="${DONUT}"       // data properties
                .theme="${this.theme}" // theme is either "light" or "dark"
></mv-chart-donut>
```javascript
The chart has the following properties:
{
    names: ["Pinterest","Facebook"],
    datasets: [{label: "Donut",
    data: [10,20],
      backgroundColor: ["#0D94AD","#7b4c9f"],
      links: ["",""],
      hoverOffset: 4,
      doughnut: {
        borderWidth: 100
      }
    }]
  }
```

You can also check this [demo](https://chart.meveo.org/)

## Acknowledgement
Uses [chartjs](https://www.chartjs.org/) library for rendering the charts