/* eslint-disable @angular-eslint/no-output-native */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() show: boolean;
  @Output() selection = new EventEmitter();

  onClose(value) {
    this.selection.emit(value);
  }
}
