import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UtilService, PasswordPattern, UsersService } from '../../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
    selector: 'simple-header',
    templateUrl: './simple-header.component.html',
    styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent implements OnInit {
    constructor(

    ) {

    }
    ngOnInit() {


    }
}