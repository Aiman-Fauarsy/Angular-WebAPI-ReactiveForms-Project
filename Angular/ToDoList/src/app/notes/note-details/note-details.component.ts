import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data, public dialogRef:MatDialogRef<NoteDetailsComponent>,) { }

  ngOnInit() {
  }

}
