import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Challenge } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.scss'],
})
export class ChallengesPageComponent implements OnInit {
  challenges!: Challenge[];
  totalLength!: number;

  constructor(private readonly firestoreService: FirestoreService) {
    this.generateChallenges();
  }

  generateChallenges() {
    this.challenges = [];
    this.firestoreService
      .getApprovedChallenges()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalLength = data.length;
        if (data.length > 6) {
          let indexList: number[] = [];
          console.log(indexList);
          let i = 0;
          while (i < 6) {
            const num = Math.floor(Math.random() * data.length);
            if (!indexList.includes(num)) {
              indexList.push(num);
              i++;
            }
          }
          indexList.forEach((index) => {
            this.challenges.push(data[index]);
          });
        } else {
          this.challenges = data;
        }
      });
  }

  ngOnInit(): void {}
}
