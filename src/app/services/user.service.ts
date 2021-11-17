import { Injectable } from '@angular/core'; //Decorador
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; // Metodo para recojer los valores de una peticion Ajax
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

//Decorador
@Injectable()
export class UserService{
	public url:string;
	public identity;
	public token;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	getUsersMov(){
        return this._http.get(this.url+'get-users').map(res => res.json());
	}
	getUsersWeb(){
		return this._http.get(this.url+'get-users-web').map(res => res.json());
    }
	register(user_to_register){
		let params = JSON.stringify(user_to_register);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'register', params, {headers: headers})
						 .map(res => res.json());
	}


	signup(user_to_login, gettoken = null){
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}

		let params = JSON.stringify(user_to_login);
		let headers = new Headers({'Content-Type':'application/json'});


		return this._http.post(this.url+'login', params, {headers: headers})
						 .map(res => res.json());
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if (identity != "undefined") {
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token');

		if (token != "undefined") {
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}

	updateUser(user_to_update){
		let params = JSON.stringify(user_to_update);
		let headers = new Headers({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});

		return this._http.put(this.url+'update-user/'+user_to_update._id, params, {headers: headers})
						 .map(res => res.json());
	}

	getUserPass(user_to_get){
		let params = JSON.stringify(user_to_get);
			console.log('entro con:'+params);
			let headers = new Headers({'Content-Type':'application/json'});

			return this._http.post(this.url+'/get-user-passw', params,{headers: headers}).map(res=>res.json());
			
		
	}

	updatePass(user_to_update){
		let params = JSON.stringify(user_to_update);
		let headers = new Headers({'Content-Type':'application/json'});
		return	this._http.put(this.url+'update-passw/'+user_to_update._id, params, {headers: headers}).map(res=>res.json());
    }
}