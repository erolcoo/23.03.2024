import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  isUserRegistered: boolean = false; // Дефинираме променлива за проверка на регистриран потребител

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email; // Извличане на email от формата
    const password = form.value.password; // Извличане на парола от формата

    if (!this.userService.isUserRegistered(email)) {
      // Ако потребителят не е регистриран, задаваме флага на false
      this.isUserRegistered = false;
      this.router.navigate(['/register']);
      return;
    }

    // В противен случай, ако потребителят е регистриран, извикваме метода login на userService
    this.userService.login(email, password);
    this.router.navigate(['/home']);
  }
}
