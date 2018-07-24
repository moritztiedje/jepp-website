import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState, VIDEO, DONATE_PAGE, GALLERY } from '../redux/active-content';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {

  selection: string;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.selection = pageState.activeContent);
  }

  videoPageSelected() {
    return this.selection == VIDEO;
  }

  donatePageSelected() {
    return this.selection == DONATE_PAGE;
  }

  gallerySelected() {
    return this.selection == GALLERY;
  }

}
