import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = fb.group({
      name: [null, Validators.required],
      surname: [''],
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {
    if (this.form.valid) {
      const user: User = {
        name: this.form.value.name,
        surname: this.form.value.surname,
        email: this.form.value.email,
        password: this.form.value.password
      };

      this.usersService.register(user).subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.messageService.add({ severity: 'error', detail: "Error al registrar el usuario" });
        }
      )
    } else {
      this.messageService.add({ severity: 'error', detail: "Error al registrar el usuario" });
    }

  }

}
