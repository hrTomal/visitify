import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-landing-faq',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './landing-faq.component.html',
  styleUrl: './landing-faq.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFaqComponent {
  readonly panelOpenState = signal(false);
}
