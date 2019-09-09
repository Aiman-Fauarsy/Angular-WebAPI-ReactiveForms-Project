import { ToastrService } from 'ngx-toastr';

import { AddnotesComponent } from './../../addnotes/addnotes.component';
import { AddnotesService } from './../../servicesNmodels/addnotes.service';
import { Component, OnInit } from '@angular/core';
import { NotesModel } from 'src/app/servicesNmodels/notes-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NoteDetailsComponent } from '../note-details/note-details.component';


@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})
export class UserNotesComponent implements OnInit {

  readonly myId=localStorage.getItem("Id");
    myNotes:NotesModel[];
  constructor(private notesService:AddnotesService,private dialog:MatDialog,private toastr:ToastrService) { }


  searchFilter:string;

  
  ngOnInit() {
    this.notesService.getNotes().toPromise().then
    (res=>this.myNotes = res as NotesModel[]); 
  }

  ShowDetails(Tittle,Details,Date)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data= {Details,Tittle,Date};
    this.dialog.open(NoteDetailsComponent,dialogConfig)
  }

  addNote()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddnotesComponent, dialogConfig);
  }




  deleteNote(Id:number){
    if(confirm('Are you sure you want to delete note?')){
      this.notesService.deleteNote(Id).subscribe(res=>{
        this.notesService.getNotes();
        this.toastr.warning('Note is Deleted!','Please Wait ')
       setInterval(this.reloadPage,2000),
       err =>{
          this.toastr.error('Note faild to delete');
        }
      
      })
    }
  }

    public reloadPage(){
      let  win = (window as any);
       if(win.location.search !== '?loaded' ) {
           win.location.search = '?loaded';
           win.location.reload()
       }
    }
  }