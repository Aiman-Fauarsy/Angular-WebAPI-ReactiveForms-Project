import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AboutComponent } from './about/about.component';
import { UserNotesComponent } from './notes/user-notes/user-notes.component';

import { ToastrModule } from 'ngx-toastr';
import { UserService } from './servicesNmodels/user.service';
import { AddnotesComponent } from './addnotes/addnotes.component';

import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { notesFilter } from './notes/user-notes/notesFilter';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    UserNotesComponent,
    AddnotesComponent,
    NoteDetailsComponent,
    notesFilter,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
  ],
  providers: [UserService,],
  bootstrap: [AppComponent],
  entryComponents:[AddnotesComponent,NoteDetailsComponent]
})
export class AppModule { }
