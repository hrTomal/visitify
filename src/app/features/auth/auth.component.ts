import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { CsNavBarComponent } from "../../shared/cs-nav-bar/cs-nav-bar.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FooterComponent,
    CsNavBarComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
