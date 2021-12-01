import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SnacksRoutingModule } from './snacks-routing.module';

import { SnackNewComponent } from './snack-new/snack-new.component';
import { SnackEditComponent } from './snack-edit/snack-edit.component';
import { SnackListComponent } from './snack-list/snack-list.component';

import { ChartModule } from 'angular-highcharts';
import { NgxCurrencyModule } from 'ngx-currency';
import { SnackChartComponent } from './snack-chart/snack-chart.component';

@NgModule({
  declarations: [
    SnackListComponent,
    SnackNewComponent,
    SnackEditComponent,
    SnackChartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SnacksRoutingModule,

    ChartModule,
    NgxCurrencyModule
  ],
  providers: []
})
export class SnacksModule { }
