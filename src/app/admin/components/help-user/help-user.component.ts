import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';

import { routerTransition } from '../../router.animations';


//Mailjet imports



@Component({
  selector: 'app-help-user',
  templateUrl: './help-user.component.html',
  styleUrls: ['./help-user.component.css'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class HelpUserComponent implements OnInit {

	public tittle: string;
  public user: User;
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
  	this.tittle = 'AYUDA';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit() { 
    console.log('help-user cargado!');
  }

}
