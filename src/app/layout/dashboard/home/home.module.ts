import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule, CommonDialogModule, QuestionTypeService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
    providers: [QuestionTypeService]
})
export class HomeModule { }
