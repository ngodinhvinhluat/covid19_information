import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import {ListInforComponent} from '../app/information/list-infor.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CountryCaseChartComponent } from './country-case-chart/country-case-chart.component';
import { FormsModule } from '@angular/forms';
import { CountPieLineChartComponent } from './count-pie-line-chart/count-pie-line-chart.component';
import { WorldPieChartComponent } from './world-pie-chart/world-pie-chart.component';
import { TotalInforComponent } from './total-infor/total-infor.component';
import { TotalVieComponent } from './total-vie/total-vie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListInforComponent,
    CountryCaseChartComponent,
    CountPieLineChartComponent,
    WorldPieChartComponent,
    TotalInforComponent,
    TotalVieComponent
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts
    }),
    [FlexmonsterPivotModule],
    HighchartsChartModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'infor', component: ListInforComponent },
    ]),
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
