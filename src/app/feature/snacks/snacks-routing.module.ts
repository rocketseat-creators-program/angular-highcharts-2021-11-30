import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnackEditComponent } from './snack-edit/snack-edit.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { SnackNewComponent } from './snack-new/snack-new.component';

const routes: Routes = [
  {
    path: "",
    component: SnackListComponent
  }, {
    path: "new",
    component: SnackNewComponent
  }, {
    path: ":id",
    component: SnackEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnacksRoutingModule { }
