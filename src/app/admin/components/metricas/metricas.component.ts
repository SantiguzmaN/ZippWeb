import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { ZonaZippService } from '../../../services/zonazipp.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { ZonaZipp } from '../../../models/zonazipp';
import { User } from '../../../models/user';
import { UserZipp } from '../../../models/userzipp';
import { ReservaZona } from '../../../models/reservazipp';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css'],
  providers: [ZonaZippService, UserService,UploadService]
  
})
export class MetricasComponent implements OnInit {

  public tittle: string;
  public upload:boolean;
  public numbers = new Array(10);
  public token;
  public identity;
  public url: string;
  //listas
  public reservazonas: ReservaZona[];
  public zonaszipp: ZonaZipp[];
  public users: UserZipp[];
  public usersWeb: User[];
  //contadores
  public cantZonas:number;
  public cantUsers:number;
  public cantUsersW:number;
  public cantRes:number;
  public cantHoras:number=0;
  public totSaldo:number=0;
  //Tablas
  public tabMovil:boolean=false;
  public tabWeb:boolean=false;
  public tabZonas:boolean=false;
  public tabReservas:boolean=false;
  public eliminada:ZonaZipp= new ZonaZipp('','','',1,2000,false,false,false,false,false,false,false,false,false,false,false,false,false,'','',true,'',0,0,5,'','');

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _zonazippService: ZonaZippService,
    private _userService: UserService,
    private _uploadService: UploadService
){
    this.tittle = 'Metricas Generales ZIPP';
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.eliminada.address='Zona ZIPP eliminada';
    
    
}

  ngOnInit() {
    console.log('Metricas componente cargado!!'); 
    this.identity = this._userService.getIdentity();
    this.getRecordZonasZipp();
    this.getZonasZipp();
    this.getUsers();
    this.getUsersWeb();
  }

      // Metodo para obtener las Zonas ZIPP para refrescar la base de datos
      getRecordZonasZipp(){
        this._zonazippService.getRecordZonas().subscribe(
        response => {
          
          if(!response.reservas_zipp){
              
          }else{
            this.reservazonas = response.reservas_zipp;
            this.cantRes=this.reservazonas.length;
            for(let res of this.reservazonas){
              if(res.zonazipp==undefined){
                  res.zonazipp=this.eliminada;
              }
              this.totSaldo=this.totSaldo+res.valor_total;
              this.cantHoras=this.cantHoras + parseInt(res.tiempo_total)+1;

            }
            
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    
    logout(){
      localStorage.clear();
      this.identity = null;
      this._router.navigate(['/']);
    }

  
    getZonasZipp(){
      this._zonazippService.getZonasZipp().subscribe(
        (response) => {
          if(!response){
                  
          }else{
            this.zonaszipp = response.zonaszipp;
            this.cantZonas=this.zonaszipp.length;
            
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
   getUsers(){
      this._userService.getUsersMov().subscribe(
        (response) => {
          if(!response){
                  
          }else{
            this.users = response.users;
            this.cantUsers=this.users.length;
            
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    getUsersWeb(){
      this._userService.getUsersWeb().subscribe(
        (response) => {
          if(!response){
                  
          }else{
            this.usersWeb = response.users;
            this.cantUsersW=this.usersWeb.length;
            
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }

    btnZonas(){
      this.tabMovil=false;
      this.tabReservas=false;
      this.tabWeb=false;
      this.tabZonas=true;
    }

    btnUsMov(){
      this.tabMovil=true;
      this.tabReservas=false;
      this.tabWeb=false;
      this.tabZonas=false;
    }

    btnUsWeb(){
      this.tabMovil=false;
      this.tabReservas=false;
      this.tabWeb=true;
      this.tabZonas=false;
    }
    
    btnRes(){
      this.tabMovil=false;
      this.tabReservas=true;
      this.tabWeb=false;
      this.tabZonas=false;
    }

    uploadFile(){
      this._uploadService.makeFileRequest(this.url+'upload-file/', [], this.filesToUpload, this.token, 'file_balance')
                            .then((result: any) => {
                                      if(result.codigo){
                                        
                                      }      
                                      else{
                                        this.upload=false;
                                      }            
                        });
                                        
    }

    public filesToUpload: Array<File>;
      fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
        this.uploadFile();
        this.upload=true;   

      };

}