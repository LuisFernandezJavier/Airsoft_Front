import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirador } from '../models/tirador/tirador'
@Injectable({
    providedIn: 'root'
})
export class TiradorService {
    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }

    listarTiradores(): Observable<any> {
        return this.http.get(this.url + 'listaTiradores');
    }

    eliminarTirador(codArma: string): Observable<any> {
        return this.http.delete(this.url + 'borroTirador/' + codArma, { responseType: 'text' })
    }
    creoTirador(creoTirador: any): Observable<any> {
        return this.http.post(this.url + 'nuevoTirador', creoTirador, { responseType: 'text' })
    }
    obtengoTirador(codArma: string | null): Observable<any> {
        return this.http.get(this.url+'obtengoTirador/' + codArma ,{ responseType: 'text' } )
    }
    obtengoTirador2(codArma: string | null): Observable<any> {
        return this.http.get(this.url+'obtengoTirador/' + codArma)
    }
    editoTirador(codArma: string, tiradorBd: any): Observable<any> {
        return this.http.put(this.url + 'modificoTirador/' + codArma, tiradorBd, { responseType: 'text' })
    }
    calculoKDA(codArma:string| null): Observable<any> {
        return this.http.get(this.url + 'KDA/' + codArma)
    }
    equipoKDA(codEquipo:string| null): Observable<any> {
        return this.http.get(this.url + 'KDAequipo/' + codEquipo)
    }
    listoEquipo(codEquipo:string|null): Observable<any> {
        return this.http.get(this.url + 'listaEquipos/' + codEquipo)
    }
}