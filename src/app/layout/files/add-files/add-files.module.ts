import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFileRoutingModule } from './add-files-routing.module';
import { AddFileComponent } from './add-files.component';
import { PageHeaderModule, CommonDialogModule, SharedModule, QuestionTypeService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddFileRoutingModule,
        PageHeaderModule,
        CommonDialogModule,
        SharedModule.forRoot()
    ],
    declarations: [AddFileComponent],
    providers: [QuestionTypeService]
})
export class AddFileModule { }
