import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';

@NgModule({
  declarations: [
    HorizontalCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalCardComponent
  ],
  providers: []
})
export class SharedModule { }
