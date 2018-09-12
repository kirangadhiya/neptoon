import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilService, AuthenticationService } from '../shared';
@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    NgbModalModule.forRoot(),
  ],
  declarations: [ForgotPasswordComponent],
  providers: [UtilService, AuthenticationService]
})
export class ForgotPasswordModule { }
