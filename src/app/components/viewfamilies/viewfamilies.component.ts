import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service'
@Component({
  selector: 'app-viewfamilies',
  templateUrl: './viewfamilies.component.html',
  styleUrls: ['./viewfamilies.component.css']
})
export class ViewfamiliesComponent implements OnInit {
  families;
  columns = ["Family Id","Family Name","Father Name", "Number of Members", "Phone","State of Family","View Family Report", "Press to Delete"];
  admin_id;

  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
     if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.appService.listFamilyAdmin().subscribe(response =>{
      this.families = response;
      console.log(response);
      })
  }
  onDeleteFamily(family_id){
    this.appService.deleteFamily({pf_id: family_id}).subscribe(response=>{
      console.log(response);
    })
    window.location.reload();
  }

}
