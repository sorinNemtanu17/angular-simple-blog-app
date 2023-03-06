import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomePageComponent } from "./home-page.component"

const appHomePageRouting: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomePageComponent }
]


@NgModule({
  imports: [RouterModule.forChild(appHomePageRouting)],
  exports: [RouterModule]
})

export class HomeRouterModule { }
