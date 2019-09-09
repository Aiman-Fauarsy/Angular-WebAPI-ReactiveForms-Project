import { AddnotesComponent } from './addnotes/addnotes.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { UserNotesComponent } from './notes/user-notes/user-notes.component';

const routes: Routes = 
[
  {component:HomeComponent,path:'home'},
  {component:HomeComponent,path:''},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:AboutComponent,path:'about'},
  {component:UserNotesComponent,path:'mynotes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
