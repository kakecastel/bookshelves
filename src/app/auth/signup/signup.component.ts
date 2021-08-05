import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signUpForm: FormGroup;
 errorMessage:string;
  constructor(private authService:AuthService,private router:Router,private formBuilder: FormBuilder, private usersService:UsersService ) { }

  ngOnInit() {
  this.initForm();
  }
  initForm(){
  	this.signUpForm=this.formBuilder.group(
  	{    
           
            email: ['', [Validators.required, Validators.email]],
      	    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
  	});
  }

   onSubmit(){
   const email=this.signUpForm.get('email').value;
   const password=this.signUpForm.get('password').value;
   const role="USER"
   const app="livres"
   const newuser=new User(email,role,app);
   this.authService.createNewUser(email,password).then(
   	()=>{
    this.usersService.createUser(newuser);
   	this.router.navigate(['/books']);

   	},
   	(error)=>{
   	 this.errorMessage=error;
   	}


   );


  }
  

}
