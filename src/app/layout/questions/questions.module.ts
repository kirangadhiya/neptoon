import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, QuestionsRoutingModule, PageHeaderModule],
    declarations: [QuestionsComponent]
})
export class QuestionsModule { }
