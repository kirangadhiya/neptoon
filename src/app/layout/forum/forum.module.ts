import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ForumRoutingModule } from './forum.routing.module';
import { ForumComponent } from './forum.component';

import { StatModule, SharedModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ForumRoutingModule,
        StatModule,
        SharedModule.forRoot()
    ],
    declarations: [
        ForumComponent,
    ]
})
export class ForumModule { }
