import { Routes } from '@angular/router';
import { PostsComponent } from './core/layout/posts/posts/posts.component';
import { LoginComponent } from './core/layout/auth/login/login/login.component';
import { RegisterComponent } from './core/layout/auth/register/register/register.component';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {path : '' , redirectTo:'home', pathMatch:'full'},
  {path : 'home' , component:PostsComponent ,  canActivate: [authGuard] ,title: 'Home'},
  {path : 'login' , component:LoginComponent , canActivate: [authGuard] , title: 'Login'},
  {path : 'register' , component:RegisterComponent , canActivate: [authGuard] , title: 'Register'},

  {path:'**' , redirectTo:'home'},
];
