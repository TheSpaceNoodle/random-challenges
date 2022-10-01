import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'random-challenges';
  userActive!: boolean;
  noUser!: boolean;
  loading = true;
  user: User = {
    userName: '',
    photo: '',
    registrationDate: '',
  };

  ngOnInit() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.userActive = true;
        this.noUser = false;
        this.user = {
          userName: user.displayName || '',
          photo: user.photoURL || '',
          registrationDate: user.metadata.creationTime || '',
        };
      } else {
        this.userActive = false;
        this.noUser = true;
      }
      this.loading = false;
    });
  }
}
