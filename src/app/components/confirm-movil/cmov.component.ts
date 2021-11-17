import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { routerTransition } from '../../router.animations';

import { UserService } from '../../services/user.service';




@Component({
  selector: 'cmov',
  templateUrl: './cmov.component.html',
  styleUrls: ['./cmov.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class cmovComponent implements OnInit {



  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	
  ) {
 
  }

  ngOnInit() {
  	
  }



  

}
