import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  Region: any = ['Beirut','North', 'South', 'Mount Lebanon'];
  registerForm: FormGroup;
  admin_id;

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  submitted= false;
  onSubmit() { this.submitted = true;
    console.log(this.parseValue());
    this.appService.createAdmins(this.parseValue()).subscribe(response => {
      console.log(response);
    })
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl (null,[Validators.required]),
      lastName: new FormControl (null,[Validators.required]),
      email: new FormControl (null,[Validators.required]),
      phoneNumber: new FormControl (null,[Validators.required]),
      birthday: new FormControl (null, [Validators.required]),
      region: new FormControl (null, [Validators.required]),
      password: new FormControl (null, [Validators.required]),
      role:  new FormControl (null, [Validators.required])
    });
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
  }
  parseValue(){
    let data = this.registerForm.value;
    let body = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      birthday : data.birthday,
      phone_number: data.phoneNumber,
      place : data.region,
      password : data.password
    }
    return body;
  }

}



