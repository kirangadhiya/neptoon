import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule, UsersService, AuthenticationService } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule.forRoot(),
        TranslateModule,
        NgbModalModule.forRoot(),
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers: [UsersService, AuthenticationService]
})
export class LayoutModule { }
