import { UserService } from './servicesNmodels/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListNG';
  iconLogo='assets/IconLogo.png'

  constructor(private RegService:UserService, private router:Router){

  }

  Logout() {
    localStorage.setItem('userToken', '');
    localStorage.setItem('Id','')
    this.router.navigate(['/login']);
  }
}
