import { Action } from "@ngrx/store";

export const LARGE_WINDOW = 'LARGE_WINDOW';
export const MEDIUM_WINDOW = 'MEDIUM_WINDOW';

export function windowSizeReducer(state: string, action: WindowResizedAction) {
  switch (action.type) {
    case 'RESIZE':
      return determineWindowSize(action);
    default:
      return LARGE_WINDOW;
  }
}

function determineWindowSize(action: WindowResizedAction) {
  if (action.windowWidth >= 1500)
    return LARGE_WINDOW;
  else
    return MEDIUM_WINDOW;
}

export class WindowResizedAction implements Action {
  type: string = 'RESIZE';

  constructor(public windowWidth: number, public windowHeight: number) { }
}
