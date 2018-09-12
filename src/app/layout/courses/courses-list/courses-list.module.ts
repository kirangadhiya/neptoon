import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListComponent } from './courses-list.component';
import { PageHeaderModule, CommonDialogModule, CourseService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        CoursesListRoutingModule
    ],
    declarations: [CoursesListComponent],
    providers: [CourseService]
})
export class CoursesListModule { }
