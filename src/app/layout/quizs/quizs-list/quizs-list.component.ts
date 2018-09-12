import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, QuizService } from '../../../shared';

@Component({
    selector: 'app-quizs-list',
    templateUrl: './quizs-list.component.html',
    styleUrls: ['./quizs-list.component.scss']
})
export class QuizsListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    filterModel: any = {};
    quizList: Array<any> = [];
    constructor(
        public utilService: UtilService,
        public quizService: QuizService
    ) { }


    ngOnInit() {
        this.filterModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getQuizs(this.filterModel);
    }

    openDeleteConfirmation(quiz, index) {
        quiz.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, quiz);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getQuizs(this.filterModel);
    }
    getQuizs(filterModelObj) {
        this.quizService.getQuizs(filterModelObj).subscribe(res => {
            this.quizList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteQuiz(data) {
        this.quizService.deleteQuiz(data.id).subscribe(res => {
            this.quizList = _.remove(this.quizList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
