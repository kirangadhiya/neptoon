import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuizsRoutingModule } from './add-quizs-routing.module';
import { AddQuizsComponent } from './add-quizs.component';
import { PageHeaderModule, SharedModule, QuizService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddQuizsRoutingModule,
        PageHeaderModule,
        SharedModule.forRoot()
    ],
    declarations: [AddQuizsComponent],
    providers: [QuizService]
})
export class AddQuizsModule { }
