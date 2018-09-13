import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PageHeaderModule, CommonDialogModule, UsersService, SharedModule, SettingService } from '../../../shared';
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
        SettingsRoutingModule,
        NgbModule.forRoot(),
        FormsModule

    ],
    declarations: [SettingsComponent],
    providers: [UsersService, SettingService]
})
export class SettingsModule { }
