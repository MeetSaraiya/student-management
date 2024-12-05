import { Routes, } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import { AddstudentComponent } from './components/addstudent/addstudent.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent,
    },
    {
        path:'add',
        component:AddstudentComponent,
    }
];
