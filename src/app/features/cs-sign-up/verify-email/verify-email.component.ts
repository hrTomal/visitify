import { Component } from '@angular/core';
import { CsNavBarComponent } from "../../../shared/cs-nav-bar/cs-nav-bar.component";
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [
    CsNavBarComponent,
    NgOtpInputModule
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent {
  otpCode: string = '';


  constructor(private router: Router){}

  otpConfig = {
    length: 6,               // Number of digits in the OTP
    inputStyles: {
      width: '50px',
      height: '50px',
      'font-size': '24px',
      'text-align': 'center',
      'margin': '0 5px'
    },
    allowNumbersOnly: true,   // Only allow numeric values
    isPasswordInput: false,   // For security, make it `true` if you want masked input
  };

  // Handle OTP change
  handleOtpChange(value: string) {
    this.otpCode = value;
    //console.log('Entered OTP:', this.otpCode);
  }

  // Method to verify OTP
  verifyOtp() {
    this.router.navigate(['verify-phone']);
  }
}
