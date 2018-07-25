import { ActionReducer, Action } from '@ngrx/store';

export enum ContentPages {
  video,
  problem,
  solution,
  partners,
  donate,
  gallery,
  contact
}

export function activeContentReducer(state: string, action: NavigateContentAction) {
  switch (action.type) {
    case 'SELECTION':
      return action.selectedElement;
    default:
      return ContentPages.video;
  }
}

export class NavigateContentAction implements Action {
  type: string = 'SELECTION';

  constructor(public selectedElement: ContentPages) { }
}
