import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
   {path: '', component: MainComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register',  component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
