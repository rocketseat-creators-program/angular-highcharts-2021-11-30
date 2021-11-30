import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './layout/main/main.component';

import { HeaderComponent } from './layout/header/header.component';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const toastrConfig = {
  maxOpened: 1,
  timeOut: 3000,
  enableHtml: true,
  autoDismiss: true,
  preventDuplicates: true,
  positionClass: 'toast-top-right'
}

const currencyConfig = {
  nullable: false,
  allowZero: true,
  allowNegative: false,
  align: "left",
  prefix: "R$ ",
  suffix: "",
  decimal: ",",
  thousands: ".",
  min: 0,
  max: 200,
  precision: 2
}

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(toastrConfig),
    NgxCurrencyModule.forRoot(currencyConfig)
  ],
  exports: [
    MainComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true }
  ]
})
export class CoreModule { }
