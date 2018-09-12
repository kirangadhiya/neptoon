import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailPattern, PasswordPattern } from '../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    @ViewChild('forgotPasswordForm') forgotPasswordForm: NgForm;
    @ViewChild('verificationcode') verificationcode: NgForm;
    @ViewChild('PasswordForm') PasswordForm: NgForm;
    @ViewChild('SucessContent') SucessContent;
    public forgotPasswordModel: any = {};
    public verificationdModel: any = {};
    public PasswordModel: any = {};
    public emailPattern: string = EmailPattern;
    passwordPattern: string = PasswordPattern;
    modalRef: any;
    forgot: boolean = true;
    verification: boolean = false;
    resetpassword: boolean = false;
    constructor(
        public router: Router,
        private modalService: NgbModal
    ) {

    }

    ngOnInit() { }

    // checkForgotPassword() {
    //     this.router.navigate(['login']);
    // }
    openChangePassword() {
        this.modalRef = this.modalService.open(this.SucessContent, { size: 'sm' });
    }
    varificationCode() {

    }
    closeSuccess(key) {
        this.forgot = false;
        this.verification = false;
        this.resetpassword = false;
        if (key == 'code') {
            this.verification = true;
        }
        else if(key == 'password'){
            this.resetpassword = true; 
        }
        else if (key == 'conform') {
            this.router.navigate(['/login'])
        }
    }
}
