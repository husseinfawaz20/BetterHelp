import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registerfamilies',
  templateUrl: './registerfamilies.component.html',
  styleUrls: ['./registerfamilies.component.css']
})
export class RegisterfamiliesComponent implements OnInit {

  Region: any = ['Beirut','North', 'South', 'Mount Lebanon'];
  registerForm: FormGroup;
  admin_id;

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  submitted= false;
  onSubmit() { this.submitted = true;
    console.log(this.parseValue());
    this.appService.createFamily(this.parseValue()).subscribe(response => {
      console.log(response);
    })
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      familyName: new FormControl (null,[Validators.required]),
      fatherName: new FormControl (null,[Validators.required]),
      number: new FormControl (null,[Validators.required]),
      phoneNumber: new FormControl (null,[Validators.required]),
       fstate: new FormControl (null, [Validators.required]),
      
    });
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
  }
  parseValue(){
    let data = this.registerForm.value;
    let body = {
      father_name: data.fatherName,
      family_name: data.familyName,
      number_of_members: data.number,
      phone_number: data.phoneNumber,
      state : data.fstate,
       
    }
    return body;
  }

}
