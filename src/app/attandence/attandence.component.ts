import { Component, OnInit } from '@angular/core';
import * as attendenceData from '../../assets/attendence-details.json';
import * as locationData from '../../assets/location.json';

@Component({
  selector: 'app-attandence',
  templateUrl: './attandence.component.html',
  styleUrls: ['./attandence.component.css']
})

export class AttandenceComponent implements OnInit {
    
  dataa = JSON.parse(JSON.stringify(attendenceData)).default;
  ldata = JSON.parse(JSON.stringify(locationData)).default;
  
  isShow : boolean = false;

  constructor() { }
  dtOptions:DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    }

    console.log(this.dataa.length);
    console.log(this.dataa);
    for(let i=0; i< this.dataa.length;i++){
      let date = new Date();
      date = JSON.parse(JSON.stringify(this.dataa[i].modified_date)) ;
      this.dataa[i].modified_date = date;
    }

  }

  showDetails(){
    this.isShow = !this.isShow;
  }

}
