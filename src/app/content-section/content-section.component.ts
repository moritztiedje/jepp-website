import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentPages, NavigateContentAction } from '../redux/active-content';
import { PageState } from '../app.module';
import { EnableContentAction } from '../redux/disabled-content';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {

  selection: ContentPages;
  enabled: boolean;

  constructor(store: Store<PageState>) {
    store.dispatch(new NavigateContentAction(ContentPages.video));
    store.dispatch(new EnableContentAction());

    store.subscribe(pageState => {
      this.selection = pageState.activeContent;
      this.enabled = pageState.enabledContent;
    });
  }

  videoPageSelected() {
    return this.selection == ContentPages.video;
  }

  problemPageSelected() {
    return this.selection == ContentPages.problem;
  }

  solutionPageSelected() {
    return this.selection == ContentPages.solution;
  }

  unimplementedPageSelected() {
    return this.selection !== ContentPages.video && this.selection !== ContentPages.problem && this.selection !== ContentPages.solution;
  }

}
