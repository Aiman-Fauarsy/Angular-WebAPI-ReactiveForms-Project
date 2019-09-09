import { Validators } from '@angular/forms';
import { AddnotesService } from './../servicesNmodels/addnotes.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from './../servicesNmodels/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

  constructor(private userService:UserService, private fb:FormBuilder,private notesService:AddnotesService,
     private toastr:ToastrService,private router:Router) { }
     readonly userId=localStorage.getItem("Id")
  ngOnInit() {
    this.selectStartDate()
  }

currentDate = new Date();
  addNotesForm = this.fb.group({
    Tittle:[''],
    Date:[''],
    Time:[''],
    Details:[''],
    UserId:[localStorage.getItem("Id")]
  },);

setStartDate;
StartDate;
selectStartDate(event? : any){

    this.setStartDate = new Date()
    this.StartDate = new Date(event.target.value);
  }


  onSubmit(){
    this.notesService.postNote(this.addNotesForm.value).subscribe
    (
      resp => this.toastr.success("Note Added!"),
      err => this.toastr.warning("Error, Notes didn't Add")
    );
    this.addNotesForm.reset();
    
  }

  public reloadPage(){
    let  win = (window as any);
     if(win.location.search !== '?loaded' ) {
         win.location.search = '?loaded';
         win.location.reload()
     }
  }

  onClose()
  {
    this.reloadPage();
  }


}
