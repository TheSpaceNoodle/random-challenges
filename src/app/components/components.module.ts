import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [LoginButtonComponent, CardComponent, ProfileButtonComponent],
  exports: [LoginButtonComponent, CardComponent, ProfileButtonComponent],
})
export class ComponentsModule {}
