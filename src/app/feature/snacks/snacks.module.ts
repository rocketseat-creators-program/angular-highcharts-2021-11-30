import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SnacksRoutingModule } from './snacks-routing.module';

import { SnackNewComponent } from './snack-new/snack-new.component';
import { SnackEditComponent } from './snack-edit/snack-edit.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { SnackChartComponent } from './snack-chart/snack-chart.component';

import { ChartModule } from 'angular-highcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    SnackListComponent,
    SnackChartComponent,
    SnackNewComponent,
    SnackEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    SnacksRoutingModule,

    ChartModule,
    NgxCurrencyModule
  ],
  providers: []
})
export class SnacksModule { }
