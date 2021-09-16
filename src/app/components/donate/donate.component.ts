import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {


  registerForm: FormGroup;
  delegatorList;
  familyList;
  admin_id;

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  submitted= false;
  onSubmit() {
    this.submitted = true;
    console.log(this.parseValue());
    this.appService.createMission(this.parseValue()).subscribe((response: {insertId?: number}) => {
      console.log(response);
      this.registerForm.value.family.forEach(element => {
          this.appService.assignDonationToFamily({Miss_id:response.insertId, pf_id: element})
          .subscribe(result =>{
            console.log(result);
          })
      });
    })
   }

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.registerForm = new FormGroup({
      amount: new FormControl (null,[Validators.required]),
      date: new FormControl (null,[Validators.required]),
      delegator: new FormControl (null,[Validators.required]),
      family: new FormControl (null, [Validators.required]),
    });
    this.appService.listDelegators({admin_id: this.admin_id}).subscribe(response =>{
      console.log(response);
      this.delegatorList = response;
    });
    this.appService.listFamilyAdmin().subscribe(response =>{
      console.log(response);
      this.familyList = response;
    });
  }
  parseValue(){
    let data = this.registerForm.value;
    let body = {
      admin_id: this.admin_id,
      amount: data.amount,
      start_time: data.date,
      d_id : data.delegator,
      state:"Created"
    }
    return body;
  }


}



