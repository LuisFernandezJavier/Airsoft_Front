import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from '../models/arma';

@Injectable({
    providedIn: 'root'
})
export class ArmaService {
    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    listarArma(): Observable<any> {
        return this.http.get(this.url + 'listaArmas');
    }

    eliminarArma(codArma: string): Observable<any> {
        return this.http.delete(this.url + 'borroArma/' + codArma, { responseType: 'text' })
    }
    creoArma(creoarma: Arma): Observable<any> {
        return this.http.post(this.url + 'nuevaArma', creoarma, { responseType: 'text' })
    }
    obtengoArma(codArma: string | null): Observable<any> {
        return this.http.get(this.url+'obtengoArma/' + codArma)
    }
    ArmaxAccesorio(codArma: string | null): Observable<any> {
        return this.http.get(this.url+'armaMontada/' + codArma)
    }
    
    editoArma(codArma: string, armaBd: Arma): Observable<any> {
        return this.http.put(this.url + 'modificoArma/' + codArma, armaBd, { responseType: 'text' })
    }
}