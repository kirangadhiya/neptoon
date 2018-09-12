import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { PageHeaderModule, SharedModule, UsersService } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AddUserRoutingModule,
        PageHeaderModule,
        SharedModule.forRoot()
    ],
    declarations: [AddUserComponent],
    providers: [UsersService]
})
export class AddUserModule { }
