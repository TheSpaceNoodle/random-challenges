import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { take } from 'rxjs';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'random-challenges';
  noUser!: boolean;
  loading = true;
  user: User = {
    uid: '',
    email: '',
    userName: '',
    photo: '',
    registrationDate: '',
    roles: {},
  };

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.noUser = false;
        this.authService
          .getUser(user.uid)
          .pipe(take(1))
          .subscribe((userData) => {
            if (userData) {
              this.user = userData;
            }
            this.loading = false;
          });
      } else {
        this.noUser = true;
        this.loading = false;
      }
    });
  }
}
