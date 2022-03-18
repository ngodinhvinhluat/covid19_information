import { Component, OnInit ,OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {  Input } from '@angular/core'; // First, import Input
@Component({
  selector: 'app-world-pie-chart',
  templateUrl: './world-pie-chart.component.html',
  styleUrls: ['./world-pie-chart.component.css']
})
export class WorldPieChartComponent implements OnInit,OnChanges  {

  
  constructor() { 
    
  }
  @Input() country = '';
  @Input() dateTime = '';
  @Input() Confirmed:number=0;
  @Input() Recovered :number=0;
  @Input() Deaths:number=0;
  ngOnInit(): void {
    //this.setOptions()
  }
  
  ngOnChanges(changes: SimpleChanges)
  {
    this.setOptions()
    //console.log(changes)
  }
  countryCasesChartOptions: any;
  setOptions() {
      this.countryCasesChartOptions = {
        title: {
          text: this.country,
          subtext: this.dateTime,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.Confirmed, name: 'Confirmed' },
              { value: this.Recovered, name: 'Recovered' },
              { value: this.Deaths, name: 'Deaths' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
  }
}
