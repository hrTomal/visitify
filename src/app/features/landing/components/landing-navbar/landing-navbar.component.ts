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
  // Get the search bar element
  const searchBar = document.querySelector('.search-bar');
  
  if (searchBar) {
    // Get the position of the search bar relative to the viewport
    const searchBarBottom = searchBar.getBoundingClientRect().bottom;

    // Set isScrolled to true when the search bar goes out of view
    this.isScrolled = searchBarBottom <= 0; 

    // Show or hide the search bar based on scroll position
    this.showSearchBar = this.isScrolled;
    
    console.log('Scrolled:', this.isScrolled);
  }
}
}
