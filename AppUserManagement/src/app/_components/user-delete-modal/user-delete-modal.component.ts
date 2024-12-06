import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-delete-modal.component.html',
  styleUrl: './user-delete-modal.component.css'
})
export class UserDeleteModalComponent {
  @Input() isVisible: boolean = false;
  @Input() userName!: string;
  @Output() onClose = new EventEmitter<boolean>();

  close(confirmed: boolean): void {
    this.onClose.emit(confirmed);
  }
}
