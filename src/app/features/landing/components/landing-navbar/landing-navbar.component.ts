import { Component, HostListener, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../services/language/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class LandingNavbarComponent {
  translate: TranslateService = inject(TranslateService);
  selectedLanguage? : string;
  isScrolled = false;
  showSearchBar = false;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the hero section element
    const heroSection = document.querySelector('app-cs-landing-hero-section');

    console.log('Scrolled:', this.isScrolled);
    
    if (heroSection) {
      const heroSectionBottom = heroSection.getBoundingClientRect().bottom;
      this.isScrolled = heroSectionBottom <= 0; // Change state when hero section is out of view
      this.showSearchBar = this.isScrolled;
    }
  }
}
