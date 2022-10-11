import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Challenge } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.scss'],
})
export class ChallengesPageComponent implements OnInit, OnDestroy {
  challenges!: Challenge[];
  unsortChallenges$!: Observable<Challenge[]>;
  unsortChallenges!: Challenge[];
  userChallenges: string[] = [];

  constructor(
    private readonly firestoreService: FirestoreService,
    private readonly auth: AuthService
  ) {
    auth.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.userChallenges = user.acceptedChallenges.concat(
          user.completedChallenges
        );
      }
    });
    this.unsortChallenges$ = this.firestoreService.getApprovedChallenges();
  }

  generateChallenges() {
    this.challenges = [];
    this.unsortChallenges$.subscribe((data) => {
      this.unsortChallenges = data;

      if (this.userChallenges) {
        this.userChallenges.forEach((el) => {
          let index = this.unsortChallenges.findIndex((e) => e.id == el);
          if (index > -1) {
            this.unsortChallenges.splice(index, 1);
          }
        });
      }

      if (this.unsortChallenges.length > 6) {
        let indexList: number[] = [];
        let i = 0;
        while (i < 6) {
          const num = Math.floor(Math.random() * this.unsortChallenges.length);
          if (!indexList.includes(num)) {
            indexList.push(num);
            i++;
          }
        }
        indexList.forEach((index) => {
          this.challenges.push(this.unsortChallenges[index]);
        });
      } else {
        this.challenges = this.unsortChallenges;
      }
    });
  }

  acceptChallenge(id: string) {
    this.firestoreService.acceptChallenge(id);
    this.userChallenges.push(id);
    this.generateChallenges();
  }

  ngOnInit(): void {
    this.generateChallenges();
  }

  ngOnDestroy(): void {
    this.challenges = [];
  }
}
