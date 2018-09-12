import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UtilService, UsersService, EmailPattern, PasswordPattern } from '../../../shared';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    @ViewChild('manageUserForm') manageUserForm: NgForm;
    public userModel: any = {};
    isEditView: boolean = false;
    emailPattern: string = EmailPattern;
    passwordPattern: string = PasswordPattern;
    userRoles: any = [];
    constructor(
        private activatedRoute: ActivatedRoute,
        public utilService: UtilService,
        public usersService: UsersService,
        public router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.isEditView = true;
                this.userModel.id = params['id'];
                this.getUserById(this.userModel.id);
            } else {
                this.isEditView = false;
            }
        });
    }

    ngOnInit() {
        // this.getRoles(true);
    }

    getRoles(isAdminRoleignored) {
        this.usersService.getRoles(isAdminRoleignored).then((res: any) => {           
            this.userRoles = res;
        });
    }

    getUserById(id) {
        this.usersService.getUserById(id).subscribe(res => {
            this.userModel = _.clone(res.data);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }

    manageUser() {
        this.usersService.manageUser(this.userModel).subscribe((res: any) => {
            this.router.navigate(['users-list']);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
