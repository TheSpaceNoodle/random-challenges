import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Challenge, User } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user$: Observable<User | undefined> = this.authService.user$;
  activeChallenges$: Observable<Challenge | undefined>[] = [];
  finishedChallenges$: Observable<Challenge | undefined>[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.getUserChallenges();
  }

  ngOnDestroy(): void {}

  getUserChallenges() {
    this.finishedChallenges$ = [];
    this.activeChallenges$ = [];

    this.getActiveChallenges();
    this.getCompletedChallenges();
  }

  getActiveChallenges() {
    return this.user$.pipe(
      map((user) => {
        if (user) {
          user.acceptedChallenges.forEach((id) =>
            this.activeChallenges$.push(this.firestoreService.getChallenge(id))
          );
        }
      }),
      take(1)
    );
  }

  getCompletedChallenges() {
    return this.user$.pipe(
      map((user) => {
        if (user) {
          user.completedChallenges.forEach((id) =>
            this.activeChallenges$.push(this.firestoreService.getChallenge(id))
          );
        }
      }),
      take(1)
    );
  }

  markAsCompleted(id: string) {
    this.firestoreService.markAsCompleted(id);
    this.getUserChallenges();
  }
}
