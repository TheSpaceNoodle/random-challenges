import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { take } from 'rxjs';
import { Challenge, User } from 'src/app/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  user!: User;

  approvedRef = collection(this.firestore, 'approvedChallenges');
  notApprovedRef = collection(this.firestore, 'notApprovedChallenges');

  constructor(
    private readonly firestore: Firestore,
    private readonly afs: AngularFirestore,
    private readonly auth: AuthService
  ) {}

  getApprovedChallenges() {
    return this.afs.collection<Challenge>('approvedChallenges').valueChanges();
  }

  getNotApprovedChallenges() {
    return this.afs
      .collection<Challenge>('notApprovedChallenges')
      .valueChanges();
  }

  submitChallenge(data: Challenge) {
    addDoc(this.notApprovedRef, data).then((result) => {
      data.id = result.id;
      setDoc(doc(this.notApprovedRef, result.id), data);
    });
  }

  approveChallenge(id: string) {
    this.afs
      .doc<Challenge>(`notApprovedChallenges/${id}`)
      .valueChanges()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this.afs.doc<Challenge>(`approvedChallenges/${id}`).set(data);
          this.afs.doc<Challenge>(`notApprovedChallenges/${id}`).delete();
        }
      });
  }

  acceptChallenge(id: string) {
    const uid = getAuth().currentUser?.uid;

    if (uid) {
      this.auth.user$.pipe(take(1)).subscribe((data) => {
        if (data) {
          this.user = data;
          if (!this.user.acceptedChallenges.includes(id)) {
            this.user.acceptedChallenges.push(id);
            this.afs.doc<User>(`users/${uid}`).set(this.user);
          }
        }
      });
    }
  }

  markAsCompleted(id: string) {
    const uid = getAuth().currentUser?.uid;

    if (uid) {
      this.auth.user$.pipe(take(1)).subscribe((data) => {
        if (data) {
          this.user = data;
          if (this.user.acceptedChallenges.includes(id)) {
            this.user.acceptedChallenges.splice(
              this.user.acceptedChallenges.indexOf(id),
              1
            );
            this.user.completedChallenges.push(id);
            this.afs.doc<User>(`users/${uid}`).set(this.user);
          }
        }
      });
    }
  }

  getChallenge(id: string) {
    return this.afs.doc<Challenge>(`approvedChallenges/${id}`).valueChanges();
  }
}
