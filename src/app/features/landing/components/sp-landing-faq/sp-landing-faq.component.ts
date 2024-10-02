import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sp-landing-faq',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './sp-landing-faq.component.html',
  styleUrl: './sp-landing-faq.component.css'
})
export class SpLandingFaqComponent {
  readonly panelOpenState = signal(false);
}
