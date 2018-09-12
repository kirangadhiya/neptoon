import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizsRoutingModule } from './quizs-routing.module';
import { QuizsComponent } from './quizs.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, QuizsRoutingModule, PageHeaderModule],
    declarations: [QuizsComponent]
})
export class QuizsModule { }
