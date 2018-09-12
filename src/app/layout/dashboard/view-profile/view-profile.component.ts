import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, QuestionTypeService } from '../../../shared';

@Component({
    selector: 'view-profile',
    templateUrl: './view-profile.component.html',
    styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    filterModel: any = {};
    profile: boolean = true;

    questionTypeList: Array<any> = [];
    constructor(
        public utilService: UtilService,
        public questionTypeService: QuestionTypeService
    ) { }


    ngOnInit() {

    }
    myprofile() {
        this.profile = false;

    }

}
