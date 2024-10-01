import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sp-landing-hero-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './sp-landing-hero-section.component.html',
  styleUrl: './sp-landing-hero-section.component.css'
})
export class SpLandingHeroSectionComponent {
  translate : TranslateService = inject(TranslateService); 
}
