import { Component, OnInit } from '@angular/core';
import { PickService } from '../../services/pick.service';
import { Pick } from '../../models/Pick';

import {OrdinalPipe} from '../../pipes/ordinal.pipe';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  picks:Pick[];

  constructor(
    public pickService:PickService
  ) { }

  ngOnInit() {
    this.pickService.getPicks().subscribe(picks => {
      this.picks = picks;
    })
  }

  onDeleteClick(id){
    this.pickService.deletePick(id);
  }

}
