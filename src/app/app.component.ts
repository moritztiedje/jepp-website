import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ComponentRef, ApplicationRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from './app.module';
import { WindowResizedAction } from './redux/window-size';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store: Store<PageState>;

  constructor(store: Store<PageState>) {
    store.dispatch(new WindowResizedAction(window.innerWidth, window.innerHeight));
    this.store = store;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event?) {
    this.store.dispatch(new WindowResizedAction(window.innerWidth, window.innerHeight));
  }
}
