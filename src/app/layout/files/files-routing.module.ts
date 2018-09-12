import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './files.component';

const routes: Routes = [
    {
        path: '', component: FilesComponent,
        children: [
            { path: '', redirectTo: 'file-list', pathMatch: 'prefix' },
            { path: 'file-list', loadChildren: './file-list/file-list.module#FilesListModule' },
            { path: 'add-file', loadChildren: './add-file/add-file.module#AddFileModule' },
            { path: 'edit-file/:id', loadChildren: './add-file/add-file.module#AddFileModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilesRoutingModule {
}
