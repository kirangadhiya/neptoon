import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.scss'],
    animations: [routerTransition()]
})
export class ForumComponent implements OnInit {
  

    constructor(
       
    ) {
        
    }

    ngOnInit() {
      
        
    }

}
