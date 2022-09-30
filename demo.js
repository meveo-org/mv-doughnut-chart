import { LitElement, html, css } from 'lit'
//import "mv-container";
import './donutchart/src/js/mv-donut-chart.js'

import { DATA } from "./donutchart/src/js/data.js";

export class MvChartBubbleDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
      _data: { type: Object, state: true, reflect: true }
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
        display: block;
        left: 0px;
        top: 10%;
        min-height: 50% !important;
        height:80% !important;
        min-width: 200px !important;
        box-shadow: 10px 10px 10px #ccc;
        border-radius: 0px 20px 20px 0px;
        padding: 50px 20px;
        
      }

      #button-change {z-index: 9999;
        float: right;
        position: fixed;
        bottom: 20px;
        background-color: #fff;
        border: solid 1px #000;
        padding: 10px 50px;
        }


        


    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this._data = DATA;
  }

  firstUpdated() {

  }

  updated() {
    console.log("Updated");
  }

  render() {
    console.log("Rendering !");

    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />
          Light
        </label>
        <label>
          <input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />
          Dark
        </label>
      </fieldset>
      
      <mv-container class="main-container" .theme="${this.theme}">
        <mv-chart-donut .data="${this._data}"
        >
      
        <img src="./donutchart/src/img/donut-img.svg"     style="width: 100px;position: relative;top: 40px;"/>
                  <br />
                  <span class="title" style="font-size: 40px;position: relative;top: 50px;">Profil</span>
                  <br />
                  <span class="result" style="font-size: 150px;position: relative; top: 25px;">10%</span>
                
                </mv-chart-donut>
      </mv-container>
      
      <textarea id="data-donut" style="height:600px;width:40%;margin:auto;">${JSON.stringify(this._data, null, 2)}</textarea>

      <input type="submit" value="Reload !" id ="button-change" @click="${this.getNewVal}">


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

    this._data = JSON.parse(newVal);
    

  }
}

customElements.define('mv-donut-demo', MvChartBubbleDemo)
