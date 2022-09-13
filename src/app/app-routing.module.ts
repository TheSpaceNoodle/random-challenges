import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ChallengesPageComponent,
  HelloPageComponent,
  LoginPageComponent,
  NotFoundPageComponent,
  SubmitChallengePageComponent,
  UsefulLinksPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: HelloPageComponent,
  },
  {
    path: 'challenges',
    component: ChallengesPageComponent,
  },
  {
    path: 'submit-challenge',
    component: SubmitChallengePageComponent,
  },
  {
    path: 'learn',
    component: UsefulLinksPageComponent,
  },
  {
    path: 'profile',
    component: UsefulLinksPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    title: '404',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
