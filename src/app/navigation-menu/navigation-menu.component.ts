import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigateContentAction } from '../redux/actions';
import { PageState } from 'src/app/redux/active-content';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent {

  constructor(private store: Store<PageState>) { }

  select(selection: string) {
    debugger;
    this.store.dispatch(new NavigateContentAction(selection));
  }

}
