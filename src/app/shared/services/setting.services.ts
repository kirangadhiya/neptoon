import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class SettingService {
    constructor(
        private commonApiService: CommonAPIService
    ) {

    }

    public addadmin(data: any) {
        return this.commonApiService.post('users/add/admin', data);
    }

}