import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  challenges!: Observable<Challenge[]>;

  constructor(private readonly firestoreService: FirestoreService) {
    this.challenges = firestoreService.getNotApprovedChallenges();
  }

  approveChallenge(id: string) {
    if (id) {
      this.firestoreService.approveChallenge(id);
    }
  }

  ngOnInit(): void {}
}
