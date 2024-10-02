import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sp-landing-contact-form',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './sp-landing-contact-form.component.html',
  styleUrl: './sp-landing-contact-form.component.css'
})
export class SpLandingContactFormComponent {
  translate: TranslateService = inject(TranslateService);
}
