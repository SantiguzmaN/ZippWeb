import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { ZonaZippService } from '../../../services/zonazipp.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { ZonaZipp } from '../../../models/zonazipp';
import { ReservaZona } from '../../../models/reservazipp';

import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [ZonaZippService, UserService]
  
})
export class HistorialComponent implements OnInit {

  public tittle: string;
  public numbers = new Array(10);
  public reservazonas: ReservaZona[];
  public token;
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _zonazippService: ZonaZippService,
    private _userService: UserService,
){
    this.tittle = 'Historial';
    this.token = this._userService.getToken();
    
}

  ngOnInit() {
    console.log('Historial componente cargado!!'); 
    this.identity = this._userService.getIdentity();
    this.getRecordZonasZipp();
  }

      // Metodo para obtener las Zonas ZIPP para refrescar la base de datos
      getRecordZonasZipp(){
      console.log('entro a getrecord ts: '+this.identity._id);
      

      this._zonazippService.getRecordZonasZipp(this.identity._id).subscribe(
        response => {
          console.log('respondio');
          if(!response.reservazonas){
              
          }else{
            console.log('melooo respondio');
            this.reservazonas = response.reservazonas;
            console.log(response.reservazonas);
            for(let rese of this.reservazonas){
              
            }

          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
}