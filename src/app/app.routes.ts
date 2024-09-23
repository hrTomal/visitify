import { Routes } from '@angular/router';
import { CustomerLandingComponent } from './features/landing/customer-landing/customer-landing.component';
import { ServiceProviderLandingComponent } from './features/landing/service-provider-landing/service-provider-landing.component';
import { CustomerDashboardComponent } from './features/dashboard/customer-dashboard/customer-dashboard.component';
import { ServiceProviderDashboardComponent } from './features/dashboard/service-provider-dashboard/service-provider-dashboard.component';
import { AuthComponent } from './features/auth/auth.component';
import { RegisterComponent } from './features/register/register.component';
import { LandingComponent } from './features/landing/landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'sp_landing', component: ServiceProviderLandingComponent },
    { path: 'cs_dashboard', component: CustomerDashboardComponent },
    { path: 'sp_dashboard', component: ServiceProviderDashboardComponent },
    { path: 'login', component: AuthComponent },
    { path: 'register', component: RegisterComponent }
];
