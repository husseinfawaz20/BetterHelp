import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  d_id;
  mission;
  columns = ["Mission Id","Admin Id","Family Id ","Family Name", "Father Name", "Phone",  "Amount" , "Date", "Status"];
  isChecked = [];

  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('d_id')){
      this.d_id = this.route.snapshot.queryParamMap.get('d_id');
    }
    this.appService.listDelegatorMission({d_id: this.d_id}).subscribe((response: {STATE?: string}[]) =>{
      this.mission = response;
      response.forEach(element=>{
        if(element.STATE == 'DONE'){
          this.isChecked.push(1);
        }
        else{
          this.isChecked.push(0);
        }
      })
      console.log(response);
      })
  }
  onChange(event, mission_id?){
   this.appService.updateDelegatorMissionStatus({miss_id: mission_id}).subscribe(response =>{
     console.log(response);
   });

  }

}
