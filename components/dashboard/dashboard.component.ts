import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trackSelected:any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { 
    this.route.params.subscribe((params:Params) => {
      this.trackSelected = params.name;
    })
  }

  ngOnInit() {
  }

}
