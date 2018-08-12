import { Component, OnInit } from '@angular/core';
import { WindowSizes } from 'src/app/redux/window-size';
import { Store } from '@ngrx/store';
import { PageState } from 'src/app/app.module';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

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
