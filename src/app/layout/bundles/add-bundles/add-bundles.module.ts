import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBundlesRoutingModule } from './add-bundles-routing.module';
import { AddBundlesComponent } from './add-bundles.component';
import { PageHeaderModule, CommonDialogModule, SharedModule, BundleService, CourseService } from '../../../shared';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        AddBundlesRoutingModule,
        PageHeaderModule,
        CommonDialogModule,
        NgbModalModule.forRoot(),
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot()
    ],
    declarations: [AddBundlesComponent],
    providers: [BundleService, CourseService]
})
export class AddBundlesModule { }
