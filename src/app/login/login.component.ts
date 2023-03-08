import { Component, OnInit, Output } from '@angular/core';
import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  firebaseErrorMessage: string;
  currentUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) return;

    this.authService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then(async (result) => {
        await this.getUser(result);
        if (result.isValid == false) {
          console.log('login error', result);
          this.firebaseErrorMessage = result.message;
        }
      });
  }

  async getUser(result) {
    if (result == null) {
      const db = getFirestore();
      const colRef = collection(db, 'users');
      try {
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach((doc) => {
          if (doc.get('email') == this.loginForm.value.email) {
            this.currentUser = doc.get('name');
            this.router.navigate(['/dashboard/' + doc.id]);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
