import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage: string = 'English'; // Default language

  constructor(private translate: TranslateService) {
    // Add supported languages
    translate.addLangs(['en', 'ger', 'fr']);
  }

  // Helper method to check if localStorage is available
  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Initialize language from local storage or set to default
  initializeLanguage() {
    if (this.isLocalStorageAvailable()) {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        this.switchLanguage(savedLanguage);
      } else {
        this.switchLanguage('en'); // Default language
      }
    } else {
      this.switchLanguage('en'); // Fallback to default if localStorage is not available
    }
  }

  // Switch language and save to local storage
  switchLanguage(language: string) {
    this.translate.use(language);

    // Update the selected language for dropdown or display
    switch (language) {
      case 'en':
        this.selectedLanguage = 'English';
        break;
      case 'ger':
        this.selectedLanguage = 'German';
        break;
      case 'fr':
        this.selectedLanguage = 'French';
        break;
      default:
        this.selectedLanguage = 'English';
        break;
    }

    // Save the selected language in localStorage if available
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('selectedLanguage', language);
    }
  }

  // Get the currently selected language
  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }
}
