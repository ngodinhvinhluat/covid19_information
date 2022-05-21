import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewChild } from '@angular/core'
import * as Highcharts from 'highcharts/highmaps'
import { InformationService } from '../../app/information.service'
const { setData } = require('./formatData')
const worldMap = require('./js/vn-all.json')
@Component({
  selector: 'app-total-vie',
  templateUrl: './total-vie.component.html',
  styleUrls: ['./total-vie.component.css'],
})
export class TotalVieComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts
  chartConstructor = 'mapChart'
  // chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
  constructor(
    private informationService: InformationService,

<<<<<<< HEAD
  ngOnInit(): void {
    console.log(Highcharts)
    let a:any
    this.setFontName()
    console.log(a)
  }
setFontName()
{
  this.chartOptions.chart.map.objects.default.geometries[1].properties.name='Quảng Ninh'
  this.chartOptions.chart.map.objects.default.geometries[3].properties.name='Tiền Giang'
  this.chartOptions.chart.map.objects.default.geometries[4].properties.name='Bà Rịa - Vũng Tàu'
  this.chartOptions.chart.map.objects.default.geometries[5].properties.name='Bình Thuận'
  this.chartOptions.chart.map.objects.default.geometries[54].properties.name='Cao Bằng'
}

chartOptions: any= {
  chart: {
    map: worldMap
  },
  title: {
    text: "Highmaps for VietNam"
  },
  subtitle: {
    text:
      'Covid 19 in VietNam</a>'
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
      name: "Số ca nhiễm tại",
      states: {
        hover: {
          color: "red"
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
        ['vn-bn', 22], ['vn-317', 23], ['vn-nb', 24], ['vn-hm', 25],
        ['vn-ho', 26], ['vn-vc', 27], ['vn-318', 28], ['vn-bg', 29],
        ['vn-tb', 30], ['vn-ld', 31], ['vn-bp', 32], ['vn-py', 33],
        ['vn-bd', 34], ['vn-724', 35], ['vn-qg', 36], ['vn-331', 37],
        ['vn-dt', 38], ['vn-la', 39], ['vn-3623', 40], ['vn-337', 41],
        ['vn-bl', 42], ['vn-vl', 43], ['vn-tn', 44], ['vn-ty', 45],
        ['vn-li', 46], ['vn-311', 47], ['vn-hg', 48], ['vn-nd', 49],
        ['vn-328', 50], ['vn-na', 51], ['vn-qb', 52], ['vn-723', 53],
        ['vn-nt', 54], ['vn-6365', 55], ['vn-299', 56], ['vn-300', 57],
        ['vn-qt', 58], ['vn-tt', 59], ['vn-da', 60], ['vn-ag', 61],
        ['vn-cm', 62], ['vn-tv', 63], ['vn-cb', 64], ['vn-kg', 65],
        ['vn-lo', 66], ['vn-db', 67], ['vn-ls', 68], ['vn-th', 69],
        ['vn-307', 70], ['vn-tq', 71], ['vn-bi', 72], ['vn-333', 73]
        
      ]
    }
  ]
};
=======
    private http: HttpClient,
  ) {}

  chartOptions: any = {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'Highmaps basic demo',
    },
    subtitle: {
      text: 'Source map: World, Miller projection, medium resolution</a>',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'Random data',
        states: {
          hover: {
            color: '#ffff',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: [
          ['vn-3655', 10],
          ['vn-qn', 11],
          ['vn-kh', 12],
          ['vn-tg', 13],
          ['vn-bv', 14],
          ['vn-bu', 15],
          ['vn-hc', 16],
          ['vn-br', 17],
          ['vn-st', 18],
          ['vn-pt', 19],
          ['vn-yb', 20],
          ['vn-hd', 21],
          ['vn-bn', 22],
          ['vn-hy', 23],
          ['vn-nb', 24],
          ['vn-hm', 25],
          ['vn-ho', 26],
          ['vn-vc', 27],
          ['vn-hn', 28],
          ['vn-bg', 29],
          ['vn-tb', 30],
          ['vn-ld', 31],
          ['vn-bp', 32],
          ['vn-py', 33],
          ['vn-bd', 34],
          ['vn-gl', 35],
          ['vn-qg', 36],
          ['vn-dn', 37],
          ['vn-dt', 38],
          ['vn-la', 39],
          ['vn-hp', 40],
          ['vn-hag', 300],
          ['vn-bl', 42],
          ['vn-vl', 43],
          ['vn-tn', 44],
          ['vn-ty', 45],
          ['vn-li', 46],
          ['vn-sl', 47],
          ['vn-hg', 48],
          ['vn-nd', 49],
          ['vn-ht', 50],
          ['vn-na', 51],
          ['vn-qb', 52],
          ['vn-dlk', 53],
          ['vn-nt', 54],
          ['vn-dkn', 55],
          ['vn-kt', 56],
          ['vn-qnam', 57],
          ['vn-qt', 58],
          ['vn-tt', 59],
          ['vn-da', 60],
          ['vn-ag', 61],
          ['vn-cm', 62],
          ['vn-tv', 63],
          ['vn-cb', 64],
          ['vn-kg', 65],
          ['vn-lo', 66],
          ['vn-db', 67],
          ['vn-ls', 100],
          ['vn-th', 69],
          ['vn-bk', 70],
          ['vn-tq', 71],
          ['vn-bi', 72],
          ['vn-ct', 73],
        ],
      },
    ],
  }

  ngOnInit(): void {
    this.getData()
  }

  getData = async () => {
    this.informationService.getJSON().subscribe((data) => {
      this.chartOptions = Object(setData(data))
    })
  }
>>>>>>> 3dce3129723ab5ca3347289be5cd43de197af542
}
