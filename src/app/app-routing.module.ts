import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListInforComponent} from '../app/information/list-infor.component'
import {CountryCaseChartComponent} from '../app/country-case-chart/country-case-chart.component'
import {CountPieLineChartComponent} from '../app/count-pie-line-chart/count-pie-line-chart.component'
import {WorldPieChartComponent} from '../app/world-pie-chart/world-pie-chart.component'
import {TotalInforComponent} from '../app/total-infor/total-infor.component'
import {TotalVieComponent} from '../app/total-vie/total-vie.component'

const routes: Routes = [
  {path:'',component:CountPieLineChartComponent},
  {path:'infor',component:ListInforComponent},
  //{path:'detail',component:CountryCaseChartComponent},
  {path:'infor-wo',component:CountPieLineChartComponent},
  {path:'pie-world',component:WorldPieChartComponent},
  {path:'total-infor',component:TotalInforComponent},
  {path:'app-total-vie',component:TotalVieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
