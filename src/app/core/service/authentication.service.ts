import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }
    init(): Promise<boolean> {
        return new Promise(() => true);
    }
    isAuthUser(): Promise<boolean> {
        return new Promise(() => true);
    }
    requireLogin(redirectUrl): string {
        return 'login?return=' + redirectUrl;
    }
    login(redirectUrl): Promise<boolean> {
        // 'login?return=' + redirectUrl;
        return new Promise(() => true);
    }
    logout(): Promise<boolean> {
        return new Promise(() => true);
    }
    getToken(): Promise<string> {
        return new Promise(() => true);
    }
}
