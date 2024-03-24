import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  constructor(private userService: UserService) {}

  onDeleteAccount() {
    const confirmed = window.confirm('Are you sure you want to delete');
    if (confirmed) {
      this.userService.deleteAccount();
    }
  }
}
