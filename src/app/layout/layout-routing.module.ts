import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'prefix' },
            { path: 'spam-reports', loadChildren: './spam-reports/spam-reports.module#SpamReportsModule' },
            { path: 'forum', loadChildren: './forum/forum.module#ForumModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'bundles', loadChildren: './bundles/bundles.module#BundlesModule' },
            { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
            { path: 'chapters', loadChildren: './chapters/chapters.module#ChaptersModule' },
            { path: 'question-types', loadChildren: './question-type/question-type.module#QuestionTypesModule' },
            { path: 'quizs', loadChildren: './quizs/quizs.module#QuizsModule' },
            { path: 'files', loadChildren: './files/files.module#FilesModule' },
            { path: 'questions', loadChildren: './questions/questions.module#QuestionsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
