import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']

})
export class LogInComponent implements OnInit {
  Roles: any = ['Admin', 'Delegator', 'Independent'];
  selectedRole: string;
  login : FormGroup;

  constructor(private appService: AppService, private router: Router, private httpClient: HttpClient){}

  parsevalue(){
    let data = this.login.value;
    let body = {
    email: data.email,
    password : data.password,
    role : data.role,
    }
    return body;
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl (null,[Validators.required]),
      password: new FormControl (null,[Validators.required]),
      role: new FormControl (null,[Validators.required]),
  })
}
  public onLoginClick(){
    this.appService.loginPage(this.parsevalue()).subscribe((response: {ADMIN_ID?:number,D_ID?:number,ID_ID?:number}) => {
       console.log(response);
       if(this.selectedRole=='Admin'){
         const queryParams = {id: response[0].ADMIN_ID}
         console.log(queryParams);
        this.router.navigate(['./adminhome'],{queryParams});

       }

        if(this.selectedRole=='Delegator'){
          const queryParams = {d_id: response[0].D_ID}
          this.router.navigate(['./delegatehome'], {queryParams});
        }
        if(this.selectedRole=='Independent'){
          const queryParams = {id_id: response[0].ID_ID}
          this.router.navigate(['./independenthome'], {queryParams});
        }

      }, error =>{
        alert("Failed to login")
      });

  }
  changeValue(event: MatSelectChange){
    this.selectedRole = event.value;
  }

}
