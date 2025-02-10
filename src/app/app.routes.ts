import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "users",
        component: UsersListComponent
    },
    {
        path: "users/:id",
        component: UsersProfileComponent
    }
];
