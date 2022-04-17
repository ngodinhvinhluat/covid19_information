import { Component, OnInit,ViewChild  } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
const worldMap = require('./js/vn-all.json');
@Component({
  selector: 'app-total-vie',
  templateUrl: './total-vie.component.html',
  styleUrls: ['./total-vie.component.css']
})
export class TotalVieComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
 // chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];

  ngOnInit(): void {
    console.log(Highcharts)
    let a:any
    this.chartOptions.chart.map.objects.default.geometries[1].properties.name='Quảng Ninh'
    this.chartOptions.chart.map.objects.default.geometries[3].properties.name='Tiền Giang'
    this.chartOptions.chart.map.objects.default.geometries[4].properties.name='Bà Rịa - Vũng Tàu'
    console.log(a)
  }


chartOptions: any= {
  chart: {
    map: worldMap
  },
  title: {
    text: "Highmaps basic demo"
  },
  subtitle: {
    text:
      'Source map: World, Miller projection, medium resolution</a>'
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      alignTo: "spacingBox"
    }
  },
  legend: {
    enabled: true
  },
  colorAxis: {
    min: 0
  },
  series: [
    {
      type: "map",
      name: "Random data",
      states: {
        hover: {
          color: "#ffff"
        }
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}"
      },
      allAreas: false,
      data: [
       ['vn-3655', 10], ['vn-qn', 11], ['vn-kh', 12], ['vn-tg', 13],
        ['vn-bv', 14], ['vn-bu', 15], ['vn-hc', 16], ['vn-br', 17],
        ['vn-st', 18], ['vn-pt', 19], ['vn-yb', 20], ['vn-hd', 21],
        ['vn-bn', 22], ['vn-hy', 23], ['vn-nb', 24], ['vn-hm', 25],
        ['vn-ho', 26], ['vn-vc', 27], ['vn-hn', 28], ['vn-bg', 29],
        ['vn-tb', 30], ['vn-ld', 31], ['vn-bp', 32], ['vn-py', 33],
        ['vn-bd', 34], ['vn-gl', 35], ['vn-qg', 36], ['vn-dn', 37],
        ['vn-dt', 38], ['vn-la', 39], ['vn-hp', 40], ['vn-hag', 300],
        ['vn-bl', 42], ['vn-vl', 43], ['vn-tn', 44], ['vn-ty', 45],
        ['vn-li', 46], ['vn-sl', 47], ['vn-hg', 48], ['vn-nd', 49],
        ['vn-ht', 50], ['vn-na', 51], ['vn-qb', 52], ['vn-dlk', 53],
        ['vn-nt', 54], ['vn-dkn', 55], ['vn-kt', 56], ['vn-qnam', 57],
        ['vn-qt', 58], ['vn-tt', 59], ['vn-da', 60], ['vn-ag', 61],
        ['vn-cm', 62], ['vn-tv', 63], ['vn-cb', 64], ['vn-kg', 65],
        ['vn-lo', 66], ['vn-db', 67], ['vn-ls', 100], ['vn-th', 69],
        ['vn-bk', 70], ['vn-tq', 71], ['vn-bi', 72], ['vn-ct', 73]

      ]
    }
  ]
};
}
