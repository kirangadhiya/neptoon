import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, QuestionsService } from '../../../shared';

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html',
    styleUrls: ['./questions-list.component.scss']
})
export class QuestionListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    filterModel: any = {};

    questionTypeList: Array<any> = [];
    constructor(
        public utilService: UtilService,
        public questionsService: QuestionsService
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
        this.questionsService.getQuestions(filterObj).subscribe(res => {
            this.questionTypeList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteQuestionType(data) {
        this.questionsService.deleteQuestions(data.id).subscribe(res => {
            this.questionTypeList = _.remove(this.questionTypeList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
