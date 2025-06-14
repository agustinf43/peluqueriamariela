// auth.service.ts
import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'admin', role: 'admin' },
    {username: "agustin", password:"1234", role:"user"}
  ];

  private currentUser: User | null = null;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  register(username: string, password: string, role: string = 'user'): boolean {
    if (this.users.some(u => u.username === username)) {
      return false; // usuario ya existe
    }
    this.users.push({ username, password, role });
    return true;
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  getRole(): string {
    return this.currentUser?.role || '';
  }
}
