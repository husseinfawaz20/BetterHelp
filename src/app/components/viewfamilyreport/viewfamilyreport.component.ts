import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-viewfamilyreport',
  templateUrl: './viewfamilyreport.component.html',
  styleUrls: ['./viewfamilyreport.component.css']
})
export class ViewfamilyreportComponent implements OnInit {

  familiesAdmin;
  familiesIndependent
  columns = ["Type","Amount","Date","Total"];
  rows = ["Municipality", "Independent"]
  admin_id;
  family_id;
  totalAdmin = 0;
  totalIndependent = 0;

  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
     if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    if(this.route.snapshot.queryParamMap.get('pf_id')){
      this.family_id = this.route.snapshot.queryParamMap.get('pf_id');
    }
    this.appService.getAdminFamilyReport({pf_id: this.family_id}).subscribe(response => {
      this.familiesAdmin = response;
      this.familiesAdmin.forEach(element =>{
        this.totalAdmin += element.AMOUNT;
      });
    });
    this.appService.getIndependentFamilyReport({pf_id: this.family_id}).subscribe(response => {
      this.familiesIndependent = response;
      this.familiesIndependent.forEach(element =>{
        this.totalIndependent += element.AMOUNT;
      });
    });


  }


}
