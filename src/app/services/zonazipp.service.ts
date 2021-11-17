import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ZonaZippService{
    public url:string;

    constructor(
        private _http: Http,
        private http: Http){
		    this.url = GLOBAL.url;
    }
    
    // Metodo para agregar zona zipp
    addZonaZipp(token, zonazipp){
        let params = JSON.stringify(zonazipp);
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':token
        });

        return this._http.post(this.url+'zonazipp', params, {headers:headers})
                   .map(res => res.json());
    }



    //Metodo para obtener el listado de las zonas ZIPP desde la base de datos de mongo
    getZonasZipp(){
        return this._http.get(this.url+'zonaszipp').map(res => res.json());
    }

    getZonasZippByUser(iduser){
        return this._http.get(this.url+'zonazippbyuser/'+iduser).map(res => res.json());
    }

    getRecordZonasZipp(iduser){
        return this._http.get(this.url+'recordszonazipp/'+iduser).map(res => res.json()) ;
    }

    getRecordZonas(){
        return this._http.get(this.url+'reservaszipp').map(res => res.json()) ;
    }
    
    // Metodo para obtener una sola zona ZIPP
    getZonaZipp(id){
        return this._http.get(this.url+'zonazipp/'+id).map(res => res.json());
    }

    // Metodo para editar una zona ZIPP
    editZonaZipp(token, id, zonazipp){
        let params = JSON.stringify(zonazipp);
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });

        // Haciendo la peticion y devolviendo los datos
        return this._http.put(this.url+'zonazipp2/'+id, params, {headers: headers})
                         .map(res => res.json());
    }

    // Metodo para borrar una zona ZIPP
    deleteZonaZipp(token, id){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });

        let options = new RequestOptions({headers: headers});
        return this._http.delete(this.url+'zonazipp/'+id, options)
                         .map(res => res.json());
    }
}

