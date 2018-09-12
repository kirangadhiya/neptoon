import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class FileService {
    constructor(
        private commonApiService: CommonAPIService,
    ) {

    }

    getFileById(id?: string) {
        return this.commonApiService.get('v1/File' + (id ? '/' + id : ''));
    }

    getFiles(filterObj) {
        return this.commonApiService.get('v1/File', filterObj);
    }

    manageFile(data: any) {
        if (data.id) {
            return this.commonApiService.put('v1/File/' + data.id, data);
        } else
            return this.commonApiService.post('v1/File', data);
    }

    deleteFile(id) {
        return this.commonApiService.delete('v1/File/' + id);
    }

    getFileCourse(filterObj, id?: string) {
        return this.commonApiService.get('v1/File/GetCourseByFileId' + (id ? '/' + id : ''), filterObj);
    }

    addFileCourse(dataObj) {
        return this.commonApiService.post('v1/File/AddFileCourse', dataObj);
    }

    deleteCourseFromFile(id) {
        return this.commonApiService.delete('v1/File/DeleteFileCourse/' + id);
    }
}