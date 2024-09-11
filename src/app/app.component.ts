import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./core/layout/additions/navbar/navbar/navbar.component";
import { FooterComponent } from "./core/layout/additions/footer/footer/footer.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent , NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social-meida';

  constructor(private _FlowbiteService : FlowbiteService , private router : Router){}
  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(flowbite => {
    });
  }


  isAuthPage(): boolean {
    const authRoutes = ['/login', '/register']; // navbar/footer should not appear
    return authRoutes.includes(this.router.url);
  }

}
