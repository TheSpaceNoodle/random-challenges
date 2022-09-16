import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/hello-page/hello-page.module').then(
        (m) => m.HelloPageModule
      ),
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./pages/challenges-page/challenges-page.module').then(
        (m) => m.ChallengesPageModule
      ),
  },
  {
    path: 'submit-challenge',
    loadChildren: () =>
      import('./pages/submit-challenge-page/submit-challenge-page.module').then(
        (m) => m.SubmitChallengePageModule
      ),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./pages/useful-links-page/useful-links-page.module').then(
        (m) => m.UsefulLinksPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: '**',
    title: '404',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
