import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, UtilService, EmailPattern, PasswordPattern } from '../shared';

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
    constructor(
        public router: Router,
        private authenticationService: AuthenticationService,
        public _utilService: UtilService
    ) {

    }

    ngOnInit() {
    }

    onLoggedin() {
        // this.isLoading = true;
        // this.authenticationService.checkLogin(this.loginModel).subscribe(res => {
        //     this.isLoading = false;
        localStorage.setItem('isLoggedin', 'true');
        setTimeout(() => {
            this.router.navigate(['dashboard']);
        }, 500);
        // }, err => {
        //     this.isLoading = false;
        //     this._utilService.showErrorCall(err);
        // });
    }
}
