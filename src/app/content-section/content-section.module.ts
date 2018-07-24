import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContentSectionComponent } from './content-section.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    ContentSectionComponent,
    VideoPageComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentSectionComponent]
})
export class ContentSectionModule {}
