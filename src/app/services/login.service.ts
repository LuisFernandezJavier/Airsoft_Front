import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from '../models/arma';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    
    obtengoLOGIN(codLogin: string | null): Observable<any> {
        return this.http.get(this.url+'login/' + codLogin )
    }
    
}