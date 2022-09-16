import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsefulLinksPageComponent } from './useful-links-page.component';

const routes: Routes = [{ path: '', component: UsefulLinksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsefulLinksPageRoutingModule {}
