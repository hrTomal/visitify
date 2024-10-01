import { Component } from '@angular/core';
import { CsNavBarComponent } from "../../../shared/cs-nav-bar/cs-nav-bar.component";
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-phone',
  standalone: true,
  imports: [
    CsNavBarComponent,
    NgOtpInputModule
  ],
  templateUrl: './verify-phone.component.html',
  styleUrl: './verify-phone.component.css'
})
export class VerifyPhoneComponent {
  otpCode: string = '';
  selectedOptionId: string | null = null;

  options = [
    { id: 1, label: 'SMS Authentication', details: 'Receive a code on your Mobile phone' },
    { id: 2, label: 'Phone Call Authentication', details: 'Receive a code on your Mobile phone' },
    { id: 3, label: 'WhatsApp Authenticator', details: 'Receive a code in your WhatsApp Message' }
  ];


  constructor(private router: Router){
    this.selectedOptionId = 'sms';
  }

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

  selectOption(optionId: string) {
    // Toggle selection
    // console.log(optionId);
    this.selectedOptionId = this.selectedOptionId === optionId ? null : optionId;
  }
}
