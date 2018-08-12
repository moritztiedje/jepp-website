import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContentSectionComponent } from './content-section.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ProblemComponent } from './problem/problem.component';
import { ImageTextBoxComponent } from './util/image-text-box/image-text-box.component';
import { SolutionComponent } from './solution/solution.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    ContentSectionComponent,
    VideoPageComponent,
    UnderConstructionComponent,
    ProblemComponent,
    ImageTextBoxComponent,
    SolutionComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentSectionComponent]
})
export class ContentSectionModule {}
