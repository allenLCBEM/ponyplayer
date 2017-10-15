import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { PonyService } from '../../services/pony.service';
import { Pony } from '../../models/Pony';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {
  pony:Pony = {
    horseName:'',
    track:'',
    race:0,
    number:0,
    jockey:'',
    nmr:0,
    dnm:0
  }

  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public ponyService:PonyService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Pony, valid:boolean}){
    
    if(!valid){
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['addPony']);
    } else {
      // Add new pony
      this.ponyService.newPony(value);
      this.flashMessagesService.show('New pony added', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['addPony']);
    }
  }

}
