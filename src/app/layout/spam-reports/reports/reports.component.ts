import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],

})
export class ReportsComponent implements OnInit {

    model: NgbDateStruct;
    date: { year: number, month: number };
    constructor(
        private calendar: NgbCalendar
    ) {

    }

    ngOnInit() {

    }

}
