import { LitElement, html, css } from 'lit'
import { Chart, DoughnutController, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'



Chart.register(DoughnutController, ArcElement);



export class MvChart extends LitElement {
  static get properties() {
    return {
      data: {
        type: Object,
        reflect: true,
      },

      displayResult: { type: String, attribute: "display-result", reflect: true },
      displayLabel: { type: String, attribute: "display-label", reflect: true },


      //  valid theme values are: "light", "dark"    default: "light"
      theme: {
        type: String,
        attribute: true,
      },
    }
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --chart-margin: var(--mv-chart-margin, auto);
        --chart-height: var(--mv-chart-height, 300px);
        --chart-width: var(--mv-chart-width, 400px);
        --light-background: var(--mv-chart-background, #ffffff);
        --dark-background: var(--mv-chart-dark-background, #373e48);
        --light-color: var(--mv-chart-light-color, #000000);
        --dark-color: var(--mv-chart-dark-color, #ffffff);
      }

      .mv-chart {
        margin: var(--chart-margin);
        height: var(--chart-height);
        width: var(--chart-width);
        position: relative;
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }

      /* Chart.js custom styles 
     *
     * DOM element rendering detection
     * https://davidwalsh.name/detect-node-insertion
     */
      @keyframes chartjs-render-animation {
        from {
          opacity: 0.99;
        }
        to {
          opacity: 1;
        }
      }

      .chartjs-render-monitor {
        animation: chartjs-render-animation 0.001s;
      }

      /*
     * DOM element resizing detection
     * https://github.com/marcj/css-element-queries
     */
      .chartjs-size-monitor,
      .chartjs-size-monitor-expand,
      .chartjs-size-monitor-shrink {
        position: absolute;
        direction: ltr;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        pointer-events: none;
        visibility: hidden;
        z-index: -1;
      }

      .chartjs-size-monitor-expand > div {
        position: absolute;
        width: 1000000px;
        height: 1000000px;
        left: 0;
        top: 0;
      }

      .chartjs-size-monitor-shrink > div {
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
      }

      .doughnut.large {
        --mv-container-padding: 0 20px;
        --mv-container-min-width: 400px;
        --mv-container-max-width: 400px;
        --mv-container-min-height: 570px;
      }

      .doughnut.large .gradient-test {
        --mv-chart-height: 400px;
        --mv-chart-width: 400px;
        height: 400px;
        width: 400px;
      }

      .doughnut.small {
        --mv-container-padding: 0 20px;
        --mv-container-min-width: 200px;
        --mv-container-max-width: 200px;
        --mv-container-min-height: 280px;
        --mv-container-max-height: 280px;
      }

      .doughnut.small .gradient-test {
        --mv-chart-height: 200px;
        --mv-chart-width: 200px;
        height: 200px;
        width: 200px;
      }

      /*donut chart*/

      .circle-bubble-1 {
        width: 380px;
        height: 380px;
        margin: auto;
        background-color: #c0e0e5;
        border-radius: 50%;
        position: relative !important;
        margin: auto;
        top: 100px;
      }
      .circle-bubble-2 {
        width: 350px;
        height: 350px;
        margin: auto;
        background-color: #dce9f2;
        border-radius: 50%;
        position: relative;
        top: 15px;
      }
      .circle-bubble-3 {
        width: 300px;
        height: 300px;
        margin: auto;
        background-color: #fff;
        box-shadow: 0px 15px 15px #ccc;
        border-radius: 50%;
        position: relative;
        top: 25px;
      }

      .center {
        width: 485px;
        height: 485px;
        background-color: rgb(220, 233, 242);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -240px;
        top: 45px;
        z-index: 999;
      }

      .inner {
        width: 400px;
        height: 400px;
        background-color: rgb(69, 141, 183);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -199px;
        top: 40px;
        z-index: 9991;
        color: #fff;
        text-align: center;

        font-weight: bold;
        box-shadow: 0px 10px 10px #ccc;
      }

      .back {
        width: 580px;
        height: 580px;
        background-color: rgb(220, 233, 242);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -290px;
        top: 65px;
        z-index: 0;
      }

      .back-stroke {
        width: 700px;
        height: 700px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -350px;
        top: 25px;
        z-index: 0;
        box-shadow: 0px 0px 20px #ccc;
        background-color: #fff;
      }

      .big-circle {
        border: solid 5px #dfdfdf;
        width: 750px;
        height: 750px;
        border-radius: 50%;
        position: relative;
        left: 50%;
        margin-left: -350px;
        top: -100px;
        background-color: #ecf5f9;
      }

      .inner span:first-child {
        font-size: 30px;

        position: relative;
        top: 70px;
      }

      .inner .result {
        font-size: 150px;
        position: relative;
        top: 25px;
      }

      .inner .title {

      }

      .inner img {
        width: 100px;
        position: relative;
        top: 40px;
      }

      .labelindic {
        position: absolute;
        left: 50%;
        z-index: 9999;
        width: 435px;
        margin-left: -215px;
        text-align: center;
        top: 310px;
      }

      .labelindic span {
        text-transform: uppercase;
        font-size: 11px;
        position: relative;
        display: block;
        line-height: 9px;
        line-height: 12px;
      }

      .labelindic a span span {
        font-size: 14px;
      }

      .labelindic a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        display: block;
        transform-origin: 420px center;
        transform: rotate(90deg);
        position: relative;
        right: 200px;
      }

      .labelindic a span {
        border-radius: 50%;
        background-color: #fff;
        font-size: 36px;
        width: 100px;
        height: 100px;
        padding: 10px;
        box-shadow: 0px 0px 20px #ccc;
      }

      .labelindic a span img {
        display: none;
        position: absolute;
        right: -20px;
        bottom: 100px;
        transform: scale(1.5);
      }

      .labelindic .label {
        font-weight: normal;
        font-size: 14px;
        margin-bottom: 10px;
        padding-top: 20px;
        display: block;
      }

      .nolink a:hover {
        text-decoration: none;
        cursor: default;
      }

      a.nolink:hover {
        cursor: context-menu !important;
        background-color: #fff;
        border-color: #dce9f2 !important;
      }

      .labelindic a:hover img {
        display: block !important;
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .resultats > span {
        position: relative;
        top: 30px;
      }
      .resultats:hover {
        background-color: #dce9f2;
        border-color: #fff !important;
      }

      .mv-chart-canvas {
        display: block;
        box-sizing: border-box;
        height: 540px !important;
        width: 720px !important;
        left: -155px;
        position: relative;
        top: 18px;
      }
    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.chart =null
  }

  render() {
    return html`


${this.convertToChrtJsFormat(this.data)}


      <div style="transform: scale(0.5);margin-top:  100px;">
        <div class="big-circle">
          <div class="back-stroke">
            <div class="back">
              <div class="mv-chart">
                <canvas class="mv-chart-canvas"></canvas>
              </div>

              <div class="center">
                <div class="inner">

                <slot>
              </slot>
                 
                </div>
              </div>
            </div>
          </div>

          <div id="bubbles">${ this.displayDonutBubbles()}</div>
        </div>
      </div>
    `
  }

  updated() {


    
    this.displayChart()
    
   
  }

  displayChart() {




    if (this.chart){

      this.chart.destroy()


    }




    const plugins = this.plugins || []
    plugins.push(ChartDataLabels)
    const canvas = this.shadowRoot
      .querySelector('.mv-chart-canvas')
      .getContext('2d')

    this.chart = new Chart(canvas, this.data)




   
  }





  
  convertToChrtJsFormat(input) {


    let backgroundColors=[]  
    let linksIn=[]
    let names =[]
    let datas=[]


      var obj = input;

     



            let i = 0;

                for(var key in obj) {
                  if( i<200 ){
                  var value = obj[key]

                    names.push('"'+value.name+'"')
                    datas.push('"'+value.data+'"')



                    backgroundColors.push('"'+value.backgroundColor+'"')
                    linksIn.push('"' + value.link + '"')
                    i++
                

                  }
                }

                let reformatData = '{ "result" : "100%", "imgUrl": "./web_modules/mv-chart/chartjs/donutchart/img/donut-img.svg", "label" :"Profil", "data" :{ "label" : "donut","names" : ['+names+'], "datasets" :[{ "label" : "donut" , "data" : ['+datas+'],"links" : ['+linksIn+'], "backgroundColor" : ['+backgroundColors+']}],"hoverOffset": 4, "doughnut": {"borderWidth": 100 }},"options" :{"responsive" : true, "maintainAspectRatio" : false,"plugins": {  "datalabels": {"color": "#ffffff", "font": { "size": 18, "weight": "bold" } }  }, "legend": {  "display": false }, "title": {"display": false }, "animation": { "animateScale": true, "animateRotate": true }, "tooltips": { "enabled": false }}}'

                this.data = JSON.parse(reformatData)

                this.data.data.type = "doughnut"






                console.log(this.data)

    }





  displayDonutBubbles() {
    let loop = new Array()

    let max = this.data.data.datasets[0].data.length;

    let positionDeg = new Array()
    let ratio = 360 / max
    let pos = new Array()

    // TODO: Modify the algo to adapt to the new data format
    for (let i = 0; i < max; i++) {
      if (this.data.data.datasets[0].data[i]) {
        const valeur = this.data.data.datasets[0].data[i]
        const label = this.data.data.names[i].substr(0, 25)

        positionDeg[i] = ratio * i

        pos[i] = -90 * (i + 1) - positionDeg[i] - 90 * (i + 1) - 90

        if (i % 2 == 0) {
          pos[i] = pos[i] + 180
        } else {
          null
        }

        if (this.data.data.datasets[0].links[i] != '') {
          loop[i] = html`
            <div
              class="label${i + 1} labelindic pos-${i + 1}-${max}"
              style="transform: rotate(${positionDeg[i]}deg);"
            >
              <a href="${this.data.data.datasets[0].links[i]}" target="_blank">
                <span
                  style="transform: rotate(${pos[i]}deg);border:solid 6px ${this.data.data.datasets[0].backgroundColor[i]};"
                >
                  <img
                    src="./donutchart/src/img/fiche-donut.svg"
                    style="display:none;"
                  />
                  <b class="label">${label}</b>
                  <br />
                  <b class="hits">${valeur}</b>
                </span>
              </a>
            </div>
          `
        } else {
          loop[i] = html`
            <div
              class="label${i + 1} labelindic pos-${i + 1}-${max} nolink"
              style="transform: rotate(${positionDeg[i]}deg);"
            >
              <a>
                <span
                  style="transform: rotate(${pos[i]}deg);border:solid 6px ${this.data.data.datasets[0].backgroundColor[i]};"
                >
                  <b class="label">${label}</b>
                  <br />
                  <b class="hits">${valeur}</b>
                </span>
              </a>
            </div>
          `
        }
      }
    }

    return loop;
  }
}

customElements.define('mv-chart-donut', MvChart)
