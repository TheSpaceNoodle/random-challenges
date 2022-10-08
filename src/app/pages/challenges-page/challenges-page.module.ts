import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/app/components/components.module';
import { ChallengesPageRoutingModule } from './challenges-page-routing.module';
import { ChallengesPageComponent } from './challenges-page.component';

@NgModule({
  declarations: [ChallengesPageComponent],
  imports: [CommonModule, ChallengesPageRoutingModule, ComponentsModule],
})
export class ChallengesPageModule {}
