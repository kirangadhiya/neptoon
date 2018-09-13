import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { DELETE_TITLE, DELETE_MESSAGE, UsersService, UtilService, EmailPattern, PasswordPattern, SettingService } from '../../../shared';
import { NgbDateStruct, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    model: NgbDateStruct;
    date: { year: number, month: number };
    @ViewChild('listdialog') listCommonDialog: any;
    @ViewChild('newAdmin') newAdmin;
    @ViewChild('newAdminForm') loginForm: NgForm;
    usersList: Array<any> = [];
    userRoles: Array<any> = [];
    filterModel: any = {};
    public AdminModal: any = {};
    public changePwd = {};
    isUserLoading: boolean = false;
    public emailPattern: string = EmailPattern;
    public passwordPattern: string = PasswordPattern;
    changePassword: boolean = false
    modalRef: any;
    constructor(
        public usersService: UsersService,
        public utilService: UtilService,
        private modalService: NgbModal,
        private settingService: SettingService
    ) { }


    ngOnInit() {

    }


    admin_new() {
        this.modalRef = this.modalService.open(this.newAdmin, { size: 'lg', windowClass: 'add-admin-model' });
    }
    change_password() {
        this.changePassword = true;
    }
    newadminstrater() {
        this.changePassword = false;
    }
    cancel() {
        this.changePassword = false;
    }
    closeSuccess() {
        this.changePassword = false
    }
    newAdminSubmit() {
        delete this.AdminModal.cpassword;
        console.log(this.AdminModal);
        this.settingService.addadmin(this.AdminModal).subscribe(res => {
            console.log(res);
            this.modalRef.close();
            // this._utilService.showErrorSuccess(res.message);
        }, err => {
            this.utilService.showErrorCall(err);
        });
    }
}
