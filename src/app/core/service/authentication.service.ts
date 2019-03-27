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
        return new Promise(() => 'b50fa09f92da9afc709738dcfe0398a50df0f400632594ade1abb824f02b8741d3764fc147cba74238a7a038e436fa247e820f103e0d89e0015b293300b546ca');
    }
}
