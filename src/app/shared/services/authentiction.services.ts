import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private commonApiService: CommonAPIService
    ) {

    }

    public checkLogin(data: any) {
        return this.commonApiService.post('auth/login', data);
    }
    public ForgotpasswordUsingemail(data: any) {
        return this.commonApiService.post('auth/verify', data);
    }
    public verifyotp(data: any) {
        return this.commonApiService.post('auth/verifyotp', data);
    }
    public passwordreset(data: any) {
        return this.commonApiService.post('auth/resetpassword', data);
    }
    public logout() {
        return this.commonApiService.get('auth/logout');
    }

}