import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundImageDirective } from '@shared/set-background-image.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SetBackgroundImageDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, SetBackgroundImageDirective, ReactiveFormsModule]
})
export class SharedModule {}
