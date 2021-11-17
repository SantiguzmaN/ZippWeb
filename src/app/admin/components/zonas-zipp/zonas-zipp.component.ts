import { Component, OnInit } from '@angular/core';
import { ZonaZipp } from '../../../models/zonazipp';
import { ZonaZippService } from '../../../services/zonazipp.service'
//import { fadeIn } from '../animation';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'zonas-zipp',
  templateUrl: './zonas-zipp.component.html',
  styleUrls: ['./zonas-zipp.component.scss'],
  providers: [ZonaZippService, UserService],
})
export class ZonasZippComponent implements OnInit {

  public tittle: string;
  public zonaszipp: ZonaZipp[];
  public url;
  public tittle_zona_zipp: string;
  public identity;

  constructor(
    private _zonazippService: ZonaZippService,
    private _userService: UserService,
    
  ){
    this.tittle = 'Tus Zonas ZIPP';
    this.url = GLOBAL.url;
  	this.tittle_zona_zipp = 'Panel de administración';
  }

  ngOnInit(){
    console.log('zonaszipp.component cargado!!');
    this.identity = this._userService.getIdentity();
    this.getZonasZipp();
    
    
  }

    // Metodo para obtener las Zonas ZIPP para refrescar la base de datos
    getZonasZipp(){
      console.log(this.identity);
      this._zonazippService.getZonasZippByUser(this.identity._id).subscribe(
          response => {
              if(!response.zonaszipp){
                  
              }else{
                  this.zonaszipp = response.zonaszipp;
              }
          },
          error => {
              console.log(<any>error);
          }
      );
  }
}
