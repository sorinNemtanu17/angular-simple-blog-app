import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundImageDirective } from '@shared/set-background-image.directive';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SetBackgroundImageDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    SetBackgroundImageDirective
  ]
})
export class SharedModule { }
