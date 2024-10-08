import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user: User = {
    id: '',
    name: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    createdAt: '',
    photo: '',
  };

  isLogged : boolean = false
  constructor(private authService : AuthService , private router :Router){}

  ngOnInit(): void {
    this.isLoggedUser();
  }

  isLoggedUser()
  {
    const token = this.authService.getToken();
    if(token){
      this.isLogged = true;

      this.authService.getUserData().subscribe({
        next : (res)=>{
          this.user = res.user
        }
      })
    }else {
      this.isLogged = false;
    }
  }

  signOut()
  {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }
}
