import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'visitify';

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
