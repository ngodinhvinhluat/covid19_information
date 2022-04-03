import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InformationService } from '../../app/information.service';
import { CountryStatus, Country } from '../../model/country';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-country-case-chart',
  templateUrl: './country-case-chart.component.html',
  styleUrls: ['./country-case-chart.component.css']
})
export class CountryCaseChartComponent implements OnInit{
  @Output() country = new EventEmitter<string>();
  @Output() dateTime = new EventEmitter<string>();
  @Output() confirmed = new EventEmitter<number>();
  @Output() recovered = new EventEmitter<number>();
  @Output() deaths = new EventEmitter<number>();

ngOnInit(): void {
      
  }
  selectedCountry:string=''
  countryCasesChartOptions: any;
  
  cases: CountryStatus[] = [];
  countries$ = this.informationService.getCountries$.pipe(tap(countries => {
    this.selectedCountry = countries[77].Slug;
    this.setOptions();
  }));
  constructor(private informationService: InformationService) {
  }
  onChangeCountry() {
     this.informationService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
      this.cases = cases;
      this.setOptions();
    });
  }
  setOptions() {
    this.countryCasesChartOptions = {
      title: {
        text: 'COVID-19 STATUS CHART',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {
      },
      xAxis: {
        splitNumber:15,
        //max:this.cases.length/15,
        //min:this.cases.length/150,
        data: this.cases.map(c => new Date(c.Date).toLocaleDateString()),
      },
      yAxis: {
        type: 'value'
      },
      series: [
      {
        name: 'Confirmed',
        type: 'line',
        data: this.cases.map(c => c.Confirmed),
      },
      {
        name: 'Recovered',
        type: 'line',
        data: this.cases.map(c => c.Recovered),
      },
      {
        name: 'Deaths',
        type: 'line',
        data: this.cases.map(c => c.Deaths),
      },
      ]
    };
  }
  setValueCurrent(e:any)
  {
    //this.country.emit('hello')
    this.country.emit(this.cases[e.dataIndex].Country)
    this.dateTime.emit(this.cases[e.dataIndex].Date.substring(0,10))
    this.confirmed.emit(this.cases[e.dataIndex].Confirmed)
    this.deaths.emit(this.cases[e.dataIndex].Deaths)
    this.recovered.emit(this.cases[e.dataIndex].Recovered)
    //console.log(this.cases[e.dataIndex])
    //  console.log(e.dataIndex)
  }
}
