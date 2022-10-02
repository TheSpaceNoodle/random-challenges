import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent implements OnInit {
  @Input() photoUrl = '';
  clicked = false;

  constructor(public authService: AuthService) {}

  showMenu() {
    this.clicked = !this.clicked;
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnInit(): void {}
}
