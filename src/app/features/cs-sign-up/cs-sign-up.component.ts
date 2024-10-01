import { Component } from '@angular/core';
import { CsNavBarComponent } from "../../shared/cs-nav-bar/cs-nav-bar.component";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cs-sign-up',
  standalone: true,
  imports: [
    CsNavBarComponent
  ],
  templateUrl: './cs-sign-up.component.html',
  styleUrl: './cs-sign-up.component.css'
})
export class CsSignUpComponent {

  constructor(private router: Router, private http: HttpClient){}

  onSubmit(){
    this.router.navigate(['verify-email']);
  }

}
