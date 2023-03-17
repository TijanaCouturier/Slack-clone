import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private afAuth: AngularFireAuth, private auth: Auth) {}
  currentUser$ = authState(this.auth)

  loginUser(email: string, password: string): Promise<any> {
      console.log(this.currentUser$)
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Auth Service: loginUser: success', result);
        this.router.navigate(['/dashboard']);
      });
  }

  signupUser(user: any): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log(result);
        this.router.navigate(['/dashboard']);
      });
  }
}
