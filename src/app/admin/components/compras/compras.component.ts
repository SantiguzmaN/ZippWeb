import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  public tittle: string;
  public combo1:string;
  public combo2:string;
  public combo3:string;

  constructor() {
  	this.tittle = 'ZIPP';
  }

  ngOnInit() {
  }

}
