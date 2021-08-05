import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User.model';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
private users;
 signInForm: FormGroup;
 errorMessage:string;
  constructor(private authService:AuthService,private router:Router,private formBuilder: FormBuilder,private usersService:UsersService) { }

  ngOnInit() {
  this.initForm();
  this.getUsers();
  }
  initForm(){
  	this.signInForm=this.formBuilder.group(
  	{    
           
            email: ['', [Validators.required, Validators.email]],
      	    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
  	});
  }

   onSubmit(){
   const email=this.signInForm.get('email').value;
   const password=this.signInForm.get('password').value;
   this.authService.signInUser(email,password).then(
   	()=>{
   	this.router.navigate(['/books']);

  

   console.log('voici le role de user  recuperer    '+this.users);
    
 

   	},
   	(error)=>{
   	 this.errorMessage=error;
   	}


   );

   
  }

  private getUsers(){
  this.usersService.getUsers().
  subscribe(data=>{
    this.users=data;
  },err=>{
  console.log(err);
  })



}
}
