import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-mobile',
  templateUrl: './navigation-menu-mobile.component.html',
  styleUrls: ['./navigation-menu-mobile.component.scss']
})
export class NavigationMenuMobileComponent {

  flyoutMenuOpen = false;

  constructor() { }

  toggleMenu() {
    this.flyoutMenuOpen = !this.flyoutMenuOpen;
  }

}
