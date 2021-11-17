import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { routerTransition } from '../../router.animations';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';



@Component({
  selector: 'forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class ForgetComponent implements OnInit {
  type= "password";
  show = false;
	public user: User;
	public identity;
	public token;
  public status: string;
  public data;
  nc:string;
  ncr:string;
  test:boolean=false;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService
  ) {
 	this.user = new User('','','','','','','ROLE_USER','','','','');
  }

  ngOnInit() {
  	
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

  verificar(){
    this._userService.getUserPass(this.user).subscribe(
      (response) => {
          //this.data=JSON.parse(response["_body"]);
          if(!response.user){
            
          }
          else{
            this.user = response.user;
            this.status='success';
            this.test=true;
          }
      },
      (error)=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.status = 'error';
        
      }
      } 
    );
  }


  modificar(){
   if(this.nc!=this.ncr){
      this.status='error2';
    }
    else{
      this.user.password=this.nc;
      this._userService.updatePass(this.user).subscribe( response=> {
        if(response){
          this.status = 'confirm';
        }
        else{
          this.status = 'error3';
        }
      },
      (error)=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
        }
      });
    }
  }
  

}
