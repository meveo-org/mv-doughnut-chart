import {LitElement, html, css} from "https://cdn.jsdelivr.net/gh/meveo-org/mv-dependencies@master/lit-element.js";
import "../lib/chart.min.js";
import "../lib/chartjs-plugin-datalabels.min.js";


export class MvChart extends LitElement {
    static get properties() {
        return {
            type: {
                type: String,
                attribute: true
            },
            data: {
                type: Object,
                attribute: false,
                reflect: true
            },
            options: {
                type: Object,
                attribute: false,
                reflect: true
            },
            plugins: {
                type: Object,
                attribute: false,
                reflect: true
            },

            //  valid theme values are: "light", "dark"    default: "light"
            theme: {
                type: String,
                attribute: true
            }
        };
    }

    static get styles() {
        return css `
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
        width: 450px;
        height: 450px;
        background-color: #dce9f2;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -225px;
        top: 25px;
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
        top: 25px;
        z-index: 9991;
        color: #fff;
        text-align: center;

        font-weight: bold;
        box-shadow: 0px 10px 10px #ccc;
      }

      .back {
        width: 600px;
        height: 600px;
        background-color: #dce9f2;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -300px;
        top: 45px;
        z-index: 0;
        box-shadow: 0px 10px 10px #ccc;
      }

      .back-stroke {
        width: 700px;
        height: 700px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -350px;
        top: -100px;
        z-index: 0;
       /* box-shadow: rgb(204 204 204) 0px 10px 10px; */
        border: 5px solid rgb(204, 204, 204);
      }

      .inner span:first-child {
        font-size: 30px;

        position: relative;
        top: 70px;
      }

      .inner .result {
        font-size: 150px;
        top: 50px;
        position: relative;
    }


      .inner .title {
        font-size: 40px;
        position: relative;
        top: 50px;
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
  width: 100px;
  margin-left: -50px;
  text-align: center;
  top: 170px;
}



    .labelindic span{text-transform:uppercase;font-size: 11px;position:relative;display:block;line-height:9px;line-height:12px;}

    .labelindic a span  span {font-size:14px;}



  .labelindic a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    display: block;
    transform-origin: 420px center;
    transform: rotate(90deg);
    position: relative;
    

    right: 200px;


}

.labelindic a span{    border-radius: 50%;  background-color:#fff;  font-size: 36px;    width: 100px;
  height: 100px;padding :10px;}




.labelindic .label{font-weight:normal;font-size:14px;margin-bottom:10px;padding-top : 20px  ;display:block;}
.labelindic .hits{}


.nolink a:hover{text-decoration:none;cursor:default;}




a.nolink:hover{cursor:context-menu !important;background-color:#fff;border-color:#DCE9F2 !important;}




@keyframes fadein {
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
.resultats > span {
position:relative;top:30px;
}
.resultats:hover{background-color:#DCE9F2;border-color:#fff !important;}


.mv-chart-canvas {
  width: 720px !important;
  height: 535px !important;
  display: block !important;
  margin: auto;
  left: -158px;
  top: -14px;
  position: relative;
}




    `;
    }

    constructor() {
        super();
        this.theme = "light";
        this.chart = null;
        this.valeur = null;
        this.label = null;
    }

    static get properties() {
        return {
            valeur: {
                type: Array
            },
            label: {
              type: Array
          }
        };
    }

    render() {
        return html `



<div style="transform: scale(0.5);">
<div class="back-stroke">
              <div class="back"></div>
            </div>
            <div class="center">
              <div class="inner">
                <img src="${this.data.imgUrl}" /><br /><span
                  class="title"
                  >${this.data.label}</span
                ><br /><span class="result"
                  >${this.data.result}</span
                >
              </div>
        

${this.displayDonutBubbles()}

</div>


      <div class="mv-chart">
        <canvas class="mv-chart-canvas"></canvas>
      </div>
      </div>




    `;
    }

    firstUpdated() {


     

     
        if (!this.chart) {
          const { data } = this;
            const plugins = this.plugins || [];
            plugins.push(ChartDataLabels);
            const canvas = this
                .shadowRoot
                .querySelector(".mv-chart-canvas")
                .getContext("2d");
            this.chart = new Chart(canvas, data);
        }

    }

 

    displayDonutBubbles() {
        let i;
        let loop = new Array();
        this.valeur = new Array();
        this.label = new Array();

        let max = this.data.data.datasets[0].data.length;


        let positionDeg =new Array();
        let ratio = 360/max;
        let pos = new Array();



        for (i = 0; i < max; i++) {

            if (this.data.data.datasets[0].data[i]) {

                this.valeur[i] = this.data
                    .data
                    .datasets[0]
                    .data[i];

                    this.label[i] = this.data.data.names[i];
                    this.label[i] = this.label[i].substr(0,25);

 positionDeg[i] = ratio*i; 


      if(i%2 == 0)
{
  pos[i] =  positionDeg[i]-90+90*positionDeg[i]+360/i;
}
else
{
  pos[i] =  positionDeg[i]-90*i+90*positionDeg[i]+180*i;
}


                if (this.data.data.datasets[0].links[i] != '') {









                loop[i] = html`
                <div class="label${i + 1} labelindic pos-${i + 1}-${max}" style="transform: rotate(${positionDeg[i]}deg);">
         
                  <a href="${this.data.data.datasets[0].links[i]}"  target="_blank">
                    <span  style="transform: rotate(${pos[i]}deg);border:solid 6px ${this.data.data.datasets[0].backgroundColor[i]};"   ><b class="label">${this.label[i]}</b><br/><b class="hits">${this
                        .valeur[i]}</b></span></a>
               
                </div>`;




                } else {
                            
                  loop[i] = html`
                <div class="label${i + 1} labelindic pos-${i + 1}-${max} nolink"  style="transform: rotate(${positionDeg[i]}deg);">
                <a>
                  <span  style="transform: rotate(${pos[i]}deg);border:solid 6px ${this.data.data.datasets[0].backgroundColor[i]};"><b class="label">${this.label[i]}</b><br/><b class="hits">${this.valeur[i]}</b></span></a>
                </div>`;




                }
              }



                 

        }
        return loop;
    }

}

customElements.define("mv-chart-donut", MvChart);
