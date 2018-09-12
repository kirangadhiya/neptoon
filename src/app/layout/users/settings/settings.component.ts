import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { DELETE_TITLE, DELETE_MESSAGE, UsersService, UtilService, EmailPattern, PasswordPattern } from '../../../shared';
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
    public AdminModal = {};
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
    ) { }


    ngOnInit() {

    }


    admin_new() {
        this.modalRef = this.modalService.open(this.newAdmin, { size: 'lg', windowClass: 'add-admin-model' });
    }
    newadminsubmit() {
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

}
