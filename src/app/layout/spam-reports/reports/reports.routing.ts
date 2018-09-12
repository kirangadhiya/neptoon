import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
    {
        path: '', component: ReportsComponent,
        children: [
            // { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            // { path: 'home', loadChildren: './home/home.module#HomeModule' },
            // { path: 'view-profile', loadChildren: './view-profile/view-profile.module#ViewProfileModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {
}
