import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizsListRoutingModule } from './quizs-list-routing.module';
import { QuizsListComponent } from './quizs-list.component';
import { PageHeaderModule, CommonDialogModule, QuizService, SharedModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        QuizsListRoutingModule
    ],
    declarations: [QuizsListComponent],
    providers: [QuizService]
})
export class QuizsListModule { }
