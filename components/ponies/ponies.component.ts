import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { PonyService } from '../../services/pony.service';
import { Pony } from '../../models/Pony';
import { PickService } from '../../services/pick.service';
import { Pick } from '../../models/Pick';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css'],
})


export class PoniesComponent implements OnInit {
  ponies: Pony[];
  races: any[];

  trackSelected:any = {};
  raceNum:number;

  constructor(
    public ponyService:PonyService,
    public pickService:PickService,
    private route: ActivatedRoute,
    private router: Router 
  ) { 
    this.route.params.subscribe((params:Params) => {
      this.trackSelected = params.name;
    })
  }

  ngOnInit() {
    this.ponyService.getPonies(this.trackSelected).subscribe(ponies => {
      this.ponies = ponies;

      const uniqueRaces = [...new Set(this.ponies.map(item => item.race))];
      this.races = uniqueRaces;
    })   
    
    
  }

  setRaceNumber(val){
    this.raceNum = val;
  }

  onPick(pk){ 
    console.log(pk)   
    let wgr;
    let wgrPlay;
    let winPlay = $('#win'+pk.number).val();
    let placePlay = $('#place'+pk.number).val();
    let showPlay = $('#show'+pk.number).val();
    if(winPlay > 0){
      wgr = winPlay;
      wgrPlay = 'WIN';
    } else if(placePlay > 0){
      wgr = placePlay;
      wgrPlay = 'PLACE';
    } else if(showPlay > 0){
      wgr = showPlay;
      wgrPlay = 'SHOW';
    }

    let winVal;
    let numerator = pk.nmr;
    let denominator = pk.dnm;
    winVal = (wgr*numerator)/denominator;

    this.pickService.newPick(pk, wgrPlay, wgr, winVal);
    this.router.navigate(['/ticket']);
 
  }



}


