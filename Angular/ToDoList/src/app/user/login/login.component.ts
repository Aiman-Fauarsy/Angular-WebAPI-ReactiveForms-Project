import { UserService } from './../../servicesNmodels/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private regService:UserService,private router:Router,) { }

  isLoginFalse:boolean=false;
  ngOnInit() {
  }

  loginForm=this.fb.group({
    UserName:['',[Validators.minLength(3),Validators.required]],
    Password:['',[Validators.minLength(6),Validators.required]]
  })

  onSubmit(UserName,Password){
    this.regService.userAuthentication(UserName,Password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('Id',data.Id)
      this.router.navigate(['/home']);
    },(err: HttpErrorResponse)=>{
      this.isLoginFalse=true;
    });
  }
}
