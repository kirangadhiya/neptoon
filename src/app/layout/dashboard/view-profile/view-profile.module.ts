import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { ViewProfileComponent } from './view-profile.component';
import { PageHeaderModule, CommonDialogModule, QuestionTypeService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        ViewProfileRoutingModule,
    ],
    declarations: [ViewProfileComponent],
    providers: [QuestionTypeService]
})
export class ViewProfileModule { }
