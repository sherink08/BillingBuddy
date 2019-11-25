import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasJs/canvasjs.min.js';

//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-roomprogresschart',
  templateUrl: './roomprogresschart.component.html',
  styleUrls: ['./roomprogresschart.component.css']
})
export class RoomprogresschartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // chavasJS Chat intiation start
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      //exportEnabled: true,
      title:{
        text: "Monthly Rent Progress"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 0, name: "Shr" },
          { y: 0, name: "charl" },
          { y: 10, name: "shib" },
          { y: 10, name: "Mu" },
          { y: 10, name: "srb" },
          { y: 20, name: "Pending", color:"#ddd"}
        ]
      }]
    });
      
    chart.render();
  }
  // chavasJS Chat intiation end
}
