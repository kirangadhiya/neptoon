import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionListRoutingModule } from './questions-list-routing.module';
import { QuestionListComponent } from './questions-list.component';
import { PageHeaderModule, CommonDialogModule, QuestionsService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        QuestionListRoutingModule
    ],
    declarations: [QuestionListComponent],
    providers: [QuestionsService]
})
export class QuestionListModule { }
