import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UtilService, QuestionsService } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-questions',
    templateUrl: './add-questions.component.html',
    styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionComponent implements OnInit {
    @ViewChild('manageQuestionTypeForm') manageQuestionTypeForm: NgForm;

    public questionTypeModel: any = {};
    isEditView: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public questionsService: QuestionsService,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.questionTypeModel.id = params['id'];
                this.getQuestionTypeById(this.questionTypeModel.id);
            } else {
                this.isEditView = false;
            }
        });
    }

    ngOnInit() {
    }

    getQuestionTypeById(id) {
        this.questionsService.getQuestionsById(id).subscribe(res => {
            this.questionTypeModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageQuestionType() {
        this.questionsService.manageQuestions(this.questionTypeModel).subscribe((res: any) => {
            this.router.navigate(['/question-types/question-type-list']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

}
