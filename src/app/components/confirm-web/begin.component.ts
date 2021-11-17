import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { routerTransition } from '../../router.animations';

import { UserService } from '../../services/user.service';




@Component({
  selector: 'begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class BeginComponent implements OnInit {



  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	
  ) {
 
  }

  ngOnInit() {
  	
  }



  

}
