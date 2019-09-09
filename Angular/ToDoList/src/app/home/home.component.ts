import { UserService } from './../servicesNmodels/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  getStarted()
  {
    if(this.userService.isUserLoggedIn)
    {
      this.router.navigate(['/mynotes'])
    }
      if(localStorage.getItem('userToken')==(''))
      this.router.navigate(['/login']);
    }
  
}
