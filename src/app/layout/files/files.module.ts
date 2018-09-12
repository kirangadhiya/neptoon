import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, FilesRoutingModule, PageHeaderModule],
    declarations: [FilesComponent]
})
export class FilesModule { }
