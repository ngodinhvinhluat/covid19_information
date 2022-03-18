import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../app/information.service';
import { information } from '../../model/information.model'
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
@Component({
  selector: 'app-list-infor',
  templateUrl: './list-infor.component.html'
})
export class ListInforComponent implements OnInit {
  datas:information[]=[];
  d:any[]=[]
  constructor(private informationService: InformationService
    
    ,private http: HttpClient ) {

     }


  ngOnInit(): void {
   
   
  }

  // getAll(){
    
  //   let a=this.informationService.getInfor()
  //   console.log(a)
  // }
  getData()
  {
    this.informationService.getJSON().subscribe(data => {
      console.log(data);
      this.d.push(data)
      });
    //this.getAll();
    console.log(this.d)
  }
}