import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayroomComponent } from './playroom/playroom.component';

export const routes: Routes = [
    { path: 'login', component: ReactiveFormComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'playroom', component: PlayroomComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
