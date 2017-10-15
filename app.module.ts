import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Component Imports
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PoniesComponent } from './components/ponies/ponies.component';
import { TrackSelectComponent } from './components/track-select/track-select.component';
import { AddPonyComponent } from './components/add-pony/add-pony.component';

//Service Imports
import { PonyService } from './services/pony.service';
import { PickService } from './services/pick.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

//Pipe Imports
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';

const appRoutes: Routes = [
  {path:'', component:TrackSelectComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'races/:name', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'ticket', component:TicketComponent, canActivate:[AuthGuard]},
  {path:'addPony', component:AddPonyComponent, canActivate:[AuthGuard]}
]

export const firebaseConfig = {
  apiKey: "AIzaSyCktMgT6CSuodNAiQwFzfxZ_-utF1GLpRk",
  authDomain: "ponyplayer-52810.firebaseapp.com",
  databaseURL: "https://ponyplayer-52810.firebaseio.com",
  storageBucket: "ponyplayer-52810.appspot.com",
  messagingSenderId: "254092893520"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketComponent,
    NavbarComponent,
    PoniesComponent,
    TrackSelectComponent,
    ArraySortPipe,
    AddPonyComponent,
    OrdinalPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    PonyService,
    PickService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
