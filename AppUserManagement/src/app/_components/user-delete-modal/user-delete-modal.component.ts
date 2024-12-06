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
  @Input() userName!: string; // Nome do usuário a ser exibido
  @Output() onClose = new EventEmitter<boolean>(); // Emite se o usuário confirmou ou cancelou

  close(confirmed: boolean): void {
    this.onClose.emit(confirmed); // Envia true para confirmar ou false para cancelar
  }
}
