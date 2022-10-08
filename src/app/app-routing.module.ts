import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: '',
    title: 'Random Challenges',
    loadChildren: () =>
      import('./pages/hello-page/hello-page.module').then(
        (m) => m.HelloPageModule
      ),
  },
  {
    path: 'challenges',
    title: 'Challenges',
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
    title: 'Useful links',
    loadChildren: () =>
      import('./pages/useful-links-page/useful-links-page.module').then(
        (m) => m.UsefulLinksPageModule
      ),
  },
  {
    path: 'profile',
    title: 'My Profile',
    loadChildren: () =>
      import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
    canActivate: [AdminGuard],
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
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
