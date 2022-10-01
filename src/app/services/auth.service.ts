import { Injectable } from '@angular/core';
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
    return this.authentication(new auth.GithubAuthProvider());
  }

  authentication(provider: any) {
    return this.fireAuth.signInWithPopup(provider).then((result) => {
      const userinfo = result.additionalUserInfo?.profile;
      this.router.navigate(['profile']);
    });
  }
}
