import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { StoreModule } from '@ngrx/store';
import { activeContentReducer } from './redux/active-content';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ activeContent: activeContentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
