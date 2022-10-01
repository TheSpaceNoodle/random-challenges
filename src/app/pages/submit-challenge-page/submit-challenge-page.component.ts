import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-challenge-page',
  templateUrl: './submit-challenge-page.component.html',
  styleUrls: ['./submit-challenge-page.component.scss'],
})
export class SubmitChallengePageComponent implements OnInit {
  isInProgress = false; //for loading indicator

  constructor() {}

  ngOnInit(): void {}
}
