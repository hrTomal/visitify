import { Component } from '@angular/core';
import { LandingNavbarComponent } from "../components/landing-navbar/landing-navbar.component";

import { CsLandingHeroSectionComponent } from "../components/cs-landing-hero-section/cs-landing-hero-section.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { CsLandingStatisticsComponent } from "../components/cs-landing-statistics/cs-landing-statistics.component";
import { LandingFaqComponent } from "../components/landing-faq/landing-faq.component";
import { CsLandingHiringComponent } from "../components/cs-landing-hiring/cs-landing-hiring.component";
import { CsCitiesAroundComponent } from "../components/cs-cities-around/cs-cities-around.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    CsLandingHeroSectionComponent,
    FooterComponent,
    CsLandingStatisticsComponent,
    LandingFaqComponent,
    CsLandingHiringComponent,
    CsCitiesAroundComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
