import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, ChapterService } from '../../../shared';

@Component({
    selector: 'app-chapters-list',
    templateUrl: './chapters-list.component.html',
    styleUrls: ['./chapters-list.component.scss']
})
export class ChaptersListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    chapterList: Array<any> = [];
    filterModel: any = {};

    constructor(
        public utilService: UtilService,
        public chapterService: ChapterService
    ) { }


    ngOnInit() {
        this.filterModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getChapters(this.filterModel);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getChapters(this.filterModel);
    }

    openDeleteConfirmation(chapter, index) {
        chapter.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, chapter);
    }

    getChapters(filterObj) {
        this.chapterService.getChapters(filterObj).subscribe(res => {
            this.chapterList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteChapter(data) {
        this.chapterService.deleteChapter(data.id).subscribe(res => {
            this.chapterList = _.remove(this.chapterList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
