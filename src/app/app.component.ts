import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public is_logged: boolean = false;

  constructor(
    private router: Router,
    public loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    //nos subscbimos para cuando hace login
    this.loginService.onLoginStateChange.subscribe((status) => {
      this.is_logged = status;
    });


    //compobamos si esta ya logado, salvo que sea la pantalla de login
    if (location.pathname != "/login" && location.pathname != "/") {
      if (!localStorage.getItem('token')) {
        this.router.navigate(['/login']);
      } else {
        this.loginService.setIsLogged(true);
      }
    } else if (location.pathname == "/login") {
      if (localStorage.getItem('token')) {
        this.loginService.setIsLogged(false);
      }
    }
  }
}
