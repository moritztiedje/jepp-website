import { ActionReducer, Action } from '@ngrx/store';
import { NavigateContentAction } from './actions';

export const VIDEO = 'VIDEO';
export const PROBLEM = 'PROBLEM';
export const SOLUTION = 'SOLUTION';
export const PARTNERS = 'PARTNERS';
export const DONATE_PAGE = 'DONATE PAGE';
export const GALLERY = 'GALLERY';
export const CONTACT = 'CONTACT';

export interface PageState {
  activeContent: string;
}

export function activeContentReducer(state: string, action: NavigateContentAction) {
  switch (action.type) {
    case 'SELECTION':
      return action.selectedElement;
    default:
      return VIDEO;
  }
}
