import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-viewadminmission',
  templateUrl: './viewadminmission.component.html',
  styleUrls: ['./viewadminmission.component.css']
})
export class ViewadminmissionComponent implements OnInit {

  admin_id;
  mission;
  columns = ["Mission Id","Delegator Id","Date ","Amount", "Status"];

  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.appService.listMissionAdmin({admin_id: this.admin_id}).subscribe((response: {STATE?: string}[]) =>{
      this.mission = response;
  });

  }

}
