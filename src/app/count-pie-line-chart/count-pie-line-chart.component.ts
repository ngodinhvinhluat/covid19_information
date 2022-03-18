import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../app/information.service';
import { CountryStatus, Country } from '../../model/country';
import { tap } from 'rxjs/operators';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
@Component({
  selector: 'app-count-pie-line-chart',
  templateUrl: './count-pie-line-chart.component.html',
  styleUrls: ['./count-pie-line-chart.component.css']
})
export class CountPieLineChartComponent implements OnInit {


  
  ngOnInit(): void {
  }
  country :string=''
  dateTime :string=''
  confirmed:number=0
  recovered:number=0
  deaths :number=0

  selectedCountry:string=''
  countryCasesChartOptions: any;
 
  cases: CountryStatus[] = [];
  countries$ = this.informationService.getCountries$.pipe(tap(countries => {
    this.selectedCountry = countries[77].Slug;
    //this.setOptions();
    return
  }));
  constructor(private informationService: InformationService) {
  }
  onChangeCountry() {
      this.informationService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
      this.cases = cases;
      
    });
  }
  onGetCountry(e: any)
  {
    this.country=e
  }
  onGetDatetime(e: any)
  {
    this.dateTime=e
  }
  onGetDeath(e: any)
  {
    this.deaths=e
  }
  onGetConfirmed(e: any)
  {
    this.confirmed=e
  }
  onGetRecovered(e: any)
  {
    this.recovered=e
  }
 
}
