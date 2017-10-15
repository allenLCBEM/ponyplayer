import { Component, OnInit } from '@angular/core';
import { PonyService } from '../../services/pony.service';
import { Pony } from '../../models/Pony';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-track-select',
  templateUrl: './track-select.component.html',
  styleUrls: ['./track-select.component.css']
})
export class TrackSelectComponent implements OnInit {
  tracks:any[];

  constructor(
    public ponyService:PonyService
  ) { }

  ngOnInit() {

    this.ponyService.getTracks().subscribe(tracks => {
      this.tracks = tracks;
      const unique = [...new Set(this.tracks.map(item => item.track))];
      this.tracks = unique;
    });
  }

  uniqueTracks(){
    
    
  }

}
