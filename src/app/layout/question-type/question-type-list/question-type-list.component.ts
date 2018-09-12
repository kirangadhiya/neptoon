import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, QuestionTypeService } from '../../../shared';

@Component({
    selector: 'app-question-type-list',
    templateUrl: './question-type-list.component.html',
    styleUrls: ['./question-type-list.component.scss']
})
export class QuestionTypeListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    filterModel: any = {};

    questionTypeList: Array<any> = [];
    constructor(
        public utilService: UtilService,
        public questionTypeService: QuestionTypeService
    ) { }


    ngOnInit() {
        this.filterModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getQuestionType(this.filterModel);
    }

    openDeleteConfirmation(bundle, index) {
        bundle.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, bundle);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getQuestionType(this.filterModel);
    }

    getQuestionType(filterObj) {
        this.questionTypeService.getQuestionTypes(filterObj).subscribe(res => {
            this.questionTypeList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteQuestionType(data) {
        this.questionTypeService.deleteQuestionType(data.id).subscribe(res => {
            this.questionTypeList = _.remove(this.questionTypeList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
