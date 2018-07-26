import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-mobile',
  templateUrl: './navigation-menu-mobile.component.html',
  styleUrls: ['./navigation-menu-mobile.component.scss']
})
export class NavigationMenuMobileComponent {

  flyoutMenuOpen = false;

  constructor() { }

  toggleMenu(event: Event) {
    this.flyoutMenuOpen = !this.flyoutMenuOpen;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    this.flyoutMenuOpen = false;
  }

}
