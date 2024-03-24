import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-window-confirm',
  templateUrl: './delete-window-confirm.component.html',
  styleUrls: ['./delete-window-confirm.component.css']
})
export class DeleteWindowConfirmComponent {
  constructor(private userService: UserService){}

  onDeleteAccount() {
    this.userService.deleteAccount();
  }
}
