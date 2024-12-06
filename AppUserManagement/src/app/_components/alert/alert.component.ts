import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type: 'success' | 'warning' | 'danger' = 'success';
  @Input() message: string = '';


  @Input() autoDismiss: boolean = true;
  isVisible: boolean = true;

  ngOnInit() {
    if (this.autoDismiss) {
      setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    }
  }
}
