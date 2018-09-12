import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UtilService, CourseService, UsersService } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-courses',
    templateUrl: './add-courses.component.html',
    styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {
    @ViewChild('manageCourseForm') manageCourseForm: NgForm;
    public courseModel: any = {};
    public courseImageFile: any = null;
    public teachersList: any = [];
    public bundlesList: any = [];
    isEditView: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public courseService: CourseService,
        public usersService: UsersService,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.courseModel.id = params['id'];
                this.getCourseById(this.courseModel.id);
            } else {
                this.isEditView = false;
            }
        });

        this.getTeachers();
    }

    ngOnInit() {
        this.utilService.allowOnlyNumber('c_pass_mark', true);
    }

    getTeachers() {
        this.usersService.getUsers({ roleid: 3 }).subscribe(res => {
            this.teachersList = res.data;
        });
    }
    getCourseById(id) {
        this.courseService.getCourseById(id).subscribe(res => {
            this.courseModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageCourse() {
        if (!this.isEditView && !this.courseImageFile) {
            return this.utilService.showErrorToast("Required", "Please add course card.");
        }
       
        if (this.courseImageFile) {
            this.courseModel.file = this.courseImageFile;
            // formData.append('file', this.courseImageFile);
        }
       
        this.courseService.manageCourse(this.courseModel, this.courseModel.id).subscribe((res: any) => {
            this.router.navigate(['courses']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    openFileSelecter(id) {
        this.utilService.openFileSelecter(id);
    }

    onPicSelected(event) {
        if (event.target.files && event.target.files.length > 0) {
            this.courseImageFile = event.target.files[0];
            var reader = new FileReader();
            reader.onload = (e: any) => {
                this.courseModel.profilepicurl = e.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
