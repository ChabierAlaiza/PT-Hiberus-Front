import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    appUrl: string;
    apiUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.appUrl = environment.endpoint;
        this.apiUrl = "/api/auth";
    }

    login(user: User): Observable<any> {
        return this.http.post(this.appUrl + this.apiUrl, user);
    }

}