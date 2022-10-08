import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [
    LoginButtonComponent,
    CardComponent,
    ProfileButtonComponent,
    LoadingComponent,
  ],
  exports: [
    LoginButtonComponent,
    CardComponent,
    ProfileButtonComponent,
    LoadingComponent,
  ],
})
export class ComponentsModule {}
