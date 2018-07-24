import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { TopNavBarComponent } from "./top-nav-bar.component";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    NavigationMenuComponent,
    TopNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopNavBarComponent]
})
export class TopNavBarModule {}
