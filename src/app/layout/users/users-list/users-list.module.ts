import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { PageHeaderModule, CommonDialogModule, UsersService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        UsersListRoutingModule,
        NgbModule.forRoot(),
        FormsModule
        
    ],
    declarations: [UsersListComponent],
    providers: [UsersService]
})
export class UsersListModule { }
