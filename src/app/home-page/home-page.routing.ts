import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const appHomePageRouting: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(appHomePageRouting)],
  exports: [RouterModule]
})
export class HomeRouterModule {}
