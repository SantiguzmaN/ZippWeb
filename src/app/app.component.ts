import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck{
  public tittle:string;
  public identity;
  public url: string;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  	private _userService: UserService
  ){
  	this.tittle = '';
    this.url = GLOBAL.url;

  }

  ngOnInit(){
  	this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
  	this.identity = this._userService.getIdentity();
  }

}
