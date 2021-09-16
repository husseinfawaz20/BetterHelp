import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-viewdelegators',
  templateUrl: './viewdelegators.component.html',
  styleUrls: ['./viewdelegators.component.css']
})
export class ViewdelegatorsComponent implements OnInit {
delegators;
columns = ["Delegator Id","First Name","Last Name", "Email", "Phone","Birthday", "Region","Password"];
 admin_id;


  constructor(private router: Router,private appService: AppService,private route: ActivatedRoute) {}


  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.appService.listDelegators({admin_id: this.admin_id}).subscribe(response =>{
      this.delegators = response;
      console.log(response);
      });
  }


}
