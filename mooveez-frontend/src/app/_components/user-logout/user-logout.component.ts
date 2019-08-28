import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../_models/users';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent {
  @Input() currentUser: User;
  @Output() logoutEvent: EventEmitter<any> = new EventEmitter<any>();
  private firstName: string;
  private additionalNames: string[];

  constructor() {}

  logout() {
    this.logoutEvent.emit();
  }

  getFirstName() {
    const [firstName, ...additionalNames] = this.currentUser.name.split(' ');
    return firstName;
  }

}
