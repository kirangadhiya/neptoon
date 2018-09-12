import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UtilService, ChapterService, CourseService } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-chapters',
    templateUrl: './add-chapters.component.html',
    styleUrls: ['./add-chapters.component.scss']
})
export class AddChaptersComponent implements OnInit {
    @ViewChild('manageChapterForm') manageChapterForm: NgForm;
    public chapterModel: any = {};
    isEditView: boolean = false;
    courseList: any = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public chapterService: ChapterService,
        public courseService: CourseService,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.chapterModel.id = params['id'];
                this.getChapterById(this.chapterModel.id);
            } else {
                this.isEditView = false;
            }
        });
    }

    ngOnInit() {
        this.getCourses();
    }

    getCourses() {
        this.courseService.getCourses({}).subscribe(res => {
            this.courseList = res.data;
        });
    }

    getChapterById(id) {
        this.chapterService.getChapterById(id).subscribe(res => {
            this.chapterModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageChapter() {
        this.chapterService.manageChapter(this.chapterModel).subscribe((res: any) => {
            this.router.navigate(['chapters']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
