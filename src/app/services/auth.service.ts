import { Injectable } from '@angular/core';
import { getAuth, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  GitHubAuth() {
    console.log('github auth');
    return this.logIn(new auth.GithubAuthProvider());
  }

  logIn(provider: any) {
    return this.fireAuth.signInWithPopup(provider).then((result) => {
      this.router.navigate(['profile']);
    });
  }

  logOut() {
    signOut(getAuth())
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
