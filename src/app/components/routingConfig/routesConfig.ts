import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ContactComponent } from "../contact/contact.component";

export const appRoutes: Routes = [
    { path: 'home',
      component: HomeComponent
    },
    { path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
  ];