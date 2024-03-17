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
    // Извикайте метода за изтриване на акаунта от UserService
    this.userService.deleteAccount();
    // Тук можете да направите каквото смятате за необходимо, например да пренасочите потребителя към друга страница или да изведете съобщение за успешно изтриване на акаунта.
  }
}
