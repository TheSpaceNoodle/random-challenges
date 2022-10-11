import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Challenge, User } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user: User = {
    uid: '',
    email: '',
    userName: '',
    photo: '',
    registrationDate: '',
    roles: {},
    acceptedChallenges: [],
    completedChallenges: [],
  };
  activeChallenges: Challenge[] = [];
  finishedChallenges: Challenge[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly firestoreService: FirestoreService
  ) {
    this.auth.user$.subscribe((userData) => {
      if (userData) {
        this.user = userData;
        this.getUserChallenges();
      }
    });
  }

  getUserChallenges() {
    this.activeChallenges = [];
    this.finishedChallenges = [];

    this.user.acceptedChallenges.forEach((id) => {
      this.firestoreService
        .getChallenge(id)
        .pipe(take(1))
        .subscribe((data) => {
          if (data) this.activeChallenges.push(data);
        });
    });
    this.user.completedChallenges.forEach((id) => {
      this.firestoreService
        .getChallenge(id)
        .pipe(take(1))
        .subscribe((data) => {
          console.log('foreach');
          if (data) this.finishedChallenges.push(data);
        });
    });
  }

  markAsCompleted(id: string) {
    this.firestoreService.markAsCompleted(id);
    this.getUserChallenges();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
