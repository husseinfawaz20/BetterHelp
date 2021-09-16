import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-donateindependent',
  templateUrl: './donateindependent.component.html',
  styleUrls: ['./donateindependent.component.css']
})
export class DonateindependentComponent implements OnInit {

  registerForm: FormGroup;
  id_id;
  familyList;

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  submitted= false;
  onSubmit() {
    this.submitted = true;
    console.log(this.parseValue());
    this.appService.createIndependentHelp(this.parseValue()).subscribe((response: {insertId?: number}) => {
      console.log(response);
      this.appService.assignHelpToFamily({ pf_id: this.registerForm.value.family, h_id:response.insertId})
      .subscribe(result =>{
        console.log(result);
      })
          });
   }

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get('id_id')){
      this.id_id = this.route.snapshot.queryParamMap.get('id_id');
      console.log("id:"+this.id_id);
    }
    this.registerForm = new FormGroup({
      amount: new FormControl (null,[Validators.required]),
      date: new FormControl (null,[Validators.required]),
      family: new FormControl (null, [Validators.required]),
    });
    this.appService.listIndependentFamily({id_id: this.id_id}).subscribe(response =>{
      console.log(response);
      this.familyList = response;
    });
  }
  parseValue(){
    let data = this.registerForm.value;
    let body = {
      id_id: this.id_id,
      amount: data.amount,
      start_time: data.date,
    }
    return body;
  }


}

