import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-independenthome',
  templateUrl: './independenthome.component.html',
  styleUrls: ['./independenthome.component.css']
})
export class IndependenthomeComponent implements OnInit {
  id_id;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id_id')){
      this.id_id = this.route.snapshot.queryParamMap.get('id_id');
    }
  }

}
