import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListInforComponent} from '../app/information/list-infor.component'
import {CountryCaseChartComponent} from '../app/country-case-chart/country-case-chart.component'
import {CountPieLineChartComponent} from '../app/count-pie-line-chart/count-pie-line-chart.component'
import {WorldPieChartComponent} from '../app/world-pie-chart/world-pie-chart.component'
import {TotalInforComponent} from '../app/total-infor/total-infor.component'
const routes: Routes = [
  {path:'infor',component:ListInforComponent},
  //{path:'detail',component:CountryCaseChartComponent},
  {path:'infor-wo',component:CountPieLineChartComponent},
  {path:'pie-world',component:WorldPieChartComponent},
  {path:'total-infor',component:TotalInforComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
