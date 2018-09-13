import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, UtilService, EmailPattern, PasswordPattern } from '../shared';
import { log } from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm') loginForm: NgForm;
    public loginModel: any = {
        device_type: '3',
        device_token: ''
    };
    public emailPattern: string = EmailPattern;
    public passwordPattern: string = PasswordPattern;
    public isLoading: boolean = false;
    public viewpassword: boolean = true;
    constructor(
        public router: Router,
        private authenticationService: AuthenticationService,
        public _utilService: UtilService
    ) {

    }

    ngOnInit() {
    }

    onLoggedin() {
        this.isLoading = true;
        console.log(this.loginModel);

        this.authenticationService.checkLogin(this.loginModel).subscribe(res => {
            console.log(res);
            if (res.response_code == 0) {
                this.isLoading = false;
                // this._utilService.showErrorSuccess(res.message);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('access_token', res.user_token)
                setTimeout(() => {
                    this.router.navigate(['dashboard']);
                }, 500);
            }
            else {
                this.isLoading = false;
                this._utilService.showErrorCall(res.message);
            }
            this.isLoading = false;
        }, err => {
            this.isLoading = false;
            this._utilService.showErrorCall(err);
        });
    }
}
