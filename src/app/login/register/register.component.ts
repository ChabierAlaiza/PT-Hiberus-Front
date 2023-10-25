import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private usersService: UsersService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      surname: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {
    const user: User = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.usersService.register(user).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
