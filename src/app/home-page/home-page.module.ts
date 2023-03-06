import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { HomePageComponent } from "./home-page.component";
import { HomeRouterModule } from "./home-page.routing";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomeRouterModule,
    SharedModule
  ],

})

export class HomePageModule { }
