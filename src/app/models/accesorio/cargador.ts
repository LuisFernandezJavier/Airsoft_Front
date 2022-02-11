import { Accesorio } from "./accesorio";

export class Cargador extends Accesorio {
    private _numeroBalas: number;
    constructor(codArma: string,
        idAccesorio: string,
        nombre: string,
        tipoAccesorio: string,
        precio: number,
        numeroBalas: number
    ) {
        super(codArma,idAccesorio, nombre, tipoAccesorio, precio)
        this._numeroBalas = numeroBalas
    }
    public get numeroBalas() {
        return this._numeroBalas
    }
}