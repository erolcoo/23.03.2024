import { Injectable } from '@angular/core';
import { UserForAuth } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string): boolean {
    // Проверяваме дали имаме потребител със съответния имейл и парола в локалното съхранение
    const lsUser = localStorage.getItem(this.USER_KEY);
    if (lsUser) {
      const userFromStorage: UserForAuth = JSON.parse(lsUser);
      // Проверяваме дали предоставеният имейл и парола съвпадат с тези на потребителя в локалното съхранение
      if (userFromStorage.email === email && userFromStorage.password === password) {
        // Ако съвпадат, отбелязваме потребителя като влезнал в системата
        this.user = userFromStorage;
        return true;
      }
    }
    // В противен случай, връщаме false, за да покажем, че входът не е успешен
    return false;
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

  register(newUser: UserForAuth){
    const userToRegister: UserForAuth = {
      email: newUser.email,
      password: newUser.password,
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(userToRegister));
    this.user = userToRegister;
}
isUserRegistered(email: string): boolean {
  // Проверяваме дали имаме регистриран потребител със съответния email в локалното съхранение
  const lsUser = localStorage.getItem(this.USER_KEY);
  if (lsUser) {
    const userFromStorage: UserForAuth = JSON.parse(lsUser);
    return userFromStorage.email === email;
  }
  return false;
}
deleteAccount() {
  // Изтриване на потребителя от Local Storage
  localStorage.removeItem(this.USER_KEY);
  // Също така изтрийте и свойството user в услугата
  this.user = undefined;
}

}
