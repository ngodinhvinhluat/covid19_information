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
  time:any
  cases: CountryStatus[] = [];
  dates:string[]=[]
  countries$ = this.informationService.getCountries$.pipe(tap(countries => {
    this.selectedCountry = countries[77].Slug;
    this.setOptions();
    return countries.sort()
  }));
  constructor(private informationService: InformationService) {
  }
  onChangeCountry() {
     this.informationService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
      this.cases = cases;
      this.setOptions();
    });
  }
  onChangeTime(even: any) {
    console.log(this.time)

    var month=(Number)(this.time.split('-')[1])
    var year=(Number)(this.time.split('-')[0])
    this.informationService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
     this.cases = cases;
     this.setTimeOptions(month-1,year);
   });
 }
  setOptions() {
    this.countryCasesChartOptions = {
      title: {
        text: '',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {
      },
      xAxis: {
        splitNumber:50,
        //max:this.cases.length/15,
        //min:this.cases.length/150,
       
        data:this.cases.map(c => new Date(c.Date).toLocaleDateString()),
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
  setTimeOptions(month:Number,year:Number) {
    var date=this.cases.filter(x=>{
     return new Date(x.Date).getMonth()==month && new Date(x.Date).getFullYear()==year
   }).map(c => new Date(c.Date).toLocaleDateString())
    this.countryCasesChartOptions = {
      title: {
        text: '',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {
      },
      xAxis: {
        splitNumber:50,
        //max:this.cases.length/15,
        //min:this.cases.length/150,
        data:this.cases.filter(x=>{
         return new Date(x.Date).getMonth()==month&& new Date(x.Date).getFullYear()==year
       }).map(c => new Date(c.Date).toLocaleDateString()),
        
      },
      yAxis: {
        type: 'value'
      },
      series: [
      {
        name: 'Confirmed',
        type: 'line',
        data: this.cases.filter(x=>{
          return  new Date(x.Date).getMonth()==month&& new Date(x.Date).getFullYear()==year
       }).map(c => c.Confirmed),
      },
      {
        name: 'Recovered',
        type: 'line',
        data: this.cases.filter(x=>{
          return  new Date(x.Date).getMonth()==month&& new Date(x.Date).getFullYear()==year
       }).map(c => c.Recovered),
      },
      {
        name: 'Deaths',
        type: 'line',
        data: this.cases.filter(x=>{
          return  new Date(x.Date).getMonth()==month&& new Date(x.Date).getFullYear()==year
       }).map(c => c.Deaths),
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
