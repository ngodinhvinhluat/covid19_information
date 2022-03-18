import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../app/information.service';
import { information } from '../../model/information.model'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-total-infor',
  templateUrl: './total-infor.component.html',
  styleUrls: ['./total-infor.component.css']
})
export class TotalInforComponent implements OnInit {

  constructor(private informationService: InformationService
    
    ,private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }
  totalWorld:number=0
  datas:information[]=[];
  d:any[]=[]
  getData()
  {
    this.informationService.getJSON().subscribe(data => {
      console.log(data);
      this.d.push(data)
      this.setData()
      });
    //this.getAll();
    console.log(this.d)
    
  }
  setData()
  {
      this.totalWorld=this.d[0].total.world.cases
  }
}
