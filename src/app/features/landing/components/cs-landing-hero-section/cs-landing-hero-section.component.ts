import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LandingNavbarComponent } from "../landing-navbar/landing-navbar.component";

@Component({
  selector: 'app-cs-landing-hero-section',
  standalone: true,
  imports: [
    TranslateModule,
    LandingNavbarComponent
],
  templateUrl: './cs-landing-hero-section.component.html',
  styleUrl: './cs-landing-hero-section.component.css'
})
export class CsLandingHeroSectionComponent {
  translate : TranslateService = inject(TranslateService); 
}
