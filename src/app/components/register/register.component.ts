import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public tittle:String;
  public user: User;
  public status: string;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
    private _userService: UserService
  ) {
  	this.tittle = 'Registro';
    this.user = new User('','','','','','','ROLE_ADMIN','','','','');
  }

  ngOnInit() {
    console.log('register.component cargado !');
  }
  
  validarData(){
    this.user.cedula=this.user.cedula.trim();
    this.user.name=this.user.name.trim();
    this.user.email=this.user.email.trim();
    this.user.celular=this.user.celular.trim();
    this.user.password=this.user.password.trim();
    this.user.fechaC=new Date().toLocaleString();
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          this.status = 'success';
          this.user = new User('','','','','','','ROLE_ADMIN','','','','');
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
