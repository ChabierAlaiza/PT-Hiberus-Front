import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
