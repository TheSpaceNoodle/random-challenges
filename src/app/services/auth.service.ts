import { Injectable } from '@angular/core';
import { getAuth, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { concatMap, map, Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | undefined> = this.getUser();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {}

  GitHubAuth(): void {
    return this.logIn(new auth.GithubAuthProvider());
  }

  logIn(provider: any): void {
    this.afAuth.signInWithPopup(provider).then((result) => {
      this.setUserData(result.user);
      this.router.navigate(['profile']);
    });
  }

  logOut(): void {
    signOut(getAuth()).then(() => {
      this.router.navigate(['']);
    });
  }

  setUserData(user: any): void {
    this.afs.doc(`users/${user.uid}`).set({
      uid: user.uid,
      email: user.email,
      userName: user.displayName,
      photo: user.photoURL,
      registrationDate: user.metadata.creationTime,
      roles: user.roles,
      acceptedChallenges: user.acceptedChallenges,
      finishedChallenges: user.finishedChallenges,
    });
  }

  getUser() {
    return this.afAuth.user.pipe(
      map((fbUser) => (fbUser ? fbUser.uid : null)),
      concatMap((uid) => this.afs.doc<User>(`users/${uid}`).valueChanges())
    );
  }
}
