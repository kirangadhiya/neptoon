import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumDetailsRoutingModule } from './forum-details-routing.module';
import { ForumDetailsComponent } from './forum-details.component';
import { PageHeaderModule, CommonDialogModule, UsersService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        ForumDetailsRoutingModule
    ],
    declarations: [ForumDetailsComponent],
    providers: [UsersService]
})
export class ForumDetailsModule { }
