import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/users', title: 'Usuarios', icon: 'ni-single-02 text-blue', class: '' },
  { path: '/products', title: 'Productos', icon: 'ni-basket text-orange', class: '' },
  { path: '/orders', title: 'Pedidos', icon: 'ni-tag text-pink text-red', class: '' },
  { path: '/familyes', title: 'Familias', icon: 'ni-bullet-list-67 text-pink', class: '' }
  /*  { path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-yellow', class: '' },
   { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
   { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' } */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout() {
    localStorage.clear()
  }
}
