import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserForAuth } from '../types/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const newUser: UserForAuth = { email, password };
    this.userService.register(newUser); // Подаваме целия обект на потребителя за регистрация
    this.router.navigate(['/home']);
}
}
