import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cs-landing-statistics',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './cs-landing-statistics.component.html',
  styleUrl: './cs-landing-statistics.component.css'
})
export class CsLandingStatisticsComponent {
  translate: TranslateService = inject(TranslateService);
}
