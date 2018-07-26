import { Component, OnInit } from '@angular/core';
import { PageState } from '../../app.module';
import { Store } from '@ngrx/store';
import { WindowSizes } from '../../redux/window-size';

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

}
