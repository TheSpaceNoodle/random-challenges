import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-challenge-page',
  templateUrl: './submit-challenge-page.component.html',
  styleUrls: ['./submit-challenge-page.component.scss'],
})
export class SubmitChallengePageComponent implements OnInit {
  isInProgress = false; //for loading indicator
  noUser = true;

  challengeGroup = new FormGroup({
    challengeName: new FormControl(''),
    devStack: new FormControl(''),
    completeTime: new FormControl(''),
    gitHub: new FormControl(''),
    summary: new FormControl(''),
  });

  constructor() {}

  onSubmit() {}

  ngOnInit(): void {
    if (getAuth().currentUser) {
      this.noUser = false;
    } else {
      this.noUser = true;
    }
  }
}
