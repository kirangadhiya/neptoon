import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, QuestionTypeService } from '../../../shared';
import { routerTransition } from '../../../router.animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'spam-details',
    templateUrl: './spam-details.component.html',
    styleUrls: ['./spam-details.component.scss'],
    animations: [routerTransition()]
})
export class SpamDetailsComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    @ViewChild('commemts') comment;
    modalRef: any;

    constructor(
        private modalService: NgbModal,
    ) {
    }
    ngOnInit() {

    }
    comments() {
        this.modalRef = this.modalService.open(this.comment, { size: 'lg', windowClass: 'add-admin-model' });
    }


}
