import { Component, OnInit } from '@angular/core';
import { ContentPages, NavigateContentAction } from '../../redux/active-content';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';

@Component({
  selector: 'app-navigation-menu-content',
  templateUrl: './navigation-menu-content.component.html',
  styleUrls: ['./navigation-menu-content.component.scss']
})
export class NavigationMenuContentComponent {

  selection: ContentPages;

  constructor(private store: Store<PageState>) {
    store.subscribe(pageState => this.selection = pageState.activeContent);
  }

  selectVideo() {
    this.store.dispatch(new NavigateContentAction(ContentPages.video))
  }

  videoIsSelected() {
    return this.selection === ContentPages.video;
  }

  selectProblem() {
    this.store.dispatch(new NavigateContentAction(ContentPages.problem))
  }

  problemIsSelected() {
    return this.selection === ContentPages.problem;
  }

  selectSolution() {
    this.store.dispatch(new NavigateContentAction(ContentPages.solution))
  }

  solutionIsSelected() {
    return this.selection === ContentPages.solution;
  }

  selectPartners() {
    this.store.dispatch(new NavigateContentAction(ContentPages.partners))
  }

  partnersIsSelected() {
    return this.selection === ContentPages.partners;
  }

  selectGallery() {
    this.store.dispatch(new NavigateContentAction(ContentPages.gallery))
  }

  galleryIsSelected() {
    return this.selection === ContentPages.gallery;
  }

  selectDonate() {
    this.store.dispatch(new NavigateContentAction(ContentPages.donate))
  }

  donateIsSelected() {
    return this.selection === ContentPages.donate;
  }

  selectContact() {
    this.store.dispatch(new NavigateContentAction(ContentPages.contact))
  }

  contactIsSelected() {
    return this.selection === ContentPages.contact;
  }

}
