import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<User | undefined>;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        if (this.getUser(user.uid)) {
          this.user$ = this.getUser(user.uid);
        }
      }
    });
  }

  GitHubAuth() {
    return this.logIn(new auth.GithubAuthProvider());
  }

  logIn(provider: any) {
    return this.fireAuth.signInWithPopup(provider).then((result) => {
      this.setUserData(result.user);
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

  setUserData(user: any) {
    const userData = {
      uid: user.uid,
      email: user.email,
      userName: user.displayName,
      photo: user.photoURL,
      registrationDate: user.metadata.creationTime,
      roles: user.roles,
      acceptedChallenges: user.acceptedChallenges,
    };
    this.afs.doc(`users/${user.uid}`).set(userData);
  }

  getUser(uid: string) {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }
}
