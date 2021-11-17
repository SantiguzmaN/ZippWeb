import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { ZonaZippService } from '../../../services/zonazipp.service';
import { ZonaZipp } from '../../../models/zonazipp';

@Component({
    selector: 'zonazipp-detail',
    templateUrl: './zonazipp-detail.component.html',
    providers: [ZonaZippService]
    
})
export class ZonaZippDetailComponent implements OnInit {
    public zonazipp: ZonaZipp;
    public url: string; 

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _zonazippService: ZonaZippService
    ){
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('zonazipp-detail component cargado!!');
        this.getZonaZipp();
    }

    getZonaZipp(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._zonazippService.getZonaZipp(id).subscribe(
                response => {
                    if(!response.zonazipp){
                        this._router.navigate(['/home']);
                    }else{
                        this.zonazipp = response.zonazipp;
                    }
                },
                error => {
                    console.log(<any>error);
                    this._router.navigate(['/home']);                    
                }
            );
        });
    }
}