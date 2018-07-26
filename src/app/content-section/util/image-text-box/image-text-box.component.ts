import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-box',
  templateUrl: './image-text-box.component.html',
  styleUrls: ['./image-text-box.component.scss']
})
export class ImageTextBoxComponent {
  @Input() image: string;
  @Input() paragraphs: string[];
  @Input() imagefirst: boolean = false;

  constructor() { }

}
