import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private commonApiService: CommonAPIService
    ) {

    }

    public checkLogin(data: any) {
        return this.commonApiService.post('v1/Account', data);
    }

}