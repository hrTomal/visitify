import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-landing-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class LandingNavbarComponent {

}
