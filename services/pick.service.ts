import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs'; 
import { Pick } from '../models/pick';

@Injectable()
export class PickService {
  picks: FirebaseListObservable<any[]>;
  pick: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.picks = this.af.list('/picks') as FirebaseListObservable<Pick[]>;
  }

  getPicks(){
    return this.picks;
  }

  newPick(pk, wgrPlay, wgr, winVal){
    this.picks.push(
      { 
        dnm:pk.dnm,
        horseId:pk.$key,
        horseName:pk.horseName,
        nmr:pk.nmr,
        number:pk.number,
        play:wgrPlay,
        playValue:wgr,
        race:pk.race,
        track:pk.track,
        winValue:winVal

      }
    )
  }

  deletePick(id:string){
    return this.picks.remove(id);
  }

}
