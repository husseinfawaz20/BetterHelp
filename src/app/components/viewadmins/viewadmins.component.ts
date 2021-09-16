import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-viewadmins',
  templateUrl: './viewadmins.component.html',
  styleUrls: ['./viewadmins.component.css']
})
 
export class ViewadminsComponent implements OnInit {
  admins;
  columns = ["Admin Id","First Name","Last Name", "Email", "Phone","Birthday", "Region","Password"];
  index = ["ADMIN_ID", "FIRST_NAME", "LAST_NAME", "EMAIL", "PHONE_NUMBER", "BIRTHDAY","PLACE","PASSWORD"];
  array : [1000];
  admin_id;

  constructor(private router: Router,private appService: AppService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id')){
      this.admin_id = this.route.snapshot.queryParamMap.get('id');
    }
    this.appService.listAdmins().subscribe(response =>{
      this.admins = response;
      console.log(response);
      })
  }

}