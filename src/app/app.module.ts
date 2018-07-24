import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { StoreModule } from '@ngrx/store';
import { activeContentReducer } from './redux/active-content';
import { VideoPageComponent } from './video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ activeContent: activeContentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
