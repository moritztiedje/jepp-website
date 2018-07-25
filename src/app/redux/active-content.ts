import { ActionReducer, Action } from '@ngrx/store';

export const VIDEO = 'VIDEO';
export const PROBLEM = 'PROBLEM';
export const SOLUTION = 'SOLUTION';
export const PARTNERS = 'PARTNERS';
export const DONATE_PAGE = 'DONATE PAGE';
export const GALLERY = 'GALLERY';
export const CONTACT = 'CONTACT';

export function activeContentReducer(state: string, action: NavigateContentAction) {
  switch (action.type) {
    case 'SELECTION':
      return action.selectedElement;
    default:
      return VIDEO;
  }
}

export class NavigateContentAction implements Action {
  type: string = 'SELECTION';

  constructor(public selectedElement: string) { }
}
