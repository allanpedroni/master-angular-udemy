import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {

  @Input({ required: true }) size!: { width: string, height: string };
  @Output() sizeChange = new EventEmitter<{ width: string, height: string }>();
  //input.required<{width: string, height: string}>();

  onReset() {
    this.sizeChange.emit({
      width: '100',
      height: '100'
    });
  }
}
