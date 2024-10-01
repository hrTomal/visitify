import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sp-landing-packages-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './sp-landing-packages-section.component.html',
  styleUrl: './sp-landing-packages-section.component.css'
})
export class SpLandingPackagesSectionComponent {
  translate: TranslateService = inject(TranslateService);
}
