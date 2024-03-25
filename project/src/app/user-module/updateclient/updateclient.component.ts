import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { UserForAuth } from '../../types/user';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements UserForAuth {
  email: string = ''; // Променлива за новия имейл
  password: string = ''; // Променлива за новата парола

  constructor(private userService: UserService, private router: Router) {}

  // Метод за актуализиране на информацията за потребителя
  updateUser() {
    // Получаване на стойностите на новия имейл и парола от формата
    const updatedEmail = this.email;
    const updatedPassword = this.password;

    // Извикване на метода за актуализиране на информацията на потребителя
    const updated = this.userService.updateUserInfo(updatedEmail, updatedPassword);

    // Проверка за успешно обновяване на информацията
    if (updated) {
      console.log("User information updated",updatedEmail,updatedPassword);

      // Редиректване към страницата за home след успешна промяна
      this.router.navigate(['/home']);
    } else {
      console.error('User information update failed.'); // Лог на грешка, ако обновяването не е успешно
    }
  }
}
