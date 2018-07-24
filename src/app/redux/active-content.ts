import { ActionReducer, Action } from '@ngrx/store';
import { NavigateContentAction } from './actions';

export const VIDEO = 'VIDEO';

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
