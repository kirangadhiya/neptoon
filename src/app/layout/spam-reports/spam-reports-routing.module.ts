import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpamReportsComponent } from './spam-reports.components';

const routes: Routes = [
    {
        path: '', component: SpamReportsComponent,
        children: [
            { path: '', redirectTo: 'reports', pathMatch: 'prefix' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'spam-details', loadChildren: './spam-details/spam-details.module#SpamDetailsModule' },
            // { path: 'view-profile', loadChildren: './view-profile/view-profile.module#ViewProfileModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpamReportsRoutingModule {
}
