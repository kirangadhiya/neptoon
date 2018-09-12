import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';

const routes: Routes = [
    {
        path: '', component: ForumComponent,
        children: [
            { path: '', redirectTo: 'forum-list', pathMatch: 'prefix' },
            { path: 'forum-list', loadChildren: './forum-list/forum-list.module#ForumListModule' },
            { path: 'forum-details', loadChildren: './forum-details/forum-details.module#ForumDetailsModule' },
            // { path: 'view-profile', loadChildren: './view-profile/view-profile.module#ViewProfileModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForumRoutingModule {
}
