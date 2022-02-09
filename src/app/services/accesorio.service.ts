import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accesorio } from '../models/accesorio/accesorio';

@Injectable({
    providedIn: 'root'
})
export class AccesorioService {
    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    listarAccesorio(): Observable<any> {
        return this.http.get(this.url + 'listaAccesorios');
    }

    eliminarAccesorio(codArma: string): Observable<any> {
        return this.http.delete(this.url + 'borroAccesorio/' + codArma, { responseType: 'text' })
    }
    creoAccesorio(creoaccesorio: Accesorio): Observable<any> {
        return this.http.post(this.url + 'nuevoAccesorio', creoaccesorio, { responseType: 'text' })
    }
    obtengoAccesorio(codArma: string | null): Observable<any> {
        return this.http.get(this.url+'obtengoAccesorio/' + codArma)
    }
    editoAccesorio(codArma: string, accesorioBd: Accesorio): Observable<any> {
        return this.http.put(this.url + 'modificoAccesorio/' + codArma, accesorioBd, { responseType: 'text' })
    }
}