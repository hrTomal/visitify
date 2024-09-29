import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cs-cities-around',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './cs-cities-around.component.html',
  styleUrl: './cs-cities-around.component.css'
})
export class CsCitiesAroundComponent {
  translate : TranslateService = inject(TranslateService); 

}
