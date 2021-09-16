import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service'
@Component({
  selector: 'app-viewindependents',
  templateUrl: './viewindependents.component.html',
  styleUrls: ['./viewindependents.component.css']
})
export class ViewindependentsComponent implements OnInit {
  admin_id;
  independents;
  columns = ["Independent Id","First Name","Last Name", "Email", "Phone","Birthday", "Region","Password"];


  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.appService.listIndependents({admin_id: this.admin_id}).subscribe(response =>{
      this.independents = response;
      console.log(response);
      })
  }


}
