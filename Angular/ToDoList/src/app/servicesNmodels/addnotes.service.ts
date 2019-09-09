import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddnotesService {

  rootUrl ="http://localhost:49874/api"
  constructor(private http:HttpClient) { }

  postNote(addNotesForm)
  {
    return this.http.post(this.rootUrl+'/Reminders',addNotesForm);
  }

  getNotes()
  {
    return this.http.get(this.rootUrl+'/Reminders')
  }

  deleteNote(Id:number){
    return this.http.delete(this.rootUrl+'/Reminders/'+Id);
  }
}
