import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicDashboardComponent } from './public-dashboard/public-dashboard.component';


@NgModule({
  declarations: [
    PublicDashboardComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
