import { Injectable, Output, EventEmitter, TemplateRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UtilService {
	private jwtHelper: JwtHelperService = new JwtHelperService();
	private role: string = '';
	private userRoles: any = [];

	constructor(
		public router: Router,
		private toastr: ToastrService
	) {

	}

	setUserRoles(res) {
		this.userRoles = res;
	}

	getRoles(): any[] {
		return this.userRoles;
	}

	showErrorToast(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
		this.toastr.error(message, title);
	}

	showErrorWarning(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
		this.toastr.warning(message, title);
	}

	showErrorSuccess(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
		this.toastr.success(message, title);
	}

	public showErrorCall(err: any, show: number = 0) {
		try {		
			if (err.error) {
				try {
					let errBody: any = err.error;
					let errStr = errBody.message;
					// Object.keys(errBody).map(val => errStr += errBody[val]);
					if (err.status === 404) {
						return
						// if (show == 0)
						// 	this.showErrorToast(errStr);
					} else if (err.status == 406 && errBody.message) {
						if (errBody.message == 'Sorry you have to login first') {
							this.logout()
						}
						if (show == 0)
							this.showErrorToast(errBody.message);
					} else {
						if (show == 0)
							this.showErrorToast(errStr);
					}
					if (err.status === 401 && localStorage.getItem('isLoggedin')) {
						this.logout();
					}
				} catch (error) {
					this.showErrorToast();
				}
			} else {
				if (err.status === 404)
					return
				this.showErrorToast();
			}
		} catch (error) {
			this.showErrorToast();
		}
	}

	getAccountDetails() {
		try {
			return this.jwtHelper.decodeToken(localStorage.getItem('access_token'));
		} catch (error) {
			this.logout();
		}
	}

	getRole() {
		try {
			return this.getAccountDetails().RoleName;
		} catch (error) {
			this.logout();
		}
	}

	public openFileSelecter(id) {
		let element = document.getElementById(id);
		if (element)
			element.click();
	}

	public allowOnlyNumber(querySelector, isFloatingLabel?: boolean) {
		let element: HTMLInputElement = document.querySelector('#' + querySelector);
		if (element) {
			element.addEventListener('keypress', (e) => {
				var charCode = (e.which) ? e.which : e.keyCode;
				if (!isFloatingLabel && charCode != 8 && charCode != 0 && e.key != '+' && charCode != 32 && (charCode < 48 || charCode > 57)) {
					e.preventDefault();
				} else if (isFloatingLabel && charCode != 8 && charCode != 0 && e.key != '+' && charCode != 32 && (charCode < 48 || charCode > 57)) {
					if (e.key == '.' && element.value.indexOf('.') > -1)
						e.preventDefault();
				}
				return;
			});
		}
	}


	public logout() {
		// this.router.navigateByUrl('/login', { replaceUrl: true });
		// localStorage.removeItem('access_token');
		// localStorage.removeItem('isLoggedin');
	}
}