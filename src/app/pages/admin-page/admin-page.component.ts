import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Challenge } from 'src/models/challenge.model';

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

  ngOnInit(): void {}
}
