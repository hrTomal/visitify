import { Component } from '@angular/core';
import { LandingNavbarComponent } from "../components/landing-navbar/landing-navbar.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingNavbarComponent
    ,MatIconModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
