import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  firebaseErrorMessage: string;
  hide = true;
  
  constructor(private authService: AuthService, private router: Router) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  
  signUp() {
    if (this.signUpForm.invalid)                            // if there's an error in the form, don't submit it
        return;

    this.authService.signupUser(this.signUpForm.value).then((result) => {
        if (result == null)                                 // null is success, false means there was an error
            this.router.navigate(['/dashboard']);
        else if (result.isValid == false)
            this.firebaseErrorMessage = result.message;
    }).catch(() => {

    });
  }
}
