import { LitElement, html, css } from 'lit'
//import "mv-container";
import './donutchart/src/js/mv-donut-chart.js'
import { DOUGHNUT_CONFIG } from './donutchart/src/js/data.js'

export class MvChartBubbleDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
      DOUGHNUT_CONFIG: {
        type: Object,
        attribute: false,
        reflect: true,
      },
    }
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }

      .mv-chart-demo {
        --mv-chart-margin: auto;
        --mv-chart-height: 500px;
        --mv-chart-width: 600px;
      }

      .main-container {
        --mv-container-min-width: 1000px;
      }

      .dashboard-sample {
        --mv-container-min-width: 950px;
        --mv-container-padding: 40px;
      }

      .dashboard-container {
        display: grid;
        grid-template-columns: 450px 450px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

      .dashboard-grid {
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

      textarea {
        position: fixed;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        height: 30% !important;
        top: 80%;
        width: 100% !important;
        display: block;
      }
    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.DOUGHNUT_CONFIG
  }

  firstUpdated() {}

  render() {
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked
            @change="${this.changeTheme}"
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            @change="${this.changeTheme}"
          />
          Dark
        </label>
      </fieldset>

      <mv-container class="main-container" .theme="${this.theme}">
        <mv-chart-donut .data="${DOUGHNUT_CONFIG}"></mv-chart-donut>
      </mv-container>

      <textarea
        id="data-donut"
        style="height:600px;width:40%;margin:auto;"
        @change="${this.getNewVal}"
      >
    ${JSON.stringify(DOUGHNUT_CONFIG)}
</textarea>
    `
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent
    this.theme = value
  }

  getNewVal() {
    let newVal = this.shadowRoot.querySelector('textarea').value
    this.DOUGHNUT_CONFIG = JSON.parse(newVal)
    let DOUGHNUT_CONFIG = this.DOUGHNUT_CONFIG
    let elementChild = (this.shadowRoot.querySelector(
      'mv-chart-donut',
    ).data = DOUGHNUT_CONFIG)
    this.shadowRoot.querySelector('mv-chart-donut').displayChart()
    this.shadowRoot.querySelector('mv-chart-donut').displayDonutBubbles()
  }
}

customElements.define('mv-donut-demo', MvChartBubbleDemo)
