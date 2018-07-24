import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { activeContentReducer } from './redux/active-content';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
import { ContentSectionComponent } from './content-section/content-section.component';
import { ContentSectionModule } from './content-section/content-section.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopNavBarModule,
    ContentSectionModule,
    StoreModule.forRoot({ activeContent: activeContentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
