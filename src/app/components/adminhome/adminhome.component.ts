import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
@Injectable()
export class AdminhomeComponent implements OnInit {
  admins;
  admin_id;

  constructor(private router: Router,private appService: AppService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
  }
  public onLoginClick(){
    this.router.navigate(['/register']);
  }
}
