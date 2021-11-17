import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { routerTransition } from '../../router.animations';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  type= "password";
  show = false;
	public user: User;
	public identity;
	public token;
	public status: string;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService
  ) {
 	this.user = new User('','','','','','','ROLE_USER','','','','');
  }

  ngOnInit() {
  	console.log('login.component cargado !');

  	console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  public facebookLogin(){
    
  }

  toggleShow(){
        this.show = !this.show;
        if (this.show){
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }


  onSubmit(){
    let us:string='4502607';
    let ps:string='metricasZIPP';
    // Loguear al usuario y conseguir el objeto
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;

        if (!this.identity || !this.identity._id) {
          alert('El usuario no se ha logueado correctamente');
        }else{

          this.identity.password = '';

          localStorage.setItem('identity', JSON.stringify(this.identity));

          //Conseguir el token
          this._userService.signup(this.user, 'true').subscribe(
            response => {
              this.token = response.token;

              if (this.token.lenght <= 0) {
                alert('El token no se ha generado');
              }else{
                localStorage.setItem('token', this.token);   
                this.status = 'success';
                console.log(this.user.cedula);
                console.log(this.user.password);
                if(this.user.cedula==us && this.user.password==ps){
                  console.log('cumplio condicion');
                  this._router.navigate(['/metricas']);
                }
                else{
                this._router.navigate(['/admin-panel']);
              }           
              }
            },
            error => {
              console.log(<any>error);
            }
          );


        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}
