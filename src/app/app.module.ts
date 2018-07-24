import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { activeContentReducer } from './redux/active-content';
import { VideoPageComponent } from './video-page/video-page.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    TopNavBarModule,
    StoreModule.forRoot({ activeContent: activeContentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
