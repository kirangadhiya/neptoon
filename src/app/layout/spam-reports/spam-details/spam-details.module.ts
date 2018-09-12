import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpamDetailsRoutingComponent } from './spam-details-routing.module';
import { SpamDetailsComponent } from './spam-details..component';
import { PageHeaderModule, CommonDialogModule, QuestionTypeService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        SpamDetailsRoutingComponent,
    ],
    declarations: [SpamDetailsComponent],
    providers: [QuestionTypeService]
})
export class SpamDetailsModule { }
