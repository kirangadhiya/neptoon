import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumDetailsComponent } from './forum-details.component';

const routes: Routes = [
    {
        path: '', component: ForumDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForumDetailsRoutingModule {
}
