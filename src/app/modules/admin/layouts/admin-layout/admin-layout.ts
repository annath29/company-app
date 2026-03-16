import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../../shared/components/side-menu/side-menu';
import { AngSideMenu, TitleColor } from 'ang-side-menu'

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AngSideMenu],
  templateUrl: './admin-layout.html',
})
export default class AdminLayout {
  isAuthenticated = signal(false);

  TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }
  onLogout() {
    this.isAuthenticated.set(false);
  }
}
