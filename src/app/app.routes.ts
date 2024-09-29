import { Routes } from '@angular/router';
import { TTComponent } from './pages/tt/tt.component';

export const routes: Routes = [
    { path: '', redirectTo: '/tt', pathMatch: 'full' },
    { path: 'tt', component: TTComponent },
];