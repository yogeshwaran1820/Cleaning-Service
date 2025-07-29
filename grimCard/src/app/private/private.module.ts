import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateDashboardComponent } from './private-dashboard/private-dashboard.component';


@NgModule({
  declarations: [
    PrivateDashboardComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
