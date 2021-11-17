import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-terminos-user',
  templateUrl: './terminos-user.component.html',
  styleUrls: ['./terminos-user.component.css'],
  animations: [routerTransition()]
})
export class TerminosUserComponent implements OnInit {

	public tittle: string;

  constructor() {
  	this.tittle = 'Términos y Condiciones';
  }

  ngOnInit() {
  }

}
 