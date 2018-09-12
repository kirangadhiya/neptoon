import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FileDropModule } from 'ngx-file-drop';
import { FeedbackFormRoutingModule } from './feedback-form-routing.module';
import { FeedbackFormComponent } from './feedback-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileDropModule,
    NgbAccordionModule.forRoot(),
    FeedbackFormRoutingModule
  ],
  declarations: [FeedbackFormComponent]
})
export class FeedbackFormModule { }
