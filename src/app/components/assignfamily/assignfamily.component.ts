import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-assignfamily',
  templateUrl: './assignfamily.component.html',
  styleUrls: ['./assignfamily.component.css']
})
export class AssignfamilyComponent implements OnInit {


  registerForm: FormGroup;
  independentList;
  familyList;
  admin_id;

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  submitted= false;
  onSubmit() {
    this.submitted = true;
    console.log(this.parseValue());
    let data =this.parseValue()
    this.registerForm.value.family.forEach(element => {
      this.appService.assignIndependentToFamily({id_id: data.id_id, pf_id:element}).subscribe((response) => {
      console.log(response);
      });
    })
   }

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.registerForm = new FormGroup({
      independent: new FormControl (null,[Validators.required]),
      family: new FormControl (null, [Validators.required]),
    });
    this.appService.listIndependents({admin_id: this.admin_id}).subscribe(response =>{
      console.log(response);
      this.independentList = response;
    });
    this.appService.listFamilyAdmin().subscribe(response =>{
      console.log(response);
      this.familyList = response;
    });
  }
  parseValue(){
    let data = this.registerForm.value;
    let body = {
      id_id: data.independent,
      pf_id : data.family,

    }
    return body;
  }


}



