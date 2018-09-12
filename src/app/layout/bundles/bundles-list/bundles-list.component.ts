import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UtilService, BundleService } from '../../../shared';

@Component({
    selector: 'app-bundles-list',
    templateUrl: './bundles-list.component.html',
    styleUrls: ['./bundles-list.component.scss']
})
export class BundlesListComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    filterModel: any = {};

    bundleList: Array<any> = [];
    constructor(
        public utilService: UtilService,
        public bundleService: BundleService
    ) { }


    ngOnInit() {
        this.filterModel = {
            pagenumber: 1,
            perpagerecord: 10,
            totalCount: 0
        }
        this.getBundles(this.filterModel);
    }

    openDeleteConfirmation(bundle, index) {
        bundle.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, bundle);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getBundles(this.filterModel);
    }

    getBundles(filterObj) {
        this.bundleService.getBundles(filterObj).subscribe(res => {
            this.bundleList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    deleteBundle(data) {
        this.bundleService.deleteBundle(data.id).subscribe(res => {
            this.bundleList = _.remove(this.bundleList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
