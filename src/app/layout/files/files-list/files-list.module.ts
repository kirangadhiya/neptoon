import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesListRoutingModule } from './files-list-routing.module';
import { FilesListComponent } from './files-list.component';
import { PageHeaderModule, CommonDialogModule, QuestionTypeService, SharedModule } from '../../../shared';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        NgbPaginationModule.forRoot(),
        SharedModule.forRoot(),
        CommonDialogModule,
        FilesListRoutingModule
    ],
    declarations: [FilesListComponent],
    providers: [QuestionTypeService]
})
export class FilesListModule { }
