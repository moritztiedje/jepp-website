import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent {
  windowSize: WindowSizes;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.windowSize = pageState.windowSize);
  }

  videoSize() {
    if (this.windowSize === WindowSizes.Large)
      return 'large';
    else
      return 'medium';
  }

}
