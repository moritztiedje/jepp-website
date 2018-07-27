import { Component, OnInit } from '@angular/core';
import { WindowSizes } from '../../redux/window-size';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {
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
