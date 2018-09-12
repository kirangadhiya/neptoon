import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundlesListRoutingModule } from './bundles-list-routing.module';
import { BundlesListComponent } from './bundles-list.component';
import { PageHeaderModule, CommonDialogModule, BundleService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        BundlesListRoutingModule
    ],
    declarations: [BundlesListComponent],
    providers: [BundleService]
})
export class BundlesListModule { }