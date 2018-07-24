import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigateContentAction } from '../../redux/actions';
import { PageState, VIDEO, DONATE_PAGE, GALLERY, PROBLEM, SOLUTION, PARTNERS, CONTACT } from 'src/app/redux/active-content';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent {

  selection: string;

  constructor(private store: Store<PageState>) {
    store.subscribe(pageState => this.selection = pageState.activeContent);
  }

  select() {
    this.store.dispatch(new NavigateContentAction('NOT IMPLEMENTED'));
  }

  selectVideo() {
    this.store.dispatch(new NavigateContentAction(VIDEO))
  }

  videoIsSelected() {
    return this.selection === VIDEO;
  }

  selectProblem() {
    this.store.dispatch(new NavigateContentAction(PROBLEM))
  }

  problemIsSelected() {
    return this.selection === PROBLEM;
  }

  selectSolution() {
    this.store.dispatch(new NavigateContentAction(SOLUTION))
  }

  solutionIsSelected() {
    return this.selection === SOLUTION;
  }

  selectPartners() {
    this.store.dispatch(new NavigateContentAction(PARTNERS))
  }

  partnersIsSelected() {
    return this.selection === PARTNERS;
  }

  selectGallery() {
    this.store.dispatch(new NavigateContentAction(GALLERY))
  }

  galleryIsSelected() {
    return this.selection === GALLERY;
  }

  selectDonate() {
    this.store.dispatch(new NavigateContentAction(DONATE_PAGE))
  }

  donateIsSelected() {
    return this.selection === DONATE_PAGE;
  }

  selectContact() {
    this.store.dispatch(new NavigateContentAction(CONTACT))
  }

  contactIsSelected() {
    return this.selection === CONTACT;
  }

}
