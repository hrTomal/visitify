import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cs-landing-hiring',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './cs-landing-hiring.component.html',
  styleUrl: './cs-landing-hiring.component.css'
})
export class CsLandingHiringComponent {
  translate: TranslateService = inject(TranslateService);

}
