import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  addDoc,
  collectionData,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  approvedRef = collection(this.firestore, 'approvedChallenges');
  notApprovedRef = collection(this.firestore, 'notApprovedChallenges');

  constructor(
    private readonly firestore: Firestore,
    private readonly afs: AngularFirestore
  ) {}

  getApprovedChallenges() {
    return collectionData(this.approvedRef) as Observable<Challenge[]>;
  }

  getNotApprovedChallenges() {
    return collectionData(this.notApprovedRef) as Observable<Challenge[]>;
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
      .subscribe((data) => {
        if (data) {
          this.afs.doc<Challenge>(`approvedChallenges/${id}`).set(data);
          this.afs.doc<Challenge>(`notApprovedChallenges/${id}`).delete();
        }
      });
  }
}
