import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent implements OnInit {
  @Input() photoUrl = '';
  clicked = false;

  constructor() {}

  showMenu() {
    this.clicked = !this.clicked;
  }

  log() {
    console.log('works');
  }

  logOut() {}

  ngOnInit(): void {}
}
