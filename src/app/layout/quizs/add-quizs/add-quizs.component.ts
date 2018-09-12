import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UtilService, QuizService } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-quizs',
    templateUrl: './add-quizs.component.html',
    styleUrls: ['./add-quizs.component.scss']
})
export class AddQuizsComponent implements OnInit {
    @ViewChild('manageQuizForm') manageQuizForm: NgForm;
    public quizModel: any = {};
    isEditView: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public quizService: QuizService,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.quizModel.id = params['id'];
                this.getQuizById(this.quizModel.id);
            } else {
                this.isEditView = false;
            }
        });
    }

    ngOnInit() {
        this.utilService.allowOnlyNumber("pass_mark",true);
        this.utilService.allowOnlyNumber("number");
    }

    getQuizById(id) {
        this.quizService.getQuizById(id).subscribe(res => {
            this.quizModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageQuiz() {
        this.quizService.manageQuiz(this.quizModel).subscribe((res: any) => {
            this.router.navigate(['quizs']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
