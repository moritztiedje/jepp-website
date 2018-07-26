import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContentSectionComponent } from './content-section.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ProblemComponent } from './problem/problem.component';

@NgModule({
  declarations: [
    ContentSectionComponent,
    VideoPageComponent,
    UnderConstructionComponent,
    ProblemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentSectionComponent]
})
export class ContentSectionModule {}
