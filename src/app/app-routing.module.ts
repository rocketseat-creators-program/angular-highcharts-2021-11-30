import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/snacks"
  }, {
    path: "snacks",
    loadChildren: () => import('./feature/snacks/snacks.module').then(m => m.SnacksModule)
  }, {
    path: "**",
    redirectTo: "/snacks"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
