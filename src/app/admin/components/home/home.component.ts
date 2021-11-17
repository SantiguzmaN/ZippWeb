import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { routerTransition } from '../../router.animations'; 
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  public tittle:string;
  public identity;
  public url: string;


  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
  	this.tittle = 'Administración ZIPP';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

}
