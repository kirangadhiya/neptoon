import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, BundleService, CourseService } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-bundles',
    templateUrl: './add-bundles.component.html',
    styleUrls: ['./add-bundles.component.scss']
})
export class AddBundlesComponent implements OnInit {
    @ViewChild('manageBundleForm') manageBundleForm: NgForm;
    @ViewChild('assignCourseDialog') assignCourseDialog: any;
    @ViewChild('listdialog') listCommonDialog: any;

    public bundleModel: any = {};
    public coursesList: any = [];
    public bundleCourseList: any = [];
    public addCourseToBundleModel: any = {};
    public filterCourseModel: any = {};
    public modalRef: any = {};
    isEditView: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public bundleService: BundleService,
        public courseService: CourseService,
        private modalService: NgbModal,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.bundleModel.id = params['id'];
                this.getBundleById(this.bundleModel.id);
                setTimeout(() => {
                    this.getAllCourses();
                    this.preInitData();
                }, 1000);
            } else {
                this.isEditView = false;
            }
        });
    }

    ngOnInit() {

    }

    preInitData() {
        this.filterCourseModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getBundleCourseById(this.bundleModel.id);
    }

    getAllCourses() {
        this.courseService.getCourses({}).subscribe(res => {
            this.coursesList = res.data;
        });
    }

    getBundleById(id) {
        this.bundleService.getBundleById(id).subscribe(res => {
            this.bundleModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageBundle() {
        this.bundleService.manageBundle(this.bundleModel).subscribe((res: any) => {
            this.router.navigate(['bundles']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    openAddCourseModal() {
        this.addCourseToBundleModel = {};
        this.modalRef = this.modalService.open(this.assignCourseDialog, { backdrop: 'static' });
    }

    getBundleCourseById(id) {
        this.bundleService.getBundleCourse(this.filterCourseModel, id).subscribe(res => {
            this.bundleCourseList = res.data;
            this.filterCourseModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    onPageChange(event) {
        this.filterCourseModel.pagenumber = event;
        this.getBundleCourseById(this.bundleModel.id);
    }

    addCourseToBundle() {
        this.bundleService.addBundleCourse({
            "bundleid": this.bundleModel.id,
            "courseid": this.addCourseToBundleModel.courseid
        }).subscribe(res => {
            this.modalRef.dismiss();
            this.utilService.showErrorSuccess('', "Course added successfully.");
            this.preInitData();
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    openDeleteConfirmation(course, index) {
        course.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, course);
    }

    deleteCourseFromBundle(course) {
        this.bundleService.deleteCourseFromBundle(course.id).subscribe(res => {
            this.bundleCourseList = _.remove(this.bundleCourseList, (o: any) => {
                return !(o.id == course.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
