import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, CourseService } from '../../../shared';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    coursesList: Array<any> = [];
    filterModel: any = {};

    constructor(
        public utilService: UtilService,
        public courseService: CourseService
    ) { }


    ngOnInit() {
        this.filterModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getCourses(this.filterModel);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getCourses(this.filterModel);
    }

    openDeleteConfirmation(course, index) {
        course.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, course);
    }

    getCourses(filterObj) {
        this.courseService.getCourses(filterObj).subscribe(res => {
            this.coursesList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteCourse(data) {
        this.courseService.deleteCourse(data.id).subscribe(res => {
            this.coursesList = _.remove(this.coursesList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
