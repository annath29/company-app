import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../../shared/components/side-menu/side-menu';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './admin-layout.html',
})
export default class AdminLayout {
  isAuthenticated = signal(false);
  onLogin() {
    this.isAuthenticated.set(true);
  }
  onLogout() {
    this.isAuthenticated.set(false);
  }
}
