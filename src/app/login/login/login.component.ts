import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.loginService.login(user).subscribe(
      data => {
        this.setLocalStorage(data);
        this.router.navigate(['/']);
      },
      error => {
        this.messageService.add({ severity: 'error', detail: error.error.message });
        this.form.reset();
      }
    )
  }

  setLocalStorage(data) {
    localStorage.setItem('name', data.name);
  }

}
