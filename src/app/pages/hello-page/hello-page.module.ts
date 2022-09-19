import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { InViewportDirective } from 'src/app/directives/in-viewport.directive';

import { HelloPageRoutingModule } from './hello-page-routing.module';
import { HelloPageComponent } from './hello-page.component';

@NgModule({
  declarations: [HelloPageComponent, InViewportDirective],
  imports: [CommonModule, HelloPageRoutingModule, ComponentsModule],
})
export class HelloPageModule {}
