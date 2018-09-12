import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddChaptersRoutingModule } from './add-chapters-routing.module';
import { AddChaptersComponent } from './add-chapters.component';
import { PageHeaderModule, SharedModule, CourseService, ChapterService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddChaptersRoutingModule,
        PageHeaderModule,
        SharedModule.forRoot()
    ],
    declarations: [AddChaptersComponent],
    providers: [ChapterService, CourseService]
})
export class AddChaptersModule { }
