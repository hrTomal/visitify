import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../services/language/language.service';


@Component({
  selector: 'app-landing-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class LandingNavbarComponent {
  translate: TranslateService = inject(TranslateService);
  selectedLanguage? : string;

  constructor(private languageService : LanguageService){}

  ngOnInit() {
    this.languageService.initializeLanguage();
    this.selectedLanguage = this.languageService.getSelectedLanguage();
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
    // Update the selected language for the button label
    this.selectedLanguage = this.languageService.getSelectedLanguage();
  }
}
