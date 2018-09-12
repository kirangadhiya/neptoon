import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './users-details-routing.module';
import { UserDetailsComponent } from './users-details.component';
import { PageHeaderModule, CommonDialogModule, UsersService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        UserDetailsRoutingModule
    ],
    declarations: [UserDetailsComponent],
    providers: [UsersService]
})
export class UserDetailsModule { }
