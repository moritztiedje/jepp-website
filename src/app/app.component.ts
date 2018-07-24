import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ComponentRef, ApplicationRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from './redux/active-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selection: string = "HOME";

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.selection = pageState.activeContent);
  }
}
