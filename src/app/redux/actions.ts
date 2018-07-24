import { Action } from "@ngrx/store";

export class NavigateContentAction implements Action {
  type: string = 'SELECTION';

  constructor(public selectedElement: string) {}
}
