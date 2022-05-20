import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';

type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-barchar-for-vie',
  templateUrl: './barchar-for-vie.component.html',
  styleUrls: ['./barchar-for-vie.component.css']
})
export class BarcharForVieComponent implements OnInit {

  constructor(private informationService: InformationService

    ,private http: HttpClient) { }


  ngOnInit(): void {
    this.getData()
   
  }
  data:any[]=[]
  overview:any[]=[]
  dates:any[]=[]
  cases:any[]=[]
  deaths:any[]=[]
  recoverys:any[]=[]
  treatings:any[]=[]
  totalWorld:any
  totalDeath:any
  totalRecover:any
  totalTreating:any
  barChartOption:any
  getData()
  {
    this.informationService.getJSON().subscribe(data => {
      //console.log(data);
      this.overview=data.overview
      this.dates=this.overview.map(c=>c.date)
      this.deaths=this.overview.map(x=>x.death)
      this.recoverys=this.overview.map(x=>x.recovered)
      this.treatings=this.overview.map(x=>x.treating)
      this.cases=this.overview.map(x=>x.cases)
      this.setOption()
     // this.setData()
      });
    //this.getAll();

  }
  setData()
  {
      //console.log('total world: ', this.d);
      this.totalWorld=this.data[0].total.world.cases
      this.totalDeath=this.data[0].total.world.death
      this.totalRecover=this.data[0].total.world.recovered
      this.totalTreating=this.data[0].total.world.treating
  }
  
  setOption()
  {
    this.barChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Cases', 'Death', 'Recovered', 'Treating']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data:this.dates
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cases',
          type: 'bar',
          barGap: 0,
          label: 'labelOption',
          emphasis: {
            focus: 'series'
          },
          data: this.cases
        },
        {
          name: 'Death',
          type: 'bar',
          label: 'labelOption',
          emphasis: {
            focus: 'series'
          },
          data:  this.deaths
        },
        {
          name: 'Recovered',
          type: 'bar',
          label: 'labelOption',
          emphasis: {
            focus: 'series'
          },
          data: this.recoverys
        },
        {
          name: 'Treating',
          type: 'bar',
          label: 'labelOption',
          emphasis: {
            focus: 'series'
          },
          data:  this.treatings
        }
      ]
    };
  }
}
