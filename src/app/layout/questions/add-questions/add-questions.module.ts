import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuestionRoutingModule } from './add-questions-routing.module';
import { AddQuestionComponent } from './add-questions.component';
import { PageHeaderModule, CommonDialogModule, SharedModule, QuestionsService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddQuestionRoutingModule,
        PageHeaderModule,
        CommonDialogModule,
        SharedModule.forRoot()
    ],
    declarations: [AddQuestionComponent],
    providers: [QuestionsService]
})
export class AddQuestionModule { }
