import { Component, ViewChild, ElementRef, NgZone, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { ZonaZippService } from '../../../services/zonazipp.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { ZonaZipp } from '../../../models/zonazipp';
import { Http, Headers, RequestOptions } from '@angular/http';
// Imports Google Maps

import { MapsAPILoader } from '@agm/core';


@Component({
    selector: 'admin-add-zonas-zipp',
    templateUrl: './add-zonas-zipp.component.html',
    styleUrls: ['./add-zonas-zipp.component.scss'],
    providers: [UserService, ZonaZippService, UploadService]
})

export class AddZonasZippComponent implements OnInit, DoCheck{
    public tipo:string;
    public title: string;
    public zonazipp: ZonaZipp;
    public identity;
    public token;
    public url: string;
    public status;
    headers: Headers;
    headersPost: Headers;
    options: RequestOptions;
    
    lat: number ;
    lng: number;
    zoom: number =17;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _zonazippService: ZonaZippService,
        private _uploadService: UploadService,
        private http: Http,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ){
        this.title = 'Agregar nueva zona ZIPP';
        this.zonazipp = new ZonaZipp('','','',1,2000,false,false,false,false,false,false,false,false,false,false,false,false,false,'','',true,'',0,0,5,'','');
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }   

    ngOnInit(){
        this.currentLocation();
    }

    ngDoCheck(){
        this.zonazipp.price = this.zonazipp.price;
    }
    //metodo para obtener la la
    currentLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
              if (position) {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zonazipp.lat=this.lat;
                this.zonazipp.lng=this.lng;
              }
            },
              (error: PositionError) => console.log(error));
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }
    

    // Metodo para obtener latitud y longitud exacta de la zona zipp.
    public obtenerGeorreferenciacion(){
        this.headersPost = new Headers ({
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
        });

        let optionspost = new RequestOptions({
            headers: this.headersPost
        })
        return new Promise ((resolve, reject)=>{
            this.http.get('https://maps.google.com/maps/api/geocode/json?address='+','+this.zonazipp.address+','+this.zonazipp.city+','+'Colombia').subscribe(res => {
                
                resolve(res);
                this.lat=res.json().results[0].geometry.location.lat;
                this.lng=res.json().results[0].geometry.location.lng;
                this.zonazipp.lat = this.lat;
                this.zonazipp.lng = this.lng;
            },(err) => {
                resolve(err);
            });
        });
    }

    public posicionFinalMarcador(marcador:any, $event:any){
        this.zonazipp.lat = $event.coords.lat;
        this.zonazipp.lng = $event.coords.lng;
    }


    // Metodo para llamar el servicio del backend y editar todo el objeto en la base de datos
    public saveZonaZipp(){
        if(this.tipo=="Automovil"){
            this.zonazipp.car_type=true;
            this.zonazipp.motorcycle_type=false;
            this.zonazipp.bike_type=false;
        }if(this.tipo=="Motocicleta"){
            this.zonazipp.car_type=false;
            this.zonazipp.motorcycle_type=true;
            this.zonazipp.bike_type=false;
            this.zonazipp.price=1000;
        }if(this.tipo=="Bicicleta/Patineta") {
            this.zonazipp.car_type=false;
            this.zonazipp.motorcycle_type=false;
            this.zonazipp.bike_type=true;
            this.zonazipp.price=1000;
        }
        
        this.zonazipp.fechaC=new Date().toLocaleString();
        this.obtenerGeorreferenciacion;
        this._zonazippService.addZonaZipp(this.token, this.zonazipp).subscribe(
            response => {
                if(!response.zonazipp){
                    this.status ='error';
                }else{
                    this.status = 'success';
                    this.zonazipp = response.zonazipp;
                    // Subir la imagen de la zona ZIPP
                    if(!this.filesToUpload){
                        this._router.navigate(['/admin-panel/admin-zonas-zipp/list']);
                    }else{
                        // Subida de la imagen
                        this._uploadService.makeFileRequest(this.url+'upload-image-zonazipp/'+this.zonazipp._id, [], this.filesToUpload, this.token, 'image_zona_zipp')
                            .then((result: any) => {
                                this.zonazipp.image_zona_zipp = result.image_zona_zipp;                               
                                this._router.navigate(['/admin-panel/admin-zonas-zipp/list']);                        
                        }); 
                    }
                    
                    // Subir la imagen de la factura de servicio publico de la zona ZIPP
                    if(!this.filesToUploadBill){
                        this._router.navigate(['/admin-panel/admin-zonas-zipp/list']);
                    }else{
                        // Subida de la imagen
                        this._uploadService.makeFileRequest(this.url+'upload-image-zonazipp-bill/'+this.zonazipp._id, [], this.filesToUploadBill, this.token, 'image_bill')
                            .then((result: any) => {
                                this.zonazipp.image_bill = result.image_bill;                               
                                this._router.navigate(['/admin-panel/admin-zonas-zipp/list']);                        
                        }); 
                    }
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

    // Metodo de captura del archivo de imagen de la zona ZIPP
    public filesToUpload: Array<File>;
      fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);

      };
    // Metodo de captura del archivo de imagen de la factura de servicio publico de la zona ZIPP
    public filesToUploadBill: Array<File>;
    fileChangeEventBill(fileInput: any){
        this.filesToUploadBill = <Array<File>>fileInput.target.files;
        console.log(this.filesToUploadBill);
    };
}
