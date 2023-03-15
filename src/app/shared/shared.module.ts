import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundImageDirective } from '@shared/set-background-image.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [SetBackgroundImageDirective, AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    SetBackgroundImageDirective,
    ReactiveFormsModule,
    AlertComponent
  ]
})
export class SharedModule {}
