import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumListRoutingModule } from './forum-list.routing.module';
import { FormListComponent } from './forum-list.component';
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
        NgbModule.forRoot(),
        FormsModule,
        CommonDialogModule,
        ForumListRoutingModule
    ],
    declarations: [FormListComponent],
    providers: [UsersService]
})
export class ForumListModule { }
