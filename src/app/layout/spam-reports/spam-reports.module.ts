import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SpamReportsRoutingModule } from './spam-reports-routing.module';
import { SpamReportsComponent } from './spam-reports.components';

import { StatModule, SharedModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SpamReportsRoutingModule,
        StatModule,
        SharedModule.forRoot()
    ],
    declarations: [
        SpamReportsComponent,
    ]
})
export class SpamReportsModule { }
