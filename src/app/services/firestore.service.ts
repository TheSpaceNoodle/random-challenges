import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Challenge } from 'src/models/challenge.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  approvedRef = collection(this.firestore, 'approvedChallenges');
  notApprovedRef = collection(this.firestore, 'notApprovedChallenges');

  constructor(private readonly firestore: Firestore) {}

  getApprovedChallenges() {
    return collectionData(this.approvedRef) as Observable<Challenge[]>;
  }

  getNotApprovedChallenges() {
    return collectionData(this.notApprovedRef) as Observable<Challenge[]>;
  }

  submitChallenge(data: Challenge) {
    addDoc(this.notApprovedRef, data);
    return 'Added!';
  }

  approveChallenge(id: string) {
    const challenge = getDoc(doc(this.firestore, 'notApprovedChallenges', id));
    deleteDoc(doc(this.firestore, 'notApprovedChallenges', id));
    setDoc(doc(this.approvedRef, id), challenge);
  }
}
