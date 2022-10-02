import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  // private challenges!: CollectionReference<DocumentData>;

  constructor(private readonly firestore: AngularFirestore) {
    // this.challenges = collection(this.firestore, 'collections');
  }

  getChallenges() {
    return this.firestore.collection('challenges');
  }

  // submitChallenge() {
  //   setDoc(doc());
  // }
}
