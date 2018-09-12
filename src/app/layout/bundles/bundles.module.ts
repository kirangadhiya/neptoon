import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundlesRoutingModule } from './bundles-routing.module';
import { BundlesComponent } from './bundles.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, BundlesRoutingModule, PageHeaderModule],
    declarations: [BundlesComponent]
})
export class BundlesModule { }
