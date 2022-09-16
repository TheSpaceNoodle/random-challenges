import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitChallengePageComponent } from './submit-challenge-page.component';

const routes: Routes = [{ path: '', component: SubmitChallengePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitChallengePageRoutingModule {}
