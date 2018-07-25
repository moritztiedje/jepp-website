import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentPages } from '../redux/active-content';
import { PageState } from '../app.module';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {

  selection: ContentPages;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.selection = pageState.activeContent);
  }

  videoPageSelected() {
    return this.selection == ContentPages.video;
  }

}
