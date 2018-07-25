import { Action } from "@ngrx/store";

export enum WindowSizes {
  Large,
  Medium
}

export function windowSizeReducer(state: string, action: WindowResizedAction) {
  switch (action.type) {
    case 'RESIZE':
      return determineWindowSize(action);
    default:
      return WindowSizes.Large;
  }
}

function determineWindowSize(action: WindowResizedAction) {
  if (action.windowWidth >= 1500)
    return WindowSizes.Large;
  else
    return WindowSizes.Medium;
}

export class WindowResizedAction implements Action {
  type: string = 'RESIZE';

  constructor(public windowWidth: number, public windowHeight: number) { }
}
