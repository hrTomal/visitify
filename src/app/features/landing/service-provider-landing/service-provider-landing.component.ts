import { Component } from '@angular/core';
import { LandingNavbarComponent } from "../components/landing-navbar/landing-navbar.component";
import { SpLandingHeroSectionComponent } from "../components/sp-landing-hero-section/sp-landing-hero-section.component";
import { SpLandingStatisticsSectionComponent } from "../components/sp-landing-statistics-section/sp-landing-statistics-section.component";
import { SpLandingPackagesSectionComponent } from "../components/sp-landing-packages-section/sp-landing-packages-section.component";

@Component({
  selector: 'app-service-provider-landing',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    SpLandingHeroSectionComponent,
    SpLandingStatisticsSectionComponent,
    SpLandingPackagesSectionComponent
  ],
  templateUrl: './service-provider-landing.component.html',
  styleUrl: './service-provider-landing.component.css'
})
export class ServiceProviderLandingComponent {

}
