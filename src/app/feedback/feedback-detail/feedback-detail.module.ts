import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackDetailRoutingModule } from './feedback-detail-routing.module';
import { FeedbackDetailComponent } from './feedback-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbTabsetModule.forRoot(),
    FeedbackDetailRoutingModule
  ],
  declarations: [FeedbackDetailComponent]
})
export class FeedbackDetailModule { }
