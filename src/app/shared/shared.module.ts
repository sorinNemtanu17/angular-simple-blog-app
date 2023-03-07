import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundImageDirective } from '@shared/set-background-image.directive';

@NgModule({
  declarations: [SetBackgroundImageDirective],
  imports: [CommonModule],
  exports: [CommonModule, SetBackgroundImageDirective]
})
export class SharedModule {}
