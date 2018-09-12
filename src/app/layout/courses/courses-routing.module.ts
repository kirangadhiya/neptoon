import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
    {
        path: '', component: CoursesComponent,
        children: [
            { path: '', redirectTo: 'courses-list', pathMatch: 'prefix' },
            { path: 'courses-list', loadChildren: './courses-list/courses-list.module#CoursesListModule' },
            { path: 'add-course', loadChildren: './add-courses/add-courses.module#AddCoursesModule' },
            { path: 'edit-course/:id', loadChildren: './add-courses/add-courses.module#AddCoursesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {
}
