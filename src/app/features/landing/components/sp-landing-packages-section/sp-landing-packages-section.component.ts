import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sp-landing-packages-section',
  standalone: true,
  imports: [
    TranslateModule,
    SelectButtonModule,
    FormsModule
  ],
  templateUrl: './sp-landing-packages-section.component.html',
  styleUrl: './sp-landing-packages-section.component.css'
})
export class SpLandingPackagesSectionComponent {
  translate: TranslateService = inject(TranslateService);

  stateOptions: any[] = [{ label: 'Monthly', value: 'monthly' },{ label: 'Yearly', value: 'yearly' }];

  value: string = 'monthly';
}
