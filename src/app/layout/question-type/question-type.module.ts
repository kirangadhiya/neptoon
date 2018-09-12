import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionTypesRoutingModule } from './question-type-routing.module';
import { QuestionTypesComponent } from './question-type.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, QuestionTypesRoutingModule, PageHeaderModule],
    declarations: [QuestionTypesComponent]
})
export class QuestionTypesModule { }
