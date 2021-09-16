import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delegatehome',
  templateUrl: './delegatehome.component.html',
  styleUrls: ['./delegatehome.component.css']
})
export class DelegatehomeComponent implements OnInit {
  d_id

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('d_id')){
      this.d_id = this.route.snapshot.queryParamMap.get('d_id');
    }
  }

}
