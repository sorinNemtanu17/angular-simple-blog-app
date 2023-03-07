import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostsModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
