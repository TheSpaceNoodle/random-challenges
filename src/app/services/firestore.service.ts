import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Challenge } from 'src/models/challenge.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  // private challenges!: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    // this.challenges = collection(this.firestore, 'collections');
  }

  getChallenges() {
    return collectionData(collection(this.firestore, 'challenges'));
  }

  submitChallenge(data: Challenge) {
    addDoc(collection(this.firestore, 'challenges'), data);
    return 'Added!';
  }
}
