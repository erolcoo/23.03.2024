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
    // Проверяваме дали имаме регистриран потребител със съответния имейл в локалното съхранение
    const lsUser = localStorage.getItem(this.USER_KEY);
    if (lsUser) {
      const userFromStorage: UserForAuth = JSON.parse(lsUser);
      // Проверяваме дали предоставеният имейл съвпада с имейла на потребителя в локалното съхранение
      if (userFromStorage.email === email) {
        // Проверяваме дали предоставената парола съвпада с паролата на потребителя в локалното съхранение
        if (userFromStorage.password === password) {
          // Ако съвпадат, отбелязваме потребителя като влязъл в системата
          this.user = userFromStorage;
          return true; // Входът е успешен
        }
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
checkCredentials(email: string, password: string): boolean {
  // Проверяваме дали емейлът е регистриран и дали паролата съвпада
  return this.isUserRegistered(email) && this.login(email, password);
}

updateUserInfo(newEmail: string, newPassword: string): boolean {
  // Проверка дали потребителят е влязъл в системата
  if (this.isLogged) {
    // Обновяваме информацията за потребителя
    this.user!.email = newEmail;
    this.user!.password = newPassword;
    // Запазваме обновените данни в локалното съхранение
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return true; // Успешно обновяване на информацията
  } else {
    // Ако потребителят не е в системата, регистрираме нов потребител
    const newUser: UserForAuth = { email: newEmail, password: newPassword };
    this.register(newUser);
    console.log(newUser);

    return true; // Успешно регистриране на новия потребител и обновяване на информацията
  }
  return false; // Потребителят не е влязъл в системата
}




}
