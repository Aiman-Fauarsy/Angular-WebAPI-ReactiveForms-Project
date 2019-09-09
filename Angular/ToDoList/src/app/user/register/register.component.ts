
import { UserService } from '../../servicesNmodels/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder, Validators} from "@angular/forms"
import { PassValidator } from './CrossFieldValidator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private regService:UserService,private toastr: ToastrService) { }

  ngOnInit() {
   
  }

  emailPattren =" ^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$ "

  registerForm = this.fb.group({
    UserName : ['',[Validators.required, Validators.minLength(3)]],
    Password : ['',[Validators.required,Validators.minLength(6)]],
    ReTypePass:[''],
    Email : ['',Validators.required],
  },{ validator: PassValidator });
    

onSubmit(){
  this.regService.RegisterUser(this.registerForm.value).subscribe
  (
    resp => this.toastr.success('Registeration Succses!'),
    error => this.toastr.warning('Registeration Failed'),
  );
  this.registerForm.reset()
}
}