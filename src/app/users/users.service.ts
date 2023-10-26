import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    appUrl: string;
    apiUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.appUrl = environment.endpoint;
        this.apiUrl = "/api/users";
    }

    getAll(): Observable<any> {
        return this.http.get(this.appUrl + this.apiUrl);
    }

    get(userId: number): Observable<any> {
        return this.http.get(this.appUrl + this.apiUrl + '/' + userId);
    }

    save(userId: number, user: User) {
        return this.http.put(this.appUrl + this.apiUrl + '/' + userId, user);
    }

    register(user: User): Observable<any> {
        return this.http.post(this.appUrl + this.apiUrl, user);
    }

}