import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { ZonaZippService } from '../../../services/zonazipp.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { ZonaZipp } from '../../../models/zonazipp';

@Component({
    selector: 'admin-list-zonas-zipp',
    templateUrl: './list-zonas-zipp.component.html',
    styleUrls: ['./list-zonas-zipp.component.css'],
    providers: [ZonaZippService, UserService]
    
})
export class ListZonasZippComponent implements OnInit {
    color = '#7C8A1F';
    
    
    public title: string;
    public numbers = new Array(10);
    public zonaszipp: ZonaZipp[];
    public zonazipp: ZonaZipp;
    public token;
    public status;
    public identity;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _zonazippService: ZonaZippService,
        private _userService: UserService,
    ){
        this.title = 'Tus Zonas ZIPP';
        this.token = this._userService.getToken();
    }
    
    
    ngOnInit(){
        this.identity = this._userService.getIdentity();
       
        this.getZonasZippByUser();
        
    }

    // Metodo para obtener las Zonas ZIPP para refrescar la base de datos
    getZonasZippByUser(){
        console.log(this.identity._id);

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

    getAndUpdate(id){
        console.log('entro al get and update:'+id);
        this._zonazippService.getZonaZipp(id).subscribe(
            response => {
                if(!response.zonazipp){
                    this.status ='error';
                }else{
                    this.zonazipp = response.zonazipp;
                    if(this.zonazipp.estado_zonazipp==true){
                        this.zonazipp.estado_zonazipp=false;
                    }
                    else{
                        this.zonazipp.estado_zonazipp=true;
                    }
                    this._zonazippService.editZonaZipp(this.token, id, this.zonazipp).subscribe(
                        response => {
                            if(!response.zonazipp){
                                this.status ='error';
                            }else{
                                this.status = 'success';
                                
                                this.zonazipp = response.zonazipp;
                                
                                window.location.reload();
            
                                
                            }
                        },
                        error => {
                            var errorMessage = <any>error;
            
                            if(errorMessage != null){
                                this.status = 'error';
                            }
                        }
                    );
                }
            },
            error => {
                console.log(<any>error);
                this._router.navigate(['/home']);                    
            }
         );
        
    }

    // Metodo para borrar zonas ZIPP
    deleteZonaZipp(id){
        $('#myModal-'+id).modal('hide');
        this._zonazippService.deleteZonaZipp(this.token, id). subscribe(
            response => {
                if(!response.zonazipp){
                    alert('Error en el servidor');
                }
                this.getZonasZippByUser();
            },
            error => {
                alert('Error en el servidor');                
            }
        );
    }

    
}