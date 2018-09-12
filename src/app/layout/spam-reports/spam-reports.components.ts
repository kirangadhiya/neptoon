import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'spam-reports',
    templateUrl: './spam-reports.component.html',
    styleUrls: ['./spam-reports.component.scss'],
    animations: [routerTransition()]
})
export class SpamReportsComponent implements OnInit {
  

    constructor(
       
    ) {
        
    }

    ngOnInit() {
      
        
    }

}
