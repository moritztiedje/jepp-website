import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigateContentAction } from '../../redux/actions';
import { PageState, VIDEO } from 'src/app/redux/active-content';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent {

  constructor(private store: Store<PageState>) { }

  select() {
    this.store.dispatch(new NavigateContentAction('NOT IMPLEMENTED'));
  }

  selectVideo() {
    this.store.dispatch(new NavigateContentAction(VIDEO))
  }

}
