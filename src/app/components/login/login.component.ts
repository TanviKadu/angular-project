import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' }; // ✅ Ensure user object exists

  onLogin() {
    console.log('User:', this.user);
  }
}
