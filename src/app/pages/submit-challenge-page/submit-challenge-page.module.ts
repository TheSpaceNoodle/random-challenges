import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitChallengePageRoutingModule } from './submit-challenge-page-routing.module';
import { SubmitChallengePageComponent } from './submit-challenge-page.component';

@NgModule({
  declarations: [SubmitChallengePageComponent],
  imports: [
    CommonModule,
    SubmitChallengePageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SubmitChallengePageModule {}
