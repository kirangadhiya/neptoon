import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpamDetailsComponent } from './spam-details..component';

const routes: Routes = [
    {
        path: '', component: SpamDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpamDetailsRoutingComponent {
}
