import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportsRoutingModule } from './reports.routing';
import { ReportsComponent } from './reports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ReportsRoutingModule,
        NgbModule.forRoot() ,
        FormsModule



    ],
    declarations: [
        ReportsComponent,

    ]
})
export class ReportsModule { }
