import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { NotesModel } from './notes-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  rootUrl ="http://localhost:49874/api"
  constructor(private http:HttpClient) { }

   RegisterUser(registerForm)
  {
    return this.http.post(this.rootUrl+'/Registers',registerForm);
  }

  getUserData(){
    return this.http.get(this.rootUrl+'/Registers')
  }

  /////LOGIN METHIS

  userAuthentication(UserName, Password){
    var data = "username="+UserName+"&password="+Password+"&grant_type=password";
    var requestHeader = new HttpHeaders({'Content-Type':'application/x.www-urlencoded'});
    return this.http.post('http://localhost:49874/token',data,{headers: requestHeader});
  }


  public isUserLoggedIn() {
    return localStorage.getItem('userToken').length > 0;
  }
}
