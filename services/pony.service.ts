import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

import { Pony } from '../models/Pony';


@Injectable()
export class PonyService {
  ponies: FirebaseListObservable<any[]>;
  pony: FirebaseObjectObservable<any>;
  races: FirebaseListObservable<any[]>;
  tracks: FirebaseListObservable<any[]>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.ponies = this.af.list('/ponies') as FirebaseListObservable<Pony[]>;   
    this.tracks = this.af.list('/ponies');
  }

  getPonies(val): FirebaseListObservable<any> {
    return this.af.list('/ponies', {
      query: {
        orderByChild: 'track',
        startAt: val,
        endAt:val
      }
    });
  }


  getTracks(){
    return this.tracks;
  }

  newPony(pony:Pony){
    this.ponies.push(pony);
  }

}