import { Routes } from '@angular/router';
import { CustomerLandingComponent } from './features/landing/customer-landing/customer-landing.component';
import { ServiceProviderLandingComponent } from './features/landing/service-provider-landing/service-provider-landing.component';
import { CustomerDashboardComponent } from './features/dashboard/customer-dashboard/customer-dashboard.component';
import { ServiceProviderDashboardComponent } from './features/dashboard/service-provider-dashboard/service-provider-dashboard.component';
import { AuthComponent } from './features/auth/auth.component';
import { CsSignUpComponent } from './features/cs-sign-up/cs-sign-up.component';
import { VerifyEmailComponent } from './features/cs-sign-up/verify-email/verify-email.component';
import { VerifyPhoneComponent } from './features/cs-sign-up/verify-phone/verify-phone.component';
import { FooterComponent } from './shared/footer/footer.component';

export const routes: Routes = [
    { path: 'footer', component: FooterComponent },
    { path: 'login', component: AuthComponent },
    { path: 'sign-up', component: CsSignUpComponent },
    { path: '', component: CustomerLandingComponent },
    { path: 'sp-landing', component: ServiceProviderLandingComponent },
    { path: 'cs-dashboard', component: CustomerDashboardComponent },
    { path: 'sp-dashboard', component: ServiceProviderDashboardComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: 'verify-phone', component: VerifyPhoneComponent }
];
