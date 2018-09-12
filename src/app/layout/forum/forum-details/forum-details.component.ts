import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { DELETE_TITLE, DELETE_MESSAGE, UsersService, UtilService } from '../../../shared';

@Component({
    selector: 'app-forum-details',
    templateUrl: './forum-details.component.html',
    styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {
    @ViewChild('listdialog') listCommonDialog: any;
    usersList: Array<any> = [];
    userRoles: Array<any> = [];
    filterModel: any = {};
    isUserLoading: boolean = false;
    activities: boolean = true;
    member: boolean = false;
    constructor(
        public usersService: UsersService,
        public utilService: UtilService,
    ) { }


    ngOnInit() {
        // this.isUserLoading = true;
        // setTimeout(() => {
        //     this.filterModel = {
        //         pagenumber: 1,
        //         perpagerecord: 10,
        //         totalCount: 0
        //     }
        //     this.getUsers(this.filterModel);
        // }, 1000);
        // this.getRoles(true);
    }

    onPageChange(event) {
        this.filterModel.pagenumber = event;
        this.getUsers(this.filterModel);
    }

    filterByRole(roleId) {
        this.filterModel.roleid = roleId;
        this.filterModel.pagenumber = 1;
        this.getUsers(_.clone(this.filterModel));
    }

    getRoles(isAdminRoleignored) {
        this.usersService.getRoles(isAdminRoleignored).then((res: any) => {
            this.userRoles = res;
        });
    }

    openDeleteConfirmation(user, index) {
        user.index = index;
        this.listCommonDialog.open(1, DELETE_TITLE, DELETE_MESSAGE, user);
    }

    getUsers(filterObj?: any) {
        this.isUserLoading = true;
        if (!filterObj.roleid || (filterObj.roleid && filterObj.roleid == 'undefined')) {
            delete filterObj.roleid;
        }
        this.usersService.getUsers(filterObj).subscribe(res => {
            this.isUserLoading = false;
            this.usersList = res.data;
            this.filterModel.totalCount = res.totalcount;
        }, err => {
            this.isUserLoading = false;
            this.utilService.showErrorCall(err);
        });
    }

    deleteUser(data) {
        this.usersService.deleteUser(data.id).subscribe(res => {
            this.usersList = _.remove(this.usersList, (o) => {
                return !(o.id == data.id);
            });
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
    activemenu(key) {
        this.activities = false;
        this.member = false;
        if (key == 'activitie') {
            this.activities = true;
        }
        else if (key == 'member') {
            this.member = true;
        }
        else {

        }
    }
}
