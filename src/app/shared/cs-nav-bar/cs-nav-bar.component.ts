import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-cs-nav-bar',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './cs-nav-bar.component.html',
  styleUrl: './cs-nav-bar.component.css'
})
export class CsNavBarComponent {
  translate: TranslateService = inject(TranslateService);
  selectedLanguage? : string;
  shouldShowCategories = false;

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
