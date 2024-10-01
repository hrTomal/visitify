import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sp-landing-statistics-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './sp-landing-statistics-section.component.html',
  styleUrl: './sp-landing-statistics-section.component.css'
})
export class SpLandingStatisticsSectionComponent {
  translate: TranslateService = inject(TranslateService);
}
