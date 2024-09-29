import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cs-landing-hero-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './cs-landing-hero-section.component.html',
  styleUrl: './cs-landing-hero-section.component.css'
})
export class CsLandingHeroSectionComponent {
  translate : TranslateService = inject(TranslateService); 
}
