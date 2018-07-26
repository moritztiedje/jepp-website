import { Component, OnInit } from '@angular/core';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent {
  windowSize: WindowSizes;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.windowSize = pageState.windowSize);
  }

  displayMode() {
    if (this.windowSize === WindowSizes.Mobile)
      return 'mobile';
    else
      return 'desktop';
  }
}
