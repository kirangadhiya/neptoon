import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ChaptersRoutingModule, PageHeaderModule],
    declarations: [ChaptersComponent]
})
export class ChaptersModule { }
