import { Accesorio } from "./accesorio";

export class Cañon extends Accesorio {
    private _longitudCanon: number;
    constructor(codArma: string,
        idAccesorio: string,
        nombre: string,
        tipoAccesorio: string,
        precio: number,
        longitudCanon: number
    ) {
        super(codArma,idAccesorio, nombre, tipoAccesorio, precio)
        this._longitudCanon = longitudCanon
    }
    get longitudCanon() {
        return this._longitudCanon
    }
}
