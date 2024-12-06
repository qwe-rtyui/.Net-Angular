import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EducationLevel, User } from '../../_models/user';
import { UserActionEvent } from '../../_interfaces/user-action-event.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})

export class UserCardComponent {
  imagePath: string = '/assets/imgs/placeholder_large.png';

  @Input() user: any;

  @Output() userInfoEmitter = new EventEmitter<UserActionEvent>();

  educationLevel(education: number): string {
    var result;
    return result = EducationLevel[education].toString();
  };

  date(date: string): string {
    return new Date(date).toISOString().slice(0, 10);
  };

  callbackDelete(Id: number, Name: string) {
    this.userInfoEmitter.emit({ action: 'delete', Id, Name });
  };

  callbackUpdate(Id: number, Name: string) {
    this.userInfoEmitter.emit({ action: 'update', Id, Name });
  };

}

