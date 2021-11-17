import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})
export class GananciasComponent implements OnInit {

	public tittle: string;

  constructor() {
  	this.tittle = 'Tus Ganancias';
  }

  ngOnInit() {
  }

}
