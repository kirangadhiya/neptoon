import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursesRoutingModule } from './add-courses-routing.module';
import { AddCoursesComponent } from './add-courses.component';
import { PageHeaderModule, SharedModule, CourseService, UsersService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddCoursesRoutingModule,
        PageHeaderModule,
        SharedModule.forRoot()
    ],
    declarations: [AddCoursesComponent],
    providers: [CourseService,UsersService]
})
export class AddCoursesModule { }
